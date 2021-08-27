import React, { useState } from "react";

const drinks = [
  {
    img: "img/kombucha.jpeg",
    name: "Kombucha",
    description: "Garrafa 450mL",
    price: "R$ 4,90",
  },
  {
    img: "img/caldodecana.jpeg",
    name: "Caldo de cana",
    description: "Copo 500mL",
    price: "R$ 5,50",
  },
  {
    img: "img/laranja.jpeg",
    name: "Suco de laranja",
    description: "Copo 500mL",
    price: "R$ 5,00",
  },
];

let contadorEspecial = 1;

const Drink = (props) => {
  
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
      <img src={props.img} alt="" />
      <div className="titulo">{props.name}</div>
      <div className="descricao">{props.description}</div>
      <div className="fundo">
        <div className="preco">{props.price}</div>
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

export default function Drinks() {
  return (
    <>
      <div className="secao">
        <div className="titulo">Agora, sua bebida</div>
        <div className="opcoes bebida">
          {drinks.map((drink, index) => (
            <Drink
              img={drink.img}
              name={drink.name}
              description={drink.description}
              price={drink.price}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
