import { WidgetButton } from "../../components/WidgetButton";

export function Home() {
  function openMenu() {
    document.body.classList.add("menu-expanded");
  }

  function closeMenu() {
    document.body.classList.remove("menu-expanded");
  }

  return (
    <div className=" flex relative justify-center flex-col ">
      <nav id="navigation" className="w-[100%] h-[72px] ">
        <div className="max-w-[71rem] h-[100%] flex justify-between items-center mx-auto">
          <a className="logo" href="#home">
            <img src="./assets/images/logo.svg" alt="" />
          </a>

          <ul className="flex gap-4 text-brand-green-500 leading-5 text-md text-base">
            <li>
              <a onClick={() => closeMenu} href="#home">
                Início
              </a>
            </li>
            <li>
              <a onClick={() => closeMenu} href="#services">
                Serviços
              </a>
            </li>
            <li>
              <a onClick={() => closeMenu} href="#about">
                Sobre
              </a>
            </li>
          </ul>
          <a
            className="w-48 h-10 flex justify-center items-center rounded-full border-brand-green-500 text-brand-green-500 border-2"
            onClick={() => closeMenu}
            href="#contact"
          >
            Agende sua consulta
          </a>
        </div>
        <button
          aria-expanded="false"
          aria-label="Open Menu"
          onClick={() => openMenu()}
          className="bg-blue-100 hidden"
        ></button>
        <button
          aria-expanded="true"
          aria-label="Close Menu"
          onClick={() => closeMenu}
          className="hidden"
        ></button>
      </nav>

      <section
        id="home"
        className="w-[100%] min-h- max-w-[71rem] bg-red-50 mx-auto flex flex-col"
      >
        <div className="flex ">
          <div className="flex-1 pt-20  max-w-[37.8125rem]">
            <header>
              <h4 className="text-sm leading-5 font-normal">
                BOAS-VINDAS A DOCTORCARE 👋
              </h4>
              <h1>Assistência médica simplificada para todos</h1>
            </header>
            <div className="">
              <p className="mb-6">
                Os médicos da DoctorCare vão além dos sintomas para tratar a
                causa raiz de sua doença e proporcionar uma cura a longo prazo.
              </p>
              <a
                className="w-64 h-12 flex justify-center items-center rounded-full bg-brand-green-500 border-2 text-white"
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
          <div className="max-w-[70rem] gap-4 bg-brand-bege-300 flex justify-center">
            <div className="text-center ">
              <h3>+3.500</h3>
              <p>Pacientes atendidos</p>
            </div>
            <div className="text-center border-l-[0.5px] border-l-[0.5px]">
              <h3>+15</h3>
              <p>Especialistas disponíveis</p>
            </div>
            <div className="text-center ">
              <h3>+10</h3>
              <p>Anos no mercado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Botão para suporte técnico */}
      <WidgetButton />
    </div>
  );
}
