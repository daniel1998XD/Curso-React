import { useState } from "react";
import Header from "./components/Header"
import InputBox from "./components/InputBox"
import Result from "./components/Result"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10,
    annualInvestment: 10,
    expectedReturn: 10,
    duration: 10,
  });
  function handleChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIndentifier]: +newValue };
    });
  }
  return (
    <>
    <Header />
    <InputBox userInput={userInput} onChange={handleChange}/>
    <Result userInput={userInput}/>
    </>
  )
}

export default App
