import { nominees } from "../data/nominees.js";
import { io } from "../server.js";

export const voteCandidate = (req, res) => {
  try {
    const { nomineeId } = req.body;

    // Prevent multiple voting
    if (req.session.voted) {
      return res.status(400).json({
        success: false,
        message: "You already voted",
      });
    }

    const nominee = nominees.find((item) => item.id === nomineeId);

    if (!nominee) {
      return res.status(404).json({
        success: false,
        message: "Nominee not found",
      });
    }

    nominee.votes += 1;

    // Save voting session
    req.session.voted = true;

    // Emit real-time update
    io.emit("voteUpdated", nominees);

    return res.status(200).json({
      success: true,
      message: "Vote submitted successfully",
      data: nominees,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
