const desserts = [
  {
    img: "img/pudim.png",
    name: "Pudim",
    description: "Pedaço",
    price: "R$ 4,90",
  },
  {
    img: "img/pudim.png",
    name: "Torta Holandesa",
    description: "Pedaço",
    price: "R$ 9,90",
  },
  {
    img: "img/pudim.png",
    name: "Bomba de chocolate",
    description: "Unidade",
    price: "R$ 7,90",
  },
];

const Dessert = (props) => {
  return (
    <div className="opcao" onclick="selecionarSobremesa(this, 'Pudim', 7.90)">
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
