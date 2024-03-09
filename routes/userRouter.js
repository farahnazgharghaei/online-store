const express = require("express");
const userRouter = express.Router();

const { isLogined, isAdmin } = require("../middlewares/authMiddleware");
const { getAllUsers } = require("../controllers/userController");

//api
userRouter.get("/user", getAllUsers); //all
userRouter.get("/users", isLogined, isAdmin, getAllUsers); //all

// userRouter.get("/users/:id", getUser); //single
// userRouter.post(
//   "/users",
//   validateMiddleware(userSchema),
//   isLogined,
//   isAdmin,
//   createUser
// ); //create
// userRouter.put(
//   "/users/:id",
//   validateMiddleware(userSchema),
//   updateUser
// ); //update
// userRouter.delete("/users/:id", deleteUser); //delete

module.exports = userRouter;
