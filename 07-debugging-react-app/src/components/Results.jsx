
import { calculateInvestmentResults, formatter } from '../util/investment.js';

// apenas para fins educacionais, onde foi usado o StrictMode para executar as 
// funções 2x, assim vendo possiveis problemas, no caso results nunca era resetado
// e ficava adicionando cada vez mais e mais elementos no array
// pode ser visto no index.jsx, acoplando o componente App 
// const results = [];
export default function Results({ input }) {
  const results = [];
  calculateInvestmentResults(input, results);
  // Correção de bug por ter um valor undefined, atraves do f12 - console
  // podemos ver "Uncaught TypeError: Cannot read properties of undefined (reading 'valueEndOfYear')
  //   at Results (Results.jsx:12:16)", (Results.jsx:12:16) aqui temos o nome da classe, 12 é linha e 16 é coluna
  //   tornando o debugg mais facil de se entender

  // Correção:
  if (results.length === 0 ){
    return <p className='center'>Invalid input data provied.</p>
  }
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
