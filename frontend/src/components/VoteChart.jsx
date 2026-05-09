import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const VoteChart = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="name" />

      <YAxis />

      <Tooltip />

      <Bar dataKey="votes" />
    </BarChart>
  );
};

export default VoteChart;
