import Image from "next/image";
import AlternateRow from "../CloneRowTable/AlternateRow";
import CloneRowTable from "../CloneRowTable/CloneRowTable";
import RefRow from "../CloneRowTable/RefRow";
import PositiveControlBoard from "@/components/Interactives/Shared/PositiveControlBoard/PositiveControlBoard";
import PositiveControlLabel from "@/components/Interactives/Shared/PositiveControlBoard/PositiveControlLabel";
import P1PositiveControlBoard from "../PositiveControlBoard/P1PositiveControlBoard";
import LabelRow from "../CloneRowTable/LabelRow";
import StandardLayout from "@/components/Interactives/Shared/misc/StandardLayout";
import P1PositiveControlHeader from "../PositiveControlBoard/P1PositiveControlHeader";
import LabClonesHeader from "../CloneRowTable/LabClonesHeader";
import {
  phaseAtom,
  selectedPositiveControlBoardAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import PartOneControlPanel from "../PartOneControlPanel";
import FormHeader from "@/components/Interactives/Shared/misc/FormHeader";

export default function LabClonesWithSNPs({
  phase,
  forwards,
}: {
  phase: number;
  forwards: boolean;
}) {
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);
  return (
    <StandardLayout part={1} complete={false}>
      {" "}
      <FormHeader text="Lab Clones with SNPs" />
      <div
        className={`col-start-1 flex transition-[margin] duration-500 sm:max-w-[80%] md:max-w-none md:transition-all ${phase === 1 ? "  md:duration-500" : "md:translate-x-0  md:duration-500"}`}
      >
        <CloneRowTable phase={phase} forwards={forwards} />
      </div>
      {phase === 2 && (
        <div
          className={`flex flex-col gap-2 text-center md:col-start-2 md:row-start-1 md:text-left`}
        >
          <FormHeader text={`Positive Control ${selectedBoard}`} />
          <span className="-translate-y-8 text-base tracking-wide text-black">
            MOI = {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
          </span>
        </div>
      )}
      <div className="flex flex-col gap-12">
        {/* {phase === 2 && <PositiveControlLabel />} */}
        {phase === 2 && <P1PositiveControlBoard />}
        {/* <div
          tabIndex={0}
          className=" relative ml-auto rounded outline-2 outline-black hover:bg-primaryBlue/20 focus:bg-primaryBlue/20 has-[:focus]:outline has-[:hover]:outline md:max-w-[400px] [&>*]:hover:grid-rows-[1fr] [&>*]:focus:grid-rows-[1fr] [&>:first-child]:hover:hidden  [&>:first-child]:focus:hidden "
        >
          <div className=" peer absolute right-2 top-2 z-10 rounded-lg bg-primaryBlue/20 px-2.5 py-1.5 text-end">
            Hint
          </div>
          <div className="peer mt-4 grid grid-rows-[0fr] p-8 [transition:grid-template-rows_500ms] md:mt-2">
            <div className="overflow-hidden">Here&apos;s the hidden text</div>
          </div>
        </div> */}
      </div>
    </StandardLayout>
  );
}
