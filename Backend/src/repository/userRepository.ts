import { PrismaClient } from "@prisma/client";
import { IUser } from "../interfaces/authInterface";
import { IFreelancer } from "../interfaces/freelancerInterface";

const prisma = new PrismaClient();

const FindUserByEmail = async (email: string): Promise<IUser | null> => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

const CreateUser = async (
  name: string,
  email: string,
  password: string,
  isFreelancer: boolean,
  verificationToken: string,
  verificationTokenExpires: Date
): Promise<IUser> => {
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
const DeleteUser = async (email: string): Promise<{ id: string }> => {
  const deletedUser = await prisma.user.delete({ where: { email } });
  return { id: deletedUser.id };
};

const VerifyUser = async (email: string): Promise<{ id: string }> => {
  return await prisma.user.update({
    where: { email },
    data: { isVerified: true },
  });
};

const SaveFreelancer = async (
  userId: string,
  skills: string[],
  experience: string,
  rating: number,
  title: string,
  bio: string
): Promise<IFreelancer> => {
  return await prisma.freelancer.create({
    data: {
      user: { connect: { id: userId } },
      skills,
      experience,
      rating,
      title,
      bio,
    },
  });
};

const SaveClient = async (userId: string, company: string) => {
  return await prisma.client.create({
    data: {
      user: { connect: { id: userId } },
      company,
    },
  });
};

export default UserRepository;
