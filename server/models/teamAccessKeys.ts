import { model, Schema } from "mongoose";
import { TeamAccessKeyType } from "../types/TeamAccessKeyTypes";

const teamAccessKeySchema = new Schema({
  teamId: {
    type: String,
    required: true,
    min: 3,
    max: 30,
    // unique: true,
  },

  key: {
    type: String,
    required: true,
    min: 3,
    max: 30,
  },
 
});

export const TeamAccessKeys = model<TeamAccessKeyType>("TeamAccessKeys", teamAccessKeySchema);
