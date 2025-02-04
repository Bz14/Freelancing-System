import { Request, Response } from "express";
import { IAuthService } from "../interfaces/authInterface";

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
}

export default AuthController;
