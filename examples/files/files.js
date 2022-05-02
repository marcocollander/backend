const fs = require('fs');

fs.readFile('./files', (er, data) => {
  console.log(data.json());
});
