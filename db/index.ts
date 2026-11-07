/**
 * Shared database configuration for Vercel deployments.
 * Enquiry queries use the Neon serverless driver in db/enquiries.ts.
 */
export function getDatabaseUrl() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is unavailable. Connect a Postgres database to this Vercel project.",
    );
  }

  return connectionString;
}
