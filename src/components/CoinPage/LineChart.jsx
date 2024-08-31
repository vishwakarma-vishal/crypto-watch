import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Don't remove this

function LineChart({ chartData, multiAxis }) {

  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    maintainAspectRatio: false, // This ensures the chart adjusts its height as well
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
        ticks: {
          callback: function(value) {
            // You can format your label here if needed
            return value;
          },
        },
        title: {
          display: true,
          text: "Price (USD)", // Adjust this to the appropriate label for your data
        },
      },
      crypto2: multiAxis && {
        position: "right",
        ticks: {
          callback: function(value) {
            // You can format your label here if needed
            return value;
          },
        },
        title: {
          display: true,
          text: "Market Cap", // Adjust this to the appropriate label for your data
        },
      },
      x: {
        title: {
          display: true,
          text: "Date", // Adjust this to the appropriate label for your data
        },
      },
    },
  };

  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[300px] xl:h-[400px]">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default LineChart;
