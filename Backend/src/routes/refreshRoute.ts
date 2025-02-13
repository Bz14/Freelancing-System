import { Router } from "express";
import RefreshController from "../controllers/refreshController";
import RefreshService from "../services/refreshService";

const refreshService = new RefreshService();
const refreshController = new RefreshController(refreshService);

const refreshRouter = Router();

refreshRouter.get("/refresh", refreshController.Refresh);

export default refreshRouter;
