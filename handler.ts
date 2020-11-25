import service from "./src/service";
import {handler as io} from "./src/io";


export const hello = async (event, _context) => {
  const input = io.input(event)
  console.log('the Event', event)
  const result = service.hello(input);
  return io.returnSuccess(result);
}


export const goodbye = async (event, _context) => {
  const result = service.goodbye(event);
  return io.returnSuccess(result);
}