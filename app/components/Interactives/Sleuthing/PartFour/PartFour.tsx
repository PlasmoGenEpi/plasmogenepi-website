"use client";
import { usePrevious } from "@/app/components/hooks";
import {
  partFourAverageDeducedAtom,
  partFourCompletionAtom,
  partFourInfectionsAtom,
  partTwoAverageDeducedAtom,
  partTwoInfectionsAtom,
  phase1Atom,
  selectedInfectionIndexAtom,
} from "@/data/Interactives/interactiveStore";
import { atom, useAtom, useAtomValue } from "jotai";
import StandardLayout from "../../Shared/misc/StandardLayout";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import GenotypeResult from "../../Shared/Genotyping/GenotypeResult";
import { fixedData } from "@/data/Interactives/fixedData";
import Histogram from "../../Shared/Histogram/Histogram";
import KnowledgeCheck from "../../Shared/KnowledgeChecks/KnowledgeCheck";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import GenotypeOutputElement from "../../Shared/Genotyping/GenotypeOutputElement";
import { useEffect, useRef, useState } from "react";
// import { findFirstFocusableElement, MicroId } from "@/helpers/helpers";
import CompletePage from "../../Shared/misc/CompletePage";
import { partFourPrompts } from "./partFourPrompts";
import PartFourInfectionTable from "./PartFourInfectionTable";
import PartFourControlPanel from "./PartFourControlPanel";
import MicrohaplotypeGenotypeTable from "../../Shared/Microhaplotypes/MicrohaplotypeGenotypeTable/MicrohaplotypeGenotypeTable";
import FormHeader from "../../Shared/misc/FormHeader";
import { MicroId } from "../../helpers";
import InteractivePrimaryLayout from "../../Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

const possibleVals = {
  reference: fixedData[2].infectionAlleleReferences.map((el, idx) => {
    return el.ref;
  }),
  alternate: fixedData[2].infectionAlleleReferences.map((el, idx) => {
    return el.alt;
  }),
};

