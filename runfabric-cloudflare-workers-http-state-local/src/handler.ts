exports.handler = async(event: any, context: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from RunFabric", trigger: "http" }),
  };
};
