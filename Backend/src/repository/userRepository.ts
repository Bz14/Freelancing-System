import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserRepository {
  FindUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({ where: { email } });
  };

  CreateUser = async (
    name: string,
    email: string,
    password: string,
    isFreelancer: boolean,
    verificationToken: string,
    verificationTokenExpires: number
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
}

export default UserRepository;
