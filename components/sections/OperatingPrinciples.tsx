import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { principles } from "@/lib/data";

export function OperatingPrinciples() {
  return (
    <section className="section-spacing bg-[#141412]/96">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.2fr)]">
          <div>
            <Reveal>
              <SectionLabel label="Operating Principles" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-title mt-6 max-w-[12ch]">
                The short version.
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-px bg-[var(--border)] md:grid-cols-2">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={0.1 + index * 0.06}>
                <article className="h-full bg-[#141412] px-6 py-8 sm:px-7">
                  <p className="font-[family-name:var(--font-heading)] text-4xl leading-none text-foreground sm:text-5xl">
                    {item.title}
                  </p>
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
