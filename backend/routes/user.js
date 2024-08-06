import JWT_SECRET from "../config";
import { User } from "../db";
const jwt = require("jsonwebtoken");

const express = require("express");
const router = express.Router();
const zod = require("zod");

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstname: zod.string(),
  email: zod.string(),
});

router.post("/signup", async (req, res, next) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      msg: "Not valid inputs",
    });
  }

  const user = User.findOne({
    username: body.username,
  });

  if (user._id) {
    return res.json({
      msg: "Already in Database",
    });
  }

  const dbUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET
  );
  res.json({
    mess: "User Created sucessfully",
    token: token,
  });
});

const signinSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

router.post("/signin", async (res, req, next) => {
  const body = req.body;
  const { sucess } = signinSchema.safeParse(req.body);
  if (!sucess) {
    res.json({
      mess: "Something went wrong",
    });
  }

  const user = await User.findOne({
    username: body.username,
    password: req.body.password,
  });

  if (!user) {
    return res.json({
      mess: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      userID: user._id,
    },
    JWT_SECRET
  );
  res.json({
    token: token,
  }); 
});

export const userRouter = express.Router();
