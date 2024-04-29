import express from "express";

import {
  register,
  profile,
  confirm,
  login,
  forgotPassword,
  checkToken,
  newPassword
} from "../controllers/vetController.js";

import checkAuth from "../middleware/outMiddleware.js";

const router = express.Router();
//public
router.post("/", register);
router.get("/confirm/:token", confirm);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);

router.route('/forgot-password/:token').get(checkToken).post(newPassword)

//private
router.get("/profile", checkAuth, profile);
export default router;
