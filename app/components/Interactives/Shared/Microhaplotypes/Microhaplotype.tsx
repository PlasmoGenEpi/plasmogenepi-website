import { MicroId } from "@/helpers/helpers";

export default function Microhaplotype({
  possibleVals,
  className,
  vals,
  childClassNames,
}: {
  childClassNames?: {
    shared?: string;
    left?: string;
    middle?: string;
    right?: string;
  };
  vals: MicroId;
  className?: string;
  possibleVals: {
    reference: string;
    alternate: string;
  }[];
}) {
  return (
    <span
      className={`${
        className ? className : "bg-white"
      }  flex w-full items-center text-xl font-bold shadow-sm shadow-black text-black`}
    >
      {vals.map((val, idx) => {
        return (
          <span
            key={idx}
            //@ts-ignore
            className={`${
              val === 1 ? "alternateAllele" : ""
            } bg-white bg-opacity-80 ${
              childClassNames
                ? childClassNames.shared +
                  " " +
                  (idx === 0
                    ? childClassNames.left
                    : idx === vals.length - 1
                    ? childClassNames.right
                    : childClassNames.middle)
                : ""
            } flex h-full items-center ${
              idx === 0
                ? "justify-end"
                : idx === vals.length - 1
                ? "justify-start"
                : "justify-center"
            } ${idx === 0 || idx === vals.length - 1 ? "grow" : "px-1"}`}
          >
            <span className="block translate-y-[3px]">
              {
                //@ts-ignore
                val === 0
                  ? possibleVals[idx].reference
                  : possibleVals[idx].alternate
              }
            </span>
          </span>
        );
      })}
    </span>
  );
}
