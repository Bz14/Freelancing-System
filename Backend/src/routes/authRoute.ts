import { Router } from "express";
import { body } from "express-validator";
import AuthController from "../controllers/authController";
import AuthService from "../services/authService";
import UserRepository from "../repository/userRepository";
import EmailService from "../services/emailService";

const userRepository = new UserRepository();
const emailService = new EmailService();
const authService = new AuthService(userRepository, emailService);
const authController = new AuthController(authService);

const authRouter = Router();
authRouter.post(
  "/signup",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[@$!%*?&]/)
      .withMessage("Password must contain at least one special character"),
  ],
  authController.Signup
);

authRouter.get("/verify", authController.Verify);
authRouter.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[@$!%*?&]/)
      .withMessage("Password must contain at least one special character"),
  ],
  authController.Login
);

export default authRouter;
