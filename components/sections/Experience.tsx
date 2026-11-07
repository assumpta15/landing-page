import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experienceItems } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="experience-surface mark-section experience-luxury">
      <div className="section-shell mark-anchor-grid experience-luxury-grid">
        <div className="mark-anchor experience-luxury-anchor">
          <div className="experience-luxury-meta">
            <Reveal>
              <SectionLabel label="Operating Experience / 03" />
            </Reveal>
            <Reveal delay={0.04}>
              <p className="section-kicker-copy experience-luxury-kicker">
                From mission definition through delivery and recovery.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.07}>
            <figure className="experience-luxury-media">
              <img
                src="/experience-aerospace.jpg"
                alt="Aerospace operations environment"
                className="experience-luxury-image"
              />
              <figcaption className="experience-luxury-caption">
                Operational perspective / mission systems
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="experience-luxury-content">
          <Reveal delay={0.06}>
            <h2 className="experience-editorial-heading experience-luxury-title">
              <span className="experience-luxury-title-line">Depth where decisions</span>
              <span className="experience-luxury-title-line">carry weight.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="experience-editorial-summary experience-luxury-summary">
              Senior operating experience across complex delivery, government acquisition,
              and systems integration—where accountability, timing, and decision quality
              directly shape mission outcomes.
            </p>
          </Reveal>

          <div className="mark-progression experience-luxury-progression">
            {experienceItems.map((item, index) => (
              <Reveal key={item.title} delay={0.08 + index * 0.05}>
                <article className="mark-module experience-luxury-module">
                  <p className="mark-module-number">{item.code}</p>
                  <div className="mark-module-copy">
                    <h3 className="experience-editorial-title experience-luxury-module-title">
                      {item.title}
                    </h3>
                    <p className="experience-editorial-copy experience-luxury-module-copy">
                      {item.description}
                    </p>
                    <p className="experience-luxury-marker">
                      {index === 0 ? "Plan to delivery" : index === 1 ? "Need to award" : "Interface to fielding"}
                      <span aria-hidden="true">↗</span>
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
