import React, {useState} from "react";

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

const Dessert = (props) => {

  const [contador, setContador] = useState(1);

  return (
    <div className="opcao" onclick="selecionarSobremesa(this, 'Pudim', 7.90)">
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
