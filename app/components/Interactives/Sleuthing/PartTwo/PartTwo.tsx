"use client";
import { usePrevious } from "@/app/components/hooks";
import {
  partTwoAverageDeducedAtom,
  partTwoCompletionAtom,
  partTwoInfectionsAtom,
  phase1Atom,
  selectedInfectionIndexAtom,
} from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue } from "jotai";
import StandardLayout from "../../Shared/misc/StandardLayout";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import PartTwoInfectionArray from "./InfectionArray/PartTwoInfectionArray";
import GenotypeResult from "../../Shared/Genotyping/GenotypeResult";
import { fixedData } from "@/data/Interactives/fixedData";
import Histogram from "../../Shared/Histogram/Histogram";
import KnowledgeCheck from "../../Shared/KnowledgeChecks/KnowledgeCheck";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import GenotypeOutputElement from "../../Shared/Genotyping/GenotypeOutputElement";
import InfectionTable from "./InfectionTable";
import PartTwoControlPanel from "./PartTwoControlPanel";
import { useEffect, useMemo, useRef, useState } from "react";
// import { findFirstFocusableElement } from "@/helpers/helpers";
import { partTwoPrompts } from "./partTwoPrompts";
import CompletePage from "../../Shared/misc/CompletePage";
import PartTwoInfectionTable from "./PartTwoInfectionTable";
import FormHeader from "../../Shared/misc/FormHeader";
import InteractivePrimaryLayout from "../../Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import { atomWithStorage } from "jotai/utils";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";

const possibleVals = fixedData[2].infectionAlleleReferences.map((obj) => {
  return { reference: obj.ref, alternate: obj.alt };
});

export const attemptedMOIInputAtom = atom<null | number>(null);
export const p2QuestionAnsweredAtom = atomWithStorage<null | number>(
  "p2QuestionAnsweredAtom",
  null,
);
export const p2TextIsShownAtom = atomWithStorage("p2TextIsShownAtom", false);

