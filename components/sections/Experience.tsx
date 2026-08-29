import Image from "next/image";
import { BearingMark } from "@/components/ui/BearingMark";
import { MediaReveal } from "@/components/ui/MediaReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experienceItems } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="experience-surface section-spacing">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-end lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel label="Operating Experience / 03" />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="technical-label mt-8 max-w-[22rem] leading-[1.8] text-foreground/48">
                From mission definition through delivery and recovery.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <h2 className="experience-heading max-w-[15ch] font-[family-name:var(--font-editorial)] text-[clamp(3.2rem,5vw,5.3rem)] font-normal leading-[0.92] tracking-[-0.03em] text-foreground">
              Depth where decisions carry weight.
            </h2>
          </Reveal>
        </div>

        <MediaReveal delay={0.1} className="mt-14 lg:mt-20">
          <div className="experience-image relative min-h-[520px] overflow-hidden border border-white/10 lg:min-h-[640px]">
            <Image
              src="/experience-aerospace.jpg"
              alt="Aerospace systems integration environment inside a dark industrial hangar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1440px"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,24,0.9)_0%,rgba(7,16,24,0.42)_48%,rgba(7,16,24,0.2)_100%),linear-gradient(0deg,rgba(7,16,24,0.88)_0%,transparent_48%)]" />
            <div className="absolute inset-x-0 bottom-0 grid gap-8 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:p-14">
              <div className="max-w-[42rem]">
                <p className="technical-label text-gold-light">
                  Systems / People / Decisions
                </p>
                <p className="mt-5 font-[family-name:var(--font-editorial)] text-[clamp(2.7rem,5vw,5.4rem)] leading-[0.92] tracking-[-0.025em] text-foreground">
                  Mission systems are only as strong as the decisions behind them.
                </p>
              </div>
              <BearingMark
                bearing="205"
                label="Systems integration"
                className="border-l border-white/14 px-7 py-5 lg:justify-self-end"
              />
            </div>
          </div>
        </MediaReveal>

        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:mt-16">
          {experienceItems.map((item, index) => (
            <Reveal key={item.title} delay={0.08 + index * 0.06}>
              <article className="experience-entry grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-[3rem_1fr]">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-gold-light">
                  {item.code}
                </p>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[2rem] font-semibold uppercase leading-none tracking-[-0.01em] text-foreground sm:text-[2.35rem]">
                    {item.title}
                  </h3>
                  <p className="body-copy mt-4 max-w-[34rem] text-base">
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
