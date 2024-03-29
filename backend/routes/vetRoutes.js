import express from "express";

import { register, profile } from "../controllers/vetController.js";

const router = express.Router();

router.post("/", register);

router.get("/profile", profile);
export default router;
