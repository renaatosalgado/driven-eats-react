import React, { useState } from "react";

const desserts = [
  {
    img: "img/sorvete.jpeg",
    name: "Sorvete Ben&Jerry's - Cookies",
    description: "Pote 435mL",
    price: "R$ 34,50",
  },
  {
    img: "img/holandesa.jpeg",
    name: "Torta Holandesa",
    description: "Pedaço",
    price: "R$ 6,50",
  },
  {
    img: "img/brownie.jpeg",
    name: "Brownie de Chocolate",
    description: "Pedaço",
    price: "R$ 8,00",
  },
];

let specialDessertsCounter = 1;

const Dessert = ({ img, name, description, price }) => {
  const [counter, setcounter] = useState(1);
  const [selected, setselected] = useState("option");

  function increment() {
    setcounter(counter + 1);
    specialDessertsCounter++;
  }

  function decrement() {
    setcounter(counter - 1);
    specialDessertsCounter--;
  }

  function selectItem() {
    if (specialDessertsCounter !== 0) {
      setselected("option selected");
    } else {
      setselected("option");
      setcounter(1);
      specialDessertsCounter = specialDessertsCounter + 1;
    }
  }

  return (
    <div className={selected} onClick={selectItem}>
      <img src={img} alt="" />
      <div className="title">{name}</div>
      <div className="description">{description}</div>
      <div className="bottom">
        <div className="price">{price}</div>
        <div className="counter">
          <div className="minus" onClick={decrement}>
            -
          </div>
          <div className="quantity">{counter}</div>
          <div className="plus" onClick={increment}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Desserts() {
  return (
    <div className="section">
      <div className="title">Por fim, sua sobremesa</div>
      <div className="options dessert">
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
