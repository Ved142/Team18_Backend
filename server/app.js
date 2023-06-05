const express = require("express");
const mongoose = require("mongoose");
require("./db/connection");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const { UserAdd } = require('./Routes/Users/addUser')
const { adminLogin } = require('./Routes/Admin/adminLogin')
const { staffAdd } = require('./Routes/Staff/AddStaff')
const { staffDelete } = require('./Routes/Staff/DeleteStaff')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home route!");
});

app.use('/add-user', UserAdd);
app.use('/admin-login', adminLogin);
app.use('/add-Staff', staffAdd);
app.use('/delete-Staff', staffDelete);

app.get("/about", (req, res) => {
  res.send("this is my about route");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
