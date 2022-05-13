import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button
      className="top-5 right-4 rounded-md border-transparent absolute text-zinc-500 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-green-500"
      title="Fechar formulário de feedback"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}
