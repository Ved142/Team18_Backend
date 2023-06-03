const express = require("express");
const mongoose = require('mongoose')
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 4421

//connect to Mongodb
const dbURI = 'mongodb+srv://np68175:np68175@cluster0.uzwqfqr.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI)
.then(()=>{
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}!`);
    });
})
.catch((err)=>{
    console.log(err)
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("this is my about route");
});
