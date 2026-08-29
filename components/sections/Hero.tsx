import { ArrowDownRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="hero-surface site-shell min-h-screen pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-[16%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />

      <div className="section-shell flex min-h-[calc(100vh-7rem)] flex-col justify-between gap-14 pb-10">
        <div className="grid items-end gap-14 pt-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.7fr)]">
          <div className="max-w-[760px]">
            <Reveal>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-indicator" />
                <p className="technical-label text-gold-light">
                  U.S. Navy, Ret. | 32 Years of Service
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="editorial-title max-w-[10ch] text-foreground">
                Command Experience. Contractor Results.
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="body-copy mt-8 max-w-[38rem] text-[1.06rem] sm:text-[1.15rem]">
                Three decades leading complex operations under real pressure -
                now applied to defense and aerospace programs that need someone
                who has actually run one, not just studied one.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button href="#contact" variant="primary">
                  Request a Capabilities Brief
                </Button>
                <Button href="#service-record" variant="secondary">
                  View Service Record
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <p className="technical-label mt-7 text-foreground/58">
                SAM.GOV REGISTERED | CLEARANCE AVAILABLE ON REQUEST
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.28}>
            <aside className="ambient-panel relative overflow-hidden rounded-sm px-6 py-7 sm:px-7">
              <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/80 to-transparent" />
              <div className="flex items-center justify-between">
                <SectionLabel label="Mission Status" />
                <ShieldCheck className="text-gold-light" size={18} />
              </div>
              <p className="mt-5 max-w-[16ch] font-[family-name:var(--font-heading)] text-4xl leading-none text-foreground">
                Available for select engagements.
              </p>
              <p className="mt-5 body-copy text-sm">
                Advisory mandates, acquisition strategy support, and program
                leadership assignments with real operational consequence.
              </p>

              <div className="mt-7 space-y-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <p className="technical-label text-foreground/52">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-lg text-foreground/90">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>

        <Reveal delay={0.38}>
          <div className="flex flex-col gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="technical-label">Current Bearing</p>
              <p className="mt-2 font-mono text-xl uppercase tracking-[0.2em] text-gold-light">
                118° | Acquisitions Strategy
              </p>
            </div>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 text-sm text-foreground/68 hover:text-foreground"
            >
              Continue to capabilities
              <ArrowDownRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
