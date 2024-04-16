import express from "express";

import {
  register,
  profile,
  confirm,
  login,
} from "../controllers/vetController.js";

const router = express.Router();

router.post("/", register);

router.get("/profile", profile);
router.get("/confirm/:token", confirm);
router.post("/login", login);
export default router;
