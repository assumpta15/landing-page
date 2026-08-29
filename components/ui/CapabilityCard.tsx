type CapabilityItem = {
  description: string;
  index: string;
  title: string;
};

export function CapabilityCard({ item }: { item: CapabilityItem }) {
  return (
    <article className="group bg-background-secondary/70 px-6 py-7 transition-colors duration-300 hover:bg-background-secondary/88 sm:px-7 sm:py-8">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-sm uppercase tracking-[0.26em] text-gold-light">
          {item.index}
        </p>
        <span className="h-px flex-1 bg-gradient-to-r from-white/10 via-gold-light/40 to-white/0" />
      </div>
      <h3 className="mt-5 max-w-[12ch] font-[family-name:var(--font-heading)] text-[2rem] leading-none text-foreground sm:text-[2.4rem]">
        {item.title}
      </h3>
      <p className="body-copy mt-5 text-base transition-colors duration-300 group-hover:text-foreground/92">
        {item.description}
      </p>
    </article>
  );
}
