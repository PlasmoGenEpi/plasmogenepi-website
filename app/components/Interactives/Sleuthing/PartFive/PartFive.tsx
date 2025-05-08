"use client";
import { useAtom, useAtomValue } from "jotai";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import {
  partFiveCompletionAtom,
  partFourInfectionsAtom,
  partTwoInfectionsAtom,
  phase1Atom,
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
import InteractivePrimaryLayout from "../../Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";

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

export const p5ButtonClickedAtom = atomWithStorage(
  "p5ButtonClickedAtom",
  false,
);
export const p5ButtonClicked2Atom = atomWithStorage(
  "p5ButtonClicked2Atom",
  false,
);

export default function PartFive({
  fixedPanel,
  lang,
}: {
  lang: "EN" | "FR" | "PT";
  fixedPanel: boolean;
}) {
  const [phase, setPhase] = useAtom(phase1Atom);
  const [completion, setCompletion] = useAtom(partFiveCompletionAtom);
  const SNPInfections = useAtomValue(partTwoInfectionsAtom);
  const MHPInfections = useAtomValue(partFourInfectionsAtom);
  const [activeIndex, setActiveIndex] = useAtom(selectedInfectionIndexAtom);
  const [question, setQuestion] = useAtom(partFiveQuestionAtom);
  const [clicked, setClicked] = useAtom(p5ButtonClickedAtom);
  const [clicked2, setClicked2] = useAtom(p5ButtonClicked2Atom);

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

  const activeRow = phase <= 1 || phase === 10 ? activeIndex : null;

  // useEffect(() => {
  //   if (phase >= 2 && !completion[phase - 1]) {
  //     setPhase(0);
  //   }
  // }, [completion]);

  // if (phase === 14) {
  //   return (
  //     <div className="pb-12 pt-12 text-center text-xl">
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
  //       </div>
  //       <PartFiveControlPanel />
  //     </div>
  //   );
  // }

  return (
    <div>
      <InteractivePrompt
        lang={lang}
        complete={completion[phase as 1 | 2]}
        instructions={
          phase >= 3 && phase < 9
            ? partFivePrompts[3].instructions[lang]
            : partFivePrompts[phase].instructions[lang]
        }
        a
        title={
          phase >= 3 && phase < 9
            ? partFivePrompts[3].title[lang]
            : partFivePrompts[phase].title[lang]
        }
      />
      <InteractivePrimaryLayout
        moreContent={
          phase !== 0 ? (
            <div className="col-span-full mt-4 grid">
              {clicked2 ? (
                <QuestionResponseText
                  visible
                  text={
                    lang === "EN"
                      ? `Now that you know the truth, were your estimates for each of the 10 infections more accurate using SNPs or microhaplotypes? How about the overall distribution and your estimate of mean MOI? Depending on how well you were able to estimate from the genotyping data, you may find that you were able to more accurately estimate the MOI for each infection using microhaplotypes than SNPs. However, the overall distribution and average MOI may still be fairly close to the truth for both methods. Any errors in estimation may average out - for example you may overestimate the MOI of one infection but underestimate the MOI of another. This is why having a good method of estimation and a large enough sample size can provide accurate  estimates for the population even if estimates for individual infections are incorrect.`
                      : lang === "FR"
                      ? `Maintenant que vous connaissez la vérité, vos estimations pour chacune des 10 infections étaient-elles plus précises en utilisant des SNP ou des microhaplotypes ? Qu'en est-il de la distribution globale et de votre estimation du MOI moyen ? Selon la qualité de votre estimation à partir des données de génotypage, vous constaterez peut-être que vous avez pu estimer plus précisément le MOI pour chaque infection en utilisant des microhaplotypes que des SNP. Cependant, la distribution globale et le MOI moyen peuvent encore être assez proches de la vérité pour les deux méthodes. Toutes les erreurs d'estimation peuvent s'annuler en moyenne ; par exemple, vous pouvez surestimer le MOI d'une infection, mais sous-estimer le MOI d'une autre. C'est pourquoi le fait d'avoir une bonne méthode d'estimation et une taille d'échantillon suffisamment grande peut fournir des estimations précises pour la population, même si les estimations pour les infections individuelles sont incorrectes.`
                      : `Agora que você sabe a verdade, suas estimativas para cada uma das 10 infecções foram mais precisas usando SNPs ou microhaplótipos? Que tal a distribuição geral e sua estimativa de MOI médio? Dependendo de quão bem você conseguiu estimar a partir dos dados de genotipagem, você pode descobrir que foi capaz de estimar o MOI com mais precisão para cada infecção usando microhaplótipos do que SNPs. No entanto, a distribuição geral e o MOI médio ainda podem estar bastante próximos da verdade para ambos os métodos. Quaisquer erros na estimativa podem ser calculados em média - por exemplo, você pode superestimar o MOI de uma infecção, mas subestimar o MOI de outra. É por isso que ter um bom método de estimativa e um tamanho de amostra grande o suficiente pode fornecer estimativas precisas para a população, mesmo que as estimativas para infecções individuais estejam incorretas.`
                  }
                />
              ) : (
                <button
                  onClick={() => {
                    setClicked2(true);
                  }}
                  className="fadeIn500 mx-auto rounded bg-interactiveGreen px-4 py-2 text-white shadow-sm shadow-black/50"
                >
                  <span className="block translate-y-0.5">
                    {lang === "EN"
                      ? `Feedback`
                      : lang === "FR"
                      ? `Rétroaction`
                      : `Opinião`}
                  </span>
                </button>
              )}
            </div>
          ) : (
            <div className="col-span-full mt-8 flex flex-col gap-4 font-helvetica [font-size:15px]">
              <h4 className="text-balance text-center text-lg  font-semibold @2xl/main:text-wrap @2xl/main:text-left">
                {lang === "EN"
                  ? `Questions`
                  : lang === "FR"
                  ? `Des questions`
                  : `Questões`}
              </h4>
              <p>
                {lang === "EN"
                  ? `Look at your data and think about the following two questions.`
                  : lang === "FR"
                  ? `Examinez vos données et réfléchissez aux deux questions suivantes.`
                  : `Observe seus dados e pense nas duas perguntas a seguir.`}
              </p>
              <p>
                {lang === "EN"
                  ? `Did you get an MOI with microhaplotypes that was higher, lower,
                or the same as MOI with SNPs?`
                  : lang === "FR"
                  ? `Avez-vous obtenu un MOI avec des microhaplotypes qui était supérieur, inférieur ou identique au MOI avec des SNP ?`
                  : `Você obteve um MOI com microhaplótipos que foi maior, menor ou igual ao MOI com SNPs?`}
              </p>
              <p></p>
              <p>
                {lang === "EN"
                  ? `Which do you think is a more accurate reflection of the true MOI
                for each sample, and, by extension, in your population?`
                  : lang === "FR"
                  ? `Laquelle pensez-vous être le reflet le plus fidèle du MOI réel pour chaque échantillon et, par extension, dans votre population ?`
                  : `Qual você acha que é um reflexo mais preciso do MOI verdadeiro para cada amostra e, por extensão, em sua população?`}
              </p>
              {clicked ? (
                <QuestionResponseText
                  visible={true}
                  text={
                    lang === "EN"
                      ? "Different people might have had different strategies for estimating MOI, but in general it might have been easier to detect MOI more accurately in the field samples using microhaplotypes. This is because with SNPs, the maximum number of alleles that you can detect is 2 and it is hard to precisely estimate MOI from the proportion of loci that are heterozygous unless you have a lot of loci. On the other hand, using higher diversity markers such as microhaplotypes allows you to more directly observe MOI, with the caveats discussed above. Namely, sometimes you can have genotyping errors creating positive alleles, inflating MOI. On the other hand, sometimes alleles will match by chance even when loci are diverse. For these reasons, statistical methods have been developed to take these and other factors into account for more accurate estimates of MOI even when you are using microhaplotype markers. Let’s take a look at the true MOI now and see how accurate your estimates were!"
                      : lang === "FR"
                      ? "Différentes personnes ont peut-être eu différentes stratégies pour estimer le MOI, mais en général, il aurait pu être plus facile de détecter le MOI plus précisément dans les échantillons de terrain en utilisant des microhaplotypes. En effet, avec les SNP, le nombre maximum d'allèles que vous pouvez détecter est de 2 et il est difficile d'estimer précisément le MOI à partir de la proportion de loci hétérozygotes, à moins que vous n'ayez beaucoup de loci. D'autre part, l'utilisation de marqueurs à plus grande diversité tels que les microhaplotypes vous permet d'observer plus directement le MOI, avec les mises en garde discutées ci-dessus. À savoir, vous pouvez parfois avoir des erreurs de génotypage créant des allèles positifs, gonflant le MOI. D'autre part, parfois les allèles correspondent par hasard même lorsque les loci sont divers. Pour ces raisons, des méthodes statistiques ont été développées pour prendre en compte ces facteurs et d'autres pour des estimations plus précises du MOI même lorsque vous utilisez des marqueurs de microhaplotypes. Jetons un coup d'œil au MOI réel maintenant et voyons à quel point vos estimations étaient précises !"
                      : "Pessoas diferentes podem ter tido estratégias diferentes para estimar o MOI, mas, em geral, pode ter sido mais fácil detectar o MOI com mais precisão nas amostras de campo usando microhaplótipos. Isso ocorre porque com SNPs, o número máximo de alelos que você pode detectar é 2 e é difícil estimar precisamente o MOI a partir da proporção de loci que são heterozigotos, a menos que você tenha muitos loci. Por outro lado, o uso de marcadores de maior diversidade, como microhaplótipos, permite que você observe o MOI de forma mais direta, com as ressalvas discutidas acima. Ou seja, às vezes você pode ter erros de genotipagem criando alelos positivos, inflando o MOI. Por outro lado, às vezes os alelos corresponderão por acaso, mesmo quando os loci forem diversos. Por esses motivos, métodos estatísticos foram desenvolvidos para levar em consideração esses e outros fatores para estimativas mais precisas de MOI, mesmo quando você estiver usando marcadores de microhaplótipos.Para esses motivos, métodos estatísticos foram desenvolvidos para levar em consideração esses e outros fatores para estimativas mais precisas de MOI, mesmo quando você estiver usando marcadores de microhaplótipos."
                  }
                />
              ) : (
                <button
                  onClick={() => {
                    setClicked(true);
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
          )
        }
        leftHeader={
          <h4 className="text-balance text-center text-lg  font-semibold @2xl/main:text-wrap @2xl/main:text-left">
            {phase <= 1
              ? lang === "EN"
                ? "Genotypes"
                : lang === "FR"
                ? "Génotypes"
                : "Genótipos"
              : lang === "EN"
              ? "MOI Estimates"
              : lang === "FR"
              ? "Estimations du MOI"
              : "Estimativas de MOI"}
            {phase <= 1 && (
              <div className="flex gap-4">
                <label className="text-sm">
                  <br></br>
                  {lang === "EN"
                    ? `Infection`
                    : lang === "FR"
                    ? `Infection`
                    : `Infecção`}{" "}
                  {activeIndex + 1}
                </label>
              </div>
            )}
          </h4>
        }
        leftContent={
          phase < 2 ? (
            <div>
              <div
                className={`${
                  phase < 1 ? "hidden" : ""
                } mb-4 @xl/main:text-start @4xl/main:text-end`}
              >
                {/* <label className="[font-variant:all-small-caps]/ text-interactiveBlue">
                  True MOI:
                  <span className="text-2xl">
                    {" "}
                    {fixedData[2].infections[activeIndex].trueMOI}
                  </span>
                </label> */}
              </div>
              <div className="grid border-b-8 border-interactiveGreen/40 pb-4 dark:border-interactiveGreen">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="mb-2">
                      <label className="text-sm">SNPs</label>
                    </div>
                    <GenotypeResult
                      className="max-w-[440px]  origin-top-left scale-90 lg:scale-[85%]"
                      id={1}
                      vals={vals}
                      possibleValues={possibleVals}
                    />
                  </div>
                </div>
                <div className="@xl/main:text-start @4xl/main:text-end">
                  {/* <label
                    className={`[font-variant:all-small-caps]/
                     ${
                       phase < 1
                         ? ""
                         : SNPDifference === 0
                         ? "text-interactiveBlue"
                         : SNPDifference === 1
                         ? " text-orange-500/80"
                         : SNPDifference && SNPDifference > 1
                         ? "text-microRed"
                         : "border-transparent"
                     }
                    `}
                  >
                    MOI Estimate:
                    <span className={`text-2xl`}>
                      {" "}
                      {SNPInfections[activeIndex]}
                    </span>
                  </label> */}
                </div>
              </div>
              <div className="grid py-4">
                <div className="flex flex-col gap-4">
                  <div
                    className={
                      phase >= 10
                        ? `${
                            SNPDifference === 0
                              ? "border-primaryBlue/50 bg-primaryBlue/10"
                              : SNPDifference === 1
                              ? "border-[orange]/50 bg-[orange]/10"
                              : SNPDifference && SNPDifference > 1
                              ? "border-microRed/50 bg-microRed/10"
                              : "border-transparent"
                          } w-full border-2  p-4`
                        : "px-4/ border-2 border-transparent"
                    }
                  >
                    <div className="mb-2">
                      <label className="text-sm">
                        {lang === "EN"
                          ? `Microhaplotypes`
                          : lang === "FR"
                          ? `Microhaplotypes`
                          : `Microhaplótipos`}
                      </label>
                    </div>
                    <MicrohaplotypeGenotypeTable
                      className="w-full max-w-[440px] origin-top-left scale-90 justify-self-start lg:scale-[85%] dark:brightness-75"
                      microIdsMatrix={
                        fixedData[4].infections[activeIndex]
                          .microIds as unknown as MicroId[][]
                      }
                      possibleVals={possibleVals2}
                    />
                  </div>
                </div>
                <div className="h-0 @xl/main:text-start @4xl/main:text-end">
                  {/* <label
                    className={`[font-variant:all-small-caps]/
                     ${
                       phase < 1
                         ? ""
                         : MHPDifference === 0
                         ? "text-interactiveBlue"
                         : MHPDifference === 1
                         ? "text-orange-500/80"
                         : MHPDifference && MHPDifference > 1
                         ? "text-microRed"
                         : "border-transparent"
                     }
                    `}
                  >
                    {" "}
                    MOI Estimate:
                    <span className="text-2xl">
                      {" "}
                      {MHPInfections[activeIndex]}
                    </span>
                  </label> */}
                </div>
              </div>
            </div>
          ) : (
            <table className="table max-w-[400px] overflow-hidden bg-zinc-50 text-center dark:bg-zinc-700">
              <thead className=" bg-interactiveBlue/40 text-current">
                <tr>
                  <th className="translate-y-0.5 text-nowrap  py-4 ">
                    {lang === "EN"
                      ? `Infection`
                      : lang === "FR"
                      ? `Infection`
                      : `Infecção`}
                  </th>
                  <th className="translate-y-0.5 text-nowrap  py-4 ">SNPs</th>
                  <th className="translate-y-0.5 text-nowrap  py-4 ">
                    {lang === "EN"
                      ? `Microhaplotypes`
                      : lang === "FR"
                      ? `Microhaplotypes`
                      : `Microhaplótipos`}
                  </th>
                  {phase < 1 ? null : (
                    <th className="translate-y-0.5 text-nowrap  py-4 ">
                      {lang === "EN"
                        ? `True`
                        : lang === "FR"
                        ? `Vrai`
                        : `Verdadeiro`}
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {Array(10)
                  .fill(0)
                  .map((el, idx) => {
                    return (
                      <tr
                        onClick={
                          phase <= 1 || phase === 10
                            ? () => {
                                setActiveIndex(idx);
                              }
                            : undefined
                        }
                        tabIndex={phase <= 1 || phase === 10 ? 0 : undefined}
                        key={idx}
                        className={`${
                          idx === activeRow
                            ? "bg-black/10  dark:bg-zinc-900 "
                            : ""
                        } ${
                          phase <= 1 || phase === 10
                            ? "cursor-pointer  hover:bg-black/10 dark:hover:bg-zinc-900"
                            : ""
                        }`}
                      >
                        <td className="py-2">{idx + 1}</td>
                        <td className="py-2">{SNPInfections[idx]}</td>
                        <td className="py-2">{MHPInfections[idx]}</td>

                        {phase < 1 ? null : (
                          <td className="py-2">
                            {fixedData[2].infections[idx].trueMOI}
                          </td>
                        )}
                      </tr>
                    );
                  })}
                <tr className=" dark:brightness-125">
                  <td className="py-6">
                    {lang === "EN"
                      ? `Average`
                      : lang === "FR"
                      ? `Moyenne`
                      : `Média`}
                  </td>
                  <td
                    className={`py-6 text-xl
                    ${
                      phase < 1
                        ? ""
                        : Math.abs(SNPInfectionAverage - trueAverage) > 0.5
                        ? "text-microRed"
                        : Math.abs(SNPInfectionAverage - trueAverage) > 0.2
                        ? "text-orange-500/80"
                        : "text-interactiveBlue"
                    }
                    `}
                  >
                    {SNPInfectionAverage}
                  </td>
                  <td
                    className={`py-6 text-xl
                    ${
                      phase < 1
                        ? ""
                        : Math.abs(MHPInfectionAverage - trueAverage) > 0.5
                        ? "text-microRed"
                        : Math.abs(MHPInfectionAverage - trueAverage) > 0.2
                        ? "text-orange-500/80"
                        : "text-interactiveBlue"
                    }
                    `}
                  >
                    {MHPInfectionAverage}
                  </td>
                  {phase >= 1 && (
                    <td className={`py-6 text-xl text-interactiveBlue`}>
                      {trueAverage}
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          )
        }
        rightContent={
          phase === 1 ? (
            <div className="grid place-items-center">
              <table className="table max-w-[400px] overflow-hidden bg-zinc-50 text-center dark:bg-zinc-700">
                <thead className=" bg-interactiveBlue/40 text-current">
                  <tr>
                    <th className="translate-y-0.5 text-nowrap  py-4 ">
                      {lang === "EN"
                        ? `Infection`
                        : lang === "FR"
                        ? `Infecção`
                        : `Infection`}
                    </th>
                    <th className="translate-y-0.5 text-nowrap  py-4 ">SNPs</th>
                    <th className="translate-y-0.5 text-nowrap  py-4 ">
                      {lang === "EN"
                        ? `Microhaplotypes`
                        : lang === "FR"
                        ? `Microhaplotypes`
                        : `Microhaplótipos`}
                    </th>
                    {phase < 1 ? null : (
                      <th className="translate-y-0.5 text-nowrap  py-4 ">
                        {lang === "EN"
                          ? `True`
                          : lang === "FR"
                          ? `Vrai`
                          : `Verdadeiro`}
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {Array(10)
                    .fill(0)
                    .map((el, idx) => {
                      return (
                        <tr
                          onClick={
                            phase <= 1 || phase === 10
                              ? () => {
                                  setActiveIndex(idx);
                                }
                              : undefined
                          }
                          tabIndex={phase <= 1 || phase === 10 ? 0 : undefined}
                          key={idx}
                          className={`${
                            idx === activeRow
                              ? "bg-black/10  dark:bg-zinc-900 "
                              : ""
                          } ${
                            phase <= 1 || phase === 10
                              ? "cursor-pointer  hover:bg-black/10 dark:hover:bg-zinc-900"
                              : ""
                          }`}
                        >
                          <td className="py-2">{idx + 1}</td>
                          <td className="py-2">{SNPInfections[idx]}</td>
                          <td className="py-2">{MHPInfections[idx]}</td>

                          {phase < 1 ? null : (
                            <td className="py-2">
                              {fixedData[2].infections[idx].trueMOI}
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  <tr className=" dark:brightness-125">
                    <td className="py-6">
                      {lang === "EN"
                        ? `Average`
                        : lang === "FR"
                        ? `Moyenne`
                        : `Média`}
                    </td>
                    <td
                      className={`py-6 text-xl
                          ${
                            phase < 1
                              ? ""
                              : Math.abs(SNPInfectionAverage - trueAverage) >
                                0.5
                              ? "text-microRed"
                              : Math.abs(SNPInfectionAverage - trueAverage) >
                                0.2
                              ? "text-orange-500/80"
                              : "text-interactiveBlue"
                          }
                          `}
                    >
                      {SNPInfectionAverage}
                    </td>
                    <td
                      className={`py-6 text-xl
                          ${
                            phase < 1
                              ? ""
                              : Math.abs(MHPInfectionAverage - trueAverage) >
                                0.5
                              ? "text-microRed"
                              : Math.abs(MHPInfectionAverage - trueAverage) >
                                0.2
                              ? "text-orange-500/80"
                              : "text-interactiveBlue"
                          }
                          `}
                    >
                      {MHPInfectionAverage}
                    </td>
                    {phase >= 1 && (
                      <td className={`py-6 text-xl text-interactiveBlue`}>
                        {trueAverage}
                      </td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              {phase === 2 ? null : (
                <div className="grid place-items-center">
                  <table className="table max-w-[400px] overflow-hidden bg-zinc-50 text-center dark:bg-zinc-700">
                    <thead className=" bg-interactiveBlue/40 text-current">
                      <tr>
                        <th className="translate-y-0.5 text-nowrap  py-4 ">
                          {lang === "EN"
                            ? `Infection`
                            : lang === "FR"
                            ? `Infection`
                            : `Infecção`}
                        </th>
                        <th className="translate-y-0.5 text-nowrap  py-4 ">
                          SNPs
                        </th>
                        <th className="translate-y-0.5 text-nowrap  py-4 ">
                          {lang === "EN"
                            ? `Microhaplotypes`
                            : lang === "FR"
                            ? `Microhaplotypes`
                            : `Microhaplótipos`}
                        </th>
                        {phase < 1 ? null : (
                          <th className="translate-y-0.5 text-nowrap  py-4 ">
                            {lang === "EN"
                              ? `True`
                              : lang === "FR"
                              ? `Vrai`
                              : `Verdadeiro`}
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {Array(10)
                        .fill(0)
                        .map((el, idx) => {
                          return (
                            <tr
                              onClick={
                                phase === 0 || phase === 10
                                  ? () => {
                                      setActiveIndex(idx);
                                    }
                                  : undefined
                              }
                              tabIndex={
                                phase === 0 || phase === 10 ? 0 : undefined
                              }
                              key={idx}
                              className={`${
                                idx === activeRow
                                  ? "bg-black/10  dark:bg-zinc-900 "
                                  : ""
                              } ${
                                phase === 0 || phase === 10
                                  ? "cursor-pointer  hover:bg-black/10 dark:hover:bg-zinc-900"
                                  : ""
                              }`}
                            >
                              <td className="py-2">{idx + 1}</td>
                              <td className="py-2">{SNPInfections[idx]}</td>
                              <td className="py-2">{MHPInfections[idx]}</td>

                              {phase < 1 ? null : (
                                <td className="py-2">
                                  {fixedData[2].infections[idx].trueMOI}
                                </td>
                              )}
                            </tr>
                          );
                        })}
                      <tr className=" dark:brightness-125">
                        <td className="py-6">
                          {lang === "EN"
                            ? `Average`
                            : lang === "FR"
                            ? `Moyenne`
                            : `Média`}
                        </td>
                        <td
                          className={`py-6 text-xl
                          ${
                            phase < 1
                              ? ""
                              : Math.abs(SNPInfectionAverage - trueAverage) >
                                0.5
                              ? "text-microRed"
                              : Math.abs(SNPInfectionAverage - trueAverage) >
                                0.2
                              ? "text-orange-500/80"
                              : "text-interactiveBlue"
                          }
                          `}
                        >
                          {SNPInfectionAverage}
                        </td>
                        <td
                          className={`py-6 text-xl
                          ${
                            phase < 1
                              ? ""
                              : Math.abs(MHPInfectionAverage - trueAverage) >
                                0.5
                              ? "text-microRed"
                              : Math.abs(MHPInfectionAverage - trueAverage) >
                                0.2
                              ? "text-orange-500/80"
                              : "text-interactiveBlue"
                          }
                          `}
                        >
                          {MHPInfectionAverage}
                        </td>
                        {phase >= 1 && (
                          <td className={`py-6 text-xl text-interactiveBlue`}>
                            {trueAverage}
                          </td>
                        )}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )
        }
        rightHeader={
          phase <= 1
            ? lang === "EN"
              ? "MOI Estimates"
              : lang === "FR"
              ? "Estimations du MOI"
              : "Estimativas de MOI"
            : lang === "EN"
            ? "Feedback"
            : lang === "FR"
            ? "Rétroaction"
            : "Opinião"
        }
      />

      <PartFiveControlPanel />
    </div>
  );
}
