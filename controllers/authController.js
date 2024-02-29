const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {setToken} = require("../utils/functions/setToken")



// Signup function
exports.signup = async (req, res, next) => {
  const { username, email, password,term } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      term
    });
    token = setToken(user);
    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    // Handle error
    console.error(error);
    // res.status(500).json({ message: "Server error" });
    next(error)
  }
};

// Login function
exports.login = async (req, res,next) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log({ message: "User not found" });
      return res.status(404).json({ message: "Email or Password not Corret" });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log({ message: "Invalid credentials" });
      return res.status(401).json({ message: "Email or Password not Corret" });
    }
    token=setToken(user);
 
    
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    // Handle error
    console.error(error);
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
};

// module.exports = { login,signup };



/// express-mongoose-error