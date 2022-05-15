export function Footer() {
  function showBackToTopButtonOnScroll() {
    if (scrollY < 450) {
      document.getElementById("back-to-top-show")?.classList.add("hidden");
    } else {
      document.getElementById("back-to-top-show")?.classList.remove("hidden");
    }
  }

  window.addEventListener("scroll", showBackToTopButtonOnScroll);
  return (
    <>
      <footer className="w-[100%] py-20 px-[1.625rem] lg:px-[7.688rem] relative flex justify-between">
        <div className="w-[100%]  grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          <div className="order-2 lg:order-1">
            <a href="#home">
              <img
                src="./assets/images/logo-white.svg"
                alt="Logo do site"
                className="w-[14.75rem] h-[1.938re]"
              />
            </a>
            <p className="max-h-64 text-brand-bege-300 text-normal mt-6 mb-4">
              ©2022 DoctorCare.
            </p>
            <p className="max-h-64 text-brand-bege-300 text-md mb-8">
              Todos os direitos reservados.
            </p>
          </div>

          <div className="order-2 lg:order-1">
            <ul className="flex lg:justify-end gap-8">
              <li>
                <a target="_blank" href="#">
                  <img src="./assets/icons/instagram.svg" alt="instagram" />
                </a>
              </li>

              <li>
                <a target="_blank" href="#">
                  <img src="./assets/icons/facebook.svg" alt="facebook" />
                </a>
              </li>

              <li>
                <a target="_blank" href="#">
                  <img src="./assets/icons/youtube.svg" alt="youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <a
        id="back-to-top-show"
        href="#home"
        className=" fixed bottom-4 left-4 lg:left-auto md:bottom-8 lg:bottom-32 lg:right-8
                  z-10 border-2 border-white rounded-full"
      >
        <img
          src="./assets/icons/backtop-button.svg"
          className="w-[3.2rem] h-[3.2rem]"
          alt="Voltar ao topo"
        />
      </a>
    </>
  );
}
