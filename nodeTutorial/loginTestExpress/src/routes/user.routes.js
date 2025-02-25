import express from "express";
import { login, signUp } from "../controllers/user.controller.js";
import { requestLog } from "../middlewares/user.middleware.js";

const router = express.Router();

router.post("/login", requestLog, login);
router.post("/signup", requestLog, signUp);

export default router;
