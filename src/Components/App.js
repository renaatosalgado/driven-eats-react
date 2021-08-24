export default function App() {
  return (
  <div>
          <div class="overlay escondido">
              <div class="confirmar-pedido">
                <div class="titulo">Confirme seu pedido</div>
                <ul>
                  <li class="prato">
                    <div class="nome">Estrombelete Yin Yang</div>
                    <div class="preco">14,90</div>
                  </li>
                  <li class="bebida">
                    <div class="nome">Coquinha gelada</div>
                    <div class="preco">4,90</div>
                  </li>
                  <li class="sobremesa">
                    <div class="nome">Pudim</div>
                    <div class="preco">7,90</div>
                  </li>
                  <li class="total">
                    <div>Total</div>
                    <div class="preco">R$ 27,70</div>
                  </li>
                </ul>
                <button class="confirmar" onclick="enviarZap()">Tudo certo, pode pedir!</button>
                <button class="cancelar" onclick="cancelarPedido()">Cancelar</button>
              </div>
            </div>
        
            <div class="header">
              <div class="titulo">Driven Eats</div>
              <div class="subtitulo">Sua comida em 6 minutos</div>
            </div>
        
            <div class="menu">
              <div class="secao">
                <div class="titulo">Primeiro, seu prato</div>
                <div class="opcoes prato">
                  <div class="opcao" onclick="selecionarPrato(this, 'Estrombelete de Frango', 25.00)">
                    <img src="img/frango_yin_yang.png" />
                    <div class="titulo">Estrombelete de Frango</div>
                    <div class="descricao">Um pouco de batata, um pouco de salada</div>
                    <div class="fundo">
                      <div class="preco">R$ 14,90</div>
                      <div class="check">
                        <ion-icon name="checkmark-circle"></ion-icon>
                      </div>
                    </div>
                  </div>
        
                  <div class="opcao" onclick="selecionarPrato(this, 'Asa de Boi', 14.90)">
                    <img src="img/frango_yin_yang.png" />
                    <div class="titulo">Asa de Boi</div>
                    <div class="descricao">Um pouco de batata, um pouco de salada</div>
                    <div class="fundo">
                      <div class="preco">R$ 14,90</div>
                      <div class="check">
                        <ion-icon name="checkmark-circle"></ion-icon>
                      </div>
                    </div>
                  </div>
        
                  <div class="opcao" onclick="selecionarPrato(this, 'Carne de Monstro', 14.90)">
                    <img src="img/frango_yin_yang.png" />
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
        
              <div class="secao">
                <div class="titulo">Agora, sua bebida</div>
                <div class="opcoes bebida">
                  <div class="opcao" onclick="selecionarBebida(this, 'Coquinha Gelada', 4.90)">
                    <img src="img/coquinha_gelada.png" />
                    <div class="titulo">Coquinha gelada</div>
                    <div class="descricao">Lata 350ml</div>
                    <div class="fundo">
                      <div class="preco">R$ 4,90</div>
                      <div class="check">
                        <ion-icon name="checkmark-circle"></ion-icon>
                      </div>
                    </div>
                  </div>
        
                  <div class="opcao" onclick="selecionarBebida(this, 'Caldo de Cana', 4.90)">
                    <img src="img/coquinha_gelada.png" />
                    <div class="titulo">Caldo de Cana</div>
                    <div class="descricao">Lata 350ml</div>
                    <div class="fundo">
                      <div class="preco">R$ 4,90</div>
                      <div class="check">
                        <ion-icon name="checkmark-circle"></ion-icon>
                      </div>
                    </div>
                  </div>
        
                  <div class="opcao" onclick="selecionarBebida(this, 'Corote gelado', 4.90)">
                    <img src="img/coquinha_gelada.png" />
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
                  <div class="opcao" onclick="selecionarSobremesa(this, 'Pudim', 7.90)">
                    <img src="img/pudim.png" />
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
                    <img src="img/pudim.png" />
                    <div class="titulo">Flam</div>
                    <div class="descricao">Lata 350ml</div>
                    <div class="fundo">
                      <div class="preco">R$ 7,90</div>
                      <div class="check">
                        <ion-icon name="checkmark-circle"></ion-icon>
                      </div>
                    </div>
                  </div>
        
                  <div class="opcao" onclick="selecionarSobremesa(this, 'Brigadeiro', 7.90)">
                    <img src="img/pudim.png" />
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
        
            <div class="footer">
              <a class="fazer-pedido" onclick="confirmarPedido()">
                Selecione os 3 itens<br />para fechar o pedido
              </a>
            </div>
      </div>
  );
}
