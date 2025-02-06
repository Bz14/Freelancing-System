interface IAuthService {
  SignUp: (
    name: string,
    email: string,
    password: string,
    isFreelancer: boolean
  ) => {};

  Verify: (email: string | any, token: string | any) => {};
  Login: (email: string, password: string) => {};
  LoginWithGoogle: (user: any) => {};
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
    verificationToken: string,
    verificationTokenExpires: Date,
    isFreelancer: boolean,
    createdAt: Date,
    updatedAt: Date,
    isVerified: boolean,
    googleId: string,
    profilePicture: string
  ) => {};
  DeleteUser: (email: string) => {};
  VerifyUser: (email: string) => {};
  FindUserByGoogleId: (googleId: string) => {};
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
