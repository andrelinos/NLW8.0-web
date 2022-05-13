export function Footer() {
  return (
    <footer className="w-[100%] py-20 px-[7.688rem] flex justify-between">
      <div className="w-[100%]  grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        <div className="order-2 lg:order-1">
          <a className="" href="#home">
            <img src="./assets/images/logo-white.svg" alt="Logo do site" />
          </a>
          <p className="max-h-64 text-brand-bege-300 text-sm mt-6 mb-4">
            ©2022 DoctorCare.
          </p>
          <p className="max-h-64 text-brand-bege-300 text-sm">
            Todos os direitos reservados.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <ul className="flex justify-end gap-8">
            <li>
              <a target="_blank" href="">
                <img src="./assets/icons/instagram.svg" alt="instagram" />
              </a>
            </li>

            <li>
              <img src="./assets/icons/facebook.svg" alt="facebook" />
            </li>

            <li>
              <a target="_blank" href="">
                <img src="./assets/icons/youtube.svg" alt="youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
