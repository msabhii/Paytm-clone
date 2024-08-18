const JWT_SECRET = require("../config");
const { User, Account } = require("../db");
const { authMiddleware } = require("../middleware");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const zod = require("zod");

const signupSchema = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.post("/signup", async (req, res, next) => {
  const body = req.body;

  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      msg: "Enter valid details",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  const userId = user._id;
  const token = jwt.sign({ userId }, JWT_SECRET);

  res.json({
    msg: "User Created successfully",
    token: token,
  });

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });
});

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signin", async (req, res, next) => {
  const body = req.body;

  const { sucess } = signinSchema.safeParse(req.body);
  if (!sucess) {
    return res.json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
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
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});
router.put("/user", authMiddleware, async (req, res, next) => {
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
    res.json({
      message: "Updated successfully",
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
        firstName: {
          $regex: filter,
        },
      },
      {
        lastName: {
          $regex: filter,
        },
      },
    ],
  });

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

module.exports = router;
