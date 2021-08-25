const drinks = [
  {
    img: "img/coquinha_gelada.png",
    name: "Coquinha gelada",
    description: "Lata 350mL",
    price: "R$ 4,90",
  },
  {
    img: "img/coquinha_gelada.png",
    name: "Caldo de cana",
    description: "Copo 500mL",
    price: "R$ 5,50",
  },
  {
    img: "img/coquinha_gelada.png",
    name: "Suco de laranja",
    description: "Copo 500mL",
    price: "R$ 5,00",
  },
];

const Drink = (props) => {
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
        <div className="check">
          <ion-icon name="checkmark-circle"></ion-icon>
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
