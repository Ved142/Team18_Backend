const express = require("express");
const mongoose = require("mongoose");
require("./db/connection");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const User = require("./model/userSchema");
const Admin = require("./model/adminSchema");

const PORT = 4421;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home route!");
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
    email: req.body.email,
    password: req.body.password,
  };
  // console.log(adminDetails);

  const founduser = await Admin.findOne({ email: adminDetails.email });
  // console.log(founduser);

  if (founduser) {
    if (founduser.password === adminDetails.password) {
      res.send("authentication successful");
    } else {
      res.send("wrong password entered");
    }
  } else {
    res.send("user not found");
  }
});

app.get("/about", (req, res) => {
  res.send("this is my about route");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
