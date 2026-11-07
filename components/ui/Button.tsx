import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  icon?: boolean;
  variant?: "primary" | "secondary";
} & Omit<ComponentPropsWithoutRef<"button">, "children">;

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

const baseStyles =
  "inline-flex min-h-14 items-center gap-3 border px-6 py-3 font-mono text-[0.67rem] font-medium uppercase tracking-[0.15em]";

const variants = {
  primary:
    "border-[rgba(205,185,132,0.9)] bg-gold px-7 text-[#111416] hover:-translate-y-0.5 hover:bg-gold-light",
  secondary:
    "border-white/16 bg-transparent text-foreground hover:-translate-y-0.5 hover:border-[var(--border)] hover:bg-white/[0.04]",
};

export function Button({
  children,
  className,
  href,
  icon = true,
  variant = "primary",
  ...props
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowUpRight size={16} strokeWidth={1.8} /> : null}
    </>
  );

  const classes = classNames(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
