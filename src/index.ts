import * as http from "http";
import { IncomingMessage, ServerResponse } from "http";

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello my server is running....");
  }
);

const port = 5000;

server.listen(port, () => {
  console.log(`Server running at http:localhost:${port}/`);
});
