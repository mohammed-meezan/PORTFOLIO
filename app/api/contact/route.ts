import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please provide a valid email address."),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "mohammedmeezan.dev@gmail.com";

    // If Resend API Key is configured, attempt sending email
    if (resendApiKey && resendApiKey !== "re_your_api_key_here") {
      const resend = new Resend(resendApiKey);
      const emailResult = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: email,
        subject: `[Portfolio Contact] ${subject || "New inquiry from " + name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      });

      if (emailResult.error) {
        console.error("Resend API Error:", emailResult.error);
        return NextResponse.json(
          {
            success: false,
            message: "Failed to deliver message via email provider.",
          },
          { status: 500 }
        );
      }
    } else {
      // Graceful local logging when RESEND_API_KEY is not configured
      console.log("Contact Form Submission Received [Simulated Dispatch]:", {
        name,
        email,
        subject,
        message,
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while sending your message.",
      },
      { status: 500 }
    );
  }
}
