import service from "./src/service";


export const hello = async (event, _context) => {
  const result = service.hello(event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: result
    }),
  };
}


export const goodbye = async (event, _context) => {
  const result = service.goodbye(event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: result
    }),
  };
}