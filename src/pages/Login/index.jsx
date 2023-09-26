import React, { useState } from "react";
import logoImage from "../../assets/logo-estufamini.png";
import "./styles.css";
import api from "../../services/api";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      const info = {
        email,
        senha: password,
      };
      const { data } = await api.post("/api/get/client/login", info);
      console.log(data);
      if (!data.resposta) {
        alert("Usuário ou Senha inválidos");
        return;
      }

      const saveResponse = sessionStorage.setItem(
        "user_info",
        JSON.stringify(data)
      );

      window.location.href = "/dash";
    } catch (error) {
      alert("user inválido");
    }
  }
  return (
    <div>
      <div className="vh-100 background-img img-fluid">
        <section className="overlay">
          <div className="row d-flex justify-content-center align-items-center m-0 p-0 h-100 p-4">
            <div className="bg-light p-3 border rounded-3 d-flex flex-column login h-50 justify-content-center align-items-center text-center">
              <div className="d-flex flex-column justify-content-around align-items-center h-100">
                <div className="w-50">
                  <img src={logoImage} alt="logo" className="image" />
                </div>
                <form
                  action=""
                  className="login d-flex flex-column align-items-center"
                >
                  <div className="input-size my-2">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control input"
                      placeholder="Ex: xxx@xxx.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-size my-2">
                    <input
                      type="password"
                      id="senha"
                      name="senha"
                      className="form-control input"
                      placeholder="Ex:!@#$123456"
                      minLength="6"
                      maxLength="15"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </form>
                <button
                  className="btn btn-success btn-size btn-style"
                  type="submit"
                  onClick={login}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
