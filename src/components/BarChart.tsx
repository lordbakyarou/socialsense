"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart as BarGraph,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
} from "recharts";

type Props = {};

const data = [
  {
    name: "Jan",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    name: "Feb",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    name: "Mar",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    name: "Apr",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    name: "May",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    name: "Jun",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    name: "Jul",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    name: "Aug",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    name: "Sep",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    name: "Oct",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    name: "Nov",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
  {
    name: "Dec",
    projection: Math.floor(Math.random() * 50000) + 1000,
    actual: Math.floor(Math.random() * 50000) + 1000,
  },
];

export default function BarChart({}: Props) {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <CartesianGrid vertical={false} stroke="#F3F4F6" />
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `${value / 1000}M`}
        />
        <Bar
          dataKey={"actual"}
          fill="#f9bc16" // Yellow for actuals
          radius={[4, 4, 0, 0]}
          stackId="a"
        />
        <Bar
          dataKey={"projection"}
          fill="#F3F4F6" // Light gray for projections
          radius={[4, 4, 0, 0]}
          stackId="a"
        />
      </BarGraph>
    </ResponsiveContainer>
  );
}
