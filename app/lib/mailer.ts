import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // your email
    pass: process.env.SMTP_PASS, // password
  },
});

type Mail = {
  to: string;
  html: string;
};

export async function mailer({ to, html }: Mail) {
  console.log(process.env.SMTP_USER);
  const info = await transporter.sendMail({
    from: `${process.env.SMTP_USER} <${process.env.SMTP_USER}>`,
    to,
    subject: "React Email",
    html,
  });

  console.log("message sent:" + info.messageId);
  return info.messageId;
}
