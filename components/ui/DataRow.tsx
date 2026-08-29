type DataRowProps = {
  label: string;
  value: string;
};

export function DataRow({ label, value }: DataRowProps) {
  return (
    <div className="border-t border-[var(--border)] py-5 first:border-t">
      <p className="technical-label text-foreground/52">{label}</p>
      <p className="mt-3 max-w-[22rem] font-[family-name:var(--font-heading)] text-[1.95rem] leading-tight text-foreground/92 sm:text-[2.4rem]">
        {value}
      </p>
    </div>
  );
}
