import { useState } from "react";
import Header from "./components/Header"
import InputBox from "./components/InputBox"
import Result from "./components/Result"

function App() {
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
    <>
    <Header />
    <InputBox userInput={userInput} onChange={handleChange}/>
    <Result />
    </>
  )
}

export default App
