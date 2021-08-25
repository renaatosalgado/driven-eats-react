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
    <div class="opcao" onclick="selecionarSobremesa(this, 'Pudim', 7.90)">
      <img src={props.img} alt="" />
      <div class="titulo">{props.name}</div>
      <div class="descricao">{props.description}</div>
      <div class="fundo">
        <div class="preco">{props.price}</div>
        <div class="check">
          <ion-icon name="checkmark-circle"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default function Desserts() {
  return (
    <div class="secao">
      <div class="titulo">Por fim, sua sobremesa</div>
      <div class="opcoes sobremesa"></div>

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
  );
}
