import nodemailer from "nodemailer";

const emailSignup = async (data) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //sent email
  const { email, name, token } = data;

  const info = await WebTransportError.sendMail({
    from: "VET App!",
    to: email,
    subject: "Check your account on VET App!",
    text: "Check your account on VET App!",
    html: `<p> Hello ${name} check you account on VET App!</p>
               <p> Your account is allready created check on the link: 
               <a href="${process.env.FRONTEND_URL}/confirm/${token}">Check account</a></p>

               <p>Ignore the message if you didnt create the account</p>
        `,
  });

  console.log("Message sent: %s", info.messageId);
};

export default emailSignup;
