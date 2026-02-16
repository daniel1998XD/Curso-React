// pra funcionar em versões mais antiga precisa desse impot
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom'

//como seria se o react n fosse versão menor que 19
// export default function ResultModal({result, targetTime, ref}){

// fica assim, bem estranho, mas pode ser que seja visto em sistemas mais antigos
const ResultModal = forwardRef(function ResultModal(
  { targetTime, onReset, remainingTime },
  ref,
) {
  // o dialog é invisivel por padrao, entao precisa colocar open dentro dele
  // return <dialog className="result-modal open" >

  // essa opção é bem legal, mas o react abaixo do 19 reclama, então precisa usar outra abordagem :(
  // return <dialog ref={ref} className="result-modal" >

  const dialog = useRef();

  const userLost = remainingTime <= 0;

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>You Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime}</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        {/* se voce faz um form com method dialog dentro de um <dialog>
            você consegue criar um botão que simplesmente fecha o dialogo
            sem precisar fazer nenhuma função :O */}
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
