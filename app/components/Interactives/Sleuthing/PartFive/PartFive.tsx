"use client";
import { useAtom, useAtomValue } from "jotai";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import {
  partFiveCompletionAtom,
  partFourInfectionsAtom,
  partTwoInfectionsAtom,
  phaseAtom,
  selectedInfectionIndexAtom,
} from "@/data/Interactives/interactiveStore";
import { partFivePrompts } from "./partFivePrompts";
import { fixedData } from "@/data/Interactives/fixedData";
import Histogram from "../../Shared/Histogram/Histogram";
import GenotypeResult from "../../Shared/Genotyping/GenotypeResult";
import MicrohaplotypeGenotypeTable from "../../Shared/Microhaplotypes/MicrohaplotypeGenotypeTable/MicrohaplotypeGenotypeTable";
import StandardLayout from "../../Shared/misc/StandardLayout";
import PartFiveInfectionTable from "./PartFiveInfectionTable";
import { useEffect, useMemo } from "react";
import { MicroId } from "@/helpers/helpers";
import PartFiveControlPanel from "./PartFiveControlPanel";
import KnowledgeCheck from "../../Shared/KnowledgeChecks/KnowledgeCheck";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { atomWithStorage } from "jotai/utils";
import CompletePage from "../../Shared/misc/CompletePage";
import FormHeader from "../../Shared/misc/FormHeader";

const possibleVals = fixedData[2].infectionAlleleReferences.map((obj) => {
  return { reference: obj.ref, alternate: obj.alt };
});

const possibleVals2 = {
  reference: fixedData[2].infectionAlleleReferences.map((el, idx) => {
    return el.ref;
  }),
  alternate: fixedData[2].infectionAlleleReferences.map((el, idx) => {
    return el.alt;
  }),
};

export const partFiveQuestionAtom = atomWithStorage<null | number>(
  "partFiveQuestionAtom",
  null,
);

