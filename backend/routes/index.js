const express = require("express");
const usreRouter = require("./user");
const router = express.Router();

router.use("/user", usreRouter);

module.exports = router;
