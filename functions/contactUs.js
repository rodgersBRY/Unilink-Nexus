exports.handler = (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "contacting the owners now",
      data: event.body,
    }),
  };
};
