import { useState } from "react";

// estrutura inicial da matriz que sera o tabuleiro, linhas x colunas
const initialGameBoard = [
  [null, null, null], //linha 0, coluna 0, 1, 2
  [null, null, null], //linha 1, coluna 0, 1, 2
  [null, null, null], //linha 2, coluna 0, 1, 2
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    // vai fazer uma copia do tabuleiro para poder mudar seus dados
    setGameBoard((prevGameBoard) => {
      // vai atualizar o tabuleiro, colocando todas as linhas e depois as colunas
      // primeiro ele recebe as linhas no spreed operator e depois com o map ele
      // recebe cada conteudo que entraria nas linhas, sendo as colunas
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      // modifica a coordenada colocando X no lugar de null => 'X'
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;

      // pq n pode ser como está abaixo? por causa do principio da imutabilidade
      // você pode ter diversos problemas com dados que são acessados através de referencia
      // quando você deseja muda-los, por isso é necessário fazer uma copia tornando
      // o codigo sem problemas que podem surgir com o tempo
      // isso ajuda o React no processo de reconciliação (comparar o estado
      // antigo com o novo de forma eficiente)
      // prevGameBoard[rowIndex][colIndex] = "X";
      // return prevGameBoard;
    });
    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {/* primeiro .map serve para fazer a lista ordenada das linhas */}
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* segundo .map serve para fazer as colunas passando dentro de cada linha */}
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
