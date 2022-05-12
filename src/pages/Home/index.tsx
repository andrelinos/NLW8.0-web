import { WidgetButton } from "../../components/WidgetButton";

import logo from "../../assets/logo.svg";

export function Home() {
  function openMenu() {
    document.body.classList.add("menu-expanded");
  }

  function closeMenu() {
    document.body.classList.remove("menu-expanded");
  }

  return (
    <div className=" flex relative justify-center flex-col bg-no-repeat bg-cover bg-center">
      <nav id="navigation" className="w-[100%] h-[72px] bg-slate-200">
        <div className="max-w-5xl h-[100%] flex justify-between items-center  mx-auto">
          <a className="logo" href="#home">
            <img src={logo} alt="" />
          </a>

          <div className="flex items-center gap-8">
            <ul className=" flex gap-4 text-brand-purple-500">
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
              className="w-48 h-10 flex justify-center items-center rounded-full text-brand-purple-500 border-2 border-brand-purple-500"
              onClick={() => closeMenu}
              href="#contact"
            >
              Agende sua consulta
            </a>

            <ul className="social-links">
              <li>
                <a target="_blank" href=""></a>
              </li>

              <li>
                <a target="_blank" href=""></a>
              </li>

              <li>
                <a target="_blank" href=""></a>
              </li>
            </ul>
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
        </div>
      </nav>

      <section
        id="home"
        className="pt-20 w-[100%] min-h- max-w-5xl mx-auto flex"
      >
        <div className="flex">
          <div className="">
            <header>
              <h4 className="text-sm leading-5 font-normal">
                BOAS-VINDAS A DOCTORCARE 👋
              </h4>
              <h1>Assistência médica simplificada para todos</h1>
            </header>
            <div className="">
              <p>
                Os médicos da DoctorCare vão além dos sintomas para tratar a
                causa raiz de sua doença e proporcionar uma cura a longo prazo.
              </p>
              <a
                className="w-64 h-10 flex justify-around items-center rounded-full text-brand-green-500 border-2 border-brand-green-500"
                href="#contact"
              >
                <img src="/src/assets/whatsapp.svg" alt="Ícone WhatsApp" />
                Agende sua consulta
              </a>
            </div>
          </div>

          <div className="">
            <img
              src="./assets/mulher-negra-sorrindo-com-as-maos-no-peito.png"
              alt="Mulher negra vestindo moletom verde e sorrindo, com as duas mãos no peito"
            />
          </div>

          <div className="stats">
            <div className="stat">
              <h3>+3.500</h3>
              <p>Pacientes atendidos</p>
            </div>
            <div className="stat">
              <h3>+15</h3>
              <p>Especialistas disponíveis</p>
            </div>
            <div className="stat">
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
