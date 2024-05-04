import express from "express";
import { addPatient, getPatient } from "../controllers/patientController.js";
import checkAuth from "../middleware/outMiddleware.js";

const router = express.Router();

router.route("/").post(checkAuth, addPatient).get(getPatient);

export default router;
