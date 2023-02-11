"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const usersController_1 = require("../controllers/usersController");
exports.userRoutes = require("express").Router();
exports.userRoutes.post("/sign-up", usersController_1.signUpController);
exports.userRoutes.get("/sign-up", (req, res) => {
    res.send("/api/auth/sign-up");
});
// module.exports = userRoutes;
