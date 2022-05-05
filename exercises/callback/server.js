const http = require("http");
const fs = require("fs");
const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./titles.json", (err, data) => {
      if (err) {
        console.error(err);
        res.end("Błąd serwera");
      } else {
        const titles = JSON.parse(data.toString());
        fs.readFile("./index.html", (err, data) => {
          if (err) {
            console.error(err);
            res.end("Błąd serwera");
          } else {
            const tmpl = data.toString();
            const html = tmpl.replace("%", titles.join("</li><li>"));
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(html);
          }
        });
      }
    });
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on https://${host}:${port}`);
});
