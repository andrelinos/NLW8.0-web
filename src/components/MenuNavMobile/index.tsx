import { MouseEventHandler, useState } from "react";

interface MenuNavMobileProps {
  logo?: string;
  iconeMenu?: string;
  iconeMenuClose?: string;
  menuOpen?: boolean;
  setMenuOpen?: any;
}

export function MenuNavMobile({
  logo,
  iconeMenu,
  iconeMenuClose,
  menuOpen,
  setMenuOpen,
}: MenuNavMobileProps) {
  return (
    <nav
      id="navigation-mobile"
      className="w-[100%] h-[72px] px-6 z-40 fixed inset-0 flex bg-brand-green-200 menu-mobile-active transition-all duration-200"
    >
      <div className="w-[100%] flex justify-between items-center mx-auto">
        <a className="logo" href="#home">
          <img src={logo} alt="" />
        </a>
        {menuOpen && (
          <div className="absolute top-[4.5rem] left-0 right-0 bottom-0 w-screen h-screen bg-brand-green-500 z-50">
            <ul className="flex flex-col items-center gap-12 mt-12 text-2xl font-bold text-white">
              <li>
                <a onClick={() => setMenuOpen(false)} href="#home">
                  Início
                </a>
              </li>
              <li>
                <a onClick={() => setMenuOpen(false)} href="#services">
                  Serviços
                </a>
              </li>
              <li>
                <a onClick={() => setMenuOpen(false)} href="#about">
                  Sobre
                </a>
              </li>
            </ul>
            <a
              className="w-[17.125rem] h-[3.438rem] rounded-full flex justify-center items-center text-lg mx-auto mt-12 bg-white text-brand-green-600"
              onClick={() => setMenuOpen(false)}
              href="#contact"
            >
              Agende sua consulta
            </a>

            <ul className="flex gap-8 justify-center mt-12">
              <li>
                <a target="_blank" href="#">
                  <img src="./assets/icons/instagram.svg" alt="Instagram" />
                </a>
              </li>

              <li>
                <a target="_blank" href="#">
                  <img src="./assets/icons/facebook.svg" alt="Facebook" />
                </a>
              </li>

              <li>
                <a target="_blank" href="#">
                  <img src="./assets/icons/youtube.svg" alt="Youtube" />
                </a>
              </li>
            </ul>
          </div>
        )}
        {menuOpen ? (
          <button
            aria-expanded="true"
            aria-label="Close Menu"
            onClick={() => setMenuOpen(false)}
          >
            <img src={iconeMenuClose} alt="Fechar menu" />
          </button>
        ) : (
          <button
            aria-expanded="false"
            aria-label="Open Menu"
            onClick={() => setMenuOpen(true)}
          >
            <img src={iconeMenu} alt="Abrir menu" />
          </button>
        )}
      </div>
    </nav>
  );
}
