import { referenceGenome } from "@/fixedData";
import { dragLocationAtom, phaseAtom } from "@/store";
import { useAtomValue } from "jotai";

export default function ReferenceGenome({
  size,
  start,
}: {
  size: number;
  start: number | null;
}) {
  const phase = useAtomValue(phaseAtom);
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(51,${size}px)`,
        width: 56 * size,
      }}
      className={
        false
          ? "invisible text-center grid translate-y-0.5 pointer-events-none relative font-bold"
          : `text-center grid translate-y-0.5 pointer-events-none relative font-bold`
      }
    >
      <div className="absolute inset-0"></div>
      {referenceGenome.split("").map((el, idx) => {
        return (
          <span
            style={{
              // animation: "fadeIn250",
              animationDelay: `${idx * 20}ms`,
            }}
            // onAnimationEnd={(e) => {
            //   if (e.currentTarget === e.target) {
            //     if (e.animationName === "fadeIn") {
            //       e.currentTarget.classList.remove("fadeIn250");
            //     }
            //   }
            // }}
            className={
              phase === 1
                ? "invisible"
                : phase === 2
                  ? "fadeIn250"
                  : start !== null
                    ? idx < start + 15 && idx >= start
                      ? "opacity-100 font-bold border-b-2 border-black -translate-y-2 transition-all"
                      : "opacity-50 transition-all"
                    : "opacity-100 transition-all"
            }
            key={idx}
          >
            {el}
          </span>
        );
      })}
    </div>
  );
}
