export default function Menu() {
  return (
    <>
      <div class="menu">
        <div class="secao">
          <div class="titulo">Primeiro, seu prato</div>
          <div class="opcoes prato">
            <div
              class="opcao"
              onclick="selecionarPrato(this, 'Estrombelete de Frango', 25.00)"
            >
              <img src="img/frango_yin_yang.png" alt="" />
              <div class="titulo">Estrombelete de Frango</div>
              <div class="descricao">
                Um pouco de batata, um pouco de salada
              </div>
              <div class="fundo">
                <div class="preco">R$ 14,90</div>
                <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>

            <div
              class="opcao"
              onclick="selecionarPrato(this, 'Asa de Boi', 14.90)"
            >
              <img src="img/frango_yin_yang.png" alt="" />
              <div class="titulo">Asa de Boi</div>
              <div class="descricao">
                Um pouco de batata, um pouco de salada
              </div>
              <div class="fundo">
                <div class="preco">R$ 14,90</div>
                <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>

            <div
              class="opcao"
              onclick="selecionarPrato(this, 'Carne de Monstro', 14.90)"
            >
              <img src="img/frango_yin_yang.png" alt="" />
              <div class="titulo">Carne de Monstro</div>
              <div class="descricao">
                Um pouco de batata, um pouco de salada
              </div>
              <div class="fundo">
                <div class="preco">R$ 14,90</div>
                <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="secao">
          <div class="titulo">Agora, sua bebida</div>
          <div class="opcoes bebida">
            <div
              class="opcao"
              onclick="selecionarBebida(this, 'Coquinha Gelada', 4.90)"
            >
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
              onclick="selecionarBebida(this, 'Caldo de Cana', 4.90)"
            >
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
              onclick="selecionarBebida(this, 'Corote gelado', 4.90)"
            >
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

        <div class="secao">
          <div class="titulo">Por fim, sua sobremesa</div>
          <div class="opcoes sobremesa">
            <div
              class="opcao"
              onclick="selecionarSobremesa(this, 'Pudim', 7.90)"
            >
              <img src="img/pudim.png" alt="" />
              <div class="titulo">Pudim</div>
              <div class="descricao">Lata 350ml</div>
              <div class="fundo">
                <div class="preco">R$ 7,90</div>
                <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>

            <div
              class="opcao"
              onclick="selecionarSobremesa(this, 'Flam', 7.90)"
            >
              <img src="img/pudim.png" alt="" />
              <div class="titulo">Flam</div>
              <div class="descricao">Lata 350ml</div>
              <div class="fundo">
                <div class="preco">R$ 7,90</div>
                <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>

            <div
              class="opcao"
              onclick="selecionarSobremesa(this, 'Brigadeiro', 7.90)"
            >
              <img src="img/pudim.png" alt="" />
              <div class="titulo">Brigadeiro</div>
              <div class="descricao">Lata 350ml</div>
              <div class="fundo">
                <div class="preco">R$ 7,90</div>
                <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
