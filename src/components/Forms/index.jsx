import React, { useState, useEffect } from "react";

import api from "../../services/api";

export function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthdate] = useState("");
  const [dataSave, setDataSave] = useState({});

  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(" ");

  async function submit() {
    try {
      const data = {
        cep,
        cpf,
        email,
        idade: "18",
        nome: name,
        senha: password,
      };
      const response = await api.post("/api/create/acount", data);
      console.log(response.data);
      const saveResponse = sessionStorage.setItem(
        "clientId",
        JSON.stringify(response.data)
      );
      window.open(`/checkout`, "_self");
    } catch (error) {
      console.log("não cadastrado com sucesso" + error);
    }
  }

  const sendDataToLocal = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || cpf === "") {
      return setError("Informe os dados corretos");
    } else {
    }
    submit();
  };

  return (
    <form id="buy" className="text-center">
      <h2>Garanta já sua:</h2>
      <div className="row px-3">
        <div className="col-md-4 my-2">
          <label className="form-label">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control input"
            placeholder="Ex: xxxxx@xxxxx.com"
            required
          />
        </div>
        <div className="col-md-4 my-2">
          <label className="form-label">Senha</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control input"
            placeholder="Ex:!@#$123456"
            minLength="4"
            maxLength="18"
            required
          />
        </div>

        <div className="col-md-4 my-2">
          <label className="form-label">CEP</label>
          <input
            value={cep}
            onChange={(e) => {
              setCep(e.target.value);
            }}
            type="text"
            inputMode="numeric"
            className="form-control input input"
            placeholder="Ex: 00000-000"
            required
          />
        </div>

        <div className="col-md-4 my-2">
          <label className="form-label">CPF</label>
          <input
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            type="numeric"
            className="form-control input"
            placeholder="000-000-000.00"
            required
          />
        </div>

        <div className="col-md-4 my-2">
          <label className="form-label">Data de Nascimento</label>
          <input
            value={birthDate}
            onChange={(e) => setBirthdate(e.target.value)}
            type="date"
            className="form-control input"
            required
          />
        </div>
        <div className="col-md-4 my-2">
          <label className="form-label">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control input"
            placeholder="Ex: Fulano de Tal"
            minLength="10"
            maxLength="150"
            required
          />
        </div>
        <div className="d-flex justify-content-center py-4">
          <button
            onClick={sendDataToLocal}
            className="btn btn-success btn-style py-2 px-3 w-50"
            type="submit"
          >
            Criar user
          </button>
        </div>
        <p className="text-danger">{error}</p>
      </div>
    </form>
  );
}
