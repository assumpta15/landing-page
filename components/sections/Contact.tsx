import type { ReactNode } from "react";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactDetails } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="contact-panel mark-section contact-luxury relative">
      <div className="section-shell mark-anchor-grid contact-luxury-grid">
        <div className="mark-anchor contact-intro contact-luxury-anchor">
          <Reveal>
            <SectionLabel label="Private Enquiries / 05" />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="section-title contact-title mt-7 max-w-[10.5ch]">
              A discreet conversation starts here.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="body-copy mt-8 max-w-[31rem]">
              For advisory mandates, program leadership, acquisition
              strategy, and sensitive defense or aerospace engagements.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="contact-details contact-luxury-details mt-12">
              <ContactDetail label="Email" href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </ContactDetail>
              <ContactDetail label="Phone" href={`tel:${contactDetails.phoneHref}`}>
                {contactDetails.phone}
              </ContactDetail>
              <ContactDetail label="LinkedIn" href={contactDetails.linkedin}>
                {contactDetails.linkedinLabel}
              </ContactDetail>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="contact-form-shell contact-luxury-form">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactDetail({
  children,
  href,
  label,
}: {
  children: ReactNode;
  href: string;
  label: string;
}) {
  return (
    <div className="contact-detail-block">
      <p className="technical-label text-foreground/50">{label}</p>
      <a href={href} className="contact-detail-value mt-2.5 inline-block">
        {children}
      </a>
    </div>
  );
}
