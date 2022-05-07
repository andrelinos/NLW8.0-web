import { WidgetButton } from "../../components/WidgetButton";

interface HomeProps {
  screenshot: string | null;
}

export function Home(/* { screenshot }: HomeProps */) {
  return (
    <div className="w-screen h-screen flex relative justify-center  bg-[url('/nlw.png')] bg-no-repeat bg-cover bg-center">
      <WidgetButton />

      {/* {screenshot && (
        <div
          style={{
            backgroundImage: `url(${screenshot})`,
            backgroundPosition: "center",
            backgroundClip: "content-box",
          }}
          className="w-[80%] h-[80%] mt-10  absolute"
        />
      )} */}
    </div>
  );
}
