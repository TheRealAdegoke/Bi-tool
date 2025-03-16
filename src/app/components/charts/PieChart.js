"use client";
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function PieChart({ data }) {
  return (
    <RechartsPieChart width={300} height={200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={70}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </RechartsPieChart>
  );
}
