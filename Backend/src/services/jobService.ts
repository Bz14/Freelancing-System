import { IJobRepository, IJob } from "../interfaces/jobInterfaces";
class JobService {
  private jobRepository: IJobRepository;
  constructor(jobRepository: IJobRepository) {
    this.jobRepository = jobRepository;
  }

  GetAllJobs = async () => {
    try {
      return await this.jobRepository.GetAllJobs();
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
}

export default JobService;
