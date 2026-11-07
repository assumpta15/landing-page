import { NextResponse } from "next/server";
import { createEnquiry } from "@/db/enquiries";
import { enquirySchema } from "@/lib/enquiries";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed.",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const enquiry = await createEnquiry(parsed.data);

    return NextResponse.json(
      {
        ok: true,
        referenceNumber: enquiry.referenceNumber,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to create enquiry", error);
    return NextResponse.json(
      { error: "Unable to save your enquiry right now." },
      { status: 500 },
    );
  }
}
