import { Request, Response, Router } from "express";
import { getUserProfile, updateUserProfile, userController } from "../controller/user.controller";


export const userRouter = Router()

userRouter.post("/user/getUser", getUserProfile)


userRouter.put("/user/update", updateUserProfile)

userRouter.post("/user", userController)

userRouter.get("/user/get", )