import { Router } from "express";
import FreelancerController from "../controllers/freelancerController";
import FreelancerService from "../services/freelancerService";
import FreelancerRepository from "../repository/freelancerRepository";

const freelancerRepository = new FreelancerRepository();
const freelancerService = new FreelancerService(freelancerRepository);
const freelancerController = new FreelancerController(freelancerService);

const freelancerRouter = Router();

freelancerRouter.get("/freelancers", freelancerController.GetAllFreelancers);
freelancerRouter.get("/freelancer/:id", freelancerController.GetFreelancerById);

export default freelancerRouter;
