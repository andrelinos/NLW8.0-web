import { useState } from "react";

export function Header() {
  const [logo, setLogo] = useState("./assets/images/logo-green.svg");
  function openMenu() {
    document.body.classList.add("menu-expanded");
  }

  function closeMenu() {
    document.body.classList.remove("menu-expanded");
  }

  const navigation = function showNavOnScroll() {
    if (scrollY > 0) {
      document.getElementById("navigation")?.classList.add("scroll-nav");
      document.getElementById("logo-nav")?.classList.add("logo-nav");
      document
        .getElementById("button-contact-top")
        ?.classList.add("button-contact-top");
      setLogo("./assets/images/logo-white.svg");
    } else {
      document.getElementById("navigation")?.classList.remove("scroll-nav");
      document.getElementById("logo-nav")?.classList.remove("logo-nav");
      document
        .getElementById("button-contact-top")
        ?.classList.remove("button-contact-top");
      setLogo("./assets/images/logo-green.svg");
    }
  };

  window.addEventListener("scroll", navigation);

  return (
    <nav
      id="navigation"
      className="w-[100%] h-[72px] px-6 z-40 fixed inset-0 bg-brand-green-200"
    >
      <div className="max-w-[71rem] h-[100%] flex justify-between items-center mx-auto">
        <a href="#home">
          <img id="logo-nav" src={logo} alt="Logo do site" />
        </a>

        <ul className="flex gap-4  leading-[1.9375rem] font-normal  font-w text-base">
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
