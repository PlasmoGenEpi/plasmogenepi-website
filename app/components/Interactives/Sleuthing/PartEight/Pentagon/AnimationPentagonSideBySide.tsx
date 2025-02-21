import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import {
  partEightCompletionAtom,
  partEightPentagonQuestionsAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import EGComparison from "./AnimationComponents/AnimationSideBySideComponents/EGComparison";
import EIComparison from "./AnimationComponents/AnimationSideBySideComponents/EIComparison";
import GIComparison from "./AnimationComponents/AnimationSideBySideComponents/GIComparison";
import FHComparison from "./AnimationComponents/AnimationSideBySideComponents/FHComparison";
import PentagonTable from "./PentagonTable/PentagonTable";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";

export default function AnimationPentagonSideBySide() {
  const [questions, setQuestions] = useAtom(partEightPentagonQuestionsAtom);
  const phase = useAtomValue(phase2Atom);
  const completion = useAtomValue(partEightCompletionAtom);

  console.log(questions);

  return (
    <div>
      {phase >= 24 && phase <= 27 && <EGComparison />}
      {phase === 28 && <EIComparison />}
      {phase === 29 && <GIComparison />}
      {phase === 29.5 && (
        <div>
          {/* <FormHeader text="Reassessing" /> */}
          <KnowledgeCheckQuestion
            questionIdx={4}
            classNames={{
              answersContainer: "grid mt-4 gap-2",
            }}
            callback={(questionIdx, answerIdx) => {
              if (questions[questionIdx] === answerIdx) {
                setQuestions({ ...questions, [questionIdx]: null });
              } else {
                setQuestions({ ...questions, [questionIdx]: answerIdx });
              }
            }}
            hasAnswer={questions[4] === 1}
            headerText="Previously you said that the transmissions very likely originated from imported cases and to keep interventions at the current levels while remaining diligent. Does that recommendation change based on this transmission network?"
            answers={[
              {
                checked: questions[4] === 0,
                correct: false,
                index: 0,
                text: "It would not have changed my recommendation.",
              },
              {
                checked: questions[4] === 1,
                correct: true,
                index: 1,
                text: "I would have been more concerned about sustained local transmission and recommended intensifying interventions aimed at reducing transmission in the village.",
              },
              {
                checked: questions[4] === 2,
                correct: false,
                index: 2,
                text: "I would have been less concerned and recommended reducing the intensity of interventions.",
              },
            ]}
          />
          <QuestionResponseText
            className="mt-8"
            visible={questions[4] === 1}
            trigger={questions[4] === 1}
            complete={completion[phase] ?? false}
            text="If transmission could have occurred between cases G and I, then
                this would have represented at least two generations of
                transmission - E to G and then G to I - consistent with ongoing
                local transmission and no longer consistent with elimination
                status. To achieve elimination, which is your goal for this
                area, interventions would likely need to be improved by better
                targeting or general intensification."
          />
          {/* {questions[4] === 1 && (
            <div className="fadeIn500 mt-8 bg-primaryBlue/10 p-4 lg:p-8">
              <p className="text-sm">
                If transmission could have occurred between cases G and I, then
                this would have represented at least two generations of
                transmission - E to G and then G to I - consistent with ongoing
                local transmission and no longer consistent with elimination
                status. To achieve elimination, which is your goal for this
                area, interventions would likely need to be improved by better
                targeting or general intensification.
              </p>
            </div>
          )} */}
        </div>
      )}
      {phase >= 30 && phase < 34 && <FHComparison />}
      {(phase === 34 || phase === 35) && <PentagonTable />}
      {phase >= 36 && (
        <div>
          {phase === 36 && (
            <div>
              <KnowledgeCheckQuestion
                answers={Array(13)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      correct: idx === 8,
                      checked: idx === questions[5],
                      index: idx,
                      text: (idx + 1).toString(),
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                classNames={{
                  answersContainer: "grid grid-cols-4 gap-4 my-8",
                }}
                hasAnswer={questions[5] === 8}
                questionIdx={5}
                headerText="How many different parasite clones are there across all the cases? Hint: Remember that the colored balls represent the genotypes of parasites present within these five cases, so different looking balls will be distinct clones with different genotypes."
              />
              <QuestionResponseText
                complete={completion[phase] ?? false}
                trigger={questions[5] === 8}
                visible={questions[5] === 8}
                text="That’s right - every parasite in these cases is genetically
                  distinct, although some are related to each other. There are
                  nine in total."
              />
              {/* <div
                className={
                  questions[5] === 8
                    ? "fadeIn500 bg-primaryBlue/10 p-4 lg:p-8"
                    : "invisible"
                }
              >
                <p className="text-sm">
                  That’s right - every parasite in these cases is genetically
                  distinct, although some are related to each other. There are
                  nine in total.
                </p>
              </div> */}
            </div>
          )}
          {phase === 37 && (
            <div>
              <KnowledgeCheckQuestion
                answers={Array(8)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      correct: idx === 4,
                      checked: questions[6] === idx,
                      index: idx,
                      text: (idx + 1).toString(),
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                classNames={{
                  answersContainer: "grid grid-cols-4 gap-4 my-8",
                }}
                hasAnswer={questions[6] === 4}
                questionIdx={6}
                headerText="How many parasite clones, or lineages, were initially introduced into the village by the two cases who had traveled?"
              />
              <QuestionResponseText
                complete={completion[phase] ?? false}
                trigger={questions[6] === 4}
                visible={questions[6] === 4}
                text="Great - five genetically distinct lineages were introduced
                  into the village, two by case E and three by case F. The
                  parasites in cases G, H, and I are all related to these five
                  lineages."
              />
              {/* <div
                className={
                  questions[6] === 4
                    ? "fadeIn500 bg-primaryBlue/10 p-4 lg:p-8"
                    : "invisible"
                }
              >
                <p className="text-sm">
                  Great - five genetically distinct lineages were introduced
                  into the village, two by case E and three by case F. The
                  parasites in cases G, H, and I are all related to these five
                  lineages.
                </p>
              </div> */}
            </div>
          )}
          {phase === 38 && (
            <div>
              <KnowledgeCheckQuestion
                answers={[
                  {
                    correct: false,
                    checked: questions[7] === 0,
                    index: 0,
                    text: "Mutation in the human cases",
                  },
                  {
                    correct: false,
                    checked: questions[7] === 1,
                    index: 1,
                    text: "Mutation in the mosquito",
                  },
                  {
                    correct: false,
                    checked: questions[7] === 2,
                    index: 2,
                    text: "Sexual (meiotic) recombination in the human cases",
                  },
                  {
                    correct: true,
                    checked: questions[7] === 3,
                    index: 3,
                    text: "Sexual (meiotic) recombination in the mosquito",
                  },
                  {
                    correct: false,
                    checked: questions[7] === 4,
                    index: 4,
                    text: "Superinfection",
                  },
                  {
                    correct: false,
                    checked: questions[7] === 5,
                    index: 5,
                    text: "Super-duper-infection",
                  },
                ]}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                classNames={{
                  answersContainer: "grid grid-cols-2 gap-4 my-8",
                }}
                hasAnswer={questions[7] === 3}
                questionIdx={7}
                headerText="What process resulted in the introduced cases (G, H, and I) being infected with related but genetically distinct parasites from the imported cases (E and F)?"
              />
              <QuestionResponseText
                trigger={questions[7] === 3}
                text="Good. Sexual recombination, which occurs exclusively in the
                  mosquito, allows the genetic material of multiple distinct
                  parasites to mix if the mosquito picks up more than one
                  genetically distinct gametocyte when feeding. Some level of
                  parasite mutation does occur, but generally not enough to
                  result in parasites becoming meaningfully different over one
                  or a few transmission cycles. Sexual recombination of malaria
                  parasites occurs only in the mosquito. Superinfection, while
                  indirectly facilitating recombination by producing polyclonal
                  infections, does not directly result in distinct but related
                  parasites."
                complete={completion[phase] ?? false}
                visible={questions[7] === 3}
              />
              {/* <div
                className={
                  questions[7] === 3
                    ? "fadeIn500 bg-primaryBlue/10 p-4 lg:p-8"
                    : "invisible"
                }
              >
                {" "}
                <p className="text-sm">
                  Good. Sexual recombination, which occurs exclusively in the
                  mosquito, allows the genetic material of multiple distinct
                  parasites to mix if the mosquito picks up more than one
                  genetically distinct gametocyte when feeding. Some level of
                  parasite mutation does occur, but generally not enough to
                  result in parasites becoming meaningfully different over one
                  or a few transmission cycles. Sexual recombination of malaria
                  parasites occurs only in the mosquito. Superinfection, while
                  indirectly facilitating recombination by producing polyclonal
                  infections, does not directly result in distinct but related
                  parasites.
                </p>
              </div> */}
            </div>
          )}
          {phase === 39 && (
            <div>
              <KnowledgeCheckQuestion
                answers={Array(8)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      correct: idx === 1,
                      checked: questions[8] === idx,
                      index: idx,
                      text: (idx + 1).toString(),
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                classNames={{
                  answersContainer: "grid grid-cols-4 gap-4 my-8",
                }}
                hasAnswer={questions[8] === 1}
                questionIdx={8}
                headerText="Here’s a challenging thought exercise for you. If the MOI of both imported cases (E and F) was one and both infections unique, and the same transmission between people occurred as in this scenario, how many different parasite genotypes would you expect to see in this village?"
              />
              <QuestionResponseText
                complete={completion[phase] ?? false}
                trigger={questions[8] === 1}
                visible={questions[8] === 1}
                text="If case E and F were only infected with one parasite each,
                  there would have been no opportunity for recombination between
                  distinct clones. In this situation, introduced cases I and G
                  would have been infected with a clone identical to the one
                  imported by case E, and case H would have been infected with a
                  clone identical to the one imported by case F. Therefore, only
                  two distinct genotypes would have circulated. It is
                  interesting to note that in this alternate scenario there
                  would have been a lot less population diversity in the
                  circulating parasites despite the exact same transmission
                  pattern. Importantly, the connections between cases would have
                  still been apparent from your genotyping, although the
                  relationship between cases E, I, and G would have been harder
                  to estimate from the genetic data alone. Fortunately, you
                  would have had data on travel and time to help as well."
              />
              {/* <div
                className={
                  questions[8] === 1
                    ? "fadeIn500 bg-primaryBlue/10 p-4 lg:p-8"
                    : "invisible"
                }
              >
                {" "}
                <p className="text-sm">
                  If case E and F were only infected with one parasite each,
                  there would have been no opportunity for recombination between
                  distinct clones. In this situation, introduced cases I and G
                  would have been infected with a clone identical to the one
                  imported by case E, and case H would have been infected with a
                  clone identical to the one imported by case F. Therefore, only
                  two distinct genotypes would have circulated. It is
                  interesting to note that in this alternate scenario there
                  would have been a lot less population diversity in the
                  circulating parasites despite the exact same transmission
                  pattern. Importantly, the connections between cases would have
                  still been apparent from your genotyping, although the
                  relationship between cases E, I, and G would have been harder
                  to estimate from the genetic data alone. Fortunately, you
                  would have had data on travel and time to help as well.
                </p>
              </div> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
