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
    <g y={IBD ? -20 : 0} className="fill-black">
      <g className="translate-x-[2px] translate-y-[1px]">
        <text fontSize={3.5} fontWeight={700} fontFamily="Arial" className="">
          {edge[0]}
        </text>
        {selectedEdges[edge].direction === null ? (
          <svg
            y={-3.5}
            x={2.25}
            width="3.5pt"
            height="3.5pt"
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m911.98 638.41v124.79l163.22-163.16-163.22-163.23v124.77h-633.57v-124.77l-163.21 163.22 163.21 163.18v-124.79z" />
          </svg>
        ) : selectedEdges[edge].direction === "forwards" ? (
          <svg
            y={-3.5}
            x={2.25}
            width="3.5pt"
            height="3.5pt"
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m759.24 829.6c-14.156-14.016-14.25-36.797-0.23438-50.953l141.32-142.64h-715.78c-19.875 0-36-16.125-36-36s16.125-36 36-36h715.78l-141.32-142.64c-14.016-14.156-13.922-36.938 0.23438-50.953 14.109-13.969 36.891-13.875 50.906 0.23438l177 178.69c27.797 28.078 27.797 73.266 0 101.34l-177 178.69c-14.016 14.109-36.797 14.203-50.906 0.23438z" />
          </svg>
        ) : (
          <g
            style={{
              transform: "rotate(180deg)",
              transformOrigin: "50% 50%",
            }}
          >
            <svg
              y={9}
              x={3}
              width="3.5pt"
              height="3.5pt"
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m759.24 829.6c-14.156-14.016-14.25-36.797-0.23438-50.953l141.32-142.64h-715.78c-19.875 0-36-16.125-36-36s16.125-36 36-36h715.78l-141.32-142.64c-14.016-14.156-13.922-36.938 0.23438-50.953 14.109-13.969 36.891-13.875 50.906 0.23438l177 178.69c27.797 28.078 27.797 73.266 0 101.34l-177 178.69c-14.016 14.109-36.797 14.203-50.906 0.23438z" />
            </svg>
          </g>
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
