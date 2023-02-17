import { model, Schema } from "mongoose";
import { UserModelDataType } from "../types/UserDataType";

const userSchema = new Schema({
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
});

export const Users = model<UserModelDataType>("Users", userSchema);
