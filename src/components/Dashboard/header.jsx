import React, { useState, useEffect } from "react";
import logoImage from "../../assets/logo-estufamini.png";
import { usePlant } from "../../hooks/usePlant";

export function Header() {
  const [infoUser, setUserInfo] = useState({});
  const { plants, getPlant, setSelectedPlant } = usePlant();

  function getUserInfo() {
    const userInfo = JSON.parse(sessionStorage.getItem("user_info"));
    setUserInfo(userInfo);
    getPlant(userInfo.client_id);
  }

  function changePlantSelected(plant) {
    setSelectedPlant(plant);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <header className="border-bottom border-light">
      <nav className="navbar navbar-dark bg-dark p-2">
        <div className="container-fluid p-3">
          <button
            className="navbar-toggler bg-success"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-sliders2 text-light"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
              />
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header bg-dark">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Miniestufa
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav d-flex flex-grow-1 text-start">
                <li className="nav-item dropdown px-2">
                  <p
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Meus Dados
                  </p>
                  <ul className="dropdown-menu dropdown-menu-dark py-3">
                    <li>
                      <p className="dropdown-item m-0 px-3 py-2" href="#">
                        Nome: {infoUser?.nome}
                      </p>
                    </li>
                    <li>
                      <p className="dropdown-item m-0 px-3 py-2" href="#">
                        CPF: {infoUser?.cpf}
                      </p>
                    </li>
                    <li>
                      <p className="dropdown-item m-0 px-3 py-2" href="#">
                        Email: {infoUser?.email}{" "}
                      </p>
                    </li>
                  </ul>
                </li>

                {plants.map((plant) => (
                  <li className="nav-item p-2" key={plant.plant_id}>
                    <button
                      className="nav-link btn btn-success text-start p-3"
                      href="#"
                      onClick={() => changePlantSelected(plant)}
                    >
                      {plant?.plant_type}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <img src={logoImage} alt="" className="logo pb-4" />
        </div>
      </nav>
    </header>
  );
}
