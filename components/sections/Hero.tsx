import { ArrowDownRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="hero-surface site-shell min-h-screen pt-28 md:pt-32">
      <div className="hero-designation pointer-events-none absolute right-6 top-28 hidden text-right lg:block">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-foreground/24">
          Independent advisory / 001
        </p>
        <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-foreground/24">
          Defense systems / acquisition / command
        </p>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />

      <div className="section-shell flex min-h-[calc(100vh-7rem)] flex-col justify-end gap-14 pb-10">
        <div className="grid items-end gap-12 pb-5 pt-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.6fr)] lg:gap-16">
          <div className="max-w-[900px]">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-8 w-px bg-gold-light" />
                <p className="technical-label text-gold-light">
                  Strategic Advisory / Defense & Aerospace
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="editorial-title max-w-[11ch] text-foreground">
                Command clarity for mission-critical programs.
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="body-copy mt-8 max-w-[42rem] text-[1.06rem] sm:text-[1.15rem]">
                Senior leadership for defense and aerospace programs where
                acquisition, systems integration, and execution must stay
                aligned under pressure.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="#contact" variant="primary">
                  Request a Private Briefing
                </Button>
                <Button href="#service-record" variant="secondary">
                  Review Credentials
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <p className="technical-label mt-7 text-foreground/58">
                U.S. NAVY, RET. / 32 YEARS / CLEARANCE AVAILABLE ON REQUEST
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.28}>
            <aside className="executive-panel relative overflow-hidden px-6 py-7 sm:px-7">
              <div className="flex items-center justify-between">
                <SectionLabel label="Engagement Profile" />
                <ShieldCheck className="text-gold-light" size={18} />
              </div>
              <p className="mt-8 font-[family-name:var(--font-heading)] text-7xl font-semibold leading-none text-foreground">
                32<span className="ml-2 text-2xl text-gold-light">YRS</span>
              </p>
              <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-foreground/45">
                Command and operational service
              </p>

              <div className="mt-8 space-y-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <p className="technical-label text-foreground/52">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/84">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>

        <Reveal delay={0.38}>
          <div className="hero-assurance-bar grid border-y border-white/10 sm:grid-cols-[1fr_1fr_1fr_auto]">
            {[
              ["01", "Program Leadership"],
              ["02", "Acquisition Strategy"],
              ["03", "Systems Integration"],
            ].map(([code, label]) => (
              <div key={code} className="flex items-center gap-4 border-b border-white/10 px-5 py-5 sm:border-b-0 sm:border-r">
                <span className="font-mono text-xs text-gold-light">{code}</span>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground/66">
                  {label}
                </span>
              </div>
            ))}
            <a
              href="#capabilities"
              className="inline-flex items-center justify-between gap-5 px-5 py-5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground/62 hover:text-foreground"
            >
              View mandate
              <ArrowDownRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
