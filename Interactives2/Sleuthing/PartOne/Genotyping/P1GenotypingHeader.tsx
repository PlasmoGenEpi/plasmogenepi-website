import { cloneRowColors } from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import {
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";

export default function P1GenotypingHeader({
  className,
}: {
  className?: string;
}) {
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);
  const boards = useAtomValue(positiveControlBoardsAtom);
  return (
    <div
      className={`${
        className ? className : ""
      } flex flex-col gap-2 text-center md:text-left`}
    >
      <h2 className="text-xl font-bold">
        Positive Control {selectedBoard} Genotype
      </h2>
      <div className="mx-auto mb-4 flex gap-4 text-sm md:mx-0">
        <span className="text-base tracking-wide text-black">
          MOI = {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
        </span>
        {/* <label>Clones:</label>
        {Array(5)
          .fill(0)
          .map((rowId, idx) => {
            return (
              <div
                key={idx}
                className={`aspect-square ${cloneRowColors[idx + 1]} flex items-center justify-center rounded-full p-2.5 text-sm font-bold ${boards[selectedBoard].rows.includes(idx + 1) ? "" : "opacity-30"}`}
              >
                <span className="absolute translate-y-0.5">{idx + 1}</span>
              </div>
            );
          })} */}
      </div>
      {/* <span className="text-sm tracking-wide">
        Multiplicity of Infection (MOI):{" "}
        {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
      </span> */}
    </div>
  );
}
