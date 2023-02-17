import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { TeamAccessKeys } from "../models/teamAccessKeysModel";
import { Users } from "../models/userModel";
import { TeamAccessKeyType } from "../types/TeamAccessKeyTypes";
import { UserSignUpRequestDataType } from "../types/UserDataType";

export const signUpController = async (
  req: Request,
  res: Response,
  next: any
) => {
  try {
    const {
      emailAddress,
      fullName,
      password,
      teamId,
      accessKey,
    }: UserSignUpRequestDataType = req.body;
    const emailExists: boolean | null = await Users.findOne({ emailAddress });
    const teamAccessKey: TeamAccessKeyType | null =
      await TeamAccessKeys.findOne({
        teamId,
        accessKey,
      });

    if (emailExists) {
      return res.status(400).json({
        message: "Email aready in use",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    if (teamAccessKey) {
      const team = await TeamAccessKeys.findOne({ Id: teamId });
      return team;
    }
    const user = await Users.create({
      emailAddress,
      fullName,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({
      data: user,
      status: false,
    });
  } catch (err) {
    return res.status(400).json({
      message: err,
    });
  }
};
