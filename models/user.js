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
  fullName:{
    type:String ,
    required: [true, "Please enter your full name"],
  }, 
  phoneNumber:{
    type: String,
    required: [true, "Please enter your phone number"],
  },
  shippingAddress: {
    addressLine1: {
      type: String,
      required: [true, "Please enter your address"],
    },
    addressLine2: String,
    city: {
      type: String,
      required: [false, "Please enter your city"],
    },
    state: {
      type: String,
      required: [true, "Please enter your state"],
    },
    zipCode: {
      type: String,
      required: [true, "Please enter your ZIP code"],
    },
    country: {
      type: String,
      required: [true, "Please enter your country"],
    },
  },

});
module.exports = mongoose.model("User", userSchema);
