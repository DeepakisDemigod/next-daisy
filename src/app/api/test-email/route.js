import nodemailer from "nodemailer";

export async function GET() {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: "your-verified-email@example.com",
      to: "your-email@example.com",
      subject: "SMTP Test",
      text: "This is a test email from Brevo SMTP.",
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: error.message });
  }
}
