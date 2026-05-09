import { nominees } from "../data/nominees.js";

export const getPollData = (req, res) => {
  const totalVotes = nominees.reduce((acc, curr) => acc + curr.votes, 0);

  return res.status(200).json({
    success: true,
    totalVotes,
    nominees,
  });
};
