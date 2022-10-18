exports.handler = (event, context, cb) => {
  var body = JSON.parse(event.body)
  
  cb(null, {
    statusCode: 200,
    body: JSON.stringify(body),
  });
};
