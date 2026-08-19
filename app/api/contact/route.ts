import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/data/siteConfig";

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
    const recipientEmail = process.env.CONTACT_EMAIL || siteConfig.email || "mohammedmeezanafzal@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    // If Resend API Key is configured, attempt sending email
    if (resendApiKey && resendApiKey !== "re_your_api_key_here") {
      const resend = new Resend(resendApiKey);

      // 1. Send notification to site owner
      const emailResult = await resend.emails.send({
        from: fromEmail,
        to: recipientEmail,
        replyTo: email,
        subject: `[Portfolio Contact] ${subject || "New inquiry from " + name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e4e4e7;">
            <h2 style="color: #6366f1; margin-top: 0; font-size: 20px;">New Inquiry via Portfolio</h2>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0; border: 1px solid #e2e8f0;">
              <p style="margin: 6px 0; font-size: 14px;"><strong>From:</strong> ${name}</p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #6366f1; text-decoration: none;">${email}</a></p>
              <p style="margin: 6px 0; font-size: 14px;"><strong>Subject:</strong> ${subject || "Portfolio Contact Inquiry"}</p>
            </div>
            <div style="margin-top: 20px;">
              <h3 style="color: #1e293b; font-size: 15px; margin-bottom: 8px;">Message:</h3>
              <div style="white-space: pre-wrap; color: #334155; line-height: 1.6; background-color: #f1f5f9; padding: 16px; border-radius: 8px; font-size: 14px;">${message}</div>
            </div>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
            <p style="color: #94a3b8; font-size: 12px; margin-bottom: 0; text-align: center;">Sent through Resend API from Mohammed Meezan Afzal's Portfolio</p>
          </div>
        `,
      });

      if (emailResult.error) {
        console.error("Resend API Error (Admin Notification):", emailResult.error);
        return NextResponse.json(
          {
            success: false,
            message: emailResult.error.message || "Failed to deliver message via email provider.",
          },
          { status: 500 }
        );
      }

      // 2. Optionally attempt to send confirmation email to the visitor (if using verified domain)
      if (!fromEmail.includes("onboarding@resend.dev")) {
        try {
          await resend.emails.send({
            from: fromEmail,
            to: email,
            subject: `Thank you for reaching out, ${name}!`,
            text: `Hi ${name},\n\nThank you for reaching out! I have received your message regarding "${subject || "Inquiry"}" and will get back to you as soon as possible.\n\nBest regards,\nMohammed Meezan Afzal`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e4e4e7;">
                <h2 style="color: #6366f1; margin-top: 0; font-size: 20px;">Thank You for Reaching Out!</h2>
                <p style="color: #334155; font-size: 14px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
                <p style="color: #334155; font-size: 14px; line-height: 1.6;">
                  I have received your message regarding <strong>${subject || "your inquiry"}</strong>. I appreciate you taking the time to contact me and will review your note and get back to you shortly.
                </p>
                <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin: 16px 0; border: 1px solid #e2e8f0;">
                  <h4 style="margin: 0 0 8px 0; font-size: 13px; color: #64748b; text-transform: uppercase;">Your Message Summary:</h4>
                  <p style="margin: 0; font-size: 14px; color: #334155; white-space: pre-wrap;">${message}</p>
                </div>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
                <p style="color: #64748b; font-size: 13px; margin: 0;">
                  Best regards,<br />
                  <strong>Mohammed Meezan Afzal</strong><br />
                  <span style="font-size: 12px; color: #94a3b8;">Full-Stack &amp; MERN Stack Developer</span>
                </p>
              </div>
            `,
          });
        } catch (confirmError) {
          // Log confirmation send failure without failing user submission
          console.warn("Could not send confirmation copy to visitor:", confirmError);
        }
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
