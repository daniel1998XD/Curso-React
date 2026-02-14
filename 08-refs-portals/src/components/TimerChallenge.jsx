import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimeChallenge({ targetTime, title }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  //   let timer;
  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimerStarted(true);
  }
  function handleStop() {
    // clearTimeout(timer)
    clearTimeout(timer.current);
  }
  return (
    <>
      {/* como foi usado a propriedade open para mostrar o dialog então precisa da condicional para 
      mostrar o componente */}
      {/* {timerExpired && <ResultModal targetTime={targetTime} result="lost"/>} */}

      {/* Aqui não precisa mais da condicional, pois foi passado o ref e mostrado o showModal()  */}
      {/* <ResultModal ref={dialog} targetTime={targetTime} result="lost"/> */}

      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired} && <p>You lost</p>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "time is running..." : "timer inactive"}
        </p>
      </section>
    </>
  );
}
