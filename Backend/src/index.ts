import AuthenticationMiddleware from "./middleware/authMiddleware";
import authRouter from "./routes/authRoute";
import config from "./config/config";
import cors from "cors";
import express from "express";
import freelancerRoute from "./routes/freelancerRoute";
import jobRoute from "./routes/jobRoute";
import refreshRoute from "./routes/refreshRoute";
import RefreshMiddleware from "./middleware/refreshMiddleware";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1", RefreshMiddleware, refreshRoute);
app.use("/api/v1", AuthenticationMiddleware, jobRoute);
app.use("/api/v1", AuthenticationMiddleware, freelancerRoute);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
