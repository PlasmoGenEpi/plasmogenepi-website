import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import P6MHPCloneRows from "../CloneRows/P6MHPCloneRows";
import MicrohaplotypeComparator from "../Comparators/MHPs/MicrohaplotypeComparators";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import {
  activePairwiseMHPsComboAtom,
  pairwiseCombosMHPsAtom,
  pairwiseMHPCompletionAtom,
  partSixCompletionAtom,
  partSixMHPPairwiseQuestionsAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import CompareMHPSingleCloneQuestions from "../Comparators/MHPs/CompareMHPSingleCloneQuestions";
import { useEffect } from "react";
import { RESET } from "jotai/utils";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import MultiRowLayout from "@/app/components/Interactives/Shared/misc/MultiRowLayout";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export default function CompareMHPClones({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [activePairwiseMHPsCombo, setActivePairwiseMHPsCombo] = useAtom(
    activePairwiseMHPsComboAtom,
  );
  const setPairwiseCompletion = useSetAtom(pairwiseMHPCompletionAtom);
  const [completion, setCompletion] = useAtom(partSixCompletionAtom);
  const questions = useAtomValue(partSixMHPPairwiseQuestionsAtom);
  const phase = useAtomValue(phase2Atom);

  // useEffect(() => {
  //   setActivePairwiseMHPsCombo([1, 2]);
  //   setPairwiseCompletion(RESET);
  //   setCompletion({ ...completion, 23: false, 24: false, 25: false });

  //   // setPairwiseCompletion;
  // }, []);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? `Lab Clones with Microhaplotypes`
          : lang === "FR"
          ? `Clones de laboratoire avec microhaplotypes`
          : lang === "PT"
          ? `Clones de laboratório com microhaplótipos`
          : ""
      }
      leftContent={
        <div>
          <P6MHPCloneRows />
          <div className="mt-2">
            <MicrohaplotypeComparator
              lang={lang}
              label
              activeCombo={activePairwiseMHPsCombo}
            />
          </div>
        </div>
      }
      rightHeader={
        lang === "EN"
          ? `Questions`
          : lang === "FR"
          ? `Questions`
          : lang === "PT"
          ? `Perguntas`
          : ""
      }
      moreContent={
        <QuestionResponseText
          complete={completion[phase] || false}
          trigger={questions[JSON.stringify(activePairwiseMHPsCombo)][3] === 0}
          visible={questions[JSON.stringify(activePairwiseMHPsCombo)][3] === 0}
          text={
            lang === "EN"
              ? `That’s right - unrelated parasites still mean IBD is zero, whether or not any loci match.`
              : lang === "FR"
              ? `C'est exact - les parasites non apparentés signifient toujours que l'IBD est nul, que des loci correspondent ou non.`
              : lang === "PT"
              ? `Isso mesmo - parasitas não relacionados ainda significam que o IBD é zero, quer haja ou não correspondência de loci.`
              : ""
          }
        />
      }
      rightContentStyle={{
        gridRow: "span 2",
      }}
      rightContent={<CompareMHPSingleCloneQuestions lang={lang} />}
    />
  );

  return (
    <MultiRowLayout
      topLeft={
        <div>
          <FormHeader text={`Lab Clones with Microhaplotypes`} />

          <div>
            <P6MHPCloneRows />
            <div className="mt-2">
              <MicrohaplotypeComparator
                label
                activeCombo={activePairwiseMHPsCombo}
              />
            </div>
          </div>
        </div>
      }
      topRight={
        <div className="md:col-start-2 md:row-span-2">
          <CompareMHPSingleCloneQuestions />
        </div>
      }
      bottomLeft={
        <QuestionResponseText
          complete={completion[phase] || false}
          trigger={questions[JSON.stringify(activePairwiseMHPsCombo)][3] === 0}
          visible={questions[JSON.stringify(activePairwiseMHPsCombo)][3] === 0}
          text={`That’s right - unrelated parasites still mean IBD is zero, whether or not any loci match.`}
        />
      }
    />
  );

  <div
    className={
      questions[JSON.stringify(activePairwiseMHPsCombo)][3] === 0
        ? " bg-primaryBlue/10 p-4 text-sm md:p-6"
        : "bg-primaryBlue/10 invisible p-4 text-sm md:p-6"
    }
  >
    <p>
      IBD will be the same for all of the comparisons as before. But, IBS will
      be on average lower, since there is a 1/8 chance of matching at each loci
      instead of 1/2.
    </p>
  </div>;
  return (
    <StandardLayout>
      <div>
        <FormHeader text={`Lab Clones with Microhaplotypes`} />

        <div>
          <P6MHPCloneRows />
          <div className="mt-2">
            <MicrohaplotypeComparator
              label
              activeCombo={activePairwiseMHPsCombo}
            />
          </div>
        </div>
      </div>
      <CompareMHPSingleCloneQuestions />
    </StandardLayout>
  );
}
