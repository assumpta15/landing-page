import { DataRow } from "@/components/ui/DataRow";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profileRows } from "@/lib/data";

export function ServiceRecord() {
  return (
    <section id="service-record" className="dossier-surface section-spacing">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel label="Principal Record" />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="technical-label mt-8 max-w-[24rem] leading-[1.8] text-foreground/50">
                Command-tested perspective for complex organizations.
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.08}>
              <h2 className="section-title max-w-[15ch]">
                A career built where accountability is absolute.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="body-copy mt-7 max-w-[46rem]">
                Thirty-two years in the U.S. Navy shaped an operating model
                built on clear decisions, disciplined execution, and direct
                ownership. That same standard now serves defense and aerospace
                leaders navigating high-consequence programs.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.7fr)] lg:mt-20">
          <div className="bg-[#09141d] px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
            <Reveal>
              <p className="technical-label text-gold-light">Service dossier / verified scope</p>
            </Reveal>
            <div className="mt-7">
              {profileRows.map((row, index) => (
                <Reveal key={row.label} delay={0.1 + index * 0.07}>
                  <DataRow label={row.label} value={row.value} />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.14}>
            <aside className="principal-dossier flex h-full min-h-[420px] flex-col justify-between overflow-hidden px-7 py-8 sm:px-9 lg:py-10">
              <div className="flex items-center justify-between">
                <p className="technical-label text-foreground/46">Principal / 001</p>
                <ShieldCheck aria-hidden="true" className="text-gold-light" size={20} />
              </div>
              <div>
                <p className="font-[family-name:var(--font-heading)] text-[9rem] font-semibold leading-[0.72] tracking-[-0.06em] text-foreground/95 sm:text-[11rem]">
                  MK
                </p>
                <div className="mt-10 h-px bg-gradient-to-r from-gold-light/75 to-transparent" />
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.24em] text-gold-light">
                  U.S. Navy / Retired
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-foreground/38">Tenure</p>
                  <p className="mt-2 text-sm text-foreground/82">32 years</p>
                </div>
                <div>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-foreground/38">Status</p>
                  <p className="mt-2 text-sm text-foreground/82">Select mandates</p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
