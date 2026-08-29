import { ArrowRight, MoveUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { capabilityItems } from "@/lib/data";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="capabilities-surface section-spacing relative overflow-hidden"
    >
      <div className="pointer-events-none absolute right-[-0.04em] top-[-0.2em] font-mono text-[clamp(12rem,30vw,34rem)] leading-none text-white/[0.018]">
        04
      </div>

      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(240px,0.52fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel label="Capabilities / 04" />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="technical-label mt-8 max-w-[24rem] leading-[1.8] text-foreground/55">
                Four focused lanes. One standard of execution.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.08}>
              <h2 className="capabilities-title max-w-[14ch] text-foreground">
                <span className="block font-[family-name:var(--font-display)] text-[clamp(2.7rem,5vw,5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.02em]">
                  Where experience
                </span>
                <span className="mt-1 block font-[family-name:var(--font-editorial)] text-[clamp(3.2rem,5.8vw,6rem)] font-normal leading-[0.9] tracking-[-0.025em] text-gold-light">
                  makes the difference.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="body-copy mt-7 max-w-[42rem]">
                Senior-level support where programs are most exposed: unclear
                ownership, competing priorities, technical friction, and
                decisions that cannot afford to drift.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="capability-rows mt-14 border-t border-white/10 lg:mt-20">
          {capabilityItems.map((item, index) => (
            <Reveal key={item.title} delay={0.12 + index * 0.07}>
              <article className="capability-row group relative grid gap-5 overflow-hidden border-b border-white/10 py-8 sm:py-10 lg:grid-cols-[6rem_minmax(240px,0.85fr)_minmax(300px,1.15fr)_10rem] lg:items-center lg:gap-8">
                <span className="capability-row-accent absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-gold-light transition-transform duration-500 group-hover:scale-y-100" />

                <div className="flex items-center justify-between lg:block">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-foreground/38">
                    Area
                  </p>
                  <p className="mt-2 font-mono text-2xl text-foreground/32 transition-colors duration-300 group-hover:text-gold-light lg:text-3xl">
                    {item.index}
                  </p>
                </div>

                <h3 className="max-w-[16ch] font-[family-name:var(--font-display)] text-[2rem] font-semibold uppercase leading-[0.98] tracking-[-0.015em] text-foreground transition-transform duration-500 group-hover:translate-x-2 sm:text-[2.5rem]">
                  {item.title}
                </h3>

                <p className="body-copy max-w-[38rem] text-[0.98rem] lg:text-base">
                  {item.description}
                </p>

                <div className="flex items-center justify-between gap-4 border-t border-white/8 pt-5 lg:block lg:border-l lg:border-t-0 lg:py-2 lg:pl-7">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-foreground/38">
                    Mission effect
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-sm text-foreground/78">
                    <span>{item.outcome}</span>
                    <MoveUpRight
                      aria-hidden="true"
                      className="text-gold-light transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      size={14}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-col gap-6 border border-white/10 bg-white/[0.025] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="technical-label text-gold-light">Engagement rhythm</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground/66 sm:gap-x-7">
              <span>Assess</span>
              <ArrowRight aria-hidden="true" className="text-gold-light/70" size={15} />
              <span>Align</span>
              <ArrowRight aria-hidden="true" className="text-gold-light/70" size={15} />
              <span>Execute</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
