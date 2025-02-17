import { NextFunction, Request, Response } from "express";

const jwt = require("jsonwebtoken");

const RefreshMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers["authorization"];
  const [bearer, token]: any = authHeader
    ? authHeader.split(" ")
    : [null, null];

  if (bearer == null || token == null) {
    res.status(401).json({ message: "Bearer token is missing or invalid" });
  }

  // if (bearer.toLowerCase() !== "bearer") {
  //   res.status(401).json({ message: "Bearer token is missing or invalid" });
  // }

  try {
    const decoded = jwt.decode(token, process.env.ACCESS_TOKEN_SECRET);
    req.id = decoded.id;
    next();
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

export default RefreshMiddleware;
