import express from "express";
import { getPollData } from "../controllers/poll.controller.js";

const router = express.Router();

router.get("/", getPollData);

export default router;