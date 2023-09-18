import React from 'react';


export function Sumary() {
  return (
    <div className='text-start'>
      <section className='row w-100 m-1'>
        <h2>Descrição</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nihil ipsam? Et porro ut ad assumenda ipsa necessitatibus enim nam deleniti a, deserunt quisquam repellat temporibus magni sed fugit dolorum pariatur est maxime dicta! Minus vitae, assumenda quos iure beatae vero maiores atque deserunt magni ratione, ut dolorem sint error!
        </p>
      </section>
      <section className='row w-100 m-1'>
        <h2>Funcionalidades</h2>
        <hr />
        <div>
          <ul>
            <li>Controle de Temperatura</li>
            <li>Controle de PH</li>
            <li>Controle de Umidade</li>
            <li>Controle de luminosidade</li>
            <li>Portas de ventos automatizadas</li>
            <li>Irrigação controla</li>
          </ul>
        </div>
      </section>
      <section className='row w-100 m-1'>
        <h2>Observações</h2>
        <hr />
        <div>
          <ol>
            <li>Oberservações a serem feitas</li>
            <li>Oberservações a serem feitas</li>
            <li>Oberservações a serem feitas</li>
          </ol>
        </div>
      </section>

    </div>


  );
}