interface IJobService {
  GetAllJobs: () => {};
  GetJobById: (id: string) => {};
}

interface IJobRepository {
  GetAllJobs: () => {};
  GetJobById: (id: string) => {};
}

interface IJob {}

export { IJobService, IJobRepository, IJob };
