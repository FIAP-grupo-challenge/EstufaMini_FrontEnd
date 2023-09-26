import React, { useState } from "react";
import MiniEstufa from "../../assets/shopping-removebg-preview.png";
import Gabinete from "../../assets/gabinete-costa.svg";
import ExampleInside from "../../assets/Compare.svg";
import ExampleOut from "../../assets/interface_device.svg";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Sell } from "../../components/Sell";
import { Modal } from "../../components/Modal";
import { Sumary } from "../../components/Sumary";
import api from "../../services/api";
import { useCart } from "../../hooks/useCart";
import "./styles.css";

export function Checkout() {
  // const { cart } = useCart();
  // const [infouser, setInfoUser] = useState({});

  // async function confirmation() {
  //   const user_id = sessionStorage.getItem("clientId");
  //   const response = await api.get(`/api/get/client?id=${user_id}`);
  //   setInfoUser(response.data);
  // }
  // async function send() {
  //   const user_id = sessionStorage.getItem("clientId");
  //   const sendBuy = await api.post("/api/create/plant", user_id, cart);
  // }

  return (
    <div>
      <div>
        <Header />
      </div>
      <main className="container">
        {/* nome */}
        <section>
          <h1 className="text-center">Mini Estufa inteligente - estufamini®</h1>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill text-success"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill text-success"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill text-success"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill text-success"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-half text-success"
              viewBox="0 0 16 16"
            >
              <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
            </svg>
            <p>4.5 (45 avaliações)</p>
          </div>
          <hr />
        </section>
        {/* Ilustração e Venda */}
        <section className="row row-cols-lg-2 m-3">
          {/* Ilustração */}
          <div className="row d-flex flex-column images-estufa">
            <div className="col d-flex justify-content-center">
              <img
                src={MiniEstufa}
                alt="Gabinete frontal"
                className="estufaMini"
              />
            </div>
            {/* exemplos */}
            <div className="d-flex col text-center my-5 p-0">
              <div className="cols-sm w-100">
                <img
                  src={Gabinete}
                  alt="Costas do gabinete"
                  className="examples"
                />
              </div>
              <div className="cols-sm w-100">
                <img
                  src={ExampleInside}
                  alt="componentes internos do gabinete"
                  className="examples"
                />
              </div>
              <div className="cols-sm w-100 ">
                <img
                  src={ExampleOut}
                  alt="componentes externos"
                  className="examples"
                />
              </div>
            </div>
          </div>
          <Sell />
        </section>
        <Sumary />
        <Modal />
      </main>
      <Footer />
    </div>
  );
}
