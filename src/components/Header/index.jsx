import React from 'react';
import Logo from '../../assets/logo-estufamini.png';


export function Header() {
  return (
    <div>
      <main>
        <header className="border-bottom border-3 border-success my-2">
          <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid ">
              <a className="navbar-brand" href={`/`}>
                <img src={Logo} alt="Logo Miniestufa" className="logo px-5 py-3" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse text-center justify-content-between" id="navbarNav">
                <ul className="navbar-nav pt-1 d-flex w-100 justify-content-around">
                  <li className="nav-item px-2 py-3">
                    <a className="nav-link" aria-current="page" href="#home">Home</a>
                  </li>
                  <li className="nav-item px-2 py-3">
                    <a className="nav-link" href="#goals">Objetivos</a>
                  </li>
                  <li className="nav-item px-2 py-3">
                    <a className="nav-link" href="#benefits">Benefícios</a>
                  </li>
                  <li className="nav-item px-2 py-3">
                    <a className="nav-link" href="#sustentabilidade">Sustentabilidade</a>
                  </li>
                </ul>
                <a className="btn btn-success py-2 px-5" href={`/checkout`}>
                  Compre
                </a>
              </div>
            </div>
          </nav>
        </header>
      </main>
    </div>
  );
}