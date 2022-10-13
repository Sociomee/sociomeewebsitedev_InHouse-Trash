import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Tooltip from "./Tooltip";

import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);

function ReviewChart() {
  const [tooltipModel, setTooltipModel] = useState({});

  const [showTooltip, setShowTooltip] = useState(false);

  const [position, setPosition] = useState({});

  const data = {
    labels: ["23/12-30/12", "23/03", "24/03", "25/03", "5 Days", "6 Days", "7 Days","8 Days","9 Days","10 Days"],
    datasets: [
      {
        color: "#000",
        label: "Total Reach",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "#B28CD0",
        borderColor: "#B28CD0",
        borderCapStyle: "round",
        borderJoinStyle: "round",
        pointBorderColor: "#2a2c30",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#2a2c30",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 5,
        pointRadius: 0,
        pointHitRadius: 5,
        data: [0, 14, 21, 9, 35, 31, 36,20,12,18],
      },
      {
        color: "#000",
        label: "Total Impression",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "#7BD77F",
        borderColor: "#7BD77F",
        borderCapStyle: "round",
        borderJoinStyle: "round",
        pointBorderColor: "#f84c1e",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#f84c1e",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 5,
        pointRadius: 0,
        pointHitRadius: 5,
        data: [20, 39, 10, 11, 16, 2, 40,23,12,53],
      },
      {
        color: "#000",
        label: "Demo",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "#DCA594",
        borderColor: "#DCA594",
        borderCapStyle: "round",
        borderJoinStyle: "round",
        pointBorderColor: "#f84c1e",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#f84c1e",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 5,
        pointRadius: 0,
        pointHitRadius: 5,
        data: [10, 50, 30, 15, 46, 9, 30,32,12,22],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            stepSize: 10,
          },
          gridLines: {
            drawTicks: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    tooltips: {
      // backgroundColor: "#fff",
      // callbacks: {
      //   title: function() {
      //     return "";
      //   },
      //   labelColor: function() {
      //     return "";
      //   },
      //   label: function(tooltipItem, data) {
      //     var label = tooltipItem.yLabel;
      //     return label;
      //   },
      //   labelTextColor: function(tooltipItem) {
      //     if (tooltipItem.datasetIndex === 0) {
      //       return "#2a2c30";
      //     }
      //     return "#f84c1e";
      //   }
      // },

      mode: "index",

      intersect: false,

      // Disable the on-canvas tooltip
      enabled: false,

      custom: function (tooltipModel) {
        setTooltipModel(tooltipModel);

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          setShowTooltip(false);
          return;
        }

        setShowTooltip(true);

        // `this` will be the overall tooltip
        setPosition(this._chart.canvas.getBoundingClientRect());
      },
    },
  };


  return (
    <div>
      {tooltipModel?.dataPoints !== undefined &&
        tooltipModel?.dataPoints.map((tooltip, index) => {
          return (
            <Tooltip
              data={tooltip}
              isShow={showTooltip}
              position={position}
              color={tooltipModel.labelColors[index].borderColor}
            />
          );
        })}
      <Line options={options} data={data} />
    </div>
  );
}

export default ReviewChart;
