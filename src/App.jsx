import React from "react";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { PlantProvider } from "./hooks/usePlant"

function App() {
  return (
    <div className="App">
      <PlantProvider>
        <Dashboard />
      </PlantProvider>
    </div>
  );
}

export default App;
