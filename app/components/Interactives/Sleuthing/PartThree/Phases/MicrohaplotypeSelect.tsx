import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import ClonesTableTransform from "../ClonesTableTransform.tsx/ClonesTableTransform";
import LabClonesHeader from "../../PartOne/CloneRowTable/LabClonesHeader";
import {
  activeRowColumnTransformAtom,
  clonesTableTransformAttemptedAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useSetAtom } from "jotai";
import MicrohaplotypeTable from "@/app/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTable";
import { fixedData } from "@/data/Interactives/fixedData";
import PartThreeMicrohaplotypeTable from "../ClonesTableTransform.tsx/PartThreeMicrohaplotypeTable";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export default function MicrohaplotypeSelect({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [activeTuple, setActiveTuple] = useAtom(activeRowColumnTransformAtom);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? `Microhaplotype Table`
          : lang === "FR"
          ? `Tableau des microhaplotypes`
          : `Tabela de microhaplótipos`
      }
      leftContent={<PartThreeMicrohaplotypeTable lang={lang} />}
      rightHeader={
        lang === "EN"
          ? `Lab Clones`
          : lang === "FR"
          ? `Clones de laboratoire`
          : `Clones de laboratório`
      }
      rightContent={
        <div>
          <ClonesTableTransform
            wrapperOnlyCloneRows
            microCallbackWithMatrix={(rowNum, colNum) => {
              setActiveTuple([
                rowNum as 1 | 2 | 3 | 4 | 5,
                colNum as 0 | 1 | 2 | 3,
              ]);
            }}
            referenceAlleles={fixedData[1].refValues}
            alternateAlleles={fixedData[1].altValues}
          />
        </div>
      }
    />
  );

  return (
    <StandardLayout>
      <div>
        <FormHeader text={`Microhaplotype Table`} />
        <PartThreeMicrohaplotypeTable />
      </div>
      <div>
        <FormHeader text={`Lab Clones`} />
        <div>
          <ClonesTableTransform
            wrapperOnlyCloneRows
            microCallbackWithMatrix={(rowNum, colNum) => {
              setActiveTuple([
                rowNum as 1 | 2 | 3 | 4 | 5,
                colNum as 0 | 1 | 2 | 3,
              ]);
            }}
            referenceAlleles={fixedData[1].refValues}
            alternateAlleles={fixedData[1].altValues}
          />
        </div>
      </div>
    </StandardLayout>
  );
}
