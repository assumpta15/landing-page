import Image from "next/image";
import { MediaReveal } from "@/components/ui/MediaReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experienceItems } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="experience-surface experience-spread">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(260px,0.62fr)_minmax(0,1.38fr)] lg:items-end lg:gap-16">
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

        <div className="mt-10 grid items-stretch lg:mt-14 lg:grid-cols-[minmax(0,1.52fr)_minmax(340px,0.88fr)]">
          <MediaReveal delay={0.06} className="h-full">
            <figure className="experience-image relative min-h-[460px] h-full overflow-hidden border border-white/10 sm:min-h-[560px] lg:min-h-[650px]">
              <Image
                src="/experience-aerospace.jpg"
                alt="Aerospace systems integration environment inside a dark industrial hangar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 64vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,24,0.68)_0%,rgba(7,16,24,0.22)_58%,rgba(7,16,24,0.34)_100%),linear-gradient(0deg,rgba(7,16,24,0.9)_0%,transparent_48%)]" />
              <div className="experience-grain absolute inset-0" />
              <span className="experience-corner experience-corner-tl" aria-hidden="true" />
              <span className="experience-corner experience-corner-br" aria-hidden="true" />

              <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                <p className="technical-label text-gold-light">
                  Mission Environment / 03
                </p>
              </div>
              <p className="absolute right-6 top-6 font-mono text-[0.56rem] uppercase tracking-[0.2em] text-foreground/40 sm:right-8 sm:top-8">
                Frame 03-A / Controlled
              </p>
              <div className="absolute bottom-7 left-6 right-6 flex flex-col gap-3 border-t border-white/16 pt-5 sm:bottom-8 sm:left-8 sm:right-8 sm:flex-row sm:items-end sm:justify-between">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-foreground/72">
                  Acquisition / Integration / Execution
                </p>
                <p className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-gold-light/70">
                  Bearing 205° / Systems Integration
                </p>
              </div>
            </figure>
          </MediaReveal>

          <aside className="experience-details border-x border-b border-white/10 lg:border-l-0 lg:border-t">
            {experienceItems.map((item, index) => (
              <Reveal key={item.title} delay={0.1 + index * 0.06}>
                <article className="experience-entry border-b border-white/10 px-6 py-7 last:border-b-0 sm:px-8 sm:py-9 lg:px-9">
                  <div className="flex items-center gap-4">
                    <p className="font-mono text-xs tracking-[0.24em] text-gold-light">
                      {item.code}
                    </p>
                    <span className="h-px flex-1 bg-gradient-to-r from-gold-light/30 to-transparent" />
                  </div>
                  <h3 className="mt-6 max-w-[18ch] font-[family-name:var(--font-display)] text-[1.8rem] font-semibold uppercase leading-[0.96] tracking-[-0.01em] text-foreground sm:text-[2.1rem]">
                    {item.title}
                  </h3>
                  <p className="body-copy mt-4 text-[0.94rem] leading-[1.68]">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
