import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { TeamAccessKeys } from "../models/teamAccessKeysModel";
import { Teams } from "../models/teamModel";
import { Users } from "../models/userModel";
import { TeamAccessKeyType } from "../types/TeamAccessKeyTypes";
import { TeamDataType } from "../types/TeamType";
import jwt from "jsonwebtoken";

import {
  UserModelDataType,
  UserSignInRequestDataType,
  UserSignUpRequestDataType,
} from "../types/UserDataType";

export const signUpController = async (req: Request, res: Response) => {
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
        // teamId,
        accessKey,
      });

    if (emailExists) {
      return res.status(401).json({
        message: "Email aready in use",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const teams: TeamDataType[] = [];

    // if access key was sent
    if (!!accessKey) {
      // if access key exists in list of available keys
      if (teamAccessKey) {
        const teamDataResponse = await Teams.findOne({ Id: teamId });
        !!teamDataResponse && teams.push(teamDataResponse);
        // delete single use access key
        TeamAccessKeys.deleteOne({ accessKey });
      } else {
        return res.status(400).json({
          message: "Access key not found",
        });
      }
    }

    const user = await Users.create({
      emailAddress,
      fullName,
      password: hashedPassword,
      teams,
    });
    const token = jwt.sign(
      { user_id: user._id, emailAddress },
      process.env.JWT_SECRET_KEY as string,
      {
        expiresIn: "6h",
        algorithm: "HS256",
      }
      // (err, encoded) => {
      //   err ? reject(err) : resolve(encoded);
      // }
    );

    user.token = token;
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

export const signInController = async (req: Request, res: Response) => {
  try {
    const { emailAddress, password }: UserSignInRequestDataType = req.body;
    const user: Partial<UserModelDataType> | null = await Users.findOne({
      emailAddress,
    });

    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
      });
    } else {
      if (user.password) {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(400).json({
            message: "Incorrect Credentials",
          });
        }
        const token = jwt.sign(
          { emailAddress },
          process.env.JWT_SECRET_KEY as string,
          {
            expiresIn: "6h",
            algorithm: "HS256",
          }
        );

        user.token = token;

        return res.json({
          data: {
            emailAddress: user.emailAddress,
            fullName: user.fullName,
            teams: user.teams,
            displayPisture: user.displayPicture,
            isDisplayPictureSet: user.isDisplayPictureSet,
            token: user.token,
          },
        });
      }
    }
  } catch (err) {
    return res.status(400).json({
      message: err,
    });
  }
};
