import { IFreelancerService } from "./../interfaces/freelancerInterface";
import { Request, Response } from "express";

class FreelancerController {
  private service: IFreelancerService;
  constructor(freelancerService: IFreelancerService) {
    this.service = freelancerService;
  }
  GetAllFreelancers = async (req: Request, res: Response) => {
    try {
      const response = await this.service.GetAllFreelancers();
      res.status(200).json({ message: "All freelancers", data: response });
    } catch (error: Error | any) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default FreelancerController;
