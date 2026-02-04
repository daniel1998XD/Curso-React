export default function BotaoClasse({children, onClick, isSelected}){
    return(
        <>
        {console.log(isSelected)}
            <button onClick={onClick} className={isSelected ? "active" : undefined}>{children}</button>
        </>
    );
}