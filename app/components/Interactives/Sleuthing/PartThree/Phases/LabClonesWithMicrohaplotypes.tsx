import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import ClonesTableTransform from "../ClonesTableTransform.tsx/ClonesTableTransform";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  partThreePositiveControlBoardsAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom } from "jotai";
import PartThreePositiveControlBoard from "../PositiveControlBoard/PartThreePositiveControlBoard";
import CloneRow from "@/components/Interactives/Shared/CloneRow/CloneRow";
import P3CloneRows from "../CloneRows/P3CloneRows";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";

export default function LabClonesWithMicrohaplotypes() {
  const [selectedBoard, setSelectedBoard] = useAtom(
    selectedPositiveControlBoardAtom,
  );
  const [boards, setBoards] = useAtom(partThreePositiveControlBoardsAtom);
  const currentBoard = boards[selectedBoard];
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
