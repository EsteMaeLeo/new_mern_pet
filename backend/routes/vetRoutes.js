import express from "express";

import { register, profile, confirm } from "../controllers/vetController.js";

const router = express.Router();

router.post("/", register);

router.get("/profile", profile);
router.get("/confirm", confirm);
export default router;
