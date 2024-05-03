import express from "express";
import { addPatient, getPatient } from "../controllers/patientController.js";

const router = express.Router();

router.route("/").post(addPatient).get(getPatient);

export default router;
