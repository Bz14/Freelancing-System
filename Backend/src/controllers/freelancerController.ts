import { Request, Response } from "express";
import { IFreelancerService } from "../interfaces/freelancerInterface";
import dotenv from "dotenv";

dotenv.config();

class FreelancerController {
  private freelancerService: IFreelancerService;

  constructor(freelancerService: IFreelancerService) {
    this.freelancerService = freelancerService;
  }

  GetAllFreelancers = async (req: Request, res: Response) => {
    try {
      const { page, search, expertise, minBudget, maxBudget, rating }: any =
        req.query;
      const { result, pagination }: any =
        await this.freelancerService.GetAllFreelancers(page, search, {
          expertise,
          minBudget,
          maxBudget,
          rating,
        });

      res.status(200).json({
        message: "All Freelancers fetched",
        data: { freelancers: result, pagination: pagination },
      });
    } catch (err: Error | any) {
      res.status(500).json({ message: err.message });
    }
  };

  //   GetFreelancerById = async (req: Request, res: Response) => {
  //     try {
  //       const id = req.params.id;
  //       const Freelancer = await this.FreelancerService.GetFreelancerById(id);
  //       if (!Freelancer) {
  //         res.status(404).json({ message: "Freelancer not found", data: [] });
  //       } else {
  //         res
  //           .status(200)
  //           .json({ message: "Freelancer fetched", data: Freelancer });
  //       }
  //     } catch (err: Error | any) {
  //       res.status(500).json({ message: err.message });
  //     }
  //   };
}

export default FreelancerController;
