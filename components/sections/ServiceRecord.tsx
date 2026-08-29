import { DataRow } from "@/components/ui/DataRow";
import { PortraitFrame } from "@/components/ui/PortraitFrame";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profileRows } from "@/lib/data";

export function ServiceRecord() {
  return (
    <section id="service-record" className="section-spacing bg-[#171715]/96">
      <div className="section-shell grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:gap-16">
        <div>
          <Reveal>
            <SectionLabel label="Service Record" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title mt-6 max-w-[12ch]">Mark</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="body-copy mt-7 max-w-[44rem]">
              32 years in the U.S. Navy, retired - commands and postings that
              demanded clear decisions when the stakes were real and the
              timeline was not negotiable. Now on the private side, leading
              defense and aerospace engagements where the same instincts apply:
              steady leadership, disciplined execution, and zero patience for
              scope creep.
            </p>
          </Reveal>

          <div className="mt-10">
            {profileRows.map((row, index) => (
              <Reveal key={row.label} delay={0.18 + index * 0.08}>
                <DataRow label={row.label} value={row.value} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.14}>
          <div className="flex flex-col gap-5 lg:pt-12">
            <PortraitFrame />
            <p className="technical-label px-2 text-foreground/56">
              On-site or working setting
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
