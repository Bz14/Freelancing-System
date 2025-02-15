import { PrismaClient } from "@prisma/client";
import { IJob } from "../interfaces/jobInterfaces";

const prisma = new PrismaClient();

class JobRepository {
  GetAllJobs = async (page: number) => {
    return await prisma.job.findMany({
      where: {
        OR: [{ status: "Open" }, { status: "Pending" }],
        deadline: { gte: new Date() },
      },
      orderBy: [{ postedTime: "desc" }],
      skip: (page - 1) * 6,
      take: 6,
    });
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

  CreateJob = async (job: IJob | any, id: string | any) => {
    return await prisma.job.create({
      data: {
        title: job.title,
        description: job.description,
        details: job.details,
        skills: job.skills,
        company: job.company,
        experienceLevel: job.experienceLevel,
        deadline: new Date(job.deadline),
        paymentType: job.paymentType,
        paymentAmount: job.paymentAmount,
        location: job.location,
        clientId: id,
      },
    });
  };

  GetJobsCount = async () => {
    return await prisma.job.count();
  };
}

export default JobRepository;
