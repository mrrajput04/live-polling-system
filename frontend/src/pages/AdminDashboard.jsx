import { useEffect, useState } from "react";
import API from "../services/api";
import socket from "../socket/socket";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#2563eb", "#7c3aed", "#db2777", "#ea580c", "#16a34a"];

const AdminDashboard = () => {
  const [nominees, setNominees] = useState([]);
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/poll");

        setNominees(res.data.nominees);
        setTotalVotes(res.data.totalVotes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    socket.on("voteUpdated", (updatedData) => {
      setNominees(updatedData);

      const total = updatedData.reduce((acc, curr) => acc + curr.votes, 0);

      setTotalVotes(total);
    });

    return () => {
      socket.off("voteUpdated");
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl font-bold">Admin Dashboard</h1>

          <p className="text-gray-400 mt-3">Live election analytics</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <p className="text-gray-400 mb-2">Total Votes</p>

            <h2 className="text-5xl font-bold">{totalVotes}</h2>
          </div>

          {nominees.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800"
            >
              <p className="text-gray-400 mb-2">{item.name}</p>

              <h2 className="text-5xl font-bold">{item.votes}</h2>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
          <h2 className="text-3xl font-semibold mb-10">
            Live Vote Distribution
          </h2>

          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={nominees}
                  dataKey="votes"
                  nameKey="name"
                  outerRadius={180}
                  label
                >
                  {nominees.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
