import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { principles } from "@/lib/data";

export function OperatingPrinciples() {
  return (
    <section className="principles-surface section-spacing">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel label="Operating Principles" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-title mt-7 max-w-[12ch]">
                Built to reduce uncertainty.
              </h2>
            </Reveal>
          </div>

          <div className="border-t border-white/10">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={0.1 + index * 0.06}>
                <article className="grid gap-4 border-b border-white/10 py-7 sm:grid-cols-[3rem_minmax(180px,0.75fr)_minmax(0,1fr)] sm:items-start sm:gap-7 sm:py-8">
                  <p className="font-mono text-xs text-gold-light">0{index + 1}</p>
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl font-semibold uppercase leading-none tracking-[-0.015em] text-foreground sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="body-copy text-base">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
