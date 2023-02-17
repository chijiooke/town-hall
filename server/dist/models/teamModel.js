"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    title: { type: String, max: 30 },
    members: [{
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
        }]
});
