import { ReactNode } from "react";

export default function PrimaryButton({
  callback,
  text,
  className,
  disabled,
}: {
  disabled: boolean;
  callback: () => void;
  text: string;
  className?: string;
}) {
  return (
    <button
      onClick={() => {
        callback();
      }}
      disabled={disabled}
      className={`bg-[#0E5258] px-8 py-4 pointer-events-auto  text-center text-lg sm:px-6 sm:py-2 sm:text-base font-extrabold text-white shadow-sm shadow-black  duration-75 active:scale-95 active:duration-75 transition-transform active:transition-transform disabled:opacity-20 sm:focus:outline-2 sm:focus:outline-offset-2 sm:*:focus:outline-amber-400 ${className}`}
    >
      <span className="translate-y-0.5">{text}</span>
    </button>
  );
}
