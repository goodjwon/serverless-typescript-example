import service from "./src/service";
import io from "./src/io";


export const hello = async (event, _context) => {
  const input = io.handler.input(event)
  console.log('the Event', event)
  const result = await service(io).createBook(input);
  return io.handler.returnSuccess(result);
}


export const goodbye = async (event, _context) => {
  const result = await service(io).getBook(event);
  return io.handler.returnSuccess(result);
}