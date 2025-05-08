import {
  compareUnorderedArrays,
  switchValues,
} from "@/app/components/Interactives/helpers";
import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";
import CloneRow, {
  cloneRowButtonColors,
  cloneRowColors,
} from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import PositiveControlBoard from "@/app/components/Interactives/Shared/PositiveControlBoard/PositiveControlBoard";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  cloneRowsAtom,
  hintsEnabledAtom,
  partOneCompletionAtom,
  phase1Atom,
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
// import { compareUnorderedArrays, switchValues } from "@/helpers/helpers";
import { useAtom, useAtomValue } from "jotai";

const refValues = fixedData[1].refValues;
const altValues = fixedData[1].altValues;

export default function P1PositiveControlBoard({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [boards, setBoards] = useAtom(positiveControlBoardsAtom);
  const activeBoard = useAtomValue(selectedPositiveControlBoardAtom);
  const currentBoard = boards[activeBoard];
  const completion = useAtomValue(partOneCompletionAtom);
  const cloneRows = useAtomValue(cloneRowsAtom);
  const phase = useAtomValue(phase1Atom);
  const hintsEnabled = useAtomValue(hintsEnabledAtom);

  function getHint() {
    if (!currentBoard.rows.length || !hintsEnabled || currentBoard.valid) {
      return "";
    }
    if (phase === 2) {
      if (
        (activeBoard >= 5 && currentBoard.rows.length !== 4) ||
        ((activeBoard === 3 || activeBoard === 4) &&
          currentBoard.rows.length !== 2) ||
        ((activeBoard === 1 || activeBoard === 2) &&
          currentBoard.rows.length !== 1)
      ) {
        return lang === "EN"
          ? "Make sure you are using the right number of clones according to the MOI."
          : lang === "FR"
          ? "Assurez-vous d'utiliser le bon nombre de clones en fonction du MOI."
          : "Certifique-se de que está usando o número correto de clones de acordo com o MOI.";
      }
    }
    let otherBoard = boards[switchValues(activeBoard)];
    if (
      currentBoard.rows.length &&
      compareUnorderedArrays(currentBoard.rows, otherBoard.rows)
    ) {
      return lang === "EN"
        ? "Positive controls must be unique."
        : lang === "FR"
        ? "Les contrôles positifs doivent être uniques."
        : "Os controles positivos devem ser únicos.";
    }
  }

  const handleClick = function (id: number) {
    if (phase === 2) {
      let targetIndex = currentBoard.rows.indexOf(id);
      if (targetIndex !== null) {
        let newRow: number[] = [];
        newRow = newRow.concat(
          currentBoard.rows
            .slice(0, targetIndex)
            .concat(
              currentBoard.rows.slice(
                targetIndex + 1,
                currentBoard.rows.length,
              ),
            ),
        );
        setBoards({
          ...boards,
          [activeBoard]: {
            ...currentBoard,
            valid: false,
            rows: newRow,
          },
        });
        // console.log(newRow);
      }
    }
  };
  return (
    <PositiveControlBoard>
      <div className="mx-auto min-h-full w-full max-w-[500px]">
        <div className="flex min-h-full w-full scale-75 flex-col gap-2 [backface-visibility:hidden] dark:brightness-75">
          {currentBoard.rows.map((rowId, idx) => {
            if (completion[phase] || currentBoard.valid) {
              return (
                <CloneRow
                  key={idx}
                  classNames={{
                    button: cloneRowButtonColors[rowId],
                    row: cloneRowColors[rowId],
                  }}
                  id={rowId}
                >
                  {cloneRows[rowId].vals.map((val, idx) => {
                    return (
                      <CloneElement
                        animation={false}
                        className={"bg-white text-black dark:bg-white/50"}
                        possibleValues={{
                          reference: refValues[idx],
                          alternate: altValues[idx],
                        }}
                        val={val}
                        key={idx}
                      />
                    );
                  })}
                </CloneRow>
              );
            } else {
              return (
                <button
                  className="transition-all focus-within:outline-offset-2 focus:scale-105 md:hover:scale-105"
                  type="button"
                  onClick={() => {
                    handleClick(rowId);
                  }}
                  key={rowId}
                >
                  <CloneRow
                    key={rowId}
                    classNames={{
                      button: cloneRowButtonColors[rowId],
                      row: cloneRowColors[rowId],
                    }}
                    id={rowId}
                  >
                    {cloneRows[rowId].vals.map((val, idx2) => {
                      return (
                        <CloneElement
                          animation={false}
                          className={"bg-white text-black dark:bg-white/50"}
                          possibleValues={{
                            reference: refValues[idx2],
                            alternate: altValues[idx2],
                          }}
                          val={val}
                          key={idx2}
                        />
                      );
                    })}
                  </CloneRow>
                </button>
              );
            }
          })}
          {getHint() && (
            <div
              style={{
                animationDelay: "2000ms",
              }}
              key={getHint()}
              data-tip={getHint()}
              className="fadeIn500 tooltip tooltip-bottom tooltip-open top-full [--tooltip-color:#ffffff] [--tooltip-tail:.75rem] [--tooltip-text-color:black] before:p-4 before:text-xl before:ring-2  before:ring-orange-400 after:border-b-orange-400 after:[color:blue]"
              // className="fadeIn500 tooltip tooltip-bottom tooltip-open absolute top-[85%] ml-4 w-1/2 border-black [--tooltip-color:#ffffff] [--tooltip-font-size:12px] [--tooltip-tail:1rem] [--tooltip-text-color:black] before:max-w-full before:px-2 before:pb-2 before:pt-4 before:text-base before:ring-1 before:ring-orange-400 after:top-[-.65rem] after:z-10 after:translate-x-full after:ring-white @4xl/main:top-full @4xl/main:scale-125"
            ></div>
          )}
        </div>
      </div>
    </PositiveControlBoard>
  );
}
