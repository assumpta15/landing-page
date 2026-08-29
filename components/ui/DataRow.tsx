type DataRowProps = {
  label: string;
  value: string;
};

export function DataRow({ label, value }: DataRowProps) {
  return (
    <div className="border-t border-[var(--border)] py-5 first:border-t">
      <p className="technical-label text-foreground/52">{label}</p>
      <p className="mt-3 max-w-[28rem] font-[family-name:var(--font-editorial)] text-[1.95rem] leading-[1.08] text-foreground/92 sm:text-[2.35rem]">
        {value}
      </p>
    </div>
  );
}