export default function PartFour({ fixedPanel }: { fixedPanel: boolean }) {
  const [phase, setPhase] = useAtom(phase1Atom);
  const [completion, setCompletion] = useAtom(partFourCompletionAtom);

  const container = useRef(null);

  const [activeIndex, setActiveIndex] = useAtom(selectedInfectionIndexAtom);
  const forwards = usePrevious(phase, 1).current <= phase;
  const [infections, setInfections] = useAtom(partFourInfectionsAtom);

  const [averageDeduced, setAverageDeduced] = useAtom(
    partFourAverageDeducedAtom,
  );

  let infectionsCount = Array(5).fill(0);
  infections.forEach((inf) => {
    if (inf) {
      infectionsCount[inf - 1] += 1;
    }
  });

  // useEffect(() => {
  //   setAverageDeduced(false);
  // }, []);

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
    if (phase === 1) {
      setActiveIndex(0);
    }
    return () => {
      setActiveIndex(0);
    };
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
  //       <PartFourControlPanel />
  //     </div>
  //   );
  // }

  // return null;
  // return (
  //   <InteractivePrimaryLayout
  //     leftHeader={phase === 1 ? `Genotype with Microhaplotypes` : ""}
  //     leftContent={}
  //     // rightHeader={}
  //     // rightContent={}
  //   />
  // );

  return (
    <div>
      <InteractivePrompt
        complete={completion[phase as 1 | 2]}
        instructions={partFourPrompts[phase].instructions}
        title={partFourPrompts[phase].title}
      />
      {phase >= 1 && (
        <InteractivePrimaryLayout
          leftHeader={
            phase === 1
              ? `Genotype with Microhaplotypes`
              : "MOI Estimates (Graph)"
          }
          leftContent={
            <div className="flex flex-col transition-all duration-1000">
              {phase === 1 && (
                <div className="dark:brightness-75">
                  <MicrohaplotypeGenotypeTable
                    className="mb-8"
                    microIdsMatrix={
                      fixedData[4].infections[activeIndex]
                        .microIds as unknown as MicroId[][]
                    }
                    possibleVals={possibleVals}
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
                    headerText: "text-base  mb-0 ",
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
              )}
              {phase === 2 && (
                <div className="aspect-[2/1]">
                  <Histogram
                    color={`bg-[rgba(20_130_140_/_0.6)]`}
                    label={"Microhaplotype Estimates"}
                    datasets={[
                      {
                        correctAverage: averageDeduced,
                        label: "Microhaplotype Estimates",
                        data: infectionsCount,
                        backgroundColor: " rgb(20 130 140 / 0.6)",
                        borderColor: " rgb(20 130 140 / 0.6)",
                        borderWidth: 2,
                      },
                    ]}
                  />
                </div>
              )}
            </div>
          }
          rightHeader={`Estimates`}
          rightContent={
            <div className="grid place-items-center">
              <PartFourInfectionTable average={infectionAverage} />
            </div>
          }
        />
      )}
      {/* <StandardLayout>
        <div>
          <FormHeader
            text={`${
              phase === 1
                ? `Genotype with Microhaplotypes`
                : `Estimate Distribution`
            }`}
          />

          <div className="flex flex-col transition-all duration-1000">
            {phase === 1 && (
              <div>
                <MicrohaplotypeGenotypeTable
                  className="mb-8"
                  microIdsMatrix={
                    fixedData[4].infections[activeIndex]
                      .microIds as unknown as MicroId[][]
                  }
                  possibleVals={possibleVals}
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
                  headerText: "text-base text-black mb-0 text-black",
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
              <div className="aspect-[2/1]">
                <Histogram
                  datasets={[
                    {
                      correctAverage: averageDeduced,
                      label: "Microhaplotype Estimates",
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
            <PartFourInfectionTable average={infectionAverage} />
          </div>
        </div>
      </StandardLayout> */}
      {/* <PartFourControlPanel /> */}
    </div>
  );

  return (
    <div>
      <InteractivePrompt
        complete={completion[phase as 1 | 2]}
        instructions={partFourPrompts[phase].instructions}
        title={partFourPrompts[phase].title}
      />
      <form
        id="form-interactive"
        ref={container}
        className="grid gap-y-16 md:gap-x-24 md:[grid-template-columns:auto_1fr]"
      >
        <PartFourInfectionTable average={infectionAverage} />

        <div className="row-start-2 mx-auto flex h-full w-full max-w-sm flex-col justify-end gap-4 sm:mx-auto sm:w-full sm:max-w-[80%] md:row-start-1 md:max-w-none">
          {phase === 1 ? (
            <div className="w-full md:max-w-[600px]">
              <div className="mb-8 flex flex-col gap-2">
                <h2 className="w-full text-center text-xl font-bold md:text-left">
                  {phase === 1
                    ? `Genotype of Infection ${
                        activeIndex + 1
                      } (microhaplotypes)`
                    : `Calculate Average MOI`}
                </h2>
                <KnowledgeCheckQuestion
                  callback={(activeIndex: number, answerIndex: number) => {
                    if (averageDeduced || completion[phase]) {
                      return;
                    }
                    let newInfections = [...infections];
                    newInfections[activeIndex] = answerIndex;
                    setInfections(newInfections);
                  }}
                  hasAnswer={phase >= 2 || completion[phase]}
                  disabled={averageDeduced}
                  headerText="Multiplicity of Infection (MOI):"
                  questionIdx={activeIndex}
                  classNames={{
                    container:
                      "flex flex-col md:flex-row md:gap-4 lg:gap-8 gap-4 text-center md:text-left",
                    headerText:
                      "text-base text-black  text-primaryBlue text-sm font-bold mb-0",
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
              {activeIndex < 10 && (
                // <div className="min-h-[144px]">
                <div className="min-h-[164px]">
                  <MicrohaplotypeGenotypeTable
                    microIdsMatrix={
                      fixedData[4].infections[activeIndex].microIds as [
                        0 | 1,
                        0 | 1,
                        0 | 1,
                      ][][]
                    }
                    possibleVals={{
                      reference: fixedData[2].infectionAlleleReferences.map(
                        (el, idx) => {
                          return el.ref;
                        },
                      ),
                      alternate: fixedData[2].infectionAlleleReferences.map(
                        (el, idx) => {
                          return el.alt;
                        },
                      ),
                    }}
                  />
                </div>
                // </div>
              )}
            </div>
          ) : null}
          <div className=" aspect-[2/1] w-full basis-[300px] md:pr-8">
            <Histogram
              datasets={[
                // {
                //   // given: "#16A0AC"
                //   // adjusted: "hsl(184.8deg 37.32% 58.04%)"
                //   correctAverage: averageDeduced,
                //   label: "SNP Estimates",
                //   data: infectionsCount,
                //   backgroundColor: "hsl(184.8deg 37.32% 58.04%)",
                //   borderColor: "hsl(184.8deg 37.32% 58.04%)",
                //   borderWidth: 2,
                // },
                {
                  // given: #B4E2E8
                  // adjusted: hsl(187.14deg 20% 76.47%)
                  correctAverage: averageDeduced,
                  label: "Microhaplotype Estimates",
                  data: infectionsCount,
                  backgroundColor: "hsl(187.14deg 20% 76.47%)",
                  borderColor: "hsl(187.14deg 20% 76.47%)",
                  borderWidth: 2,
                },
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
            />
          </div>
        </div>
        {/* hsl(184.55deg 46.48% 27.84%) */}
        {/* hsl(184.8deg 77.32% 38.04%) */}
        {/* hsl(187.14deg 70% 76.47%) */}
      </form>
      <PartFourControlPanel />
    </div>
  );
}
