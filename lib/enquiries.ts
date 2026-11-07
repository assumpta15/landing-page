import { z } from "zod";

export const engagementTypes = [
  "Program Leadership",
  "Defense Acquisition",
  "Systems Integration",
  "Strategic Advisory",
  "Aerospace Programs",
  "Operational Readiness",
  "Other",
] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  workEmail: z.string().trim().email("Please enter a valid work email.").max(200),
  organization: z.string().trim().min(2, "Please add your organization.").max(200),
  phone: z.string().trim().max(60).optional().or(z.literal("")),
  engagementType: z.enum(engagementTypes),
  message: z
    .string()
    .trim()
    .min(20, "Please include a little more context.")
    .max(1200, "Please keep the message under 1200 characters."),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
