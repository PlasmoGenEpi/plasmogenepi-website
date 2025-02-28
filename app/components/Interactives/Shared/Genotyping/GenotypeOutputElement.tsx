export default function GenotypeOutputElement({
  vals,
  idx,
  possibleVals,
  className,
  noBorder,
  htmlId,
}: {
  htmlId: string;
  noBorder?: boolean;
  className?: string;
  idx: number;
  vals: { reference: boolean; alternate: boolean };
  possibleVals: { reference: string; alternate: string };
}) {
  return (
    <div className="dark:brightness-75">
      <div
        className={
          idx === 11
            ? `relative flex min-h-[2.5em] flex-col items-center justify-end font-bold dark:bg-white  dark:text-black  ${
                className ? className : "text-xl"
              }`
            : `relative flex min-h-[2.5em] flex-col items-center  justify-end font-bold  dark:bg-white  dark:text-black  ${
                className ? className : "text-xl"
              }`
        }
      >
        {!noBorder && (
          <div className="absolute bottom-0 left-1/2 w-7 -translate-x-1/2 border-b-2 border-black dark:border-zinc-200"></div>
        )}

        {/* {inputRowItem.reference && inputRowItem.alt ? <div></div> : null} */}
        <span
          className={
            vals.reference && vals.alternate
              ? `absolute mt-2 ${
                  possibleVals.reference === "C"
                    ? "-translate-x-1.5"
                    : possibleVals.reference === "T"
                    ? "-translate-x-1"
                    : "-translate-x-2"
                } -translate-y-[17px] transition-all`
              : vals.reference && !vals.alternate
              ? "absolute -translate-y-1/4 transition-all"
              : "hidden"
          }
        >
          {vals.reference ? possibleVals.reference : ""}
        </span>
        <span
          className={
            vals.reference && vals.alternate
              ? "absolute -translate-x-[1px]  -translate-y-[7px] rotate-[30deg] scale-100 font-normal transition-all"
              : "-translate-x-[1px] -translate-y-[6px] rotate-[30deg] scale-0 font-normal transition-all"
          }
        >
          /
        </span>
        <span
          // className="text-white text-lg translate-x-1/2 absolute translate-y-[40%]"
          className={
            vals.reference && vals.alternate
              ? "alternateAllele absolute mt-2 translate-x-1.5 translate-y-1 text-white transition-all"
              : !vals.reference && vals.alternate
              ? "alternateAllele absolute -translate-y-1/4 text-white transition-all"
              : "hidden"
          }
        >
          {vals.alternate ? possibleVals.alternate : ""}
        </span>
      </div>
    </div>
  );
}
