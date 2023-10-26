import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";
import { usePlant } from "../../hooks/usePlant";
import { Line } from "react-chartjs-2";
import axios from "axios";
// import { BarChart } from "./Charts/BarChart";
const data = {
  labels: [],
  datasets: [
    {
      axis: "x",
      label: "My First Dataset",
      data: [],
      fill: false,
      borderColor: "#198754",
      tension: 0.1,
    },
  ],
};
export function Chart() {
  const [chartData, setChartData] = useState(data);
  const [value, setValue] = useState("temp");
  const options = [
    {
      id: "0",
      label: "",
      value: 0,
    },
    {
      id: "1",
      label: "temperatura",
      value: "temp",
    },
    {
      id: "2",
      label: "humidade",
      value: "humi",
    },
    {
      id: "3",
      label: "luz",
      value: "light",
    },
    {
      id: "4",
      label: "PH",
      value: "ph",
    },
  ];

  const getChartData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:80/api/get/plant/graph?plant_id=1&type=${value}`
      );

      const updatedData = {
        labels: response.data.dados.date,
        datasets: [
          {
            axis: "x",
            label: value,
            data: response.data.dados.info,
            fill: false,
            borderColor: "#198754",
            tension: 0.1,
          },
        ],
      };

      setChartData(updatedData);
    } catch (error) {
      console.log(error);
    }
  }, [value]);

  useEffect(() => {
    getChartData();
  }, [value]);

  return (
    <div className="col-md-9">
      <div className="card h-100 bg-transparent border border-light text-light">
        <div className="card-body d-flex flex-column">
          <select
            name=""
            id=""
            className="card-text w-25 bg-transparent border-3 border-success text-success"
            onChange={(e) => setValue(e.target.value)}
          >
            {options.map((option) => (
              <option className="p-2" key={option.id} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Line data={chartData} className="card-text" />
        </div>
      </div>
    </div>
  );
}
