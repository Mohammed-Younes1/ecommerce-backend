const jwt = require("jsonwebtoken");
const User = require("../models/user");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded._id, "tokens.token": token });

    if (!user) {
      console.error("User not found");
      throw new Error("User not found");
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ error: "Please authenticate." });
  }
};

module.exports = isAuthenticated;
