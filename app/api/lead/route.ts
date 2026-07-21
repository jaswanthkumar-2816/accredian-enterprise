import { NextResponse } from "next/server";
import { LeadFormData } from "@/types";

// In-memory storage for submitted leads
const leadsDatabase: Array<LeadFormData & { id: string; createdAt: string }> = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      companyName,
      workEmail,
      phoneNumber,
      numberOfEmployees,
      trainingRequirement,
    } = body;

    // Field Validation Errors Mapping
    const errors: Record<string, string> = {};

    if (!fullName || fullName.trim().length < 2) {
      errors.fullName = "Full Name is required (min 2 characters).";
    }

    if (!companyName || companyName.trim().length < 2) {
      errors.companyName = "Company Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!workEmail || !emailRegex.test(workEmail)) {
      errors.workEmail = "Please enter a valid work email address.";
    }

    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
    if (!phoneNumber || phoneNumber.trim().length < 7 || !phoneRegex.test(phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number (min 7 digits).";
    }

    if (!numberOfEmployees) {
      errors.numberOfEmployees = "Please select your company's employee count.";
    }

    if (!trainingRequirement || trainingRequirement.trim().length < 5) {
      errors.trainingRequirement = "Please specify your team's training requirement.";
    }

    // Return 400 Bad Request with field errors if validation fails
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the errors below.",
          errors,
        },
        { status: 400 }
      );
    }

    // Simulate network latency & store lead in memory
    await new Promise((resolve) => setTimeout(resolve, 600));

    const newLead = {
      id: `LEAD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      fullName,
      companyName,
      workEmail,
      phoneNumber,
      numberOfEmployees,
      trainingRequirement,
      createdAt: new Date().toISOString(),
    };

    leadsDatabase.push(newLead);

    return NextResponse.json({
      success: true,
      message: "Enterprise advisory request registered successfully!",
      leadId: newLead.id,
      leadCountTotal: leadsDatabase.length,
      data: newLead,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    totalLeads: leadsDatabase.length,
    leads: leadsDatabase,
  });
}
