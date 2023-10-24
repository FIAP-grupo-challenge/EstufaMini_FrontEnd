import React, { createContext, useContext, useState } from "react";
import api from "../services/api";

const PlantContext = createContext({});

function PlantProvider({ children }) {
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState({});

  async function getPlant(client_id) {
    try {
      const response = await api.get(`/api/get/plant/list?id=${client_id}`);
      setPlants(response.data);
      console.log(response.data);
      setSelectedPlant(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PlantContext.Provider
      value={{ plants, getPlant, selectedPlant, setSelectedPlant }}
    >
      {children}
    </PlantContext.Provider>
  );
}

function usePlant() {
  const context = useContext(PlantContext);
  if (!context) {
    throw new Error("usePlant must be used within an PlantProvider");
  }

  return context;
}

export { PlantProvider, usePlant };
