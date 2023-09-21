import React, { useState } from "react";
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

const sellOptions = [
  {
    id: "0",
    iconImage: Pepper,
    label: "Pimentão",
  },
  {
    id: "1",
    iconImage: Tomato,
    label: "Tomate",
  },
  {
    id: "2",
    iconImage: Lettuce,
    label: "Alface",
  },
  {
    id: "3",
    iconImage: Zucchini,
    label: "Abobrinha",
  },
  {
    id: "4",
    iconImage: Radish,
    label: "Rabanete",
  },
  {
    id: "5",
    iconImage: Spinach,
    label: "Espinafre",
  },
  {
    id: "6",
    iconImage: Lentil,
    label: "Lentilha",
  },
  {
    id: "7",
    iconImage: Leaf,
    label: "Rúcula",
  },
  {
    id: "8",
    iconImage: Peas,
    label: "Ervilha",
  },
  {
    id: "9",
    iconImage: Beet,
    label: "Beterra",
  },
  {
    id: "10",
    iconImage: Bean,
    label: "Feijão",
  },
  {
    id: "11",
    iconImage: Carrot,
    label: "Cenoura",
  },
];

export function Sell() {
  const [total, setTotal] = useState(0);

  function addItem() {
    setTotal(total + 1);
  }

  function subItem() {
    setTotal(total - 1);
  }

  // function Counter() {}
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
          <p className="m-0">{total}</p>
        </div>
        <div className="p-2">
          <h2>Tipos</h2>
          <hr />
        </div>
      </div>
      {/* cultivos */}
      <div className="d-flex flex-column w-100 ">
        {sellOptions.map((item) => (
          <OptionsSell
            key={item.id}
            iconImage={item.iconImage}
            label={item.label}
            actionMinus={subItem}
            actionPlus={addItem}
          />
        ))}
      </div>
    </div>
  );
}
