const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user_Schema = new Schema({
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

const User = mongoose.model('User', user_Schema);
exports = module.exports = {
  User
};
