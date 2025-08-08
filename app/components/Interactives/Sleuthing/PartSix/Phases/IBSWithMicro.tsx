import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import Image from "next/image";
import MicrohaplotypeComparator from "../Comparators/MHPs/MicrohaplotypeComparators";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import { pairwiseCombosMHPsAtom } from "@/data/Interactives/interactiveStore";
import { P6Step2QuestionsAtom } from "./Genotypes";
import { useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";

export const SNPvsMHPquestionAtom = atomWithStorage<number | null>(
  "SNPvsMHPquestionAtom",
  null,
);

export default function IBSWithMicro({ lang }: { lang: "EN" | "FR" | "PT" }) {
  const [questions, setQuestions] = useAtom(P6Step2QuestionsAtom);
  const pairwiseCombos = useAtomValue(pairwiseCombosMHPsAtom);
  const [SNPvsMHPquestion, setSNPvsMHPquestion] = useAtom(SNPvsMHPquestionAtom);
  let x, y, z, xy, yz;
  x =
    pairwiseCombos[1][2].filter((bool) => {
      return bool;
    }).length / 12;

  y =
    pairwiseCombos[1][3].filter((bool) => {
      return bool;
    }).length / 12;

  z =
    pairwiseCombos[2][3].filter((bool) => {
      return bool;
    }).length / 12;

  xy =
    pairwiseCombos[1][4].filter((bool) => {
      return bool;
    }).length / 12;

  yz =
    pairwiseCombos[2][4].filter((bool) => {
      return bool;
    }).length / 12;

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? `IBS Results`
          : lang === "FR"
          ? `Résultats IBS`
          : lang === "PT"
          ? `Resultados IBS`
          : ""
      }
      leftContent={
        <div>
          <div className="mx-auto max-w-[600px] origin-top lg:scale-90">
            <div className="">
              <table className="table w-full  text-center">
                <thead>
                  <tr className=" text-sm">
                    <th>
                      {lang === "EN"
                        ? `Comparisons where IBD = 0%`
                        : lang === "FR"
                        ? `Comparaisons où IBD = 0%`
                        : lang === "PT"
                        ? `Comparações onde IBD = 0%`
                        : ""}
                    </th>
                    <th>IBS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-none">
                    <td className="w-[500px] px-0 py-2">
                      <MicrohaplotypeComparator
                        lang={lang}
                        activeCombo={[1, 2]}
                      />
                    </td>
                    <td>{(x * 100).toFixed(1)}%</td>
                  </tr>
                  <tr className="border-none">
                    <td className="w-[500px] px-0 py-2">
                      <MicrohaplotypeComparator
                        lang={lang}
                        activeCombo={[1, 3]}
                      />
                    </td>
                    <td>{(y * 100).toFixed(1)}%</td>
                  </tr>
                  <tr className="border-none">
                    <td className="w-[500px] px-0 py-2">
                      <MicrohaplotypeComparator
                        lang={lang}
                        activeCombo={[2, 3]}
                      />
                    </td>
                    <td>{(z * 100).toFixed(1)}%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="">
              <table className="table w-full  text-center">
                <thead>
                  <tr className=" text-sm">
                    <th>
                      {lang === "EN"
                        ? `Comparisons where IBD = 50%`
                        : lang === "FR"
                        ? `Comparaisons où IBD = 50%`
                        : lang === "PT"
                        ? `Comparações onde IBD = 50%`
                        : ""}
                    </th>
                    <th>IBS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-none">
                    <td className="w-[500px] px-0 py-2">
                      <MicrohaplotypeComparator
                        lang={lang}
                        activeCombo={[1, 4]}
                      />
                    </td>
                    <td>{(xy * 100).toFixed(1)}%</td>
                  </tr>
                  <tr className="border-none">
                    <td className="w-[500px] px-0 py-2">
                      <MicrohaplotypeComparator
                        lang={lang}
                        activeCombo={[2, 4]}
                      />
                    </td>
                    <td>{(yz * 100).toFixed(1)}%</td>
                  </tr>
                </tbody>
              </table>
              <table className="table w-full  text-center">
                <thead>
                  <tr className=" text-sm">
                    <th>
                      {lang === "EN"
                        ? `Comparisons where IBD = 100%`
                        : lang === "FR"
                        ? `Comparaisons où IBD = 100%`
                        : lang === "PT"
                        ? `Comparações onde IBD = 100%`
                        : ""}
                    </th>
                    <th>IBS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-none">
                    <td className="w-[500px] px-0 py-2">
                      <MicrohaplotypeComparator
                        lang={lang}
                        activeCombo={[3, 3]}
                      />
                    </td>
                    <td>100.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-pretty text-center">
            {lang === "EN"
              ? `You have now completed genotyping with higher resolution
            microhaplotypes.`
              : lang === "FR"
              ? `Vous avez maintenant terminé le génotypage avec des
            microhaplotypes à plus haute résolution.`
              : lang === "PT"
              ? `Concluiu agora a genotipagem com microhaplótipos de maior
            resolução.`
              : ""}
          </p>
        </div>
      }
      rightHeader={
        lang === "EN"
          ? "Questions"
          : lang === "FR"
          ? "Questions"
          : lang === "PT"
          ? "Perguntas"
          : ""
      }
      rightContent={
        <div>
          <KnowledgeCheckQuestion
            answers={[
              {
                checked: SNPvsMHPquestion === 0,
                correct: true,
                index: 0,
                text:
                  lang === "EN"
                    ? "It is easier to distinguish related from unrelated parasites with microhaplotypes than it is with SNPs."
                    : lang === "FR"
                    ? "Il est plus facile de distinguer les parasites apparentés des parasites non apparentés avec les microhaplotypes qu'avec les SNP."
                    : lang === "PT"
                    ? "É mais fácil distinguir parasitas relacionados de parasitas não relacionados com microhaplótipos do que com SNPs."
                    : "",
              },
              {
                checked: SNPvsMHPquestion === 1,
                correct: false,
                index: 1,
                text:
                  lang === "EN"
                    ? "It is harder to distinguish related from unrelated parasites with microhaplotypes than it is with SNPs."
                    : lang === "FR"
                    ? "Il est plus difficile de distinguer les parasites apparentés des parasites non apparentés avec les microhaplotypes qu'avec les SNP."
                    : lang === "PT"
                    ? "É mais difícil distinguir parasitas relacionados de parasitas não relacionados com microhaplótipos do que com SNPs."
                    : "",
              },
              {
                checked: SNPvsMHPquestion === 2,
                correct: false,
                index: 2,
                text:
                  lang === "EN"
                    ? "It is equally difficult to distinguish related from unrelated parasites whether using microhaplotypes or SNPs."
                    : lang === "FR"
                    ? "Il est tout aussi difficile de distinguer les parasites apparentés des parasites non apparentés, que l'on utilise des microhaplotypes ou des SNP."
                    : lang === "PT"
                    ? "É igualmente difícil distinguir parasitas relacionados de parasitas não relacionados, quer se utilizem microhaplótipos ou SNPs."
                    : "",
              },
            ]}
            callback={(questionIdx, answerIdx) => {
              if (SNPvsMHPquestion === answerIdx) {
                setSNPvsMHPquestion(null);
              } else {
                setSNPvsMHPquestion(answerIdx);
              }
            }}
            hasAnswer={SNPvsMHPquestion === 0}
            headerText={
              lang === "EN"
                ? "How are your results with microhaplotypes different from when you compared laboratory clones with SNPs?"
                : lang === "FR"
                ? "En quoi vos résultats avec les microhaplotypes diffèrent-ils de ceux obtenus lors de la comparaison des clones de laboratoire avec les SNP ?"
                : lang === "PT"
                ? "Em que é que os seus resultados com microhaplótipos são diferentes de quando comparou clones de laboratório com SNPs?"
                : ""
            }
            questionIdx={1}
            classNames={{
              answersContainer: "grid gap-4 mt-4",
            }}
          />
          <QuestionResponseText
            className="mt-4"
            visible={SNPvsMHPquestion === 0}
            text={
              lang === "EN"
                ? `Your investment has paid off – with 12 SNPs it was difficult for you to distinguish siblings from unrelated parasites, and sometimes even from perfectly related parasites, based on the number of matches. `
                : lang === "FR"
                ? `Votre investissement a porté ses fruits : avec 12 SNP, il était difficile pour vous de distinguer les frères et sœurs des parasites non apparentés, et parfois même des parasites parfaitement apparentés, en fonction du nombre de correspondances.`
                : lang === "PT"
                ? `O seu investimento valeu a pena – com 12 SNPs foi difícil para si distinguir irmãos de parasitas não relacionados, e por vezes até de parasitas perfeitamente relacionados, com base no número de correspondências.`
                : ""
            }
          />
        </div>
      }
    />
  );

  return (
    <StandardLayout>
      <div>
        <FormHeader text="IBS Tables with Microhaplotypes" />
        <div className="origin-top lg:scale-90">
          <div className="">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-sm">
                  <th>Comparisons where IBD = 0%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[1, 2]} />
                  </td>
                  <td>{(x * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[1, 3]} />
                  </td>
                  <td>{(y * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[2, 3]} />
                  </td>
                  <td>{(z * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="">
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-sm">
                  <th>Comparisons where IBD = 50%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[1, 4]} />
                  </td>
                  <td>{(xy * 100).toFixed(1)}%</td>
                </tr>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[2, 4]} />
                  </td>
                  <td>{(yz * 100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
            <table className="table w-full  text-center">
              <thead>
                <tr className=" text-sm">
                  <th>Comparisons where IBD = 100%</th>
                  <th>IBS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-none">
                  <td className="w-[500px] px-0 py-2">
                    <MicrohaplotypeComparator activeCombo={[3, 3]} />
                  </td>
                  <td>100.0%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="pt-4">
      <table className="table w-full  text-center">
        <thead>
          <tr className=" text-sm">
            <th>Comparisons where IBD = 100%</th>
            <th>IBS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-none">
            <td className="w-[500px] py-2 px-0">
              <MicrohaplotypeComparator activeCombo={[3, 3]} />
            </td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
    </div> */}
      </div>
      <div>
        <h6 className="mb-8 text-center text-lg font-bold md:text-left">
          Questions
        </h6>
        <KnowledgeCheckQuestion
          answers={[
            {
              checked: SNPvsMHPquestion === 0,
              correct: true,
              index: 0,
              text: "It is easier to distinguish between unrelated parasites with microhaplotypes than it is with SNPs.",
            },
            {
              checked: SNPvsMHPquestion === 1,
              correct: false,
              index: 1,
              text: "It is harder to distinguish between unrelated parasites with microhaplotypes than it is with SNPs.",
            },
            {
              checked: SNPvsMHPquestion === 2,
              correct: false,
              index: 2,
              text: "It is equally difficult to distinguish between unrelated parasites whether using microhaplotypes or SNPs.",
            },
          ]}
          callback={(questionIdx, answerIdx) => {
            if (SNPvsMHPquestion === answerIdx) {
              setSNPvsMHPquestion(null);
            } else {
              setSNPvsMHPquestion(answerIdx);
            }
          }}
          hasAnswer={SNPvsMHPquestion === 0}
          headerText="How are your results with microhaplotypes different from when you compared laboratory clones with SNPs?"
          questionIdx={1}
          classNames={{
            answersContainer: "grid gap-4 mt-4",
          }}
        />
      </div>
    </StandardLayout>
  );
}
