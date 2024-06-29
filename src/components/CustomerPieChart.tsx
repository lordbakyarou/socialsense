"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Dot from "./ui/dot";

type Props = {};

const data = [
  { name: "15-25", value: 20, color: "#f1b505" },
  { name: "26-35", value: 30, color: "#ffa500" },
  { name: "36-45", value: 10, color: "#dba12c" },
  { name: ">45", value: 40, color: "#F3F4F6" },
];

export default function CustomerPieChart({}: Props) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={180}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={data[index % data.length].color}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          wrapperStyle={{
            position: "absolute",
            right: "30%",
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "center",
          }}
          height={100} // Adjust as needed for spacing
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload }: any) => {
  return (
    payload.length > 0 && (
      <div className="bg-white  shadow p-2 flex flex-col">
        <p className="font-bold text-lg">{payload[0].value}%</p>
        <div className="flex gap-2 items-center w-full">
          <Dot color={`bg-[${payload[0].payload.color}]`} />
          {payload[0].name} Years Old
        </div>
      </div>
    )
  );
};
