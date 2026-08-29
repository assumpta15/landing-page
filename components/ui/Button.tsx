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
  "inline-flex min-h-14 items-center gap-3 rounded-[6px] border px-6 py-3 text-sm font-semibold tracking-[0.02em]";

const variants = {
  primary:
    "border-[rgba(206,180,130,0.9)] bg-gold px-7 text-[#10161b] hover:-translate-y-0.5 hover:bg-gold-light",
  secondary:
    "border-white/16 bg-transparent text-foreground hover:-translate-y-0.5 hover:border-[var(--border)] hover:bg-white/4",
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
