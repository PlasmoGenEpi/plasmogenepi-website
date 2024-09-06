import SquareMicrohaplotype from "@/components/Interactives/Shared/Microhaplotypes/SquareMicrohaplotype";
import { fixedData } from "@/data/Interactives/fixedData";
import { partSixCloneRowsMHPsAtom } from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";

export default function MHPHybridClone() {
  const cloneRows = useAtomValue(partSixCloneRowsMHPsAtom);

  const vals = cloneRows[1].vals
    .slice(0, 6)
    .concat(cloneRows[2].vals.slice(6, 12));
  return (
    <div className="grid gap-1 font-helvetica [grid-template-columns:8%_auto]">
      <div className="border-red-blue-rounded relative flex aspect-square items-center justify-center overflow-hidden rounded-full">
        <span className="-translate-x-0.5 translate-y-0.5 font-bold">4</span>
      </div>
      <ol className="border-red-blue grid grid-cols-12 gap-1 bg-gradient-to-r from-cloneRed via-[#FFB0B0_50%,#B8E6FA_50%] to-cloneBlue p-1 shadow-sm shadow-black">
        {vals.map((val, idx) => {
          return <SquareMicrohaplotype id={val as number} key={idx} />;
        })}
      </ol>
    </div>
  );
}
