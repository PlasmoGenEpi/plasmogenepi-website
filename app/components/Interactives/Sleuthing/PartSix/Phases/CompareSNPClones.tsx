import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import P6CloneRows from "../CloneRows/P6CloneRows";
import SNPComparator from "../Comparators/SNPs/SNPComparator";
import {
  activePairwiseComboAtom,
  pairwiseCombosAtom,
  pairwiseCompletionAtom,
  partSixCompletionAtom,
  partSixPairwiseQuestionsAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import CompareSNPSingleCloneQuestions from "../Comparators/SNPs/CompareSNPSingleCloneQuestions";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import MultiRowLayout from "@/app/components/Interactives/Shared/misc/MultiRowLayout";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import { useEffect } from "react";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export default function CompareSNPClones() {
  const [pairwiseCompletion, setPairwiseCompletion] = useAtom(
    pairwiseCompletionAtom,
  );
  const [activePairwiseCombo, setActivePairwiseCombo] = useAtom(
    activePairwiseComboAtom,
  );
  const [pairwiseCombos, setPairwiseCombos] = useAtom(pairwiseCombosAtom);
  const activeCombo = useAtomValue(activePairwiseComboAtom);
  const partSixPairwiseQuestions = useAtomValue(partSixPairwiseQuestionsAtom);
  const phase = useAtomValue(phase2Atom);
  const completion = useAtomValue(partSixCompletionAtom);

  return (
    <InteractivePrimaryLayout
      leftHeader={`Genotype Comparisons with SNPs`}
      leftContent={
        <div>
          <P6CloneRows />
          <div className="mt-2">
            <SNPComparator activeCombo={activeCombo} label />
          </div>
        </div>
      }
      rightHeader={
        pairwiseCompletion[activePairwiseCombo[0]][activePairwiseCombo[1]]
          ? `Questions`
          : ``
      }
      rightContentStyle={{
        gridRow: `span 2`,
      }}
      rightContent={<CompareSNPSingleCloneQuestions />}
      moreContent={
        <QuestionResponseText
          className="max-w-[500px]"
          complete={completion[phase] || false}
          trigger={
            partSixPairwiseQuestions[JSON.stringify(activeCombo)][3] === 0
          }
          visible={
            partSixPairwiseQuestions[JSON.stringify(activeCombo)][3] === 0
          }
          text={`That's right - we have the privilege of knowing that these
    parasites are completely unrelated by ancestry since they are known
    laboratory clones. Since the D in IBD stands for descent, and these
    clones are not descended from each other, IBD in this case is exactly
    zero.`}
        />
      }
    />
  );

  return (
    <MultiRowLayout
      topLeft={
        <div className="h-fit">
          <FormHeader text={`Genotype Comparisons with SNPs`} />
          <P6CloneRows />
          <div className="mt-2">
            <SNPComparator activeCombo={activeCombo} label />
          </div>
        </div>
      }
      topRight={<CompareSNPSingleCloneQuestions />}
      bottomLeft={
        <QuestionResponseText
          complete={completion[phase] || false}
          trigger={
            partSixPairwiseQuestions[JSON.stringify(activeCombo)][3] === 0
          }
          visible={
            partSixPairwiseQuestions[JSON.stringify(activeCombo)][3] === 0
          }
          text={`That's right - we have the privilege of knowing that these
    parasites are completely unrelated by ancestry since they are known
    laboratory clones. Since the D in IBD stands for descent, and these
    clones are not descended from each other, IBD in this case is exactly
    zero.`}
        />
      }
    ></MultiRowLayout>
  );

  return (
    <StandardLayout>
      <div>
        <FormHeader text={`Genotype Comparisons with SNPs`} />
        <P6CloneRows />
        <div className="mt-2">
          <SNPComparator activeCombo={activeCombo} label />
        </div>
      </div>
      <CompareSNPSingleCloneQuestions />
    </StandardLayout>
  );
}
