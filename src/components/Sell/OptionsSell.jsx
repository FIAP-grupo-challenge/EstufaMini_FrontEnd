import React, { useState } from "react";

export function OptionsSell({ item, actionPlus, actionMinus }) {
  const [quantity, setQuantity] = useState(0);

  function addQuantity() {
    setQuantity((prev) => prev + 1);
    actionPlus(item.name);
  }

  function subQuantity() {
    if (quantity === 0) {
      return;
    }

    setQuantity((prev) => prev - 1);
    actionMinus(item.name);
  }

  return (
    <div className="row  text-center w-100 d-flex my-1 p-0">
      <div className="col cols-sm-3">
        <img
          src={item.iconImage}
          alt="imagens dos cultivos"
          className="text-success"
        />
      </div>
      <div className="col cols-sm-3 d-flex align-items-center">
        <p className="m-0">{item.label}</p>
      </div>
      <div className="col cols-sm-3 d-flex align-items-center justify-content-between m-0 p-0">
        <button
          className="btn btn-danger px-2 rounded-5 d-flex align-items-center"
          onClick={subQuantity}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-dash-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
        </button>

        <p className="m-2">{quantity}</p>

        <button
          className="btn btn-success px-2 rounded-5 d-flex align-items-center"
          onClick={addQuantity}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-plus-circle p-0 m-0"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
