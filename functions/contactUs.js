exports.handler = (event, context) => {
  console.log(event.body);
  
  return {
    statusCode: 200,
    body: { msg: "contacting the owners" },
  };
};
