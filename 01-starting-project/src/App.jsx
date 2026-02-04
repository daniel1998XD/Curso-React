//Eu posso escrever um componente no mesmo arquivo que estou chamando ele
//porém não é muito utilizado e nem aconselhavel
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

//É bom manter o App() sem codigo assim como está, fora que se tiver um useState()
//ele vai re-renderizar todos os componentes do codigo, então é uma boa pratica 

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
