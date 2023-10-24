import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";
import { usePlant } from "../../hooks/usePlant";
import { Line } from "react-chartjs-2";
import axios from "axios";

const data = {
  labels: [1, 2, 3],
  datasets: [
    {
      axis: "x",
      label: "My First Dataset",
      data: [4, 5, 6],
      fill: false,
      borderColor: "#198754",
      tension: 0.1,
    },
  ],
};

export function Chart() {
  const [chartData, setChartData] = useState(data);
  const [value, setValue] = useState("");
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
  }

  const getChartData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/get/plant/graph?plant_id=1&type=${value}`
      );

      const old = Object.assign(chartData);
      old.datasets[0].data = response.data.dados.info.filter(
        (valor, indice, self) => {
          return self.indexOf(valor) === indice;
        }
      );
      old.labels = response.data.dados.date.filter((valor, indice, self) => {
        return self.indexOf(valor) === indice;
      });
      old.datasets[0].label = value;

      console.log("-----");
      console.log(old);
      console.log("-----");

      setChartData(old);
    } catch (error) {
      console.log(error);
    }
  }, [value, chartData]);

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
