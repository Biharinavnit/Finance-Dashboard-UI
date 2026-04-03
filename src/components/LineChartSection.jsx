import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const LineChartSection = ({ data }) => {
  return (
    <div className="flex justify-center">
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default LineChartSection;