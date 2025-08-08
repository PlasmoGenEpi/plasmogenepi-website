"use client";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import {
  activePairwiseMHPsComboAtom,
  pairwiseMHPCompletionAtom,
  partSixCloneRowsMHPsAtom,
  partSixCompletionAtom,
  partSixMHPPairwiseQuestionsAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import Image from "next/image";
import { useEffect } from "react";
import P6MHPCloneRowsWithHybrid from "../CloneRows/P6MHPCloneRowsWithHybrid";
import CompareSNPHybridCloneQuestions from "../Comparators/SNPs/CompareSNPHybridCloneQuestions";
import CompareMHPHybridCloneQuestions, {
  finalHybridQAtom,
} from "../Comparators/MHPs/CompareMHPHybridCloneQuestions";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import MultiRowLayout from "@/app/components/Interactives/Shared/misc/MultiRowLayout";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export default function CompareMHPClonesWithHybrid({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [pairwiseCompletion, setPairwiseCompletion] = useAtom(
    pairwiseMHPCompletionAtom,
  );
  const [activeCombo, setActiveCombo] = useAtom(activePairwiseMHPsComboAtom);
  const phase = useAtomValue(phase2Atom);
  const partSixPairwiseQuestions = useAtomValue(
    partSixMHPPairwiseQuestionsAtom,
  );
  const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);
  const finalHybridQ = useAtomValue(finalHybridQAtom);
  const completion = useAtomValue(partSixCompletionAtom);

  const [first, second] = activeCombo;

  // useEffect(() => {
  //   if (phase === 30) {
  //     setActiveCombo([1, 4]);
  //   } else if (phase === 31) {
  //     setActiveCombo([2, 4]);
  //   } else if (phase === 32) {
  //     setActiveCombo([3, 4]);
  //   }
  // }, [phase]);

  // useEffect(() => {
  //   if (phase === 12) {
  //     setActiveCombo([1, 4]);
  //   } else if (phase === 13) {
  //     setActiveCombo([2, 4]);
  //   } else if (phase === 15) {
  //     setActiveCombo([3, 4]);
  //   }
  // }, [phase, setActiveCombo]);

  let activePairwiseCombo: [number, number] =
    phase === 30
      ? [1, 4]
      : phase === 31
      ? [2, 4]
      : phase === 32
      ? [3, 4]
      : [1, 2];

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? `Genotype Comparisons with Microhaplotypes and Hybrid`
          : lang === "FR"
          ? `Comparaisons de génotypes avec des microhaplotypes et un hybride`
          : lang === "PT"
          ? `Comparações de genótipos com microhaplótipos e híbridos`
          : ""
      }
      leftContent={
        <div className="sticky top-20">
          <P6MHPCloneRowsWithHybrid
            lang={lang}
            activePairwiseCombo={activePairwiseCombo}
          />
          <div className="mt-2">
            {/* <SNPComparator
  activeCombo={
    phase === 12
      ? [1, 4]
      : phase === 13
        ? [2, 4]
        : phase === 14
          ? [3, 4]
          : activeCombo
  }
  label
/> */}
          </div>
          {phase === 13 &&
            partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3 && (
              <div className=" outline-primaryBlue mt-12 hidden p-4 text-center outline outline-2 md:block">
                <label htmlFor="75/25-SNP-image">
                  {lang === "EN"
                    ? `75/25 allele frequency`
                    : lang === "FR"
                    ? `Fréquence des allèles 75/25`
                    : lang === "PT"
                    ? `Frequência de alelos 75/25`
                    : ""}
                </label>
                {/* <Image
      id="SNP IBD 75/25 distribution diagram"
      src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
      height={400}
      width={600}
      alt=""
    /> */}
              </div>
            )}
          {phase === 14 &&
            partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12 && (
              <div className=" outline-primaryBlue mt-8 hidden p-4 outline outline-2 md:block">
                {/* <Image
      id="SNP IBD 100% distribution diagram"
      src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
      alt=""
      width={600}
      height={400}
    ></Image> */}
              </div>
            )}
        </div>
      }
      rightHeader={
        lang === "EN"
          ? "Questions"
          : lang === "FR"
          ? `Questions`
          : lang === "PT"
          ? `Perguntas`
          : ""
      }
      rightContent={
        <CompareMHPHybridCloneQuestions
          lang={lang}
          activePairwiseCombo={activePairwiseCombo}
        />
      }
      rightContentStyle={{
        gridRow: "span 2",
      }}
      moreContent={
        <QuestionResponseText
          complete={completion[phase] || false}
          key={phase}
          trigger={
            phase === 32
              ? finalHybridQ === 0
              : phase === 30
              ? partSixPairwiseQuestions[JSON.stringify([1, 4])][3] === 6
              : phase === 31
              ? partSixPairwiseQuestions[JSON.stringify([2, 4])][3] === 6
              : false
          }
          visible={
            phase === 32
              ? finalHybridQ === 0
              : phase === 30
              ? partSixPairwiseQuestions[JSON.stringify([1, 4])][3] === 6
              : phase === 31
              ? partSixPairwiseQuestions[JSON.stringify([2, 4])][3] === 6
              : false
          }
          text={
            phase === 30
              ? lang === "EN"
                ? `That’s right – again we have the privilege of knowing the
true relatedness by ancestry of these lab clones. Since
clone 4 is a child of clone 1 and shares exactly 50% of it’s
genome by ancestry – the red part – IBD is 0.5 or 50%.`
                : lang === "FR"
                ? `C'est exact – encore une fois, nous avons le privilège de connaître la parenté réelle par ascendance de ces clones de laboratoire. Puisque le clone 4 est un enfant du clone 1 et partage exactement 50 % de son génome par ascendance – la partie rouge – l'IBD est de 0,5 ou 50 %.`
                : lang === "PT"
                ? `Está certo – mais uma vez temos o privilégio de conhecer o parentesco verdadeiro por ascendência destes clones de laboratório. Uma vez que o clone 4 é um descendente do clone 1 e partilha exatamente 50% do seu genoma por ascendência – a parte vermelha – o DII é de 0,5 ou 50%.`
                : ""
              : phase === 31
              ? lang === "EN"
                ? `That’s right – again we have the privilege of knowing the
true relatedness by ancestry of these lab clones. Since
clone 4 is a child of clone 2 and shares exactly 50% of it’s
genome by ancestry – the blue part – IBD is 0.5 or 50%.`
                : lang === "FR"
                ? `C'est exact – encore une fois, nous avons le privilège de connaître la parenté réelle par ascendance de ces clones de laboratoire. Puisque le clone 4 est un enfant du clone 2 et partage exactement 50 % de son génome par ascendance – la partie bleue – l'IBD est de 0,5 ou 50 %.`
                : lang === "PT"
                ? `Está certo – tal como antes, o DII é de 0,5 uma vez que o clone híbrido partilha 50% do seu genoma com o progenitor, desta vez a parte azul. Ambas as comparações anteriores tiveram o mesmo DII - 0,5 - uma vez que o clone híbrido está 50% relacionado com cada progenitor. O que pensa que encontraria se fizesse experiências semelhantes analisando outros clones relacionados de forma semelhante? Microhaplótipos, tal como SNPs, na metade relacionada do genoma devem sempre corresponder perfeitamente, a menos que existam mutações ou erros de genotipagem. No entanto, uma vez que as correspondências na parte não relacionada são aleatórias, o número total de correspondências pode variar.`
                : ""
              : lang === "EN"
              ? `Since the hybrid is not related to clone 3 at all, IBD
        would be 0 and IBS would be the same as comparing any
        completely unrelated clones, usually between 0 and 4
        matches for these diverse microhaplotype loci.`
              : lang === "FR"
              ? `Puisque l'hybride n'est pas du tout lié au clone 3, l'IBD serait de 0 et l'IBS serait le même que la comparaison de clones complètement non liés, généralement entre 0 et 4 correspondances pour ces loci de microhaplotypes divers.`
              : lang === "PT"
              ? `Uma vez que o híbrido não está relacionado com o clone 3, o DII seria 0 e o IBS seria o mesmo que comparar quaisquer clones completamente não relacionados, normalmente entre 0 e 4 correspondências para estes diversos loci de microhaplótipos.`
              : ""
          }
        />
      }
    />
  );

  return (
    <MultiRowLayout
      topLeft={
        <div>
          {/* <FormHeader
            text={`Genotype Comparisons with Microhaplotypes and Hybrid`}
          /> */}

          <div className="sticky top-20 dark:brightness-75">
            <P6MHPCloneRowsWithHybrid
              activePairwiseCombo={activePairwiseCombo}
            />
            <div className="mt-2">
              {/* <SNPComparator
          activeCombo={
            phase === 12
              ? [1, 4]
              : phase === 13
                ? [2, 4]
                : phase === 14
                  ? [3, 4]
                  : activeCombo
          }
          label
        /> */}
            </div>
            {phase === 13 &&
              partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3 && (
                <div className=" outline-primaryBlue mt-12 hidden p-4 text-center outline outline-2 md:block">
                  <label htmlFor="75/25-SNP-image">
                    75/25 allele frequency
                  </label>
                  {/* <Image
              id="SNP IBD 75/25 distribution diagram"
              src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
              height={400}
              width={600}
              alt=""
            /> */}
                </div>
              )}
            {phase === 14 &&
              partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12 && (
                <div className=" outline-primaryBlue mt-8 hidden p-4 outline outline-2 md:block">
                  {/* <Image
              id="SNP IBD 100% distribution diagram"
              src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
              alt=""
              width={600}
              height={400}
            ></Image> */}
                </div>
              )}
          </div>
        </div>
      }
      topRight={
        <div className="md:col-start-2 md:row-span-2">
          <CompareMHPHybridCloneQuestions
            activePairwiseCombo={activePairwiseCombo}
          />
        </div>
      }
      bottomLeft={
        <QuestionResponseText
          complete={completion[phase] || false}
          key={phase}
          trigger={
            phase === 32
              ? finalHybridQ === 0
              : phase === 30
              ? partSixPairwiseQuestions[JSON.stringify([1, 4])][3] === 6
              : phase === 31
              ? partSixPairwiseQuestions[JSON.stringify([2, 4])][3] === 6
              : false
          }
          visible={
            phase === 32
              ? finalHybridQ === 0
              : phase === 30
              ? partSixPairwiseQuestions[JSON.stringify([1, 4])][3] === 6
              : phase === 31
              ? partSixPairwiseQuestions[JSON.stringify([2, 4])][3] === 6
              : false
          }
          text={
            phase === 30
              ? `That’s right – again we have the privilege of knowing the
true relatedness by ancestry of these lab clones. Since
clone 4 is a child of clone 1 and shares exactly 50% of it’s
genome by ancestry – the red part – IBD is 0.5 or 50%.`
              : phase === 31
              ? `That’s right – Just like before, IBD is 0.5 since the hybrid clone shares 50% of its genome with the parent, this time the blue part. Both of the previous comparisons had the same IBD – 0.5 – since the hybrid clone is 50% related to each parent. What do you think you would find if you did similar experiments looking at other, similarly related clones?  Microhaplotypes, just like SNPs, in the related half of the genome should always match perfectly, unless there are mutations or genotyping error. However, since matches in the unrelated part are random, the overall number of matches can vary.`
              : `Since the hybrid is not related to clone 3 at all, IBD
        would be 0 and IBS would be the same as comparing any
        completely unrelated clones, usually between 0 and 4
        matches.`
          }
        />
      }
    />
  );

  {
  }

  return (
    <StandardLayout>
      <div>
        <FormHeader
          text={`Genotype Comparisons with Microhaplotypes and Hybrid`}
        />

        <div className="sticky top-20">
          <P6MHPCloneRowsWithHybrid activePairwiseCombo={activePairwiseCombo} />
          <div className="mt-2">
            {/* <SNPComparator
              activeCombo={
                phase === 12
                  ? [1, 4]
                  : phase === 13
                    ? [2, 4]
                    : phase === 14
                      ? [3, 4]
                      : activeCombo
              }
              label
            /> */}
          </div>
          {phase === 13 &&
            partSixPairwiseQuestions[JSON.stringify([2, 4])][4] === 3 && (
              <div className=" outline-primaryBlue mt-12 hidden p-4 text-center outline outline-2 md:block">
                <label htmlFor="75/25-SNP-image">75/25 allele frequency</label>
                {/* <Image
                  id="SNP IBD 75/25 distribution diagram"
                  src={"/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.5.svg"}
                  height={400}
                  width={600}
                  alt=""
                /> */}
              </div>
            )}
          {phase === 14 &&
            partSixPairwiseQuestions[JSON.stringify([3, 4])][5] === 12 && (
              <div className=" outline-primaryBlue mt-8 hidden p-4 outline outline-2 md:block">
                {/* <Image
                  id="SNP IBD 100% distribution diagram"
                  src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD1.svg"
                  alt=""
                  width={600}
                  height={400}
                ></Image> */}
              </div>
            )}
        </div>
      </div>
      <CompareMHPHybridCloneQuestions
        activePairwiseCombo={activePairwiseCombo}
      />
    </StandardLayout>
  );
}
