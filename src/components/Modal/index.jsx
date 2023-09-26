import React, { useState } from "react";
import api from "../../services/api";

export function Modal(props) {
  const [showModal, setShowModal] = useState(false);

  async function request() {
    let saveData = sessionStorage.getItem("clientId");

    saveData = JSON.parse(saveData);

    const infoClient = await api.get(
      `/api/get/client?id=${saveData.client_id}`
    );
    // console.log(infoClient);
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
                <p>{props.name}</p>
                <p>{props.cpf}</p>
                <p>{props.email}</p>
                <p>{props.cep}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-success"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
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
                  href={`/dash`}
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
          onClick={request}
        >
          Enviar Dados
        </button>
      </section>
    </div>
  );
}
