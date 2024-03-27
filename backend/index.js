import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import connectDB from "./config/db.js";
import vetRoutes from "./routes/vetRoutes.js";

const app = express();
dotenv.config();

connectDB();

app.use("/api/veterinarian", vetRoutes);

const PORT = process.env.PORT || 4005;

app.listen(PORT, () => {
  console.log(chalk.bgBlue(`Server is runnig on port ${PORT} `));
});
