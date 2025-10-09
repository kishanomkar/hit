import { validationResult } from "express-validator";
import User from "../models/women.model.js"
import * as womenService from "../services/women.services.js"
import jwt from "jsonwebtoken"

export const registerWomenController = async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const women = await womenService.registerWomen({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phoneNumber: req.body.phoneNumber,
                aadharNumber: req.body.aadharNumber,
                smartSafetyDeviceId : `SSD-${Date.now()}`

            })
            const token = women.generateAuthToken();
            res.cookie("token", token, { httpOnly: true });
            delete women._doc.password;
            res.status(201).json({ message: "Registration successful", token });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }

    }


export const loginWomenController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("All fields are required");
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      return res.status(400).send("Invalid email or password");
    }

    const token = user.generateAuthToken();

    res.cookie("token", token, { httpOnly: true, sameSite: "strict" });

    const userData = { ...user._doc };
    delete userData.password;

    res.status(200).json({ user: userData, token });

  } catch (error) {
    return res.status(400).send(error.message);
  }
};


export const logoutWomenController = async (req, res) => {
  try {
    const token =
      req.cookies?.token ||
      (req.headers.authorization &&
        req.headers.authorization.split(" ")[1]);

    if (!token) {
      return res.status(401).json({ message: "No token found" });
    }

    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
    }); 

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ error: error.message });
  }
};