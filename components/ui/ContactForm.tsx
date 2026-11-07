"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { enquirySchema, engagementTypes, type EnquiryInput } from "@/lib/enquiries";

type EnquiryValues = EnquiryInput;

const defaultValues: EnquiryValues = {
  name: "",
  workEmail: "",
  organization: "",
  phone: "",
  engagementType: "Program Leadership",
  message: "",
};

async function submitEnquiry(values: EnquiryValues) {
  const response = await fetch("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const payload = (await response.json()) as {
    error?: string;
    referenceNumber?: string;
  };

  if (!response.ok || !payload.referenceNumber) {
    throw new Error(payload.error ?? "Unable to save enquiry.");
  }

  return payload.referenceNumber;
}

export function ContactForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitState("submitting");

    try {
      const reference = await submitEnquiry(values);
      startTransition(() => {
        setReferenceNumber(reference);
        setSubmitState("success");
        reset(defaultValues);
      });
    } catch {
      setSubmitState("error");
    }
  });

  if (submitState === "success") {
    return (
      <div className="contact-form-surface contact-confirmation" role="status">
        <FormHeader />

        <div className="confirmation-body border-t border-white/10 pt-10 sm:pt-12">
          <p className="technical-label text-gold-light">Briefing Request Received</p>
          <h3 className="mt-5 max-w-[12ch] font-[family-name:var(--font-editorial)] text-[clamp(2.7rem,5vw,4.8rem)] font-medium leading-[0.94] tracking-[-0.03em] text-foreground">
            Your enquiry is in direct review.
          </h3>
          <p className="body-copy mt-7 max-w-[38rem]">
            Thank you. Your enquiry has been received and will be reviewed directly.
            We will respond within 1–2 business days.
          </p>

          <div className="mt-10 max-w-[30rem] border-y border-white/10 py-6">
            <p className="technical-label text-foreground/48">Reference</p>
            <p className="mt-3 font-mono text-base tracking-[0.12em] text-gold-light sm:text-lg">
              {referenceNumber}
            </p>
          </div>

          <p className="mt-8 font-mono text-[0.64rem] uppercase tracking-[0.24em] text-foreground/42">
            Confidential • Direct Review
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form-surface" onSubmit={onSubmit} noValidate>
      <FormHeader />

      <div className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-2">
        <Field
          label="Name"
          error={errors.name?.message}
          input={
            <input
              {...register("name")}
              className="field-input"
              autoComplete="name"
              placeholder="Mark Sullivan"
            />
          }
        />
        <Field
          label="Work Email"
          error={errors.workEmail?.message}
          input={
            <input
              {...register("workEmail")}
              className="field-input"
              autoComplete="email"
              placeholder="mark@organization.com"
              type="email"
            />
          }
        />
        <Field
          label="Organization"
          error={errors.organization?.message}
          input={
            <input
              {...register("organization")}
              className="field-input"
              autoComplete="organization"
              placeholder="Prime contractor or agency"
            />
          }
        />
        <Field
          label="Phone"
          error={errors.phone?.message}
          input={
            <input
              {...register("phone")}
              className="field-input"
              autoComplete="tel"
              placeholder="+1 (555) 214-7800"
              type="tel"
            />
          }
        />
      </div>

      <div className="mt-8">
        <Field
          label="Engagement Type"
          error={errors.engagementType?.message}
          input={
            <span className="select-wrap block">
              <select {...register("engagementType")} className="field-input field-select">
                {engagementTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <span className="select-indicator" aria-hidden="true">⌄</span>
            </span>
          }
        />
      </div>

      <div className="mt-8">
        <Field
          label="Message"
          error={errors.message?.message}
          input={
            <textarea
              {...register("message")}
              className="field-input field-message resize-none"
              placeholder="Briefly describe the mandate, timeline, and what needs decisive attention."
            />
          }
        />
      </div>

      <div className="submit-zone mt-10 border-t border-white/[0.08] pt-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="briefing-submit group"
            disabled={submitState === "submitting"}
          >
            <span>{submitState === "submitting" ? "Submitting…" : "Request Briefing"}</span>
            <span className="briefing-arrow" aria-hidden="true">→</span>
          </button>

          <p className="max-w-[16rem] text-sm leading-6 text-foreground/52">
            {submitState === "error" ? (
              <span className="text-[#d18f8f]">
                Something went wrong. Please try again in a moment.
              </span>
            ) : submitState === "submitting" ? (
              "Sending your enquiry for direct review…"
            ) : (
              <>
                Enquiries are reviewed personally.<br />
                Typical response within 1–2 business days.
              </>
            )}
          </p>
        </div>

        <div className="mt-7 flex items-center gap-3">
          <span className="h-px w-8 bg-gold/55" aria-hidden="true" />
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-foreground/38">
            Confidential • Direct Review
          </p>
        </div>
      </div>
    </form>
  );
}

function FormHeader() {
  return (
    <div className="form-heading-row flex items-start justify-between gap-7">
      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold/70" aria-hidden="true" />
          <p className="technical-label text-gold-light">Engagement Intake / 01</p>
        </div>
        <h3 className="contact-briefing-title mt-5 font-[family-name:var(--font-editorial)] font-medium tracking-[-0.03em] text-foreground">
          <span className="contact-briefing-title-line">Request a private</span>
          <span className="contact-briefing-title-line">briefing.</span>
        </h3>
      </div>

      <p className="mt-1 hidden max-w-[12rem] text-right font-mono text-[0.64rem] uppercase leading-5 tracking-[0.23em] text-foreground/38 sm:block">
        Discreet / Direct /<br />Mission-focused
      </p>
    </div>
  );
}

function Field({
  error,
  input,
  label,
}: {
  error?: string;
  input: ReactNode;
  label: string;
}) {
  return (
    <label className="field-group block">
      <span className="field-label technical-label mb-2 block text-foreground/50">
        {label}
      </span>
      <span className="field-shell block">{input}</span>
      {error ? (
        <span className="mt-2.5 block text-sm text-[#d18f8f]">{error}</span>
      ) : null}
    </label>
  );
}