export default function PartTwo({
  fixedPanel,
  lang,
}: {
  fixedPanel: boolean;
  lang: "EN" | "FR" | "PT";
}) {
  const [textIsShown, setTextIsShown] = useAtom(p2TextIsShownAtom);
  const [phase, setPhase] = useAtom(phase1Atom);
  const [completion, setCompletion] = useAtom(partTwoCompletionAtom);
  const [attemptedMOIInput, setAttemptedMOIInput] = useAtom(
    attemptedMOIInputAtom,
  );

  const container = useRef(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [activeIndex, setActiveIndex] = useAtom(selectedInfectionIndexAtom);
  const forwards = usePrevious(phase, 1).current <= phase;
  const [infections, setInfections] = useAtom(partTwoInfectionsAtom);

  const [averageDeduced, setAverageDeduced] = useAtom(
    partTwoAverageDeducedAtom,
  );
  const [questionAnswered, setQuestionAnswered] = useAtom(
    p2QuestionAnsweredAtom,
  );

  let infectionsCount = Array(5).fill(0);
  infections.forEach((inf) => {
    if (inf) {
      infectionsCount[inf - 1] += 1;
    }
  });

  // useEffect(() => {
  //   const getNextIndex = function () {
  //     for (let i = 0; i < infections.length; i++) {
  //       if (infections[i] === null || infections[i] === 0) {
  //         return i;
  //       } else {
  //         continue;
  //       }
  //     }
  //     return null;
  //   };
  //   let z = getNextIndex();
  //   if (activeIndex !== 9) {
  //     let x: HTMLElement | undefined = findFirstFocusableElement(
  //       container?.current,
  //     );
  //     x?.focus();
  //     if (z) {
  //       setActiveIndex(z);
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [infections]);

  useEffect(() => {
    setActiveIndex(0);
    return () => {
      setActiveIndex(0);
    };
  }, []);

  const vals = useMemo(() => {
    if (activeIndex === 10) {
      return [];
    }
    return fixedData[2].infections[activeIndex].refs.map((ref) => {
      return {
        alternate: ref === 1 || ref === 2,
        reference: ref === 0 || ref === 2,
      };
    });
  }, [activeIndex]);

  useEffect(() => {
    if (phase === 1) {
      setActiveIndex(0);
    }
  }, [phase, setActiveIndex]);

  let infectionAverage =
    infectionsCount
      .map((count, idx) => {
        return count * (idx + 1);
      })
      .reduce((a, b) => {
        return a + b;
      }) / 10;

  // if (phase === 3) {
  //   return (
  //     <div>
  //       <div className="pb-12 pt-12 text-center text-xl">
  //         <div className="h-8 text-left">
  //           <button
  //             id="interactive-top"
  //             className="sr-only focus:not-sr-only focus:absolute focus:px-1 focus:py-0.5"
  //           >
  //             Top of Interactive
  //           </button>
  //         </div>
  //         <div>
  //           <span className="text-xl font-semibold">Interactive Complete!</span>
  //         </div>
  //         <div className="mb-8 mt-4 text-lg">
  //           <span>Scroll to continue.</span>
  //         </div>
  //       </div>{" "}
  //       <PartTwoControlPanel />
  //     </div>
  //   );
  // }

  // return (
  //   <div>
  //     <InteractivePrompt
  //       complete={completion[phase as 1 | 2]}
  //       instructions={partTwoPrompts[phase].instructions}
  //       title={partTwoPrompts[phase].title}
  //     />
  //     <div className=" grid grid-cols-2 gap-x-16 gap-y-8 [grid-template-rows:auto_1fr]">
  //       <div>
  //         <h2 className="text-center text-xl font-bold text-neutral-700 md:text-left">
  //           Genotype
  //           <br></br>
  //           <span className="text-sm font-normal">
  //             Infection #{activeIndex + 1}
  //           </span>
  //           <br></br>
  //           <span className="text-sm font-normal">SNPs</span>
  //         </h2>
  //       </div>
  //       <div className="row-start-2">
  //         <GenotypeResult id={1} vals={vals} possibleValues={possibleVals} />
  //       </div>
  //       <div>
  //         <h2 className=" text-center text-xl font-bold text-neutral-700 md:text-left">
  //           Estimates
  //         </h2>
  //       </div>
  //       <div className="row-start-2">
  //         <PartTwoInfectionTable average={infectionAverage} />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <InteractivePrompt
        lang={lang}
        complete={completion[phase as 1 | 2]}
        instructions={partTwoPrompts[phase].instructions[lang]}
        title={partTwoPrompts[phase].title[lang]}
      />
      {phase >= 1 && (
        <InteractivePrimaryLayout
          leftHeader={
            phase === 1 ? (
              <div className=" mt-8 text-center @4xl/main:mt-0 @4xl/main:text-left">
                <h4 className="text-balance text-center text-lg  font-semibold @2xl/main:text-wrap @2xl/main:text-left">
                  {lang === "EN"
                    ? `Genotype with SNPs`
                    : lang === "FR"
                    ? `Génotype avec SNP`
                    : `Genótipo com SNPs`}
                  <label className="text-sm">
                    <br></br>
                    {lang === "EN"
                      ? `Infection`
                      : lang === "FR"
                      ? `Infection`
                      : `Infecção`}{" "}
                    {activeIndex + 1}
                  </label>
                </h4>
              </div>
            ) : phase === 2 ? (
              lang === "EN" ? (
                `MOI Estimates (Graph)`
              ) : lang === "FR" ? (
                `Estimations du MOI (Graphique)`
              ) : (
                `Estimativas de MOI (Gráfico)`
              )
            ) : lang === "EN" ? (
              `MOI Estimates`
            ) : lang === "FR" ? (
              `Estimations du MOI`
            ) : (
              `Estimativas de MOI`
            )
          }
          leftContent={
            phase === 1 ? (
              <div className="max-w-[500px]">
                <GenotypeResult
                  id={1}
                  vals={vals}
                  possibleValues={possibleVals}
                />
                <KnowledgeCheckQuestion
                  callback={(activeIndex: number, answerIndex: number) => {
                    if (averageDeduced || completion[phase]) {
                      return;
                    }
                    let newInfections = [...infections];
                    if (newInfections[activeIndex] === answerIndex) {
                      newInfections[activeIndex] = null;
                    } else {
                      newInfections[activeIndex] = answerIndex;
                    }
                    setInfections(newInfections);
                  }}
                  // callback={(activeIndex: number, answerIndex: number) => {
                  //   if (averageDeduced || completion[phase]) {
                  //     return;
                  //   }
                  //   if (attemptedMOIInput === answerIndex) {
                  //     setAttemptedMOIInput(null);
                  //   } else {
                  //     setAttemptedMOIInput(answerIndex);
                  //   }
                  // }}
                  hasAnswer={phase >= 2 || completion[phase]}
                  disabled={averageDeduced}
                  headerText="MOI: "
                  questionIdx={activeIndex}
                  classNames={{
                    container:
                      "flex flex-col md:flex-row md:gap-4 lg:gap-8 gap-4 text-center md:text-left mt-8",
                    headerText: "text-base mb-0",
                    answersContainer:
                      "grid grid-cols-5 place-items-center  grow",
                  }}
                  answers={Array(5)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        text: (idx + 1).toString(),
                        // checked:
                        //   infections[activeIndex] === idx ||
                        //   idx === attemptedMOIInput,
                        checked: infections[activeIndex] === idx + 1,
                        correct:
                          infections[activeIndex] === idx + 1
                            ? true
                            : !completion[1],
                        index: idx + 1,
                      };
                    })}
                />
              </div>
            ) : phase === 2 ? (
              <div className="mx-auto max-w-[500px]">
                <Histogram
                  color={`bg-[rgba(20_130_140_/_0.6)]`}
                  label={
                    lang === "EN"
                      ? "SNP Estimates"
                      : lang === "FR"
                      ? "Estimations SNP"
                      : "Estimativas SNP"
                  }
                  datasets={[
                    {
                      correctAverage: averageDeduced,
                      label:
                        lang === "EN"
                          ? "SNP Estimates"
                          : lang === "FR"
                          ? "Estimations SNP"
                          : "Estimativas SNP",
                      data: infectionsCount,
                      backgroundColor: "rgb(20 130 140 / 0.6)",
                      borderColor: "rgb(20 130 140 / 0.6)",
                      borderWidth: 2,
                    },
                  ]}
                />
              </div>
            ) : (
              <div className="grid place-items-center">
                <PartTwoInfectionTable lang={lang} average={infectionAverage} />
              </div>
            )
          }
          rightHeader={
            phase !== 3
              ? lang === "EN"
                ? `MOI Estimates`
                : lang === "FR"
                ? `Estimations du MOI`
                : `Estimativas de MOI`
              : lang === "EN"
              ? "Questions"
              : lang === "FR"
              ? "Des questions"
              : "Questões"
          }
          rightContent={
            phase < 3 ? (
              <div className="grid place-items-center">
                <PartTwoInfectionTable lang={lang} average={infectionAverage} />
              </div>
            ) : (
              <div>
                <KnowledgeCheckQuestion
                  answers={[
                    {
                      checked: questionAnswered === 1,
                      correct: true,
                      index: 1,
                      text:
                        lang === "EN" ? "Yes" : lang === "FR" ? "Oui" : "Sim",
                    },
                    {
                      checked: questionAnswered === 2,
                      correct: true,
                      index: 2,
                      text:
                        lang === "EN" ? "No" : lang === "FR" ? "Non" : "Não",
                    },
                  ]}
                  classNames={{
                    headerText: "text-base mb-0 ",
                    answersContainer: "grid gap-2 mt-4",
                  }}
                  questionIdx={1}
                  callback={(questionIdx, answerIdx) => {
                    if (questionAnswered === answerIdx) {
                      setQuestionAnswered(null);
                    } else {
                      setQuestionAnswered(answerIdx);
                    }
                  }}
                  hasAnswer={textIsShown}
                  headerText={
                    lang === "EN"
                      ? "Based on your results, do you think the vector control intervention worked?"
                      : lang === "FR"
                      ? "D'après vos résultats, pensez-vous que l'intervention de lutte antivectorielle a fonctionné ?"
                      : "Com base em seus resultados, você acha que a intervenção de controle de vetores funcionou?"
                  }
                />
                {questionAnswered && (
                  <div className="mt-4 flex">
                    {textIsShown ? (
                      <QuestionResponseText
                        visible={true}
                        className="mt-4"
                        text={
                          lang === "EN"
                            ? "If the intervention worked, MOI should be significantly less than baseline, which was 2.5. Depending on your estimates,  you may determine that the mean MOI is now indeed lower (in which case it worked!), about the same, or even higher. We are not going to tell you the answer now, but don’t worry – you will soon do another activity with some additional analysis on the same samples and we’ll discuss the results in more detail."
                            : lang === "FR"
                            ? "Si l'intervention a fonctionné, le MOI devrait être nettement inférieur au niveau de base, qui était de 2,5. En fonction de vos estimations, vous pouvez déterminer que le MOI moyen est maintenant effectivement plus faible (auquel cas cela a fonctionné !), à peu près le même, voire plus élevé. Nous n'allons pas vous donner la réponse maintenant, mais ne vous inquiétez pas – vous allez bientôt faire une autre activité avec une analyse supplémentaire sur les mêmes échantillons et nous discuterons des résultats plus en détail."
                            : "Se a intervenção funcionou, o MOI deve ser significativamente menor do que a linha de base, que era de 2,5. Dependendo de suas estimativas, você pode determinar que o MOI médio agora é realmente menor (caso em que funcionou!), aproximadamente o mesmo ou até maior. Não vamos lhe dar a resposta agora, mas não se preocupe – você logo fará outra atividade com alguma análise adicional sobre as mesmas amostras e discutiremos os resultados com mais detalhes."
                        }
                      />
                    ) : (
                      <button
                        onClick={() => {
                          setTextIsShown(true);
                        }}
                        className="fadeIn500 mx-auto rounded bg-interactiveGreen px-4 py-2 text-white shadow-sm shadow-black/50"
                      >
                        <span className="block translate-y-0.5">
                          {lang === "EN"
                            ? `Feedback`
                            : lang === "FR"
                            ? `Rétroaction`
                            : lang === "PT"
                            ? `Opinião`
                            : `Feedback`}
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            )
          }
        />
      )}
      {/* <StandardLayout>
        <div>
          <FormHeader
            text={`${
              phase === 1 ? `Genotype with SNPs` : `Estimate Distribution`
            }`}
          />
          <div>
            {phase === 1 && (
              <div>
                <GenotypeResult
                  id={1}
                  vals={vals}
                  possibleValues={possibleVals}
                />
              </div>
            )}
            {phase === 1 && (
              <KnowledgeCheckQuestion
                callback={(activeIndex: number, answerIndex: number) => {
                  if (averageDeduced || completion[phase]) {
                    return;
                  }
                  let newInfections = [...infections];
                  if (newInfections[activeIndex] === answerIndex) {
                    newInfections[activeIndex] = null;
                  } else {
                    newInfections[activeIndex] = answerIndex;
                  }
                  setInfections(newInfections);
                }}
                // callback={(activeIndex: number, answerIndex: number) => {
                //   if (averageDeduced || completion[phase]) {
                //     return;
                //   }
                //   if (attemptedMOIInput === answerIndex) {
                //     setAttemptedMOIInput(null);
                //   } else {
                //     setAttemptedMOIInput(answerIndex);
                //   }
                // }}
                hasAnswer={phase >= 2 || completion[phase]}
                disabled={averageDeduced}
                headerText="MOI: "
                questionIdx={activeIndex}
                classNames={{
                  container:
                    "flex flex-col md:flex-row md:gap-4 lg:gap-8 gap-4 text-center md:text-left mt-8",
                  headerText: "text-base mb-0 text-black",
                  answersContainer: "grid grid-cols-5 place-items-center  grow",
                }}
                answers={Array(5)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      text: (idx + 1).toString(),
                      // checked:
                      //   infections[activeIndex] === idx ||
                      //   idx === attemptedMOIInput,
                      checked: infections[activeIndex] === idx + 1,
                      correct:
                        infections[activeIndex] === idx + 1
                          ? true
                          : !completion[1],
                      index: idx + 1,
                    };
                  })}
              />
            )}
            {phase === 2 && (
              <div className="block aspect-[2/1] max-w-full">
                <Histogram
                  datasets={[
                    {
                      correctAverage: averageDeduced,
                      label: "SNP Estimates",
                      data: infectionsCount,
                      backgroundColor: "hsl(184.8deg 37.32% 58.04%)",
                      borderColor: "hsl(184.8deg 37.32% 58.04%)",
                      borderWidth: 2,
                    },
                  ]}
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <FormHeader text={`Estimates`} />

          <div className="grid place-items-center">
            <PartTwoInfectionTable average={infectionAverage} />
          </div>
        </div>
      </StandardLayout> */}
      {/* <PartTwoControlPanel /> */}
    </div>
  );

  return (
    <div>
      <InteractivePrompt
        complete={completion[phase as 1 | 2]}
        instructions={partTwoPrompts[phase].instructions}
        title={partTwoPrompts[phase].title}
      />
      <form
        id="form-interactive"
        ref={container}
        className="grid gap-y-16 md:gap-x-24 md:[grid-template-columns:auto_1fr]"
      >
        <PartTwoInfectionTable average={infectionAverage} />

        <div className="row-start-2 mx-auto flex h-full w-full max-w-sm flex-col justify-end gap-16 sm:mx-auto sm:w-full sm:max-w-[80%] md:row-start-1 md:max-w-none">
          {phase === 1 ? (
            <div className={`md:max-w-[600px]`}>
              <div className="mb-8 flex flex-col gap-2">
                <h2 className="mb-8 w-full text-center text-xl font-bold md:text-left">
                  {phase === 1
                    ? `Genotype of Infection ${activeIndex + 1} (SNPs)`
                    : `Calculate Average MOI`}
                </h2>
                {activeIndex < 10 && (
                  <div className="w-full max-w-[448px]">
                    <GenotypeResult
                      id={1}
                      vals={fixedData[2].infections[activeIndex].refs.map(
                        (ref) => {
                          return {
                            alternate: ref === 1 || ref === 2,
                            reference: ref === 0 || ref === 2,
                          };
                        },
                      )}
                      possibleValues={fixedData[2].infectionAlleleReferences.map(
                        (obj) => {
                          return { reference: obj.ref, alternate: obj.alt };
                        },
                      )}
                    />
                  </div>
                )}
                <KnowledgeCheckQuestion
                  callback={(activeIndex: number, answerIndex: number) => {
                    if (averageDeduced || completion[phase]) {
                      return;
                    }
                    let newInfections = [...infections];
                    if (newInfections[activeIndex] === answerIndex) {
                      newInfections[activeIndex] = null;
                    } else {
                      newInfections[activeIndex] = answerIndex;
                    }
                    setInfections(newInfections);
                  }}
                  hasAnswer={phase >= 2 || completion[phase]}
                  disabled={averageDeduced}
                  headerText="MOI: "
                  questionIdx={activeIndex}
                  classNames={{
                    container:
                      "flex flex-col md:flex-row md:gap-4 lg:gap-8 gap-4 text-center md:text-left",
                    headerText: "text-base text-black mb-0 text-black",
                    answersContainer:
                      "grid grid-cols-5 place-items-center md:place-items-end grow",
                  }}
                  answers={Array(5)
                    .fill(0)
                    .map((el, idx) => {
                      return {
                        text: (idx + 1).toString(),
                        checked: infections[activeIndex] === idx + 1,
                        correct: !completion[phase],
                        index: idx + 1,
                      };
                    })}
                />
              </div>
              {/* {activeIndex < 10 && (
                <div className="mx-auto max-w-[448px]">
                  <GenotypeResult
                    id={1}
                    vals={fixedData[2].infections[activeIndex].refs.map(
                      (ref) => {
                        return {
                          alternate: ref === 1 || ref === 2,
                          reference: ref === 0 || ref === 2,
                        };
                      },
                    )}
                    possibleValues={fixedData[2].infectionAlleleReferences.map(
                      (obj) => {
                        return { reference: obj.ref, alternate: obj.alt };
                      },
                    )}
                  />
                </div>
              )} */}
            </div>
          ) : null}
          <div className=" aspect-[2/1] w-full basis-[300px] md:pr-8">
            {/* <Histogram
              datasets={[
                {
                  // given: "#16A0AC"
                  // adjusted: "hsl(184.8deg 37.32% 58.04%)"
                  correctAverage: averageDeduced,
                  label: "SNP Estimates",
                  data: infectionsCount,
                  backgroundColor: "hsl(184.8deg 37.32% 58.04%)",
                  borderColor: "hsl(184.8deg 37.32% 58.04%)",
                  borderWidth: 2,
                },
                // {
                //   // given: #B4E2E8
                //   // adjusted: hsl(187.14deg 20% 76.47%)
                //   correctAverage: false,
                //   label: "MHP",
                //   data: [1, 1, 1, 1, 1],
                //   backgroundColor: "hsl(187.14deg 20% 76.47%)",
                //   borderColor: "hsl(187.14deg 20% 76.47%)",
                //   borderWidth: 2,
                // },
                // {
                //   correctAverage: false,
                //   label: "True",
                //   data: [1, 1, 1, 1, 1],
                //   backgroundColor: "#0E5258",
                //   borderColor: "#0E5258",
                //   borderWidth: 2,
                // },
              ]}
              // datasets={[
              //   {
              //     correctAverage: averageDeduced,
              //     label: "SNP Estimate",
              //     data: infectionsCount,
              //     backgroundColor: "#0E5258",
              //     borderColor: "#0E5258",
              //     borderWidth: 2,
              //   },
              // ]}
            /> */}
          </div>
        </div>
        {/* hsl(184.55deg 46.48% 27.84%) */}
        {/* hsl(184.8deg 77.32% 38.04%) */}
        {/* hsl(187.14deg 70% 76.47%) */}
      </form>
      <PartTwoControlPanel />
    </div>
  );
}
