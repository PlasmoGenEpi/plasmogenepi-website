import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import { useAtom } from "jotai";
import { atomWithStorage, RESET } from "jotai/utils";
import P3AlleleDistribution from "../P3AlleleDistribution/P3AlleleDistribution";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import { useEffect } from "react";

export const P3KCQuestions2Atom = atomWithStorage<{
  [key: number]: null | number;
}>("P3KCQuestions2Atom", {});

export default function PartThreeKnowledgeCheck2() {
  const [questions, setQuestions] = useAtom(P3KCQuestions2Atom);

  // useEffect(() => {
  //   setQuestions(RESET);
  // }, []);

  return (
    <InteractivePrimaryLayout
      leftHeader={"Allele Distribution"}
      leftContent={<P3AlleleDistribution />}
      rightHeader={"Questions"}
      rightContent={
        <div className="fadeIn500 flex flex-col">
          <KnowledgeCheckQuestion
            headerText="Do you think it would be a reasonable strategy to look at the highest number of alleles to estimate the MOI, if you are using microhaplotypes?"
            questionIdx={1}
            hasAnswer={questions[1] === 2}
            callback={(questionIdx, answerIdx) => {
              if (questions[questionIdx] === answerIdx) {
                setQuestions({ ...questions, [questionIdx]: null });
              } else {
                setQuestions({ ...questions, [questionIdx]: answerIdx });
              }
            }}
            classNames={{
              headerText: "mb-4",
              answersContainer: "grid gap-4",
              //   answers: "w-4 md:w-3 lg:w-4",
            }}
            answers={[
              {
                checked: questions[1] === 1,
                correct: false,
                index: 1,
                text: "Yes, this strategy will always give me the correct answer.",
              },
              {
                checked: questions[1] === 2,
                correct: true,
                index: 2,
                text: "Yes, as long as diversity at the loci is high enough and MOI is not too high.",
              },
              {
                checked: questions[1] === 3,
                correct: false,
                index: 3,
                text: "No, there is no relationship between MOI and the highest number of alleles detected.",
              },
              {
                checked: questions[1] === 4,
                correct: false,
                index: 4,
                text: "No, it is hard to count that high.",
              },
            ]}
          />
          <QuestionResponseText
            className="mt-4"
            visible={questions[1] === 2}
            text="Correct. Remember that if MOI is higher than the highest number of possible alleles, the number of alleles detected will never be as high as MOI."
          />
          {questions[1] === 2 && (
            <KnowledgeCheckQuestion
              headerText="Is it possible that the highest number of alleles you detect at a locus could be higher than MOI based on the rules of this exercise (perfect genotyping with no errors)?"
              questionIdx={2}
              hasAnswer={questions[2] === 1}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              style={{
                animationDelay: `1000ms`,
              }}
              triggerEnd
              classNames={{
                container: "fadeIn1000 mt-8",
                headerText: "mb-4",
                answersContainer: "grid gap-4",
                //   answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={[
                {
                  checked: questions[2] === 1,
                  correct: true,
                  index: 1,
                  text: "No",
                },
                {
                  checked: questions[2] === 2,
                  correct: false,
                  index: 2,
                  text: "Yes",
                },
              ]}
            />
          )}
          {questions[2] === 1 && (
            <KnowledgeCheckQuestion
              headerText="Is it possible that the highest number of alleles you detect at a locus could be higher than MOI in a real world setting?"
              questionIdx={3}
              hasAnswer={questions[3] === 2}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              style={{
                animationDelay: `1000ms`,
              }}
              triggerEnd
              classNames={{
                container: "fadeIn1000 mt-8",
                headerText: "mb-4",
                answersContainer: "grid gap-4",
                //   answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={[
                {
                  checked: questions[3] === 1,
                  correct: false,
                  index: 1,
                  text: "No",
                },
                {
                  checked: questions[3] === 2,
                  correct: true,
                  index: 2,
                  text: "Yes",
                },
              ]}
            />
          )}
          <QuestionResponseText
            className="mt-4"
            text={`Correct. Unfortunately, genotyping errors do occur, and it is important to be vigilant for them. These could be caused by mixing up samples, contamination in the laboratory, or errors during PCR or sequencing. We will talk about these situations in more detail in a later module and how bioinformatics and good quality control analysis can help identify these errors.`}
            visible={questions[3] === 2}
          />
          {questions[3] === 2 && (
            <KnowledgeCheckQuestion
              headerText=" Now that you have genotyped the same controls using SNPs and microhaplotypes, which do you think is going to give you a more accurate estimate of MOI on your unknown field samples?"
              questionIdx={4}
              hasAnswer={!!questions[4]}
              callback={(questionIdx, answerIdx) => {
                if (questions[questionIdx] === answerIdx) {
                  setQuestions({ ...questions, [questionIdx]: null });
                } else {
                  setQuestions({ ...questions, [questionIdx]: answerIdx });
                }
              }}
              style={{
                animationDelay: `1000ms`,
              }}
              triggerEnd
              classNames={{
                container: "fadeIn1000 mt-8",
                headerText: "mb-4",
                answersContainer: "grid gap-4",
                //   answers: "w-4 md:w-3 lg:w-4",
              }}
              answers={[
                {
                  checked: questions[4] === 1,
                  correct: true,
                  index: 1,
                  text: "SNPs",
                },
                {
                  checked: questions[4] === 2,
                  correct: true,
                  index: 2,
                  text: "Microhaplotypes",
                },
                {
                  checked: questions[4] === 3,
                  correct: true,
                  index: 3,
                  text: "Both are the same",
                },
              ]}
            />
          )}
          <QuestionResponseText
            className="mt-4"
            text="So, what's the answer? You will find out at the end of the activity!"
            visible={!!questions[4]}
          />
        </div>
      }
    />
  );
  return <div></div>;
}
