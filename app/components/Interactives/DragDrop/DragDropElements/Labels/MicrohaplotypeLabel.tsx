import Microhaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/Microhaplotype";
import { MicroId } from "@/helpers/helpers";
import { useEffect, useRef } from "react";

export default function MicrohaplotypeLabel({
  possibleVals,
  vals,
  className,
  top,
  left,
  trigger,
}: {
  trigger?: boolean;
  top: number;
  left: number;
  className?: string;
  vals: number[];
  possibleVals: {
    reference: string;
    alternate: string;
  }[];
}) {
  const labelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (trigger) {
      labelRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div
      ref={labelRef}
      style={{
        top,
        left,
        animationDelay: "1000ms",
      }}
      className="fadeIn500 absolute w-fit scroll-mx-36 not-italic text-black dark:brightness-75"
    >
      <div
        className={`${className} flex w-full items-center text-xl font-bold shadow-sm shadow-current`}
      >
        {vals.map((val, idx) => {
          return (
            <div
              key={idx}
              className={`
                ${
                  idx === 0
                    ? "pl-3 pr-0.5"
                    : idx === vals.length - 1
                    ? "pl-0.5 pr-3"
                    : "px-0.5"
                } ${val === 1 ? "alternateAllele" : ""} bg-white bg-opacity-80`}
            >
              <span className="block translate-y-[3px]">
                {
                  //@ts-ignore
                  val === 0
                    ? possibleVals[idx].reference
                    : possibleVals[idx].alternate
                }
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
