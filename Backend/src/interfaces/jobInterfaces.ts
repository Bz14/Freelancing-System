interface IJobService {
  GetAllJobs: (page: string | any) => {};
  GetJobById: (id: string) => {};
  SearchJobs: (query: any) => {};
  CreateJob: (job: IJob | any, id: string | any) => {};
}

interface IJobRepository {
  GetAllJobs: (page: number | any) => {};
  GetJobById: (id: string) => {};
  SearchJobs: (query: any) => {};
  CreateJob: (job: IJob | any, id: string | any) => {};
}

interface IJob {
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
