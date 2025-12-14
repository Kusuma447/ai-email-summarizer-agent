import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  if (!text || text.trim() === "") {
    return NextResponse.json(
      { error: "No email text provided" },
      { status: 400 }
    );
  }

  // Mock AI Agent response (used due to API quota limitations)
  const mockSummary =
    "This email informs you that you have been shortlisted and provides details about the upcoming interview.";

  return NextResponse.json({
    summary: mockSummary,
    mode: "mock-agent"
  });
}