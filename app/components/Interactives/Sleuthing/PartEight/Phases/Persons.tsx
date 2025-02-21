import SquareMicrohaplotype from "@/app/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import Person from "../Person";
import GenotypeComposition from "../Genotypes/GenotypeComposition";
import InputMOI from "../Genotypes/InputMOI";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  partEightMOIInputsAtom,
  partEightQuestionsAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";

export function allPositiveValues(
  MOIInputs: { [key: number | string]: boolean },
  scenarioTwo?: boolean,
) {
  if (scenarioTwo) {
    for (let k in MOIInputs) {
      if (!MOIInputs[k] && ["E", "F", "G", "H", "I"].includes(k)) {
        return false;
      }
    }
    return true;
  } else {
    for (let k in MOIInputs) {
      if (!MOIInputs[k] && ["A", "B", "C", "D"].includes(k)) {
        return false;
      }
    }
    return true;
  }
}

export default function Persons() {
  const MOIInputs = useAtomValue(partEightMOIInputsAtom);
  const phase = useAtomValue(phase2Atom);
  const [questions, setQuestions] = useAtom(partEightQuestionsAtom);

  return (
    <InteractivePrimaryLayout
      leftHeader={"Infections"}
      rightHeader={phase >= 4 && allPositiveValues(MOIInputs) && "Questions"}
      leftContent={
        <div className="flex flex-col gap-8">
          <div className=" flex">
            <div className="grid w-16">
              <Person id={"A"} />
            </div>
            {phase >= 3 && (
              <div className={`fadeIn500 flex grow gap-4`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["A"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 4 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["A"].MOI}
                    id={"A"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex">
            <div className="grid w-16">
              <Person id={"B"} />
            </div>
            {phase >= 3 && (
              <div className={`fadeIn500 flex grow gap-4`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["B"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 4 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["B"].MOI}
                    id={"B"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex">
            <div className="grid w-16">
              <Person id={"C"} />
            </div>
            {phase >= 3 && (
              <div className={`fadeIn500 flex grow gap-4`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["C"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 4 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["C"].MOI}
                    id={"C"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex">
            <div className="grid w-16">
              <Person id={"D"} />
            </div>
            {phase >= 3 && (
              <div className={`fadeIn500 flex grow gap-4`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["D"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 4 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["D"].MOI}
                    id={"D"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      }
      rightContent={
        phase >= 4 &&
        allPositiveValues(MOIInputs) && (
          <div className="fadeIn500">
            <KnowledgeCheckQuestion
              answers={[
                {
                  checked: questions[1] === 0,
                  correct: false,
                  index: 0,
                  text: "Yes, these data are sufficient to make final conclusions that all transmission originated in the home villages.",
                },
                {
                  checked: questions[1] === 1,
                  correct: false,
                  index: 1,
                  text: "Yes, these data are sufficient to make final conclusions that all transmission occurred in the school.",
                },
                {
                  checked: questions[1] === 2,
                  correct: true,
                  index: 2,
                  text: "Yes, these data are suggestive that at least some infections may have originated in the home villages.",
                },
                {
                  checked: questions[1] === 3,
                  correct: false,
                  index: 3,
                  text: "No, the MOI values do not provide any useful information on the origin of infections.",
                },
              ]}
              callback={(questionIdx, answerIndex) => {
                // if (questions[1] === answerIndex) {
                //   setQuestions({...questions, 1: null})
                // }
                setQuestions({
                  ...questions,
                  1: answerIndex === questions[1] ? null : answerIndex,
                });
              }}
              hasAnswer={questions[1] === 2}
              headerText={`Do these MOI values give you any clues as to whether transmission likely occurred at the school or from the students' home villages? `}
              questionIdx={1}
              classNames={{
                container: "",
                answersContainer: "mt-4 grid gap-4 text-pretty",
              }}
            />
            <QuestionResponseText
              className="mt-4"
              visible={questions[1] === 2}
              text={`Values for MOI do not provide conclusive information on where transmission occurred. However, some of the higher values here are suspicious for students being infected in a high transmission area, potentially suggestive that those cases may have occurred at home and not in the school. This is because the school is in a very low transmission area in  Eliminati Province and so you do not expect a lot of superinfection, although as you know cotransmission even in a low transmission area can still result in a polyclonal infection from a single mosquito bite.`}
            />
          </div>
        )
      }
    />
  );

  return (
    <StandardLayout>
      <div className="fadeIn500">
        <h2 className="text-center text-xl font-bold md:text-left">
          Infections
        </h2>
        <div className="flex flex-col gap-8">
          <div className="mt-8 flex">
            <div className="grid w-20 place-items-center">
              <Person id={"A"} />
            </div>
            {phase >= 3 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["A"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 4 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["A"].MOI}
                    id={"A"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex">
            <div className="grid w-20 place-items-center">
              <Person id={"B"} />
            </div>
            {phase >= 3 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["B"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 4 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["B"].MOI}
                    id={"B"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex">
            <div className="grid w-20 place-items-center">
              <Person id={"C"} />
            </div>
            {phase >= 3 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["C"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 4 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["C"].MOI}
                    id={"C"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex">
            <div className="grid w-20 place-items-center">
              <Person id={"D"} />
            </div>
            {phase >= 3 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["D"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 4 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["D"].MOI}
                    id={"D"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {phase >= 4 && allPositiveValues(MOIInputs) && (
        <div className="fadeIn500">
          <h2 className="text-center text-xl font-bold md:text-left">
            Questions
          </h2>
          {/* <KnowledgeCheckQuestion
            answers={[
              {
                checked: questions[1] === 0,
                correct: false,
                index: 0,
                text: "A",
              },
              {
                checked: questions[1] === 1,
                correct: false,
                index: 1,
                text: "B",
              },
              {
                checked: questions[1] === 2,
                correct: false,
                index: 2,
                text: "C",
              },
              {
                checked: questions[1] === 3,
                correct: true,
                index: 3,
                text: "D",
              },
            ]}
            callback={(questionIdx, answerIndex) => {
              // if (questions[1] === answerIndex) {
              //   setQuestions({...questions, 1: null})
              // }
              setQuestions({
                ...questions,
                1: answerIndex === questions[1] ? null : answerIndex,
              });
            }}
            hasAnswer={questions[1] === 3}
            headerText={`Do these MOI values give you any clues as to whether transmission likely occurred at the school or from the students' home villages? `}
            questionIdx={1}
            classNames={{
              container: "mt-8",
              answersContainer: "mt-4 grid gap-4",
            }}
          /> */}
          <iframe
            src="https://app.sli.do/event/93BJAJH9WX5TZ5nTUoLvqi/embed/polls/14789bb1-f924-444d-a6bc-20591d6faa6c"
            className="fadeIn500 h-[500px] w-full [&>*]:overflow-hidden"
          ></iframe>
          {questions[1] === 3 && (
            <p className="fadeIn500 mt-8 bg-primaryBlue/20 p-4 text-sm md:p-8">
              Values for MOI do not provide conclusive information on where
              transmission occurred. However, some of the higher values here are
              suspicious for students being infected in a high transmission
              area, potentially suggestive that those cases may have occurred at
              home and not in the school. This is because the school is in a
              very low transmission area in your pre-elimination region and so
              you do not expect a lot of superinfection, although as you know
              cotransmission even in a low transmission area can still result in
              a polyclonal infection from a single mosquito bite.
            </p>
          )}
        </div>
      )}
    </StandardLayout>
  );
}
