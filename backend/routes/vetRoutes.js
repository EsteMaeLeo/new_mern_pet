import express from "express";

import { register, profile } from "../controllers/vetController.js";

const router = express.Router();

router.get("/register", register);

router.get("/profile", profile);
export default router;
