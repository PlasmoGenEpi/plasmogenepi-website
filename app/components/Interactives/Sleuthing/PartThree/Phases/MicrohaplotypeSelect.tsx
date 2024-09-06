import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import ClonesTableTransform from "../ClonesTableTransform.tsx/ClonesTableTransform";
import LabClonesHeader from "../../PartOne/CloneRowTable/LabClonesHeader";
import {
  activeRowColumnTransformAtom,
  clonesTableTransformAttemptedAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useSetAtom } from "jotai";
import MicrohaplotypeTable from "@/components/Interactives/Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTable";
import { fixedData } from "@/data/Interactives/fixedData";
import PartThreeMicrohaplotypeTable from "../ClonesTableTransform.tsx/PartThreeMicrohaplotypeTable";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";

export default function MicrohaplotypeSelect() {
  const [activeTuple, setActiveTuple] = useAtom(activeRowColumnTransformAtom);
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
