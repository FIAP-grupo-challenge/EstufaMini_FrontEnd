import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useCart } from "../../hooks/useCart";

export function Modal(props) {
  const { cart } = useCart();
  const [infoUser, setInfoUser] = useState([]);

  async function confirmation() {
    const user_id = JSON.parse(sessionStorage.getItem("clientId"));
    const response = await api.get(`/api/get/client?id=${user_id.client_id}`);
    console.log(response.data.client);
    setInfoUser(response.data.client);
  }

  async function send() {
    const user_id = JSON.parse(sessionStorage.getItem("clientId"));
    const data = {
      client_id: user_id.client_id,
      plant_type: cart,
    };
    console.log(data);
    const sendBuy = await api.post("/api/create/plant", data);
  }

  return (
    <div>
      <section className="row mx-0 my-4 w-100 d-flex justify-content-end">
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                  Confirmação
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  <ul>
                    <li>CEP: {infoUser.cep}</li>
                    <li>CPF: {infoUser.cpf}</li>
                    <li>Email: {infoUser.email}</li>
                    <li>Idade: {infoUser.idade}</li>
                    <li> Nome: {infoUser.nome}</li>
                  </ul>
                </div>
                <hr />
                <div className="px-4">
                  {cart?.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                  onClick={send}
                >
                  Confirme
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                  Parabéns
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center w-100">
                <p>Obrigado por se cadastrar!</p>
                <p>Agora acesse o seu Dashboard exclusivo</p>
              </div>
              <div className="modal-footer">
                <a
                  href={`/login`}
                  target="_blank"
                  className="btn btn-success"
                  rel="noreferrer"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-success w-50 btn-style"
          data-bs-target="#exampleModalToggle"
          data-bs-toggle="modal"
          onClick={confirmation}
        >
          Confirme a compra
        </button>
      </section>
    </div>
  );
}
