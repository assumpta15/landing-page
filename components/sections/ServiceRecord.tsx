import { BearingMark } from "@/components/ui/BearingMark";
import { DataRow } from "@/components/ui/DataRow";
import { MediaReveal } from "@/components/ui/MediaReveal";
import { OperationalFrame } from "@/components/ui/PortraitFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profileRows } from "@/lib/data";

export function ServiceRecord() {
  return (
    <section id="service-record" className="service-surface section-spacing">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel label="Service Record / 01" />
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

        <div className="mt-14 grid items-start gap-10 lg:mt-20 lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,1.08fr)] lg:gap-16">
          <div>
            <Reveal>
              <p className="technical-label text-gold-light">
                Executive dossier / verified scope
              </p>
            </Reveal>
            <div className="mt-7">
              {profileRows.map((row, index) => (
                <Reveal key={row.label} delay={0.1 + index * 0.07}>
                  <DataRow label={row.label} value={row.value} />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative lg:pt-10">
            <MediaReveal delay={0.14}>
              <OperationalFrame />
            </MediaReveal>
            <BearingMark
              bearing="118"
              label="Acquisition strategy"
              className="relative -mt-px ml-auto w-[76%] border border-white/10 bg-[#0b171f] px-6 py-7 sm:w-[62%] lg:-mt-12 lg:mr-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
