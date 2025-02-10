import { Request, Response } from "express";
import { IJobService } from "../interfaces/jobInterfaces";
import dotenv from "dotenv";

dotenv.config();

class JobController {
  private jobService: IJobService;

  constructor(jobService: IJobService) {
    this.jobService = jobService;
  }

  GetAllJobs = async (req: Request, res: Response) => {
    try {
      const jobs = await this.jobService.GetAllJobs();
      res.status(200).json({ message: "All jobs fetched", data: jobs });
    } catch (err: Error | any) {
      res.status(500).json({ message: err.message });
    }
  };

  GetJobById = async (req: Request, res: Response) => {
    try {
      const job = await this.jobService.GetJobById(req.params.id);
      if (!job) {
        res.status(404).json({ message: "Job not found" });
      } else {
        res.status(200).json({ message: "Job fetched", data: job });
      }
    } catch (err: Error | any) {
      res.status(500).json({ message: err.message });
    }
  };
}

export default JobController;
