interface IJobService {
  GetAllJobs: (
    page: string | any,
    searchQuery: string | any,
    filterQuery: string | any
  ) => {};
  GetJobById: (id: string) => {};
  CreateJob: (job: IJob | any, id: string | any) => {};
}

interface IJobRepository {
  GetAllJobs: (
    page: number | any,
    searchQuery: string | any,
    filterQuery: {} | any
  ) => {};
  GetJobById: (id: string) => {};
  CreateJob: (job: IJob | any, id: string | any) => {};
  GetJobsCount: (searchQuery: string, filterQuery: {} | any) => {};
  CountCompletedJobs: (clientId: string) => {};
}

interface IJob {
  id?: string;
  title: string;
  description: string;
  details?: string;
  skills: string[];
  company: string;
  experienceLevel: string;
  deadline: Date;
  postedTime?: Date;
  paymentType: string;
  paymentAmount: number;
  location?: string;
  status?: string;
  proposalSent?: number;
  rating?: number;
  clientId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export { IJobService, IJobRepository, IJob };
