type BearingMarkProps = {
  bearing: string;
  className?: string;
  label: string;
};

export function BearingMark({
  bearing,
  className = "",
  label,
}: BearingMarkProps) {
  return (
    <div className={`bearing-mark ${className}`}>
      <div className="bearing-geometry" aria-hidden="true">
        <span className="bearing-arc bearing-arc-outer" />
        <span className="bearing-arc bearing-arc-inner" />
        <span className="bearing-needle" />
        <span className="bearing-center" />
      </div>
      <div className="relative z-10">
        <p className="technical-label text-foreground/42">Current bearing</p>
        <p className="mt-3 font-mono text-[clamp(2.6rem,5vw,4.6rem)] leading-none text-gold-light">
          {bearing}°
        </p>
        <p className="mt-3 max-w-[13rem] font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.2em] text-foreground/62">
          {label}
        </p>
      </div>
    </div>
  );
}
