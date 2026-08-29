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
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#071018] via-[#071018]/84 to-transparent" />
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
    <figure className="operational-frame relative aspect-[5/4] overflow-hidden border border-white/10">
      <div className="operational-light absolute inset-0" />
      <div className="absolute left-6 top-6 font-mono text-[0.58rem] uppercase tracking-[0.24em] text-foreground/44">
        Operational image / 02
      </div>
      <div className="absolute bottom-[18%] left-[9%] h-[38%] w-[22%] bg-[#182b35]/68" />
      <div className="absolute bottom-[18%] left-[34%] h-[54%] w-[42%] border border-white/8 bg-[#0b1b25]/72" />
      <div className="absolute bottom-[18%] right-[8%] h-[30%] w-[18%] bg-[#213640]/58" />
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#071018] to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
        <p className="font-[family-name:var(--font-editorial)] text-3xl leading-none text-foreground/92 sm:text-4xl">
          On-site. In the room.
        </p>
        <p className="max-w-[8rem] text-right font-mono text-[0.55rem] uppercase leading-relaxed tracking-[0.2em] text-gold-light/75">
          Working environment / replaceable media
        </p>
      </div>
      <figcaption className="sr-only">
        Designed frame for future on-site or working photography.
      </figcaption>
    </figure>
  );
}
