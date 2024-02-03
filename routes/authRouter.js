const express = require("express");
const { login, signup } = require("../controllers/authController");
const authRouter = express.Router()

//api
authRouter.post("/login", login);
authRouter.post("/signup", signup);


module.exports= authRouter