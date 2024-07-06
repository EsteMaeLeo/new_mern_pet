import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cors from "cors";
import connectDB from "./config/db.js";
import vetRoutes from "./routes/vetRoutes.js";
import pacientRoutes from "./routes/patientRoutes.js";

const app = express();
dotenv.config();

connectDB();

const allowDomain = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowDomain.indexOf(origin) !== -1) {
      //origen is allow
      callback(null, true);
    } else {
      callback(new Error("is not allow by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/veterinarian", vetRoutes);
app.use("/api/patient", pacientRoutes);

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(chalk.bgBlue(`Server is runnig on port ${PORT} `));
});
