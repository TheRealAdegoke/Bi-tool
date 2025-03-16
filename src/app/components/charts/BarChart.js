"use client";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export function BarChart({ data }) {
  return (
    <RechartsBarChart width={300} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="users" fill="#82ca9d" />
    </RechartsBarChart>
  );
}
