const express = require("express");
const mongoose = require("mongoose");
require("./db/connection");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const User = require("./model/userSchema");
const Admin = require("./model/adminSchema");

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

const PORT = 4421;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/home", (req, res) => {
  res.send("Home route is there!");
});

// to add user into database
app.post("/add-user", async (req, res) => {
  const user = {
    name: req.body.name,
    phoneNo: req.body.phoneNo,
  };

  const existingUser = await User.findOne(user);
  try {
    if (existingUser) {
      console.log("User logged in:", existingUser);
      res.send("User Logged In");
    } else {
      // Creating a new User object
      const newUser = new User(user);

      // Saving the user information
      const savedUser = await newUser.save();
      console.log("User registered:", savedUser);
      res.send("new User Registered");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("User was not registered , some error occured");
  }
});

// to login into admin account
app.post("/admin-login", async (req, res) => {
  const adminDetails = {
    email: req.body.username,
    password: req.body.password,
  };
  console.log(adminDetails);

  const founduser = await Admin.findOne({ email: adminDetails.email });
  console.log(founduser);

  if (founduser) {
    if (founduser.password === adminDetails.password) {
      res.send("authentication successful");
    } else {
      res.status(400).send("wrong password entered");
    }
  } else {
    res.status(400).send("User was not registered , Not Found!!");
  }
});

app.get("/about", (req, res) => {
  res.send("this is my about route");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
