import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { Footer } from "../components/pages/Footer";
import { Main } from "../components/pages/Main";
import { Services } from "../components/pages/Services";

export function Home() {
  return (
    <>
      <div className="w-[100%] px-6 z-10 bg-brand-green-200">
        <Main />
      </div>
      <div className="w-[100%] px-6 bg-brand-green-100">
        <Services />
      </div>
      <div className="w-[100%] px-6 bg-brand-bege-300">
        <About />
      </div>
      <div className="w-[100%] px-6 bg-white">
        <Contact />
      </div>
      <div className="w-[100%] px-6 bg-brand-green-500">
        <Footer />
      </div>
    </>
  );
}
