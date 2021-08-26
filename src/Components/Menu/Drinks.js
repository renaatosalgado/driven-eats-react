import React, {useState} from "react";

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

const Drink = (props) => {

  const [contador, setContador] = useState(1);

  return (
    <div
      className="opcao"
      onclick="selecionarBebida(this, 'Coquinha Gelada', 4.90)"
    >
      <img src={props.img} alt="" />
      <div className="titulo">{props.name}</div>
      <div className="descricao">{props.description}</div>
      <div className="fundo">
        <div className="preco">{props.price}</div>
        <div className="contador">
          <div className="menos" onClick={() => setContador(contador-1)}>-</div>
          <div className="quantidade">{contador}</div>
          <div className="mais" onClick={() => setContador(contador+1)}>+</div>
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
