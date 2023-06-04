const express = require("express");
const mongoose = require('mongoose')
const app = express();

// <<<<<<< Nitin-Patel
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

// const PORT = process.env.PORT || 4421

// //connect to Mongodb
// const dbURI = 'mongodb+srv://np68175:np68175@cluster0.uzwqfqr.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(dbURI)
// .then(()=>{
//     app.listen(PORT, () => {
//       console.log(`Example app listening on port ${PORT}!`);
//     });
// })
// .catch((err)=>{
//     console.log(err)
// })
// =======
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// >>>>>>> master

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
// <<<<<<< Nitin-Patel
// =======



// app.listen(3000, () => {
//   console.log("Example app listening on port 3000!");
// });
// >>>>>>> master
