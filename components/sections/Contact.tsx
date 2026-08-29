import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactDetails } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="section-spacing contact-panel relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/70 to-transparent" />
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <Reveal>
              <SectionLabel label="Get in Touch" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-title mt-6 max-w-[11ch]">
                Let&apos;s talk strategy.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="body-copy mt-7 max-w-[30rem]">
                Available for advisory work, program leadership roles, and
                defense and aerospace consulting engagements.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 space-y-5 border-t border-white/10 pt-6">
                <div>
                  <p className="technical-label text-foreground/56">Email</p>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="mt-2 inline-block text-lg text-foreground/88 hover:text-gold-light"
                  >
                    {contactDetails.email}
                  </a>
                </div>
                <div>
                  <p className="technical-label text-foreground/56">Phone</p>
                  <a
                    href={`tel:${contactDetails.phoneHref}`}
                    className="mt-2 inline-block text-lg text-foreground/88 hover:text-gold-light"
                  >
                    {contactDetails.phone}
                  </a>
                </div>
                <div>
                  <p className="technical-label text-foreground/56">LinkedIn</p>
                  <a
                    href={contactDetails.linkedin}
                    className="mt-2 inline-block text-lg text-foreground/88 hover:text-gold-light"
                  >
                    {contactDetails.linkedinLabel}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="ambient-panel rounded-sm p-5 sm:p-7">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
