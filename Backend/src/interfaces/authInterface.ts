interface IAuthService {
  SignUp: (
    name: string,
    email: string,
    password: string,
    isFreelancer: boolean
  ) => {};
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
    verificationTokenExpires: number
  ) => {};
  DeleteUser: (email: string) => {};
}

export { IAuthService, IAuthRepository, IEmailService };
