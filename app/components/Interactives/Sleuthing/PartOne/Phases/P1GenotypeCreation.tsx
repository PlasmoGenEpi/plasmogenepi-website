import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import P1PositiveControlBoard from "../PositiveControlBoard/P1PositiveControlBoard";
import P1GenotypeResult from "../Genotyping/P1GenotypeResult";
import P1PositiveControlHeader from "../PositiveControlBoard/P1PositiveControlHeader";
import P1GenotypingHeader from "../Genotyping/P1GenotypingHeader";
import { useEffect } from "react";
import {
  partOneCompletionAtom,
  positiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import PartOneControlPanel from "../PartOneControlPanel";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export default function P1GenotypeCreation({
  forwards,
}: {
  forwards: boolean;
}) {
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const completion = useAtomValue(partOneCompletionAtom);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        <div className="@4xl/main:col-start-1 @4xl/main:text-left text-center">
          <h4 className="@2xl/main:text-wrap @2xl/main:text-left text-balance  text-center text-lg font-semibold">
            Positive Control {selectedBoard}
            <label className="text-sm">
              <br></br>
              MOI = {selectedBoard < 3 ? 1 : selectedBoard < 5 ? 2 : 4}
            </label>
          </h4>
        </div>
      }
      leftContent={<P1PositiveControlBoard />}
      rightHeader={"Genotyping"}
      rightContent={<P1GenotypeResult />}
    ></InteractivePrimaryLayout>
  );

  return (
    <StandardLayout part={1} complete={false}>
      <div>
        <FormHeader text={`Positive Control ${selectedBoard}`} />
        <P1PositiveControlBoard />
      </div>
      <div>
        <FormHeader className="mt-12 md:mt-0" text={`Genotyping`} />
        <P1GenotypeResult />
      </div>
    </StandardLayout>
  );
}
