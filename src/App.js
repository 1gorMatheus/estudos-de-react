import React from 'react'
import Prop from './Prop'
import Children from './children';
import Imagem from './Captura de tela 2023-02-21 135509.jpg'
import Imagem2 from './Captura de tela 2023-02-21 140828.jpg'
export default function App() {
  return (
    <div>
      <Prop>
       <h1>Props</h1> 
        <p>As props são propriedades que podemos passar para componentes no React. Elas permitem que você customize um componente para que ele se comporte de forma diferente em diferentes contextos.</p>
        <p>Por exemplo, vamos supor que temos um componente chamado Button que renderiza um botão. Podemos passar props para esse componente para que ele possa renderizar diferentes tipos de botões.</p>
        <p>Aqui está um exemplo de como criar um componente Button que aceita props para configurar a cor de fundo e o texto do botão:</p>
        <img src={Imagem} alt='Imagem do Código'/>
        <p>Nesse exemplo, o componente Button aceita duas props, backgroundColor e text. No componente App, passamos diferentes valores para essas props para renderizar dois botões com cores diferentes e textos diferentes.</p>
        <p>As props são passadas para os componentes como um objeto JavaScript, que pode ser desestruturado para facilitar o acesso às propriedades específicas. No exemplo acima, o código <code>const &#123; backgroundColor, text &#125; = props;</code> desestrutura o objeto props e extrai as propriedades backgroundColor e text.</p>
      </Prop>
      <Children>
        <h1>Children</h1>
        <p>No React, os children são uma propriedade especial que permite passar elementos filhos para um componente, tornando possível a composição de componentes complexos a partir de componentes menores e mais simples. Os elementos filhos podem ser qualquer coisa que possa ser renderizada, incluindo outros componentes React.</p>

        <p>Por exemplo, digamos que você queira criar um componente Card que exiba um título e um conteúdo em uma caixa com uma borda. Você pode usar a propriedade children para passar o conteúdo do cartão como um elemento filho, como mostrado no exemplo abaixo:</p>
        <img src={Imagem2} alt='Imagem do Código'/>

        <p>No exemplo acima, o componente Card tem duas propriedades: title e children. A propriedade title é usada para exibir o título do cartão, enquanto a propriedade children é usada para exibir o conteúdo do cartão. Ao usar o componente Card no componente App, estamos passando um elemento filho para o componente Card que será renderizado dentro da div com a classe card-content.</p>

        <p>Assim, a saída do código acima seria algo como:</p>

        <pre>
          <code>
          Exemplo de Card
          Este é um exemplo de conteúdo de card.
          </code>
        </pre>

        <p>Perceba que o conteúdo passado como filho do componente Card é renderizado dentro da div com a classe card-content. Você pode passar qualquer coisa como children, desde um simples texto até outro componente complexo.</p>

      </Children>
    </div>
  );
}