export default function PartFive({ fixedPanel }: { fixedPanel: boolean }) {
  const [phase, setPhase] = useAtom(phaseAtom);
  const [completion, setCompletion] = useAtom(partFiveCompletionAtom);
  const SNPInfections = useAtomValue(partTwoInfectionsAtom);
  const MHPInfections = useAtomValue(partFourInfectionsAtom);
  const [activeIndex, setActiveIndex] = useAtom(selectedInfectionIndexAtom);
  const [question, setQuestion] = useAtom(partFiveQuestionAtom);

  let SNPInfectionsCount = Array(5).fill(0);
  SNPInfections.forEach((inf) => {
    if (inf) {
      SNPInfectionsCount[inf - 1] += 1;
    }
  });

  let SNPInfectionAverage =
    SNPInfectionsCount.map((count, idx) => {
      return (count as number) * (idx + 1);
    }).reduce((a, b) => {
      return a + b;
    }) / 10;

  let MHPInfectionsCount = Array(5).fill(0);
  MHPInfections.forEach((inf) => {
    if (inf) {
      MHPInfectionsCount[inf - 1] += 1;
    }
  });

  let MHPInfectionAverage =
    MHPInfectionsCount.map((count, idx) => {
      return (count as number) * (idx + 1);
    }).reduce((a, b) => {
      return a + b;
    }) / 10;

  let trueCount = Array(5).fill(0);
  fixedData[2].infections.forEach((inf) => {
    trueCount[inf.trueMOI - 1]++;
  });

  let trueAverage =
    fixedData[2].infections
      .map((inf, idx) => {
        return inf.trueMOI;
      })
      .reduce((a, b) => {
        return a + b;
      }) / 10;

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

  // return (
  //   <div>
  //     <InteractivePrompt
  //       complete={completion[phase as 1 | 2]}
  //       instructions={partFivePrompts[phase].instructions}
  //       title={partFivePrompts[phase].title}
  //     />
  //     <div className="grid gap-x-16 gap-y-24 md:grid-cols-2 lg:gap-x-24">
  //       <div className="flex w-full items-center py-8">
  //         <div className="mx-auto w-full max-w-[400px]">
  //           <GenotypeResult
  //             noLocusLabel
  //             id={1}
  //             vals={fixedData[2].infections[activeIndex].refs.map((ref) => {
  //               return {
  //                 alternate: ref === 1 || ref === 2,
  //                 reference: ref === 0 || ref === 2,
  //               };
  //             })}
  //             possibleValues={fixedData[2].infectionAlleleReferences.map(
  //               (obj) => {
  //                 return { reference: obj.ref, alternate: obj.alt };
  //               },
  //             )}
  //           />
  //         </div>
  //       </div>
  //       <div className="flex w-full items-center py-8">
  //         <div className="mx-auto w-full max-w-[400px]">
  //           <MicrohaplotypeGenotypeTable
  //             className="max-w-[448px]"
  //             microIdsMatrix={
  //               fixedData[4].infections[activeIndex].microIds as [
  //                 0 | 1,
  //                 0 | 1,
  //                 0 | 1,
  //               ][][]
  //             }
  //             possibleVals={{
  //               reference: fixedData[2].infectionAlleleReferences.map(
  //                 (el, idx) => {
  //                   return el.ref;
  //                 },
  //               ),
  //               alternate: fixedData[2].infectionAlleleReferences.map(
  //                 (el, idx) => {
  //                   return el.alt;
  //                 },
  //               ),
  //             }}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  let MHPDifference =
    activeIndex !== null
      ? Math.abs(
          (MHPInfections[activeIndex] as number) -
            fixedData[2].infections[activeIndex].trueMOI,
        )
      : null;
  let SNPDifference =
    activeIndex !== null
      ? Math.abs(
          (SNPInfections[activeIndex] as number) -
            fixedData[2].infections[activeIndex].trueMOI,
        )
      : null;

  const activeRow = phase === 1 || phase === 10 ? activeIndex : null;

  useEffect(() => {
    if (phase >= 2 && !completion[phase - 1]) {
      setPhase(0);
    }
  }, [completion]);

  if (phase === 14) {
    return (
      <div className="pb-12 pt-12 text-center text-xl">
        <div className="pb-12 pt-12 text-center text-xl">
          <div className="h-8 text-left">
            <button
              id="interactive-top"
              className="sr-only focus:not-sr-only focus:absolute focus:px-1 focus:py-0.5"
            >
              Top of Interactive
            </button>
          </div>
          <div>
            <span className="text-xl font-semibold">Interactive Complete!</span>
          </div>
          <div className="mb-8 mt-4 text-lg">
            <span>Scroll to continue.</span>
          </div>
        </div>
        <PartFiveControlPanel />
      </div>
    );
  }

  return (
    <div>
      <InteractivePrompt
        complete={completion[phase as 1 | 2]}
        instructions={
          phase >= 3 && phase < 9
            ? partFivePrompts[3].instructions
            : partFivePrompts[phase].instructions
        }
        title={
          phase >= 3 && phase < 9
            ? partFivePrompts[3].title
            : partFivePrompts[phase].title
        }
      />
      <StandardLayout>
        <div>
          <div>
            <FormHeader
              text={`${
                phase === 1 || phase === 10
                  ? "Genotypes"
                  : phase === 2 || phase === 11
                    ? "Estimate Distribution"
                    : "Questions"
              }`}
            />
            {(phase === 1 || phase === 10) && (
              <div className="flex flex-col gap-4">
                <div
                  className={
                    phase >= 10
                      ? `${SNPDifference === 0 ? "border-primaryBlue/50 bg-primaryBlue/10" : SNPDifference === 1 ? "border-[orange]/50 bg-[orange]/10" : SNPDifference && SNPDifference > 1 ? "border-microRed/50 bg-microRed/10" : "border-transparent"} w-full border-2  p-4`
                      : "border-2 border-transparent p-4"
                  }
                >
                  <div className="mb-2">
                    <label className="text-sm">SNPs</label>
                  </div>
                  <GenotypeResult
                    className="origin-top-center mx-auto max-w-[440px] scale-90 lg:scale-[85%]"
                    id={1}
                    vals={vals}
                    possibleValues={possibleVals}
                  />
                </div>
                {/* border-[3px] border-primaryBlue/50 bg-primaryBlue/10 */}
                <div
                  className={
                    phase >= 10
                      ? `${MHPDifference === 0 ? "border-primaryBlue/50 bg-primaryBlue/10" : MHPDifference === 1 ? "border-[orange]/50 bg-[orange]/10" : MHPDifference && MHPDifference > 1 ? "border-microRed/50 bg-microRed/10" : "border-transparent"} w-full border-2  p-4`
                      : "border-2 border-transparent p-4"
                  }
                >
                  <div className="mb-4">
                    <label className="text-sm">Microhaplotypes</label>
                  </div>
                  <MicrohaplotypeGenotypeTable
                    className="origin-top scale-90 lg:scale-[85%]"
                    microIdsMatrix={
                      fixedData[4].infections[activeIndex]
                        .microIds as unknown as MicroId[][]
                    }
                    possibleVals={possibleVals2}
                  />
                </div>
              </div>
            )}
            {(phase === 2 || phase === 11) && (
              <div className="">
                <div className="aspect-[2/1]">
                  <Histogram
                    datasets={[
                      {
                        // given: "#16A0AC"
                        // adjusted: "hsl(184.8deg 37.32% 58.04%)"
                        correctAverage: true,
                        label: "MOI Estimates from SNPs",
                        data: SNPInfectionsCount,
                        backgroundColor: "hsl(184.8deg 37.32% 58.04%)",
                        borderColor: "hsl(184.8deg 37.32% 58.04%)",
                        borderWidth: 2,
                      },
                      // {
                      //   // given: #B4E2E8
                      //   // adjusted: hsl(187.14deg 20% 76.47%)
                      //   correctAverage: true,
                      //   label: "Infection Estimates from Microhaplotypes",
                      //   data: MHPInfectionsCount,
                      //   backgroundColor: "hsl(187.14deg 20% 76.47%)",
                      //   borderColor: "hsl(187.14deg 20% 76.47%)",
                      //   borderWidth: 2,
                      // },
                      // {
                      //   correctAverage: true,
                      //   label: "True Infection Count",
                      //   data: trueCount,
                      //   backgroundColor: "#0E5258",
                      //   borderColor: "#0E5258",
                      //   borderWidth: 2,
                      // },
                    ]}
                  />
                </div>
                <div className="aspect-[2/1]">
                  <Histogram
                    datasets={[
                      // {
                      //   // given: "#16A0AC"
                      //   // adjusted: "hsl(184.8deg 37.32% 58.04%)"
                      //   correctAverage: true,
                      //   label: "Infection Estimates from SNPs",
                      //   data: SNPInfectionsCount,
                      //   backgroundColor: "hsl(184.8deg 37.32% 58.04%)",
                      //   borderColor: "hsl(184.8deg 37.32% 58.04%)",
                      //   borderWidth: 2,
                      // },
                      {
                        // given: #B4E2E8
                        // adjusted: hsl(187.14deg 20% 76.47%)
                        correctAverage: true,
                        label: "MOI Estimates from Microhaplotypes",
                        data: MHPInfectionsCount,
                        backgroundColor: "hsl(187.14deg 20% 76.47%)",
                        borderColor: "hsl(187.14deg 20% 76.47%)",
                        borderWidth: 2,
                      },
                      // {
                      //   correctAverage: true,
                      //   label: "True Infection Count",
                      //   data: trueCount,
                      //   backgroundColor: "#0E5258",
                      //   borderColor: "#0E5258",
                      //   borderWidth: 2,
                      // },
                    ]}
                  />
                </div>
                {phase === 11 && (
                  <div className="aspect-[2/1]">
                    <Histogram
                      datasets={[
                        {
                          correctAverage: true,
                          label: "True MOI Infection Count",
                          data: trueCount,
                          backgroundColor: "#0E5258",
                          borderColor: "#0E5258",
                          borderWidth: 2,
                        },
                      ]}
                    />
                  </div>
                )}
              </div>
            )}
            <div className={`${phase === 3 ? "fadeIn500" : "hidden"}`}>
              <iframe
                src="https://app.sli.do/event/xxfJH6NaqhmwsTuaaaHfVk/embed/polls/2de5bb5d-cfdd-4cbf-8a84-9af46f3c61c8"
                id="slido-iframe"
                className="h-[400px] w-full [&>*]:overflow-hidden"
              ></iframe>
            </div>
            <div className={`${phase === 4 ? "fadeIn500" : "hidden"}`}>
              <iframe
                src="https://app.sli.do/event/xxfJH6NaqhmwsTuaaaHfVk/embed/polls/4355deba-cebc-4ecd-9a61-e230cc6ed9a5"
                id="slido-iframe"
                className="h-[400px] w-full [&>*]:overflow-hidden"
              ></iframe>
            </div>
            <div className={phase === 5 ? "fadeIn500" : "hidden"}>
              <iframe
                src="https://app.sli.do/event/xxfJH6NaqhmwsTuaaaHfVk/embed/polls/1709f673-bbdb-47ad-9579-0e4d30c5f9c2"
                id="slido-iframe"
                className="h-[400px] w-full [&>*]:overflow-hidden"
              ></iframe>{" "}
            </div>
            <div className={phase === 6 ? "fadeIn500" : "hidden"}>
              <iframe
                src="https://app.sli.do/event/gcdTQ54Qo2FifXoPg7iWid/embed/polls/25807c67-37fa-4bc2-ad7b-8e65ac6ffa2b"
                id="slido-iframe"
                className="h-[400px] w-full [&>*]:overflow-hidden"
              ></iframe>{" "}
            </div>
            <div
              className={phase === 7 || phase === 8 ? "fadeIn500" : "hidden"}
            >
              <iframe
                src="https://app.sli.do/event/gcdTQ54Qo2FifXoPg7iWid/embed/polls/e7fa3b48-0117-44ff-a84c-9ff5dc21f90c"
                id="slido-iframe"
                className="h-[400px] w-full [&>*]:overflow-hidden"
              ></iframe>{" "}
              <div
                className={
                  phase === 8
                    ? "fadeIn500 mt-4 bg-primaryBlue/10 p-4 md:p-6"
                    : "hidden"
                }
              >
                <p className="text-sm">
                  Different people might have had different strategies for
                  estimating MOI, but in general it might have been easier to
                  detect higher MOI in the field samples using microhaplotypes
                  and therefore estimate MOI more accurately. This is because
                  with SNPs, the maximum number of alleles that you can detect
                  is 2 and it is hard to precisely estimate MOI from the
                  proportion of loci that are heterozygous unless you have a lot
                  of loci. On the other hand, using higher diversity markers
                  such as microhaplotypes allows you to more directly observe
                  MOI, with the caveats discussed above. Namely, sometimes you
                  can have genotyping errors creating positive alleles,
                  inflating MOI. On the other hand, sometimes alleles will match
                  by chance even when loci are diverse. For these reasons,
                  statistical methods have been developed to take these and
                  other factors into account for more accurate estimates of MOI
                  even when you are using microhaplotype markers.
                </p>
              </div>
            </div>
            <div className={`${phase === 9 ? "fadeIn500" : "hidden"}`}>
              <iframe
                src="https://app.sli.do/event/gcdTQ54Qo2FifXoPg7iWid/embed/polls/a9233f79-0f5d-4bb2-af86-d395b1951880"
                id="slido-iframe"
                className="h-[400px] w-full [&>*]:overflow-hidden"
              ></iframe>{" "}
              {/* <p>"https://app.sli.do/event/gcdTQ54Qo2FifXoPg7iWid/embed/polls/a9233f79-0f5d-4bb2-af86-d395b1951880"</p> */}
            </div>
            <div className={`${phase === 12 ? "fadeIn500" : "hidden"}`}>
              <iframe
                src="https://app.sli.do/event/gcdTQ54Qo2FifXoPg7iWid/embed/polls/a9233f79-0f5d-4bb2-af86-d395b1951880"
                id="slido-iframe"
                className="h-[400px] w-full [&>*]:overflow-hidden"
              ></iframe>{" "}
              {/* <p>"https://app.sli.do/event/gcdTQ54Qo2FifXoPg7iWid/embed/polls/a9233f79-0f5d-4bb2-af86-d395b1951880"</p> */}
            </div>
            <div className={`${phase === 13 ? "fadeIn500" : "hidden"}`}>
              <KnowledgeCheckQuestion
                answers={[
                  {
                    checked: question === 0,
                    correct: false,
                    index: 0,
                    text: "Hide your molecular data  – they don’t agree with what you hoped to see so best to pretend they don’t exist",
                  },
                  {
                    checked: question === 1,
                    correct: false,
                    index: 1,
                    text: "Take your molecular data as irrefutable proof that transmission increased and immediately make sweeping and expensive programmatic changes",
                  },
                  {
                    checked: question === 2,
                    correct: true,
                    index: 2,
                    text: "Use your molecular data as a potential cause for concern, and think about additional sources of data that you can use or generate to confirm transmission is getting worse and if so why (correct)",
                  },
                ]}
                callback={(questionIdx, answerIdx) => {
                  setQuestion(answerIdx);
                }}
                hasAnswer={question === 2}
                headerText="Which of the following might be reasonable next steps to take?"
                questionIdx={1}
                classNames={{
                  answersContainer: "grid gap-4 mt-4",
                }}
              />
            </div>
          </div>
        </div>
        <div className="row-start-1 md:col-start-2">
          <FormHeader text={`MOI Estimates`} />
          <div className="grid place-items-center">
            <table className="table max-w-[350px] border-2 border-primaryBlue/50 text-center ">
              <thead className="border-b-2 border-primaryGreen/50 bg-gradient-to-b from-[#116F77] via-[#116F77] to-[#093F43] font-light text-white ">
                <tr className="[&>*]:w-1/4 ">
                  <th className="py-4">Infection</th>
                  <th className="py-4">SNPs</th>
                  <th className="py-4">Microhaplotypes</th>
                  {phase >= 10 && <th>True</th>}
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <tr
                        onClick={
                          phase === 1 || phase === 10
                            ? () => {
                                setActiveIndex(idx);
                              }
                            : undefined
                        }
                        tabIndex={phase === 1 || phase === 10 ? 0 : undefined}
                        key={idx}
                        className={`${idx === activeRow ? "bg-primaryBlue/10 font-bold text-black" : "text-black/50"} ${phase === 1 || phase === 10 ? "cursor-pointer hover:bg-primaryBlue/10" : ""}`}
                      >
                        <td>{idx + 1}</td>
                        <td>{SNPInfections[idx]}</td>
                        <td>{MHPInfections[idx]}</td>
                        {phase >= 10 && (
                          <td>{fixedData[2].infections[idx].trueMOI}</td>
                        )}
                      </tr>
                    );
                  })}
                <tr className="border-t-2 border-primaryGreen/50 bg-gradient-to-t from-[#116F77] via-[#116F77] to-[#093F43]  font-bold text-white">
                  <td className="py-6">Avg.</td>
                  <td className="py-6">{SNPInfectionAverage}</td>
                  <td className="py-6">{MHPInfectionAverage}</td>
                  {phase >= 10 && <td className="py-6">{trueAverage}</td>}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </StandardLayout>
      <PartFiveControlPanel />
    </div>
  );
}
