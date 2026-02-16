import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ targetTime, title }) {
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  //   let timer;
  const timer = useRef();
  const dialog = useRef();

  // function handleStart() {
  //   timer.current = setTimeout(() => {
  //     setTimerExpired(true);
  //     dialog.current.open();
  //   }, targetTime * 1000);
  //   setTimerStarted(true);
  // }
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    // setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  function handleReset(){
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    // clearTimeout(timer)
    // clearTimeout(timer.current);

    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      {/* como foi usado a propriedade open para mostrar o dialog então precisa da condicional para 
      mostrar o componente */}
      {/* {timerExpired && <ResultModal targetTime={targetTime} result="lost"/>} */}

      {/* Aqui não precisa mais da condicional, pois foi passado o ref e mostrado o showModal()  */}
      {/* <ResultModal ref={dialog} targetTime={targetTime} result="lost"/> */}

      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        result="lost"
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired} && <p>You lost</p> */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "time is running..." : "timer inactive"}
        </p>
      </section>
    </>
  );
}
