import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { fname, lname, email, phone } = req.body;

    // Validate the request body
    if (!fname || !lname || !email || !phone) {
      return res.status(400).json({
        error: "Missing required fields",
        message: "Can't send an email containing this registration data because the form is missing required fields"
      });
    }

    // Get Resend API key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return res.status(500).json({
        error: "Resend API key not configured",
        message: "Error: Email service not configured"
      });
    }

    // Get email recipients from environment variable
    const emailRecipientsString = process.env.EMAIL_RECIPIENTS;
    if (!emailRecipientsString) {
      return res.status(500).json({
        error: "Email recipients not configured",
        message: "Error: Email recipients not configured"
      });
    }

    // Parse comma-separated recipients
    const recipients = emailRecipientsString
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email.length > 0);

    if (recipients.length === 0) {
      return res.status(500).json({
        error: "No valid recipients found",
        message: "Error: No valid email recipients configured"
      });
    }

    // Get sender email from environment variable
    const fromEmail = process.env.EMAIL_FROM || "wmbonsai@pixelbargain.com";

    // Compose the email
    const subject = `New Registration: ${fname} ${lname}`;
    const html = `
      <h3>New Registration</h3>
      <p><strong>Full Name:</strong> ${fname} ${lname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `;

    console.log('Sending registration email for:', fname, lname, 'to:', recipients);

    try {
      // Send email via Resend API
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: recipients,
          subject,
          html,
        }),
      });

      const responseData = await resendResponse.json();

      if (!resendResponse.ok) {
        console.error("Resend API error:", responseData);
        return res.status(resendResponse.status).json({
          error: "Failed to send email",
          message: "Error sending email"
        });
      }

      console.log("Email sent successfully via Resend");
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        error: "Internal server error",
        message: "Error sending email"
      });
    }
  } else {
    console.log("You're not allowed to call the email api with anything other than POST");
    return res.status(405).json({
      error: "Method Not Allowed",
      message: "Method Not Allowed"
    });
  }
}
