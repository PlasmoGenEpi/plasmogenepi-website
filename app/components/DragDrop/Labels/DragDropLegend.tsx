import { phaseAtom } from "@/store";
import { useAtomValue } from "jotai";

export default function DragDropLegend() {
  const phase = useAtomValue(phaseAtom);
  return (
    <div
      className={`${phase !== 8 ? "invisible" : ""} fadeIn500Delay500 grid grid-rows-5 border py-2 text-lg shadow-sm shadow-black/50`}
    >
      <div className="flex items-center px-4">
        <div className="text-[red]">
          <span>G T A C</span>
        </div>
        <div className="ml-auto ">
          <span className="mt-1 block">Mutation</span>
        </div>
      </div>
      <div className="flex items-center px-4">
        <div className="text-[orange]">
          <span>G T A C</span>
        </div>
        <div className="ml-auto ">
          <span className="mt-1 block">False Mutation</span>
        </div>
      </div>{" "}
      <div className="flex items-center px-4">
        <div className="text-[purple]">
          <span>G T A C</span>
        </div>
        <div className="ml-auto ">
          <span className="mt-1 block">Variation</span>
        </div>
      </div>
      <div className="flex items-center pl-2 pr-4">
        <div className=" bg-[gold] px-2">
          <span className="block translate-y-[2px]">G T A C</span>
        </div>{" "}
        <div className="ml-auto ">
          <span>Chimaera</span>
        </div>
      </div>
      <div className="flex items-center pl-2 pr-4">
        <div className=" bg-[rebeccapurple] px-2">
          <span className="block translate-y-[2px]">G T A C</span>
        </div>{" "}
        <div className="ml-auto ">
          <span>Off-target Errors</span>
        </div>
      </div>
    </div>
  );
}
