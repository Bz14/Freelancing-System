import { IJobRepository, IJob } from "../interfaces/jobInterfaces";
class JobService {
  private jobRepository: IJobRepository;
  constructor(jobRepository: IJobRepository) {
    this.jobRepository = jobRepository;
  }

  GetAllJobs = async (
    page: string,
    searchQuery: string,
    filterQuery: string
  ) => {
    try {
      console.log(page, searchQuery, filterQuery);
      const pageInt: number = Number(page) || 1;
      const count: number | any = await this.jobRepository.GetJobsCount(
        searchQuery,
        filterQuery
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
        filterQuery
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
      throw new Error(err.message);
    }
  };

  GetJobById = async (id: string) => {
    try {
      return await this.jobRepository.GetJobById(id);
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
