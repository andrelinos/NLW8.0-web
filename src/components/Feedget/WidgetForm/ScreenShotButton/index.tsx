import { useState } from "react";
import html2canvas from "html2canvas";
import { Camera, Eye, Trash } from "phosphor-react";
import { Loading } from "../../Loading";

import Modal from "react-modal";

export interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");

    onScreenshotTook(base64image);

    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <div
        className="w-10 h-10 bg-blue-400 rounded-md border-transparent flex justify-end items-end text-zinc-400
        hover:text-zinc-100  transition overflow-hidden"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "center",
          backgroundClip: "content-box",
        }}
      >
        <button
          type="button"
          className="hover:text-red-400 transition"
          onClick={() => onScreenshotTook(null)}
        >
          <Trash weight="fill" />
        </button>
        {/* <button
          type="button"
          className="hover:text-blue-300 transition"
          // onClick={() => setIsOpen(true)}
        >
          <Eye weight="fill" />
        </button> */}
      </div>
    );
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-green-500"
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
}
