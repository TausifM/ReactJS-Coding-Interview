var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World");
  })
  .listen(4200);
console.log("Server Running At http://localhost:4200");
