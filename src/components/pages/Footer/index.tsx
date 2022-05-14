export function Footer() {
  return (
    <footer className="w-[100%] py-20 px-[1.625rem] lg:px-[7.688rem] flex justify-between">
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
  );
}
