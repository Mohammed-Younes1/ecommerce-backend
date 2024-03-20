const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    // validate: [isEmail, "Please enter a valid email"],
    required: [true, "Please enter an email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Minimum password length is 6 characters"],
  },
});
module.exports = mongoose.model("User", userSchema);
