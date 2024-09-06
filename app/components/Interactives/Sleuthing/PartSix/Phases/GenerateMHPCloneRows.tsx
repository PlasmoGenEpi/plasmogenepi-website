import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import P6CloneRows from "../CloneRows/P6MHPCloneRows";
import P6MHPCloneRows from "../CloneRows/P6MHPCloneRows";
import { useEffect } from "react";
import {
  partSixCloneRowsMHPsAtom,
  partSixCompletionAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage, RESET } from "jotai/utils";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";
import KnowledgeCheckQuestion from "@/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import QuestionResponseText from "@/components/Interactives/Shared/misc/QuestionResponseText";

export const SNPMHPInitialQuestionAtom = atomWithStorage<null | number>(
  "SNPMHPInitialQuestionAtom",
  null,
);

export default function GenerateMHPCloneRows() {
  const phase = useAtomValue(phaseAtom);
  const [question, setQuestion] = useAtom(SNPMHPInitialQuestionAtom);
  const completion = useAtomValue(partSixCompletionAtom);

  // useEffect(() => {
  //   setCloneRowsMHPs(RESET);
  //   // setCompletion({ ...completion, 22: false });
  // }, []);

  return (
    <StandardLayout>
      <div className="">
        <FormHeader text={`Lab Clones with Microhaplotypes`} />

        <P6MHPCloneRows />
      </div>
      {phase === 22.5 && (
        <div className="fadeIn500">
          <FormHeader text="Questions" />
          <KnowledgeCheckQuestion
            callback={(questionIdx, answerIdx) => {
              if (answerIdx === question) {
                setQuestion(null);
              } else {
                setQuestion(answerIdx);
              }
            }}
            hasAnswer={question === 0}
            questionIdx={1}
            classNames={{
              answersContainer: "grid gap-4 mt-4 mb-8",
            }}
            answers={[
              {
                checked: question === 0,
                correct: true,
                index: 0,
                text: "IBD will be the same for all of the comparisons as before when you used SNPs. But, IBS will be on average lower, since there is a 1/8 chance of matching at each loci instead of ½ when you used SNPs.",
              },
              {
                checked: question === 1,
                correct: false,
                index: 1,
                text: "Both IBD and IBD will be lower than when you used SNPs.",
              },
              {
                checked: question === 2,
                correct: false,
                index: 2,
                text: "Both IBD and IBS will be higher than when you used SNPs.",
              },
              {
                checked: question === 3,
                correct: false,
                index: 3,
                text: "Both IBD and IBS will remain the same as when you used SNPs.",
              },
            ]}
            headerText="What do you think you will see?"
          />
          <QuestionResponseText
            trigger={question === 0}
            complete={completion[phase] || false}
            visible={question === 0}
            text="IBD will be the same for all of the comparisons as before. But, IBS will be on average lower, since there is a 1/8 chance of matching at each loci instead of 1/2."
          />
        </div>
      )}
    </StandardLayout>
  );
}
