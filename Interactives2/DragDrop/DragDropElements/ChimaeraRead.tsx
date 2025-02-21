import { useAtom } from "jotai";
import { charSize, paddingLeft, topDistanceIncludingBorder } from "./Container";
import Read from "./Read";
import { chimaeraPlacedAtom } from "./ReferenceGenome";
import DraggableRead from "./DraggableRead";
import { chimaeraReadAtom, ReadPositionType } from "./ReadsContainer";
import { ReadType } from "@/data/Interactives/interactiveStore";
import { useEffect } from "react";
import { RESET } from "jotai/utils";

export default function ChimaeraRead({
  read,
  changeCharStart,
}: {
  read: ReadType;
  changeCharStart: ({
    read,
    newPosition,
  }: {
    read: ReadType;
    newPosition: ReadPositionType;
  }) => void;
}) {
  const text = "TCTGTAATACAAAAT";
  const [chimaeraRead, setChimaeraRead] = useAtom(chimaeraReadAtom);
  const [chimaeraPlaced, setChimaeraPlaced] = useAtom(chimaeraPlacedAtom);

  useEffect(() => {
    if (read.charStart === 3) {
      setChimaeraPlaced(true);
    }
  }, [read.charStart, setChimaeraPlaced]);

  return (
    <DraggableRead
      changeCharStart={changeCharStart}
      hidden={chimaeraPlaced}
      read={read}
    />
  );

  return (
    <div
      style={{
        // animationDirection: "forwards",
        top: topDistanceIncludingBorder,
        // left: paddingLeft + 3 * charSize,
      }}
      // w-[680px]
      // w-[792px]
      className={`${chimaeraPlaced ? "chimaeraLong" : ""} absolute flex w-[270px] justify-between px-0.5 py-[3px] outline outline-[2px] -outline-offset-[1.5px] outline-black`}
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
                className="block translate-y-[3px] font-bold"
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
                className="block translate-y-[3px] font-bold"
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
