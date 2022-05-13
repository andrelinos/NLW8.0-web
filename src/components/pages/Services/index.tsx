export function Services() {
  return (
    <section
      id="services"
      className="w-[100%] max-w-[71rem] bg-brand-green-100 pt-[16.4375rem] mb-40 flex justify-center mx-auto flex-col"
    >
      <div className="">
        <header className="flex justify-center items-center flex-col">
          <h4 className="max-w-md text-brand-green-500 leading-5 text-sm uppercase font-bold text-center mb-6">
            Serviços
          </h4>
          <h2 className="max-w-[31.0625rem] text-[2.5rem] font-bold leading-[3.25rem] text-center">
            Como podemos ajudá-lo a se sentir melhor?
          </h2>
        </header>
        {/*  div cards */}
        <div className="flex mt-16 flex-wrap gap-6 justify-center">
          <div className="w-[21.6875rem] h-[12.9375rem] bg-white rounded-lg p-6 relative ease-linear card-hover-service">
            <img src="./assets/icons/verify.svg" alt="Ícone verificado" />
            <h3 className="text-2xl font-bold my-4">Problemas digestivos</h3>
            <p className="ellipsis-this">
              Os problemas digestivos são uma queixa frequente nos consultórios
              médicos. Quando a nossa digestão não funciona direito, é porque o
              nosso organismo está em desequilíbrio e isso também pode afetar a
              nossa mente.
            </p>
          </div>
          <div className="w-[21.6875rem] h-[12.9375rem] bg-white rounded-lg p-6 relative card-hover-service">
            <img src="./assets/icons/verify.svg" alt="Ícone verificado" />
            <h3 className="text-2xl font-bold my-4">Saúde Hormonal</h3>
            <p className="ellipsis-this hover:text-clip transition ease-in-out delay-150 bg-white  hover:bg-indigo-500 duration-300">
              Os problemas hormonais e desequilíbrio hormonais são muito comuns
              e podem provocar vários sintomas como excesso de fome,
              irritabilidade, cansaço excessivo ou insônia. Alterações hormonais
              podem gerar várias doenças como diabetes, hipotireoidismo,
              síndrome dos ovários policísticos, por exemplo.
            </p>
          </div>
          <div className="w-[21.6875rem] h-[12.9375rem] bg-white rounded-lg p-6 relative ease-linear card-hover-service">
            <img src="./assets/icons/verify.svg" alt="Ícone verificado" />
            <h3 className="text-2xl font-bold my-4">Bem-estar mental</h3>
            <p className="ellipsis-this">
              O bem estar mental é o equilíbrio das emoções e sentimentos.
              Assim, ele consiste em sentir-se bem consigo e conviver em paz com
              outras pessoas mesmo que algo ruim aconteça.
            </p>
          </div>
          <div className="w-[21.6875rem] h-[12.9375rem] bg-white rounded-lg p-6 relative ease-linear card-hover-service">
            <img src="./assets/icons/verify.svg" alt="Ícone verificado" />
            <h3 className="text-2xl font-bold my-4">Cuidados Pediátricos</h3>
            <p className="ellipsis-this">
              Assistência prestada ao paciente com doença crônica e/ou
              ameaçadora da vida. Devem ser iniciados no diagnóstico,
              independentemente do tratamento da doença de base. Os cuidados
              paliativos pediátricos envolvem a equipe multiprofissional e dão
              suporte físico (controle de sintomas) emocional, espiritual e
              social à criança, atendendo também às necessidades da família.
            </p>
          </div>
          <div className="w-[21.6875rem] h-[12.9375rem] bg-white rounded-lg p-6 relative ease-linear card-hover-service">
            <img src="./assets/icons/verify.svg" alt="Ícone verificado" />
            <h3 className="text-2xl font-bold my-4">Autoimune e Inflamação</h3>
            <p className="ellipsis-this">
              As doenças autoimunes correspondem a um conjunto de diversas
              doenças diferentes, mas que possuem algo em comum: o sistema
              imunológico afetado. De maneira geral, as inflamações são os
              sintomas que, primeiramente, sugerem uma doença autoimune.
            </p>
          </div>
          <div className="w-[21.6875rem] h-[12.9375rem] bg-white rounded-lg p-6 relative ease-linear card-hover-service">
            <img src="./assets/icons/verify.svg" alt="Ícone verificado" />
            <h3 className="text-2xl font-bold my-4">Saúde do Coração</h3>
            <p className="ellipsis-this">
              O coração é o músculo mais importante do corpo. A cada batida ele
              fornece alimento e oxigênio às células. Um coração saudável é a
              chave para um corpo saudável, e seu coração precisa de exercícios
              para mantê-lo em forma. Caminhar é um dos melhores modos de
              manter-se em forma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
