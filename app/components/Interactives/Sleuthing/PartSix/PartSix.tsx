"use client";
import {
  activePairwiseMHPsCombo,
  activePairwiseMHPsComboAtom,
  pairwiseCombosMHPsAtom,
  partSixCompletionAtom,
  partSixSNPKnowledgeCheckQuestionsAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { useAtom, useAtomValue } from "jotai";
import { partSixPrompts } from "./partSixPrompts";
import PartSixNavArray from "./PartSixNavArray";
import { usePrevious } from "@/app/components/hooks";
import P6CloneRows from "./CloneRows/P6MHPCloneRows";
import StandardLayout from "../../Shared/misc/StandardLayout";
import { useEffect, useState } from "react";
import PartSixControlBoard from "./PartSixControlBoard";
import { atomWithStorage, RESET } from "jotai/utils";
import MicrohaplotypeComparator from "./Comparators/MHPs/MicrohaplotypeComparators";
import GenerateMHPCloneRows from "./Phases/GenerateMHPCloneRows";
import CompareMHPClones from "./Phases/CompareMHPClones";
import GenerateSNPCloneRows from "./Phases/GenerateSNPCloneRows";
import CompareSNPClones from "./Phases/CompareSNPClones";
import SNPComparator from "./Comparators/SNPs/SNPComparator";
import SNPSlidoPolls from "./Phases/SNPSlidoPolls";
// import { findFirstFocusableElement } from "@/helpers/helpers";
import MHPSlidoPolls from "./Phases/MHPSlidoPolls";
import KnowledgeCheck from "../../Shared/KnowledgeChecks/KnowledgeCheck";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import SNPHistogramIBD0 from "./Phases/SNPHistogramIBD0";
import GenerateSNPHybrid from "./Phases/GenerateSNPHybrid";
import CompareSNPClonesWithHybrid from "./Phases/CompareSNPClonesWithHybrid";
import SNPKnowledgeCheck from "./Phases/SNPKnowledgeCheck";
import P6MHPCloneRows from "./CloneRows/P6MHPCloneRows";
import P6MHPCloneRowsWithHybrid from "./CloneRows/P6MHPCloneRowsWithHybrid";
import PositiveControls from "./Phases/PositiveControls";
import Genotypes, { P6Step2QuestionsAtom } from "./Phases/Genotypes";
import PositiveControlBoard from "../../Shared/PositiveControlBoard/PositiveControlBoard";
import Image from "next/image";
import GenerateMHPHybrid from "./Phases/GenerateMHPHybrid";
import CompareMHPClonesWithHybrid from "./Phases/CompareMHPClonesWithHybrid";
import IBSWithMicro from "./Phases/IBSWithMicro";
import CompletePage from "../../Shared/misc/CompletePage";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";
import FormHeader from "../../Shared/misc/FormHeader";
import ImageContainer from "../../Shared/misc/ImageContainer";
import MultiRowLayout from "../../Shared/misc/MultiRowLayout";
import { findFirstFocusableElement } from "../../helpers";
import InteractivePrimaryLayout from "../../Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export const hybridMHPCloneQuestionAtom = atomWithStorage<null | number>(
  "hybridMHPCloneQuestionAtom",
  null,
);

