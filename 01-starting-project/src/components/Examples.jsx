import { useState } from "react";
import { EXAMPLES } from "../data-with-examples";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  // Revisando useState, basicamente é um array, onde o primeiro elemento
  // mostra o valor, e o segundo consegue editar este valor
  // dentro do () vai o valor deafult, no caso o valor é undefined no selectedTopic
  // isto é feito pois o REACT renderiza os itens apenas uma vez na tela
  // se tentar mudar o valor de uma variavel normalmente, não vai funcionar
  // então usamos o useState, assim tendo dados dinâmicos.

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  // Não tinha pensado desta maneira ainda.
  // Aqui o valor deafult, no caso ainda não escolheu nada, é este paragrafo
  // la embaixo tem as opções com operador ternário e a lógica &&
  // mas achei este modo mais facil de ler
  let tabContent = <p>Please select a topic.</p>;
  // Esta variavel recebe o valor deafult, que no caso é uma sintaxe HTML

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  // Aqui tem a lógica para renderizar um valor alem do deafult
  // é a mesma coisa que nas opções de baixo, porem a variavel muda de valor
  return (
    <Section title="Examples" id="examples">
      <Tabs //Em projeto maiores é de se pensar que vão existir mais menus com conteudos, como este,
      //então ja faz um componente para reaproveitar
      
        // ButtonsContainer="menu", como é default não precisa, mas se fosse uma div ou 
        // um componente personalizado ex: Section, precisaria, neste caso faria {Section} sem tag

        //aqui os TabButton foram pra dentro do argumento buttons, assim levando todo o codigo
        //para o componente Tabs com o parametro buttons, usa-se isso para varias coisas
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            {/* Em cada um dos TabButton foi utilizado o conceito de props, porém
            além disso foi utilizado o conceito de CHILDREN, que é tudo que está
            entre as tags, de abrir e fechar, no caso o texto JSX por exemplo 
            
            vale lembrar que a prop enviada é uma função, ela recebe o valor
            do botão clicado, muda esse valor com o set... e por fim verifica
            se há algum valor na variavel para poder comparar e mostrar
            cada um dos atributos formando os textos com um menu dinamico*/}
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {/* foi levado com a tag children */}
        {tabContent}
      </Tabs>

      {/* {!selectedTopic ? <p>Please select a topic.</p> :
          <div id="tab-content"> 
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>} */}
      {/* {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (<div id="tab-content"> 
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)} */}
    </Section>
  );
}
