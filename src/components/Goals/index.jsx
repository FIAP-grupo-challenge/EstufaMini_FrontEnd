import React from 'react';
import Lab from "../../assets/laboratory.png";

export function Goals({ firstText, secondText }) {
  return (
    <section className="row py-5 m-0" id="goals">
      <div className="row">
        <div className="col cols-sm-9 d-flex justify-content-start">
          <img src={Lab} alt="Laboratório com as plantas" className="images-sections" />
        </div>
        <div className="col cols-sm-2 text-end d-flex align-items-center">
          <h2 className="fs-2 h2">
            Mais Espaço, <span className="text-success fs-1">Menos Impacto</span> ambiental
          </h2>
        </div>
      </div>
      <div className="row fs-3">
        <p>
          {firstText}
        </p>
        <p>
          {secondText}
        </p>
      </div>
    </section>
  );
}