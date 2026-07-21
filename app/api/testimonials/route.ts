import { NextResponse } from "next/server";
import { TESTIMONIALS_DATA } from "@/constants/data";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: TESTIMONIALS_DATA.length,
    data: TESTIMONIALS_DATA,
  });
}
