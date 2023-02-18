import { Request, Response } from "express";
import { signUpController } from "../controllers/usersController";

export const userRoutes = require("express").Router();

userRoutes.post("/sign-up", signUpController);
userRoutes.post("/sign-in", signInController);
// userRoutes.get("/sign-up", (req: Request, res: Response) => {
//     res.send("/api/auth/sign-up");
// });

