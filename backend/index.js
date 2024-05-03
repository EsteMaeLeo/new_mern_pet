import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import connectDB from "./config/db.js";
import vetRoutes from "./routes/vetRoutes.js";
import pacientRoutes from './routes/patientRoutes.js'

const app = express();
dotenv.config();

connectDB();
app.use(express.json())
app.use("/api/veterinarian", vetRoutes);
app.use("/api/pacients", pacientRoutes);

const PORT = process.env.PORT || 4005;

app.listen(PORT, () => {
  console.log(chalk.bgBlue(`Server is runnig on port ${PORT} `));
});
