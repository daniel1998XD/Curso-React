// pra funcionar em versões mais antiga precisa desse impot 
import { forwardRef } from "react"

//como seria se o react n fosse versão menor que 19
// export default function ResultModal({result, targetTime, ref}){


// fica assim, bem estranho, mas pode ser que seja visto em sistemas mais antigos
const ResultModal = forwardRef( function ResultModal({result, targetTime}, ref){
    // o dialog é invisivel por padrao, entao precisa colocar open dentro dele 
    // return <dialog className="result-modal open" >

    // essa opção é bem legal, mas o react abaixo do 19 reclama, então precisa usar outra abordagem :(
    // return <dialog ref={ref} className="result-modal" >
    return <dialog ref={ref} className="result-modal" >
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form method="dialog">
            {/* se voce faz um form com method dialog dentro de um <dialog>
            você consegue criar um botão que simplesmente fecha o dialogo
            sem precisar fazer nenhuma função :O */}
            <button>Close</button>
        </form>
    </dialog>
})

export default ResultModal