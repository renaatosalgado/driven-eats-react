import React, { useState } from "react";

const desserts = [
  {
    img: "img/pudim.png",
    name: "Pudim",
    description: "Pedaço",
    price: "R$ 4,90",
  },
  {
    img: "img/holandesa.jpeg",
    name: "Torta Holandesa",
    description: "Pedaço",
    price: "R$ 9,90",
  },
  {
    img: "img/bomba.jpeg",
    name: "Bomba de chocolate",
    description: "Unidade",
    price: "R$ 7,90",
  },
];

let contadorEspecial = 1;

const Dessert = ({ img, name, description, price }) => {
  
  const [contador, setContador] = useState(1);
  const [selecionado, setSelecionado] = useState("opcao");

  function incrementar() {
    setContador(contador + 1);
    contadorEspecial++;
  }

  function decrementar() {
    setContador(contador - 1);
    contadorEspecial--;
  }

  function selecionar() {
    if (contadorEspecial !== 0) {
      setSelecionado("opcao selecionado");
    } else {
      setSelecionado("opcao");
      setContador(1);
      contadorEspecial = contadorEspecial + 1;
    }
  }

  return (
    <div className={selecionado} onClick={selecionar}>
      <img src={img} alt="" />
      <div className="titulo">{name}</div>
      <div className="descricao">{description}</div>
      <div className="fundo">
        <div className="preco">{price}</div>
        <div className="contador">
          <div className="menos" onClick={decrementar}>
            -
          </div>
          <div className="quantidade">{contador}</div>
          <div className="mais" onClick={incrementar}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Desserts() {
  return (
    <div className="secao">
      <div className="titulo">Por fim, sua sobremesa</div>
      <div className="opcoes sobremesa">
        {desserts.map((dessert, index) => (
          <Dessert
            img={dessert.img}
            name={dessert.name}
            description={dessert.description}
            price={dessert.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
