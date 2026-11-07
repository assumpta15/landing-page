import { neon } from "@neondatabase/serverless";
import type { EnquiryInput } from "@/lib/enquiries";

let schemaReady = false;

function getSql() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is unavailable. Connect a Postgres database (Neon is recommended on Vercel) and expose its DATABASE_URL environment variable.",
    );
  }

  return neon(connectionString);
}

export async function ensureEnquiriesTable() {
  if (schemaReady) return;

  const sql = getSql();

  await sql`
    CREATE TABLE IF NOT EXISTS enquiries (
      id TEXT PRIMARY KEY NOT NULL,
      reference_number TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      work_email TEXT NOT NULL,
      organization TEXT NOT NULL,
      phone TEXT,
      engagement_type TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'NEW',
      created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS enquiries_created_at_idx
    ON enquiries(created_at)
  `;

  await sql`
    CREATE INDEX IF NOT EXISTS enquiries_status_idx
    ON enquiries(status)
  `;

  schemaReady = true;
}

function makeReferenceNumber() {
  const now = new Date();
  const stamp = now.toISOString().slice(0, 10).replaceAll("-", "");
  const token = crypto.randomUUID().replaceAll("-", "").slice(0, 6).toUpperCase();
  return `ENQ-${stamp}-${token}`;
}

export async function createEnquiry(input: EnquiryInput) {
  await ensureEnquiriesTable();
  const sql = getSql();

  const record = {
    id: crypto.randomUUID(),
    referenceNumber: makeReferenceNumber(),
    name: input.name,
    workEmail: input.workEmail.toLowerCase(),
    organization: input.organization,
    phone: input.phone || null,
    engagementType: input.engagementType,
    message: input.message,
    status: "NEW",
  };

  await sql`
    INSERT INTO enquiries (
      id,
      reference_number,
      name,
      work_email,
      organization,
      phone,
      engagement_type,
      message,
      status
    ) VALUES (
      ${record.id},
      ${record.referenceNumber},
      ${record.name},
      ${record.workEmail},
      ${record.organization},
      ${record.phone},
      ${record.engagementType},
      ${record.message},
      ${record.status}
    )
  `;

  return record;
}

type EnquiryRow = {
  id: string;
  reference_number: string;
  name: string;
  work_email: string;
  organization: string;
  phone: string | null;
  engagement_type: string;
  message: string;
  status: string;
  created_at: Date | string;
  updated_at: Date | string;
};

export async function listEnquiries() {
  await ensureEnquiriesTable();
  const sql = getSql();

  const rows = await sql`
    SELECT
      id,
      reference_number,
      name,
      work_email,
      organization,
      phone,
      engagement_type,
      message,
      status,
      created_at,
      updated_at
    FROM enquiries
    ORDER BY created_at DESC
  ` as EnquiryRow[];

  return rows.map((row) => ({
    id: row.id,
    referenceNumber: row.reference_number,
    name: row.name,
    workEmail: row.work_email,
    organization: row.organization,
    phone: row.phone,
    engagementType: row.engagement_type,
    message: row.message,
    status: row.status,
    createdAt:
      row.created_at instanceof Date ? row.created_at.toISOString() : String(row.created_at),
    updatedAt:
      row.updated_at instanceof Date ? row.updated_at.toISOString() : String(row.updated_at),
  }));
}
