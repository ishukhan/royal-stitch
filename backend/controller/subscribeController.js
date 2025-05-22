import Nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const subscibeUser = async (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes("@"))
    return res.status(400).json({ message: "Invalid email address" });

  try {
    // Send confirmation email
    const transporter = Nodemailer.createTransport({
      service: "gmail", // or your SMTP provider
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: `"Royal Stitch" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "🎉 Welcome to Royal Stitch – You're In!",
      html: `
    <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
      <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div style="background-color: #111827; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Welcome to <span style="color: #facc15;">Royal Stitch</span></h1>
        </div>
        <div style="padding: 30px; text-align: center;">
          <h2 style="color: #111827; font-size: 20px;">Thanks for subscribing!</h2>
          <p style="font-size: 16px; line-height: 1.6;">
            We’re thrilled to have you with us. Expect exclusive offers, early access to new embroidery collections, and behind-the-scenes looks at our finest handwork.
          </p>
          <a href="http://localhost:3000.com" target="_blank" style="display: inline-block; margin-top: 20px; padding: 12px 24px; background-color: #111827; color: #ffffff; border-radius: 6px; text-decoration: none; font-weight: bold;">
            Explore Our Store
          </a>
        </div>
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 13px; color: #6b7280;">
          You are receiving this email because you subscribed on our website.<br />
          © 2025 Royal Stitch. All rights reserved.
        </div>
      </div>
    </div>
  `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Newsletter error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
};
