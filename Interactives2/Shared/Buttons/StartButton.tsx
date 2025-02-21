import { phaseAtom } from "@/data/Interactives/interactiveStore";
import { useAtom } from "jotai";
import { ReactNode } from "react";

export default function StartButton({
  text,
  disabled,
  disabledText,
  callback,
}: {
  callback?: (t?: any) => void;
  text: string;
  disabled?: boolean;
  disabledText?: ReactNode | string;
}) {
  const [phase, setPhase] = useAtom(phaseAtom);

  return (
    <div className="grid place-items-center py-40">
      {disabledText && <div className="mb-8 ">{disabledText}</div>}
      <button
        disabled={disabled}
        onClick={
          callback
            ? () => {
                callback();
              }
            : () => {
                setPhase(1);
              }
        }
        className="rounded-lg bg-primaryGreen/90 px-12 py-4 text-xl font-light text-white shadow-sm shadow-black transition-all hover:bg-primaryGreen disabled:pointer-events-none disabled:opacity-50"
      >
        <span className="block translate-y-0.5">{text}</span>
      </button>
    </div>
  );
}
