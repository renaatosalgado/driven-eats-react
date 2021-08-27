import React, {useState} from "react";

const dishes = [
  {
    img: "img/arroz.jpeg",
    name: "Arroz com lentilha",
    description: "Arroz muito bom!",
    price: "R$ 19,90",
  },
  {
    img: "img/paella.jpeg",
    name: "Paella",
    description: "Legumes saborosos.",
    price: "R$ 23,50",
  },
  {
    img: "img/moqueca.jpeg",
    name: "Moqueca de palmito",
    description: "De dar água na boca!!",
    price: "R$ 29,00",
  },
];

let contadorEspecial = 1;

const Dish = (props) => {

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
          <div className="menos" onClick={decrementar}>-</div>
          <div className="quantidade">{contador}</div>
          <div className="mais" onClick={incrementar}>+</div>
        </div>
      </div>
    </div>
  );
};

export default function MainCourse() {
  return (
    <div className="secao">
      <div className="titulo">Primeiro, seu prato</div>
      <div className="opcoes prato">

        {dishes.map((dish, index) => (
          <Dish
            img={dish.img}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}