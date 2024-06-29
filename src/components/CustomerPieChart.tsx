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

import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

const data = [
  { name: "15-25", value: 20, color: "#f1b505" },
  { name: "26-35", value: 30, color: "#ffa500" },
  { name: "36-45", value: 10, color: "#dba12c" },
  { name: ">45", value: 40, color: "#F3F4F6" },
];

interface Item {
  value: number;
  name: string;
  color: string;
}

export default function CustomerPieChart({}: Props) {
  const onlyWidth = useWindowWidth();
  const tabletWidth = onlyWidth < 1300;
  const mobileWidth = onlyWidth < 425;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={mobileWidth ? 40 : 100}
          outerRadius={mobileWidth ? 80 : 140}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={data[index % data.length].color}
              className="focus:outline-none"
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        {!tabletWidth ? (
          <Legend
            content={<CustomLegend />}
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{
              position: "absolute",
              right: "10px", // Adjust the right position as needed
              top: "50%",
              transform: "translateY(-50%)",
              textAlign: "left",
            }}
          />
        ) : (
          <Legend
            content={<CustomLegend2 />}
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{
              marginTop: "30px",
            }}
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload }: any) => {
  return (
    payload.length > 0 && (
      <div className="bg-white shadow p-2 flex flex-col">
        <p className="font-bold text-lg">{payload[0].value}%</p>
        <div className="flex gap-2 items-center w-full">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: payload[0].payload.color }}
          ></div>
          {payload[0].name} Years Old
        </div>
      </div>
    )
  );
};

const CustomLegend = ({ active, payload }: any) => {
  return (
    <div className=" p-2 flex flex-col">
      {payload.map((item: Item, index: number) => (
        <div key={index} className="flex gap-2 items-center w-full">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color }}
          ></div>
          <p className="text-gray-700 font-semibold text-lg max-2xl:text-sm ">
            {item.value}%
          </p>
          {item.name} Years Old
        </div>
      ))}
    </div>
  );
};

const CustomLegend2 = ({ active, payload }: any) => {
  return (
    <div className=" p-2 flex flex-col">
      {payload.map((item: Item, index: number) => (
        <div key={index} className="flex gap-2 items-center w-full">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color }}
          ></div>
          <p className="text-gray-700 font-semibold text-lg max-2xl:text-sm ">
            {item.value}%
          </p>
          {item.name} Years Old
        </div>
      ))}
    </div>
  );
};
