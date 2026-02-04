export default function Tabs({children, buttons, ButtonsContainer="menu"}){ 
    //Aqui foi possivel colocar um valor deafult em ButtonsContainer, pois geralmente é menu
    //mas se necessario a pessoa coloca outro valor como div

    // const ButtonsContainer = buttonsContainer; aqui se o parametro chegar com letra minuscula 
    // você precisa fazer uma variavel que começa com letra maiuscula
    return(
        <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
        </>
    )
}