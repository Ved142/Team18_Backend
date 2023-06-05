const route = require('express').Router()
const Admin = require("../../model/adminSchema");

// to login into admin account
route.post("/", async (req, res) => {
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

exports = module.exports = {
    adminLogin: route
}