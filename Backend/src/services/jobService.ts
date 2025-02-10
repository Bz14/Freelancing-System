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
}

export default JobService;
