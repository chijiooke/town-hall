"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = require("../models/userModel");
const signUpController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { emailAddress, fullName, password } = req.body;
        const emailExists = yield userModel_1.Users.findOne({ emailAddress });
        if (emailExists) {
            return res.json({
                message: "Email Aready Used",
                status: 406,
            });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield userModel_1.Users.create({
            emailAddress,
            fullName,
            password: hashedPassword,
        });
        delete user.password;
        return res.json({
            data: user,
            status: false,
        });
    }
    catch (err) {
        return res.json({
            message: err,
            status: false,
        });
    }
});
exports.signUpController = signUpController;
