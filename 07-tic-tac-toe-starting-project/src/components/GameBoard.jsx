export default function GameBoard() {
  // estrutura inicial da matriz que sera o tabuleiro, linhas x colunas
  const initialGameBoard = [
    [null, null, null], //linha 0, coluna 0, 1, 2
    [null, null, null], //linha 1, coluna 0, 1, 2
    [null, null, null], //linha 2, coluna 0, 1, 2
  ];
  return (
    <ol id="game-board">
      {/* primeiro .map serve para fazer a lista ordenada das linhas */}
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* segundo .map serve para fazer as colunas passando dentro de cada linha */}
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
