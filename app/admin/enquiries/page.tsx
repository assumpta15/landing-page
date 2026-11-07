import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { listEnquiries } from "@/db/enquiries";

export const dynamic = "force-dynamic";

export default async function EnquiriesAdminPage() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "";
  const isLocal = host.startsWith("localhost:") || host.startsWith("127.0.0.1:");

  // Keep customer enquiry data out of the public deployed site until a real
  // authenticated admin surface is added.
  if (!isLocal) notFound();

  const rows = await listEnquiries();

  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-3 border-b border-white/10 pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="technical-label text-gold-light">Local Database / D1</p>
            <h1 className="mt-3 font-[family-name:var(--font-editorial)] text-5xl leading-none">
              Enquiries
            </h1>
          </div>
          <p className="text-sm text-foreground/55">{rows.length} stored submission{rows.length === 1 ? "" : "s"}</p>
        </div>

        {rows.length === 0 ? (
          <div className="border border-white/10 bg-surface p-8 text-foreground/65">
            No enquiries yet. Submit the contact form once, then refresh this page.
          </div>
        ) : (
          <div className="overflow-x-auto border border-white/10 bg-surface">
            <table className="w-full min-w-[1000px] border-collapse text-left text-sm">
              <thead className="border-b border-white/10 bg-surface-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-foreground/55">
                <tr>
                  <th className="px-5 py-4">Reference</th>
                  <th className="px-5 py-4">Created</th>
                  <th className="px-5 py-4">Name</th>
                  <th className="px-5 py-4">Organization</th>
                  <th className="px-5 py-4">Email</th>
                  <th className="px-5 py-4">Type</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Message</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b border-white/[0.07] align-top last:border-0">
                    <td className="px-5 py-5 font-mono text-xs text-gold-light">{row.referenceNumber}</td>
                    <td className="px-5 py-5 whitespace-nowrap text-foreground/60">{row.createdAt}</td>
                    <td className="px-5 py-5">{row.name}</td>
                    <td className="px-5 py-5">{row.organization}</td>
                    <td className="px-5 py-5 text-foreground/70">{row.workEmail}</td>
                    <td className="px-5 py-5">{row.engagementType}</td>
                    <td className="px-5 py-5 font-mono text-xs text-gold-light">{row.status}</td>
                    <td className="max-w-md px-5 py-5 leading-6 text-foreground/70">{row.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
