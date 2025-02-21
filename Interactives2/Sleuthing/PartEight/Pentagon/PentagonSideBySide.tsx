import { useAtom, useAtomValue } from "jotai";
import CompareGenotypes from "../Genotypes/CompareGenotypes";
import {
  partEightCompletionAtom,
  partEightPentagonQuestionsAtom,
  partEightPentagonSelectedEdgesAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { Edge } from "../Pentagon";
import { useMemo } from "react";
import PentagonCorrections from "./PentagonCorrections";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { PentagonId } from "../Pentagon3";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";

export default function PentagonSideBySide() {
  const phase = useAtomValue(phaseAtom);
  const selectedEdges = useAtomValue(partEightPentagonSelectedEdgesAtom);
  const [questions, setQuestions] = useAtom(partEightPentagonQuestionsAtom);
  const completion = useAtomValue(partEightCompletionAtom);

  const activeEdge = useMemo(() => {
    let k: Edge;
    for (k in selectedEdges) {
      if (selectedEdges[k].selected) {
        return k;
      }
    }
  }, [selectedEdges]);

  return (
    <div>
      {phase === 11 && (
        <div>
          <FormHeader text="Questions" />
          <iframe
            src="https://app.sli.do/event/93BJAJH9WX5TZ5nTUoLvqi/embed/polls/82867e06-7921-429b-aa31-cc7bab2050dc"
            className="w-full"
            height="400"
          ></iframe>
        </div>
      )}
      {phase > 11 && phase !== 13 && phase !== 14 && phase < 18 && (
        <div>
          <FormHeader text="Genotype Matches" />

          <div className="mb-auto ">
            <div className="">
              <CompareGenotypes
                key={activeEdge}
                firstPersonId={
                  phase === 12 && selectedEdges.EF.visited
                    ? "E"
                    : activeEdge
                    ? (activeEdge[0] as PentagonId)
                    : null
                }
                secondPersonId={
                  phase === 12 && selectedEdges.EF.visited
                    ? "F"
                    : activeEdge
                    ? (activeEdge[1] as PentagonId)
                    : null
                }
              />
            </div>
          </div>
        </div>
      )}
      {phase === 12 && (
        <QuestionResponseText
          className="mt-8"
          complete={completion[phase]}
          trigger={selectedEdges.EF.visited}
          visible={selectedEdges.EF.visited}
          text="If the two people with travel history traveled together, for
               example if they were part of the same household, then it's
               possible that their infections might be related. In this case, we
               know that they report travel to different geographic areas with
               high transmission and likely acquired their infections there.
               Since there is generally a lot of parasite genetic diversity in
               areas of high transmission, and they're coming from different
               regions, we would not expect their parasites to be related by
               ancestry. This is exactly what we find. Since the MOI of these
               cases are 2 and 3, we'd expect to see some matches by chance;
               what we observe - 4 of 12 loci with a match, or IBS of 0.33
               - is within the range of what we'd expect with
               unrelated infections."
        />
        // <div>
        //   {selectedEdges.EF.visited && (
        //     <p
        //       style={{
        //         animationDelay: "500ms",
        //       }}
        //       className="fadeIn1000 text-sm"
        //     >
        //       If the two people with travel history traveled together, for
        //       example if they were part of the same household, then it&apos;s
        //       possible that their infections might be related. In this case, we
        //       know that they report travel to different geographic areas with
        //       high transmission and likely acquired their infections there.
        //       Since there is generally a lot of parasite genetic diversity in
        //       areas of high transmission, and they&apos;re coming from different
        //       regions, we would not expect their parasites to be related by
        //       ancestry. This is exactly what we find. Since the MOI of these
        //       cases are 2 and 3, we&apos;d expect to see some matches by chance;
        //       what we observe &ndash; 4 of 12 loci with a match, or IBS of 0.33
        //       &ndash; is within the range of what we&apos;d expect with
        //       unrelated infections. Remove the connection by pressing the{" "}
        //       <svg
        //         aria-label="minus"
        //         className="inline-block"
        //         width={"24px"}
        //         viewBox="0 0 12 12"
        //       >
        //         <circle
        //           r={5}
        //           cx={6}
        //           cy={6}
        //           fill="transparent"
        //           className="stroke-black stroke-[0.5px]"
        //         ></circle>
        //         <path
        //           d="M3.5,6 L8.5,6"
        //           className="stroke-black stroke-[0.5px]"
        //         ></path>
        //       </svg>{" "}
        //       icon shown{" "}
        //       {<span className="hidden md:inline-block">to the left</span>}
        //       {<span className="md:hidden">above</span>} before continuing.
        //     </p>
        //   )}
        // </div>
      )}
      {(phase === 13 || phase === 14) && (
        <div>
          <FormHeader text="Questions" />

          <div className="my-8 ">
            <iframe
              src="https://app.sli.do/event/93BJAJH9WX5TZ5nTUoLvqi/embed/polls/acb46f3a-475e-43a6-bc65-858953e98052"
              className="w-full"
              height="400"
            ></iframe>
          </div>
          <QuestionResponseText
            complete={completion[phase] ?? false}
            trigger={phase === 14}
            visible={phase === 14}
            text="There may be several types of information that you are
                interested in, but date of the cases is an important one. Your
                team shares a clean, well curated epidemiologic database with
                you with data for all five cases. It turns out that cases E and
                F were both detected within a week of each other, and that cases
                G, H, and I all presented with malaria between two and six weeks
                after."
          />
          {/* {phase === 14 && (
            <div className="fadeIn500 bg-primaryBlue/20 p-4 text-sm lg:p-8">
              <p>
                There may be several types of information that you are
                interested in, but date of the cases is an important one. Your
                team shares a clean, well curated epidemiologic database with
                you with data for all five cases. It turns out that cases E and
                F were both detected within a week of each other, and that cases
                G, H, and I all presented with malaria between two and six weeks
                after.
              </p>
            </div>
          )} */}
        </div>
      )}
      {phase >= 18 && phase < 20 && <PentagonCorrections />}
      {phase === 20 && (
        <div>
          <FormHeader text="Questions" />
          <KnowledgeCheckQuestion
            classNames={{
              container: "fadeIn500",
              answersContainer: "grid gap-4 mt-4",
            }}
            answers={[
              {
                checked: questions[1][1],
                correct: true,
                index: 0,
                text: "Imported cases",
              },
              {
                checked: questions[1][2],
                correct: true,
                index: 1,
                text: "Introduced cases",
              },
              {
                checked: questions[1][3],
                correct: false,
                index: 2,
                text: "Locally transmitted cases",
              },
            ]}
            callback={(questionIdx, answerIdx) => {
              setQuestions({
                ...questions,
                [questionIdx]: {
                  ...questions[1],
                  [answerIdx + 1]: !questions[1][answerIdx + 1],
                },
              });
            }}
            hasAnswer={questions[1][1] && questions[1][2] && !questions[1][3]}
            headerText="Based on your evaluation, what if any types of cases do you think are present in the village? (Choose all that apply)"
            questionIdx={1}
          />
          <QuestionResponseText
            className="my-8"
            trigger={questions[1][1] && questions[1][2] && !questions[1][3]}
            complete={completion[phase] ?? false}
            visible={questions[1][1] && questions[1][2] && !questions[1][3]}
            text="Correct! Cases E and F are very likely imported cases, based on
              the fact that there have not been cases reported in this village
              before those two, and their recent travel history to high
              transmission areas. Cases I and G are likely to be introduced
              cases stemming from Case E, and Case H is likely an introduced
              case from Case F."
          />
          {/* <div
            className={`${questions[1][1] && questions[1][2] && !questions[1][3] ? "" : "hidden"} my-8 bg-primaryBlue/10 p-4 lg:p-8`}
          >
            <p className={` text-sm`}>
              Correct! Cases E and F are very likely imported cases, based on
              the fact that there have not been cases reported in this village
              before those two, and their recent travel history to high
              transmission areas. Cases I and G are likely to be introduced
              cases stemming from Case E, and Case H is likely an introduced
              case from Case F.
            </p>
          </div> */}
        </div>
      )}
      {phase === 21 && (
        <div>
          <FormHeader text="Questions" />
          <KnowledgeCheckQuestion
            answers={[
              {
                checked: questions[2] === 0,
                correct: false,
                index: 0,
                text: "You have definitively proven that there is absolutely no malaria transmission occurring in the village.",
              },
              {
                checked: questions[2] === 1,
                correct: false,
                index: 1,
                text: "You can’t really say one way or the other whether malaria transmission is occurring in the village, so you choose to say the results were not clear.",
              },
              {
                checked: questions[2] === 2,
                correct: true,
                index: 2,
                text: "You can say with a high degree of confidence that you have so far seen evidence of limited local transmission – only a single generation of transmission from imported cases leading to three introduced cases. You do not yet see any evidence of ongoing local transmission beyond this, consistent with elimination status.",
              },
              {
                checked: questions[2] === 3,
                correct: false,
                index: 3,
                text: "You can say with a reasonable degree of confidence that these five cases are not related by transmission and are not suspicious of an outbreak occurring at the village.",
              },
              {
                checked: questions[2] === 4,
                correct: false,
                index: 4,
                text: "You can’t be bothered with interpreting results for other people and just show them the genotyping data, letting them figure it out for themselves.",
              },
            ]}
            callback={(questionIdx, answerIdx) => {
              if (questions[2] === answerIdx) {
                setQuestions({ ...questions, 2: null });
              } else {
                setQuestions({ ...questions, 2: answerIdx });
              }
            }}
            hasAnswer={questions[2] === 2}
            headerText="Which of the following would be an accurate way of communicating your findings to stakeholders such as the village community, local government, and malaria control program?"
            questionIdx={2}
            classNames={{
              container: "fadeIn500 mt-8",
              answersContainer: "grid gap-4 mt-8",
            }}
          />
        </div>
      )}
      {phase === 22 && (
        <div>
          <FormHeader text="Questions" />

          <KnowledgeCheckQuestion
            answers={[
              {
                checked: questions[3] === 0,
                correct: false,
                index: 0,
                text: "Reducing interventions in the administrative area where this village is located, since there is no transmission occurring here and resources could be better spent elsewhere.",
              },
              {
                checked: questions[3] === 1,
                correct: true,
                index: 1,
                text: "Keeping interventions at the level they are - there was limited transmission from imported to introduced cases but it did not appear to continue beyond that. However, if additional cases in the village or nearby are detected, your team should be contacted immediately to continue the investigation. Meanwhile, you will keep all of the genotyping data well organized in your ongoing database if more cases are detected.",
              },
              {
                checked: questions[3] === 2,
                correct: false,
                index: 2,
                text: "Investing in more intensive interventions, since you are concerned that a large outbreak could be imminent.",
              },
            ]}
            callback={(questionIdx, answerIdx) => {
              if (questions[3] === answerIdx) {
                setQuestions({ ...questions, 3: null });
              } else {
                setQuestions({ ...questions, 3: answerIdx });
              }
            }}
            hasAnswer={questions[3] === 1}
            headerText="Your program director asks you what should be done programmatically based on these detailed results stemming from your thorough investigation. You suggest:"
            questionIdx={3}
            classNames={{
              container: "fadeIn500 mt-8",
              answersContainer: "grid gap-4 mt-8",
            }}
          />
          <QuestionResponseText
            complete={completion[phase] ?? false}
            trigger={questions[3] === 1}
            className="mt-8"
            visible={questions[3] === 1}
            text=" You have shown that there is some transmission occurring in the
              village (so option A is incorrect) but it does seem to be limited,
              at least for now. Therefore, it would be reasonable to keep
              interventions where they are while continuing to be vigilant and
              investing in rigorous epidemiologic and genomic surveillance.
              Additional resources spent on interventions might reduce the
              probability of introduced cases, but since transmission does not
              appear to be sustained at this time, those resources might be
              better spent elsewhere."
          />
          {/* <div
            className={`${questions[3] === 1 ? "fadeIn500" : "hidden"} my-8 bg-primaryBlue/10 p-4 text-sm lg:p-8`}
          >
            <p className="text-sm">
              You have shown that there is some transmission occurring in the
              village (so option A is incorrect) but it does seem to be limited,
              at least for now. Therefore, it would be reasonable to keep
              interventions where they are while continuing to be vigilant and
              investing in rigorous epidemiologic and genomic surveillance.
              Additional resources spent on interventions might reduce the
              probability of introduced cases, but since transmission does not
              appear to be sustained at this time, those resources might be
              better spent elsewhere.
            </p>
          </div> */}
        </div>
      )}
    </div>
  );
}
