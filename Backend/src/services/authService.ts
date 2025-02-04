import { IAuthRepository, IEmailService } from "../interfaces/authInterface";
import { hashPassword } from "../utils/passwordUtils";
import {
  generateVerificationToken,
  generateVerificationLink,
} from "../utils/generateVerificationLink";
import verificationEmail from "../utils/verification_email";
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
      const verificationTokenExpires = Date.now() + 3600000;
      const user = await this.authRepository.CreateUser(
        name,
        email,
        hashedPassword,
        isFreelancer,
        verificationToken,
        verificationTokenExpires
      );
      const verificationLink = generateVerificationLink(verificationToken);
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
}

export default AuthService;
