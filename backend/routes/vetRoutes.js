import express from "express";

import {
  register,
  profile,
  confirm,
  login,
} from "../controllers/vetController.js";

import checkAuth from "../middleware/outMiddleware.js";

const router = express.Router();

router.post("/", register);
router.get("/confirm/:token", confirm);
router.post("/login", login);

router.get("/profile", checkAuth, profile);
export default router;
