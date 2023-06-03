const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("this is my about route");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
