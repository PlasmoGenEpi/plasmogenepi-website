import Genotyping from "@/components/Interactives/Shared/Genotyping/Genotyping";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
  hintsEnabledAtom,
  genotypeHintsAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";

export default function P1GenotypeResult() {
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);
  const [boards, setBoards] = useAtom(positiveControlBoardsAtom);
  const currentBoard = boards[selectedBoard];
  const hintsEnabled = useAtomValue(hintsEnabledAtom);
  const genotypeHints = useAtomValue(genotypeHintsAtom);

  return (
    <div className="fadeIn500 max-w-[500px]">
      <Genotyping
        hints={hintsEnabled ? genotypeHints : []}
        disabled={currentBoard.inputValid}
        boardNumber={selectedBoard}
        possibleValues={fixedData[1].refValues.map((refValue, idx) => {
          return {
            reference: refValue,
            alternate: fixedData[1].altValues[idx],
          };
        })}
        callback={(idx, ref) => {
          let newInputs = [...boards[selectedBoard].inputs].map((inputObj) => {
            return { ...inputObj };
          });
          if (ref) {
            newInputs[idx].reference = !newInputs[idx].reference;
          } else {
            newInputs[idx].alternate = !newInputs[idx].alternate;
          }
          setBoards({
            ...boards,
            [selectedBoard]: {
              ...boards[selectedBoard],
              inputs: newInputs,
            },
          });
          // console.log(id);
        }}
        valObjs={currentBoard.inputs}
      />
    </div>
  );
}
