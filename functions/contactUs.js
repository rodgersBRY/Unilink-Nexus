exports.handler = (event, context) => {
  console.log(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "contacting the owners now",
      data: event.body,
    }),
  };
};
