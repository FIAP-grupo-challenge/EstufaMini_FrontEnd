import React from 'react';
import logoImage from "../../assets/logo-estufamini.png";
import "./styles.css";

export function Login() {
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
                <form action="" className='login d-flex flex-column align-items-center'>
                  <div className="input-size my-2">
                    <input type="text" id="nome" name="nome" className="form-control input" placeholder="Ex: Fulano de Tal"
                      minlength="10" maxlength="150" required />
                  </div>
                  <div className="input-size my-2">
                    <input type="password" id="senha" name="senha"
                      className="form-control input" placeholder="Ex:!@#$123456"
                      minlength="6" maxlength="15" required />
                  </div>
                </form>
                <button className="btn btn-success btn-size btn-style" type="submit" >Enviar</button>
                <p className="">
                  Já tem login? <a href="">Acesse</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}