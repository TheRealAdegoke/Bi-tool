"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = () => {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "User Growth",
        data: [300, 500, 800, 1200],
        backgroundColor: "#1976d2",
      },
    ],
  };
  return <Bar data={data} options={{ responsive: true }} />;
};
