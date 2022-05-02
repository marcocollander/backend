const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    fs.createReadStream('./image.jpg').pipe(res);
  })
  .listen(3000);

console.log('Serwer jest dostępny pd adresem http://localhost:3000');
