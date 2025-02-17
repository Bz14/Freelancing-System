import express from "express";
import FreelancerController from "../controllers/freelancerController";
import FreelancerService from "../services/freelancerService";
import FreelancerRepository from "../repository/freelancerRepository";

const freelancerRepository = new FreelancerRepository();
const freelancerService = new FreelancerService(freelancerRepository);
const freelancerController = new FreelancerController(freelancerService);

const freelancerRoute = express.Router();

freelancerRoute.get("/freelancers", freelancerController.GetAllFreelancers);

export default freelancerRoute;
