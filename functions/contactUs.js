const transporter = require("./transporter");

require("dotenv").config();

exports.handler = (event, context, cb) => {
  var body = JSON.parse(event.body);

  const mail = {
    from: body.email,
    to: process.env.EMAIL,
    subject: "User Feedback",
    html: `<h1>${body.fname} ${body.lname}</h1> <i>${body.email}</i> <p>${body.phone}</p> <p>${body.message}</p>`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      cb(err, {
        statusCode: 500,
        body: err.message,
      });
    } else {
      cb(null, {
        statusCode: 200,
        body: "message sent successfully",
      });
    }
  });
};
