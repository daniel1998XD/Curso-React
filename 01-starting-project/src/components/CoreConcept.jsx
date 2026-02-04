// 3 isso é um componente
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

//3 No exemplo comentado foi usado a props como "argumento", sendo ela um objeto
//Para ter um conteudo dinamico, precisou-se usar deste artificio, pegando
//Cada atributo do objeto.

//3 aqui foi usado <li> pois ele vai dentro do <ul> que está logo abaixo

//3 No exemplo sem comentar foi feita a destruct do objeto logo nos parametros
//Da função, tornando mais facil de manusear a função

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
export default CoreConcept;
