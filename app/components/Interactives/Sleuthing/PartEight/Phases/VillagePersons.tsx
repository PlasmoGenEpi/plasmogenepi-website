import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import Person from "../Person";
import {
  partEightMOIInputsAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import Bus from "../Bus";
import InputMOI from "../Genotypes/InputMOI";
import GenotypeComposition from "../Genotypes/GenotypeComposition";
import { fixedData } from "@/data/Interactives/fixedData";
import { allPositiveValues } from "./Persons";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import { atomWithStorage } from "jotai/utils";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";

export const p8addedQuestionAtom = atomWithStorage<number[]>(
  "p8addedQuestionAtom",
  [],
);

export default function VillagePersons() {
  const phase = useAtomValue(phase2Atom);
  const [MOIInputs, setMOIInputs] = useAtom(partEightMOIInputsAtom);
  const [question, setQuestion] = useAtom(p8addedQuestionAtom);

  return (
    <InteractivePrimaryLayout
      leftHeader={"Infection Genotypes"}
      leftContent={
        <div className="grid max-w-[500px] gap-y-8">
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"E"} />
              <div className="absolute right-0 top-0 w-1/4">
                <Bus />
              </div>
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow gap-4`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["E"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 10 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["E"].MOI}
                    id={"E"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"F"} />
              <div className="absolute right-0 top-0 w-1/4">
                <Bus />
              </div>
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow gap-4`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["F"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 10 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["F"].MOI}
                    id={"F"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"G"} />
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow gap-4`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["G"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 10 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["G"].MOI}
                    id={"G"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"H"} />
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow gap-4`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["H"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 10 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["H"].MOI}
                    id={"H"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"I"} />
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow gap-4`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["I"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 10 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["I"].MOI}
                    id={"I"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      }
      rightHeader={!Object.values(MOIInputs).includes(false) ? "Questions" : ""}
      rightContent={
        !Object.values(MOIInputs).includes(false) && (
          <div className="fadeIn500">
            <KnowledgeCheckQuestion
              headerText="Take a look at the two cases with travel history that are potentially imported cases. Would you expect their malaria parasite infections to be related to each other by descent? Why or why not? Choose all that apply."
              answers={[
                {
                  correct: false,
                  checked: question.includes(0),
                  text: "Yes, because they both travelled so their parasites will look like imported parasites, which are all the same.",
                  index: 0,
                },
                {
                  correct: false,
                  checked: question.includes(1),
                  text: "Yes, because they both have polyclonal infections, the infections are likely to be related to each other.",
                  index: 1,
                },
                {
                  correct: true,
                  checked: question.includes(2),
                  text: "No, because they both travelled to different places, the parasite populations may be different and thus the parasites they acquired are unlikely to be related.",
                  index: 2,
                },
                {
                  correct: true,
                  checked: question.includes(3),
                  text: "No, because they traveled to areas of high transmission where parasite diversity may be high and such parasites are unlikely to be related to each other.",
                  index: 3,
                },
              ]}
              classNames={{
                answers: "",
                answersContainer: "grid gap-4 mt-4 max-w-[500px] text-pretty",
                container: "",
              }}
              callback={(questionIdx, answerIdx) => {
                let newAnswer = [...question];
                let targetIndex = question.indexOf(answerIdx);
                if (targetIndex !== -1) {
                  newAnswer = newAnswer
                    .slice(0, targetIndex)
                    .concat(newAnswer.slice(targetIndex + 1, newAnswer.length));
                } else {
                  newAnswer.push(answerIdx);
                }
                setQuestion(newAnswer);
              }}
              hasAnswer={
                question.includes(2) &&
                question.includes(3) &&
                !question.includes(1) &&
                !question.includes(0)
              }
              questionIdx={1}
            />
            {/* <QuestionResponseText
              className="mt-4"
              visible={
                question.includes(2) &&
                question.includes(3) &&
                !question.includes(1) &&
                !question.includes(0)
              }
              text="Yes!"
            /> */}
          </div>
        )
      }
    />
  );

  return (
    <StandardLayout>
      <div className="fadeIn500">
        <FormHeader text="Infections" />
        <div className="grid gap-y-8">
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"E"} />
              <div className="absolute right-0 top-0 w-1/4">
                <Bus />
              </div>
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["E"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 10 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["E"].MOI}
                    id={"E"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"F"} />
              <div className="absolute right-0 top-0 w-1/4">
                <Bus />
              </div>
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["F"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 10 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["F"].MOI}
                    id={"F"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"G"} />
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["G"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 10 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["G"].MOI}
                    id={"G"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"H"} />
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["H"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 10 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["H"].MOI}
                    id={"H"}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <div className="relative my-auto h-fit w-16">
              <Person id={"I"} />
            </div>
            {phase >= 10 && (
              <div className={`fadeIn500 flex grow`}>
                <div className="my-auto grow">
                  <GenotypeComposition
                    genotypeComposition={fixedData[8].persons["I"].cases}
                  />
                </div>
                <div
                  className={`${
                    phase === 10 ? `fadeIn500` : "invisible"
                  } my-auto`}
                >
                  <InputMOI
                    correctAnswer={fixedData[8].persons["I"].MOI}
                    id={"I"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}
