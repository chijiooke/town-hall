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
exports.signInController = exports.signUpController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const teamAccessKeysModel_1 = require("../models/teamAccessKeysModel");
const teamModel_1 = require("../models/teamModel");
const userModel_1 = require("../models/userModel");
const signUpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { emailAddress, fullName, password, teamId, accessKey, } = req.body;
        const emailExists = yield userModel_1.Users.findOne({ emailAddress });
        const teamAccessKey = yield teamAccessKeysModel_1.TeamAccessKeys.findOne({
            // teamId,
            accessKey,
        });
        if (emailExists) {
            return res.status(401).json({
                message: "Email aready in use",
            });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const teams = [];
        // if access key was sent
        if (!!accessKey) {
            // if access key exists in list of available keys
            if (teamAccessKey) {
                const teamDataResponse = yield teamModel_1.Teams.findOne({ Id: teamId });
                !!teamDataResponse && teams.push(teamDataResponse);
                // delete single use access key
                teamAccessKeysModel_1.TeamAccessKeys.deleteOne({ accessKey });
            }
            else {
                return res.status(400).json({
                    message: "Access key not found",
                });
            }
        }
        const user = yield userModel_1.Users.create({
            emailAddress,
            fullName,
            password: hashedPassword,
            teams,
        });
        delete user.password;
        return res.json({
            data: user,
            status: false,
        });
    }
    catch (err) {
        return res.status(400).json({
            message: err,
        });
    }
});
exports.signUpController = signUpController;
const signInController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { emailAddress, password } = req.body;
        const user = yield userModel_1.Users.findOne({ emailAddress, password });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect Credentials, kindly confirm email and password",
            });
        }
        return res.json({
            data: user,
            status: false,
        });
    }
    catch (err) {
        return res.status(400).json({
            message: err,
        });
    }
});
exports.signInController = signInController;
