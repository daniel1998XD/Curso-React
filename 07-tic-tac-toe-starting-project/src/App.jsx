import { useState } from "react";
import React from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  } 
  return (
    // o header foi para o proprio html, para mostra que nada impede de usar html
    // normalmente mesmo com o React, nem tudo precisa ser um componente

    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
