import React from "react";
import HomeGreen from "../../assets/Homegreen.png";

export function Home({ title, text }) {
  return (
    <section className="row py-5 m-0" id="home">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col cols-sm-2">
          <h2 className="fs-2 h2">
            <span className="text-success fs-1">Cultive</span> alimentos de
            forma <span className="text-success fs-1">inteligente</span>
          </h2>
        </div>
        <div className="col cols-sm-7 d-flex align-items-center justify-content-end">
          <img src={HomeGreen} alt="casa verde" className="images-sections" />
        </div>
      </div>
      <div className="row fs-3">
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </section>
  );
}
