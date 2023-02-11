import { model, Schema } from "mongoose";
import { UserDataType } from "../types/UserDataType";

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
});

export const Users = model<UserDataType>("Users", userSchema);
