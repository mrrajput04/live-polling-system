import express from "express";
import { voteCandidate } from "../controllers/vote.controller.js";

const router = express.Router();

router.post("/", voteCandidate);

export default router;
