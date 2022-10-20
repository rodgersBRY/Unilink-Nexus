const transporter = require("./transporter");
require("dotenv").config();

exports.handler = (event, body, cb) => {
  var body = JSON.parse(event.body);

  console.log(body);

  const mail = {
    from: process.env.EMAIL,
    to: body.email,
    subject: "Email Confirmation",
    text: "your email has been received. We'll get back to you in no time",
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      cb(err, {
        statusCode: 400,
        body: err.message,
      });
    } else {
      cb(null, {
        statusCode: 200,
        body: "success",
      });
    }
  });
};
