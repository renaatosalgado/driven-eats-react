export default function ConfirmOrder() {
  return (
    <>
      <div className="overlay hidden-class">
        <div className="confirm-order">
          <div className="title">Confirme seu pedido</div>
          <ul>
            <li className="main-course">
              <div className="name">Estrombelete Yin Yang</div>
              <div className="price">14,90</div>
            </li>
            <li className="drink">
              <div className="name">Coquinha gelada</div>
              <div className="price">4,90</div>
            </li>
            <li className="dessert">
              <div className="name">Pudim</div>
              <div className="price">7,90</div>
            </li>
            <li className="total">
              <div>Total</div>
              <div className="price">R$ 27,70</div>
            </li>
          </ul>
          <button className="confirm">
            Tudo certo, pode pedir!
          </button>
          <button className="cancel">
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
}