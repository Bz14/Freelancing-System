export interface IFreelancerRepository {
  GetAllFreelancers: (
    page: string | any,
    searchQuery: string | any,
    filterQuery: string | any
  ) => {};

  GetFreelancersCount: (
    searchQuery: string,
    filterQuery: {
      expertise?: string;
      minBudgetInt?: number;
      maxBudgetInt?: number;
      ratingInt?: number;
    }
  ) => {};
}

export interface IFreelancerService {
  GetAllFreelancers: (
    page: string | any,
    searchQuery: string | any,
    filterQuery: string | any
  ) => {};
}

export interface IFreelancer {
  id?: string;
  name: string;
  title: string;
  bio: string;
  languages: string[];
  accounts: {
    linkedin: string;
    github: string;
    portfolio?: string;
  };
  education?: {
    degree?: string;
    institution?: string;
    year?: number;
  };
  experience?: {
    title?: string;
    company?: string;
    year?: number;
  };
  portfolioWork?: {
    title?: string;
    description?: string;
    link?: string;
  };
  skills: string[];
  location?: string;
  rating?: number;
  testimonials?: {
    name: string;
    comment: string;
    rating: number;
  };
  certificates?: {
    title: string;
    description: string;
    link: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
