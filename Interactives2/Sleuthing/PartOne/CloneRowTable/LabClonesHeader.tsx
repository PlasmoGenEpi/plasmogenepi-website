import {
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { compareUnorderedArrays, switchValues } from "@/helpers/helpers";
import { useAtomValue } from "jotai";

export default function LabClonesHeader() {
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);
  const boards = useAtomValue(positiveControlBoardsAtom);
  const currentBoard = boards[selectedBoard];
  const phase = useAtomValue(phaseAtom);

  let otherBoard = boards[switchValues(selectedBoard)];

  return (
    <div className="col-start-1 flex flex-col gap-2 text-center md:text-left">
      <h2 className="text-xl font-bold">Lab Clones</h2>
      {/* <span
        className={`${phase === 2 && compareUnorderedArrays(currentBoard.rows, otherBoard.rows) && currentBoard.rows.length > 0 ? "" : "invisible"} text-center text-sm text-red-500`}
      >
        Positive controls must be unique!
      </span> */}
    </div>
  );
}
