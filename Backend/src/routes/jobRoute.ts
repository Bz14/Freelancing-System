import { Router } from "express";
import JobController from "../controllers/jobController";
import JobService from "../services/jobService";
import JobRepository from "../repository/JobRepository";

const jobRepository = new JobRepository();
const jobService = new JobService(jobRepository);
const jobController = new JobController(jobService);

const jobRouter = Router();

jobRouter.get("/jobs", jobController.GetAllJobs);
jobRouter.get("/jobs/:id", jobController.GetJobById);

export default jobRouter;
