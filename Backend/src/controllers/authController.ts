import { Request, Response } from "express";
import { IAuthService } from "../interfaces/authInterface";
import dotenv from "dotenv";

dotenv.config();

class AuthController {
  private authService: IAuthService;

  constructor(authService: IAuthService) {
    this.authService = authService;
  }
  Signup = async (req: Request, res: Response) => {
    const { name, email, password, isFreelancer } = req.body;
    console.log(req.body);
    try {
      const { user, message }: any = await this.authService.SignUp(
        name,
        email,
        password,
        isFreelancer
      );
      res.status(201).json({ message: message, data: user });
    } catch (error: Error | any) {
      res.status(400).json({ message: error.message });
    }
  };

  Verify = async (req: Request, res: Response) => {
    try {
      const { token, email } = req.query;
      const message = await this.authService.Verify(email, token);
      res.status(300).redirect(`${process.env.FRONTEND_URL}/login`);
    } catch (error: Error | any) {
      res.status(400).json({ message: error.message });
    }
  };
  Login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const { accessToken, refreshToken, user }: any =
        await this.authService.Login(email, password);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      res
        .status(200)
        .json({ message: "Login successful", data: { accessToken, user } });
    } catch (error: Error | any) {
      res.status(400).json({ message: error.message });
    }
  };
}

export default AuthController;
