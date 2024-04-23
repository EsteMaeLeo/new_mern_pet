import express from "express";

import {
  register,
  profile,
  confirm,
  login,
} from "../controllers/vetController.js";

const router = express.Router();

router.post("/", register);
router.get("/confirm/:token", confirm);
router.post("/login", login);

router.get("/profile", profile);
export default router;
