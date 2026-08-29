import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { capabilityItems } from "@/lib/data";

export function Capabilities() {
  return (
    <section id="capabilities" className="section-spacing relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/60 to-transparent" />
      <div className="section-shell">
        <Reveal>
          <SectionLabel label="Capabilities" />
        </Reveal>
        <div className="mt-7 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={0.08}>
            <h2 className="section-title max-w-[11ch]">
              Where I add the most value
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="body-copy max-w-[28rem]">
              Targeted support for programs that need command-level judgment,
              institutional fluency, and technical leadership without drama.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-px bg-white/8 md:grid-cols-2">
          {capabilityItems.map((item, index) => (
            <Reveal key={item.title} delay={0.12 + index * 0.07}>
              <CapabilityCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
