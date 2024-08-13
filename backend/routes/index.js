const express = require("express");
const usreRouter = require("./user");
const accountRouter = require("./account");
const router = express.Router();

router.use("/user", usreRouter);
router.use("/account", accountRouter);

module.exports = router;
