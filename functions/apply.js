exports.handler = (event, context) => {
  console.log(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "applying for position" }),
  };
};
