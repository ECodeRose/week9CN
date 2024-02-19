const { Router } = require("express");
const userRouter = Router();

const User = require("./model");

const { signupUser, getAllUsers, getSingleUserById } = require("./controllers");

// add user
userRouter.post("/users/signup", signupUser);

// get all users
userRouter.get("/users/getAllUsers", getAllUsers);

// get a single user by Id
userRouter.get("users/getSingleUserById/:Id", getSingleUserById);

// update user details

//delete a single user by Id

module.exports = userRouter;
