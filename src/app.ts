import express from "express";
import reportRoutes from "./routes/reports.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(express.json());
app.use("/reports", reportRoutes);

app.get("/", (_req, res) => {
  res.send("Backend Challenge API is running!");
});

app.use(errorHandler);

export default app;
