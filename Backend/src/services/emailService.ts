import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

class EmailService {
  constructor() {}

  sendEmail(email: string, subject: string, message: string) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailOptions = {
      from: process.env.APP_EMAIL,
      to: email,
      subject: subject,
      html: message,
    };
    try {
      transporter.sendMail(mailOptions);
    } catch (error) {
      throw error;
    }
    return {};
  }
}

export default EmailService;
