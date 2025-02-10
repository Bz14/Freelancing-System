import { PrismaClient } from "@prisma/client";
import { IJob } from "../interfaces/jobInterfaces";

const prisma = new PrismaClient();

class JobRepository {
  GetAllJobs = async () => {
    return await prisma.job.findMany();
  };

  GetJobById = async (id: string) => {
    return await prisma.job.findUnique({ where: { id: id } });
  };

  SearchJobs = async (query: any) => {
    return await prisma.job.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { location: { contains: query } },
          { description: { contains: query } },
        ],
      },
    });
  };
}

export default JobRepository;
