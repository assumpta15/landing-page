import { MoveUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { capabilityItems } from "@/lib/data";

export function Capabilities() {
  return (
    <section id="capabilities" className="capabilities-surface mark-section capabilities-luxury">
      <div className="section-shell mark-anchor-grid capabilities-luxury-grid">
        <div className="mark-anchor capabilities-luxury-anchor">
          <Reveal>
            <SectionLabel label="Capabilities / 02" />
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="capabilities-heading capabilities-luxury-title">
              Capabilities built for high-consequence programs.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="body-copy capabilities-summary capabilities-luxury-summary">
              Senior-level support where programs are most exposed: unclear
              ownership, competing priorities, technical friction, and
              decisions that cannot afford to drift.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="section-kicker-copy capabilities-luxury-kicker">
              Four focused lanes. One standard of execution.
            </p>
          </Reveal>
        </div>

        <div className="mark-progression capabilities-luxury-progression">
          {capabilityItems.map((item, index) => (
            <Reveal key={item.title} delay={0.08 + index * 0.05}>
              <article className="mark-module capability-luxury-module group">
                <p className="mark-module-number">{item.index}</p>
                <div className="mark-module-copy">
                  <h3 className="capability-title capability-luxury-module-title">
                    {item.title}
                  </h3>
                  <p className="capability-description capability-luxury-module-copy">
                    {item.description}
                  </p>
                  <p className="capability-luxury-outcome">
                    <span>{item.outcome}</span>
                    <MoveUpRight aria-hidden="true" size={13} />
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
