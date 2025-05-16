const exp = require("express");
const app = exp();
const cors = require("cors");
app.use(cors());
const nodemailer = require("nodemailer");
require("dotenv").config();

const jsonParserMiddleware = exp.json();
app.use(jsonParserMiddleware);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});
app.post("/mail", async (req, res) => {
  const emailOptions = {
    from: process.env.NODEMAILER_USER,
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.text,
  };

  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      return console.log("error occured", error);
    }
    console.log("Email sent: " + info.response);
  });
  res.send({ message: "email sent" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
