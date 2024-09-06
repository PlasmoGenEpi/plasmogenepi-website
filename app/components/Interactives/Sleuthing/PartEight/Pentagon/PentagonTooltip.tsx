import { fixedData } from "@/data/Interactives/fixedData";
import { Edge } from "../Pentagon";
import { visibleTooltipsAtom } from "./PentagonTable/PentagonTable";
import { useAtomValue } from "jotai";

export default function PentagonTooltip({
  edge,
  coords,
  IBD,
}: {
  IBD?: boolean;
  edge: Edge;
  coords: { x: number; y: number };
}) {
  const visibleTooltips = useAtomValue(visibleTooltipsAtom);

  return (
    <use
      id={`tooltip-${edge}`}
      role="tooltip"
      className={
        IBD
          ? !visibleTooltips.includes(edge)
            ? "hidden"
            : "fadeIn300  select-none hover:stroke-1 focus:stroke-1"
          : `fadeIn300  select-none hover:stroke-1 focus:stroke-1`
      }
      width={80}
      x={coords.x}
      y={coords.y - 50}
      xlinkHref={IBD ? `#tooltip-${edge}2` : `#tooltip-${edge}`}
    ></use>
  );
}
