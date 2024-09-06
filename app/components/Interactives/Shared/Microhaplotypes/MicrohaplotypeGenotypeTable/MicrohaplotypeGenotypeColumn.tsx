import { ReactNode } from "react";

export default function MicrohaplotypeGenotypeColumn({
  active,
  children,
  setActiveColumn,
  colNum,
}: {
  colNum: 0 | 1 | 2 | 3;
  setActiveColumn?: (colNum: 0 | 1 | 2 | 3) => void;
  children?: ReactNode;
  active: boolean | null;
}) {
  return (
    <div
      tabIndex={active !== null ? 0 : undefined}
      role={active !== null ? "button" : undefined}
      aria-label={`microhaplotype locus ${colNum + 1}`}
      onKeyDown={(e) => {
        if (e.key === " " && setActiveColumn) {
          setActiveColumn(colNum);
        }
      }}
      onClick={(e) => {
        if (!active && setActiveColumn) {
          e.stopPropagation();
          e.currentTarget.focus();
          setActiveColumn(colNum);
          return;
        }
      }}
      className={`relative flex basis-28 flex-col gap-1 ${active !== null ? (active ? " min-h-44 bg-primaryBlue/50" : " min-h-44 bg-gray-300 opacity-50 hover:bg-primaryBlue/50 hover:opacity-100 focus:bg-primaryBlue/50 focus:opacity-100") : ""}`}
    >
      {setActiveColumn && (
        <div
          onClick={(e) => {
            if (setActiveColumn) {
              setActiveColumn(colNum);
            }
          }}
          className={`${active ? "pointer-events-none" : ""} absolute inset-0 z-10`}
        ></div>
      )}
      {children}
    </div>
  );
}
