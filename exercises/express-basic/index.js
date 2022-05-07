const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.all("/all", (req, res) => {
  console.log("req.url:", req.url);
  console.log("req.originalUrl:", req.originalUrl);
  console.log("req.path:", req.path);
  console.log("req.protocol:", req.protocol);
  console.log("req.secure:", req.secure);
  res.send("Hello all");
});
