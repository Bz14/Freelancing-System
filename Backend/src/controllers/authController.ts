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
    try {
      const message = await this.authService.SignUp(
        name,
        email,
        password,
        isFreelancer
      );
      res.status(201).json({ message: message });
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
}

export default AuthController;
