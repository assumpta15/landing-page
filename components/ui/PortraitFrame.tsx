export function PortraitFrame() {
  return (
    <figure className="portrait-frame relative aspect-[4/5] overflow-hidden border border-white/10 shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
      <div className="portrait-atmosphere absolute inset-0" />
      <div className="portrait-grain absolute inset-0" />
      <div className="absolute left-5 top-5 flex items-center gap-3 font-mono text-[0.58rem] uppercase tracking-[0.26em] text-foreground/46">
        <span className="h-1.5 w-1.5 rounded-full bg-gold-light" />
        Principal portrait / 01
      </div>
      <div className="absolute right-5 top-5 h-12 w-12 border-r border-t border-gold-light/65" />
      <div className="portrait-silhouette absolute inset-x-[18%] bottom-0 top-[17%]">
        <span className="portrait-head absolute left-1/2 top-[8%] aspect-[0.82] h-[24%] -translate-x-1/2 rounded-[48%]" />
        <span className="portrait-shoulders absolute inset-x-0 bottom-0 h-[65%] rounded-t-[48%]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#111416] via-[#111416]/84 to-transparent" />
      <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between gap-5">
        <div>
          <p className="font-[family-name:var(--font-editorial)] text-5xl leading-none text-foreground">
            32 years
          </p>
          <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-gold-light">
            U.S. Navy / Retired
          </p>
        </div>
        <p className="max-w-[8rem] text-right font-mono text-[0.56rem] uppercase leading-relaxed tracking-[0.2em] text-foreground/38">
          Portrait frame<br />4:5 / Navy overlay
        </p>
      </div>
      <figcaption className="sr-only">
        Designed frame for Mark&apos;s professional portrait.
      </figcaption>
    </figure>
  );
}

export function OperationalFrame() {
  return (
    <figure className="operational-frame service-operational-frame relative overflow-hidden border border-white/10">
      <div className="service-operational-image absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111416] via-[#111416]/20 to-transparent" />

      <div className="absolute left-6 top-6 flex items-center gap-3 font-mono text-[0.58rem] uppercase tracking-[0.24em] text-foreground/56 sm:left-7 sm:top-7">
        <span className="h-px w-8 bg-gold-light/70" />
        Operational image / 02
      </div>

      <div className="absolute right-6 top-6 h-11 w-11 border-r border-t border-gold-light/60 sm:right-7 sm:top-7" />

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#111416]/88 px-6 py-5 backdrop-blur-[2px] sm:px-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-[family-name:var(--font-editorial)] text-[2rem] leading-none text-foreground sm:text-[2.35rem]">
              On-site. In the room.
            </p>
            <p className="mt-2 max-w-[32rem] text-sm leading-6 text-foreground/62">
              Operational perspective shaped by complex programs, acquisition decisions, and accountable execution.
            </p>
          </div>
          <div className="shrink-0 text-left sm:text-right">
            <p className="font-mono text-[0.54rem] uppercase tracking-[0.22em] text-gold-light/78">
              Current bearing / 118°
            </p>
            <p className="mt-1 font-mono text-[0.52rem] uppercase tracking-[0.2em] text-foreground/40">
              Acquisition strategy
            </p>
          </div>
        </div>
      </div>

      <figcaption className="sr-only">
        Operational aerospace environment representing Mark&apos;s working context.
      </figcaption>
    </figure>
  );
}
