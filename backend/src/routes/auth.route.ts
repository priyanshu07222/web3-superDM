import { Request, Response, Router } from "express";
import { loginController, registerController } from "../controller/auth.controller";

const router = Router();

router.post('/login', loginController);
router.post("/register", registerController)