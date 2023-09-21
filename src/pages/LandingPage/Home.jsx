import React from "react";
import "./styles.css";
// import api from "../../services/api"
// import React from "react";
import { Header } from "../../components/Header";
import { Apresentantion } from "../../components/Apresentantion";
import { Home } from "../../components/Home";
import { Goals } from "../../components/Goals";
import { Benefits } from "../../components/Benefits";
import { Sustentability } from "../../components/Sustentability";
import { Forms } from "../../components/Forms";
import { Footer } from "../../components/Footer";
import { Fragment } from "react";
export function LandingPage() {
  return (
    <Fragment>
      <Header />
      <main className="container body text-start">
        <Apresentantion />
        {/* home */}
        <Home
          title="Tenha alimentos saudáveis e tenha o monitoramento na palma da sua mão!"
          text="Com a miniestufa, nós proporcionais um equipamento de ponta.
          Que controla todo o ambiente de forma automatizada para
          as condições ideais."
        />
        {/* objetivos */}
        <Goals
          firstText="Junte-se ao nosso objetivo de aumentar a pegada ecológica e faça parte da inovação agrícola."
          secondText="Utilizando um pequeno espaço da sua casa, reduza o impacto ambiental! Além de se ajudar com uma alimentação consciente."
        />
        {/* beneficios */}
        <Benefits
          bennefitsTitle="Benefícios"
          interfaceControl="Interface de controle exclusiva"
          envirementControl="Controle ambiente"
          freshFood="Alimentos Frescos"
          carbonReduction="Redução de emissão de carbono"
          chemicalsReduction="Redução de produtos químicos"
          smartFood="Alimentação inteligente"
          sustentabelLifeStyle="Estilo de vida sustentável"
          wastReductionFood="Redução no desperdício de alimentos"
        />
        {/* sustetabilidade */}
        <Sustentability />
        {/* forms */}
        <Forms />
      </main>
      <Footer />
    </Fragment>
  );
}
