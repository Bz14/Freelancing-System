import { IJobRepository, IJob } from "../interfaces/jobInterfaces";
class JobService {
  private jobRepository: IJobRepository;
  constructor(jobRepository: IJobRepository) {
    this.jobRepository = jobRepository;
  }

  GetAllJobs = async (page: string, searchQuery: string, filter: {}) => {
    try {
      const {
        paymentType,
        experienceLevel,
        minBudget,
        maxBudget,
        rating,
      }: any = filter;
      const pageInt: number = Number(page) || 1;
      const maxBudgetInt: number = Number(maxBudget) || 1000000000;
      const minBudgetInt: number = Number(minBudget) || 0;
      const ratingInt: number = Number(rating) || 0;
      const count: number | any = await this.jobRepository.GetJobsCount(
        searchQuery,
        {
          paymentType,
          experienceLevel,
          minBudgetInt,
          maxBudgetInt,
          ratingInt,
        }
      );
      let pages = Math.ceil(count / 6);

      if (count < 6) {
        pages = 1;
      }

      if (pageInt > pages) {
        throw new Error("Page not found");
      }

      const jobs: IJob[] | any = await this.jobRepository.GetAllJobs(
        pageInt,
        searchQuery,
        {
          paymentType,
          experienceLevel,
          minBudgetInt,
          maxBudgetInt,
          rating,
        }
      );

      const result = jobs.map((job: IJob) => {
        return {
          id: job.id,
          title: job.title,
          description: job.description,
          details: job.details,
          skills: job.skills,
          company: job.company,
          experienceLevel: job.experienceLevel,
          deadline: job.deadline.toDateString(),
          paymentType: job.paymentType,
          paymentAmount: job.paymentAmount,
          location: job.location,
          postedTime: job.postedTime?.toDateString(),
        };
      });

      const pagination = {
        currentPage: `/jobs?page=${pageInt}`,
        nextPage: pageInt >= pages ? null : `/jobs?page=${pageInt + 1}`,
        prevPage: pageInt <= 1 ? null : `/jobs?page=${pageInt - 1}`,
      };
      return { result, pagination };
    } catch (err: Error | any) {
      console.log(err);
      throw new Error(err.message);
    }
  };

  GetJobById = async (id: string) => {
    try {
      const job: any = await this.jobRepository.GetJobById(id);
      const completedJobs = await this.jobRepository.CountCompletedJobs(
        job.clientId
      );

      const previousJobs = await this.jobRepository.GetPreviousJobs(
        job.clientId
      );

      console.log("Prev", previousJobs, job.clientId);
      job.client.completedJobs = completedJobs;
      job.postedTime = job.postedTime.toDateString();
      job.deadline = job.deadline.toDateString();
      job.client.previousJobs = previousJobs;
      return job;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  };

  CreateJob = async (job: IJob | any, id: string | any) => {
    try {
      return await this.jobRepository.CreateJob(job, id);
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  };
}

export default JobService;
