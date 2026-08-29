"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  workEmail: z.string().email("Please enter a valid work email."),
  organization: z.string().min(2, "Please add your organization."),
  phone: z.string().optional(),
  engagementType: z.enum([
    "Program Leadership",
    "Acquisition Strategy",
    "Systems Integration",
    "Executive Advisory",
    "Other",
  ]),
  message: z
    .string()
    .min(20, "Please include a little more context.")
    .max(1200, "Please keep the message under 1200 characters."),
});

type EnquiryValues = z.infer<typeof enquirySchema>;

const defaultValues: EnquiryValues = {
  name: "",
  workEmail: "",
  organization: "",
  phone: "",
  engagementType: "Program Leadership",
  message: "",
};

async function mockSubmitEnquiry(values: EnquiryValues) {
  await new Promise((resolve) => window.setTimeout(resolve, 900));
  console.info("Enquiry payload", values);
}

export function ContactForm() {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

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
      await mockSubmitEnquiry(values);
      startTransition(() => {
        setSubmitState("success");
        reset(defaultValues);
      });
    } catch {
      setSubmitState("error");
    }
  });

  return (
    <form className="space-y-5" onSubmit={onSubmit} noValidate>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="technical-label text-gold-light">Engagement Intake / 01</p>
          <h3 className="mt-4 font-[family-name:var(--font-editorial)] text-4xl font-medium leading-none tracking-[-0.02em] text-foreground sm:text-5xl">
            Request a private briefing.
          </h3>
        </div>
        <p className="hidden max-w-[13rem] text-right font-mono text-[0.72rem] uppercase tracking-[0.24em] text-foreground/45 sm:block">
          Discreet / Direct / Mission-focused
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
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

      <Field
        label="Engagement Type"
        error={errors.engagementType?.message}
        input={
          <select {...register("engagementType")} className="field-input">
            <option value="Program Leadership">Program Leadership</option>
            <option value="Acquisition Strategy">Acquisition Strategy</option>
            <option value="Systems Integration">Systems Integration</option>
            <option value="Executive Advisory">Executive Advisory</option>
            <option value="Other">Other</option>
          </select>
        }
      />

      <Field
        label="Message"
        error={errors.message?.message}
        input={
          <textarea
            {...register("message")}
            className="field-input min-h-36 resize-y"
            placeholder="Briefly describe the mandate, timeline, and what needs decisive attention."
          />
        }
      />

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex min-h-14 items-center justify-center border border-[rgba(206,180,130,0.9)] bg-gold px-7 py-3 font-mono text-[0.67rem] font-medium uppercase tracking-[0.15em] text-[#071018] hover:-translate-y-0.5 hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70"
          disabled={submitState === "submitting"}
        >
          {submitState === "submitting" ? "Submitting..." : "Request Briefing →"}
        </button>

        <p
          className={`text-sm ${
            submitState === "error"
              ? "text-[#d18f8f]"
              : submitState === "success"
                ? "text-gold-light"
                : "text-foreground/55"
          }`}
          role="status"
        >
          {submitState === "success" &&
            "Thank you. Your enquiry has been prepared for review."}
          {submitState === "error" &&
            "Something went wrong. Please try again in a moment."}
          {submitState === "idle" &&
            "Enquiries are reviewed personally. Typical response within 1–2 business days."}
          {submitState === "submitting" && "Sending enquiry..."}
        </p>
      </div>
    </form>
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
    <label className="block">
      <span className="technical-label mb-3 block text-foreground/56">
        {label}
      </span>
      <span className="field-shell block">{input}</span>
      {error ? <span className="mt-2 block text-sm text-[#d18f8f]">{error}</span> : null}
    </label>
  );
}
