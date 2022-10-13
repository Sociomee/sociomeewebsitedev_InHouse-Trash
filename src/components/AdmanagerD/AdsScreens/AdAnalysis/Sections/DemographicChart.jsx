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

const DemographicChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      
    },
  };
  const labels = [
    "13-17",
    "19-24",
    "25-34",
    "35-44",
    "45-54",
    "55-64",
    "65-74",
    "75+",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Men",
        data: [4,3,6,8,7,13,22,2],
        backgroundColor: "#2400FF",
      },
      {
        label: "Women",
        data: [5,12,4,11,15,5,6,4],
        backgroundColor: "#16C31E",
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default DemographicChart;
