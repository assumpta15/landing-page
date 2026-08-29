type SectionLabelProps = {
  label: string;
};

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-gold-light/80" />
      <p className="technical-label text-gold-light">{label}</p>
    </div>
  );
}
