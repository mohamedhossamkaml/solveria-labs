import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real application, you would save this to a database,
    // or send an email via Resend, SendGrid, etc.
    console.log("-------------------------------");
    console.log("NEW SOLVERIA LABS INQUIRY:");
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Message:", data.message);
    console.log("-------------------------------");

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Contact form submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "Server Error" },
      { status: 500 }
    );
  }
}
