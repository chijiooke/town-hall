"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    emailAddress: {
        type: String,
        required: true,
        min: 3,
        max: 30,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    isDisplayPictureSet: {
        type: Boolean,
        default: false,
    },
    displayPicture: {
        type: String,
        default: "",
    },
    teams: [
        {
            title: { type: String, max: 30 },
            Id: { type: String },
        },
    ],
    token: {
        type: String,
        default: "",
    },
});
exports.Users = (0, mongoose_1.model)("Users", userSchema);
