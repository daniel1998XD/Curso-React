import { useState } from "react";
import "./App.css";
import BotaoClasse from "./components/BotaoClasse";
import { CHARACTERS } from "./data";
import ConteudoBotaoClasse from "./components/ConteucoBotaoClasse";

function App() {
  let [personagemSelecionado, setPersonagemSelecionado] = useState();
  function handleClick(botaoSelecionado) {
    setPersonagemSelecionado(botaoSelecionado);
  }

  let personagem = CHARACTERS.find((char) => char.id === personagemSelecionado);

  // let informacoesBotao = <p>Escolha seu herói para começar</p>;

  // if(personagem){
  //   informacoesBotao = (
  //     <div id='details-card'>
  //       <h3>{personagem.id}</h3>
  //       <p>{personagem.name}</p>
  //       <p>{personagem.role}</p>
  //       <div id='skills-list'>
  //         {personagem.skills.map((skill, index) => (<li key={index}>{skill}</li>))}
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <>
      <ul>
        <menu>
          {CHARACTERS.map((char) => (
            <BotaoClasse
              key={char.id}
              isSelected={char.id === personagemSelecionado}
              onClick={() => handleClick(char.id)}
            >
              {char.id.charAt(0).toUpperCase() + char.id.slice(1)}
            </BotaoClasse>
          ))}
          {/* <BotaoClasse isSelected={"warrior" === personagemSelecionado} onClick={() => (handleClick("warrior"))}>Warrior</BotaoClasse>
        <BotaoClasse isSelected={"mage" === personagemSelecionado} onClick={() => (handleClick("mage"))}>Mage</BotaoClasse>
        <BotaoClasse isSelected={"rogue" === personagemSelecionado} onClick={() => (handleClick("rogue"))}>Rogue</BotaoClasse> */}

          <ConteudoBotaoClasse objeto={personagem} />
          {/* {informacoesBotao} */}
        </menu>
      </ul>
    </>
  );
}

export default App;
