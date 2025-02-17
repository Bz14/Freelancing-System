import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class FreelancerRepository {
  constructor() {}

  GetAllFreelancers = async () => {
    return await prisma.freelancer.findMany({
      include: {
        user: {
          select: {
            name: true,
            profilePic: true,
          },
        },
      },
    });
  };
}

export default FreelancerRepository;
