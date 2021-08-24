export default function MainCourse() {
  return (
    <>
      <div class="secao">
        <div class="titulo">Primeiro, seu prato</div>
        <div class="opcoes prato">
          <div
            class="opcao"
            onclick="selecionarPrato(this, 'Estrombelete de Frango', 25.00)">
            <img src="img/frango_yin_yang.png" alt="" />
            <div class="titulo">Estrombelete de Frango</div>
            <div class="descricao">Um pouco de batata, um pouco de salada</div>
            <div class="fundo">
              <div class="preco">R$ 14,90</div>
              <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
            </div>
          </div>

          <div
            class="opcao"
            onclick="selecionarPrato(this, 'Asa de Boi', 14.90)">
            <img src="img/frango_yin_yang.png" alt="" />
            <div class="titulo">Asa de Boi</div>
            <div class="descricao">Um pouco de batata, um pouco de salada</div>
            <div class="fundo">
              <div class="preco">R$ 14,90</div>
              <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
            </div>
          </div>

          <div
            class="opcao"
            onclick="selecionarPrato(this, 'Carne de Monstro', 14.90)">
            <img src="img/frango_yin_yang.png" alt="" />
            <div class="titulo">Carne de Monstro</div>
            <div class="descricao">Um pouco de batata, um pouco de salada</div>
            <div class="fundo">
              <div class="preco">R$ 14,90</div>
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
