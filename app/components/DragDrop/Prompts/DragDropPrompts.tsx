"use client";
import { dragDropPhaseCompletionAtom, phaseAtom } from "@/store";
import { useAtomValue } from "jotai";
import StartingPrompt from "./StartingPrompt";
import Prompt from "../../Shared/Prompt";
import SecondPrompt from "./SecondPrompt";
import VerifyAlternatesPrompt from "./VerifyAlternatesPrompt";

export default function DragDropPrompts() {
  const phase = useAtomValue(phaseAtom);
  const completion = useAtomValue(dragDropPhaseCompletionAtom);

  return (
    <div>
      {phase <= 3 && <StartingPrompt complete={completion[phase]} />}
      {phase === 4 && (
        <Prompt
          complete={completion[phase]}
          noMin
          descriptions={[
            <p key={1} className="mt-2 font-bold">
              Answer the following questions.
            </p>,
          ]}
          header="Knowledge Check"
        />
      )}
      {phase > 4 && phase < 8 && <SecondPrompt complete={completion[phase]} />}
      {phase === 8 && <div>Hello World</div>}

      {phase === 9 && <VerifyAlternatesPrompt complete={completion[phase]} />}
      {(phase === 10 || phase === 11 || phase === 12 || phase === 13) && (
        <Prompt
          complete={completion[phase]}
          noMin
          descriptions={[
            <p key={1} className="mt-2 font-bold">
              Answer the following questions.
            </p>,
          ]}
          header="Knowledge Check"
        />
      )}
    </div>
  );
}
