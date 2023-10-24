import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";
import { Line } from "react-chartjs-2";

const data = {
  // tempo
  labels: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
  datasets: [
    {
      label: "temp/mes",
      // dado
      data: [
        65, 59, 80, 81, 56, 55, 40, 8, 9, 11, 84, 90, 65, 59, 80, 81, 56, 55,
        40, 8, 9, 11, 84, 90, 65, 59, 80, 81, 56, 55,
      ],
      fill: false,
      borderColor: "#000000",
      tension: 0.1,
    },
  ],
};
export function Chart() {
  const [chartData, setChartData] = useState(data);
  return (
    <div className="col-md-9">
      <div className="card h-100 bg-transparent border border-light text-light">
        <div className="card-body">
          <Line data={chartData} className="card-text" />
        </div>
      </div>
    </div>
  );
}
