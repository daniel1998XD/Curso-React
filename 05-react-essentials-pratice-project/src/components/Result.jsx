import { calculateInvestmentResults } from "../util/investment";
export default function Result() {
  return (
    <table id="result">
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">Investment Value</th>
          <th scope="col">Interest (Year)</th>
          <th scope="col">Total Interest</th>
          <th scope="col">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Donuts</th>
          <td>3,000</td>
          <td>3,000</td>
        </tr>
        <tr>
          <th scope="row">Stationery</th>
          <td>18,000</td>
          <td>3,000</td>
        </tr>
        <tr>
          <th scope="row">Donuts</th>
          <td>3,000</td>
          <td>3,000</td>
        </tr>
        <tr>
          <th scope="row">Stationery</th>
          <td>18,000</td>
          <td>3,000</td>
        </tr>
        <tr>
          <th scope="row">Stationery</th>
          <td>18,000</td>
          <td>3,000</td>
        </tr>
      </tbody>
    </table>
  );
}
