import React from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
function App() {
  return (
    // o header foi para o proprio html, para mostra que nada impede de usar html
    // normalmente mesmo com o React, nem tudo precisa ser um componente
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X"/>
          <Player initialName="Player 2" symbol="O"/>
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
