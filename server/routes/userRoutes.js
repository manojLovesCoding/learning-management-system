import express from "express";
import {
  getUserData,
  purchaseCourse,
  userEnrolledCourses
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", getUserData); //route passed
userRouter.get("/enrolled-courses", userEnrolledCourses); //route passed
userRouter.post("/purchase", purchaseCourse);

export default userRouter;
