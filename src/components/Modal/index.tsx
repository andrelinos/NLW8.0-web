/* This example requires Tailwind CSS v2.0+ */
import {
  Children,
  cloneElement,
  Dispatch,
  Fragment,
  JSXElementConstructor,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/outline";
import { Button } from "./Button";

interface ModalProps {
  open: boolean;

  setOpen: Dispatch<React.SetStateAction<boolean>>;
  buttonRef: MutableRefObject<null>;
}

export default function Modal({
  open,
  buttonRef,
  setOpen,
  ...rest
}: ModalProps) {
  function handleOpenUrlWhatsApp(url: string) {
    window.open(url, "_blank");
    setOpen(false);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={buttonRef}
        onClose={setOpen}
        {...rest}
      >
        <div
          className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
         sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg
                  text-left overflow-hidden shadow-xl transform transition-all
                  sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-brand-green-200 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div
                    className="mx-auto flex-shrink-0 flex items-center
                   justify-center h-12 w-12 rounded-full bg-brand-green-500 sm:mx-0
                    sm:h-10 sm:w-10"
                  >
                    <QuestionMarkCircleIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-brand-green-600"
                    >
                      Olá, escolha uma versão do WhatsApp
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Para sua comodidade, escolha a versão do WhatsApp que
                        deseja abrir. Atualmente você pode escolher a versão do
                        aplicativo caso tenha instalado em seu computador (PC),
                        ou a versão Web que será aberta em seu navegador de
                        internet preferido.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-green-500 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md
                    border border-transparent shadow-sm px-4 py-2 bg-brand-green-100
                    text-base font-medium text-brand-green-600 hover:bg-brand-green-600
                    hover:text-white
                    focus:outline-none focus:ring-1 focus:ring-offset-1
                    focus:ring-brand-green-100 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() =>
                    handleOpenUrlWhatsApp(
                      "https://api.whatsapp.com/send/?phone=5511000099991&text=Olá,+preciso+de+ajuda&app_absent=0"
                    )
                  }
                >
                  WhatsApp PC
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md
                      border border-transparent shadow-sm px-4 py-2 bg-brand-green-100
                      text-base font-medium text-brand-green-600 hover:bg-brand-green-600
                      hover:text-white
                      focus:outline-none focus:ring-1 focus:ring-offset-1
                      focus:ring-brand-green-100 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() =>
                    handleOpenUrlWhatsApp(
                      "https://web.whatsapp.com/send/?phone=5511000099991&text=Olá,+preciso+de+ajuda&app_absent=0"
                    )
                  }
                >
                  WhatsApp Web
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md
                      border border-transparent shadow-sm px-4 py-2 bg-brand-green-100
                      text-base font-medium text-brand-green-600 hover:bg-brand-green-600
                      hover:text-white
                      focus:outline-none focus:ring-1 focus:ring-offset-1
                      focus:ring-red-200 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                  ref={buttonRef}
                  {...rest}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
