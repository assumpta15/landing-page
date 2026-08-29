import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { principles } from "@/lib/data";

export function OperatingPrinciples() {
  return (
    <section className="principles-surface section-spacing">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-24">
          <div>
            <Reveal>
              <SectionLabel label="Operating Principles" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="principles-heading mt-7 max-w-[11ch] font-[family-name:var(--font-display)] text-[clamp(2.8rem,4.5vw,4.7rem)] font-semibold uppercase leading-[0.9] tracking-[-0.02em] text-foreground">
                Clear thinking under pressure.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="body-copy mt-7 max-w-[26rem] text-base">
                A practical operating code for work where ambiguity is costly
                and alignment cannot be assumed.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={0.1 + index * 0.06}>
                <article className="principle-entry border-t border-white/10 pt-6">
                  <p className="font-mono text-xs text-gold-light">0{index + 1}</p>
                  <h3 className="mt-7 font-[family-name:var(--font-editorial)] text-[2.7rem] font-medium leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.2rem]">
                    {item.title}
                  </h3>
                  <p className="body-copy mt-5 text-base">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
