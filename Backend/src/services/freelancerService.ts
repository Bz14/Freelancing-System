import { IFreelancerRepository } from "../interfaces/freelancerInterface";

class FreelancerService {
  private repository: IFreelancerRepository;
  constructor(freelancerRepository: IFreelancerRepository) {
    this.repository = freelancerRepository;
  }
  GetAllFreelancers = async () => {
    try {
      const response = await this.repository.GetAllFreelancers();
      return response;
    } catch (error: Error | any) {
      throw new Error(error.message);
    }
  };
}

export default FreelancerService;
