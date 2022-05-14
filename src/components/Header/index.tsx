import { useEffect, useState } from "react";
import { MenuNavMobile } from "../MenuNavMobile";
import { MenuNavWeb } from "../MenuNavWeb";

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>();
  const [{ logo, iconeMenu, iconeMenuClose }, setData] = useState({
    logo: "./assets/images/logo-green.svg",
    iconeMenu: "./assets/icons/menu-hamburger-green.svg",
    iconeMenuClose: "./assets/icons/close-button.svg",
  });

  // Altera a cor e ícones do menu de acordo com a rolagem

  function showNavOnScroll() {
    if (scrollY > 0) {
      document.getElementById("navigation-mobile")?.classList.add("scroll");
      document.getElementById("navigation-web")?.classList.add("scroll");
      document.getElementById("logo-nav")?.classList.add("logo-nav");
      document
        .getElementById("button-contact-top")
        ?.classList.add("button-contact-top");
      setData({
        logo: "./assets/images/logo-white.svg",
        iconeMenu: "./assets/icons/menu-hamburger-white.svg",
        iconeMenuClose: "./assets/icons/close-button.svg",
      });
    } else {
      document.getElementById("navigation-mobile")?.classList.remove("scroll");
      document.getElementById("navigation-web")?.classList.remove("scroll");
      document.getElementById("logo-nav")?.classList.remove("logo-nav");
      document
        .getElementById("button-contact-top")
        ?.classList.remove("button-contact-top");
      setData({
        logo: "./assets/images/logo-green.svg",
        iconeMenu: "./assets/icons/menu-hamburger-green.svg",
        iconeMenuClose: "./assets/icons/close-button.svg",
      });
    }
  }

  useEffect(() => {
    if (menuOpen) {
      document.getElementById("navigation-mobile")?.classList.add("scroll");
      setData({
        logo: "./assets/images/logo-white.svg",
        iconeMenu: "./assets/icons/menu-hamburger-white.svg",
        iconeMenuClose: "./assets/icons/close-button.svg",
      });
    }
  }, [menuOpen]);

  window.addEventListener("scroll", showNavOnScroll);

  return (
    <>
      <MenuNavMobile
        logo={logo}
        iconeMenu={iconeMenu}
        iconeMenuClose={iconeMenuClose}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <MenuNavWeb logo={logo} />
    </>
  );
}
