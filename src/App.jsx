import React from "react";
import { Dashboard } from "./pages/Dashboard";
import "./App.css";
import Chart from "chart.js/auto";
import { CategoryScale, LineElement, LinearScale } from "chart.js";
Chart.register(CategoryScale, LineElement, LinearScale);
function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
