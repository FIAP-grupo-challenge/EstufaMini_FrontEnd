import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";
import { usePlant } from "../../hooks/usePlant";
import { Line } from "react-chartjs-2";
import axios from "axios";

const data = {
  // tempo
  // /api/get/plant/graph?plant_id=1&type={value}
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
  const [value, setValue] = useState("temp");
  const { selectedPlant } = usePlant();

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
  function handleSelect(event) {
    setValue(event.target.value);
    console.log(event.target.value);
  }

  const getChartData = useCallback(async () => {
    try {
      console.log(value);
      // const response = await api.get(
      //   `/api/get/plant/graph?plant_id=1&type=temp`
      // );
      const response = await axios.get(
        `http://localhost:5000/api/get/plant/graph?plant_id=1&type=${value}`
      );

      setChartData(response.data.dados);
      console.log(response.data.dados.date);
      console.log(response.data.dados.info);
    } catch (error) {
      console.log(error);
    }
  }, [value]);

  useEffect(() => {
    getChartData();
  }, [value, getChartData]);

  return (
    <div className="col-md-9">
      <div className="card h-100 bg-transparent border border-light text-light">
        <div className="card-body d-flex flex-column">
          <select
            name=""
            id=""
            className="card-text w-25 bg-transparent border-3 border-success text-success"
            onChange={handleSelect}
          >
            {options.map((option) => (
              <option key={option.id} value={option.value}>
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
