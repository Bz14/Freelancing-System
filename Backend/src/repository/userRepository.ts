import { PrismaClient } from "@prisma/client";
import { IUser } from "../interfaces/authInterface";

const prisma = new PrismaClient();

class UserRepository {
  FindUserByEmail = async (email: string): Promise<IUser | null> => {
    return await prisma.user.findUnique({ where: { email } });
  };

  CreateUser = async (
    name: string,
    email: string,
    password: string,
    isFreelancer: boolean,
    verificationToken: string,
    verificationTokenExpires: Date
  ) => {
    return await prisma.user.create({
      data: {
        name,
        email,
        password,
        isFreelancer,
        verificationToken,
        verificationTokenExpires: new Date(verificationTokenExpires),
      },
    });
  };
  DeleteUser = async (email: string) => {
    return await prisma.user.delete({ where: { email } });
  };
  VerifyUser = async (email: string) => {
    return await prisma.user.update({
      where: { email },
      data: { isVerified: true },
    });
  };
}

export default UserRepository;
