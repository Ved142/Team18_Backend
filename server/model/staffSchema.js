const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Staff_sch = new Schema({
  name: {
    type: String,
    required: true,
  },
  AdharCard_No: {
    type: String,
    required: true,
    unique: true,
  },
  Date_of_Birth: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  mobile_no: {
    type: String,
  },
  Role: {
    type: String,
  },
  Experience: {
    type: String,
  },
  Assigned_Community: {
    type: String,
    default: null,
  },
  Flag: {
    type: Boolean,
    default: true,
  },
  Created_Date: {
    type: Date,
    default: Date.now,
  },
});

//Authorization Ka Dekhna Hoga

const Staff = mongoose.model("Staff", Staff_sch);

module.exports = Staff;
