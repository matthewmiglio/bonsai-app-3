import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid with your API key from the environment variables
sgMail.setApiKey(process.env.SENDMAIL_API_KEY || "");

console.log('email.ts api key is ', process.env.SENDMAIL_API_KEY);
console.log('email.ts from email is ', process.env.SENDMAIL_FROM_EMAIL);
console.log('email.ts dest email is ', process.env.SENDMAIL_DEST_EMAIL);


type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { fname, lname, email, phone } = req.body;
    console.log(
      "Received a request to send an email with the following data:",
      req.body
    )

    // Validate the request body
    if (!fname || !lname || !email || !phone || !phone) {
      console.log("Cant send an email containing this registration data because the form is missing required fields");
      return res.status(400).json({ message: "Cant send an email containing this registration data because the form is missing required fields" });
    }
    console.log(
      'This email body is acceptable!'
    )

    // Compose the email body with the correct type for msg
    const fromEmail = process.env.SENDMAIL_FROM_EMAIL;
    console.log(
      'from email is ', fromEmail
    )
    if (!fromEmail) {
      console.error("Error: No sender email specified in environment variables");
      return res.status(500).json({ message: "Error: No sender email specified in environment variables" });
    }
    console.log('This from email is acceptable!')


    const msg: sgMail.MailDataRequired = {
      to: process.env.SENDMAIL_DEST_EMAIL, // Send to the email specified in the environment variable
      from: fromEmail,
      subject: `New Registration: ${fname} ${lname}`,
      text: `
        Full Name: ${fname} ${lname}
        Email: ${email}
        Phone: ${phone}
      `,
      html: `
        <h3>New Registration</h3>
        <p><strong>Full Name:</strong> ${fname} ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    };

    console.log('compiled an email message object which looks like', msg)

    try {
      console.log("Sending email...");
      await sgMail.send(msg);
      console.log("Email sent successfully");
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email" });
    }
  } else {
    console.log("You're not allowed to call the email api with anything other than POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
