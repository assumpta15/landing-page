import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { principles } from "@/lib/data";

export function OperatingPrinciples() {
  return (
    <section className="principles-surface mark-section principles-luxury">
      <div className="section-shell mark-anchor-grid principles-luxury-grid">
        <div className="mark-anchor principles-luxury-anchor">
          <Reveal>
            <SectionLabel label="Operating Principles / 04" />
          </Reveal>

          <Reveal delay={0.05}>
            <p className="section-kicker-copy principles-luxury-kicker">
              A practical operating code for work where ambiguity is costly
              and alignment cannot be assumed.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="editorial-heading principles-luxury-title">
              <span className="principles-luxury-title-line">Clear thinking</span>
              <span className="principles-luxury-title-line">under pressure.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mark-progression principles-luxury-progression">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={0.08 + index * 0.05}>
              <article className="mark-module principle-luxury-module">
                <p className="mark-module-number">0{index + 1}</p>
                <div className="mark-module-copy">
                  <h3 className="principle-title principle-luxury-title">{item.title}</h3>
                  <p className="principle-description principle-luxury-copy">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
