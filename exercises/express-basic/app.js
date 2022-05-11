const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server is running at port: 3000");
});

app.use(express.json());

app.post("/hello", (req, res) => {
  const { name, surname } = req.body;
});

// app.get("/", (req, res) => {
//   res.send("Strona główna");
// });

// app.get("/hi/:name", (req, res) => {
//   const { name } = req.params;
//   const dt = new Date();
//   dt.setDate(dt.getDate() + 7);
//   res.cookie("visitor_name", name, { expires: dt });
//   res.send("Imię zapisano");
// });
//
// app.get("/logout", (req, res) => {
//   res.clearCookie("Phpstorm-cd7c3319");
//   res.clearCookie("visitor_name");
//   res.redirect("/");
// });
