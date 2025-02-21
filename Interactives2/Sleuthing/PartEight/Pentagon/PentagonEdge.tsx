import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Edge } from "../Pentagon3";
import { edgeIsActive, involves, pentagonViewAtom } from "./PentagonViewer";
import { fixedData } from "@/data/Interactives/fixedData";
import {
  partEightPentagonSelectedEdgesAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { visibleTooltipsAtom } from "./PentagonTable/PentagonTable";

type XYCoords = {
  x: number;
  y: number;
};

type Direction = null | "forwards" | "backwards";

export default function PentagonEdge({
  edge,
  handleDirection,
  handleSelection,
  coords,
  edgeStatus,
  active,
  className,
  style,
  diamond,
  // direction,
  // coords,
  // endpoints,
  // circle,
  // hidden,
  // lineClassName,
  // enabled,
}: {
  diamond?: boolean;
  style?: {
    [key: string]: string;
  };
  className?: string;
  edge: Edge;
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
    partEightPentagonSelectedEdgesAtom,
  );
  const phase = useAtomValue(phaseAtom);
  const tooltip = useAtomValue(visibleTooltipsAtom);
  // const pentagonView = useAtomValue(pentagonViewAtom);
  // if (hidden) {
  //   return null;
  // }

  if (view === null && selectedEdges.EF.visited) {
    if (!edgeStatus.enabled) {
      return null;
    }
  } else if (!edgeIsActive(view, edge) && !edgeStatus.visited && phase > 5) {
    return null;
  }

  const newView = phase <= 6 ? "a" : view;

  return (
    <g className="hover:bg-black" id={`edge-${edge}`}>
      <defs>
        {
          <marker
            style={{
              animationDelay:
                phase === 33
                  ? "1000ms"
                  : phase === 28
                    ? "4000ms"
                    : phase === 27
                      ? "0ms"
                      : "",
            }}
            id={`triangle-${edge}`}
            viewBox="0 0 10 10"
            refX="1"
            refY="5"
            markerUnits="strokeWidth"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
            className={
              phase === 33
                ? "fadeIn1000"
                : phase === 27
                  ? "fadeIn1000"
                  : phase === 28
                    ? "fadeIn1000"
                    : ""
            }
          >
            <path
              d="M 0 0 L 10 5 L 0 10 z"
              className={
                (phase === 34 || phase === 35) && tooltip[0] === edge
                  ? "fill-microBlue"
                  : phase === 29.5
                    ? "fill-microPurple"
                    : edgeStatus.selected
                      ? "fill-primaryBlue"
                      : "fill-black"
              }
            />
          </marker>
        }
      </defs>
      {(edgeStatus.enabled || newView === null) && (
        <polyline
          style={style}
          strokeDasharray={"600px"}
          className={
            (phase === 34 || phase === 35) && tooltip[0] === edge
              ? ["EF", "EH", "FG", "FI", "GH", "HI"].includes(edge)
                ? "edgeDashAppearance stroke-microRed stroke-[4px] opacity-100"
                : ["GI"].includes(edge)
                  ? "edgeDashAppearance stroke-microPurple stroke-[4px] opacity-100"
                  : "edgeDashAppearance stroke-microBlue stroke-[4px] opacity-100"
              : phase === 29.5
                ? "edgeDashAppearance stroke-microPurple stroke-[4px]"
                : `${className ? className : ""} ${edgeStatus.selected ? "stroke-primaryBlue" : "stroke-black"} ${active || (newView === null && selectedEdges.EF.visited) ? "opacity-100" : "opacity-20"} stroke-[4px]`
          }
          points={`${coords.line.start.x},${coords.line.start.y} ${coords.line.end.x},${coords.line.end.y}`}
          markerStart={
            diamond || edgeStatus.direction === "backwards"
              ? `url(#triangle-${edge})`
              : undefined
          }
          markerEnd={
            diamond || edgeStatus.direction === "forwards"
              ? `url(#triangle-${edge})`
              : undefined
          }
        />
      )}
      {newView !== null && active && (
        <g
          tabIndex={phase === 6 ? undefined : 0}
          // onMouseLeave={(e) => {
          //   e.currentTarget.blur();
          // }}
          type="button"
          role="button"
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleSelection(edge);
            } else if (e.key === "Escape") {
              e.currentTarget.blur();
            }
          }}
          onClick={() => {
            handleSelection(edge);
          }}
          className={
            phase === 6
              ? "hidden"
              : `edgeMouseEventCircle-${edge} hover:[&>*]:stroke-[8px] focus:[&>*]:stroke-[8px]`
          }
        >
          <use
            className={
              phase === 6
                ? "hidden"
                : `cursor-pointer ${edgeStatus.selected ? " stroke-primaryBlue stroke-[8px]" : edgeStatus.visited ? "stroke-black" : "stroke-orange-400 stroke-[4px]"}`
            }
            width={40}
            x={coords.circle.x}
            y={coords.circle.y}
            xlinkHref={
              !edgeStatus.enabled
                ? "#circle-plus"
                : phase === 5
                  ? "#circle-plus"
                  : "#circle-minus"
            }
          ></use>
          {/* {edgeStatus.selected && (
            <circle
              r={10}
              cx={coords.circle.x + 40}
              cy={coords.circle.y + 460}
              className="fill-primaryBlue"
            ></circle>
          )} */}
        </g>
      )}
      {!diamond && edgeStatus.enabled && active && (
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
              aria-label={`${edge[1]} to ${edge[0]}`}
              className={`${edgeStatus.selected ? "stroke-primaryBlue" : "stroke-black"} stroke-2 hover:stroke-[4px] focus:stroke-[4px]`}
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
              aria-label={`${edge[0]} to ${edge[1]}`}
              className={`${edgeStatus.selected ? "stroke-primaryBlue" : "stroke-black"} stroke-2 hover:stroke-[4px] focus:stroke-[4px]`}
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

// export default function PentagonEdge({
//   edge,
//   direction,
//   coords,
//   endpoints,
//   circle,
//   hidden,
//   lineClassName,
//   enabled,
// }: {
//   enabled: boolean;
//   lineClassName: string;
//   hidden?: boolean;
//   edge: Edge;
//   direction?: null | "forwards" | "backwards";
//   coords: {
//     startingX: number;
//     startingY: number;
//     endingX: number;
//     endingY: number;
//   };
//   endpoints: {
//     callback: (endpoint: "start" | "end") => void;
//     className: string;
//   };
//   circle: {
//     callback: (edge: Edge) => void;
//     coords: {
//       x: number;
//       y: number;
//     };
//     radius: number;
//     width: number;
//     className: string;
//   };
// }) {
//   const pentagonView = useAtomValue(pentagonViewAtom);
//   if (hidden) {
//     return null;
//   }

//   if (edge === "GI") {
//     console.log(lineClassName);
//   }

//   return (
//     <g id={`edge-${edge}`}>
//       <defs>
//         <symbol
//           id="circle-minus"
//           overflow={"visible"}
//           className="fill-white stroke-black"
//           viewBox="0 0 100 100"
//         >
//           <path
//             d="
//         M 100, 100
//         m 75, 0
//         a 75,75 0 1,0 -150,0
//         a 75,75 0 1,0  150,0
//         "
//           />
//           <path
//             className="stroke-[10px]"
//             strokeLinecap="round"
//             d="       M 70, 100
//         L 130, 100
//         "
//           />
//         </symbol>
//         <symbol
//           id="circle-plus"
//           overflow={"visible"}
//           className="fill-white stroke-black"
//           viewBox="0 0 100 100"
//         >
//           <path
//             d="
//         M 100, 100
//         m 75, 0
//         a 75,75 0 1,0 -150,0
//         a 75,75 0 1,0  150,0
//         "
//           />
//           <path
//             className="stroke-[10px]"
//             strokeLinecap="round"
//             d="       M 70, 100
//         L 130, 100
//         M 100, 70
//         L 100, 130"
//           />
//         </symbol>
//         <marker
//           id="triangle"
//           viewBox="0 0 10 10"
//           refX="1"
//           refY="5"
//           markerUnits="strokeWidth"
//           markerWidth="5"
//           markerHeight="5"
//           orient="auto-start-reverse"
//         >
//           <path d="M 0 0 L 10 5 L 0 10 z" fill="#000" />
//         </marker>
//         {/* <symbol id="tooltip" viewBox="0 0 100 100">
//           <text transform="translate(10, 50)" fontSize={40} fontFamily="Arial">
//             0.67
//           </text>
//           <path
//             d="m81.25 4.168h-62.5c-10.336 0-18.75 8.4141-18.75 18.75v33.332c0 10.34 8.4141 18.75 18.75 18.75h10.16c3.3984 0 6.5859 1.6602 8.5352 4.4414l10.852 15.5c0.38672 0.55469 1.0234 0.89062 1.7031 0.89062s1.3164-0.33203 1.707-0.88672l10.852-15.5c1.9453-2.7852 5.1367-4.4453 8.5312-4.4453h10.16c10.336 0 18.75-8.4141 18.75-18.75v-33.332c0-10.336-8.4141-18.75-18.75-18.75zm14.582 52.082c0 8.043-6.543 14.582-14.582 14.582h-10.16c-4.7578 0-9.2227 2.3242-11.945 6.2227l-9.1445 13.062-9.1445-13.062c-2.7266-3.9023-7.1875-6.2227-11.945-6.2227h-10.16c-8.043 0-14.582-6.5391-14.582-14.582v-33.332c0-8.043 6.5391-14.586 14.582-14.586h62.5c8.043 0 14.582 6.543 14.582 14.586z"
//             fill={"#000"}
//           />
//         </symbol> */}
//         <symbol id="tooltip-EF" viewBox="0 0 10 10" overflow="visible">
//           <path
//             d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
// "
//             className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
//             fill={"white"}
//           />
//           <text
//             id="tooltip-EF-text"
//             fontSize={4}
//             fontFamily="Arial"
//             className="-translate-x-1/4 translate-y-[3px]"
//           >
//             IBS: {fixedData[8].persons.E.IBS.F.toFixed(2)}
//           </text>
//         </symbol>
//         <symbol id="tooltip-EG" viewBox="0 0 10 10" overflow="visible">
//           <path
//             d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
// "
//             className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
//             fill={"white"}
//           />
//           <text
//             id="tooltip-EG-text"
//             fontSize={4}
//             fontFamily="Arial"
//             className="-translate-x-1/4 translate-y-[3px]"
//           >
//             IBS: {fixedData[8].persons.E.IBS.G.toFixed(2)}
//           </text>
//         </symbol>
//         <symbol id="tooltip-EH" viewBox="0 0 10 10" overflow="visible">
//           <path
//             d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
// "
//             className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
//             fill={"white"}
//           />
//           <text
//             id="tooltip-EH-text"
//             fontSize={4}
//             fontFamily="Arial"
//             className="-translate-x-1/4 translate-y-[3px]"
//           >
//             IBS: {fixedData[8].persons.E.IBS.H.toFixed(2)}
//           </text>
//         </symbol>
//         <symbol id="tooltip-EI" viewBox="0 0 10 10" overflow="visible">
//           <path
//             d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
// "
//             className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
//             fill={"white"}
//           />
//           <text
//             id="tooltip-EI-text"
//             fontSize={4}
//             fontFamily="Arial"
//             className="-translate-x-1/4 translate-y-[3px]"
//           >
//             IBS: {fixedData[8].persons.E.IBS.I.toFixed(2)}
//           </text>
//         </symbol>
//         <symbol id="tooltip-FG" viewBox="0 0 10 10" overflow="visible">
//           <path
//             d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
// "
//             className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
//             fill={"white"}
//           />
//           <text
//             id="tooltip-FG-text"
//             fontSize={4}
//             fontFamily="Arial"
//             className="-translate-x-1/4 translate-y-[3px]"
//           >
//             IBS: {fixedData[8].persons.F.IBS.G.toFixed(2)}
//           </text>
//         </symbol>
//         <symbol id="tooltip-FH" viewBox="0 0 10 10" overflow="visible">
//           <path
//             d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
// "
//             className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
//             fill={"white"}
//           />
//           <text
//             id="tooltip-FH-text"
//             fontSize={4}
//             fontFamily="Arial"
//             className="-translate-x-1/4 translate-y-[3px]"
//           >
//             IBS: {fixedData[8].persons.F.IBS.H.toFixed(2)}
//           </text>
//         </symbol>
//         <symbol id="tooltip-FI" viewBox="0 0 10 10" overflow="visible">
//           <path
//             d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
// "
//             className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
//             fill={"white"}
//           />
//           <text
//             id="tooltip-FI-text"
//             fontSize={4}
//             fontFamily="Arial"
//             className="-translate-x-1/4 translate-y-[3px]"
//           >
//             IBS: {fixedData[8].persons.F.IBS.I.toFixed(2)}
//           </text>
//         </symbol>
//         <symbol id="tooltip-GH" viewBox="0 0 10 10" overflow="visible">
//           <path
//             d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
// "
//             className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
//             fill={"white"}
//           />
//           <text
//             id="tooltip-GH-text"
//             fontSize={4}
//             fontFamily="Arial"
//             className="-translate-x-1/4 translate-y-[3px]"
//           >
//             IBS: {fixedData[8].persons.G.IBS.H.toFixed(2)}
//           </text>
//         </symbol>
//         <symbol id="tooltip-GI" viewBox="0 0 10 10" overflow="visible">
//           <path
//             d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
// "
//             className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
//             fill={"white"}
//           />
//           <text
//             id="tooltip-GI-text"
//             fontSize={4}
//             fontFamily="Arial"
//             className="-translate-x-1/4 translate-y-[3px]"
//           >
//             IBS: {fixedData[8].persons.G.IBS.I.toFixed(2)}
//           </text>
//         </symbol>
//         <symbol id="tooltip-HI" viewBox="0 0 10 10" overflow="visible">
//           <path
//             d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
// "
//             className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
//             fill={"white"}
//           />
//           <text
//             id="tooltip-HI-text"
//             fontSize={4}
//             fontFamily="Arial"
//             className="-translate-x-1/4 translate-y-[3px]"
//           >
//             IBS: {fixedData[8].persons.H.IBS.I.toFixed(2)}
//           </text>
//         </symbol>
//       </defs>
//       <polyline
//         className={lineClassName + " " + " stroke-[4px]"}
//         // points="150,350 400,200"
//         points={`${coords.startingX},${coords.startingY} ${coords.endingX},${coords.endingY}`}
//         markerStart={direction === "backwards" ? "url(#triangle)" : undefined}
//         markerEnd={direction === "forwards" ? "url(#triangle)" : undefined}
//       />
//       {/* <g
//         x={circle.coords.x - 80}
//         y={circle.coords.y - 100}
//         // width="100pt"
//         // height="100pt"
//         viewBox="0 0 100 100"
//         // xmlns="http://www.w3.org/2000/svg"
//         className="hidden fill-white/80 stroke-black stroke-2 focus:inline-block peer-hover/myPeer:inline-block peer-focus/myPeer:inline-block"
//       >
//         <path d="m81.25 4.168h-62.5c-10.336 0-18.75 8.4141-18.75 18.75v33.332c0 10.34 8.4141 18.75 18.75 18.75h10.16c3.3984 0 6.5859 1.6602 8.5352 4.4414l10.852 15.5c0.38672 0.55469 1.0234 0.89062 1.7031 0.89062s1.3164-0.33203 1.707-0.88672l10.852-15.5c1.9453-2.7852 5.1367-4.4453 8.5312-4.4453h10.16c10.336 0 18.75-8.4141 18.75-18.75v-33.332c0-10.336-8.4141-18.75-18.75-18.75zm14.582 52.082c0 8.043-6.543 14.582-14.582 14.582h-10.16c-4.7578 0-9.2227 2.3242-11.945 6.2227l-9.1445 13.062-9.1445-13.062c-2.7266-3.9023-7.1875-6.2227-11.945-6.2227h-10.16c-8.043 0-14.582-6.5391-14.582-14.582v-33.332c0-8.043 6.5391-14.586 14.582-14.586h62.5c8.043 0 14.582 6.543 14.582 14.586z" />
//       </g> */}
//       {/* <rect
//         className="hidden fill-white/80 stroke-black stroke-2 focus:inline-block peer-hover/myPeer:inline-block peer-focus/myPeer:inline-block"
//         // x1={circle.coords.x - 80}
//         // x2={circle.coords.x + 80}
//         // y1={circle.coords.y - 200}
//         // y2={circle.coords.y - 100}
//         x={circle.coords.x - 5}
//         y={circle.coords.y + 430}
//         height={60}
//         width={100}
//       ></rect> */}
//       {circle.className.indexOf("invisible") === -1 &&
//         circle.className.indexOf("hidden") === -1 && (
//           <g
//             aria-describedby={`#tooltip-${edge}-text`}
//             tabIndex={0}
//             onMouseLeave={(e) => {
//               e.currentTarget.blur();
//             }}
//             onKeyDown={(e) => {
//               console.log(e.key);
//               if (e.key === "Enter" || e.key === " ") {
//                 e.preventDefault();
//                 circle.callback(edge);
//               } else if (e.key === "Escape") {
//                 e.currentTarget.blur();
//               }
//             }}
//             onClick={() => {
//               circle.callback(edge);
//             }}
//             className={circle.className + " peer/myPeer"}
//           >
//             <use
//               width={circle.width || 40}
//               x={circle.coords.x}
//               y={circle.coords.y}
//               xlinkHref={!enabled ? "#circle-plus" : "#circle-minus"}
//             ></use>
//           </g>
//         )}
//       {edgeIsActive(pentagonView, edge) && (
//         <g>
//           {direction !== "backwards" && (
//             <circle
//               onKeyDown={(e) => {
//                 console.log(e.key);
//                 if (e.key === "Enter" || e.key === " ") {
//                   e.preventDefault();
//                   endpoints.callback("start");
//                 } else if (e.key === "Escape") {
//                   e.currentTarget.blur();
//                 }
//               }}
//               tabIndex={0}
//               aria-label=""
//               className={` ${endpoints?.className}  ${lineClassName === "invisible" ? "invisible" : lineClassName === "opacity-20" ? "stroke-black/20" : ""}`}
//               r={9}
//               fill="white"
//               cx={coords.startingX}
//               cy={coords.startingY}
//               onClick={(e) => {
//                 endpoints?.callback("start");
//               }}
//             ></circle>
//           )}
//           {direction !== "forwards" && (
//             <circle
//               onKeyDown={(e) => {
//                 console.log(e.key);
//                 if (e.key === "Enter" || e.key === " ") {
//                   e.preventDefault();
//                   endpoints.callback("end");
//                 } else if (e.key === "Escape") {
//                   e.currentTarget.blur();
//                 }
//               }}
//               tabIndex={0}
//               aria-label=""
//               className={`${endpoints?.className}  ${lineClassName === "invisible" ? "invisible" : lineClassName === "opacity-20" ? "stroke-black/20" : ""}`}
//               r={9}
//               fill="white"
//               cx={coords.endingX}
//               cy={coords.endingY}
//               onClick={(e) => {
//                 endpoints?.callback("end");
//                 // console.log("clicked!");
//               }}
//               // viewBox="0 0 100 100"
//               overflow="visible"
//             ></circle>
//           )}
//         </g>
//       )}
//       <use
//         id={`tooltip-${edge}`}
//         role="tooltip"
//         className={
//           circle.className +
//           " fadeIn300 hidden select-none peer-hover/myPeer:inline-block peer-focus/myPeer:inline-block"
//         }
//         width={80}
//         x={circle.coords.x}
//         y={circle.coords.y - 50}
//         xlinkHref={`#tooltip-${edge}`}
//       ></use>
//     </g>
//   );
// }
