const http = require("http");
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-type", "text/plain");
  res.end("olá mundo \n meu primeiro script");
});

server.listen(port, host, () => {
  console.log("server running at http");
});
