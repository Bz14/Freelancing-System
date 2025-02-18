import {
  IFreelancerRepository,
  IFreelancer,
} from "../interfaces/freelancerInterface";

class FreelancerService {
  private freelancerRepository: IFreelancerRepository;
  constructor(freelancerRepository: IFreelancerRepository) {
    this.freelancerRepository = freelancerRepository;
  }
  GetAllFreelancers = async (page: string, searchQuery: string, filter: {}) => {
    try {
      const { expertise, minBudget, maxBudget, rating }: any = filter;
      const pageInt: number = Number(page) || 1;
      const maxBudgetInt: number = Number(maxBudget) || 1000000000;
      const minBudgetInt: number = Number(minBudget) || 0;
      const ratingInt: number = Number(rating) || 0;
      const count: number | any =
        await this.freelancerRepository.GetFreelancersCount(searchQuery, {
          expertise,
          minBudgetInt,
          maxBudgetInt,
          ratingInt,
        });
      let pages = Math.ceil(count / 6);

      if (count < 6) {
        pages = 1;
      }

      if (pageInt > pages) {
        throw new Error("Page not found");
      }

      const freelancers: IFreelancer[] | any =
        await this.freelancerRepository.GetAllFreelancers(
          pageInt,
          searchQuery,
          {
            expertise,
            minBudget,
            maxBudget,
            rating,
          }
        );

      const pagination = {
        currentPage: `/freelancers?page=${pageInt}`,
        nextPage: pageInt >= pages ? null : `/freelancers?page=${pageInt + 1}`,
        prevPage: pageInt <= 1 ? null : `/freelancers?page=${pageInt - 1}`,
      };
      return { freelancers, pagination };
    } catch (err: Error | any) {
      console.log(err);
      throw new Error(err.message);
    }
  };

  GetFreelancerById = async (id: string) => {
    try {
      const Freelancer: any = await this.FreelancerRepository.GetFreelancerById(
        id
      );
      const completedFreelancers =
        await this.FreelancerRepository.CountCompletedFreelancers(
          Freelancer.clientId
        );

      const previousFreelancers =
        await this.FreelancerRepository.GetPreviousFreelancers(
          Freelancer.clientId
        );

      console.log("Prev", previousFreelancers, Freelancer.clientId);
      Freelancer.client.completedFreelancers = completedFreelancers;
      Freelancer.postedTime = Freelancer.postedTime.toDateString();
      Freelancer.deadline = Freelancer.deadline.toDateString();
      Freelancer.client.previousFreelancers = previousFreelancers;
      return Freelancer;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  };

  CreateFreelancer = async (
    Freelancer: IFreelancer | any,
    id: string | any
  ) => {
    try {
      return await this.FreelancerRepository.CreateFreelancer(Freelancer, id);
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  };
}

export default FreelancerService;
