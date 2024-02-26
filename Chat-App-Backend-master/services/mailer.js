const nodeMailer = require("nodemailer");
// const { sendOTP } = require("");
const sendOTP = require("../controllers/authController");
const catchAsync = require("../utils/catchAsync");

// Function to generate OTP
function generateOTP() {
  // Generate a random 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000);
}

let otp;
const sendEmails = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  // Generate OTP
  otp = this.new_otp;
  console.log(sendOTP, "ho");
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.to,
    subject: options.subject,
    text: `Your OTP (One-Time Password) is: ${sendOTP.new_otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully with OTP:", sendOTP.new_otp);
    return otp; // Return OTP for verification
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendEmails;

// const sgMail = require("@sendgrid/mail");

// sgMail.setApiKey(process.env.SG_KEY);

// const sendSGMail = async ({
//   to,
//   sender,
//   subject,
//   html,
//   attachments,
//   text,
// }) => {
//   try {
//     const from = "shreyanshshah242@gmail.com";

//     const msg = {
//       to: to, // Change to your recipient
//       from: from, // Change to your verified sender
//       subject: subject,
//       html: html,
//       // text: text,
//       attachments,
//     };

//     return sgMail.send(msg);
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.sendEmail = async (args) => {
//   if (!process.env.NODE_ENV === "development") {
//     return Promise.resolve();
//   } else {
//     return sendSGMail(args);
//   }
// };
