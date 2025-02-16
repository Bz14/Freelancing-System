import { PrismaClient } from "@prisma/client";
import { IJob } from "../interfaces/jobInterfaces";

const prisma = new PrismaClient();

class JobRepository {
  GetAllJobs = async (
    page: number,
    searchQuery: string,
    filterQuery: {
      paymentType?: string;
      experienceLevel?: string;
      minPrice?: number;
      maxPrice?: number;
      rating?: number;
    }
  ) => {
    return await prisma.job.findMany({
      where: {
        AND: [
          {
            OR: [{ status: "Open" }, { status: "Pending" }],
          },
          searchQuery
            ? {
                OR: [
                  { title: { contains: searchQuery, mode: "insensitive" } },
                  { location: { contains: searchQuery, mode: "insensitive" } },
                  {
                    description: { contains: searchQuery, mode: "insensitive" },
                  },
                ],
              }
            : {},
          filterQuery?.paymentType
            ? { paymentType: filterQuery.paymentType }
            : {},
          filterQuery?.experienceLevel
            ? { experienceLevel: filterQuery.experienceLevel }
            : {},
          filterQuery?.minPrice
            ? { paymentAmount: { gte: filterQuery.minPrice } }
            : {},
          filterQuery?.maxPrice
            ? { paymentAmount: { lte: filterQuery.maxPrice } }
            : {},
          filterQuery?.rating ? { rating: { gte: filterQuery.rating } } : {},
          { deadline: { gte: new Date() } },
        ],
      },
      orderBy: [{ postedTime: "desc" }],
      skip: (page - 1) * 6,
      take: 6,
    });
  };

  GetJobById = async (id: string) => {
    return await prisma.job.findUnique({ where: { id: id } });
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

  GetJobsCount = async (
    searchQuery: string,
    filterQuery: {
      paymentType?: string;
      experienceLevel?: string;
      minPrice?: number;
      maxPrice?: number;
      rating?: number;
    }
  ) => {
    return await prisma.job.count({
      where: {
        AND: [
          {
            OR: [{ status: "Open" }, { status: "Pending" }],
          },
          searchQuery
            ? {
                OR: [
                  { title: { contains: searchQuery, mode: "insensitive" } },
                  { location: { contains: searchQuery, mode: "insensitive" } },
                  {
                    description: { contains: searchQuery, mode: "insensitive" },
                  },
                ],
              }
            : {},
          filterQuery?.paymentType
            ? { paymentType: filterQuery.paymentType }
            : {},
          filterQuery?.experienceLevel
            ? { experienceLevel: filterQuery.experienceLevel }
            : {},
          filterQuery?.minPrice
            ? { paymentAmount: { gte: filterQuery.minPrice } }
            : {},
          filterQuery?.maxPrice
            ? { paymentAmount: { lte: filterQuery.maxPrice } }
            : {},
          filterQuery?.rating ? { rating: { gte: filterQuery.rating } } : {},
          { deadline: { gte: new Date() } },
        ],
      },
    });
  };
}

export default JobRepository;
