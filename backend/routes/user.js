import JWT_SECRET from "../config";
import { User } from "../db";
import { authMiddleware } from "../middleware";
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

const updateBody = zod.object({
  username: zod.string(),
  password: zod.string(),
  email: zod.string(),
});
router.put("/user", async (req, res, next, authMiddleware) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      mess: "Error while updating information.",
    });
  }

  try {
    await User.updateOne({
      id: req._id,
    });
  } catch (error) {
    res.json({ msg: "Something went wrong." });
  }
});

router.get("/bulk", async (req, res, next) => {
  const filter = req.query.filter || "";

  const users = await User.find({
    $or: [
      {
        FirstName: { $regex: filter },
      },
      { LastName: { $regex: filter } },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.userName,
      firstName: user.FirstName,
      email: user.email,
      _id: user._id,
    })),
  });
});

export const userRouter = express.Router();
