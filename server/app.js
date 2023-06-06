const express = require("express");
const mongoose = require("mongoose");
require("./db/connection");
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// <<<<<<< Nitin-Patel
// const cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

// const PORT = 4421;

// const { UserAdd } = require("./Routes/Users/addUser");
// const { adminLogin } = require("./Routes/Admin/adminLogin");
// const { staffAdd } = require("./Routes/Staff/AddStaff");
// const { staffDelete } = require("./Routes/Staff/DeleteStaff");
// const { staffDetails } = require("./Routes/Staff/getStaffDetails");

// =======
// const User = require("./model/userSchema");
// const Admin = require("./model/adminSchema");

// const PORT = 4421;

// >>>>>>> master
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Home route!");
// <<<<<<< Nitin-Patel
// =======
// });

// // to add user into database
// app.post("/add-user", async (req, res) => {
//   const user = {
//     name: req.body.name,
//     phoneNo: req.body.phoneNo,
//   };

//   const existingUser = await User.findOne(user);
//   try {
//     if (existingUser) {
//       console.log("User logged in:", existingUser);
//       res.send("User Logged In");
//     } else {
//       // Creating a new User object
//       const newUser = new User(user);

//       // Saving the user information
//       const savedUser = await newUser.save();
//       console.log("User registered:", savedUser);
//       res.send("new User Registered");
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(400).send("User was not registered , some error occured");
//   }
// });

// // to login into admin account
// app.post("/admin-login", async (req, res) => {
//   const adminDetails = {
//     email: req.body.email,
//     password: req.body.password,
//   };
//   // console.log(adminDetails);

//   const founduser = await Admin.findOne({ email: adminDetails.email });
//   // console.log(founduser);

//   if (founduser) {
//     if (founduser.password === adminDetails.password) {
//       res.send("authentication successful");
//     } else {
//       res.send("wrong password entered");
//     }
//   } else {
//     res.send("user not found");
//   }
// >>>>>>> master
// });

app.use("/add-user", UserAdd);
app.use("/admin-login", adminLogin);
app.use("/add-Staff", staffAdd);
app.use("/delete-Staff", staffDelete);
app.use("/details-staff", staffDetails);

app.get("/about", (req, res) => {
  res.send("this is my about route");
});

// app.listen(PORT, () => {
// <<<<<<< Nitin-Patel
//   console.log(`http://localhost:${PORT}`);
// =======
//   console.log(`Example app listening on port ${PORT}!`);
// >>>>>>> master
});
