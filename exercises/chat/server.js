const http = require("http");
const fs = require("fs");
const path = require("path");

const sendFourZeroFour = (res) => {
  res.writeHead(404, { "Content-Type": "text/plan" });
  res.write("Error 404: plik nie został znaleziony");
  res.end();
};

const sendFile = (res, filePath, fileContents) => {
  res.writeHead(200, { "Content-Type": mime.lookup(path.basename(filePath)) });
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

const server = (http.createServer = (req, res) => {
  let filePath = false;
  if (req.url === "/") {
    filePath = "public/index.html";
  }
});