export default function PartSix({ lang = "EN" }: { lang: "EN" | "FR" | "PT" }) {
  const [phase2, setPhase] = useAtom(phase2Atom);
  const [completion, setCompletion] = useAtom(partSixCompletionAtom);
  const forwards = usePrevious(phase2, 1).current <= phase2;
  const [questions, setQuestions] = useAtom(
    partSixSNPKnowledgeCheckQuestionsAtom,
  ); // const [questions, setQuestions] = useAtom(P6Step2QuestionsAtom);
  const pairwiseCombos = useAtomValue(pairwiseCombosMHPsAtom);
  const [hybridMHPQuestion, setHybridMHPQuestion] = useAtom(
    hybridMHPCloneQuestionAtom,
  );

  useEffect(() => {
    if (completion[phase2]) {
      return;
    }
    if (forwards) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase2]);

  // useEffect(() => {
  //   if (phase2 >= 2 && !completion[phase2]) {
  //     let x: HTMLElement | undefined = findFirstFocusableElement(
  //       document.getElementById("form-interactive")
  //     );
  //     x?.focus();
  //   }
  //   if (
  //     [
  //       1, 3, 4, 5, 6, 8, 11, 12, 13, 13.5, 14, 14.5, 15, 16, 17, 18, 19, 21,
  //       22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 33.5, 34,
  //     ].includes(phase2)
  //   ) {
  //     window.scrollTo(0, 0);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [phase2]);

  // if (phase === 34) {
  //   return (
  //     <div>
  //       <CompletePage part={6} />
  //       <PartSixControlBoard direction={"forwards"} />
  //     </div>
  //   );
  // }

  // return null;

  return (
    <div>
      {/* {phase2} */}
      {/* {`(${forwards ? "forwards" : "backwards"}, ${phase})`} */}
      <div className="mb-12">
        <InteractivePrompt
          lang={lang}
          skippable={completion[1]}
          complete={completion[phase2]}
          title={partSixPrompts[phase2]?.title[lang]}
          instructions={partSixPrompts[phase2]?.instructions[lang]}
        />
        {phase2 > 0 && <PartSixNavArray lang={lang} forwards={forwards} />}
      </div>
      {phase2 > 0 && phase2 <= 2 && (
        <GenerateSNPCloneRows lang={lang} forwards={forwards} />
      )}
      {phase2 >= 3 && phase2 <= 5 && <CompareSNPClones lang={lang} />}
      {(phase2 === 6 || phase2 === 7) && <SNPSlidoPolls lang={lang} />}
      {phase2 >= 8 && phase2 <= 10 && <SNPHistogramIBD0 lang={lang} />}
      {phase2 === 11 && <GenerateSNPHybrid lang={lang} />}
      {phase2 >= 12 && phase2 < 15 && (
        <CompareSNPClonesWithHybrid lang={lang} />
      )}
      {((phase2 >= 15 && phase2 < 16) || phase2 === 17 || phase2 === 19) && (
        <SNPKnowledgeCheck lang={lang} />
      )}
      {phase2 >= 22 && phase2 < 23 && <GenerateMHPCloneRows lang={lang} />}
      {phase2 >= 23 && phase2 <= 25 && <CompareMHPClones lang={lang} />}
      {/* {phase2 === 26 && <div>Hello World </div>} */}
      {phase2 >= 26 && phase2 < 28 && <MHPSlidoPolls lang={lang} />}
      {phase2 === 29 && <GenerateMHPHybrid lang={lang} />}
      {phase2 >= 30 && phase2 <= 32 && phase2 !== 31.5 && (
        <CompareMHPClonesWithHybrid lang={lang} />
      )}
      {phase2 === 31.5 && (
        <InteractivePrimaryLayout
          lang={lang}
          leftHeader={
            lang === "EN"
              ? `Questions`
              : lang === "FR"
              ? `Questions`
              : lang === "PT"
              ? `Perguntas`
              : ""
          }
          leftContent={
            <KnowledgeCheckQuestion
              callback={(questionIdx, answerIdx) => {
                if (hybridMHPQuestion === answerIdx) {
                  setHybridMHPQuestion(null);
                } else {
                  setHybridMHPQuestion(answerIdx);
                }
                // setPartSixPairwiseQuestions({
                //   ...partSixPairwiseQuestions,
                //   [JSON.stringify([2, 4])]: {
                //     ...partSixPairwiseQuestions[JSON.stringify([2, 4])],
                //     4:
                //       partSixPairwiseQuestions[JSON.stringify([2, 4])][3] !==
                //       answerIdx
                //         ? answerIdx
                //         : null,
                //   },
                // });
              }}
              hasAnswer={hybridMHPQuestion === 1}
              headerText={
                lang === "EN"
                  ? `Both of the previous comparisons had the same IBD - 0.5 - since the hybrid clone is 50% related to each parent. Did you get the same IBS result each time? What do you think you would find if you did similar experiments looking at other, similarly related clones?`
                  : lang === "FR"
                  ? "Les deux premières comparaisons ont la même IBD - 0.5 - puisque le clone hybride est lié à 50 % à chaque parent. Avez-vous obtenu le même résultat d'IBS à chaque fois ? Que pensez-vous que vous trouveriez si vous faisiez des expériences similaires en examinant d'autres clones liés de la même manière ?"
                  : lang === "PT"
                  ? "Ambas as comparações anteriores tiveram o mesmo IBD - 0,5 - uma vez que o clone híbrido está 50% relacionado com cada progenitor. Obteve o mesmo resultado de IBS em cada vez? O que pensa que encontraria se fizesse experiências semelhantes analisando outros clones relacionados de forma semelhante?"
                  : ""
              }
              classNames={{
                answersContainer:
                  "grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-4 mt-4",
                answers: "w-4 md:w-3 lg:w-4",
              }}
              questionIdx={1}
              answers={[
                {
                  checked: hybridMHPQuestion === 0,
                  correct: false,
                  index: 0,
                  text:
                    lang === "EN"
                      ? "0, or close to 0 matches"
                      : lang === "FR"
                      ? "0, ou près de 0 correspondance"
                      : lang === "PT"
                      ? "0, ou perto de 0 correspondências"
                      : "",
                },
                {
                  checked: hybridMHPQuestion === 1,
                  correct: true,
                  index: 1,
                  text:
                    lang === "EN"
                      ? "Approximately 50% matches"
                      : lang === "FR"
                      ? "Environ 50 % de correspondances"
                      : lang === "PT"
                      ? "Aproximadamente 50% de correspondências"
                      : "",
                },
                {
                  checked: hybridMHPQuestion === 2,
                  correct: false,
                  index: 2,
                  text:
                    lang === "EN"
                      ? "100%, or close to 100% matches"
                      : lang === "FR"
                      ? "100 %, ou près de 100 % de correspondances"
                      : lang === "PT"
                      ? "100%, ou perto de 100% de correspondências"
                      : "",
                },
              ]}
            >
              <div className="grid origin-top scale-90 pt-2 [grid-template-columns:1fr_auto] lg:scale-75">
                <div></div>
                <div className="text-center">
                  <span className="text-sm font-bold">IBS</span>
                </div>
                <div className="w-full">
                  <MicrohaplotypeComparator lang={lang} activeCombo={[1, 4]} />
                </div>

                <div className="col-start-2  self-center px-1 md:px-4">
                  <span className="text-sm font-bold">
                    {(
                      (pairwiseCombos[1][4].filter((val) => {
                        return val;
                      }).length /
                        12) *
                      100
                    ).toFixed(2)}
                    %
                  </span>{" "}
                </div>
                <div className="w-full">
                  <MicrohaplotypeComparator lang={lang} activeCombo={[2, 4]} />
                </div>
                <div className="col-start-2  self-center px-1 md:px-4">
                  <span className="text-sm font-bold">
                    {(
                      (pairwiseCombos[2][4].filter((val) => {
                        return val;
                      }).length /
                        12) *
                      100
                    ).toFixed(2)}
                    %
                  </span>{" "}
                </div>
              </div>
            </KnowledgeCheckQuestion>
          }
          rightContentStyle={{
            gridRow: "span 3",
          }}
          rightContent={
            <div className="md:row-span-2">
              {
                <FormHeader
                  text={
                    hybridMHPQuestion === 1
                      ? lang === "EN"
                        ? "IBS Distribution Graph"
                        : lang === "FR"
                        ? "Graphique de distribution IBS"
                        : lang === "PT"
                        ? "Gráfico de distribuição IBS"
                        : ""
                      : ""
                  }
                />
              }
              {hybridMHPQuestion === 1 && (
                <ImageContainer
                  className="pb-0 pt-0"
                  id="1"
                  label={
                    lang === "EN"
                      ? "Microhaplotype Match Probability - Sibling Clones (0.5 IBD)"
                      : lang === "FR"
                      ? "Probabilité de correspondance des microhaplotypes - Clones frères (0,5 IBD)"
                      : lang === "PT"
                      ? "Probabilidade de correspondência de microhaplótipos - Clones irmãos (0,5 IBD)"
                      : ""
                  }
                  path="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD0.5.svg"
                />
              )}
              <QuestionResponseText
                complete={completion[phase2] || false}
                key={hybridMHPQuestion}
                trigger={hybridMHPQuestion !== null}
                visible={hybridMHPQuestion !== null}
                content={
                  lang === "EN" ? (
                    <div
                      className={`mt-8 text-pretty p-4 [fontSize:15px] md:p-6 md:px-8 ${
                        hybridMHPQuestion !== 1
                          ? "text-pretty bg-microRed/10"
                          : "text-pretty bg-interactiveBlue/10 dark:bg-zinc-900/50 dark:text-emerald-400"
                      }`}
                    >
                      {hybridMHPQuestion === 0 && (
                        <p>
                          There would have to be an extraordinarily unlikely
                          number of mutations or genotyping errors to allow for
                          related clones to have 0 or close to 0 matches,
                          therefore it is not reasonable to think that related
                          clones would have 0 matches in this instance.
                          {/* Since we know the clones are related, unless there are
                        an extraordinarily unlikely number of mutations and
                        genotyping errors, it is not reasonable to think that
                        related clones would have 0 matches in this instance. */}
                          {/* Microhaplotypes, just like SNPs, in the related half of
                      the genome should always match perfectly, unless there are
                      mutations or genotyping error. However, since matches in
                      the unrelated part are random, the overall number of
                      matches can vary. */}
                        </p>
                      )}
                      {hybridMHPQuestion === 1 && (
                        <div>
                          <p>
                            Microhaplotypes, just like SNPs, in the related half
                            of the genome should always match perfectly, unless
                            there are mutations or genotyping errors. Since
                            matches in the unrelated part are random, the
                            overall number of matches can vary, but should be
                            fewer than with your less diverse SNP loci from
                            before.
                          </p>
                          <p className="mt-4">
                            Most of the time, we expect to see somewhere between
                            6 and 8 matches, but we may get 9/12 about 2% of the
                            time. Unlike with SNPs, we are very unlikely to see
                            10 or more matches - less than 0.3% of the time.
                          </p>
                        </div>
                      )}
                      {hybridMHPQuestion === 2 && (
                        <p>
                          While it is technically possible for sibling clones
                          (0.5 IBD) to have close to 100% matches, it is
                          extremely unlikely. In our example of 12 loci, of
                          which at least 6 should match because of their shared
                          ancestry, the likelihood of the other 6 matching would
                          be less than 4 in one million!
                        </p>
                      )}
                    </div>
                  ) : lang === "FR" ? (
                    <div
                      className={`mt-8 text-pretty p-4 [fontSize:15px] md:p-6 md:px-8 ${
                        hybridMHPQuestion !== 1
                          ? "text-pretty bg-microRed/10"
                          : "text-pretty bg-interactiveBlue/10 dark:bg-zinc-900/50 dark:text-emerald-400"
                      }`}
                    >
                      {hybridMHPQuestion === 0 && (
                        <p>
                          Il faudrait un nombre extraordinairement improbable de
                          mutations ou d'erreurs de génotypage pour permettre à
                          des clones apparentés d'avoir 0 ou près de 0
                          correspondance, il n'est donc pas raisonnable de
                          penser que des clones apparentés auraient 0
                          correspondance dans ce cas.
                        </p>
                      )}
                      {hybridMHPQuestion === 1 && (
                        <div>
                          <p>
                            Les microhaplotypes, tout comme les SNP, dans la
                            moitié apparentée du génome doivent toujours
                            correspondre parfaitement, à moins qu'il n'y ait des
                            mutations ou des erreurs de génotypage. Étant donné
                            que les correspondances dans la partie non
                            apparentée sont aléatoires, le nombre total de
                            correspondances peut varier, mais devrait être
                            inférieur à celui de vos loci SNP moins diversifiés
                            d'avant.
                          </p>
                          <p className="mt-4">
                            La plupart du temps, nous nous attendons à voir
                            entre 6 et 8 correspondances, mais nous pouvons
                            obtenir 9/12 environ 2 % du temps. Contrairement aux
                            SNP, il est très improbable que nous voyions
                            10 correspondances ou plus - moins de 0,3 % du
                            temps.
                          </p>
                        </div>
                      )}
                      {hybridMHPQuestion === 2 && (
                        <p>
                          Bien qu'il soit techniquement possible pour des clones
                          frères (0,5 IBD) d'avoir près de 100 % de
                          correspondances, cela est extrêmement improbable. Dans
                          notre exemple de 12 loci, dont au moins 6 devraient
                          correspondre en raison de leur ascendance commune, la
                          probabilité que les 6 autres correspondent serait
                          inférieure à 4 sur un million !
                        </p>
                      )}
                    </div>
                  ) : lang === "PT" ? (
                    <div
                      className={`mt-8 text-pretty p-4 [fontSize:15px] md:p-6 md:px-8 ${
                        hybridMHPQuestion !== 1
                          ? "text-pretty bg-microRed/10"
                          : "text-pretty bg-interactiveBlue/10 dark:bg-zinc-900/50 dark:text-emerald-400"
                      }`}
                    >
                      {hybridMHPQuestion === 0 && (
                        <p>
                          Teria de haver um número extraordinariamente
                          improvável de mutações ou erros de genotipagem para
                          permitir que clones relacionados tivessem 0 ou perto
                          de 0 correspondências, pelo que não é razoável pensar
                          que clones relacionados teriam 0 correspondências
                          neste caso.
                        </p>
                      )}
                      {hybridMHPQuestion === 1 && (
                        <div>
                          <p>
                            Os microhaplótipos, tal como os SNPs, na metade
                            relacionada do genoma devem corresponder sempre
                            perfeitamente, a menos que existam mutações ou erros
                            de genotipagem. Uma vez que as correspondências na
                            parte não relacionada são aleatórias, o número total
                            de correspondências pode variar, mas deve ser
                            inferior ao dos seus loci SNP menos diversos de
                            antes.
                          </p>
                          <p className="mt-4">
                            Na maioria das vezes, esperamos ver entre 6 e 8
                            correspondências, mas podemos obter 9/12 cerca de 2%
                            das vezes. Ao contrário dos SNPs, é muito improvável
                            que vejamos 10 ou mais correspondências - menos de
                            0,3% das vezes.
                          </p>
                        </div>
                      )}
                      {hybridMHPQuestion === 2 && (
                        <p>
                          Embora seja tecnicamente possível que clones irmãos
                          (0,5 IBD) terem perto de 100% de correspondências,
                          isso é extremamente improvável. No nosso exemplo de
                          12 loci, dos quais pelo menos 6 devem corresponder
                          devido à sua ascendência partilhada, a probabilidade
                          de os outros 6 corresponderem seria inferior a 4 em um
                          milhão!
                        </p>
                      )}
                    </div>
                  ) : (
                    ""
                  )
                }
              />
              {/* <KnowledgeCheckQuestion
                answers={[]}
                callback={() => {}}
                hasAnswer={false}
                questionIdx={1}
                headerText="Both of the previous comparisons had the same IBD – 0.5 – since the hybrid clone is 50% related to each parent. What do you think you would find if you did similar experiments looking at other, similarly related clones?"
              /> */}
            </div>
          }
        />
        // <MultiRowLayout
        //   topLeft={
        //     <div>
        //       <FormHeader text="Questions" />
        //       <KnowledgeCheckQuestion
        //         callback={(questionIdx, answerIdx) => {
        //           if (hybridMHPQuestion === answerIdx) {
        //             setHybridMHPQuestion(null);
        //           } else {
        //             setHybridMHPQuestion(answerIdx);
        //           }
        //           // setPartSixPairwiseQuestions({
        //           //   ...partSixPairwiseQuestions,
        //           //   [JSON.stringify([2, 4])]: {
        //           //     ...partSixPairwiseQuestions[JSON.stringify([2, 4])],
        //           //     4:
        //           //       partSixPairwiseQuestions[JSON.stringify([2, 4])][3] !==
        //           //       answerIdx
        //           //         ? answerIdx
        //           //         : null,
        //           //   },
        //           // });
        //         }}
        //         hasAnswer={hybridMHPQuestion === 1}
        //         headerText="Both of the previous comparisons had the same IBD - 0.5 - since the hybrid clone is 50% related to each parent. Did you get the same IBS result each time? What do you think you would find if you did similar experiments looking at other, similarly related clones?"
        //         classNames={{
        //           answersContainer:
        //             "grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-4 mt-4",
        //           answers: "w-4 md:w-3 lg:w-4",
        //         }}
        //         questionIdx={1}
        //         answers={[
        //           {
        //             checked: hybridMHPQuestion === 0,
        //             correct: false,
        //             index: 0,
        //             text: "0, or close to 0 matches",
        //           },
        //           {
        //             checked: hybridMHPQuestion === 1,
        //             correct: true,
        //             index: 1,
        //             text: "Approximately 50% matches",
        //           },
        //           {
        //             checked: hybridMHPQuestion === 2,
        //             correct: false,
        //             index: 2,
        //             text: "100%, or close to 100% matches",
        //           },
        //         ]}
        //       >
        //         <div className="grid origin-top scale-90 pt-2 [grid-template-columns:1fr_auto] lg:scale-75">
        //           <div></div>
        //           <div className="text-center">
        //             <span className="text-sm font-bold">IBS</span>
        //           </div>
        //           <div className="w-full">
        //             <MicrohaplotypeComparator activeCombo={[1, 4]} />
        //           </div>

        //           <div className="col-start-2  self-center px-1 md:px-4">
        //             <span className="text-sm font-bold">
        //               {(
        //                 (pairwiseCombos[1][4].filter((val) => {
        //                   return val;
        //                 }).length /
        //                   12) *
        //                 100
        //               ).toFixed(2)}
        //               %
        //             </span>{" "}
        //           </div>
        //           <div className="w-full">
        //             <MicrohaplotypeComparator activeCombo={[2, 4]} />
        //           </div>
        //           <div className="col-start-2  self-center px-1 md:px-4">
        //             <span className="text-sm font-bold">
        //               {(
        //                 (pairwiseCombos[2][4].filter((val) => {
        //                   return val;
        //                 }).length /
        //                   12) *
        //                 100
        //               ).toFixed(2)}
        //               %
        //             </span>{" "}
        //           </div>
        //         </div>
        //       </KnowledgeCheckQuestion>
        //     </div>
        //   }
        //   topRight={
        //     <div className="md:row-span-2">
        //       {
        //         <FormHeader
        //           text={hybridMHPQuestion === 1 ? "IBS Distribution Graph" : ""}
        //         />
        //       }
        //       {hybridMHPQuestion === 1 && (
        //         <ImageContainer
        //           className="pb-0 pt-0"
        //           id="1"
        //           label="Microhaplotype Match Probability - Sibling Clones (0.5 IBD)"
        //           path="/assets/M5_sluething_histogram_MHs_MOI1_IBD0.5.svg"
        //         />
        //       )}
        //       <QuestionResponseText
        //         complete={completion[phase2] || false}
        //         key={hybridMHPQuestion}
        //         trigger={hybridMHPQuestion !== null}
        //         visible={hybridMHPQuestion !== null}
        //         content={
        //           <div
        //             className={`mt-8 text-pretty p-4 [fontSize:15px] md:p-6 md:px-8 ${
        //               hybridMHPQuestion !== 1
        //                 ? "bg-microRed/10"
        //                 : "bg-primaryBlue/10"
        //             }`}
        //           >
        //             {hybridMHPQuestion === 0 && (
        //               <p>
        //                 There would have to be an extraordinarily unlikely
        //                 number of mutations or genotyping errors to allow for
        //                 related clones to have 0 or close to 0 matches,
        //                 therefore it is not reasonable to think that related
        //                 clones would have 0 matches in this instance.
        //                 {/* Since we know the clones are related, unless there are
        //                 an extraordinarily unlikely number of mutations and
        //                 genotyping errors, it is not reasonable to think that
        //                 related clones would have 0 matches in this instance. */}
        //                 {/* Microhaplotypes, just like SNPs, in the related half of
        //               the genome should always match perfectly, unless there are
        //               mutations or genotyping error. However, since matches in
        //               the unrelated part are random, the overall number of
        //               matches can vary. */}
        //               </p>
        //             )}
        //             {hybridMHPQuestion === 1 && (
        //               <div>
        //                 <p>
        //                   Microhaplotypes, just like SNPs, in the related half
        //                   of the genome should always match perfectly, unless
        //                   there are mutations or genotyping errors. However,
        //                   since matches in the unrelated part are random, the
        //                   overall number of matches can vary.
        //                 </p>
        //                 <p className="mt-4">
        //                   Most of the time, we expect to see somewhere between 6
        //                   and 8 matches, but we may get 9/12 about 2% of the
        //                   time. Unlike with SNPs, we are very unlikely to see 10
        //                   or more matches - less than 0.3% of the time.
        //                 </p>
        //               </div>
        //             )}
        //             {hybridMHPQuestion === 2 && (
        //               <p>
        //                 While it is technically possible for sibling clones (0.5
        //                 IBD) to have close to 100% matches, it is extremely
        //                 unlikely. In our example of 12 loci, of which at least 6
        //                 should match because of their shared ancestry, the
        //                 likelihood of the other 6 matching would be less than 4
        //                 in one million!
        //               </p>
        //             )}
        //           </div>
        //         }
        //       />
        //       {/* <KnowledgeCheckQuestion
        //         answers={[]}
        //         callback={() => {}}
        //         hasAnswer={false}
        //         questionIdx={1}
        //         headerText="Both of the previous comparisons had the same IBD – 0.5 – since the hybrid clone is 50% related to each parent. What do you think you would find if you did similar experiments looking at other, similarly related clones?"
        //       /> */}
        //     </div>
        //   }
        // ></MultiRowLayout>
      )}
      {phase2 === 33 && <IBSWithMicro lang={lang} />}
      {phase2 === 33.5 && (
        <div className="grid @3xl:grid-cols-2">
          <div className="pt-8 text-center text-sm">
            <label
              style={{
                animationDelay: "4000ms",
              }}
              className=" font-bold [fontSize:15px]"
            >
              {lang === "EN"
                ? `SNP Match Probability (0%, 50%, 100% IBD)`
                : lang === "FR"
                ? `Probabilité de correspondance SNP (0 %, 50 %, 100 % IBD)`
                : lang === "PT"
                ? `Probabilidade de correspondência de SNP (0%, 50%, 100% IBD)`
                : ""}
            </label>
            <Image
              className="mx-auto mix-blend-multiply dark:opacity-80 dark:mix-blend-screen dark:hue-rotate-180 dark:invert"
              width={600}
              height={400}
              src="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
              alt={
                lang === "EN"
                  ? "SNP Match Probability (0%, 50%, 100% IBD)"
                  : lang === "FR"
                  ? "Probabilité de correspondance SNP (0 %, 50 %, 100 % IBD)"
                  : lang === "PT"
                  ? "Probabilidade de correspondência de SNP (0%, 50%, 100% IBD)"
                  : ""
              }
            />
          </div>

          <div className={"fadeImageOut/ pt-8 text-center text-sm"}>
            <label
              style={{
                animationDelay: "4000ms",
              }}
              className=" font-bold [fontSize:15px]"
            >
              {lang === "EN"
                ? `Microhaplotype Match Probability (0%, 50%, 100% IBD)`
                : lang === "FR"
                ? `Probabilité de correspondance des microhaplotypes (0 %, 50 %, 100 % IBD)`
                : lang === "PT"
                ? `Probabilidade de correspondência de microhaplótipos (0%, 50%, 100% IBD)`
                : ""}{" "}
            </label>
            <Image
              className="mix-blend-multiply/ mx-auto dark:opacity-80 dark:mix-blend-screen dark:hue-rotate-180 dark:invert"
              width={600}
              height={400}
              src="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD_0_0.5_1_together.svg"
              alt={
                lang === "EN"
                  ? "Microhaplotype Match Probability (0%, 50%, 100% IBD)"
                  : lang === "FR"
                  ? "Probabilité de correspondance des microhaplotypes (0 %, 50 %, 100 % IBD)"
                  : lang === "PT"
                  ? "Probabilidade de correspondência de microhaplótipos (0%, 50%, 100% IBD)"
                  : ""
              }
            />
          </div>
          <div
            style={{
              animationDelay: "3000ms",
            }}
            className=" col-span-full mt-12"
          >
            <QuestionResponseText
              visible={true}
              text={
                lang === "EN"
                  ? `
              By increasing the resolution of your genotyping, you can more
              easily tell which parasites are related by ancestry and therefore
              by transmission. You also now have a good sense of what you
              observe in terms of IBS means in terms of the true relatedness of
              the parasites. You are almost ready to answer your program's
              questions about these concerning outbreaks! You have just one more
              thing to do first…
            `
                  : lang === "FR"
                  ? `
              En augmentant la résolution de votre génotypage, vous pouvez plus
              facilement déterminer quels parasites sont liés par l'ascendance et
              donc par la transmission. Vous avez également maintenant une bonne
              idée de ce que vous observez en termes d'IBS signifie en termes de
              parenté réelle des parasites. Vous êtes presque prêt à répondre aux
              questions de votre programme concernant ces épidémies inquiétantes !
              Vous n'avez plus qu'une chose à faire...
            `
                  : lang === "PT"
                  ? `
              Ao aumentar a resolução da sua genotipagem, pode mais facilmente
              dizer quais os parasitas que estão relacionados por ascendência e,
              portanto, por transmissão. Também tem agora uma boa noção do que
              observa em termos de IBS significa em termos da verdadeira relação
              dos parasitas. Está quase pronto para responder às perguntas do seu
              programa sobre estes surtos preocupantes! Só tem mais uma coisa a
              fazer primeiro…
            `
                  : ""
              }
            />
          </div>
        </div>
      )}
      <PartSixControlBoard direction={"forwards"} />
    </div>
  );
}

// first phase, show genotypes -- second, show graph
