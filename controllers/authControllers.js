const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User registration
module.exports.signup_post = async (req, res) => {
  try {
    const { email, password, fullName, phoneNumber, shippingAddress } =
      req.body;
    // checking if the email is already used
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      fullName,
      phoneNumber,
      shippingAddress,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration failed:", err.message);
    res.status(500).json({ error: "Registration failed" });
  }
};

// User login
module.exports.login_post = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};

module.exports.update_profile = async (req, res) => {
  try {
    const userId = req.userId;
    const { fullName, phoneNumber, shippingAddress, password } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (fullName) user.fullName = fullName;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (shippingAddress) user.shippingAddress = shippingAddress;
    if (password) {
      if (password < 6) {
        return res
          .status(400)
          .json({ error: "Password must be at least 6 characters long" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    await user.save();

    res.status(200).json({ message: "User profile updated successfully" });
  } catch (error) {
    console.error("Update failed:", err.message);
    res.status(500).json({ error: "Update failed" });
  }
};
