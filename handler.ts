import service from "./src/service";
import io from "./src/io";


export const hello = async (event, _context) => {
  const result = service.hello(event);
  return io.handler.returnSuccess(result);
}


export const goodbye = async (event, _context) => {
  const result = service.goodbye(event);
  return io.handler.returnSuccess(result);
}