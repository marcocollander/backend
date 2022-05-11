const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.all("/", (req, res) => {
//   const { name, surname } = req.query;
//
//   console.log(`Hello ${name} ${surname}`);
//   console.log(`Hello ${req.get("Referer")}`);
//   res.end(`Hello ${name} ${surname}`);
// });

// app.get("/", (req, res) => {
//   console.log("Spis ludzi");
// });
//
// app.get("/:id", (req, res) => {
//   console.log("Informacja na temat osoby o id: " + req.params.id);
// });
//
// app.post("/", (req, res) => {
//   console.log("Dodawanie nowej osoby");
// });
//
// app.patch("/:id", (req, res) => {
//   console.log("Aktualizacja osoby o id: " + req.params.id);
// });
//
// app.delete("/:id", (req, res) => {
//   console.log("Usuwanie osoby o id: " + req.params.id);
// });

// app.get("/hello/new-user", (req, res) => {
//   console.log("Dodawanie nowego użytkownika");
//   res.end("Dodawanie nowego użytkownika");
// });

// app.get("/hello/:name", (req, res) => {
//   console.log("Powitanie osoby: " + req.params.name);
//   res.end("Powitanie osoby: " + req.params.name);
// });

// app.get("/article/:id/:title?", (req, res) => {
//   console.log(req.params);
//   res.end(`${req.params.id} ... ${req.params.title}`);
// });

// app.get("/", (req, res) => {
// res.write("Zażółć gęślą jaźń");
// res.end();
// res.send("Zażółć gęślą jaźń");
// const str = "Zażółć gęślą jaźń";
// const arr = str.split(" ");
// res.send(arr);
// res.send({
//   text: "Hello world!",
//   isGood: true,
// });

//   res.json({
//     text: "Hello world!",
//     isGood: false,
//   });
//
//   res.location("https://raubuc.net");
//   res.sendStatus(302);
// });

// app.get('/', (req, res) => {
//   const fileName = 'index.html';
//   res.sendFile(fileName, {root: path.join(__dirname, 'static')});
// });

// app.get('/logo', (req, res) => {
//   const fileName = 'swan.jpg';
//   res.sendFile(fileName, {root: path.join(__dirname, 'images')});
// });
