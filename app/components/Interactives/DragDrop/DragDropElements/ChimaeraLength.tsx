import { useAtomValue } from "jotai";
import { charSize, paddingLeft, topDistanceIncludingBorder } from "./Container";
import { chimaeraPlacedAtom } from "./ReferenceGenome";
import { dragDropCompletionAtom } from "@/data/Interactives/interactiveStore";

export default function ChimaeraLength() {
  const chimaeraPlaced = useAtomValue(chimaeraPlacedAtom);
  const text = "TCTGTAATACAAAAT";
  const completion = useAtomValue(dragDropCompletionAtom);

  if (!chimaeraPlaced) {
    return null;
  } else
    return (
      <div
        style={{
          // animationDirection: "forwards",
          top: topDistanceIncludingBorder,
          left: paddingLeft + 3 * charSize,
        }}
        // w-[680px]
        // w-[792px]
        className={`${
          chimaeraPlaced && !completion[8]
            ? "chimaeraLong w-[270px] "
            : "w-[794px]"
        } absolute flex justify-between px-0.5 py-[3px] outline/ outline-[2px] -outline-offset-[1.5px] outline-black dark:outline-none`}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(8,${charSize}px)`,
          }}
          className="text-center text-xl"
        >
          {text
            .slice(0, 8)
            .split("")
            .map((el, idx) => {
              return (
                <span
                  key={idx}
                  className="block translate-y-[3px] font-bold/"
                  style={{
                    width: charSize,
                  }}
                >
                  {el}
                </span>
              );
            })}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(7,${charSize}px)`,
          }}
          className="text-center text-xl"
        >
          {text
            .slice(8, 15)
            .split("")
            .map((el, idx) => {
              return (
                <span
                  key={idx}
                  className="block translate-y-[3px] font-bold/"
                  style={{
                    width: charSize,
                  }}
                >
                  {el}
                </span>
              );
            })}
        </div>
        {/* <div className="grid grid-cols-8"></div> */}
      </div>
    );
}
