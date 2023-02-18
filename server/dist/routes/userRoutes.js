"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const usersController_1 = require("../controllers/usersController");
exports.userRoutes = require("express").Router();
exports.userRoutes.post("/sign-up", usersController_1.signUpController);
exports.userRoutes.post("/sign-in", usersController_1.signInController);
// userRoutes.get("/sign-up", (req: Request, res: Response) => {
//     res.send("/api/auth/sign-up");
// });
