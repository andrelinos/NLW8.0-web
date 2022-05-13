export function Main() {
  return (
    <section
      id="home"
      className="w-[100%] min-h- max-w-[71rem] px-6 mx-auto flex flex-col"
    >
      <div className="flex ">
        <div className="flex-1 pt-20  max-w-[37.8125rem]">
          <header>
            <h4 className="text-sm leading-5 text-brand-green-500 mb-6">
              BOAS-VINDAS A DOCTORCARE 👋
            </h4>
            <h1 className="text-[3.25rem] leading-[4.25rem] font-bold text-brand-gray-800">
              Assistência médica simplificada para todos
            </h1>
          </header>
          <div className="">
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

        <div className="flex-1 max-w-[26.25rem]">
          <img
            src="./assets/images/mulher-negra-sorrindo-com-as-maos-no-peito.png"
            alt="Mulher negra vestindo moletom verde e sorrindo, com as duas mãos no peito"
          />
        </div>
      </div>
      <div>
        <div className="w-[calc(100%-2rem)] h-[13.125rem] gap-10 -mb-[6.5625rem] bg-brand-bege-300 border-2 border-brand-green-200 flex justify-around items-center mx-auto rounded-md">
          <div className="text-center flex-1">
            <h3 className="text-brand-gray-800 text-5xl font-bold leading-[3.875rem]">
              +3.500
            </h3>
            <p className="text-brand-green-500 text-center text-md font-thin">
              Pacientes atendidos
            </p>
          </div>
          <div className="text-center  flex-1 border-l-[0.5px] border-r-[0.5px] border-brand-green-500">
            <h3 className="text-brand-gray-800 text-5xl font-bold leading-[3.875rem]">
              +15
            </h3>
            <p className="text-brand-green-500 text-center text-md font-thin">
              Especialistas disponíveis
            </p>
          </div>
          <div className="text-center flex-1">
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
