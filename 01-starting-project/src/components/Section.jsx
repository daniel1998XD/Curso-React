//Section criada pensando em projetos maiores, tendo children como conteudo
//title como titulo e ...props como os parametros padroes da section
export default function Section({children, title, ...props}) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
