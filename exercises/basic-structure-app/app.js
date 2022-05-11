const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const usersRoutes = require('./routes/users');

app.listen(3000, () => {
  console.log('Server is running at port: 3000');
});

app.use(express.json());
app.use(cookieParser());

usersRoutes(app);
