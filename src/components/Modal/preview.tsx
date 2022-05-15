/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, Fragment, MutableRefObject } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  buttonRef?: MutableRefObject<null>;
  image: string;
}

export default function ModalPreview({
  image,
  open,
  buttonRef,
  setOpen,
  ...rest
}: ModalProps) {
  return (
    <Transition.Root show={true} as={Fragment}>
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
                <img src="https://picsum.photos/536/354" alt="Imagem preview" />
              </div>
              <div className="bg-brand-green-500 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
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
                  Fechar
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
