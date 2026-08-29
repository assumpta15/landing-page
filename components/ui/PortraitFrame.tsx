export function PortraitFrame() {
  return (
    <div className="portrait-grid relative aspect-[4/5] overflow-hidden rounded-sm border border-[var(--border)] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="absolute left-4 top-4 font-mono text-xs uppercase tracking-[0.32em] text-foreground/75">
        Portrait / 4:5
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(206,180,130,0.14),transparent_20%),repeating-linear-gradient(0deg,rgba(255,255,255,0.015),rgba(255,255,255,0.015)_1px,transparent_1px,transparent_4px)] opacity-70" />
      <div className="absolute left-4 top-4 h-10 w-10 border-l border-t border-gold-light/75" />
      <div className="absolute bottom-4 right-4 h-10 w-10 border-b border-r border-gold-light/75" />
      <div className="absolute inset-x-0 bottom-10 flex justify-center">
        <div className="relative h-48 w-40 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(241,238,232,0.14),rgba(241,238,232,0.02)_58%,transparent_59%)] blur-[1px]" />
      </div>
      <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between gap-3">
        <div>
          <p className="technical-label text-foreground/62">Profile Status</p>
          <p className="mt-2 font-mono text-sm uppercase tracking-[0.28em] text-gold-light">
            Waiting on principal photography
          </p>
        </div>
        <p className="max-w-[9rem] text-right font-mono text-[0.72rem] uppercase tracking-[0.26em] text-foreground/50">
          Well-lit plain background
        </p>
      </div>
    </div>
  );
}
