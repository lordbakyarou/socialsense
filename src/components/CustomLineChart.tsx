"use client";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Text,
  CartesianGrid,
} from "recharts";

type Props = {};

const data = [
  { month: "Jan", thisYear: 430, lastYear: 370 },
  { month: "Feb", thisYear: 550, lastYear: 390 },
  { month: "Mar", thisYear: 430, lastYear: 350 },
  { month: "Apr", thisYear: 580, lastYear: 290 },
  { month: "May", thisYear: 600, lastYear: 403 },
  { month: "Jun", thisYear: 590, lastYear: 430 },
  { month: "Jul", thisYear: 660, lastYear: 444 },
  { month: "Aug", thisYear: 730, lastYear: 500 },
  { month: "Sep", thisYear: 820, lastYear: 520 },
  { month: "Oct", thisYear: 600, lastYear: 540 },
  { month: "Nov", thisYear: 780, lastYear: 590 },
  { month: "Dec", thisYear: 700, lastYear: 600 },
];

interface Item {
  value: number;
  name: string;
  color: string;
}

export default function CustomLineChart({}: Props) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid stroke="#F3F4F6" vertical={false} />
        <XAxis tickLine={false} axisLine={false} dataKey="month" />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="thisYear"
          stroke="#D97706"
          name="This Year"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="lastYear"
          stroke="#f9bc16"
          name="Last Year"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload }: any) => {
  return (
    payload.length > 0 && (
      <div className="bg-white  shadow p-2 flex flex-col">
        <p className="font-bold text-lg">{payload[0].value}%</p>
        <div className="flex gap-2 items-center w-full">
          <div
            className={`w-3 h-3 rounded-full`}
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
            className={`w-3 h-3 rounded-full`}
            style={{ backgroundColor: item.color }}
          ></div>
          <p className="text-gray-700 font-semibold text-lg">{item.value}%</p>
          {item.name} Years Old
        </div>
      ))}
    </div>
  );
};
