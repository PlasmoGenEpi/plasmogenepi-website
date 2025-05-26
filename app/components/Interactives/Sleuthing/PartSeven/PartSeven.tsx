import {
  partSevenCompletionAtom,
  partSixCloneRowsAtom,
  partSixCloneRowsMHPsAtom,
  partSixCompletionAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import Genotypes, { P6Step2QuestionsAtom } from "../PartSix/Phases/Genotypes";
import StandardLayout from "../../Shared/misc/StandardLayout";
import Image from "next/image";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { atom, useAtom, useAtomValue } from "jotai";
import { partSixPrompts } from "../PartSix/partSixPrompts";
import PositiveControlBoard from "../../Shared/PositiveControlBoard/PositiveControlBoard";
import PartSevenControlBoard from "./PartSevenControlBoard";
import { partSevenPrompts } from "./partSevenPrompts";
import PositiveControls from "./Phases/PositiveControls";
import MultiRowLayout from "../../Shared/misc/MultiRowLayout";
import ImageContainer from "../../Shared/misc/ImageContainer";
import FormHeader from "../../Shared/misc/FormHeader";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";
import GenotypeComposition from "../PartEight/Genotypes/GenotypeComposition";
import RedBlueGenotype from "./Genotypes/RedBlueGenotype";
import GenotypeComparator from "../PartSix/Comparators/MHPs/GenotypeComparator";
import {
  P6CloneRowButtonColors,
  P6CloneRowColors,
} from "../PartSix/CloneRows/P6MHPCloneRows";
import CloneRow from "../../Shared/CloneRow/CloneRow";
import SquareMicrohaplotype from "../../Shared/Microhaplotypes/SquareMicrohaplotype";
import { ReactElement, useEffect } from "react";
import { atomWithStorage } from "jotai/utils";
// import {
//   findFirstFocusableElement,
//   getUniqueValuesArray,
// } from "@/helpers/helpers";
import CompletePage from "../../Shared/misc/CompletePage";
import { usePrevious } from "@/app/components/hooks";
import { findFirstFocusableElement, getUniqueValuesArray } from "../../helpers";
import InteractivePrimaryLayout from "../../Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export const selectedClonesAtom = atomWithStorage<{
  1: null | number;
  2: null | number;
}>("selectedClonesAtom", {
  1: null,
  2: null,
});

const cloneControlDivMap: { [key: number]: ReactElement } = {
  0: (
    <label
      htmlFor={`kc-id-0`}
      className={`aspect-square h-12 rounded-full ${P6CloneRowButtonColors[1]} flex items-center justify-center bg-gradient-radial from-[white_10%]`}
    >
      <span className="block translate-y-[3px] text-lg font-bold">1</span>
    </label>
  ),
  1: (
    <label htmlFor={`kc-id-1`}>
      <div className="mr-6 flex aspect-square h-8 items-center justify-center rounded-full border border-microRed bg-cloneRed">
        {/* <span className="block translate-y-0.5 text-sm font-bold">1</span> */}
      </div>
      <div className="ml-6 flex aspect-square h-8 items-center justify-center rounded-full border border-microBlue bg-cloneBlue">
        {/* <span className="block translate-y-0.5 text-sm font-bold">2</span> */}
      </div>
    </label>
  ),
  2: (
    <label
      htmlFor={`kc-id-2`}
      className={`aspect-square h-12 rounded-full ${P6CloneRowButtonColors[2]} flex items-center justify-center bg-gradient-radial from-[white_10%]`}
    >
      <span className="block translate-y-[3px] text-lg font-bold">2</span>
    </label>
  ),
  3: (
    <label htmlFor={`kc-id-3`}>
      <div className="mr-6 aspect-square h-8 rounded-full border border-microRed bg-cloneRed"></div>
      <div className="ml-6 aspect-square h-8 rounded-full border border-microGreen bg-cloneGreen"></div>
    </label>
  ),
  4: (
    <label
      htmlFor={`kc-id-4`}
      className={`aspect-square h-12 rounded-full ${P6CloneRowButtonColors[3]} flex items-center justify-center bg-gradient-radial from-[white_10%]`}
    >
      <span className="block translate-y-[3px] text-lg font-bold">3</span>
    </label>
  ),
  5: (
    <label htmlFor={`kc-id-5`}>
      <div className="mr-6 aspect-square h-8 rounded-full border border-microBlue bg-cloneBlue"></div>
      <div className="ml-6 aspect-square h-8 rounded-full border border-microGreen bg-cloneGreen"></div>
    </label>
  ),
  6: (
    <label
      htmlFor={`kc-id-6`}
      className="clone-red-to-blue border-red-blue-rounded flex aspect-square h-12 items-center justify-center rounded-full bg-gradient-to-r"
    >
      <span className="block -translate-x-0.5 translate-y-[3px] text-lg font-bold">
        4
      </span>
    </label>
  ),
};

