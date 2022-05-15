interface MenuNavWebProps {
  logo?: string;
}

export function MenuNavWeb({ logo }: MenuNavWebProps) {
  function openMenu() {
    document.body.classList.add("menu-expanded");
  }

  function closeMenu() {
    document.body.classList.remove("menu-expanded");
  }
  return (
    <nav
      id="navigation-web"
      className="w-[100%] h-[72px] px-6 z-40 fixed inset-0 bg-brand-green-200 menu-web-active"
    >
      <div className="max-w-[71rem] h-[100%] flex justify-between items-center mx-auto">
        <a href="#home">
          <img id="logo-nav" src={logo} alt="Logo do site" />
        </a>

        <ul
          className="flex h-[100%] pt-5 gap-4 transition-all duration-200 leading-[1.9375rem]
              font-normal text-brand-green-500 font-w text-base mb-0"
        >
          <li
            className="hover:font-bold border-b-2 border-solid pb-6 border-transparent
                hover:border-b-brand-green-500"
          >
            <a onClick={() => closeMenu} href="#home">
              Início
            </a>
          </li>
          <li className="hover:font-bold border-b-2 border-solid pb-6 border-transparent hover:border-b-brand-green-500">
            <a onClick={() => closeMenu} href="#services">
              Serviços
            </a>
          </li>
          <li className="hover:font-bold border-b-2 border-solid pb-6 border-transparent hover:border-b-brand-green-500">
            <a onClick={() => closeMenu} href="#about">
              Sobre
            </a>
          </li>
        </ul>
        <a
          id="button-contact-top"
          className="w-[11.875rem] h-[2.375rem] flex justify-center text-sm font-bold items-center rounded-full border-brand-green-500 text-brand-green-500 border-[0.0625rem]"
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
  );
}
