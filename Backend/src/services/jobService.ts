import { IJobRepository, IJob } from "../interfaces/jobInterfaces";
class JobService {
  private jobRepository: IJobRepository;
  constructor(jobRepository: IJobRepository) {
    this.jobRepository = jobRepository;
  }

  GetAllJobs = async (page: string) => {
    try {
      const pageInt: number = Number(page) || 1;
      const count: number | any = await this.jobRepository.GetJobsCount();
      let pages = Math.ceil(count / 6);

      if (count < 6) {
        pages = 1;
      }

      if (pageInt > pages) {
        throw new Error("Page not found");
      }

      const jobs = await this.jobRepository.GetAllJobs(pageInt);

      const pagination = {
        currentPage: `/jobs?page=${pageInt}`,
        nextPage: pageInt >= pages ? null : `/jobs?page=${pageInt + 1}`,
        prevPage: pageInt <= 1 ? null : `/jobs?page=${pageInt - 1}`,
      };
      return { jobs, pagination };
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

  SearchJobs = async (query: any) => {
    try {
      return await this.jobRepository.SearchJobs(query);
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
