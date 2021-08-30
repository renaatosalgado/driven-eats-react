import React, { useState } from "react";

const dishes = [
  {
    img: "img/arroz.jpeg",
    name: "Arroz com lentilha",
    description: "Arroz muito bom!",
    price: "R$ 19,50",
    quantity: 0,
  },
  {
    img: "img/paella.jpeg",
    name: "Paella",
    description: "Legumes saborosos.",
    price: "R$ 23,50",
    quantity: 0,
  },
  {
    img: "img/moqueca.jpeg",
    name: "Moqueca de palmito",
    description: "De dar água na boca!!",
    price: "R$ 29,50",
    quantity: 0,
  },
];

let specialMainCourseCounter = 1;

const Dish = ({img, name, description, price, quantity}) => {
  const [counter, setCounter] = useState(1);
  const [selected, setSelected] = useState("option");

  function increment() {
    setCounter(counter + 1);
    specialMainCourseCounter++;
  }

  function decrement() {
    setCounter(counter - 1);
    specialMainCourseCounter--;
  }

  function selectMainCourse() {
    if (specialMainCourseCounter !== 0) {
      setSelected("option selected");
    } else {
      setSelected("option");
      setCounter(1);
      specialMainCourseCounter = specialMainCourseCounter + 1;
    }
    console.log(specialMainCourseCounter);
  }

  return (
    <div className={selected} onClick={selectMainCourse}>
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

export default function MainCourse() {
  return (
    <div className="section">
      <div className="title">Primeiro, seu prato</div>
      <div className="options main-course">
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
