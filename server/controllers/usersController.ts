import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { Users } from "../models/userModel";

export const signUpController = async (
  req: Request,
  res: Response,
  next: any
) => {
  try {
    const { emailAddress, fullName, password } = req.body;
    const emailExists: boolean | null = await Users.findOne({ emailAddress });
    if (emailExists) {
      return res.status(400).json({
        message: "Email aready in use",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
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
