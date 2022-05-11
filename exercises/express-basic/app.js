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

app.get('/', (req, res) => {
  const { visitor_name } = req.cookies;
  if (visitor_name) {
    res.send(`Witaj ${visitor_name}`);
  } else {
    res.send('Czy my się znamy');
  }
});

app.get('/hi/:name', (req, res) => {
  const { name } = req.params;
  const dt = new Date();
  dt.setDate(dt.getDate() + 7);
  res.cookie('visitor_name', name, { expires: dt });
  res.send('Imię zapisano');
});

app.get('/logout', (req, res) => {
  res.clearCookie('Phpstorm-cd7c3319');
  res.clearCookie('visitor_name');
  res.redirect('/');
});
