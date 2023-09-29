import React from "react";
import Hands from "../../assets/hands.png";

export function Sustentability() {
  return (
    <section className="row py-5 m-0" id="sustentabilidade">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col cols-sm-1">
          <h2 className="fs-2 h2">
            Porque uma cidade{" "}
            <span className="text-success fs-1">sustentável</span> é o caminho
          </h2>
        </div>
        <div className="col cols-sm-7 d-flex align-items-center justify-content-end">
          <img src={Hands} alt="" className="images-sections" />
        </div>
      </div>
      <div className="row fs-3">
        <p>
          Uma cidade sustentável ela promove a eficiência energética, serviços
          inteligentes e espaços verdes e a miniestufa sendo uma peça valiosa
          desse quebra-cabeça na sua casa.
        </p>
        <p>
          Permitindo o cultivo de alimentos frescos e reduzindo a necessidade de
          transporte de produtos agrícolas, diminuindo as emissões de carbono e
          contribui para a segurança alimentar.
        </p>
      </div>
    </section>
  );
}
