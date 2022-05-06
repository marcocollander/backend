const net = require("net");
const host = "localhost";
const port = 8888;

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    socket.write(data);
  });
});

server.listen({
  host,
  port,
});
