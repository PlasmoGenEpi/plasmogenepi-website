import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import PartThreePositiveControlBoard from "../PositiveControlBoard/PartThreePositiveControlBoard";
import PartThreeMicrohaplotypeGenotyping from "../Genotyping/PartThreeMicrohaplotypeGenotyping";
import { selectedPositiveControlBoardAtom } from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";

export default function PartThreeGenotypeCreation() {
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);
  return (
    <StandardLayout>
      <div>
        <FormHeader
          text={`Positive Control Board ${selectedBoard}
`}
        />
        <div className="-translate-y-6 text-center [fontSize:15px] md:text-left">
          <label>
            MOI = {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
          </label>
        </div>
        <PartThreePositiveControlBoard />
      </div>{" "}
      <div>
        <FormHeader text={`Genotyping`} />
        <PartThreeMicrohaplotypeGenotyping />
      </div>
    </StandardLayout>
  );
}
