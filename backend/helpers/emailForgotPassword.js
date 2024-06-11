import nodemailer from "nodemailer";

const emailForgotPassword = async (data) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //sent email
  const { email, name, token } = data;

  const info = await transporter.sendMail({
    from: "VET App!",
    to: email,
    subject: "Recover your password!",
    text: "Recover your password!",
    html: `<p> Hello ${name} you had request recover your password</p>

               <p> Click on the link to recover your password: 
               <a href="${process.env.FRONTEND_URL}forgot-password/${token}">Recover Password</a></p>

               <p>Ignore the message if you didnt recxover the password</p>
        `,
  });

  console.log("Message sent: %s", info.messageId);
};

export default emailForgotPassword;
