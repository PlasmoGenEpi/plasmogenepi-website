import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
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
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";

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
