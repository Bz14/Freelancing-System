import { generateAccessToken } from "../utils/token";

class RefreshService {
  constructor() {}
  Refresh = async (id: string, refreshToken: string) => {
    try {
      const accessToken = generateAccessToken(id);
      return { accessToken };
    } catch (error: Error | any) {
      throw new Error(error);
    }
  };
}

export default RefreshService;
