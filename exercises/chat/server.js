const http = require("http");
const fs = require("fs");
const path = require("path");
const mime = require("mime");
const cache = {};
const chatServer = require("./lib/chat_server");

console.log(chatServer);

const sendFourZeroFour = (res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Error 404: plik nie został znaleziony");
  res.end();
};

const sendFile = (res, filePath, fileContents) => {
  res.writeHead(200, { "Content-Type": path.basename(filePath) });
  res.end(fileContents);
};

const serveStatic = (res, cache, absPath) => {
  if (cache[absPath]) {
    sendFile(res, absPath, cache[absPath]);
  } else {
    fs.exists(absPath, (exists) => {
      if (exists) {
        fs.readFile(absPath, (err, data) => {
          if (err) {
            sendFourZeroFour(res);
          } else {
            cache[absPath] = data;
            sendFile(res, absPath, data);
          }
        });
      } else {
        sendFourZeroFour(res);
      }
    });
  }
};

const server = http.createServer((req, res) => {
  let filePath;
  if (req.url === "/") {
    filePath = "public/index.html";
    console.log(filePath);
  } else {
    filePath = `public${req.url}`;
  }
  let absPath = `./${filePath}`;
  serveStatic(res, cache, absPath);
});

server.listen(3000, () => {
  console.log("Serwer nasłuchuje na porcie 3000");
});

chatServer.listen(server);
