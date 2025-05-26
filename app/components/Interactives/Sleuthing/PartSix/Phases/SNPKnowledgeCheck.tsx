import {
  pairwiseCombosAtom,
  partSixCompletionAtom,
  partSixSNPKnowledgeCheckQuestionsAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import SNPComparator from "../Comparators/SNPs/SNPComparator";
import { useAtom, useAtomValue } from "jotai";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import Image from "next/image";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { atomWithStorage, RESET } from "jotai/utils";
import { useEffect } from "react";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import ImageContainer from "@/app/components/Interactives/Shared/misc/ImageContainer";

export const p6addedQuestionsAtom = atomWithStorage<{
  1: null | number;
  2: null | number;
  3: number[];
}>("p6addedQuestionAtom", {
  1: null,
  2: null,
  3: [],
});

export default function SNPKnowledgeCheck({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const pairwiseCombos = useAtomValue(pairwiseCombosAtom);
  const phase = useAtomValue(phase2Atom);
  const completion = useAtomValue(partSixCompletionAtom);
  const [questions, setQuestions] = useAtom(
    partSixSNPKnowledgeCheckQuestionsAtom,
  );
  const [p6AddedQuestions, setP6AddedQuestions] = useAtom(p6addedQuestionsAtom);

  let x =
    pairwiseCombos[1][2].filter((bool) => {
      return bool;
    }).length / 12;

  let y =
    pairwiseCombos[1][3].filter((bool) => {
      return bool;
    }).length / 12;

  let z =
    pairwiseCombos[2][3].filter((bool) => {
      return bool;
    }).length / 12;

  let xy =
    pairwiseCombos[1][4].filter((bool) => {
      return bool;
    }).length / 12;

  let yz =
    pairwiseCombos[2][4].filter((bool) => {
      return bool;
    }).length / 12;

  // useEffect(() => {
  //   setP6AddedQuestions(RESET);
  // }, []);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? "IBS Results"
          : lang === "FR"
          ? "Résultats IBS"
          : lang === "PT"
          ? "Resultados IBS"
          : "IBS Results"
      }
      leftContent={
        <div className="sticky top-24 flex origin-top flex-col gap-8 lg:scale-90">
          <div className="">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-base ">
                  <th>
                    {lang === "EN"
                      ? `Comparisons where IBD = 0%`
                      : lang === "FR"
                      ? "Comparaisons où IBD = 0%"
                      : lang === "PT"
                      ? "Comparações onde IBD = 0%"
                      : ""}
                  </th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[1, 2]} />
                  </td>
                  <td>{(x * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[1, 3]} />
                  </td>
                  <td>{(y * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[2, 3]} />
                  </td>
                  <td>{(z * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="  py-4">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-base">
                  <th>
                    {lang === "EN"
                      ? `Comparisons where IBD = 50%`
                      : lang === "FR"
                      ? "Comparaisons où IBD = 50%"
                      : lang === "PT"
                      ? "Comparações onde IBD = 50%"
                      : ""}
                  </th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[1, 4]} />
                  </td>
                  <td>{(xy * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[2, 4]} />
                  </td>
                  <td>{(yz * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-base">
                  <th>
                    {lang === "EN"
                      ? `Comparisons where IBD = 100%`
                      : lang === "FR"
                      ? "Comparaisons où IBD = 100%"
                      : lang === "PT"
                      ? "Comparações onde IBD = 100%"
                      : ""}
                  </th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[3, 3]} lang={lang} />
                  </td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
      rightHeader={
        lang === "EN"
          ? "Questions"
          : lang === "FR"
          ? "Questions"
          : lang === "PT"
          ? "Perguntas"
          : "Questions"
      }
      rightContent={
        <div>
          <KnowledgeCheckQuestion
            callback={(questionIdx, answerIdx) => {
              setP6AddedQuestions({
                ...p6AddedQuestions,
                1: p6AddedQuestions[1] === answerIdx ? null : answerIdx,
              });
            }}
            questionIdx={1}
            classNames={{
              answersContainer: "mt-4 grid gap-4",
            }}
            answers={[
              {
                checked: p6AddedQuestions[1] === 1,
                correct: false,
                index: 1,
                text:
                  lang === "EN"
                    ? "Not very reliably"
                    : lang === "FR"
                    ? "Pas très fiable"
                    : lang === "PT"
                    ? "Não muito confiável"
                    : "Not very reliably",
              },
              {
                checked: p6AddedQuestions[1] === 2,
                correct: false,
                index: 2,
                text:
                  lang === "EN"
                    ? "Somewhat reliably"
                    : lang === "FR"
                    ? "Assez fiable"
                    : lang === "PT"
                    ? "Um tanto confiável"
                    : "Somewhat reliably",
              },
              {
                checked: p6AddedQuestions[1] === 3,
                correct: true,
                index: 3,
                text:
                  lang === "EN"
                    ? "Very reliably"
                    : lang === "FR"
                    ? "Très fiable"
                    : lang === "PT"
                    ? "Muito confiável"
                    : "Very reliably",
              },
            ]}
            hasAnswer={p6AddedQuestions[1] === 3}
            headerText={
              lang === "EN"
                ? "Based on your results, how reliably do you think you could distinguish identically related parasites from those that are completely unrelated using IBS?"
                : lang === "FR"
                ? "Sur la base de vos résultats, avec quelle fiabilité pensez-vous pouvoir distinguer les parasites liés de manière identique de ceux qui ne sont pas liés en utilisant l'IBS ?"
                : lang === "PT"
                ? "Com base nos seus resultados, com que fiabilidade pensa que poderia distinguir parasitas relacionados de forma idêntica daqueles que não estão relacionados usando o SCI?"
                : "Based on your results, how reliably do you think you could distinguish identically related parasites from those that are completely unrelated using IBS?"
            }
          />
          <QuestionResponseText
            visible={p6AddedQuestions[1] === 3}
            content={
              lang === "EN" ? (
                <div className="mt-8 flex flex-col gap-4 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400">
                  <p>
                    Statistically, it should be relatively straightforward to
                    distinguish perfectly related parasites from completely
                    unrelated parasites with 12 perfectly balanced SNPs. This is
                    because perfectly related parasites will always have an IBS
                    of 1, whereas completely unrelated parasites will almost
                    always have IBS at least a little less than 1, like in these
                    two histograms:
                  </p>
                  <ImageContainer
                    className="dark:text-white"
                    path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
                    id=""
                    label="IBS Distribution - IBD 1"
                    alt=""
                  />
                  <ImageContainer
                    className="dark:text-white"
                    path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                    id=""
                    label="IBS Distribution - IBD 0"
                    alt=""
                  />
                </div>
              ) : lang === "FR" ? (
                <div className="mt-8 flex flex-col gap-4 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400">
                  <p>
                    Statistiquement, il devrait être relativement simple de
                    distinguer les parasites parfaitement liés des parasites
                    complètement non liés avec 12 SNPs parfaitement équilibrés.
                    En effet, les parasites parfaitement liés auront toujours un
                    IBS de 1, tandis que les parasites complètement non liés
                    auront presque toujours un IBS au moins un peu inférieur à
                    1, comme dans ces deux histogrammes :
                  </p>
                  <ImageContainer
                    className="dark:text-white"
                    path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
                    id=""
                    label="Distribution IBS - IBD 1"
                    alt=""
                  />
                  <ImageContainer
                    className="dark:text-white"
                    path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                    id=""
                    label="Distribution IBS - IBD 0"
                    alt=""
                  />
                </div>
              ) : lang === "PT" ? (
                <div className="mt-8 flex flex-col gap-4 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400">
                  <p>
                    Estatisticamente, deve ser relativamente simples distinguir
                    parasitas perfeitamente relacionados de parasitas
                    completamente não relacionados com 12 SNPs perfeitamente
                    equilibrados. Isto porque os parasitas perfeitamente
                    relacionados terão sempre um SCI de 1, enquanto os parasitas
                    completamente não relacionados terão quase sempre um SCI
                    pelo menos um pouco inferior a 1, como nestes dois
                    histogramas:
                  </p>
                  <ImageContainer
                    className="dark:text-white"
                    path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
                    id=""
                    label="Distribuição SCI - SCI 1"
                    alt=""
                  />
                  <ImageContainer
                    className="dark:text-white"
                    path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                    id=""
                    label="Distribuição SCI - SCI 0"
                    alt=""
                  />
                </div>
              ) : (
                ""
              )
            }
          />
          {p6AddedQuestions[1] === 3 && (
            <div className="mt-8">
              <KnowledgeCheckQuestion
                callback={(questionIdx, answerIdx) => {
                  setP6AddedQuestions({
                    ...p6AddedQuestions,
                    2: p6AddedQuestions[2] === answerIdx ? null : answerIdx,
                  });
                }}
                questionIdx={2}
                classNames={{
                  answersContainer: "mt-4 grid gap-4",
                }}
                answers={[
                  {
                    checked: p6AddedQuestions[2] === 1,
                    correct: true,
                    index: 1,
                    text:
                      lang === "EN"
                        ? "Not very reliably"
                        : lang === "FR"
                        ? "Pas très fiable"
                        : lang === "PT"
                        ? "Não muito confiável"
                        : "Not very reliably",
                  },
                  {
                    checked: p6AddedQuestions[2] === 2,
                    correct: false,
                    index: 2,
                    text:
                      lang === "EN"
                        ? "Somewhat reliably"
                        : lang === "FR"
                        ? "Assez fiable"
                        : lang === "PT"
                        ? "Um tanto confiável"
                        : "Somewhat reliably",
                  },
                  {
                    checked: p6AddedQuestions[2] === 3,
                    correct: false,
                    index: 3,
                    text:
                      lang === "EN"
                        ? "Very reliably"
                        : lang === "FR"
                        ? "Très fiable"
                        : lang === "PT"
                        ? "Muito confiável"
                        : "Very reliably",
                  },
                ]}
                hasAnswer={p6AddedQuestions[2] === 1}
                headerText={
                  lang === "EN"
                    ? `Distinguishing related parasites from unrelated parasites appears reasonably straightforward with SNPs, but what about
                  distinguishing sibling parasites (IBD 0.5) from those that are
                  unrelated (IBD 0)?`
                    : lang === "FR"
                    ? `La distinction des parasites apparentés des parasites non apparentés semble raisonnablement simple avec les SNPs, mais qu'en est-il de la distinction des parasites frères (IBD 0,5) de ceux qui ne sont pas apparentés (IBD 0) ?`
                    : lang === "PT"
                    ? `Distinguir parasitas relacionados de parasitas não relacionados parece razoavelmente simples com SNPs, mas que tal distinguir parasitas irmãos (SCI 0,5) daqueles que não estão relacionados (SCI 0)?`
                    : `Distinguishing related parasites from unrelated parasites appears reasonably straightforward with SNPs, but what about
                  distinguishing sibling parasites (IBD 0.5) from those that are
                  unrelated (IBD 0)?`
                }
              />
              <QuestionResponseText
                visible={p6AddedQuestions[2] === 1}
                content={
                  lang === "EN" ? (
                    <div className="mt-8 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400">
                      <p>
                        Siblings may be difficult to reliably distinguish from
                        unrelated parasites. This is because the number of
                        matches we expect to see with 12 SNPs overlaps in these
                        two situations. We tend to have more matches on average
                        in the siblings than for completely unrelated parasites,
                        but not reliably so.
                      </p>
                      <ImageContainer
                        className="dark:text-white"
                        path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"
                        id=""
                        label="IBS Distribution - IBD 0.5"
                        alt=""
                      />
                      <ImageContainer
                        className="dark:text-white"
                        path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                        id=""
                        label="IBS Distribution - IBD 0"
                        alt=""
                      />
                      <p className="my-4">
                        If we have 7, 8, or 9 matches, for example, it could be
                        from siblings or completely unrelated parasites.
                      </p>
                      <ImageContainer
                        className="dark:text-white"
                        path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
                        id=""
                        label="IBS Distribution - IBD 0, 0.5, 1.0"
                        alt=""
                      />
                    </div>
                  ) : lang === "FR" ? (
                    <div className="mt-8 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400">
                      <p>
                        Les frères et sœurs peuvent être difficiles à distinguer
                        de manière fiable des parasites non apparentés. En
                        effet, le nombre de correspondances que nous nous
                        attendons à voir avec 12 SNPs se chevauche dans ces deux
                        situations. Nous avons tendance à avoir plus de
                        correspondances en moyenne chez les frères et sœurs que
                        chez les parasites complètement non apparentés, mais pas
                        de manière fiable.
                      </p>
                      <ImageContainer
                        className="dark:text-white"
                        path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"
                        id=""
                        label="Distribution IBS - IBD 0.5"
                        alt=""
                      />
                      <ImageContainer
                        className="dark:text-white"
                        path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                        id=""
                        label="Distribution IBS - IBD 0"
                        alt=""
                      />
                      <p className="my-4">
                        Si nous avons 7, 8 ou 9 correspondances, par exemple,
                        cela pourrait provenir de frères et sœurs ou de
                        parasites complètement non apparentés.
                      </p>
                      <ImageContainer
                        className="dark:text-white"
                        path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
                        id=""
                        label="Distribution IBS - IBD 0, 0.5, 1.0"
                        alt=""
                      />
                    </div>
                  ) : lang === "PT" ? (
                    <div className="mt-8 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400">
                      <p>
                        Os irmãos podem ser difíceis de distinguir de forma
                        fiável de parasitas não relacionados. Isto porque o
                        número de correspondências que esperamos ver com 12 SNPs
                        sobrepõe-se nestas duas situações. Tendemos a ter mais
                        correspondências em média nos irmãos do que para
                        parasitas completamente não relacionados, mas não de
                        forma fiável.
                      </p>
                      <ImageContainer
                        className="dark:text-white"
                        path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"
                        id=""
                        label="Distribuição SCI - SCI 0,5"
                        alt=""
                      />
                      <ImageContainer
                        className="dark:text-white"
                        path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                        id=""
                        label="Distribuição SCI - SCI 0"
                        alt=""
                      />
                      <p className="my-4">
                        Se tivermos 7, 8 ou 9 correspondências, por exemplo,
                        isso pode ser de irmãos ou parasitas completamente não
                        relacionados.
                      </p>
                      <ImageContainer
                        className="dark:text-white"
                        path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
                        id=""
                        label="Distribuição SCI - SCI 0, 0,5, 1,0"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )
                }
              />
            </div>
          )}
          {p6AddedQuestions[2] === 1 && (
            <div className="mt-8">
              <KnowledgeCheckQuestion
                callback={(questionIdx, answerIdx) => {
                  let newResults = [...p6AddedQuestions[3]];
                  let targetIndex = newResults.indexOf(answerIdx);
                  if (targetIndex !== -1) {
                    newResults = newResults
                      .slice(0, targetIndex)
                      .concat(
                        newResults.slice(targetIndex + 1, newResults.length),
                      );
                    // newResults.splice(targetIndex);
                  } else {
                    newResults.push(answerIdx);
                    console.log(newResults);
                  }
                  setP6AddedQuestions({ ...p6AddedQuestions, 3: newResults });
                  // setP6AddedQuestions({
                  //   ...p6AddedQuestions,
                  //   2: p6AddedQuestions[2] === answerIdx ? null : answerIdx,
                  // });
                }}
                questionIdx={3}
                classNames={{
                  answersContainer: "mt-4 grid gap-4",
                }}
                answers={[
                  {
                    checked: p6AddedQuestions[3].includes(1),
                    correct: true,
                    index: 1,
                    text:
                      lang === "EN"
                        ? "Increase the number of loci that you genotype, e.g. from 12 to 100."
                        : lang === "FR"
                        ? "Augmenter le nombre de loci que vous génotypez, par exemple de 12 à 100."
                        : lang === "PT"
                        ? "Aumentar o número de loci que genotipa, por exemplo, de 12 para 100."
                        : "Increase the number of loci that you genotype, e.g. from 12 to 100.",
                  },
                  {
                    checked: p6AddedQuestions[3].includes(2),
                    correct: true,
                    index: 2,
                    text:
                      lang === "EN"
                        ? "Increase the diversity of loci that you genotype, e.g. by using microhaplotypes instead of SNPs."
                        : lang === "FR"
                        ? "Augmenter la diversité des loci que vous génotypez, par exemple en utilisant des microhaplotypes au lieu de SNPs."
                        : lang === "PT"
                        ? "Aumentar a diversidade de loci que genotipa, por exemplo, usando microhaplótipos em vez de SNPs."
                        : "Increase the diversity of loci that you genotype, e.g. by using microhaplotypes instead of SNPs.",
                  },
                  {
                    checked: p6AddedQuestions[3].includes(3),
                    correct: false,
                    index: 3,
                    text:
                      lang === "EN"
                        ? "Look at them under a microscope and try to distinguish them based on how they look."
                        : lang === "FR"
                        ? "Les regarder au microscope et essayer de les distinguer en fonction de leur apparence."
                        : lang === "PT"
                        ? "Observá-los ao microscópio e tentar distingui-los com base no seu aspeto."
                        : "Look at them under a microscope and try to distinguish them based on how they look.",
                  },
                ]}
                hasAnswer={
                  p6AddedQuestions[3].includes(1) &&
                  p6AddedQuestions[3].includes(2) &&
                  !p6AddedQuestions[3].includes(3)
                }
                headerText={
                  lang === "EN"
                    ? "How might you increase your ability to distinguish related from unrelated parasites? Choose all that apply."
                    : lang === "FR"
                    ? "Comment pourriez-vous augmenter votre capacité à distinguer les parasites apparentés des parasites non apparentés ? Choisissez toutes les réponses qui s'appliquent."
                    : lang === "PT"
                    ? "Como poderia aumentar a sua capacidade de distinguir parasitas relacionados de parasitas não relacionados? Escolha todas as opções aplicáveis."
                    : "How might you increase your ability to distinguish related from unrelated parasites? Choose all that apply."
                }
              />
              <QuestionResponseText
                visible={
                  p6AddedQuestions[3].includes(1) &&
                  p6AddedQuestions[3].includes(2) &&
                  !p6AddedQuestions[3].includes(3)
                }
                content={
                  lang === "EN" ? (
                    <div className="mt-8 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400">
                      <div className=" flex flex-col gap-4">
                        <p>
                          The more loci you evaluate, the easier it will be to
                          distinguish the proportion of matches (IBS) consistent
                          with related vs. unrelated parasites. Similarly, the
                          more diverse the loci, the less likely there will be
                          matches occurring by chance, so IBS will more closely
                          reflect IBD.
                        </p>
                        <p>
                          Increasing both the number and diversity of loci will
                          give you the greatest power. Loci with higher
                          diversity are particularly useful when you have
                          polyclonal infections, which you know can be common,
                          so you decide to go this route.
                        </p>
                        <p>
                          You know from an online course about malaria genomics
                          that microhaplotypes have more diversity than SNPs and
                          can be easily genotyped with targeted sequencing, so
                          you direct your lab to redo the sequencing using 12
                          microhaplotypes instead of 12 SNPs.
                        </p>
                      </div>
                    </div>
                  ) : lang === "FR" ? (
                    <div className="mt-8 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400">
                      <div className=" flex flex-col gap-4">
                        <p>
                          Plus vous évaluez de loci, plus il sera facile de
                          distinguer la proportion de correspondances (IBS)
                          cohérentes avec les parasites apparentés par rapport
                          aux parasites non apparentés. De même, plus les loci
                          sont diversifiés, moins il y aura de correspondances
                          se produisant par hasard, de sorte que l'IBS reflétera
                          plus étroitement l'IBD.
                        </p>
                        <p>
                          L'augmentation du nombre et de la diversité des loci
                          vous donnera la plus grande puissance. Les loci avec
                          une plus grande diversité sont particulièrement utiles
                          lorsque vous avez des infections polyclonales, ce qui,
                          vous le savez, peut être courant, vous décidez donc
                          d'emprunter cette voie.
                        </p>
                        <p>
                          Vous savez, grâce à un cours en ligne sur la génomique
                          du paludisme, que les microhaplotypes ont plus de
                          diversité que les SNPs et peuvent être facilement
                          génotypés avec un séquençage ciblé, vous demandez donc
                          à votre laboratoire de refaire le séquençage en
                          utilisant 12 microhaplotypes au lieu de 12 SNPs.
                        </p>
                      </div>
                    </div>
                  ) : lang === "PT" ? (
                    <div className="mt-8 text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400">
                      <div className=" flex flex-col gap-4">
                        <p>
                          Quanto mais loci avaliar, mais fácil será distinguir a
                          proporção de correspondências (SCI) consistente com
                          parasitas relacionados vs. não relacionados. Da mesma
                          forma, quanto mais diversos forem os loci, menos
                          provável será que ocorram correspondências por acaso,
                          pelo que o SCI refletirá mais de perto o SCI.
                        </p>
                        <p>
                          Aumentar tanto o número como a diversidade de loci
                          dar-lhe-á o maior poder. Os loci com maior diversidade
                          são particularmente úteis quando tem infeções
                          policlonais, o que sabe que pode ser comum, pelo que
                          decide seguir este caminho.
                        </p>
                        <p>
                          Sabe, através de um curso online sobre genómica da
                          malária, que os microhaplótipos têm mais diversidade
                          do que os SNPs e podem ser facilmente genotipados com
                          sequenciação direcionada, pelo que instrui o seu
                          laboratório a refazer a sequenciação usando 12
                          microhaplótipos em vez de 12 SNPs.
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                }
              />
            </div>
          )}
        </div>
      }
    />
  );

  return (
    <StandardLayout>
      <div>
        {/* <FormHeader text={`IBS Tables`} /> */}
        <div className="origin-top lg:scale-90">
          <div className="">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-base ">
                  <th>Comparisons where IBD = 0%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[1, 2]} />
                  </td>
                  <td>{(x * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[1, 3]} />
                  </td>
                  <td>{(y * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[2, 3]} />
                  </td>
                  <td>{(z * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="  py-4">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-base">
                  <th>Comparisons where IBD = 50%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[1, 4]} />
                  </td>
                  <td>{(xy * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[2, 4]} />
                  </td>
                  <td>{(yz * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-base">
                  <th>Comparisons where IBD = 100%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <SNPComparator activeCombo={[3, 3]} />
                  </td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <FormHeader text={`Questions`} />

        <iframe
          src="https://app.sli.do/event/dMvSri9uZuLjfxXNeS3m2o/embed/polls/89af5580-b68c-4084-af9c-a74cebe5bf45"
          className={
            phase === 15 ? "h-[500px] w-full [&>*]:overflow-hidden" : "hidden"
          }
        ></iframe>
        {phase === 16 && (
          <div>
            <div className="fadeIn500 bg-primaryBlue/10 p-8 text-sm">
              <p>
                Statistically, it should be relatively straightforward to
                distinguish perfectly related parasites from completely
                unrelated parasites with 12 perfectly balanced SNPs. This is
                because perfectly related parasites will always have an IBS of
                1, whereas completely unrelated parasites will almost always
                have IBS at least a little less than 1, like in these two
                histograms:
              </p>
            </div>
            <div className="fadeIn500 mt-12 hidden p-4 text-center  md:block">
              <label
                className="font-bold [fontSize:15px]"
                htmlFor="75/25-SNP-image"
              >
                IBS Distribution of Perfectly Related Clones
              </label>
              <Image
                id="IBD-100-svg"
                src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"}
                height={400}
                width={600}
                alt="SNP IBD 100/0 distribution diagram"
              />
            </div>
            <div className="fadeIn500 mt-4 hidden p-4 text-center  md:block">
              <label className="font-bold [fontSize:15px]" htmlFor="IBD-50-svg">
                IBS Distribution of Unrelated Clones
              </label>{" "}
              <Image
                id="IBD-50-svg"
                src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"}
                height={400}
                width={600}
                alt="SNP IBD 50/50 distribution diagram"
              />
            </div>
          </div>
        )}
        {phase === 18 && (
          <div>
            <div className="fadeIn500 bg-primaryBlue/10 p-8 text-sm">
              <p>
                Siblings may be difficult to reliably distinguish from unrelated
                parasites. This is because the number of matches we expect to
                see with 12 SNPs overlaps in these two situations. We tend to
                have more matches on average in the siblings than for completely
                unrelated parasites, but not reliably so.
              </p>
            </div>
            <div className="fadeIn500 mt-4 hidden p-4 text-center  md:block">
              <label htmlFor="75/25-SNP-image">75/25 allele frequency</label>
              <Image
                id="75/25-SNP-image"
                src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                height={400}
                width={600}
                alt="SNP IBD 100/0 distribution diagram"
              />
            </div>
            <div className="fadeIn500 mt-4 hidden p-4 text-center  md:block">
              <label htmlFor="50/50-SNP-image">50/50 allele frequency</label>
              <Image
                id="50/50-SNP-image"
                src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"}
                height={400}
                width={600}
                alt="SNP IBD 50/50 distribution diagram"
              />
            </div>
          </div>
        )}
        <iframe
          src="https://app.sli.do/event/dMvSri9uZuLjfxXNeS3m2o/embed/polls/d4148767-68d3-47aa-84ad-baab7e8dd0cb"
          className={
            phase === 17 ? "h-[500px] w-full [&>*]:overflow-hidden" : "hidden"
          }
        ></iframe>
        {phase === 19 && (
          <div>
            <KnowledgeCheckQuestion
              answers={[
                {
                  checked: questions[1] === true,
                  correct: true,
                  index: 0,
                  text: "Increase the number of loci that you genotype, e.g. from 12 to 100",
                },
                {
                  checked: questions[2] === true,
                  correct: true,
                  index: 1,
                  text: "Increase the diversity of loci that you genotype, e.g. by using microhaplotypes instead of SNPs",
                },
                {
                  checked: questions[3] === true,
                  correct: false,
                  index: 2,
                  text: "Look at them under a microscope and try to distinguish them based on how they look",
                },
              ]}
              callback={(questionIdx, answerIdx) => {
                setQuestions({
                  ...questions,
                  [answerIdx + 1]: !questions[answerIdx + 1],
                });
              }}
              hasAnswer={
                questions[1] === true &&
                questions[2] === true &&
                (questions[3] === false || questions[3] === null)
              }
              headerText="How might you increase your ability to distinguish related from unrelated parasites? Choose all that apply."
              questionIdx={1}
              classNames={{
                answersContainer: "grid gap-4 mt-4",
              }}
            />
            {/* <div className="fadeIn500 bg-primaryBlue/10 p-8 text-sm">
              <p>
                For example, if we have 7, 8, or 9 matches, for example, it
                could be from siblings or completely unrelated parasites.
              </p>
            </div>
            <div className="mt-12">
              <Image
                height={400}
                width={600}
                alt=""
                src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD_0_0.5_1_together.svg"
              />
            </div> */}
          </div>
        )}
        {(phase === 20 || phase === 21) && (
          <div>
            <KnowledgeCheckQuestion
              answers={[
                {
                  checked: questions[1] === true,
                  correct: true,
                  index: 0,
                  text: "Increase the number of loci that you genotype, e.g. from 12 to 100",
                },
                {
                  checked: questions[2] === true,
                  correct: true,
                  index: 1,
                  text: "Increase the diversity of loci that you genotype, e.g. by using microhaplotypes instead of SNPs",
                },
                {
                  checked: questions[3] === true,
                  correct: false,
                  index: 2,
                  text: "Look at them under a microscope and try to distinguish them based on how they look",
                },
              ]}
              callback={(questionIdx, answerIdx) => {
                setQuestions({
                  ...questions,
                  [answerIdx + 1]: !questions[answerIdx + 1],
                });
              }}
              hasAnswer={
                questions[1] === true &&
                questions[2] === true &&
                (questions[3] === false || questions[3] === null)
              }
              headerText="How might you increase your ability to distinguish related from unrelated parasites? Choose all that apply."
              questionIdx={1}
              classNames={{
                answersContainer: "grid gap-4 mt-4",
              }}
            />
            <div
              className={`${
                questions[1] === true &&
                questions[2] === true &&
                (questions[3] === false || questions[3] === null)
                  ? "fadeIn500"
                  : "invisible"
              } bg-primaryBlue/10 mt-8 flex flex-col gap-2 p-4 text-sm lg:p-6`}
            >
              <p>
                The more loci you evaluate, the easier it will be to distinguish
                the proportion of matches (IBS) consistent with related vs.
                unrelated parasites. Similarly, the more diverse the loci, the
                less likely there will be matches occurring by chance, so IBS
                will more closely reflect IBD
              </p>

              <p>
                Increasing both the number and diversity of loci will give you
                the greatest power. Loci with higher diversity are particularly
                useful when you have polyclonal infections, which you know can
                be common, so you decide to go this route.
              </p>
              <p>
                You know from an online course about malaria genomics that
                microhaplotypes have more diversity than SNPs and can be easily
                genotyped with targeted sequencing, so you direct your lab to
                redo the sequencing using 12 microhaplotypes instead of 12 SNPs.
              </p>
            </div>
          </div>
          // <div>
          //   <h3>
          //     How might you increase your ability to distinguish related from
          //     unrelated parasites? Choose all that apply.
          //   </h3>
          //   <div className="flex flex-col items-start gap-4">
          //     <div className="mt-4 flex gap-2">
          //       <input
          //         id="kc-q1"
          //         onChange={(e) => {
          //           if (!completion[phase]) {
          //             setQuestions({ ...questions, 1: !questions[1] });
          //           }
          //         }}
          //         type="checkbox"
          //         className="checkbox h-4 w-4 accent-primaryBlue [--chkbg:#14828C]"
          //         checked={questions[1]}
          //       />
          //       <label htmlFor="kc-q1" className="text-sm">
          //         Increase the number of loci that you genotype, e.g. from 12 to
          //         100
          //       </label>
          //     </div>
          //     <div className="flex gap-2 ">
          //       <input
          //         id="kc-q2"
          //         onChange={(e) => {
          //           if (!completion[phase]) {
          //             setQuestions({ ...questions, 2: !questions[2] });
          //           }
          //         }}
          //         type="checkbox"
          //         className="checkbox h-4 w-4 accent-primaryBlue [--chkbg:#14828C]"
          //         checked={questions[2]}
          //       />
          //       <label htmlFor="kc-q2" className="text-sm">
          //         Increase the diversity of loci that you genotype, e.g. by
          //         using microhaplotypes instead of SNPs
          //       </label>
          //     </div>
          //     <div className="flex gap-2 ">
          //       <input
          //         disabled={completion[20]}
          //         id="kc-q3"
          //         onChange={(e) => {
          //           if (!completion[phase]) {
          //             setQuestions({ ...questions, 3: !questions[3] });
          //           }
          //         }}
          //         type="checkbox"
          //         className={`checkbox h-4 w-4 accent-microRed [--chkbg:#E61048]`}
          //         checked={questions[3]}
          //       />
          //       <label
          //         htmlFor="kc-q3"
          //         className={`text-sm  ${completion[20] ? "text-gray-500" : ""}`}
          //       >
          //         Look at them under a microscope and try to distinguish them
          //         based on how they look
          //       </label>
          //     </div>
          //   </div>
          //   {phase === 21 && (
          //     <div className="fadeIn500 mt-8 bg-primaryBlue/10 p-8 text-sm">
          //       <p>
          //         Correct: The more loci you evaluate, the easier it will be to
          //         distinguish the proportion of matches (IBS) consistent with
          //         related vs. unrelated parasites. Similarly, the more diverse
          //         the loci, the less likely there will be matches occurring by
          //         chance, so IBS will more closely reflect IBD.
          //       </p>
          //     </div>
          //   )}
          // </div>
        )}
      </div>
    </StandardLayout>
  );

  return (
    <div className="flex flex-col flex-wrap justify-between gap-8">
      <table className="table w-full max-w-[500px] text-center">
        <thead>
          <tr className=" text-sm">
            <th>Comparisons where IBD = 0</th>
            <th>IBS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[1, 2]} />
            </td>
            <td>{(x * 100).toFixed(1)}%</td>
          </tr>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[1, 3]} />
            </td>
            <td>{(y * 100).toFixed(1)}%</td>
          </tr>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[2, 3]} />
            </td>
            <td>{(z * 100).toFixed(1)}%</td>
          </tr>
        </tbody>
      </table>
      <table className="table w-full max-w-[500px] text-center">
        <thead>
          <tr className=" text-sm">
            <th>Comparisons where IBD = 1/2</th>
            <th>IBS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[1, 4]} />
            </td>
            <td>{(xy * 100).toFixed(1)}%</td>
          </tr>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[2, 4]} />
            </td>
            <td>{(yz * 100).toFixed(1)}%</td>
          </tr>
        </tbody>
      </table>
      <table className="table w-full max-w-[500px] text-center">
        <thead>
          <tr className=" text-sm">
            <th>Comparisons where IBD = 0</th>
            <th>IBS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-[500px]">
              <SNPComparator activeCombo={[3, 3]} />
            </td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
