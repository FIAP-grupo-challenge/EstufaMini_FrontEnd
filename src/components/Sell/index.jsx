import React from "react";
import Pepper from "../../assets/Paprika.svg";
import Tomato from "../../assets/Tomato.svg";
import Lettuce from "../../assets/Lettuce.svg";
import Zucchini from "../../assets/Zucchini.svg";
import Radish from "../../assets/Radish.svg";
import Spinach from "../../assets/Spinach.svg";
import Lentil from "../../assets/Lentil.svg";
import Leaf from "../../assets/Leaf.svg";
import Peas from "../../assets/Peas.svg";
import Beet from "../../assets/Beet.svg";
import Bean from "../../assets/Java Bean.svg";
import Carrot from "../../assets/Carrot.svg";
import { OptionsSell } from "./OptionsSell";
import { useCart } from "../../hooks/useCart";

const sellOptions = [
  {
    id: "0",
    iconImage: Pepper,
    name: "pepper",
    label: "Pimentão",
  },
  {
    id: "1",
    iconImage: Tomato,
    name: "tomato",
    label: "Tomate",
  },
  {
    id: "2",
    iconImage: Lettuce,
    name: "lettuce",
    label: "Alface",
  },
  {
    id: "3",
    iconImage: Zucchini,
    name: "zucchini",
    label: "Abobrinha",
  },
  {
    id: "4",
    iconImage: Radish,
    name: "radish",
    label: "Rabanete",
  },
  {
    id: "5",
    iconImage: Spinach,
    name: "spinach",
    label: "Espinafre",
  },
  {
    id: "6",
    iconImage: Lentil,
    name: "lentil",
    label: "Lentilha",
  },
  {
    id: "7",
    iconImage: Leaf,
    name: "arugula",
    label: "Rúcula",
  },
  {
    id: "8",
    iconImage: Peas,
    name: "pea",
    label: "Ervilha",
  },
  {
    id: "9",
    iconImage: Beet,
    name: "beet",
    label: "Beterra",
  },
  {
    id: "10",
    iconImage: Bean,
    name: "bean",
    label: "Feijão",
  },
  {
    id: "11",
    iconImage: Carrot,
    name: "carrot",
    label: "Cenoura",
  },
];

export function Sell() {
  const { total } = useCart();

  return (
    <div className="row row-cols-2 d-flex align-items-start py-2 border border-3 rounded-5 mx-0 px-2">
      <div className="col">
        <h2 className="m-0">Preço:</h2>
        <span className="fs-4 text-danger text-decoration-line-through">
          De: R$599,99
        </span>
        <p className="m-0">
          <span className="fs-1 text-success">Por: R$399,99</span>
        </p>
        <p>Em até 10x de 39,99</p>
      </div>
      {/* quantidade */}
      <div className="col">
        <div className="m-0">
          <h2 className="m-0">Quantidade</h2>
          <hr />
        </div>
        <div className="w-100 d-flex justify-content-around align-items-center pb-5">
          <p className="m-0">{total ?? "ainda sem pegar"}</p>
        </div>
        <div className="p-2">
          <h2>Tipos</h2>
          <hr />
        </div>
      </div>
      {/* cultivos */}
      <div className="d-flex flex-column w-100 ">
        {sellOptions.map((item) => (
          <OptionsSell key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
