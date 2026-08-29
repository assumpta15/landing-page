import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BearingMark } from "@/components/ui/BearingMark";
import { MediaReveal } from "@/components/ui/MediaReveal";
import { PortraitFrame } from "@/components/ui/PortraitFrame";
import { Reveal } from "@/components/ui/Reveal";

const heroDisciplines = [
  "Program leadership",
  "Systems integration",
  "Executive advisory",
];

export function Hero() {
  return (
    <section id="top" className="hero-surface site-shell min-h-screen pt-28 md:pt-32">
      <div className="hero-designation pointer-events-none absolute right-8 top-28 hidden text-right xl:block">
        <p className="font-mono text-[0.58rem] uppercase tracking-[0.26em] text-foreground/24">
          Independent advisory / 001
        </p>
        <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.26em] text-foreground/24">
          Defense systems / acquisition / command
        </p>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />

      <div className="section-shell flex min-h-[calc(100vh-7rem)] flex-col justify-end gap-12 pb-10">
        <div className="grid items-center gap-12 pb-4 pt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.7fr)] lg:gap-16 xl:gap-24">
          <div className="max-w-[840px]">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-8 w-px bg-gold-light" />
                <p className="technical-label text-gold-light">
                  Strategic Advisory / Defense & Aerospace
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="hero-title max-w-[11ch] text-foreground">
                <span className="hero-title-serif block">Command experience.</span>
                <span className="hero-title-sans mt-1 block">Contractor results.</span>
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
                  View Service Record
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <p className="technical-label mt-7 text-foreground/58">
                U.S. NAVY, RET. / 32 YEARS / CLEARANCE AVAILABLE ON REQUEST
              </p>
            </Reveal>
          </div>

          <MediaReveal
            delay={0.18}
            className="mx-auto w-full max-w-[480px] lg:mx-0 lg:justify-self-end"
          >
            <PortraitFrame />
          </MediaReveal>
        </div>

        <Reveal delay={0.38}>
          <div className="hero-bearing-row grid items-stretch border-y border-white/10 md:grid-cols-[minmax(280px,0.65fr)_1fr_auto]">
            <BearingMark
              bearing="118"
              label="Acquisition strategy"
              className="min-h-40 border-b border-white/10 px-5 py-6 md:border-b-0 md:border-r"
            />
            <div className="grid grid-cols-2 items-center gap-x-8 gap-y-4 border-b border-white/10 px-5 py-6 md:border-b-0 md:border-r sm:grid-cols-3">
              {heroDisciplines.map((label, index) => (
                <div key={label}>
                  <p className="font-mono text-[0.58rem] text-gold-light">
                    0{index + 1}
                  </p>
                  <p className="mt-2 font-mono text-[0.58rem] uppercase leading-relaxed tracking-[0.16em] text-foreground/54">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-between gap-5 px-6 py-6 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-foreground/62 hover:text-foreground"
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
