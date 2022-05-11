const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is running at port: 3000');
});

app.get('/', (req, res) => {});

app.get('/hi/:name', (req, res) => {
  const { name } = req.params;
  const dt = new Date();
  dt.setDate(dt.getDate() + 7);
  res.cookie('visitor_name', name, {expire: dt})
  res.send('Imię zapisano')
});
