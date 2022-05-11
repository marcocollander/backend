const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.listen(3000, () => {
  console.log('Server is running at port: 3000');
});

app.use(express.json());
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'static')));

// app.length('/', (req, res) => {
//   const fileName = 'index.html';

//   res.sendFile(fileName, {
//     root: path.join(__dirname, 'static');
//   })
// })

// app.post('/hello', (req, res) => {
//   console.log(req.body);
//   const { name, surname } = req.body;
//   res.send(`Witaj ${name} ${surname}`);
// });


