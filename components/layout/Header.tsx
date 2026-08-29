"use client";

import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 24);
  });

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/8 bg-[#0b151d]/82 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="#top"
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.32em] text-foreground"
          aria-label="Mark home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border)] bg-white/3 font-mono text-xs text-gold-light">
            MK
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.34em] text-foreground/88 sm:block">
            Mark
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/76 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary">
            Request Brief
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-foreground lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/8 bg-[#0a151d]/96 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex w-full max-w-[1320px] flex-col gap-2 px-5 py-5 md:px-8"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-2 py-3 text-base text-foreground/82 hover:bg-white/5 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div onClick={() => setIsOpen(false)}>
            <Button href="#contact" variant="primary" className="mt-3 justify-center">
              Request Brief
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
