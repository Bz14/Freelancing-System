import { IAuthRepository, IEmailService } from "../interfaces/authInterface";
import { hashPassword, comparePassword } from "../utils/passwordUtils";
import {
  generateVerificationToken,
  generateVerificationLink,
} from "../utils/generateVerificationLink";
import verificationEmail from "../utils/verification_email";
import { IUser } from "../interfaces/authInterface";
import { generateAccessToken, generateRefreshToken } from "../utils/token";
import { create } from "domain";
class AuthService {
  private authRepository: IAuthRepository;
  private emailService: IEmailService;
  constructor(authRepository: IAuthRepository, emailService: IEmailService) {
    this.authRepository = authRepository;
    this.emailService = emailService;
  }

  SignUp = async (
    name: string,
    email: string,
    password: string,
    isFreelancer: boolean
  ) => {
    try {
      const existingUser = await this.authRepository.FindUserByEmail(email);
      if (existingUser) {
        throw new Error("Email already in use");
      }
      const hashedPassword = await hashPassword(password);
      const verificationToken = await generateVerificationToken();
      const verificationTokenExpires = new Date(Date.now() + 3600000);
      const user = await this.authRepository.CreateUser(
        name,
        email,
        hashedPassword,
        isFreelancer,
        verificationToken,
        verificationTokenExpires
      );
      const verificationLink = generateVerificationLink(
        verificationToken,
        email
      );
      const emailVerification = verificationEmail(name, verificationLink);
      await this.emailService.sendEmail(
        email,
        "Email Verification",
        emailVerification
      );
      return "User created successfully.";
    } catch (error: Error | any) {
      await this.authRepository.DeleteUser(email);
      throw new Error(error);
    }
  };
  Verify = async (email: string | any, token: string) => {
    try {
      const user: IUser | any = await this.authRepository.FindUserByEmail(
        email
      );
      if (!user) {
        throw new Error("User not found");
      }
      if (user.verificationToken !== token) {
        throw new Error("Invalid token");
      }
      if (
        user.verificationTokenExpires &&
        user.verificationTokenExpires.getTime() < Date.now()
      ) {
        throw new Error("Token expired");
      }
      await this.authRepository.VerifyUser(email);
      return "User verified successfully";
    } catch (error: Error | any) {
      throw new Error(error);
    }
  };
  Login = async (email: string, password: string) => {
    try {
      const user: IUser | any = await this.authRepository.FindUserByEmail(
        email
      );
      if (!user) {
        throw new Error("User not found");
      }
      if (!user.isVerified) {
        throw new Error("User not verified");
      }
      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        throw new Error("Invalid password");
      }
      const accessToken = generateAccessToken(user.id);
      const refreshToken = generateRefreshToken(user.id);
      return {
        accessToken,
        refreshToken,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          isFreelancer: user.isFreelancer,
          createdAt: user.createdAt,
        },
      };
    } catch (error: Error | any) {
      throw new Error(error);
    }
  };
}

export default AuthService;
