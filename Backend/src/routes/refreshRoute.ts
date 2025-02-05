import { Router } from "express";
import RefreshController from "../controllers/refreshController";
import RefreshService from "../services/refreshService";
import AuthenticationMiddleware from "../middleware/authMiddleware";

const refreshService = new RefreshService();
const refreshController = new RefreshController(refreshService);

const refreshRouter = Router();

refreshRouter.get(
  "/refresh",
  AuthenticationMiddleware,
  refreshController.Refresh
);

export default refreshRouter;
