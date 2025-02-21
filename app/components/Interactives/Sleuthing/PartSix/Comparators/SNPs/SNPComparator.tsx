"use client";
import { cloneRowColors } from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import {
  activePairwiseComboAtom,
  hintsEnabledAtom,
  pairwiseCombosAtom,
  pairwiseCompletionAtom,
  pairwiseMHPCompletionAtom,
  partSixCloneRowsAtom,
  partSixCompletionAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { P6CloneRowColors } from "../../CloneRows/P6MHPCloneRows";
import { useEffect } from "react";
import {
  compareUnorderedArrays,
  findFirstFocusableElement,
} from "@/app/components/Interactives/helpers";
// import {
//   compareOrderedArrays,
//   compareUnorderedArrays,
//   findFirstFocusableElement,
// } from "@/helpers/helpers";

export default function SNPComparator({
  activeCombo,
  label,
}: {
  label?: boolean;
  activeCombo: [number, number];
}) {
  // const [activePairwiseCombo, setActivePairwiseCombo] = useAtom(
  //   activePairwiseComboAtom,
  // );
  const [pairwiseCombos, setPairwiseCombos] = useAtom(pairwiseCombosAtom);
  const pairwiseCompletion = useAtomValue(pairwiseCompletionAtom);
  const [phase, setPhase] = useAtom(phase2Atom);
  const completion = useAtomValue(partSixCompletionAtom);
  const hintsEnabled = useAtomValue(hintsEnabledAtom);
  const cloneRows = useAtomValue(partSixCloneRowsAtom);

  let [first, second] = activeCombo;

  useEffect(() => {
    if (completion[phase]) {
      return;
    }
    if (
      compareUnorderedArrays([1, 2], activeCombo) &&
      !pairwiseCompletion[1][3] &&
      pairwiseCompletion[1][2]
    ) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    } else if (
      compareUnorderedArrays([1, 3], activeCombo) &&
      !pairwiseCompletion[2][3] &&
      pairwiseCompletion[1][3]
    ) {
      console.log("CALLED");
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    } else if (
      compareUnorderedArrays([2, 3], activeCombo) &&
      pairwiseCompletion[2][3]
    ) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, pairwiseCompletion]);

  let x = cloneRows[first].vals.map((val, idx) => {
    return val === cloneRows[second].vals[idx];
  });

  if (first === second) {
    return (
      <div className="max-w-[500px] dark:brightness-75">
        {label && (
          <div className="mb-2 mt-4  text-center">
            <label className="text-sm">
              Check each box below with matching alleles at the corresponding
              locus.
            </label>
          </div>
        )}
        <div className="grid  gap-x-1 [grid-template-columns:8%_auto]">
          <div className="flex h-full min-h-10 w-full flex-col">
            <div
              className={`mr-auto aspect-square h-5 translate-y-0.5 rounded-full ${P6CloneRowColors[first]}`}
            ></div>
            <div
              className={`ml-auto aspect-square h-5 -translate-y-0.5 rounded-full ${P6CloneRowColors[second]}`}
            ></div>
          </div>
          <div className="col-start-2 grid grid-cols-12 gap-x-1 p-1">
            {Array(12)
              .fill(0)
              .map((el, idx) => {
                return (
                  <div key={idx} className="flex items-center">
                    <input
                      aria-label={`locus ${idx + 1} (matches)`}
                      disabled={
                        //@ts-ignore
                        true
                      }
                      type="checkbox"
                      checked={true}
                      key={idx}
                      className="css-checkbox peer h-full w-full "
                    ></input>
                    <label
                      className={`css-label  rounded shadow-sm shadow-black outline-offset-1  peer-focus:outline peer-focus:outline-2 peer-focus:outline-black peer-[myPeer]:focus:border-black`}
                    ></label>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[500px] dark:brightness-75">
      {label && (
        <div className="mb-2 mt-4  text-center">
          <label className="text-sm">
            Check each box below with matching alleles at the corresponding
            locus.
          </label>
        </div>
      )}
      <div className="grid  gap-x-1 [grid-template-columns:8%_auto]">
        <div className="flex h-full min-h-10 w-full flex-col">
          <div
            className={`mr-auto aspect-square h-5 translate-y-0.5 rounded-full ${P6CloneRowColors[first]}`}
          ></div>
          <div
            className={`ml-auto aspect-square h-5 -translate-y-0.5 rounded-full ${P6CloneRowColors[second]}`}
          ></div>
        </div>
        <div className="col-start-2 my-auto grid grid-cols-12 gap-x-1 p-1">
          {Array(12)
            .fill(0)
            .map((el, idx) => {
              return (
                <div key={idx} className="flex items-center">
                  <input
                    aria-label={
                      hintsEnabled &&
                      ((x[idx] && !pairwiseCombos[first][second][idx]) ||
                        (!x[idx] && pairwiseCombos[first][second][idx]))
                        ? `locus ${idx + 1} matches (incorrect)`
                        : `locus ${idx + 1} matches`
                    }
                    disabled={
                      //@ts-ignore
                      pairwiseCompletion[first][second]
                    }
                    onChange={() => {
                      let newPairwiseCombos = [
                        ...pairwiseCombos[first][second],
                      ];
                      newPairwiseCombos[idx] = !newPairwiseCombos[idx];
                      setPairwiseCombos({
                        ...pairwiseCombos,
                        [first]: {
                          ...pairwiseCombos[first],
                          [second]: newPairwiseCombos,
                        },
                        [second]: {
                          ...pairwiseCombos[second],
                          [first]: newPairwiseCombos,
                        },
                      });
                    }}
                    type="checkbox"
                    checked={pairwiseCombos[first][second][idx]}
                    key={idx}
                    className="css-checkbox peer h-full w-full"
                  ></input>
                  <label
                    onClick={() => {
                      if (
                        //@ts-ignore
                        pairwiseCompletion[first][second]
                      ) {
                        return;
                      }
                      let newPairwiseCombos = [
                        ...pairwiseCombos[first][second],
                      ];
                      newPairwiseCombos[idx] = !newPairwiseCombos[idx];
                      setPairwiseCombos({
                        ...pairwiseCombos,
                        [first]: {
                          ...pairwiseCombos[first],
                          [second]: newPairwiseCombos,
                        },
                        [second]: {
                          ...pairwiseCombos[second],
                          [first]: newPairwiseCombos,
                        },
                      });
                    }}
                    className={`css-label rounded shadow-sm shadow-black/50 outline-offset-1 peer-focus:outline peer-focus:outline-2 peer-focus:outline-black peer-[myPeer]:focus:border-black ${
                      hintsEnabled &&
                      ((x[idx] && !pairwiseCombos[first][second][idx]) ||
                        (!x[idx] && pairwiseCombos[first][second][idx]))
                        ? "ring-2 ring-orange-400"
                        : ""
                    }`}
                  ></label>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
