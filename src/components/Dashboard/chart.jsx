import React from 'react';


export function Chart() {
  return (
    <div className="col-md-9">
      <div className="card h-100 bg-transparent border border-light text-light">
        <div className="card-body ">
          <h1 className="card-title">Aqui terá um gráfico</h1>
          <p className="card-text">
            Nesse gráfico será possível analisar o ambiente da miniestufas, marcando os pontos de temp, umidade, lux e ph a cada uma hora.
          </p>
        </div>
      </div>
    </div>
  );
}