import JWT_SECRET from "./config";

const jwt = require("jsonwebtoken");
export const authMiddleware = (req, req, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.json({
      msg: "Something went Wrong",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userID = decoded.userID;
    next();
  } catch (error) {
    res.status(403).json({}); 
  }
};
  