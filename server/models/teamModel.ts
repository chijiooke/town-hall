import { model, Schema } from "mongoose";
import { TeamDataType } from "../types/TeamType";
import { Users } from "./userModel";

const teamSchema = new Schema({
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

export const Teams = model<TeamDataType>("Teams", teamSchema);
