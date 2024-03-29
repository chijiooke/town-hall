"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teams = void 0;
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    title: { type: String, max: 30 },
    members: [
        {
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
        },
    ],
});
exports.Teams = (0, mongoose_1.model)("Teams", teamSchema);
