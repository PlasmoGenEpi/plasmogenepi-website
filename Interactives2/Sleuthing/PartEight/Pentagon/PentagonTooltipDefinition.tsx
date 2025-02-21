import { partEightPentagonSelectedEdgesAtom } from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import { Edge } from "../Pentagon";
import { fixedData } from "@/data/Interactives/fixedData";

export default function PentagonTooltipDefinition({
  edge,
  IBD,
}: {
  edge: Edge;
  IBD?: boolean;
}) {
  const selectedEdges = useAtomValue(partEightPentagonSelectedEdgesAtom);
  return (
    <g y={IBD ? -20 : 0}>
      <g className="translate-x-[2px] translate-y-[1px]">
        <text fontSize={3.5} fontWeight={700} fontFamily="Arial" className="">
          {edge[0]}
        </text>
        {selectedEdges[edge].direction === null ? (
          <text
            fontSize={6}
            fontWeight={700}
            fontFamily="Arial"
            className=" translate-x-[1.5px]"
          >
            &harr;
          </text>
        ) : selectedEdges[edge].direction === "forwards" ? (
          <text
            fontSize={6}
            fontWeight={700}
            fontFamily="Arial"
            className=" translate-x-[1.5px]"
          >
            &rarr;
          </text>
        ) : (
          <text
            fontSize={6}
            fontWeight={700}
            fontFamily="Arial"
            className="translate-x-[1.5px]"
          >
            &larr;
          </text>
        )}
        <text
          fontSize={3}
          fontWeight={700}
          fontFamily="Arial"
          className="translate-x-[7px]"
        >
          {edge[1]}
        </text>
      </g>
      <text
        id="tooltip-EF-text"
        fontSize={3}
        fontWeight={700}
        fontFamily="Arial"
        className=" translate-y-[5px]"
      >
        {/* @ts-ignore */}
        IBS: {fixedData[8].persons[edge[0]].IBS[edge[1]].toFixed(2)}
      </text>
      {IBD && (
        <text
          id="tooltip-EF-text"
          fontSize={3}
          fontWeight={700}
          fontFamily="Arial"
          className=" translate-y-[8.5px]"
        >
          IBD: {/* @ts-ignore */}
          {fixedData[8].persons[edge[0]].IBS[edge[1]] === 1
            ? "1.00"
            : edge === "GI"
              ? "0.50"
              : "0.00"}
        </text>
      )}
    </g>
  );
}
