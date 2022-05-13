import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { Main } from "../components/pages/Main";
import { Services } from "../components/pages/Services";

export function Home() {
  return (
    <>
      <div className="w-[100%] z-10 bg-brand-green-200">
        <Main />
      </div>
      <div className="w-[100%]bg-brand-green-100">
        <Services />
      </div>
      <div className="w-[100%] bg-brand-bege-300">
        <About />
      </div>
      <div className="w-[100%] bg-white">
        <Contact />
      </div>
    </>
  );
}
