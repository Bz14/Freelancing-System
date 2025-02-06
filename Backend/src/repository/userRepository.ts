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
    verificationToken: string,
    verificationTokenExpires: Date,
    isFreelancer: boolean,
    createdAt: Date,
    updatedAt: Date,
    isVerified: boolean,
    googleId: string,
    profilePicture: string
  ) => {
    return await prisma.user.create({
      data: {
        name,
        email,
        password,
        verificationToken,
        verificationTokenExpires: new Date(verificationTokenExpires),
        isFreelancer,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
        isVerified,
        googleId,
        profilePicture,
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

  FindUserByGoogleId = async (googleId: string) => {
    return await prisma.user.findFirst({ where: { googleId } });
  };
}

export default UserRepository;
