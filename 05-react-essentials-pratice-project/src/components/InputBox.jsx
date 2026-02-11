import { useState } from "react";

export default function InputBox() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  function handleChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIndentifier]: +newValue };
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
        <label>Investimento Inicial</label>
        <input
          type="number"
          value={userInput.initialInvestment}
          onChange={(event) =>
            handleChange("initialInvestment", event.target.value)
          }
          required
        />
        </p>
          <p>
        <label>Investimento Anual</label>
        <input
          type="number"
          value={userInput.annualInvestment}
          onChange={(event) =>
            handleChange("anualInvestment", event.target.value)
          }
          required
        />
        </p>
      </div>

      <div className="input-group">
        <p>
        <label>Retorno Esperado</label>
        <input
          type="number"
          value={userInput.expectedReturn}
          onChange={(event) =>
            handleChange("expectedReturn", event.target.value)
          }
          required
        />
      </p>
      <p>
        <label>Duração</label>
        <input
          type="number"
          value={userInput.duration}
          onChange={(event) => handleChange("duration", event.target.value)}
          required
        />
        </p>
      </div>
    </div>
  );
}
