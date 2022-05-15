export function Main() {
  return (
    <section
      id="home"
      className="w-[100%] pt-20 max-w-[71rem] mx-auto flex flex-col transition-all duration-200"
    >
      <div className="w-[100%] max-w-[70rem] grid grid-cols-1 bg lg:grid-cols-2 mx-auto  text-center lg:text-left items-center">
        <div className="pt-20  max-w-[37.8125rem] mx-auto">
          <header>
            <h4 className="text- leading-5 text-brand-green-500 font-bold mb-6">
              BOAS-VINDAS A DOCTORCARE 👋
            </h4>
            <h1 className="text-[2.125rem] lg:text-[3.25rem] lg:leading-[4.25rem] font-bold text-brand-gray-800">
              Assistência médica simplificada para todos
            </h1>
          </header>
          <div className="flex flex-col items-center lg:items-start mb-[3.75rem]">
            <p className="my-6 text-[1.1rem] leading-[1.6875rem] font-thin text-brand-gray-700">
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
            <a
              className="w-[16.4375rem] h-[3.25rem] flex justify-center items-center rounded-full bg-brand-green-500 border-2 text-white"
              href="#contact"
            >
              <img
                src="./assets/icons/whatsapp.svg"
                alt="Ícone WhatsApp"
                className="mr-2"
              />
              Agende sua consulta
            </a>
          </div>
        </div>

        <div className="w-[100%] flex items-end mx-auto lg:ml-auto max-w-[26.25rem] ">
          <img
            src="./assets/images/mulher-negra-sorrindo-com-as-maos-no-peito.png"
            alt="Mulher negra vestindo moletom verde e sorrindo, com as duas mãos no peito"
          />
        </div>
      </div>
      <div>
        {/* Highlight cards */}
        <div
          className="w-[100%] max-w-[70rem] min-h-[13.125rem] gap-10 p-10 -mb-[6.5625rem]
              bg-brand-bege-300 border-2 border-brand-green-200 grid grid-cols-1 lg:grid-cols-3
              items-center mx-auto rounded-[0.0.375rem] "
        >
          <div className="text-center">
            <h3 className="text-brand-gray-800 text-5xl font-bold leading-[3.875rem]">
              +3.500
            </h3>
            <p className="text-brand-green-500 text-center text-md font-thin">
              Pacientes atendidos
            </p>
          </div>
          <div className="lg:border-l-[0.5px] text-center lg:border-r-[0.5px] border-brand-green-500">
            <h3 className="text-brand-gray-800 text-5xl font-bold leading-[3.875rem]">
              +15
            </h3>
            <p className="text-brand-green-500 text-center text-md font-thin">
              Especialistas disponíveis
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-brand-gray-800 text-5xl font-bold leading-[3.875rem]">
              +10
            </h3>
            <p className="text-brand-green-500 text-center text-md font-thin">
              Anos no mercado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
