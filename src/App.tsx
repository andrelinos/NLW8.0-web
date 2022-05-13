import { Header } from "./components/Header";
import { WidgetButton } from "./components/WidgetButton";
import { Home } from "./pages";

export function App() {
  return (
    <div className=" flex relative justify-center flex-col">
      <Header />
      <Home />
      <WidgetButton />
    </div>
  );
}
