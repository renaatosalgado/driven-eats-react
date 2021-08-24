export default function Desserts() {
  return (
    <>
      <div class="secao">
        <div class="titulo">Por fim, sua sobremesa</div>
        <div class="opcoes sobremesa">
          <div class="opcao" onclick="selecionarSobremesa(this, 'Pudim', 7.90)">
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

          <div class="opcao" onclick="selecionarSobremesa(this, 'Flam', 7.90)">
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
            onclick="selecionarSobremesa(this, 'Brigadeiro', 7.90)">
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
    </>
  );
}
