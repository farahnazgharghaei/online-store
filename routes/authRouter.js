const express = require("express");
const { login, signup } = require("../controllers/authController");
const authRouter = express.Router()

authRouter.get("/login", login);
authRouter.get("/signup", signup);

module.exports= authRouter