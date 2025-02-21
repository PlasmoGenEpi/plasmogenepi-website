import { atom, useAtom, useAtomValue } from "jotai";
import { Edge } from "../Pentagon";
import {
  partEightPentagonSelectedEdgesAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { edgeAnswers, pentagonViewAtom } from "./PentagonViewer";
import { useMemo } from "react";
import { GIViewAtom } from "./PentagonCorrections";

type XYCoords = {
  x: number;
  y: number;
};

type Direction = null | "forwards" | "backwards";

export default function PentagonEdgeCorrection({
  edgeCorrection,
  handleDirection,
  handleSelection,
  coords,
  edgeStatus,
  active,
  edgeCorrections,
  idx,
}: // direction,
// coords,
// endpoints,
// circle,
// hidden,
// lineClassName,
// enabled,
{
  edgeCorrections: [
    Edge,
    {
      correct: boolean;
      direction?: null | "forwards" | "backwards";
      enabled?: boolean;
    }
  ][];
  idx: number;
  edgeCorrection: [
    Edge,
    {
      correct: boolean;
      direction?: null | "forwards" | "backwards";
      enabled?: boolean;
    }
  ];
  handleDirection: (direction: Direction) => void;
  handleSelection: (edge: Edge) => void;
  coords: {
    line: {
      start: XYCoords;
      end: XYCoords;
    };
    circle: XYCoords;
  };
  edgeStatus: {
    visited: boolean;
    enabled: boolean;
    selected: boolean;
    direction: Direction;
  };
  active: boolean;

  // enabled: boolean;
  // lineClassName: string;
  // hidden?: boolean;
  // edge: Edge;
  // direction?: null | "forwards" | "backwards";
  // coords: {
  //   startingX: number;
  //   startingY: number;
  //   endingX: number;
  //   endingY: number;
  // };
  // endpoints: {
  //   callback: (endpoint: "start" | "end") => void;
  //   className: string;
  // };
  // circle: {
  //   callback: (edge: Edge) => void;
  //   coords: {
  //     x: number;
  //     y: number;
  //   };
  //   radius: number;
  //   width: number;
  //   className: string;
  // };
}) {
  const [view, setView] = useAtom(pentagonViewAtom);
  const [selectedEdges, setSelectedEdges] = useAtom(
    partEightPentagonSelectedEdgesAtom
  );
  const phase = useAtomValue(phase2Atom);
  const GIView = useAtomValue(GIViewAtom);

  const isCurrent = useMemo(() => {
    for (let i = 0; i < edgeCorrections.length; i++) {
      if (!edgeCorrections[i][1].correct) {
        return i;
      }
    }
    return null;
  }, [edgeCorrections]);

  console.log(edgeCorrections);

  if (isCurrent === idx) {
    console.log(edgeCorrection);
  }

  return (
    <g className="hover:bg-black" id={`edge-${edgeCorrection[0]}`}>
      <defs>
        <marker
          id={`triangle-${edgeCorrection[0]}`}
          viewBox="0 0 10 10"
          refX="1"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path
            d="M 0 0 L 10 5 L 0 10 z"
            className={
              edgeStatus.selected ? "fill-interactiveBlue" : "fill-black"
            }
          />
        </marker>
        <marker
          id={`triangle-${edgeCorrection[0]}-correct`}
          viewBox="0 0 10 10"
          refX="1"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className={`fill-emerald-400`} />
        </marker>
        <marker
          id={`triangle-${edgeCorrection[0]}-incorrect`}
          viewBox="0 0 10 10"
          refX="1"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path
            d="M 0 0 L 10 5 L 0 10 z"
            className={`${
              edgeCorrection[0] === "GI"
                ? "stroke-[blue] fill-[blue]"
                : "stroke-[red] fill-[red]"
            }`}
          />
        </marker>
      </defs>
      <polyline
        strokeDasharray={"600px"}
        // className={`${idx > 0 ? (edgeCorrections[idx - 1][1].correct ? "edgeDashAppearance" : "hidden") : !edgeCorrection[1].correct ? "edgeDashAppearance stroke-[red]" : "edgeAppearance stroke-black"} ${!edgeCorrection[1].correct ? (edgeCorrection[1].enabled === false ? "stroke-[red]" : "stroke-black") : ""} stroke-[4px]`}
        // style={{
        //   animationDelay: `${idx * 1000}ms`,
        // }}
        className={
          phase === 19
            ? "stroke-[blue] stroke-[4px]"
            : `${
                edgeCorrection[0] === "GI" ? "stroke-[blue]" : "stroke-[red]"
              } ${
                edgeCorrection[1].correct
                  ? `edgeDashAppearance/ stroke-emerald-400 ${
                      isCurrent === null ? "opacity-100" : "opacity-100"
                    }`
                  : isCurrent === idx && edgeCorrection[1].enabled
                  ? "hidden"
                  : isCurrent === idx
                  ? `${
                      edgeCorrection[1].enabled === false
                        ? ""
                        : "edgeDashAppearance/ "
                    }`
                  : edgeCorrection[1].enabled === true
                  ? "hidden"
                  : "opacity-10"
              } stroke-[4px] ${
                edgeCorrection[0] === "GI" ? "stroke-[blue]" : "stroke-[red]"
              }`
        }
        points={`${coords.line.start.x},${coords.line.start.y} ${coords.line.end.x},${coords.line.end.y}`}
        markerStart={
          edgeStatus.direction === "backwards" ||
          (phase === 19 && edgeCorrection[0] === "GI")
            ? edgeCorrection[1].correct
              ? `url(#triangle-${edgeCorrection[0]}-correct)`
              : `url(#triangle-${edgeCorrection[0]}-incorrect)`
            : undefined
        }
        markerEnd={
          edgeStatus.direction === "forwards" ||
          (phase === 19 && edgeCorrection[0] === "GI")
            ? edgeCorrection[1].correct
              ? `url(#triangle-${edgeCorrection[0]}-correct)`
              : `url(#triangle-${edgeCorrection[0]}-incorrect)`
            : undefined
        }
      />
      {!edgeCorrection[1].correct && idx === isCurrent && (
        <g
          tabIndex={0}
          // onMouseLeave={(e) => {
          //   e.currentTarget.blur();
          // }}
          type="button"
          role="button"
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleSelection(edgeCorrection[0]);
            } else if (e.key === "Escape") {
              e.currentTarget.blur();
            }
          }}
          onClick={() => {
            handleSelection(edgeCorrection[0]);
          }}
          className={
            phase === 18 &&
            edgeCorrection[0] === "GI" &&
            GIView &&
            isCurrent === idx
              ? ""
              : !GIView && edgeCorrection[0] === "GI"
              ? "hidden"
              : `edgeMouseEventCircle-${edgeCorrection[0]} fadeIn500 hover:[&>*]:stroke-[8px] focus:[&>*]:stroke-[8px]`
          }
        >
          <use
            className={`cursor-pointer ${
              edgeCorrection[0] === "GI" ? "stroke-[blue]" : "stroke-[red]"
            }`}
            width={40}
            x={coords.circle.x}
            y={coords.circle.y}
            xlinkHref={!edgeStatus.enabled ? "#circle-plus" : "#circle-minus"}
          ></use>
          {/* {edgeStatus.selected && (
        <circle
          r={10}
          cx={coords.circle.x + 40}
          cy={coords.circle.y + 460}
          className="fill-interactiveBlue"
        ></circle>
      )} */}
        </g>
      )}
      {edgeStatus.enabled && isCurrent === idx && (
        <g>
          {edgeStatus.direction !== "backwards" && (
            <circle
              onKeyDown={(e) => {
                console.log(e.key);
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleDirection("backwards");
                } else if (e.key === "Escape") {
                  e.currentTarget.blur();
                }
              }}
              type="button"
              role="button"
              tabIndex={0}
              aria-label={`${edgeCorrection[0][1]} to ${edgeCorrection[0][0]}`}
              className={`${
                !edgeCorrection[1].correct
                  ? edgeCorrection[0] === "GI"
                    ? "stroke-[blue]"
                    : "stroke-[red]"
                  : "stroke-black"
              } stroke-2 hover:stroke-[4px] focus:stroke-[4px]`}
              r={9}
              fill="white"
              cx={coords.line.start.x}
              cy={coords.line.start.y}
              onClick={(e) => {
                handleDirection("backwards");
              }}
            ></circle>
          )}
          {edgeStatus.direction !== "forwards" && (
            <circle
              onKeyDown={(e) => {
                console.log(e.key);
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleDirection("forwards");
                } else if (e.key === "Escape") {
                  e.currentTarget.blur();
                }
              }}
              type="button"
              tabIndex={0}
              aria-label={`${edgeCorrection[0][0]} to ${edgeCorrection[0][1]}`}
              className={`${
                !edgeCorrection[1].correct
                  ? edgeCorrection[0] === "GI"
                    ? "stroke-[blue]"
                    : "stroke-[red]"
                  : "stroke-black"
              } stroke-2 hover:stroke-[4px] focus:stroke-[4px]`}
              r={9}
              fill="white"
              cx={coords.line.end.x}
              cy={coords.line.end.y}
              onClick={(e) => {
                handleDirection("forwards");
                // console.log("clicked!");
              }}
              // viewBox="0 0 100 100"
              overflow="visible"
            ></circle>
          )}
        </g>
      )}
      {/* <use
    id={`tooltip-${edge}`}
    role="tooltip"
    className={`fadeIn300 hidden cursor-pointer select-none hover:stroke-[8px] focus:stroke-[8px] peer-hover/myPeer:inline-block peer-focus/myPeer:inline-block`}
    width={80}
    x={coords.circle.x}
    y={coords.circle.y - 50}
    xlinkHref={`#tooltip-${edge}`}
  ></use> */}
    </g>
  );
}
