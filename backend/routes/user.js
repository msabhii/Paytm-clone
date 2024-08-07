import JWT_SECRET from "../config";
import { User } from "../db";
const jwt = require("jsonwebtoken");

const express = require("express");
const router = express.Router();
const zod = require("zod");

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  email: zod.string(),
});

router.post("/signup", async (req, res, next) => {
  const body = req.body;

  const { sucess } = signupSchema.safeParse(req.body);
  if (!sucess) {
    return res.json({
      msg: "Enter valid details",
    });
  }

  const user = User.findOne({
    username: body.username,
  });

  if (user._id) {
    return res.json({
      mess: "Already present in DATABASE",
    });
  }

  const dbUser = await User.create(body);
  const token = jwt.sign({ userID: dbUser._id }, JWT_SECRET);

  res.json({
    msg: "User Created successfully",
    token: token,
  });
});

const signinSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

router.post("/signin", async (req, res, next) => {
  const body = req.body;

  const { sucess } = signinSchema.safeParse(req.body);
  if (!sucess) {
    return res.json({
      msg: "Enter valid details",
    });
  }

  const user = await User.findOne({
    username: body.username,
    password: body.password,
  });

  if (!user._id) {
    return res.json({ msg: "Not a user" });
  }

  const token = jwt.sign({ userID: user._id }, JWT_SECRET);
  res.json({
    token: token,
  });
});

export const userRouter = express.Router();
