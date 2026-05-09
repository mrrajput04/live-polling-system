import { useEffect, useState } from "react";
import API from "../services/api";

const VotingPage = () => {
  const [nominees, setNominees] = useState([]);
  const [voted, setVoted] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/poll");
        setNominees(res.data.nominees);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleVote = async (id) => {
    try {
      await API.post("/vote", {
        nomineeId: id,
      });

      setVoted(true);

      alert("Vote Submitted Successfully");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Live Polling System</h1>

          <p className="text-gray-400">Vote for your favorite nominee</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {nominees.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">{candidate.name}</h2>

                  <p className="text-gray-500 mt-1">Election Nominee</p>
                </div>

                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
                  {candidate.name.charAt(0)}
                </div>
              </div>

              <button
                onClick={() => handleVote(candidate.id)}
                disabled={voted}
                className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                  voted
                    ? "bg-zinc-700 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                {voted ? "Vote Submitted" : "Vote Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
