import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import ClonesTableTransform from "../ClonesTableTransform.tsx/ClonesTableTransform";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  partThreePositiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom } from "jotai";
import PartThreePositiveControlBoard from "../PositiveControlBoard/PartThreePositiveControlBoard";
import CloneRow from "@/app/components/Interactives/Shared/CloneRow/CloneRow";
import P3CloneRows from "../CloneRows/P3CloneRows";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export default function LabClonesWithMicrohaplotypes() {
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const [boards, setBoards] = useAtom(partThreePositiveControlBoardsAtom);
  const currentBoard = boards[selectedBoard];

  return (
    <InteractivePrimaryLayout
      leftHeader={`Lab Clones with Microhaplotypes`}
      leftContent={<P3CloneRows />}
      rightHeader={
        <div className="@4xl/main:col-start-2 @4xl/main:row-start-1 @4xl/main:text-left @4xl/main:mt-0 mt-8 text-center">
          <h4 className="@2xl/main:text-wrap @2xl/main:text-left text-balance  text-center text-lg font-semibold">
            Positive Control {selectedBoard}
            <label className="text-sm">
              <br></br>
              MOI = {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
            </label>
          </h4>
        </div>
      }
      rightContent={<PartThreePositiveControlBoard />}
    />
  );

  return (
    <StandardLayout>
      <div>
        <FormHeader
          className="md:min-h-[92px]"
          text={`Lab Clones with Microhaplotypes`}
        />

        <P3CloneRows />
      </div>
      <div>
        <FormHeader
          className="md:min-h-[60px]"
          text={`Positive Control ${selectedBoard}`}
        />
        <div className="text-center md:text-left">
          <label className="inline-block -translate-y-8 text-base  text-black md:-translate-y-[58px]">
            MOI = {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
          </label>
        </div>
        <PartThreePositiveControlBoard />
      </div>
    </StandardLayout>
  );
}
