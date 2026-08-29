import Link from "next/link";
import { contactDetails } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-[#09131a]">
      <div className="section-shell flex flex-col gap-6 px-5 py-8 text-sm text-foreground/66 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-mono uppercase tracking-[0.24em]">
          © 2026 Mark | Defense & Aerospace Consulting
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <Link href={`mailto:${contactDetails.email}`} className="hover:text-foreground">
            Email
          </Link>
          <Link href={contactDetails.linkedin} className="hover:text-foreground">
            LinkedIn
          </Link>
          <span className="font-mono text-xs uppercase tracking-[0.28em] text-gold-light/80">
            Mission-ready | CONUS / OCONUS
          </span>
        </div>
      </div>
    </footer>
  );
}
