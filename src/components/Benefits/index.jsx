import React from 'react';
import './styles.css';
import Plants from "../../assets/plants.png";
import Interface from "../../assets/Component 1.svg";
import Control from "../../assets/Component 2.svg";
import CarrotFood from "../../assets/Component 3.svg";
import CO2 from "../../assets/Component 4.svg";
import Chemestry from "../../assets/Component 5.svg";
import Food from "../../assets/Component 6.svg";
import FoodDrink from "../../assets/Component 8.svg"

export function Benefits(props) {
  return (
    <section className="container text-center py-5" id="benefits">
      <h2 className="h2 pb-5 fs-1">
        {props.bennefitsTitle}
      </h2>
      <div className="row row-cols-md-4 row-cols-2">
        {/* interface */}
        <div className="card text-dark card-around py-4">
          <img className="card-img" src={Plants} alt="Imagem de fundo com folhas na borda" />
          <div className="card-img-overlay text-center m-0 py-0">
            <img className="card-title icon m-0 p-0" src={Interface} alt="interface exclusiva"></img>
            <p className="card-text text-success">
              {props.interfaceControl}
            </p>
          </div>
        </div>
        <div className="card text-dark card-around py-4">
          <img className="card-img" src={Plants} alt="Imagem de fundo com folhas na borda" />
          <div className="card-img-overlay text-center m-0 py-0">
            <img className="card-title icon m-0" src={Control} alt="controle ambiental"></img>
            <p className="card-text text-success p-2">
              {props.envirementControl}
            </p>
          </div>
        </div>
        <div className="card text-dark card-around py-4">
          <img className="card-img" src={Plants} alt="Imagem de fundo com folhas na borda" />
          <div className="card-img-overlay text-center m-0 py-0">
            <img className="card-title icon m-0 p-0" src={CarrotFood} alt="Acesso a alimentos frescos, icone cenoura"></img>
            <p className="card-text text-success p-2">
              {props.freshFood}
            </p>
          </div>
        </div>
        <div className="card text-dark card-around py-4">
          <img className="card-img" src={Plants} alt="Imagem de fundo com folhas na borda" />
          <div className="card-img-overlay text-center m-0 py-0">
            <img className="card-title icon m-0 p-0" src={CO2} alt="redução de CO2"></img>
            <p className="card-text text-success">
              {props.carbonReduction}
            </p>
          </div>
        </div>
      </div>
      <div className="row row-cols-md-4 row-cols-2">
        <div className="card text-dark card-around py-4">
          <img className="card-img" src={Plants} alt="Imagem de fundo com folhas na borda" />
          <div className="card-img-overlay text-center m-0 py-0">
            <img className="card-title icon m-0 p-0" src={Chemestry} alt="redução de químicos"></img>
            <p className="card-text text-success">
              {props.chemicalsReduction}
            </p>
          </div>
        </div>
        <div className="card text-dark card-around py-4">
          <img className="card-img" src={Plants} alt="Imagem de fundo com folhas na borda" />
          <div className="card-img-overlay text-center m-0 py-0">
            <img className="card-title icon m-0 p-0" src={Food} alt="alimentação consciente"></img>
            <p className="card-text text-success p-2">
              {props.smartFood}
            </p>
          </div>
        </div>
        <div className="card text-dark card-around py-4">
          <img className="card-img" src={Plants} alt="Imagem de fundo com folhas na borda" />
          <div className="card-img-overlay text-center m-0 py-0">
            <img className="card-title icon m-0 p-0" src={Control} alt="vida sustentável"></img>
            <p className="card-text text-success p-2">
              {props.sustentabelLifeStyle}
            </p>
          </div>
        </div>
        <div className="card text-dark card-around py-4">
          <img className="card-img" src={Plants} alt="Imagem de fundo com folhas na borda" />
          <div className="card-img-overlay text-center m-0 py-0">
            <img className="card-title icon m-0 p-0" src={FoodDrink} alt="redução em desperdícios de alimentos"></img>
            <p className="card-text text-success ">
              {props.wastReductionFood}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};