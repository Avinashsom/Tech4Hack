import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL || "your-email@example.com",
      subject: `${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email sending error:", err);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
