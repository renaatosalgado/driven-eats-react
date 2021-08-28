import React, { useState } from "react";

const drinks = [
  {
    img: "img/kombucha.jpeg",
    name: "Kombucha",
    description: "Garrafa 450mL",
    price: "R$ 12,50",
  },
  {
    img: "img/caldodecana.jpeg",
    name: "Caldo de cana",
    description: "Copo 500mL",
    price: "R$ 7,00",
  },
  {
    img: "img/laranja.jpeg",
    name: "Suco de laranja",
    description: "Copo 500mL",
    price: "R$ 5,50",
  },
];

let specialDrinksCounter = 1;

const Drink = (props) => {
  const [counter, setCounter] = useState(1);
  const [selected, setSelected] = useState("option");

  function increment() {
    setCounter(counter + 1);
    specialDrinksCounter++;
  }

  function decrement() {
    setCounter(counter - 1);
    specialDrinksCounter--;
  }

  function selectItem() {
    if (specialDrinksCounter !== 0) {
      setSelected("option selected");
    } else {
      setSelected("option");
      setCounter(1);
      specialDrinksCounter = specialDrinksCounter + 1;
    }
  }

  return (
    <div className={selected} onClick={selectItem}>
      <img src={props.img} alt="" />
      <div className="title">{props.name}</div>
      <div className="description">{props.description}</div>
      <div className="bottom">
        <div className="price">{props.price}</div>
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

export default function Drinks() {
  return (
    <>
      <div className="section">
        <div className="title">Agora, sua bebida</div>
        <div className="options drink">
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
