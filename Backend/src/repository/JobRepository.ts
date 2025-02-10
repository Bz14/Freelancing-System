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
}

export default JobRepository;
