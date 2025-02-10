interface IJobService {
  GetAllJobs: () => {};
  GetJobById: (id: string) => {};
  SearchJobs: (query: any) => {};
}

interface IJobRepository {
  GetAllJobs: () => {};
  GetJobById: (id: string) => {};
  SearchJobs: (query: any) => {};
}

interface IJob {}

export { IJobService, IJobRepository, IJob };
