import { selectedPositiveControlBoardAtom } from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";

export default function P1PositiveControlHeader({
  className,
}: {
  className?: string;
}) {
  const selectedBoard = useAtomValue(selectedPositiveControlBoardAtom);
  return (
    <div
      className={`${className ? className : ""} flex flex-col gap-2 text-center md:text-left`}
    >
      <h2 className="text-xl font-bold">Positive Control {selectedBoard}</h2>
      <span className="text-base tracking-wide text-black">
        MOI = {selectedBoard > 4 ? 4 : selectedBoard > 2 ? 2 : 1}
      </span>
    </div>
  );
}
