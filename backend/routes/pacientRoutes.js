import express from "express";
import { addPacient, getPacient } from "../controllers/pacientController.js";

const router = express.Router();

router.route("/").post(addPacient).get(getPacient);

export default router;
