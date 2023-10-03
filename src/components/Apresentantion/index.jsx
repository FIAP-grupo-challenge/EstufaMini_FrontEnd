import React from "react";
import "./styles.css";
import MiniEstufa from "../../assets/shopping-removebg-preview.png";

export function Apresentantion() {
  return (
    <div>
      <div className="card text-light d-flex align-items-center justify-content-center bg-image">
        <div className="row row-cols-2 text-center p-4 m-0 overlay-img ">
          <div className="card-text d-flex flex-column justify-content-center">
            <h1>
              <span className="span">Pequenas</span> estufas
            </h1>
            <h1>
              <span className="span">Grandes</span> colheitas
            </h1>
          </div>
          <div className="card-text d-flex flex-column justify-content-center align-items-center p-0 m-0">
            <img src={MiniEstufa} alt="" className="estufa" />
          </div>
        </div>
      </div>
    </div>
  );
}
