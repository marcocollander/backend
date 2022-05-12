const express = require('express');
const app = express();
const path = require('path');
const gameRoutes = require('./routes/game');

app.listen(3000, () => {
  console.log('Server is running at port: 3000');
});

app.use(express.static(path.join(__dirname, 'public')));

gameRoutes(app);
