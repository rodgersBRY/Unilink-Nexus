const transporter = require("./transporter");

exports.handler = (event, context, cb) => {
  var body = JSON.parse(event.body);

  const mail = {
    from: body.email,
    to: process.env.EMAIL,
    subject: "Study Abroad Program Application",
    html: `<h1>${body.name} Application Details</h1>
    <ul>
      <li>country of origin:${body.originCountry}</li>
      <li>email:${body.email}</li>
      <li>nationality:${body.nationality}</li>
      <li>tel:${body.phone}</li>
      <li>preferred destination:${body.preferredDestination}</li>
      <li>academic level:${body.academicLevel}</li>
      <li>last institution:${body.lastInstitution}</li>
      <li>next level of education:${body.nextLevel}</li>
      <li>additional information:${body.additional_info}</li>
    </ul>`,
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
        body: "success",
      });
    }
  });
};
