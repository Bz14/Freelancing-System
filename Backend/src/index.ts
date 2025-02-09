import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/authRoute";
import refreshRoute from "./routes/refreshRoute";
import jobRoute from "./routes/jobRoute";
import cookieParser = require("cookie-parser");
import AuthenticationMiddleware from "./middleware/authMiddleware";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1", refreshRoute);
app.use("/api/v1", AuthenticationMiddleware, jobRoute);

app.get("/", (req, res) => {
  res.send("Hello World.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
