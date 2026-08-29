import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactDetails } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="section-spacing contact-panel relative">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <Reveal>
              <SectionLabel label="Private Enquiries" />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-title mt-6 max-w-[11ch]">
                A discreet conversation starts here.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="body-copy mt-7 max-w-[30rem]">
                For advisory mandates, program leadership, acquisition
                strategy, and sensitive defense or aerospace engagements.
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
            <div className="contact-form-shell border-l border-white/10 pl-5 sm:pl-8 lg:pl-12">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
