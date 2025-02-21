import PlasmoGenEpiLogo from "@/app/components/Logos/PlasmoGenEpiLogo";
import LogoLink from "@/app/components/NavBar/LogoLink";
import {
  cloneRowsAtom,
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import { cloneRowColors } from "../CloneRow/CloneRow";

export default function PositiveControlLabel({
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
      }  border-black font-mono md:col-start-2`}
    >
      <div className="ml-auto mr-8 flex flex-col gap-4">
        <h3 className="  font-bold">Positive Control {selectedBoard}</h3>
        <h4 className="row-start-2  ">
          Multiplicity of Infection (MOI):{" "}
          {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
        </h4>
        {/* <div className="mb-4 flex gap-4">
          <label>Clones:</label>
          {Array(5)
            .fill(0)
            .map((rowId, idx) => {
              return (
                <div
                  key={idx}
                  className={`aspect-square ${cloneRowColors[idx + 1]} flex items-center justify-center rounded-full p-3 text-sm font-bold ${boards[selectedBoard].rows.includes(idx + 1) ? "scale-125" : "opacity-30"}`}
                >
                  <span className="absolute">{idx + 1}</span>
                </div>
              );
            })}
        </div> */}
      </div>
    </div>
  );
}
