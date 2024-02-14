const express = require("express");
const { login, signup } = require("../controllers/authController");
const validateMiddleware = require("../middlewares/validationMiddleware");
const userSchema = require("../utils/validation/userSchema");
const authRouter = express.Router()

//api
authRouter.post("/login", login);
authRouter.post("/signup", validateMiddleware(userSchema), signup);


module.exports= authRouter