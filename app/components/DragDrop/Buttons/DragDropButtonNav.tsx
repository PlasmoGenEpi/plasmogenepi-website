"use client";
import PrimaryButton from "../../Shared/PrimaryButton";
import { readsValid } from "@/helpers";
import {
  dragDropPhaseCompletionAtom,
  dragDropQuestionsAtom,
  phaseAtom,
  reads2Atom,
  readsAtom,
} from "@/store";
import { useAtom, useAtomValue } from "jotai";
import { RESET } from "jotai/utils";
import { useMemo } from "react";

export default function DragDropButtonNav() {
  const [phase, setPhase] = useAtom(phaseAtom);
  const [reads, setReads] = useAtom(readsAtom);
  const [reads2, setReads2] = useAtom(reads2Atom);
  const [dragDropQuestions, setDragDropQuestions] = useAtom(
    dragDropQuestionsAtom,
  );
  const [completion, setCompletion] = useAtom(dragDropPhaseCompletionAtom);

  const verifyAlternates = useMemo(() => {
    let x = reads2.filter((read, idx) => {
      let z = read.specials2.filter((val, idx) => {
        if (
          (read.specials[idx] === "red" || read.specials[idx] === "orange") &&
          read.id !== 7
        ) {
          return !val;
        } else {
          return val;
        }
      });
      return z.length;
    });
    // console.log(x);
    return x.length;
  }, [reads2]);

  let nextDisabled = () => {
    if (phase < 3) {
      return false;
    }
    if (phase === 3) {
      return !readsValid(reads, 1);
    }
    if (phase === 4) {
      return dragDropQuestions[1][2] !== 2;
    }
    if (phase === 5) {
      return false;
    }
    if (phase === 6) {
      return !readsValid(reads2.slice(0, 10), 2);
    }
    if (phase === 7) {
      return !readsValid(reads2, 2);
    }
    if (phase === 8) {
      return false;
    }
    if (phase === 9) {
      return !!verifyAlternates;
    }
    if (phase === 10) {
      return dragDropQuestions[2][1] !== 2;
    }
    if (phase === 11) {
      return dragDropQuestions[2][2] !== 1;
    }
    if (phase === 12) {
      return dragDropQuestions[4][1] !== 4;
    }
    return true;
  };

  return (
    <div className="mb-8 flex justify-between">
      {phase === 1 ? (
        <PrimaryButton
          text="Reset"
          callback={() => {
            setReads2(RESET);
            setReads(RESET);
            setCompletion(RESET);
            setDragDropQuestions(RESET);
          }}
          disabled={!completion[1]}
          className="bg-orange-400"
        />
      ) : (
        <PrimaryButton
          disabled={phase === 1}
          text={"Back"}
          callback={() => {
            setPhase(phase - 1);
          }}
          className=""
        />
      )}
      <PrimaryButton
        // disabled={phase === 3}
        disabled={nextDisabled()}
        text={
          phase === 1 || phase === 2 || phase === 5 || phase === 6
            ? "Run"
            : "Next"
        }
        callback={() => {
          setCompletion({
            ...completion,
            [phase]: true,
          });
          setPhase(phase + 1);
          if (phase === 3) {
            return;
          }
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className=""
      />
    </div>
  );
}
