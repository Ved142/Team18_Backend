const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // these are just dummy values , we will define it latter
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
