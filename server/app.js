const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/add-user", (req, res) => {
  var name = req.body.name;
  var phoneNo = req.body.phoneNo;

  console.log(name, phoneNo);
});

app.post("/admin-login", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  console.log(email, password);
});

app.get("/about", (req, res) => {
  res.send("this is my about route");
});



app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
