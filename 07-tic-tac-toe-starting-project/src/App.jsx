import { useState } from "react";
import React from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
// todas as condições de vitoria

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

const INITIAL_GAME_BOARD = [
  [null, null, null], //linha 0, coluna 0, 1, 2
  [null, null, null], //linha 1, coluna 0, 1, 2
  [null, null, null], //linha 2, coluna 0, 1, 2
];

function deriveAtctivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players) {
  let winner;

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol =
      gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol =
      gameBoard[combinations[2].row][combinations[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  // Só para deixar claro este é o estado que esta sendo comentado XD: const [activePlayer, setActivePlayer] = useState("X");
  // Lifting State Up, elevando o state, neste caso tanto o GameBoard quanto o Player precisam de um state em comum
  // no caso de elevar o state e passa-lo como prop, os dois componentes conseguem agir no mesmo tempo e fazer a ação que precisa.
  // Neste caso ambos precisam saber quem joga, o X ou o O, e por isso usa-se um estado que é pai dos dois para atualiza-los,
  // e também é necessário fazer a troca da vez com a função handleSelectSquare.
  // O componente Player vai receber true ou false para saber qual simbolo está jogando, e então trocar o estilo do css para destacor o player
  // O componente GameBoard vai receber o simbolo atual, para poder desenha-lo no tabuleiro

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveAtctivePlayer(gameTurns);

  const [players, setPlayers] = useState(PLAYERS);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      // let currentPlayer = 'X'

      // if (prevTurns.length >0 && prevTurns[0].player ==='X'){
      //   currentPlayer = 'O'
      // }
      const currentPlayer = deriveAtctivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRematch() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    // o header foi para o proprio html, para mostra que nada impede de usar html
    // normalmente mesmo com o React, nem tudo precisa ser um componente

    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRematch} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
