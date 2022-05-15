import { Dispatch, MutableRefObject, useEffect } from "react";

interface ButtonProps {
  onClick: Dispatch<React.SetStateAction<boolean>>;
  buttonRef?: MutableRefObject<null>;
  cancelButtonStyle?: boolean;
  title: string;
}
export function Button({
  title,
  onClick,
  buttonRef,
  cancelButtonStyle = false,
  ...rest
}: ButtonProps) {
  return cancelButtonStyle ? (
    <button
      type="button"
      className="w-full inline-flex justify-center rounded-md
          border border-transparent shadow-sm px-4 py-2 bg-brand-green-100
          text-base font-medium text-brand-green-600 hover:bg-brand-green-600
          hover:text-white
          focus:outline-none focus:ring-1 focus:ring-offset-1
          focus:ring-red-200 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={() => onClick}
      ref={buttonRef}
      {...rest}
    >
      {title}
    </button>
  ) : (
    <button
      type="button"
      className="w-full inline-flex justify-center rounded-md
          border border-transparent shadow-sm px-4 py-2 bg-brand-green-100
          text-base font-medium text-brand-green-600 hover:bg-brand-green-600
          hover:text-white
          focus:outline-none focus:ring-1 focus:ring-offset-1
          focus:ring-brand-green-100 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={() => onClick}
      ref={buttonRef}
    >
      {title}
    </button>
  );
}
