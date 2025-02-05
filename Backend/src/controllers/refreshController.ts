import { Request, Response } from "express";
import { IRefreshService } from "../interfaces/refreshInterface";
import dotenv from "dotenv";

dotenv.config();

class RefreshController {
  private refreshService: IRefreshService;

  constructor(refreshService: IRefreshService) {
    this.refreshService = refreshService;
  }
  Refresh = async (req: Request, res: Response): Promise<void> => {
    const refreshToken = req.cookies.refreshToken;
    const id = req.id;
    if (!refreshToken) {
      res.status(401).send("Refresh token is required");
    }
    try {
      const { accessToken }: any = await this.refreshService.Refresh(
        id,
        refreshToken
      );
      res
        .status(200)
        .send({ message: "Access token generated", data: { accessToken } });
    } catch (error: Error | any) {
      res.status(401).send(error.message);
    }
  };
}

export default RefreshController;
