import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    // pq não fazer "setIsEditing(!isEditing)", usar os proprios parametros do useState
    // pq o react agenda uma ação para o futuro, isso pode dar problema e não atualizar
    // o estado como esperado, logo se usa uma arrow function para isso
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
    console.log(playerName);
    //as propriedades do objeto para alterar o valor, no caso do onChange
    // a cada caracter novo ele atualiza o valor do playerName 
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // valor default para nome do Player, Player 1 e Player 2
  //   let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // mudando o valor do nome do player com o onChange 
    // btnCaption = "Save";
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
