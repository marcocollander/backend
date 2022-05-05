const net = require("net");

const server = net.createServer((socket) => {
  socket.once("data", (data) => {
    socket.write(data);
  });
});

server.listen(8888, "localhost", () => {
  console.log("Server is running on localhost:8888");
});
