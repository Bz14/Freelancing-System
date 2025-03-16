import { IFreelancer } from "./../interfaces/freelancerInterface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class FreelancerRepository {
  GetAllFreelancers = async (
    page: number,
    searchQuery: string,
    filterQuery: {
      paymentType?: string;
      experienceLevel?: string;
      minBudgetInt?: number;
      maxBudgetInt?: number;
      ratingInt?: number;
    }
  ) => {
    return await prisma.Freelancer.findMany({
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
          filterQuery && {
            AND: [
              filterQuery?.paymentType
                ? { paymentType: filterQuery.paymentType }
                : {},
              filterQuery?.experienceLevel
                ? { experienceLevel: filterQuery.experienceLevel }
                : {},
              filterQuery?.minBudgetInt
                ? { paymentAmount: { gte: filterQuery.minBudgetInt } }
                : {},
              filterQuery?.maxBudgetInt
                ? { paymentAmount: { lte: filterQuery.maxBudgetInt } }
                : {},
              filterQuery?.ratingInt
                ? { rating: { gte: filterQuery.ratingInt } }
                : {},
            ],
          },

          { deadline: { gte: new Date() } },
        ],
      },
      orderBy: [{ postedTime: "desc" }],
      skip: (page - 1) * 6,
      take: 6,
    });
  };

  GetFreelancerById = async (id: string) => {
    return await prisma.Freelancer.findUnique({
      where: {
        id: id,
      },
      include: {
        client: { select: { id: true, company: true, rating: true } },
      },
    });
  };

  GetPreviousFreelancers = async (clientId: string) => {
    return await prisma.Freelancer.findMany({
      where: {
        clientId: clientId,
        status: "Completed",
      },
      select: {
        id: true,
        title: true,
        description: true,
      },
      take: 5,
    });
  };

  GetFreelancersCount = async (
    searchQuery: string,
    filterQuery: {
      expertise?: string;
      minBudgetInt?: number;
      maxBudgetInt?: number;
      ratingInt?: number;
    }
  ) => {
    return await prisma.freelancer.count({
      where: {
        AND: [
          searchQuery
            ? {
                OR: [
                  { title: { contains: searchQuery, mode: "insensitive" } },
                  { name: { contains: searchQuery, mode: "insensitive" } },
                  {
                    bio: { contains: searchQuery, mode: "insensitive" },
                  },
                ],
              }
            : {},
          filterQuery && {
            AND: [filterQuery?.expertise ? {
                
            } : {}],
            // AND: [
            //   filterQuery?.paymentType
            //     ? { paymentType: filterQuery.paymentType }
            //     : {},
            //   filterQuery?.experienceLevel
            //     ? { experienceLevel: filterQuery.experienceLevel }
            //     : {},
            //   filterQuery?.minBudgetInt
            //     ? { paymentAmount: { gte: filterQuery.minBudgetInt } }
            //     : {},
            //   filterQuery?.maxBudgetInt
            //     ? { paymentAmount: { lte: filterQuery.maxBudgetInt } }
            //     : {},
            //   filterQuery?.ratingInt
            //     ? { rating: { gte: filterQuery.ratingInt } }
            //     : {},
            // ],
          },
        ],
      },
      orderBy: [{ postedTime: "desc" }],
    });
  };

  CountCompletedFreelancers = async (clientId: string) => {
    return await prisma.Freelancer.count({
      where: {
        id: clientId,
        status: "Completed",
      },
    });
  };
}

export default FreelancerRepository;
