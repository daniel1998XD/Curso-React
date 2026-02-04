export default function ConteudoBotaoClasse({objeto}) {
    let informacoesBotao = <p>Escolha seu herói para começar</p>;
      if(objeto)
      {
        (informacoesBotao = (
          <div id="details-card">
            <h3>{objeto.id}</h3>
            <p>{objeto.name}</p>
            <p>{objeto.role}</p>
            <div id="skills-list">
              {objeto.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </div>
          </div>
        ))
      }
  return (
    <>
      {informacoesBotao}
    </>
  );
}
