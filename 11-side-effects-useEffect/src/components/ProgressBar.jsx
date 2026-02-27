import { useEffect, useState } from "react";
export default function ProgressBar({TIMER}) {
  const [reaminingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemaining) => prevRemaining - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={reaminingTime} max={TIMER}></progress>;
}
