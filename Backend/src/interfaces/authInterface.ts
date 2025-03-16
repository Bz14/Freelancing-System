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
  FindUserByEmail: (email: string) => Promise<IUser | null>;
  CreateUser: (
    name: string,
    email: string,
    password: string,
    isFreelancer: boolean,
    verificationToken: string,
    verificationTokenExpires: Date
  ) => Promise<IUser>;
  DeleteUser: (email: string) => {};
  VerifyUser: (email: string) => {};

  SaveFreelancer: (
    userId: string,
    skills: string[],
    experience: string,
    rating: number
  ) => {};

  SaveClient: (userId: string, company: string) => {};
}

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  isFreelancer: boolean;
  verificationToken?: string;
  verificationTokenExpires?: Date;
  isVerified: boolean;
}

export { IAuthService, IAuthRepository, IEmailService, IUser };
