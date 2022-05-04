const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
