export function About() {
  return (
    <section
      id="about"
      className="w-[100%] max-w-[71rem] py-40 flex justify-center  mx-auto flex-col"
    >
      <div className="grid grid-cols-2 gap-[6.7rem]">
        <div className="order-2 self-center">
          <header className="mt-[2.4rem] mb-6">
            <h4 className="max-w-md text-brand-green-500 leading-5 text-sm uppercase font-bold mb-6">
              SOBRE NÓS
            </h4>
            <h2 className="max-w-[31.0625rem] text-[2.5rem] font-bold leading-[3.25rem]">
              Entenda quem somos e por que existimos
            </h2>
          </header>
          <div className="max-w-[35.8125rem]">
            <p>
              A proposta dos profissionais da Doctor Care é oferecer o mais
              elevado padrão de saúde, nas diferentes especialidades, em um
              ambiente estruturado e agradável, permitindo aos pacientes
              diversos tratamentos acompanhados por uma equipe multidisciplinar.
              Serão atendidos por profissionais reconhecidos em suas
              especialidades e verdadeiramente diferenciados, tanto no aspecto
              da formação como na relação médico-paciente.
            </p>
          </div>
        </div>

        <div className="order-1 self-center">
          <img
            src="./assets/images/doutor-feliz-segurando-prancheta-com-pacientes.png"
            alt="Doutor feliz segurando prancheta com pacientes"
          />
        </div>
      </div>
    </section>
  );
}
