import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config() // ✅ THIS IS REQUIRED
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true, // Use true for port 465, false for port 587
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  },
});
export default transporter
export const sendOtpMail = async (to,otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL,
        to,
        subject:"Reset Tour Password",
        html: `<p>Your Otp for password is <b>${otp}</b>. It expires in 5 minutes</p>`
    })
}