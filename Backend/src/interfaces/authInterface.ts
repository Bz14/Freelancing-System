interface IAuthService {
  SignUp: (
    name: string,
    email: string,
    password: string,
    isFreelancer: boolean
  ) => {};

  Verify: (email: string | any, token: string | any) => {};
  Login: (email: string, password: string) => {};
}
interface IEmailService {
  sendEmail: (email: string, subject: string, message: string) => {};
}

interface IAuthRepository {
  FindUserByEmail: (email: string) => {};
  CreateUser: (
    name: string,
    email: string,
    password: string,
    isFreelancer: boolean,
    verificationToken: string,
    verificationTokenExpires: Date
  ) => {};
  DeleteUser: (email: string) => {};
  VerifyUser: (email: string) => {};
}

interface IUser {
  name: string;
  email: string;
  password: string;
  isFreelancer: boolean;
  verificationToken?: string;
  verificationTokenExpires?: Date;
  isVerified: boolean;
}

export { IAuthService, IAuthRepository, IEmailService, IUser };
