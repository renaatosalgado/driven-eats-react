const dishes = [
  {
    img: "img/frango_yin_yang.png",
    name: "Arroz com lentilha",
    description: "Arroz muito bom!",
    price: "R$ 19,90",
  },
  {
    img: "img/frango_yin_yang.png",
    name: "Paella",
    description: "Legumes saborosos.",
    price: "R$ 23,50",
  },
  {
    img: "img/frango_yin_yang.png",
    name: "Moqueca de palmito",
    description: "De dar água na boca!!",
    price: "R$ 29,00",
  },
];

const Dish = (props) => {
  return (
    <div class="opcao" onclick="selecionarPrato(this, 'Asa de Boi', 14.90)">
      <img src={props.img} alt="" />
      <div className="titulo">{props.name}</div>
      <div className="descricao">{props.description}</div>
      <div className="fundo">
        <div className="preco">{props.price}</div>
        <div className="check">
          <ion-icon name="checkmark-circle"></ion-icon>
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
