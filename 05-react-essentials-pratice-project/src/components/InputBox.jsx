export default function InputBox({ userInput, onChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Investimento Inicial</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            onFocus={(event) => event.target.select()}
            required
          />
        </p>
        <p>
          <label>Investimento Anual</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            onFocus={(event) => event.target.select()}
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
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            onFocus={(event) => event.target.select()}
            required
          />
        </p>
        <p>
          <label>Duração</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
            onFocus={(event) => event.target.select()}
            required
          />
        </p>
      </div>
    </div>
  );
}
