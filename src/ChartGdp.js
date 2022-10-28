import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const dataOld = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function ChartGdp({ chartData }) {
  return <Bar options={options} data={chartData} />;
}