export default function PartSeven({ lang }: { lang: "EN" | "FR" | "PT" }) {
  const [phase, setPhase] = useAtom(phase2Atom);
  const [questions, setQuestions] = useAtom(P6Step2QuestionsAtom);
  const completion = useAtomValue(partSevenCompletionAtom);
  const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);
  const [selectedClones, setSelectedClones] = useAtom(selectedClonesAtom);
  const forwards = usePrevious(phase, 1).current <= phase;

  useEffect(() => {
    if (phase >= 2 && !completion[phase]) {
      let x: HTMLElement | undefined = findFirstFocusableElement(
        document.getElementById("form-interactive"),
      );
      x?.focus();
    }
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // if (phase === 18) {
  //   return (
  //     <div>
  //       <CompletePage part={2} />;
  //       <PartSevenControlBoard />
  //     </div>
  //   );
  // }

  return (
    <div>
      <InteractivePrompt
        lang={lang}
        complete={completion[phase]}
        title={partSevenPrompts[phase]?.title[lang]}
        instructions={partSevenPrompts[phase]?.instructions[lang]}
      />
      {phase <= 3 && phase > 0 && <PositiveControls lang={lang} />}
      {phase >= 4 && phase < 6 && (
        <Genotypes currentClone={3} first={1} second={2} lang={lang} />
      )}
      {phase >= 6 && phase <= 7 && (
        <Genotypes currentClone={1} first={2} second={3} lang={lang} />
      )}
      {phase > 7 && phase <= 8 && (
        <InteractivePrimaryLayout
          leftHeader={
            lang === "EN"
              ? "IBS Probability"
              : lang === "FR"
              ? "Probabilité IBS"
              : "Probabilidade IBS"
          }
          rightHeader={
            lang === "EN"
              ? "Questions"
              : lang === "FR"
              ? "Questions"
              : "Questões"
          }
          leftContent={
            <ImageContainer
              className="fadeIn500"
              id="moi-1-2"
              label={
                lang === "EN"
                  ? "IBS for unrelated infections"
                  : lang === "FR"
                  ? "IBS pour les infections non liées"
                  : lang === "PT"
                  ? "IBS para infecções não relacionadas"
                  : ""
              }
              path="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1.1_vs1.2_IBD_0.svg"
            />
          }
          rightContent={
            <div>
              <KnowledgeCheckQuestion
                questionIdx={1}
                classNames={{
                  answersContainer: "grid gap-4 mt-4",
                }}
                hasAnswer={questions[7] === 2}
                callback={(questionIdx, answerIdx) => {
                  if (questions[7] === answerIdx) {
                    setQuestions({ ...questions, 7: null });
                  } else {
                    setQuestions({ ...questions, 7: answerIdx });
                  }
                }}
                answers={[
                  {
                    checked: questions[7] === 0,
                    correct: false,
                    index: 0,
                    text:
                      lang === "EN"
                        ? "IBS would be lower."
                        : lang === "FR"
                        ? "L'IBS serait plus faible."
                        : lang === "PT"
                        ? "O IBS seria menor."
                        : "",
                  },
                  {
                    checked: questions[7] === 1,
                    correct: false,
                    index: 1,
                    text:
                      lang === "EN"
                        ? "IBS would be the same."
                        : lang === "FR"
                        ? "L'IBS serait le même."
                        : lang === "PT"
                        ? "O IBS seria o mesmo."
                        : "",
                  },
                  {
                    checked: questions[7] === 2,
                    correct: true,
                    index: 2,
                    text:
                      lang === "EN"
                        ? "IBS would be higher."
                        : lang === "FR"
                        ? "L'IBS serait plus élevé."
                        : lang === "PT"
                        ? "O IBS seria maior."
                        : "",
                  },
                ]}
                headerText={
                  lang === "EN"
                    ? "What do you think you might see if MOI in one or both samples was even higher, but still contained no related parasites between the two samples?"
                    : lang === "FR"
                    ? "Que pensez-vous que vous pourriez voir si l'IMO dans un ou les deux échantillons était encore plus élevé, mais ne contenait toujours aucun parasite apparenté entre les deux échantillons ?"
                    : lang === "PT"
                    ? "O que você acha que poderia ver se o MOI em uma ou ambas as amostras fosse ainda maior, mas ainda não contivesse parasitas relacionados entre as duas amostras?"
                    : ""
                }
              />
              <QuestionResponseText
                className="mt-8"
                complete={completion[phase] || false}
                trigger={questions[7] === 2}
                visible={questions[7] === 2}
                text={
                  lang === "EN"
                    ? "Correct, IBS would be higher. This is for the same reason that IBS is likely to be higher in polyclonal versus monoclonal samples – there may be more alleles present to potentially match by chance. This histogram shows the number of loci you would expect to see with matching alleles (IBS) if there are no related parasites between the two samples."
                    : lang === "FR"
                    ? "Correct, l'IBS serait plus élevé. C'est pour la même raison que l'IBS est susceptible d'être plus élevé dans les échantillons polyclonaux que dans les échantillons monoclonaux : il peut y avoir plus d'allèles présents qui peuvent potentiellement correspondre par hasard. Cet histogramme montre le nombre de locus que vous vous attendriez à voir avec des allèles correspondants (IBS) s'il n'y a pas de parasites apparentés entre les deux échantillons."
                    : lang === "PT"
                    ? "Correto, o IBS seria maior. Isso ocorre pelo mesmo motivo pelo qual o IBS provavelmente será maior em amostras policlonais versus monoclonais – pode haver mais alelos presentes para potencialmente corresponder por acaso. Este histograma mostra o número de loci que você esperaria ver com alelos correspondentes (IBS) se não houver parasitas relacionados entre as duas amostras."
                    : ""
                }
              />
            </div>
          }
        />
        // <MultiRowLayout
        //   topLeft={
        //     <div>
        //       <FormHeader text="IBS Probability" />

        // <ImageContainer
        //   className="fadeIn500"
        //   id="moi-1-2"
        //   label="IBS Distribution - MOI 1 vs MOI 2"
        //   path="/assets/M5_sluething_histogram_MHs_MOI1.1_vs1.2_IBD_0 (1).svg"
        // />
        // </div>
        //   }
        //   topRight={
        //     <div>
        //       <FormHeader text="Questions" />
        //   <KnowledgeCheckQuestion
        //     questionIdx={1}
        //     classNames={{
        //       answersContainer: "grid gap-4 mt-4",
        //     }}
        //     hasAnswer={questions[7] === 2}
        //     callback={(questionIdx, answerIdx) => {
        //       if (questions[7] === answerIdx) {
        //         setQuestions({ ...questions, 7: null });
        //       } else {
        //         setQuestions({ ...questions, 7: answerIdx });
        //       }
        //     }}
        //     answers={[
        //       {
        //         checked: questions[7] === 0,
        //         correct: false,
        //         index: 0,
        //         text: "IBS would be lower.",
        //       },
        //       {
        //         checked: questions[7] === 1,
        //         correct: false,
        //         index: 1,
        //         text: "IBS would be the same.",
        //       },
        //       {
        //         checked: questions[7] === 2,
        //         correct: true,
        //         index: 2,
        //         text: "IBS would be higher.",
        //       },
        //     ]}
        //     headerText="What do you think you might see if MOI in one or both samples was even higher, but still contained no related parasites between the two samples?"
        //   />
        //   <QuestionResponseText
        //     className="mt-8"
        //     complete={completion[phase] || false}
        //     trigger={questions[7] === 2}
        //     visible={questions[7] === 2}
        //     text="Correct, IBS would be higher. This is for the same reason that IBS is likely to be higher in polyclonal versus monoclonal samples – there may be more alleles present to potentially match by chance. This histogram shows the number of loci you would expect to see with matching alleles (IBS) if there are no related parasites between the two samples."
        //   />
        // </div>
        //   }
        // ></MultiRowLayout>
      )}
      {phase > 8 && phase <= 9 && (
        <InteractivePrimaryLayout
          leftHeader={
            lang === "EN"
              ? "IBS Probability"
              : lang === "FR"
              ? "Probabilité IBS"
              : "Probabilidade IBS"
          }
          leftContent={
            <ImageContainer
              className="fadeIn500"
              id="moi-varies"
              label={
                lang === "EN"
                  ? "IBS Distribution for Different MOIs"
                  : lang === "FR"
                  ? "Distribution IBS pour différents MOI"
                  : lang === "PT"
                  ? "Distribuição IBS para diferentes MOIs"
                  : "IBS Distribution for Different MOIs"
              }
              path="/InteractiveAssets/M5_sluething_histogram_MHs_MOIvaries_IBD_0.svg"
            />
          }
          rightHeader={
            lang === "EN"
              ? "Questions"
              : lang === "FR"
              ? "Questions"
              : "Questões"
          }
          rightContent={
            <div>
              <KnowledgeCheckQuestion
                questionIdx={1}
                classNames={{
                  answersContainer: "grid gap-4 mt-4",
                }}
                hasAnswer={
                  !questions[8][0] &&
                  questions[8][1] &&
                  questions[8][2] &&
                  questions[8][3]
                }
                callback={(questionIdx, answerIdx) => {
                  setQuestions({
                    ...questions,
                    8: {
                      ...questions[8],
                      [answerIdx]: !questions[8][answerIdx],
                    },
                  });
                }}
                answers={[
                  {
                    checked: questions[8][0] ?? false,
                    correct: false,
                    index: 0,
                    text:
                      lang === "EN"
                        ? " Give up – it will be impossible to tell."
                        : lang === "FR"
                        ? " Abandonner – il sera impossible de le dire."
                        : lang === "PT"
                        ? " Desistir – será impossível dizer."
                        : " Give up – it will be impossible to tell.",
                  },
                  {
                    checked: questions[8][1] ?? false,
                    correct: true,
                    index: 1,
                    text:
                      lang === "EN"
                        ? "Increase the number of loci you genotype."
                        : lang === "FR"
                        ? "Augmenter le nombre de loci que vous génotypez."
                        : lang === "PT"
                        ? "Aumentar o número de loci que você genotipa."
                        : "Increase the number of loci you genotype.",
                  },
                  {
                    checked: questions[8][2] ?? false,
                    correct: true,
                    index: 2,
                    text:
                      lang === "EN"
                        ? "Increase the diversity of loci you genotype."
                        : lang === "FR"
                        ? "Augmenter la diversité des loci que vous génotypez."
                        : lang === "PT"
                        ? "Aumentar a diversidade de loci que você genotipa."
                        : "Increase the diversity of loci you genotype.",
                  },
                  {
                    checked: questions[8][3] ?? false,
                    correct: true,
                    index: 3,
                    text:
                      lang === "EN"
                        ? "Use more powerful statistical methods that directly estimate IBD instead of using IBS."
                        : lang === "FR"
                        ? "Utiliser des méthodes statistiques plus puissantes qui estiment directement l'IBD au lieu d'utiliser l'IBS."
                        : lang === "PT"
                        ? "Use métodos estatísticos mais poderosos que estimam diretamente o IBD em vez de usar o IBS."
                        : "Use more powerful statistical methods that directly estimate IBD instead of using IBS.",
                  },
                ]}
                headerText={
                  lang === "EN"
                    ? "What do you think you could do to better distinguish related from unrelated infections as MOI increases? (choose all that apply)"
                    : lang === "FR"
                    ? "Que pensez-vous que vous pourriez faire pour mieux distinguer les infections apparentées des infections non apparentées à mesure que l'IMO augmente ? (choisissez toutes les réponses appropriées)"
                    : lang === "PT"
                    ? "O que você acha que poderia fazer para distinguir melhor as infecções relacionadas de não relacionadas à medida que o MOI aumenta? (escolha todas as opções aplicáveis)"
                    : "What do you think you could do to better distinguish related from unrelated infections as MOI increases? (choose all that apply)"
                }
              />
              <QuestionResponseText
                className="mt-8"
                complete={completion[phase] || false}
                trigger={
                  !questions[8][0] &&
                  questions[8][1] &&
                  questions[8][2] &&
                  questions[8][3]
                }
                visible={
                  !questions[8][0] &&
                  questions[8][1] &&
                  questions[8][2] &&
                  questions[8][3]
                }
                text={
                  lang === "EN"
                    ? "In situations where MOI is higher, a larger, more diverse genotyping panel can help provide increased resolution. In addition, statistical methods specifically designed to estimate IBD from polyclonal infections are available and provide accurate estimates as well as statistical significance.  Fortunately, for the cases you are investigating this exercise, transmission is relatively low and you should be able to figure out what is going on by calculating IBS using your panel of 12 microhaplotypes."
                    : lang === "FR"
                    ? "Dans les situations où l'IMO est plus élevé, un panel de génotypage plus large et plus diversifié peut aider à fournir une résolution accrue. De plus, des méthodes statistiques spécialement conçues pour estimer l'IBD à partir d'infections polyclonales sont disponibles et fournissent des estimations précises ainsi qu'une signification statistique. Heureusement, pour les cas que vous étudiez dans cet exercice, la transmission est relativement faible et vous devriez être en mesure de comprendre ce qui se passe en calculant l'IBS à l'aide de votre panel de 12 microhaplotypes."
                    : lang === "PT"
                    ? "Em situações em que o MOI é maior, um painel de genotipagem maior e mais diversificado pode ajudar a fornecer maior resolução. Além disso, métodos estatísticos especificamente projetados para estimar o IBD a partir de infecções policlonais estão disponíveis e fornecem estimativas precisas, bem como significância estatística. Felizmente, para os casos que você está investigando neste exercício, a transmissão é relativamente baixa e você deve ser capaz de descobrir o que está acontecendo calculando o IBS usando seu painel de 12 microhaplótipos."
                    : "In situations where MOI is higher, a larger, more diverse genotyping panel can help provide increased resolution. In addition, statistical methods specifically designed to estimate IBD from polyclonal infections are available and provide accurate estimates as well as statistical significance.  Fortunately, for the cases you are investigating this exercise, transmission is relatively low and you should be able to figure out what is going on by calculating IBS using your panel of 12 microhaplotypes."
                }
              />
            </div>
          }
        />
        // <MultiRowLayout
        //   topLeft={
        //     <div>
        //       <FormHeader text="IBS Probability" />

        // <ImageContainer
        //   className="fadeIn500"
        //   id="moi-varies"
        //   label="IBS Distribution - MOI 1 vs MOI 2"
        //   path="/assets/M5_sluething_histogram_MHs_MOIvaries_IBD_0.svg"
        // />
        //     </div>
        //   }
        //   topRight={
        //     <div>
        //       <FormHeader text="Questions" />
        //   <KnowledgeCheckQuestion
        //     questionIdx={1}
        //     classNames={{
        //       answersContainer: "grid gap-4 mt-4",
        //     }}
        //     hasAnswer={
        //       !questions[8][0] &&
        //       questions[8][1] &&
        //       questions[8][2] &&
        //       questions[8][3]
        //     }
        //     callback={(questionIdx, answerIdx) => {
        //       setQuestions({
        //         ...questions,
        //         8: {
        //           ...questions[8],
        //           [answerIdx]: !questions[8][answerIdx],
        //         },
        //       });
        //     }}
        //     answers={[
        //       {
        //         checked: questions[8][0] ?? false,
        //         correct: false,
        //         index: 0,
        //         text: " Give up – it will be impossible to tell.",
        //       },
        //       {
        //         checked: questions[8][1] ?? false,
        //         correct: true,
        //         index: 1,
        //         text: "Increase the number of loci you genotype.",
        //       },
        //       {
        //         checked: questions[8][2] ?? false,
        //         correct: true,
        //         index: 2,
        //         text: "Increase the diversity of loci you genotype.",
        //       },
        //       {
        //         checked: questions[8][3] ?? false,
        //         correct: true,
        //         index: 3,
        //         text: "Use more powerful statistical methods that directly estimate IBD instead of using IBS.",
        //       },
        //     ]}
        //     headerText="What do you think you could do to better distinguish related from unrelated infections in this situation? (choose all that apply)"
        //   />
        //   <QuestionResponseText
        //     className="mt-8"
        //     complete={completion[phase] || false}
        //     trigger={
        //       !questions[8][0] &&
        //       questions[8][1] &&
        //       questions[8][2] &&
        //       questions[8][3]
        //     }
        //     visible={
        //       !questions[8][0] &&
        //       questions[8][1] &&
        //       questions[8][2] &&
        //       questions[8][3]
        //     }
        //     text="In situations where MOI is higher, a larger, more diverse genotyping panel can help provide increased resolution. In addition, statistical methods specifically designed to estimate IBD from polyclonal infections are available and provide accurate estimates as well as statistical significance.  Fortunately, for the cases you are investigating this exercise, transmission is relatively low and you should be able to figure out what is going on by calculating IBS using your panel of 12 microhaplotypes."
        //   />
        // </div>
        //   }
        // ></MultiRowLayout>
      )}
      {phase >= 10 && phase < 12 && (
        <Genotypes lang={lang} currentClone={1} first={1} second={2} />
      )}

      {phase === 12 && (
        <InteractivePrimaryLayout
          leftHeader={
            phase === 12
              ? lang === "EN"
                ? "Polyclonal Genotype Comparisons"
                : lang === "FR"
                ? "Comparaisons de génotypes polyclonaux"
                : "Comparaisons de génotypes polyclonaux"
              : lang === "EN"
              ? "Questions"
              : lang === "FR"
              ? "Questions"
              : lang === "PT"
              ? "Questões"
              : "Questions"
          }
          rightHeader={
            lang === "EN"
              ? "Transmissions"
              : lang === "FR"
              ? "Transmissions"
              : lang === "PT"
              ? "Transmissões"
              : "Transmissions"
          }
          rightContent={
            <ImageContainer
              className="fadeIn500"
              label=""
              id="a"
              path="/InteractiveAssets/Slide7.png"
            />
          }
          leftContent={
            <div>
              <RedBlueGenotype />
              <div className="mt-4 max-w-[500px] dark:brightness-75">
                <div
                  className={`grid gap-1 font-helvetica transition-all [grid-template-columns:8%_auto]`}
                >
                  <div>
                    <div
                      className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[1]} scale-90`}
                    >
                      <div className="flex aspect-square items-center justify-center rounded-full">
                        <span className="absolute translate-y-[3px] font-bold">
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                  <ol className={`grid h-full grow grid-cols-12 gap-1 p-1`}>
                    {/* {children} */}
                    {cloneRows[1].vals.map((val, idx) => {
                      return (
                        <SquareMicrohaplotype id={val as number} key={idx} />
                      );
                    })}
                  </ol>
                </div>
              </div>{" "}
            </div>
          }
        />
        // <StandardLayout>
        //   <div className="">
        //     <FormHeader
        //       text={
        //         phase === 12 ? "Polyclonal Genotype Comparisons" : "Questions"
        //       }
        //     />
        //     <RedBlueGenotype />
        //     <div className="mt-4 max-w-[500px] dark:brightness-75">
        //       <div
        //         className={`grid gap-1 font-helvetica transition-all [grid-template-columns:8%_auto]`}
        //       >
        //         <div>
        //           <div
        //             className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${P6CloneRowButtonColors[1]} scale-90`}
        //           >
        //             <div className="flex aspect-square items-center justify-center rounded-full">
        //               <span className="absolute translate-y-[3px] font-bold">
        //                 1
        //               </span>
        //             </div>
        //           </div>
        //         </div>
        //         <ol className={`grid h-full grow grid-cols-12 gap-1 p-1`}>
        //           {/* {children} */}
        //           {cloneRows[1].vals.map((val, idx) => {
        //             return (
        //               <SquareMicrohaplotype id={val as number} key={idx} />
        //             );
        //           })}
        //         </ol>
        //       </div>
        //     </div>{" "}
        //   </div>
        //   <div>
        //     <FormHeader text="Transmissions" />
        //     {phase === 12 && (
        // <ImageContainer
        //   className="fadeIn500"
        //   label=""
        //   id="a"
        //   path="/assets/2.3.2.svg"
        // />
        //     )}
        //   </div>
        // </StandardLayout>
      )}
      {phase === 13 && (
        <InteractivePrimaryLayout
          leftHeader={
            lang === "EN"
              ? "Contransmission with Recombination"
              : lang === "FR"
              ? "Cotransmission avec recombinaison"
              : lang === "PT"
              ? "Cotransmissão com recombinação"
              : "Contransmission with Recombination"
          }
          rightHeader={
            lang === "EN"
              ? "Questions"
              : lang === "PT"
              ? "Questões"
              : "Questions"
          }
          leftContent={
            <ImageContainer
              className="fadeIn500"
              label=""
              id="a"
              path="/InteractiveAssets/Slide8.png"
            />
          }
          rightContent={
            <div
              tabIndex={0}
              role="radiogroup"
              aria-roledescription="radiogroup"
              className={`focus-within:outline-offset-8`}
            >
              <h6 className="mb-8 [fontSize:15px]">
                {lang === "EN"
                  ? `What do you think IBS would be in this situation? Fortunately,
                you have just the controls to test out your hypothesis! Which
                two controls should you compare?`
                  : lang === "FR"
                  ? `Quel serait selon vous l'IBS dans cette situation ? Heureusement,
                vous avez juste les contrôles pour tester votre hypothèse ! Quels
                deux contrôles devriez-vous comparer ?`
                  : lang === "PT"
                  ? `Qual você acha que seria o IBS nesta situação? Felizmente,
                você tem apenas os controles para testar sua hipótese! Quais
                dois controles você deve comparar?`
                  : `What do you think IBS would be in this situation? Fortunately,
                you have just the controls to test out your hypothesis! Which
                two controls should you compare?`}
              </h6>
              <ol className="grid grid-cols-2 gap-4 text-black dark:brightness-75">
                {Array(7)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <li key={idx} className="flex w-fit items-center gap-8">
                        <input
                          onChange={
                            (selectedClones[1] === 1 ||
                              selectedClones[2] === 1) &&
                            (selectedClones[1] === 6 || selectedClones[2] === 6)
                              ? undefined
                              : () => {
                                  if (completion[phase] || true) {
                                  }
                                  if (
                                    selectedClones[1] === null &&
                                    selectedClones[2] !== idx
                                  ) {
                                    setSelectedClones({
                                      ...selectedClones,
                                      1: idx,
                                    });
                                  } else if (
                                    selectedClones[2] === null &&
                                    selectedClones[1] !== idx
                                  ) {
                                    setSelectedClones({
                                      ...selectedClones,
                                      2: idx,
                                    });
                                  } else if (selectedClones[1] === idx) {
                                    setSelectedClones({
                                      ...selectedClones,
                                      1: null,
                                    });
                                  } else if (selectedClones[2] === idx) {
                                    setSelectedClones({
                                      ...selectedClones,
                                      2: null,
                                    });
                                  } else {
                                  }
                                }
                          }
                          tabIndex={0}
                          id={`kc-id-${idx}`}
                          type="checkbox"
                          checked={
                            selectedClones[1] === idx ||
                            selectedClones[2] === idx
                          }
                          disabled={
                            selectedClones[1] !== null &&
                            selectedClones[2] !== null &&
                            selectedClones[1] !== idx &&
                            selectedClones[2] !== idx
                          }
                          className={`${
                            idx === 1 || idx === 6
                              ? "accent-primaryBlue [--chkbg:#14828C]"
                              : "accent-microRed [--chkbg:#E61048]"
                          } h-4 w-4  disabled:opacity-50 md:h-[14px] md:w-[14px]`}
                        ></input>
                        <div
                          className={`${
                            selectedClones[1] !== null &&
                            selectedClones[2] !== null &&
                            selectedClones[1] !== idx &&
                            selectedClones[2] !== idx
                              ? "opacity-50"
                              : ""
                          }`}
                        >
                          {cloneControlDivMap[idx]}
                        </div>
                      </li>
                    );
                  })}
              </ol>
            </div>
          }
        />
        // <MultiRowLayout
        //   style={{
        //     rowGap: 0,
        //   }}
        //   topLeft={
        //     <div>
        //       <FormHeader text="Transmissions" />
        //       {/* <div className="relative grid aspect-square h-16 place-items-center rounded-full bg-cloneRed">
        //         <div className="grid aspect-square h-8 place-items-center rounded-full bg-white">
        //           <span className="block translate-y-[3px]">1</span>
        //         </div>
        //       </div> */}
        //       <ImageContainer
        //         className="fadeIn500"
        //         label=""
        //         id="a"
        //         path="/assets/2.3.3.1.svg"
        //       />
        //     </div>
        //   }
        //   topRight={
        //     <div className="md:row-span-2">
        //       <FormHeader text="Questions" />
        //       <div
        //         tabIndex={0}
        //         role="radiogroup"
        //         aria-roledescription="radiogroup"
        //         className={`focus-within:outline-offset-8`}
        //         aria-label={`What do you think IBS would be in this situation? Fortunately,
        //       you have just the controls to test out your hypothesis! Which
        //       two controls should you compare?`}
        //       >
        //         <h6 className="mb-8 [fontSize:15px]">
        //           What do you think IBS would be in this situation? Fortunately,
        //           you have just the controls to test out your hypothesis! Which
        //           two controls should you compare?
        //         </h6>
        //         <ol className="grid grid-cols-2 gap-4 ">
        //           {Array(7)
        //             .fill(0)
        //             .map((el, idx) => {
        //               return (
        //                 <li key={idx} className="flex w-fit items-center gap-8">
        //                   <input
        //                     onChange={
        //                       (selectedClones[1] === 1 ||
        //                         selectedClones[2] === 1) &&
        //                       (selectedClones[1] === 6 ||
        //                         selectedClones[2] === 6)
        //                         ? undefined
        //                         : () => {
        //                             if (completion[phase] || true) {
        //                             }
        //                             if (
        //                               selectedClones[1] === null &&
        //                               selectedClones[2] !== idx
        //                             ) {
        //                               setSelectedClones({
        //                                 ...selectedClones,
        //                                 1: idx,
        //                               });
        //                             } else if (
        //                               selectedClones[2] === null &&
        //                               selectedClones[1] !== idx
        //                             ) {
        //                               setSelectedClones({
        //                                 ...selectedClones,
        //                                 2: idx,
        //                               });
        //                             } else if (selectedClones[1] === idx) {
        //                               setSelectedClones({
        //                                 ...selectedClones,
        //                                 1: null,
        //                               });
        //                             } else if (selectedClones[2] === idx) {
        //                               setSelectedClones({
        //                                 ...selectedClones,
        //                                 2: null,
        //                               });
        //                             } else {
        //                             }
        //                           }
        //                     }
        //                     tabIndex={0}
        //                     id={`kc-id-${idx}`}
        //                     type="checkbox"
        //                     checked={
        //                       selectedClones[1] === idx ||
        //                       selectedClones[2] === idx
        //                     }
        //                     disabled={
        //                       selectedClones[1] !== null &&
        //                       selectedClones[2] !== null &&
        //                       selectedClones[1] !== idx &&
        //                       selectedClones[2] !== idx
        //                     }
        //                     className={`${
        //                       idx === 1 || idx === 6
        //                         ? "accent-primaryBlue [--chkbg:#14828C]"
        //                         : "accent-microRed [--chkbg:#E61048]"
        //                     } h-4 w-4  disabled:opacity-50 md:h-[14px] md:w-[14px]`}
        //                   ></input>
        //                   <div
        //                     className={`${
        //                       selectedClones[1] !== null &&
        //                       selectedClones[2] !== null &&
        //                       selectedClones[1] !== idx &&
        //                       selectedClones[2] !== idx
        //                         ? "opacity-50"
        //                         : ""
        //                     }`}
        //                   >
        //                     {cloneControlDivMap[idx]}
        //                   </div>
        //                 </li>
        //               );
        //             })}
        //         </ol>
        //       </div>
        //     </div>
        //   }
        //   bottomLeft={
        //     <QuestionResponseText
        //       className="mt-8"
        //       visible={
        //         (selectedClones[1] === 1 || selectedClones[2] === 1) &&
        //         (selectedClones[1] === 6 || selectedClones[2] === 6)
        //       }
        //       text={`That’s right – clone four is a hybrid of clones one and two, so this would be analogous to a situation in which a person is infected with clones one and two, both clones infected the mosquito, and then recombination produced a hybrid of the two clones which infected a second person.`}
        //     />
        //   }
        // ></MultiRowLayout>
      )}
      {(phase === 14 || phase === 15) && (
        <Genotypes lang={lang} currentClone={4} first={1} second={2} />
      )}
      {phase === 16 && (
        <InteractivePrimaryLayout
          leftHeader={
            lang === "EN"
              ? "Polyclonal Genotype Comparison"
              : lang === "FR"
              ? "Comparaison de génotypes polyclonaux"
              : lang === "PT"
              ? "Comparação de genótipos policlonais"
              : "Polyclonal Genotype Comparison"
          }
          rightHeader={
            lang === "EN"
              ? "Transmissions"
              : lang === "FR"
              ? "Transmissions"
              : lang === "PT"
              ? "Transmissões"
              : "Transmissions"
          }
          leftContent={
            <div>
              <div
                className={`grid max-w-[500px] gap-1 [grid-template-columns:8%_auto] dark:brightness-75`}
              >
                <div className="my-auto flex min-h-10 w-full flex-col">
                  <div
                    className={`mr-auto aspect-square h-7 translate-y-0.5 rounded-full ${P6CloneRowColors[1]}`}
                  ></div>
                  <div
                    className={`ml-auto aspect-square h-7 -translate-y-0.5 rounded-full ${P6CloneRowColors[2]}`}
                  ></div>
                </div>{" "}
                <div>
                  <div className="grid grow grid-cols-12 gap-1 self-center p-1">
                    {cloneRows[1].vals
                      .map((el, idx) => {
                        //@ts-ignore
                        return [el + 1, cloneRows[2].vals[idx] + 1];
                      })
                      .map((microIdArr, idx) => {
                        return (
                          <div
                            style={{
                              gap: "4px",
                            }}
                            key={idx}
                            className={`flex flex-col justify-center gap-0.5`}
                          >
                            {getUniqueValuesArray(microIdArr).map(
                              (microId, idx2) => {
                                return (
                                  <SquareMicrohaplotype
                                    className={
                                      (idx < 6 &&
                                        idx2 === 0 &&
                                        (getUniqueValuesArray(microIdArr)
                                          .length === 1 ||
                                          idx2 === 0)) ||
                                      (idx >= 6 &&
                                        (idx2 === 1 ||
                                          getUniqueValuesArray(microIdArr)
                                            .length === 1))
                                        ? "opacity-100"
                                        : "opacity-20"
                                      // (microIdArr.includes(microId) &&
                                      //   idx < 6 &&
                                      //   idx2 === 0) ||
                                      // (microIdArr.includes(microId) &&
                                      //   idx >= 6 &&
                                      //   idx2 === 1)
                                      //   ? ""
                                      //   : "opacity-20"
                                    }
                                    id={microId - 1}
                                    key={idx2}
                                  />
                                );
                              },
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="mt-8 max-w-[500px] dark:brightness-75">
                <div
                  className={` grid gap-1 font-helvetica [grid-template-columns:8%_auto]`}
                >
                  <div>
                    <div
                      className={`border-red-blue-rounded aspect-square rounded-full bg-gradient-radial from-[white_20%]`}
                    >
                      <div className="flex aspect-square items-center justify-center rounded-full">
                        <span className="absolute translate-y-[3px] font-bold text-black">
                          4
                        </span>
                      </div>
                    </div>
                  </div>
                  <ol className={`grid h-full grow grid-cols-12 gap-1 p-1`}>
                    {cloneRows[4].vals.map((el, idx) => {
                      return (
                        <SquareMicrohaplotype
                          id={el}
                          key={idx}
                          // className={
                          //   idx < 6
                          //     ? "-translate-y-[calc(50%+2px)]"
                          //     : "translate-y-[calc(50%+2px)]"
                          // }
                          // className="opacity-50"
                        />
                      );
                    })}{" "}
                  </ol>
                </div>
                {/* <CloneRow
            label={4}
            classNames={{
              button: "border-red-blue-rounded",
              row: "shadow-none",
            }}
          >
            {cloneRows[4].vals.map((el, idx) => {
              return <SquareMicrohaplotype id={el} key={idx} />;
            })}
          </CloneRow> */}
              </div>
              {lang === "EN" ? (
                <QuestionResponseText
                  className="mt-8"
                  visible
                  content={
                    <div
                      className={
                        "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
                      }
                    >
                      <p>
                        <span className="font-bold">
                          The important take home point is that if one person
                          transmits parasites directly to another person through
                          a mosquito, every locus should have a match between
                          those two people - IBS should be 1.0.
                        </span>
                      </p>
                      <p className="mt-4">
                        This is true regardless of whether one or more parasites
                        are transmitted, and whether recombination occurs in the
                        mosquito or not.
                      </p>
                    </div>
                  }
                />
              ) : lang === "FR" ? (
                <QuestionResponseText
                  className="mt-8"
                  visible
                  content={
                    <div
                      className={
                        "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
                      }
                    >
                      <p>
                        <span className="font-bold">
                          Le point essentiel à retenir est que si une personne
                          transmet des parasites directement à une autre
                          personne par l'intermédiaire d'un moustique, chaque
                          locus doit avoir une correspondance entre ces deux
                          personnes - IBS doit être de 1,0.
                        </span>
                      </p>
                      <p className="mt-4">
                        Cela est vrai, qu'un ou plusieurs parasites soient
                        transmis, et que la recombinaison se produise ou non
                        chez le moustique.
                      </p>
                    </div>
                  }
                />
              ) : (
                <QuestionResponseText
                  className="mt-8"
                  visible
                  content={
                    <div
                      className={
                        "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
                      }
                    >
                      <p>
                        <span className="font-bold">
                          O ponto principal importante é que, se uma pessoa
                          transmitir parasitas diretamente para outra pessoa por
                          meio de um mosquito, cada locus deve ter uma
                          correspondência entre essas duas pessoas - o IBS deve
                          ser 1,0.
                        </span>
                      </p>
                      <p className="mt-4">
                        Isso é verdade, independentemente de um ou mais
                        parasitas serem transmitidos e se a recombinação ocorre
                        ou não no mosquito.
                      </p>
                    </div>
                  }
                />
              )}
            </div>
          }
          rightContent={
            <div>
              <div
                style={{
                  maxWidth: "400px",
                }}
                className="mx-auto"
              >
                <ImageContainer
                  className="fadeIn500"
                  noPadding
                  label=""
                  id="a"
                  path="/InteractiveAssets/Slide7.png"
                />{" "}
                <ImageContainer
                  className="fadeIn500 mt-8"
                  noPadding
                  label=""
                  id="a"
                  path="/InteractiveAssets/Slide8.png"
                />
              </div>
            </div>
          }
        />
        // <StandardLayout>
        //   <div>
        //     <FormHeader text="Polyclonal Genotype Comparison" />
        //     <div
        //       className={`grid max-w-[500px] gap-1 [grid-template-columns:8%_auto]`}
        //     >
        //       <div className="my-auto flex min-h-10 w-full flex-col">
        //         <div
        //           className={`mr-auto aspect-square h-7 translate-y-0.5 rounded-full ${P6CloneRowColors[1]}`}
        //         ></div>
        //         <div
        //           className={`ml-auto aspect-square h-7 -translate-y-0.5 rounded-full ${P6CloneRowColors[2]}`}
        //         ></div>
        //       </div>{" "}
        //       <div>
        //         <div className="grid grow grid-cols-12 gap-1 self-center p-1">
        //           {cloneRows[1].vals
        //             .map((el, idx) => {
        //               //@ts-ignore
        //               return [el + 1, cloneRows[2].vals[idx] + 1];
        //             })
        //             .map((microIdArr, idx) => {
        //               return (
        //                 <div
        //                   style={{
        //                     gap: "4px",
        //                   }}
        //                   key={idx}
        //                   className={`flex flex-col justify-end gap-0.5`}
        //                 >
        //                   {getUniqueValuesArray(microIdArr).map(
        //                     (microId, idx2) => {
        //                       return (
        //                         <SquareMicrohaplotype
        //                           className={
        //                             (idx < 6 &&
        //                               idx2 === 0 &&
        //                               (getUniqueValuesArray(microIdArr)
        //                                 .length === 1 ||
        //                                 idx2 === 0)) ||
        //                             (idx >= 6 &&
        //                               (idx2 === 1 ||
        //                                 getUniqueValuesArray(microIdArr)
        //                                   .length === 1))
        //                               ? "opacity-100"
        //                               : "opacity-20"
        //                             // (microIdArr.includes(microId) &&
        //                             //   idx < 6 &&
        //                             //   idx2 === 0) ||
        //                             // (microIdArr.includes(microId) &&
        //                             //   idx >= 6 &&
        //                             //   idx2 === 1)
        //                             //   ? ""
        //                             //   : "opacity-20"
        //                           }
        //                           id={microId - 1}
        //                           key={idx2}
        //                         />
        //                       );
        //                     }
        //                   )}
        //                 </div>
        //               );
        //             })}
        //         </div>
        //       </div>
        //     </div>
        //     <div className="mt-8 max-w-[500px]">
        //       <div
        //         className={` grid gap-1 font-helvetica [grid-template-columns:8%_auto]`}
        //       >
        //         <div>
        //           <div
        //             className={`border-red-blue-rounded aspect-square rounded-full bg-gradient-radial from-[white_20%]`}
        //           >
        //             <div className="flex aspect-square items-center justify-center rounded-full">
        //               <span className="absolute translate-y-[3px] font-bold">
        //                 4
        //               </span>
        //             </div>
        //           </div>
        //         </div>
        //         <ol className={`grid h-full grow grid-cols-12 gap-1 p-1`}>
        //           {cloneRows[4].vals.map((el, idx) => {
        //             return (
        //               <SquareMicrohaplotype
        //                 id={el}
        //                 key={idx}
        //                 // className={
        //                 //   idx < 6
        //                 //     ? "-translate-y-[calc(50%+2px)]"
        //                 //     : "translate-y-[calc(50%+2px)]"
        //                 // }
        //                 // className="opacity-50"
        //               />
        //             );
        //           })}{" "}
        //         </ol>
        //       </div>
        //       {/* <CloneRow
        //         label={4}
        //         classNames={{
        //           button: "border-red-blue-rounded",
        //           row: "shadow-none",
        //         }}
        //       >
        //         {cloneRows[4].vals.map((el, idx) => {
        //           return <SquareMicrohaplotype id={el} key={idx} />;
        //         })}
        //       </CloneRow> */}
        //     </div>
        //     <QuestionResponseText
        //       className="mt-8"
        //       visible
        //       text={
        //         "The important take home point is that if one person transmits parasites directly to another person through a mosquito, every locus should have a match between those two people - IBS should be 1.0. This is true regardless of whether one or more parasites are transmitted, and whether recombination occurs in the mosquito or not."
        //       }
        //     />
        //   </div>
        // <div>
        //   <FormHeader text="Transmissions" />
        //   <div
        //     style={{
        //       maxWidth: "400px",
        //     }}
        //     className="mx-auto"
        //   >
        //     <ImageContainer
        //       className="fadeIn500"
        //       noPadding
        //       label=""
        //       id="a"
        //       path="/assets/2.3.2.svg"
        //     />{" "}
        //     <ImageContainer
        //       className="fadeIn500 mt-8"
        //       noPadding
        //       label=""
        //       id="a"
        //       path="/assets/2.3.3.1.svg"
        //     />
        //   </div>
        // </div>
        // </StandardLayout>
      )}
      {phase === 17 && (
        <div className="grid place-items-center">
          <div className="mx-auto">
            <ImageContainer
              label={
                lang === "EN"
                  ? ` Microhaplotype Match Probability (0%, 50%, 100% IBD)`
                  : lang === "FR"
                  ? `Probabilité de correspondance des microhaplotypes (0 %, 50 %, 100 % IBD)`
                  : lang === "PT"
                  ? `Probabilidade de correspondência de microhaplótipos (0%, 50%, 100% IBD)`
                  : ` Microhaplotype Match Probability (0%, 50%, 100% IBD)`
              }
              id="a"
              path="/InteractiveAssets/M5_sluething_histogram_MHs_MOI1_IBD_0_0.5_1_together.svg"
            />
          </div>
        </div>
      )}
      {/*
      topLeft={<div>
      <FormHeader text="Polyclonal Genotype Comparison" /></div>}
      {phase === 14 && (
        <StandardLayout>
          <div>
            <FormHeader text="Tramsmissions" />
            <ImageContainer
              className="fadeIn500"
              label=""
              id="a"
              path="/assets/2.3.3.1.svg"
            />
          </div>
          <div>
            <FormHeader text="Clones and Controls" />
            <div className="grid grid-cols-4 grid-rows-2 justify-around gap-8">
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 1) {
                    setSelectedClones({ ...selectedClones, 1: 1 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 1
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 1 });
                  } else if (selectedClones[1] === 1) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 1) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 1 || selectedClones[2] === 1
                    ? "outline outline-4 " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div
                  className={`aspect-square w-1/2 rounded-full ${P6CloneRowColors[1]}`}
                >
                  <span></span>
                </div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 2) {
                    setSelectedClones({ ...selectedClones, 1: 2 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 2
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 2 });
                  } else if (selectedClones[1] === 2) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 2) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 2 || selectedClones[2] === 2
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div
                  className={`aspect-square w-1/2 rounded-full ${P6CloneRowColors[2]}`}
                ></div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 3) {
                    setSelectedClones({ ...selectedClones, 1: 3 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 3
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 3 });
                  } else if (selectedClones[1] === 3) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 3) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 3 || selectedClones[2] === 3
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div
                  className={`aspect-square w-1/2 rounded-full ${P6CloneRowColors[3]}`}
                ></div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 4) {
                    setSelectedClones({ ...selectedClones, 1: 4 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 4
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 4 });
                  } else if (selectedClones[1] === 4) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 4) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 4 || selectedClones[2] === 4
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div className="aspect-square w-1/2 rounded-full bg-gradient-to-r from-cloneRed via-[#FFB0B0_50%,#B8E6FA_50%] to-cloneBlue"></div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 5) {
                    setSelectedClones({ ...selectedClones, 1: 5 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 5
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 5 });
                  } else if (selectedClones[1] === 5) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 5) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 5 || selectedClones[2] === 5
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div className="mr-6 aspect-square w-1/3 rounded-full bg-cloneRed"></div>
                <div className="ml-6 aspect-square w-1/3 rounded-full bg-cloneBlue"></div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 6) {
                    setSelectedClones({ ...selectedClones, 1: 6 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 6
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 6 });
                  } else if (selectedClones[1] === 6) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 6) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 6 || selectedClones[2] === 6
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div className="mr-6 aspect-square w-1/3 rounded-full bg-cloneRed"></div>
                <div className="ml-6 aspect-square w-1/3 rounded-full bg-cloneGreen"></div>
              </div>
              <div
                onClick={() => {
                  if (selectedClones[1] === null && selectedClones[2] !== 7) {
                    setSelectedClones({ ...selectedClones, 1: 7 });
                  } else if (
                    selectedClones[2] === null &&
                    selectedClones[1] !== 7
                  ) {
                    setSelectedClones({ ...selectedClones, 2: 7 });
                  } else if (selectedClones[1] === 7) {
                    setSelectedClones({ ...selectedClones, 1: null });
                  } else if (selectedClones[2] === 7) {
                    setSelectedClones({ ...selectedClones, 2: null });
                  }
                }}
                className={
                  selectedClones[1] === 7 || selectedClones[2] === 7
                    ? "outline outline-4 -outline-offset-[10px] " +
                      "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                    : "grid aspect-square basis-1/4 cursor-pointer place-items-center rounded-full border-black -outline-offset-[10px] outline-black hover:border-4"
                }
              >
                <div className="mr-6 aspect-square w-1/3 rounded-full bg-cloneBlue"></div>
                <div className="ml-6 aspect-square w-1/3 rounded-full bg-cloneGreen"></div>
              </div>
            </div>
            <QuestionResponseText
              className="mt-8"
              visible={
                Object.values(selectedClones).includes(1) &&
                Object.values(selectedClones).includes(4)
              }
              complete={completion[phase]}
              trigger={
                Object.values(selectedClones).includes(1) &&
                Object.values(selectedClones).includes(4)
              }
              text="That’s right – clone four is a hybrid of clones one and two, so this would be analogous to a situation in which a person is infected with clones one and two, both clones infected the mosquito, and then recombination produced a hybrid of the two clones which infected a second person."
            />
          </div>
        </StandardLayout>
      )} */}
      {phase === 14 && <StandardLayout></StandardLayout>}
      <PartSevenControlBoard />
    </div>
  );

  return (
    <div>
      <InteractivePrompt
        skippable={completion[1]}
        complete={completion[phase]}
        title={partSevenPrompts[phase].title}
        instructions={partSevenPrompts[phase].instructions}
      />{" "}
      {phase}
      {phase >= 50 && phase < 52 && <PositiveControls />}
      {/* {phase >= 51 && phase <= 53 && (
        <div className="flex flex-col gap-16">
          <div className="grid gap-16 md:grid-cols-2">
            <div className="mx-auto w-full max-w-[400px]">
              <PositiveControlBoard></PositiveControlBoard>
            </div>
            <div></div>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="max-w-[400px]">
              <PositiveControlBoard></PositiveControlBoard>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="max-w-[400px]">
              <PositiveControlBoard></PositiveControlBoard>
            </div>
          </div>
        </div>
      )} */}
      {phase >= 52 && phase < 57 && <Genotypes />}
      {phase === 59 && (
        <StandardLayout>
          <div>
            <Image
              src="/assets/M5_sluething_histogram_MHs_MOI1.1_vs1.2_IBD_0.svg"
              alt="MOI match probability"
              width={600}
              height={600}
            />
          </div>
          <div>
            <div className="mb-8 text-center text-xl font-bold md:text-left">
              <h2>Questions</h2>
            </div>
            <div className="flex flex-col gap-8">
              <KnowledgeCheckQuestion
                classNames={{
                  answersContainer: "grid gap-4 mt-4",
                }}
                answers={[
                  {
                    checked: questions[7] === 0,
                    correct: false,
                    index: 0,
                    text: "IBS would be lower",
                  },
                  {
                    checked: questions[7] === 1,
                    correct: false,
                    index: 1,
                    text: "IBS would be the same",
                  },
                  {
                    checked: questions[7] === 2,
                    correct: true,
                    index: 2,
                    text: "IBS would be higher",
                  },
                ]}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                hasAnswer={questions[7] === 2}
                headerText="What do you think you might see if MOI in one or both samples was even higher, but still contained no related parasites between the two samples?"
                questionIdx={7}
              />
              <div className="bg-primaryBlue/10 p-8 text-sm">
                <p>
                  The correct answer is C, IBS would be higher. This is for the
                  same reason that IBS is likely to be higher in polyclonal
                  versus monoclonal samples &ndash; there may be more alleles
                  present to potentially match by chance. This histogram shows
                  the number of loci you would expect to see with matching
                  alleles (IBS) if there are no related parasites between the
                  two samples.
                </p>
              </div>
              <div className="bg-primaryBlue/10 p-8 text-sm">
                <p>
                  Notice that when MOI is three in both samples, you see IBS as
                  high as 1 even when IBD is 0 using the genotyping panel in
                  this exercise: 12 microhaplotypes with 8 alleles each. As MOI
                  gets higher, it gets harder to distinguish infections
                  containing related parasites from those containing unrelated
                  parasites!
                </p>
              </div>
            </div>
          </div>
        </StandardLayout>
      )}
      {phase === 60 && (
        <StandardLayout>
          <div>
            <Image
              src="/assets/M5_sluething_histogram_MHs_MOIvaries_IBD_0.svg"
              alt="MOI match probability"
              width={600}
              height={600}
            />
          </div>
          <div>
            <div className="mb-8 text-center text-xl font-bold md:text-left">
              <h2>Questions</h2>
            </div>
            <div className="flex flex-col gap-8">
              <KnowledgeCheckQuestion
                classNames={{
                  answersContainer: "grid gap-4 mt-4",
                }}
                answers={[
                  {
                    checked: !!questions[8][1],
                    correct: false,
                    index: 0,
                    text: "Give up - it will be impossible to tell",
                  },
                  {
                    checked: !!questions[8][2],
                    correct: true,
                    index: 1,
                    text: "Increase the number of loci you genotype",
                  },
                  {
                    checked: !!questions[8][3],
                    correct: true,
                    index: 2,
                    text: "Increase the diversity of loci you genotype",
                  },
                  {
                    checked: !!questions[8][4],
                    correct: true,
                    index: 3,
                    text: "Use more powerful statistical methods that directly estimate IBD instead of using IBS",
                  },
                ]}
                callback={(questionIdx, answerIdx) => {
                  if (questions[8][answerIdx + 1]) {
                    setQuestions({
                      ...questions,
                      [questionIdx]: {
                        ...questions[questionIdx],
                        [answerIdx + 1]: null,
                      },
                    });
                  } else {
                    setQuestions({
                      ...questions,
                      [questionIdx]: { ...questions[8], [answerIdx + 1]: true },
                    });
                  }
                }}
                hasAnswer={
                  questions[8][1] === null &&
                  questions[8][2] &&
                  questions[8][3] &&
                  questions[8][4]
                }
                headerText="What do you think you could do to better distinguish related from unrelated infections in this situation? (choose all that apply)"
                questionIdx={8}
              />
              <div className="bg-primaryBlue/10 p-8 text-sm">
                <p>
                  In situations where MOI is higher, a larger, more diverse
                  genotyping panel can help provide increased resolution. In
                  addition, statistical methods specifically designed to
                  estimate IBD from polyclonal infections are available and
                  provide accurate estimates as well as statistical
                  significance. Fortunately, for the cases you are investigating
                  this exercise, transmission is relatively low and you should
                  be able to figure out what is going on by calculating IBS
                  using your panel of 12 microhaplotypes.
                </p>
              </div>
            </div>
          </div>
        </StandardLayout>
      )}
      {phase > 60 && <Genotypes />}
      <PartSevenControlBoard />
    </div>
  );
}
