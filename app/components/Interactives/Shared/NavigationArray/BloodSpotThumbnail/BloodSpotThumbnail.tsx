import PlasmoGenEpiLogo from "@/components/Logos/PlasmoGenEpiLogo";
import Image from "next/image";
import { ReactNode, useEffect } from "react";
import CompleteToken from "./CompleteToken";
import MicroscopeToken from "./MicroscopeToken";
import BloodSpotTextBox from "./BloodSpotTextBox";
import { useAtomValue } from "jotai";
import { positiveControlBoardsAtom } from "@/data/Interactives/interactiveStore";
import CloneRow, { cloneRowColors } from "../../CloneRow/CloneRow";
import { fixedData } from "@/data/Interactives/fixedData";
import { findFirstFocusableElement } from "@/helpers/helpers";

export default function BloodSpotThumbnail({
  children,
  id,
  active,
  complete,
  hidden,
  className,
  callback,
  tooltip,
}: {
  tooltip: string;
  callback?: () => void;
  className?: string;
  hidden?: boolean;
  complete?: boolean;
  active: boolean;
  children?: ReactNode;
  id?: number;
  MOI?: number;
}) {
  return (
    <button
      type="button"
      aria-label={`positive control ${id}`}
      onClick={() => {
        if (callback) {
          callback();
        }
      }}
      data-tip={tooltip}
      className={`tooltip relative mb-auto w-full max-w-[200px] select-none border-[3px] p-2 transition-all focus-visible:tooltip-open focus:outline-offset-4 ${className ? className : ""} ${active ? "border-primaryBlue" : "border-transparent"} ${hidden ? "fadeOut500 invisible delay-500" : "fadeIn500"}`}
    >
      {complete && <CompleteToken />}
      <div
        className={`relative isolate flex aspect-[2/1] w-full max-w-[200px] grow origin-top-left items-center justify-center bg-gradient-to-b from-zinc-50 via-transparent to-zinc-50   shadow-sm shadow-black transition-[opacity,_transform] duration-300 md:aspect-[9/4] ${active ? "opacity-100" : " opacity-50"}`}
      >
        <div className="absolute left-[30%] top-1/2 -z-10 aspect-square w-1/3 -translate-x-1/2 -translate-y-1/2  rounded-full border-black opacity-75">
          <Image
            alt="blood spot"
            src="/assets/BloodSlide.png"
            fill
            className="object-cover"
          />
          <div
            style={{
              background: `radial-gradient(purple, transparent 60%, transparent 65%, white 70%), repeating-conic-gradient(
              #560000,
              #C10000,
              #560000f4,
              #C10000,
              #560000
            )`,
            }}
            className="absolute inset-0 -z-10 rounded-full"
          ></div>
        </div>
        <div className="flex h-full w-full">
          {children}
          <BloodSpotTextBox id={id} />
        </div>
      </div>
    </button>
  );
}
