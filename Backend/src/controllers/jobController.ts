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
      const {
        page,
        search,
        paymentType,
        experienceLevel,
        minBudget,
        maxBudget,
        rating,
      }: any = req.query;
      const { result, pagination }: any = await this.jobService.GetAllJobs(
        page,
        search,
        {
          paymentType,
          experienceLevel,
          minBudget,
          maxBudget,
          rating,
        }
      );

      res.status(200).json({
        message: "All jobs fetched",
        data: { jobs: result, pagination: pagination },
      });
    } catch (err: Error | any) {
      res.status(500).json({ message: err.message });
    }
  };

  GetJobById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const job = await this.jobService.GetJobById(id);
      if (!job) {
        res.status(404).json({ message: "Job not found", data: [] });
      } else {
        res.status(200).json({ message: "Job fetched", data: job });
      }
    } catch (err: Error | any) {
      res.status(500).json({ message: err.message });
    }
  };

  CreateJob = async (req: Request, res: Response) => {
    try {
      const job = req.body;
      const id = req.id;
      const newJob = await this.jobService.CreateJob(job, id);
      res.status(201).json({ message: "Job created", data: newJob });
    } catch (error: Error | any) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default JobController;
