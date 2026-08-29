import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experienceItems } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-spacing">
      <div className="section-shell warm-panel overflow-hidden rounded-sm px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)]">
          <div>
            <Reveal>
              <SectionLabel label="Mission Experience" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-title mt-6 max-w-[12ch]">
                Built for environments where failure has consequences.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="body-copy mt-7 max-w-[31rem]">
                The working style is simple: clarify the mission, align the
                people who matter, and drive decisions before cost, risk, and
                schedule start negotiating against each other.
              </p>
            </Reveal>
          </div>

          <div className="space-y-6">
            {experienceItems.map((item, index) => (
              <Reveal key={item.title} delay={0.12 + index * 0.07}>
                <div className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                  <p className="font-mono text-sm uppercase tracking-[0.26em] text-gold-light">
                    {item.code}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-heading)] text-[2rem] leading-none text-foreground sm:text-[2.35rem]">
                    {item.title}
                  </h3>
                  <p className="body-copy mt-4 max-w-[34rem] text-base">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.35}>
          <div className="mt-12 border-t border-[var(--border)] pt-6">
            <p className="technical-label">Current Bearing</p>
            <p className="mt-2 font-mono text-lg uppercase tracking-[0.22em] text-gold-light">
              205° | Systems Integration
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
