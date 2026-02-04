import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css"

const reactDescriptions = ["Fundamental", "Crucial", "Core"]; // 1 Array de palavras que podem aparecer no começo do texto la embaixo
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
} //1 Função que gera um numero float de 0 ate 1 e depois multiplica
// pelo numero maximo do array +1, assim tendo uma chance igual de vir as posições do array 0..2

function Header() {
  const description = reactDescriptions[genRandomInt(2)]; // 1
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      {/* 2 aqui foi usado o link da imagem como import, garantindo que o caminho não vai mudar */}
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
      {/* 1 aqui foi usado uma variavel para armazenar um valor aleatorio
        para mostrar mensagens diferentes*/}
    </header>
  );
}

export default Header;
