import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../CloneRows/P6MHPCloneRows";
import CloneElement from "@/app/components/Interactives/Shared/CloneRow/CloneElement";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  partSixCompletionAtom,
  partSixFirstQuestionAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import P6CloneRows from "../CloneRows/P6CloneRows";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import { useEffect } from "react";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";

export default function GenerateSNPCloneRows({
  forwards,
}: {
  forwards?: boolean;
}) {
  const completion = useAtomValue(partSixCompletionAtom);
  const phase = useAtomValue(phaseAtom);
  const [question, setQuestion] = useAtom(partSixFirstQuestionAtom);

  return (
    <StandardLayout>
      <div className="">
        <FormHeader text={`Lab Clones with SNPs`} />
        <P6CloneRows forwards={forwards} />
      </div>
      <div className={`${phase === 2 ? "fadeIn500" : "hidden"}`}>
        <FormHeader text={`Questions`} />
        <KnowledgeCheckQuestion
          callback={(questionIdx, answerIdx) => {
            if (question === answerIdx + 1) {
              setQuestion(null);
            } else {
              setQuestion(answerIdx + 1);
            }
          }}
          hasAnswer={question === 2}
          classNames={{
            answersContainer: "flex flex-col gap-4 mt-4",
          }}
          headerText="When comparing two lab clones, you think that:"
          questionIdx={1}
          answers={[
            {
              text: "The clones are completely unrelated by ancestry, so probably 0/12 (0%) of the SNPs between any two will match. IBS will be 0.",
              correct: false,
              checked: question === 1,
              index: 0,
            },
            {
              text: "Even though the clones are unrelated, SNPs can still match by chance. Since there are two perfectly balanced alleles at every locus, the chance of matching will be the same as flipping a coin twice and getting the same result. You would expect around 6/12 (50%) of the SNPs to match. IBS will probably be very close to 0.5, but may vary.",
              correct: true,
              checked: question === 2,
              index: 1,
            },
            {
              text: "Since the simulation is random for the 3 clones, there is no way to predict what IBS will be. It is just as likely to be anywhere from 0 to 1.",
              correct: false,
              checked: question === 3,
              index: 2,
            },
          ]}
        />
        <QuestionResponseText
          className="mt-8"
          complete={completion[phase] || false}
          trigger={question === 2}
          visible={question === 2}
          text={` The simulation is random, but you still have some expectation of
            what is going to happen. When you compare two clones at a given
            locus, they have 50% chance of sharing an allele since there are two
            equally likely options. Although it is possible that none of the
            SNPs will match (A), the probability of that happening is very low
            (around 0.02%).`}
        />
        {/* <div
          className={
            question !== 2
              ? "hidden"
              : "fadeIn500 mt-8 bg-primaryBlue/10 px-8 py-8 pt-4"
          }
        >
          <span className="font-bold">Correct!</span>
          <p className="mt-2 text-sm">
            The simulation is random, but you still have some expectation of
            what is going to happen. When you compare two clones at a given
            locus, they have 50% chance of sharing an allele since there are two
            equally likely options. Although it is possible that none of the
            SNPs will match (A), the probability of that happening is very low
            (around 0.02%).
          </p>
        </div> */}
      </div>
    </StandardLayout>
  );
}
