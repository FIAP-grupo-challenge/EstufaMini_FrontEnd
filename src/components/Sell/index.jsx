import React from 'react';
import Pepper from '../../assets/Paprika.svg';
import Tomato from '../../assets/Tomato.svg';
import Lettuce from '../../assets/Lettuce.svg';
import Zucchini from '../../assets/Zucchini.svg';
import Radish from '../../assets/Radish.svg';
import Spinach from '../../assets/Spinach.svg';
import Lentil from '../../assets/Lentil.svg';
import Leaf from '../../assets/Leaf.svg';
import Peas from '../../assets/Peas.svg';
import Beet from '../../assets/Beet.svg';
import Bean from '../../assets/Java Bean.svg';
import Carrot from '../../assets/Carrot.svg';

export function Sell() {
  return (
    <div className='row row-cols-2 d-flex align-items-start py-2 border border-3 rounded-5 mx-0 px-2'>
      <div className='col'>
        <h2 className='m-0'>
          Preço:
        </h2>
        <span className='fs-4 text-danger text-decoration-line-through'>De: R$599,99</span>
        <p className='m-0'>
          <span className='fs-1 text-success'>Por: R$399,99</span>
        </p>
        <p>Em até 10x de 39,99</p>
      </div>
      {/* quantidade */}
      <div className='col'>
        <div className='m-0'>
          <h2 className='m-0'>
            Quantidade
          </h2>
          <hr />
        </div>
        <div className='w-100 d-flex justify-content-around align-items-center pb-5'>
          <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
            </svg>
          </button>
          <p className='m-0'>
            1
          </p>
          <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </div>
        <div className='p-2'>
          <h2>
            Tipos
          </h2>
          <hr />
        </div>
      </div>
      {/* cultivos */}
      <div className='d-flex flex-column w-100 '>
        {/* daqui Pimentão*/}
        <div className="row text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Pepper} alt="Pimentão" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-1'>
              Pimentão
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}

        {/* daqui Tomate*/}
        <div className="row  text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Tomato} alt="Tomate" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-2'>
              Tomate
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}

        {/* daqui Alface*/}
        <div className="row  text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Lettuce} alt="Alface" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-2'>
              Alface
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}

        {/* daqui Abobrinha*/}
        <div className="row  text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Zucchini} alt="Abobrinha" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-0'>
              Abobrinha
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}

        {/* daqui Rabanete*/}
        <div className="row  text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Radish} alt="Rabanete" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-0'>
              Rabanete
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}

        {/* daqui espinafre*/}
        <div className="row  text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Spinach} alt="espinafre" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-1'>
              Espinafre
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}

        {/* daqui Lentilha*/}
        <div className="row  text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Lentil} alt="Lentilha" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-2'>
              Lentilha
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}

        {/* daqui Rúcula*/}
        <div className="row  text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Leaf} alt="Rúcula" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-2'>
              Rúcula
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}

        {/* daqui Ervilha*/}
        <div className="row  text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Peas} alt="Ervilha" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-2'>
              Ervilha
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}

        {/* daqui Beterraba*/}
        <div className="row  text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Beet} alt="Beterraba" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-0'>
              Beterraba
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}

        {/* daqui Feijão*/}
        <div className="row  text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Bean} alt="Feijão" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-2'>
              Feijão
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}

        {/* daqui Cenoura*/}
        <div className="row  text-center w-100 d-flex my-1 p-0">
          <div className="col cols-sm-3">
            <img src={Carrot} alt="Cenoura" className='text-success' />
          </div>
          <div className="col cols-sm-3 d-flex align-items-center">
            <p className='m-0'>
              Cenoura
            </p>
          </div>
          <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
            <button className='btn btn-danger px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <p className='m-2'>
              1
            </p>
            <button className='btn btn-success px-2 rounded-5 d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle p-0 m-0" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
        </div>
        {/* aqui */}
      </div>
    </div>
  );
}