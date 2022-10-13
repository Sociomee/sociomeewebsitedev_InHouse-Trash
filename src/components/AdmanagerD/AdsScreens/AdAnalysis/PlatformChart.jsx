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

const PlatformChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      
    },
  };
  const labels = [
    "Social Feed",
    "Shortz",
    "Story",
    "MarketPlace",
    "Groups",
    "Biz Pages",
    "Podcast",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Men",
        data: [4,3,6,8,7,13,22],
        backgroundColor: "#762A89",
      },
      {
        label: "Women",
        data: [5,12,4,11,15,5,6],
        backgroundColor: "#298DB8",
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default PlatformChart;
