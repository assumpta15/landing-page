import { DataRow } from "@/components/ui/DataRow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { profileRows } from "@/lib/data";

export function ServiceRecord() {
  return (
    <section id="service-record" className="service-surface mark-section service-record-luxury">
      <div className="section-shell mark-anchor-grid service-record-luxury-grid">
        <div className="mark-anchor service-record-anchor">
          <Reveal>
            <SectionLabel label="Service Record / 01" />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="service-record-title service-record-luxury-title">
              <span>A career built where</span>
              <span>accountability is absolute.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="body-copy service-record-summary service-record-luxury-summary">
              Thirty-two years in the U.S. Navy shaped an operating model
              built on clear decisions, disciplined execution, and direct
              ownership. That same standard now serves defense and aerospace
              leaders navigating high-consequence programs.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="section-kicker-copy service-record-luxury-kicker">
              Command-tested perspective for complex organizations.
            </p>
          </Reveal>
        </div>

        <div className="service-dossier service-record-dossier-panel">
          <Reveal>
            <p className="technical-label text-gold-light service-record-dossier-heading">
              Executive dossier / verified scope
            </p>
          </Reveal>

          <div className="service-record-rows service-record-rows-right service-dossier-rows">
            {profileRows.map((row, index) => (
              <Reveal key={row.label} delay={0.08 + index * 0.06}>
                <DataRow label={row.label} value={row.value} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
