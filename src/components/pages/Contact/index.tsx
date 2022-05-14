export function Contact() {
  return (
    <section
      id="contact"
      className="w-[100%] max-w-[71rem] py-40 bg-white  flex justify-center mx-auto flex-col"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[6.7rem]">
        <div className="order-1 self-center">
          <header className="w-[100%] text-center flex justify-center lg:text-left lg:flex lg:justify-start">
            <h2 className="max-w-[25.25rem] mb-10 text-[1.875rem] lg:text-[2.5rem] font-bold leading-[2.25rem] lg:leading-[3.25rem] text-center  lg:text-left">
              Entre em contato com a gente!
            </h2>
          </header>
          <div className="">
            <ul>
              <li className="flex ">
                <img
                  className="mr-2 mb-4"
                  src="./assets/icons/pin-map.svg"
                  alt="Ícone pin de mapa"
                />
                R. Amauri Souza, 346
              </li>
              <li className="flex ">
                <img
                  className="mr-2"
                  src="./assets/icons/letter.svg"
                  alt="Ícone de e-mail"
                />
                contato@doctorcare.com
              </li>
            </ul>
            <a
              className="flex justify-center rounded-full items-center w-[16.688rem] h-[3.5rem] mt-10 bg-brand-green-500 text-white font-bold text-sm mx-auto lg:mx-0 uppercase"
              href="https://wa.me/5511000099991"
              target="_blank"
            >
              <img
                className="mr-2"
                src="./assets/icons/whatsapp.svg"
                alt="Ícone do WhatsApp"
              />
              Agende sua consulta
            </a>
          </div>
        </div>

        <div className="order-2 self-center">
          <img
            src="./assets/images/homem-negro-sorrindo-mexendo-no-celular.png"
            alt="Homem negro de moletom bege sorrindo e mexendo no celular"
          />
        </div>
      </div>
    </section>
  );
}
