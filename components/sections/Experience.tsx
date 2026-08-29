import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experienceItems } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="experience-surface section-spacing">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel label="Operating Experience" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-title mt-7 max-w-[13ch]">
                Experience calibrated for consequence.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="body-copy max-w-[38rem] lg:justify-self-end">
              The operating model is direct: clarify the mission, align the
              decision-makers, and act before cost, risk, and schedule begin
              negotiating against one another.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:mt-20">
            {experienceItems.map((item, index) => (
              <Reveal key={item.title} delay={0.12 + index * 0.07}>
                <article className="experience-card group relative h-full overflow-hidden bg-[#0b1721] px-7 py-9 sm:px-9 sm:py-10">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-gold-light">{item.code}</p>
                  <h3 className="mt-8 max-w-[15ch] font-[family-name:var(--font-heading)] text-[2.3rem] font-semibold uppercase leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[2.8rem]">
                    {item.title}
                  </h3>
                  <p className="body-copy mt-4 max-w-[34rem] text-base">
                    {item.description}
                  </p>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-light transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            ))}
        </div>

        <Reveal delay={0.35}>
          <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="technical-label">Operating range</p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-light">
              Strategy / Integration / Recovery / Delivery
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
