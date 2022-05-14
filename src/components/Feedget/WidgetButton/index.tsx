import { ChatTeardropDots } from "phosphor-react";

import { Popover } from "@headlessui/react";
import { WidgetForm } from "../WidgetForm";

export function WidgetButton() {
  return (
    <Popover className="bottom-4 right-4 fixed md:bottom-8 md:right-8 flex flex-col items-end z-20">
      <Popover.Panel className="text-white">
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button
        className="bg-brand-green-500 rounded-full pl-4 pr-3 min-w-[3.5rem] h-[3.5rem] text-white border-2 border-white flex items-center group "
        // onClick={() => setIsWidgetOpen(!isWidgetOpen)}
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span>Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}
