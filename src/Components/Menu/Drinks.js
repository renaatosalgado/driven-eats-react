export default function Drinks() {
  return (
    <>
      <div class="secao">
        <div class="titulo">Agora, sua bebida</div>
        <div class="opcoes bebida">
          <div
            class="opcao"
            onclick="selecionarBebida(this, 'Coquinha Gelada', 4.90)">
            <img src="img/coquinha_gelada.png" alt="" />
            <div class="titulo">Coquinha gelada</div>
            <div class="descricao">Lata 350ml</div>
            <div class="fundo">
              <div class="preco">R$ 4,90</div>
              <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
            </div>
          </div>

          <div
            class="opcao"
            onclick="selecionarBebida(this, 'Caldo de Cana', 4.90)">
            <img src="img/coquinha_gelada.png" alt="" />
            <div class="titulo">Caldo de Cana</div>
            <div class="descricao">Lata 350ml</div>
            <div class="fundo">
              <div class="preco">R$ 4,90</div>
              <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
            </div>
          </div>

          <div
            class="opcao"
            onclick="selecionarBebida(this, 'Corote gelado', 4.90)">
            <img src="img/coquinha_gelada.png" alt="" />
            <div class="titulo">Corote gelado</div>
            <div class="descricao">Lata 350ml</div>
            <div class="fundo">
              <div class="preco">R$ 4,90</div>
              <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
