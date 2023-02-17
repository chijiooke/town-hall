"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamAccessKeys = void 0;
const mongoose_1 = require("mongoose");
const teamAccessKeySchema = new mongoose_1.Schema({
    teamId: {
        type: String,
        required: true,
        min: 3,
        max: 30,
    },
    accesskey: {
        type: String,
        required: true,
        min: 3,
        max: 30,
        unique: true,
    },
});
exports.TeamAccessKeys = (0, mongoose_1.model)("TeamAccessKeys", teamAccessKeySchema);
