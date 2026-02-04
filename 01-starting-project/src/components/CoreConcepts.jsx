import { CORE_CONCEPTS } from "../data-with-examples";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      {/* ul para armazenar os li que vao vim da função  */}
      <ul>
        {/* Aqui foi utilizado o .map para fazer um novo array, fazendo a iteração
            para mostrar na tela, neste caso é até melhor pois ele não fica pre setado
            em um valor unico, ele cresce e diminui conforme o numero de dados do CORE_CONCEPTS */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}

        {/* 3 Chamada do componente escrevendo cada um de seus atributos, funciona mas pode fazer melhor */}
        {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}

        {/* usando spreed operator para fazer a mesma coisa do de cima,
             porém mais simples e facil de ler, isso só é possível, pois o arquivo
              js está com os mesmo nomes de atributo que o componente tem */}
        {/* <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </Section>
  );
}
