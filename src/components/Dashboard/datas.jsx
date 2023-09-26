import React, { useState, useEffect } from "react";
import { usePlant } from "../../hooks/usePlant";
import api from "../../services/api";

export function Datas() {
  const [infoPlant, setInfoPlant] = useState({});

  const { selectedPlant } = usePlant();

  async function getPlantInfo() {
    try {
      const response = await api.get(
        `/api/get/plant/info?plant_id=${selectedPlant.plant_id}&option=all`
      );
      setInfoPlant(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPlantInfo();
  }, [selectedPlant]);

  return (
    <section className="row row-cols row-cols-md-2 row-cols-xl-2 g-4 p-2">
      <div className="col-xl-3 ">
        <div className="card p-5 bg-transparent border border-light text-light">
          <div className="card-body">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-thermometer-half text-success"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z" />
              <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
            </svg>
            <p className="card-text fs-1">{infoPlant.temp}°</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3">
        <div className="card p-5 bg-transparent border border-light text-light">
          <div className="card-body">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-droplet-half text-success"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
              />
              <path
                fill-rule="evenodd"
                d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
              />
            </svg>
            <p className="card-text fs-1">{infoPlant.humi}%</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3">
        <div className="card py-5 px-4 bg-transparent border border-light text-light">
          <div className="card-body">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-lightbulb-fill text-success"
              viewBox="0 0 16 16"
            >
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z" />
            </svg>
            <p className="card-text fs-1 ">{infoPlant.light} LUX</p>
          </div>
        </div>
      </div>
      <div className="col-xl-3">
        <div className="card p-5 bg-transparent border border-light text-light">
          <div className="card-body">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-eyedropper text-success"
              viewBox="0 0 16 16"
            >
              <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z" />
            </svg>
            <p className="card-text fs-1">{infoPlant.ph} Ph</p>
          </div>
        </div>
      </div>
    </section>
  );
}
