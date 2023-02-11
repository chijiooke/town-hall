"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.userSchema = new mongoose_1.default.Schema({
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
});
exports.default = mongoose_1.default.model("Users", exports.userSchema);
