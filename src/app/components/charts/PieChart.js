"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const data = {
    labels: ["Electronics", "Clothing", "Food"],
    datasets: [
      {
        label: "Category Distribution",
        data: [50, 30, 20],
        backgroundColor: ["#1976d2", "#dc004e", "#f57c00"],
      },
    ],
  };
  return <Pie data={data} options={{ responsive: true }} />;
};
