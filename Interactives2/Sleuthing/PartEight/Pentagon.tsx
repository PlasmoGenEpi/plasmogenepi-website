import { fixedData } from "@/data/Interactives/fixedData";
import {
  partEightPentagonPairViewedAtom,
  partEightPentagonPersonPairAtom,
  partEightPentagonSelectedEdgesAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom } from "jotai";
import { queuedChangeAtom } from "./Phases/PentagonComparisons";

export type Edge =
  | "EF"
  | "EG"
  | "EH"
  | "EI"
  | "FG"
  | "FH"
  | "FI"
  | "GH"
  | "GI"
  | "HI";
export const defaultPentagonComponents = {
  nodes: {
    E: {
      person: "opacity-50",
      circle: "",
    },
    F: {
      person: "opacity-50",
      circle: "",
    },
    G: {
      person: "opacity-50",
      circle: "",
    },
    H: {
      person: "opacity-50",
      circle: "",
    },
    I: {
      person: "opacity-50",
      circle: "",
    },
  },
  edges: {
    EF: {
      line: "hidden",
      circle: "hidden",
      lineCover: "hidden",
      text: "hidden",
    },
    EG: {
      line: "hidden",
      circle: "hidden",
      lineCover: "hidden",
      text: "hidden",
    },
    EH: {
      line: "hidden",
      circle: "hidden",
      lineCover: "hidden",
      text: "hidden",
    },
    EI: {
      line: "hidden",
      circle: "hidden",
      lineCover: "hidden",
      text: "hidden",
    },
    FG: {
      line: "hidden",
      circle: "hidden",
      lineCover: "hidden",
      text: "hidden",
    },
    FH: {
      line: "hidden",
      circle: "hidden",
      lineCover: "hidden",
      text: "hidden",
    },
    FI: {
      line: "hidden",
      circle: "hidden",
      lineCover: "hidden",
      text: "hidden",
    },
    GH: {
      line: "hidden",
      circle: "hidden",
      lineCover: "hidden",
      text: "hidden",
    },
    GI: {
      line: "hidden",
      circle: "hidden",
      lineCover: "hidden",
      text: "hidden",
    },
    HI: {
      line: "hidden",
      circle: "hidden",
      lineCover: "hidden",
      text: "hidden",
    },
  },
  bus: {
    E: "fill-red-500",
    F: "fill-blue-600",
  },
};

export default function Pentagon({
  components = defaultPentagonComponents,
  wrongEdge = undefined,
}) {
  const [activePair, setActivePair] = useAtom(partEightPentagonPersonPairAtom);
  const [viewed, setViewed] = useAtom(partEightPentagonPairViewedAtom);
  const [phase, setPhase] = useAtom(phaseAtom);
  const [selectedEdges, setSelectedEdges] = useAtom(
    partEightPentagonSelectedEdgesAtom,
  );
  const [queuedChange, setQueuedChange] = useAtom(queuedChangeAtom);

  const activeButtons = {
    EG: phase === 15 || (phase === 20 && wrongEdge === "EG"),
    EH: phase === 15 || (phase === 20 && wrongEdge === "EH"),
    EI: phase === 15 || (phase === 20 && wrongEdge === "EI"),
    FG: phase === 17 || (phase === 20 && wrongEdge === "FG"),
    FH: phase === 17 || (phase === 20 && wrongEdge === "FH"),
    FI: phase === 17 || (phase === 20 && wrongEdge === "FI"),
    GH: phase === 19 || (phase === 20 && wrongEdge === "GH"),
    GI: phase === 19 || (phase === 20 && wrongEdge === "GI"),
    HI: phase === 19 || (phase === 20 && wrongEdge === "HI"),
    // 'EG': phase === 15,
  };

  return (
    <svg viewBox="0 0 1843 1778" overflow="hidden">
      <defs>
        <linearGradient id="Gradient1">
          <stop className=" [stop-color:#ef4444]" offset="0%" />
          <stop className="[stop-color:#ef4444]" offset="50%" />
          <stop className="[stop-color:#2563eb]" offset="50%" />
          <stop className="[stop-color:#2563eb]" offset="100%" />
        </linearGradient>
        <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="red" />
          <stop offset="50%" stop-color="black" stop-opacity="0" />
          <stop offset="100%" stop-color="blue" />
        </linearGradient>
      </defs>
      {/* EF IBS */}
      <g className="pointer-events-none select-none">
        {/* <rect
          tabIndex={0}
          x="770"
          y="850"
          width="250"
          height="120"
          fill="white"
          // stroke="black"
          // strokeWidth="2px"
          className="peer/middle pointer-events-auto stroke-black hover:stroke-black hover:stroke-[4px] focus:stroke-[4px]"
        ></rect>{" "} */}
        <text
          style={{
            strokeWidth: 0,
          }}
          className={`${viewed["EF"] ? components.edges["EF"].text : "hidden"}`}
          fill="#000000"
          fill-opacity="1"
          font-family="Arial,Arial_MSFontService,sans-serif"
          font-style="normal"
          font-variant="normal"
          font-weight={
            activePair[1] === "E" && activePair[2] === "F" ? "700" : "400"
          }
          font-stretch="normal"
          font-size="50"
          // font-size={
          //   activePair[1] === "E" && activePair[2] === "F" ? "55" : "50"
          // }
          text-anchor="start"
          direction="ltr"
          writing-mode="lr-tb"
          unicode-bidi="normal"
          text-decoration="none"
          transform="matrix(1 0 0 1 306.738 423)"
        >
          IBS: {fixedData[8].persons.E.IBS.F.toFixed(2)}
        </text>
      </g>
      {/* FG IBS */}
      <g className="pointer-events-none select-none">
        <rect
          onMouseLeave={(e) => {
            e.currentTarget.blur();
          }}
          onClick={() => {
            if (phase === 20) {
              setQueuedChange({
                FG: {
                  selected: !selectedEdges.FG.selected,
                  direction: selectedEdges.FG.direction as
                    | "forwards"
                    | "backwards",
                },
              });
            } else {
              setSelectedEdges({
                ...selectedEdges,
                FG: {
                  selected: !selectedEdges.FG.selected,
                  direction: "forwards",
                },
              });
            }
          }}
          aria-label="FG connection"
          tabIndex={activeButtons["FG"] ? 0 : undefined}
          x="1280"
          y="350"
          width="250"
          height="120"
          fill="white"
          // stroke="black"
          // strokeWidth="2px"
          className={`${components.edges["FG"].text} ${!viewed["FG"] ? "hidden" : ""} stroke-black hover:stroke-black ${activeButtons["FG"] ? "pointer-events-auto cursor-pointer hover:stroke-[4px] focus:stroke-[4px]" : "pointer-events-none"} `}
        ></rect>{" "}
        <text
          style={{
            strokeWidth: 0,
          }}
          className={viewed["FG"] ? components.edges["FG"].text : "hidden"}
          fill="#000000"
          fill-opacity="1"
          font-family="Arial,Arial_MSFontService,sans-serif"
          font-style="normal"
          font-variant="normal"
          font-weight={
            activePair[1] === "F" && activePair[2] === "G" ? "700" : "400"
          }
          font-stretch="normal"
          font-size="50"
          // font-size={
          //   activePair[1] === "F" && activePair[2] === "G" ? "55" : "50"
          // }
          text-anchor="start"
          direction="ltr"
          writing-mode="lr-tb"
          unicode-bidi="normal"
          text-decoration="none"
          transform="matrix(1 0 0 1 1306.738 423)"
        >
          IBS: {fixedData[8].persons.F.IBS.G.toFixed(2)}
        </text>
      </g>
      {/* EG IBS */}
      <g
        className={activeButtons["EG"] ? "pointer-events-none select-none" : ""}
      >
        <rect
          onMouseLeave={(e) => {
            e.currentTarget.blur();
          }}
          onClick={() => {
            if (phase === 20) {
              setQueuedChange({
                EG: {
                  selected: !selectedEdges.EG.selected,
                  direction: selectedEdges.EG.direction as
                    | "forwards"
                    | "backwards",
                },
              });
              return;
            }
            setSelectedEdges({
              ...selectedEdges,
              EG: {
                selected: !selectedEdges.EG.selected,
                direction: "forwards",
              },
            });
          }}
          aria-label="EG connection"
          tabIndex={activeButtons["EG"] ? 0 : undefined}
          x="770"
          y="850"
          width="250"
          height="120"
          fill="white"
          // stroke="black"
          // strokeWidth="2px"
          className={`${components.edges["EG"].text} ${!viewed["EG"] ? "hidden" : ""} stroke-black hover:stroke-black ${activeButtons["EG"] ? "pointer-events-auto cursor-pointer hover:stroke-[4px] focus:stroke-[4px]" : "pointer-events-none"} `}
        ></rect>{" "}
        <text
          style={{
            strokeWidth: 0,
          }}
          className={viewed["EG"] ? components.edges["EG"].text : "hidden"}
          fill="#000000"
          fill-opacity="1"
          font-family="Arial,Arial_MSFontService,sans-serif"
          font-style="normal"
          font-variant="normal"
          font-weight={
            activePair[1] === "E" && activePair[2] === "G" ? "700" : "400"
          }
          font-stretch="normal"
          font-size="50"
          // font-size={
          //   activePair[1] === "E" && activePair[2] === "G" ? "55" : "50"
          // }
          text-anchor="start"
          direction="ltr"
          writing-mode="lr-tb"
          unicode-bidi="normal"
          text-decoration="none"
          transform="matrix(1 0 0 1 796.738 925)"
        >
          IBS: {fixedData[8].persons.E.IBS.G.toFixed(2)}
        </text>
      </g>
      {/* FI IBS */}
      <g className="pointer-events-none select-none">
        <rect
          onMouseLeave={(e) => {
            e.currentTarget.blur();
          }}
          onClick={() => {
            if (phase === 20) {
              setQueuedChange({
                FI: {
                  selected: !selectedEdges.FI.selected,
                  direction: selectedEdges.FI.direction as
                    | "forwards"
                    | "backwards",
                },
              });
              return;
            }
            setSelectedEdges({
              ...selectedEdges,
              FI: {
                selected: !selectedEdges.FI.selected,
                direction: "forwards",
              },
            });
          }}
          aria-label="FI connection"
          tabIndex={activeButtons["FI"] ? 0 : undefined}
          x="410"
          y="830"
          width="250"
          height="120"
          fill="white"
          // stroke="black"
          // strokeWidth="2px"
          className={`${components.edges["FI"].text} ${!viewed["FI"] ? "hidden" : ""} stroke-black hover:stroke-black ${activeButtons["FI"] ? "pointer-events-auto cursor-pointer hover:stroke-[4px] focus:stroke-[4px]" : "pointer-events-none"} `}
        ></rect>{" "}
        <text
          style={{
            strokeWidth: 0,
          }}
          className={viewed["FI"] ? components.edges["FI"].text : "hidden"}
          fill="#000000"
          fill-opacity="1"
          font-family="Arial,Arial_MSFontService,sans-serif"
          font-style="normal"
          font-variant="normal"
          font-weight={
            activePair[1] === "F" && activePair[2] === "I" ? "700" : "400"
          }
          font-stretch="normal"
          font-size="50"
          // font-size={
          //   activePair[1] === "F" && activePair[2] === "I" ? "55" : "50"
          // }
          text-anchor="start"
          direction="ltr"
          writing-mode="lr-tb"
          unicode-bidi="normal"
          text-decoration="none"
          transform="matrix(1 0 0 1 436.738 903)"
        >
          IBS: {fixedData[8].persons.F.IBS.I.toFixed(2)}
        </text>
      </g>
      {/* FH IBS */}
      <g className="pointer-events-none select-none">
        <rect
          onMouseLeave={(e) => {
            e.currentTarget.blur();
          }}
          onClick={() => {
            if (phase === 20) {
              setQueuedChange({
                FH: {
                  selected: !selectedEdges.FH.selected,
                  direction: selectedEdges.FH.direction as
                    | "forwards"
                    | "backwards",
                },
              });
              return;
            }
            setSelectedEdges({
              ...selectedEdges,
              FH: {
                selected: !selectedEdges.FH.selected,
                direction: "forwards",
              },
            });
          }}
          aria-label="FH connection"
          tabIndex={activeButtons["FH"] ? 0 : undefined}
          x="1130"
          y="830"
          width="250"
          height="120"
          fill="white"
          // stroke="black"
          // strokeWidth="2px"
          className={`${components.edges["FH"].text} ${!viewed["FH"] ? "hidden" : ""} stroke-black hover:stroke-black ${activeButtons["FH"] ? "pointer-events-auto cursor-pointer hover:stroke-[4px] focus:stroke-[4px]" : "pointer-events-none"} `}
        ></rect>{" "}
        <text
          style={{
            strokeWidth: 0,
          }}
          className={viewed["FH"] ? components.edges["FH"].text : "hidden"}
          fill="#000000"
          fill-opacity="1"
          font-family="Arial,Arial_MSFontService,sans-serif"
          font-style="normal"
          font-variant="normal"
          font-weight={
            activePair[1] === "F" && activePair[2] === "H" ? "700" : "400"
          }
          font-stretch="normal"
          font-size="50"
          // font-size={
          //   activePair[1] === "F" && activePair[2] === "H" ? "55" : "50"
          // }
          text-anchor="start"
          direction="ltr"
          writing-mode="lr-tb"
          unicode-bidi="normal"
          text-decoration="none"
          transform="matrix(1 0 0 1 1146.738 903)"
        >
          IBS: {fixedData[8].persons.F.IBS.H.toFixed(2)}
        </text>
      </g>
      {/* GI IBS */}
      <g className="pointer-events-none select-none">
        <rect
          onMouseLeave={(e) => {
            e.currentTarget.blur();
          }}
          onClick={() => {
            if (phase === 20) {
              setQueuedChange({
                GI: {
                  selected: !selectedEdges.GI.selected,
                  direction: selectedEdges.GI.direction as
                    | "forwards"
                    | "backwards",
                },
              });
              return;
            }
            setSelectedEdges({
              ...selectedEdges,
              GI: {
                selected: !selectedEdges.GI.selected,
                direction: "forwards",
              },
            });
          }}
          aria-label="GI connection"
          tabIndex={activeButtons["GI"] ? 0 : undefined}
          x="944"
          y="1200"
          width="250"
          height="120"
          fill="white"
          // stroke="black"
          // strokeWidth="2px"
          className={`${components.edges["GI"].text} ${!viewed["GI"] ? "hidden" : ""} stroke-black hover:stroke-black ${activeButtons["GI"] ? "pointer-events-auto cursor-pointer hover:stroke-[4px] focus:stroke-[4px]" : "pointer-events-none"} `}
        ></rect>{" "}
        <text
          style={{
            strokeWidth: 0,
          }}
          className={viewed["GI"] ? components.edges["GI"].text : "hidden"}
          fill="#000000"
          fill-opacity="1"
          font-family="Arial,Arial_MSFontService,sans-serif"
          font-style="normal"
          font-variant="normal"
          font-weight={
            activePair[1] === "G" && activePair[2] === "I" ? "700" : "400"
          }
          font-stretch="normal"
          font-size="50"
          // font-size={
          //   activePair[1] === "G" && activePair[2] === "I" ? "55" : "50"
          // }
          text-anchor="start"
          direction="ltr"
          writing-mode="lr-tb"
          unicode-bidi="normal"
          text-decoration="none"
          transform="matrix(1 0 0 1 966.738 1273)"
        >
          IBS: {fixedData[8].persons.G.IBS.I.toFixed(2)}
        </text>
      </g>
      {/* EH IBS */}
      <g
        className={activeButtons["EH"] ? "pointer-events-none select-none" : ""}
      >
        <rect
          onMouseLeave={(e) => {
            e.currentTarget.blur();
          }}
          onClick={() => {
            if (phase === 20) {
              setQueuedChange({
                EH: {
                  selected: !selectedEdges.EH.selected,
                  direction: selectedEdges.EH.direction as
                    | "forwards"
                    | "backwards",
                },
              });
              return;
            }
            setSelectedEdges({
              ...selectedEdges,
              EH: {
                selected: !selectedEdges.EH.selected,
                direction: "forwards",
              },
            });
          }}
          aria-label="EH connection"
          tabIndex={activeButtons["EH"] ? 0 : undefined}
          x="560"
          y="1200"
          width="250"
          height="120"
          fill="white"
          // stroke="black"
          // strokeWidth="2px"
          className={`${components.edges["EH"].text} ${!viewed["EH"] ? "hidden" : ""} stroke-black hover:stroke-black ${activeButtons["EH"] ? "pointer-events-auto cursor-pointer hover:stroke-[4px] focus:stroke-[4px]" : "pointer-events-none"} `}
        ></rect>{" "}
        <text
          style={{
            strokeWidth: 0,
          }}
          className={viewed["EH"] ? components.edges["EH"].text : "hidden"}
          fill="#000000"
          fill-opacity="1"
          font-family="Arial,Arial_MSFontService,sans-serif"
          font-style="normal"
          font-variant="normal"
          font-weight={
            activePair[1] === "E" && activePair[2] === "H" ? "700" : "400"
          }
          font-stretch="normal"
          font-size="50"
          // font-size={
          //   activePair[1] === "E" && activePair[2] === "H" ? "55" : "50"
          // }
          text-anchor="start"
          direction="ltr"
          writing-mode="lr-tb"
          unicode-bidi="normal"
          text-decoration="none"
          transform="matrix(1 0 0 1 576.738 1273)"
        >
          IBS: {fixedData[8].persons.E.IBS.H.toFixed(2)}
        </text>
      </g>
      {/* EI IBS */}
      <g
        className={activeButtons["EI"] ? "pointer-events-none select-none" : ""}
      >
        <rect
          onMouseLeave={(e) => {
            e.currentTarget.blur();
          }}
          onClick={() => {
            if (phase === 20) {
              setQueuedChange({
                EI: {
                  selected: !selectedEdges.EI.selected,
                  direction: selectedEdges.EI.direction as
                    | "forwards"
                    | "backwards",
                },
              });
              return;
            }
            setSelectedEdges({
              ...selectedEdges,
              EI: {
                selected: !selectedEdges.EI.selected,
                direction: "forwards",
              },
            });
          }}
          aria-label="EI connection"
          tabIndex={activeButtons["EI"] ? 0 : undefined}
          x="85"
          y="1210"
          width="250"
          height="120"
          fill="white"
          // stroke="black"
          // strokeWidth="2px"
          className={`${components.edges["EI"].text} ${!viewed["EI"] ? "hidden" : ""} stroke-black hover:stroke-black ${activeButtons["EI"] ? "pointer-events-auto cursor-pointer hover:stroke-[4px] focus:stroke-[4px]" : "pointer-events-none"} `}
        ></rect>{" "}
        <text
          style={{
            strokeWidth: 0,
          }}
          className={viewed["EI"] ? components.edges["EI"].text : "hidden"}
          fill="#000000"
          fill-opacity="1"
          font-family="Arial,Arial_MSFontService,sans-serif"
          font-style="normal"
          font-variant="normal"
          font-weight={
            activePair[1] === "E" && activePair[2] === "I" ? "700" : "400"
          }
          font-stretch="normal"
          font-size="50"
          // font-size={
          //   activePair[1] === "E" && activePair[2] === "I" ? "55" : "50"
          // }
          text-anchor="start"
          direction="ltr"
          writing-mode="lr-tb"
          unicode-bidi="normal"
          text-decoration="none"
          transform="matrix(1 0 0 1 106.738 1295)"
        >
          IBS: {fixedData[8].persons.E.IBS.I.toFixed(2)}
        </text>
      </g>
      {/* GH IBS */}
      <g className="pointer-events-none select-none">
        <rect
          onMouseLeave={(e) => {
            e.currentTarget.blur();
          }}
          onClick={() => {
            if (phase === 20) {
              setQueuedChange({
                GH: {
                  selected: !selectedEdges.GH.selected,
                  direction: selectedEdges.GH.direction as
                    | "forwards"
                    | "backwards",
                },
              });
              return;
            }
            setSelectedEdges({
              ...selectedEdges,
              GH: {
                selected: !selectedEdges.GH.selected,
                direction: "forwards",
              },
            });
          }}
          aria-label="GH connection"
          tabIndex={activeButtons["GH"] ? 0 : undefined}
          x="1585"
          y="1210"
          width="250"
          height="120"
          fill="white"
          // stroke="black"
          // strokeWidth="2px"
          className={`${components.edges["GH"].text} ${!viewed["GH"] ? "hidden" : ""} stroke-black hover:stroke-black ${activeButtons["GH"] ? "pointer-events-auto cursor-pointer hover:stroke-[4px] focus:stroke-[4px]" : "pointer-events-none"} `}
        ></rect>{" "}
        <text
          style={{
            strokeWidth: 0,
          }}
          className={viewed["GH"] ? components.edges["GH"].text : "hidden"}
          fill="#000000"
          fill-opacity="1"
          font-family="Arial,Arial_MSFontService,sans-serif"
          font-style="normal"
          font-variant="normal"
          font-weight={
            activePair[1] === "G" && activePair[2] === "H" ? "700" : "400"
          }
          font-stretch="normal"
          font-size="50"
          // font-size={
          //   activePair[1] === "G" && activePair[2] === "H" ? "55" : "50"
          // }
          text-anchor="start"
          direction="ltr"
          writing-mode="lr-tb"
          unicode-bidi="normal"
          text-decoration="none"
          transform="matrix(1 0 0 1 1606.738 1285)"
        >
          IBS: {fixedData[8].persons.G.IBS.H.toFixed(2)}
        </text>
      </g>
      {/* HI IBS */}
      <g className="pointer-events-none select-none">
        <rect
          onMouseLeave={(e) => {
            e.currentTarget.blur();
          }}
          onClick={() => {
            if (phase === 20) {
              setQueuedChange({
                HI: {
                  selected: !selectedEdges.HI.selected,
                  direction: selectedEdges.HI.direction as
                    | "forwards"
                    | "backwards",
                },
              });
              return;
            }
            setSelectedEdges({
              ...selectedEdges,
              HI: {
                selected: !selectedEdges.HI.selected,
                direction: "forwards",
              },
            });
          }}
          aria-label="HI connection"
          tabIndex={activeButtons["HI"] ? 0 : undefined}
          x="754"
          y="1650"
          width="250"
          height="120"
          fill="white"
          // stroke="black"
          // strokeWidth="2px"
          className={`${components.edges["HI"].text} ${!viewed["HI"] ? "hidden" : ""} stroke-black hover:stroke-black ${activeButtons["HI"] ? "pointer-events-auto cursor-pointer hover:stroke-[4px] focus:stroke-[4px]" : "pointer-events-none"} `}
        ></rect>{" "}
        <text
          style={{
            strokeWidth: 0,
          }}
          className={viewed["HI"] ? components.edges["HI"].text : "hidden"}
          fill="#000000"
          fill-opacity="1"
          font-family="Arial,Arial_MSFontService,sans-serif"
          font-style="normal"
          font-variant="normal"
          font-weight={
            activePair[1] === "H" && activePair[2] === "I" ? "700" : "400"
          }
          font-stretch="normal"
          font-size="50"
          // font-size={
          //   activePair[1] === "H" && activePair[2] === "I" ? "55" : "50"
          // }
          text-anchor="start"
          direction="ltr"
          writing-mode="lr-tb"
          unicode-bidi="normal"
          text-decoration="none"
          transform="matrix(1 0 0 1 776.738 1725)"
        >
          IBS: {fixedData[8].persons.H.IBS.I.toFixed(2)}
        </text>
      </g>
      <text
        style={{
          strokeWidth: 0,
        }}
        fill="#000000"
        fill-opacity="1"
        font-family="Arial,Arial_MSFontService,sans-serif"
        font-style="normal"
        font-variant="normal"
        font-weight="400"
        font-stretch="normal"
        font-size="83"
        text-anchor="start"
        direction="ltr"
        writing-mode="lr-tb"
        unicode-bidi="normal"
        text-decoration="none"
        transform="matrix(1 0 0 1 66.738 683)"
      >
        E
      </text>
      <text
        style={{
          strokeWidth: 0,
        }}
        fill="#000000"
        fill-opacity="1"
        font-family="Arial,Arial_MSFontService,sans-serif"
        font-style="normal"
        font-variant="normal"
        font-weight="400"
        font-stretch="normal"
        font-size="83"
        text-anchor="start"
        direction="ltr"
        writing-mode="lr-tb"
        unicode-bidi="normal"
        text-decoration="none"
        transform="matrix(1 0 0 1 776.738 193)"
      >
        F
      </text>
      <text
        style={{
          strokeWidth: 0,
        }}
        fill="#000000"
        fill-opacity="1"
        font-family="Arial,Arial_MSFontService,sans-serif"
        font-style="normal"
        font-variant="normal"
        font-weight="400"
        font-stretch="normal"
        font-size="83"
        text-anchor="start"
        direction="ltr"
        writing-mode="lr-tb"
        unicode-bidi="normal"
        text-decoration="none"
        transform="matrix(1 0 0 1 1506.738 693)"
      >
        G
      </text>
      <text
        style={{
          strokeWidth: 0,
        }}
        fill="#000000"
        fill-opacity="1"
        font-family="Arial,Arial_MSFontService,sans-serif"
        font-style="normal"
        font-variant="normal"
        font-weight="400"
        font-stretch="normal"
        font-size="83"
        text-anchor="start"
        direction="ltr"
        writing-mode="lr-tb"
        unicode-bidi="normal"
        text-decoration="none"
        transform="matrix(1 0 0 1 1256.738 1473)"
      >
        H
      </text>
      <text
        style={{
          strokeWidth: 0,
        }}
        fill="#000000"
        fill-opacity="1"
        font-family="Arial,Arial_MSFontService,sans-serif"
        font-style="normal"
        font-variant="normal"
        font-weight="400"
        font-stretch="normal"
        font-size="83"
        text-anchor="start"
        direction="ltr"
        writing-mode="lr-tb"
        unicode-bidi="normal"
        text-decoration="none"
        transform="matrix(1 0 0 1 324.738 1473)"
      >
        I
      </text>
      <g transform="translate(-187 -302)">
        <g>
          {/* Person G */}
          <text
            style={{
              strokeWidth: 0,
            }}
            fill="#000000"
            fill-opacity="1"
            font-family="Arial,Arial_MSFontService,sans-serif"
            font-style="normal"
            font-variant="normal"
            font-stretch="normal"
            font-size="50"
            text-anchor="start"
            direction="ltr"
            writing-mode="lr-tb"
            unicode-bidi="normal"
            text-decoration="underline"
            transform="matrix(1 0 0 1 1826.738 910)"
          >
            MOI: 1
          </text>
          <g
            // fill="url('#Gradient1')"
            className={components.nodes["G"].person ?? ""}
          >
            <g>
              <g>
                <path
                  d="M235.847 63.005C235.847 86.5546 216.838 105.645 193.39 105.645 169.942 105.645 150.934 86.5546 150.934 63.005 150.934 39.4554 169.942 20.3646 193.39 20.3646 216.838 20.3646 235.847 39.4554 235.847 63.005Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1.00256 1637 911)"
                />
                <path
                  d="M129.705 155.397C120.603 179.165 119.986 209.99 120.178 223.907 120.238 228.277 123.15 232.14 127.291 233.535L134.423 235.94 140.08 238.213C143.812 239.712 146.312 243.267 146.46 247.285L150.572 358.792C150.774 364.266 155.27 368.599 160.747 368.599L226.033 368.599C231.511 368.599 236.007 364.266 236.209 358.792L240.321 247.295C240.469 243.271 242.974 239.714 246.711 238.217L252.403 235.938 259.645 233.521C263.799 232.134 266.717 228.265 266.762 223.884 266.902 209.955 266.171 179.153 257.074 155.397 245.281 124.601 235.846 123.413 226.412 119.859 216.977 116.305 174.52 116.306 162.727 119.859 150.934 123.412 141.498 124.602 129.705 155.397Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1.00256 1637 911)"
                />
              </g>
            </g>
          </g>
          {/* Circle Person G */}
          <g className={components.nodes["G"].circle ?? ""}>
            <g>
              <g>
                <path
                  d="M45.5998 23.9999C45.5998 35.9286 35.929 45.5998 23.9999 45.5998 12.0707 45.5998 2.39999 35.9286 2.39999 23.9999 2.39999 12.0711 12.0707 2.39999 23.9999 2.39999 35.929 2.39999 45.5998 12.0711 45.5998 23.9999"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1.02083 1809 1070)"
                />
              </g>
            </g>
          </g>
          {/* Person H */}
          <text
            style={{
              strokeWidth: 0,
            }}
            fill="#000000"
            fill-opacity="1"
            font-family="Arial,Arial_MSFontService,sans-serif"
            font-style="normal"
            font-variant="normal"
            font-stretch="normal"
            font-size="50"
            text-anchor="start"
            direction="ltr"
            writing-mode="lr-tb"
            unicode-bidi="normal"
            text-decoration="underline"
            transform="matrix(1 0 0 1 1676.738 1800)"
          >
            MOI: 2
          </text>
          <g className={components.nodes["H"].person ?? ""}>
            <g>
              <g>
                <path
                  d="M235.847 63.0049C235.847 86.5546 216.838 105.645 193.39 105.645 169.942 105.645 150.934 86.5546 150.934 63.0049 150.934 39.4553 169.942 20.3646 193.39 20.3646 216.838 20.3646 235.847 39.4553 235.847 63.0049Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1.00256 0 0 1 1377 1686)"
                />
                <path
                  d="M129.705 155.397C120.603 179.165 119.986 209.989 120.178 223.906 120.238 228.277 123.15 232.14 127.291 233.535L134.423 235.94 140.08 238.213C143.812 239.711 146.312 243.267 146.46 247.285L150.572 358.791C150.774 364.265 155.27 368.599 160.747 368.599L226.033 368.599C231.511 368.599 236.007 364.265 236.209 358.791L240.32 247.295C240.469 243.271 242.974 239.713 246.711 238.217L252.403 235.938 259.644 233.521C263.799 232.134 266.717 228.264 266.762 223.884 266.902 209.955 266.171 179.152 257.074 155.397 245.281 124.601 235.846 123.413 226.411 119.859 216.976 116.305 174.52 116.306 162.727 119.859 150.933 123.412 141.498 124.601 129.705 155.397Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1.00256 0 0 1 1377 1686)"
                />
              </g>
            </g>
          </g>
          {/* Circle Person BOTTOM RIGHT */}
          <g className={components.nodes["H"].circle ?? ""}>
            <g>
              <g>
                <path
                  d="M45.6001 24.0001C45.6001 35.9289 35.9293 45.6001 24.0001 45.6001 12.0708 45.6001 2.40001 35.9289 2.40001 24.0001 2.40001 12.0712 12.0708 2.40001 24.0001 2.40001 35.9293 2.40001 45.6001 12.0712 45.6001 24.0001"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1.02083 1549 1845)"
                />
              </g>
            </g>
          </g>
          {/* Person F */}
          <text
            style={{
              strokeWidth: 0,
            }}
            fill="#000000"
            fill-opacity="1"
            font-family="Arial,Arial_MSFontService,sans-serif"
            font-style="normal"
            font-variant="normal"
            font-stretch="normal"
            font-size="50"
            text-anchor="start"
            direction="ltr"
            writing-mode="lr-tb"
            unicode-bidi="normal"
            text-decoration="underline"
            transform="matrix(1 0 0 1 1106.738 403)"
          >
            MOI: 3
          </text>
          <g className={components.nodes["F"].person ?? ""}>
            <g>
              <g>
                <path
                  d="M235.847 63.0049C235.847 86.5546 216.838 105.645 193.39 105.645 169.942 105.645 150.934 86.5546 150.934 63.0049 150.934 39.4553 169.942 20.3646 193.39 20.3646 216.838 20.3646 235.847 39.4553 235.847 63.0049Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1 904 414)"
                />
                <path
                  d="M129.705 155.397C120.603 179.165 119.986 209.989 120.178 223.906 120.238 228.277 123.15 232.14 127.291 233.535L134.423 235.94 140.08 238.213C143.812 239.711 146.312 243.267 146.46 247.285L150.572 358.791C150.774 364.265 155.27 368.599 160.747 368.599L226.033 368.599C231.511 368.599 236.007 364.265 236.209 358.791L240.32 247.295C240.469 243.271 242.974 239.713 246.711 238.217L252.403 235.938 259.644 233.521C263.799 232.134 266.717 228.264 266.762 223.884 266.902 209.955 266.171 179.152 257.074 155.397 245.281 124.601 235.846 123.413 226.411 119.859 216.976 116.305 174.52 116.306 162.727 119.859 150.933 123.412 141.498 124.601 129.705 155.397Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1 904 414)"
                />
              </g>
            </g>
          </g>
          {/* Person Circle F */}
          <g className={components.nodes["F"].circle ?? ""}>
            <g>
              <g>
                <path
                  d="M45.6001 24.0001C45.6001 35.9289 35.9293 45.6001 24.0001 45.6001 12.0708 45.6001 2.40001 35.9289 2.40001 24.0001 2.40001 12.0712 12.0708 2.40001 24.0001 2.40001 35.9293 2.40001 45.6001 12.0712 45.6001 24.0001"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1.02083 1076 573)"
                />
              </g>
            </g>
          </g>
          {/* Bus F */}
          <g>
            <g>
              <g>
                <path
                  d="M921 347.25C921 345.737 922.237 344.5 923.75 344.5L943 344.5 943 366.5 921 366.5 921 347.25ZM948.5 344.5 970.5 344.5 970.5 366.5 948.5 366.5 948.5 344.5ZM976 344.5 998 344.5 998 366.5 976 366.5 976 344.5ZM1003.5 344.5 1021.79 344.5C1024.4 344.5 1026.74 346.425 1027.15 349.037L1030.31 368.562C1030.59 370.625 1030.86 372.687 1030.86 374.75L1011.75 374.75 1003.5 366.5 1003.5 344.5ZM915.5 344.5 915.5 394C915.5 397.025 917.975 399.5 921 399.5L921.275 399.5C921.137 398.675 921 397.712 921 396.75 921 389.187 927.187 383 934.75 383 942.312 383 948.5 389.187 948.5 396.75 948.5 397.712 948.362 398.675 948.225 399.5L998.275 399.5C998.137 398.675 998 397.712 998 396.75 998 389.187 1004.19 383 1011.75 383 1019.31 383 1025.5 389.187 1025.5 396.75 1025.5 397.712 1025.36 398.675 1025.22 399.5L1031 399.5C1034.02 399.5 1036.5 397.025 1036.5 394L1036.5 376.4C1036.5 373.512 1036.22 370.487 1035.81 367.6L1032.65 347.937C1031.69 342.712 1027.15 338.862 1021.79 338.862L921 338.862C917.975 339 915.5 341.475 915.5 344.5Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M1021.37 396.75C1021.37 402.066 1017.07 406.375 1011.75 406.375 1006.43 406.375 1002.12 402.066 1002.12 396.75 1002.12 391.434 1006.43 387.125 1011.75 387.125 1017.07 387.125 1021.37 391.434 1021.37 396.75Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M944.375 396.75C944.375 402.066 940.066 406.375 934.75 406.375 929.434 406.375 925.125 402.066 925.125 396.75 925.125 391.434 929.434 387.125 934.75 387.125 940.066 387.125 944.375 391.434 944.375 396.75Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Person LEFT */}
          <text
            style={{
              strokeWidth: 0,
            }}
            fill="#000000"
            fill-opacity="1"
            font-family="Arial,Arial_MSFontService,sans-serif"
            font-style="normal"
            font-variant="normal"
            font-stretch="normal"
            font-size="50"
            text-anchor="start"
            direction="ltr"
            writing-mode="lr-tb"
            unicode-bidi="normal"
            text-decoration="underline"
            transform="matrix(1 0 0 1 386.738 868)"
          >
            MOI: 2
          </text>
          <g className={components.nodes["E"].person ?? ""}>
            <g>
              <g>
                <path
                  d="M429.847 963.005C429.847 986.555 410.838 1005.65 387.39 1005.65 363.942 1005.65 344.934 986.555 344.934 963.005 344.934 939.455 363.942 920.365 387.39 920.365 410.838 920.365 429.847 939.455 429.847 963.005Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M323.705 1055.4C314.603 1079.17 313.986 1109.99 314.178 1123.91 314.238 1128.28 317.15 1132.14 321.291 1133.54L328.423 1135.94 334.08 1138.21C337.812 1139.71 340.312 1143.27 340.46 1147.29L344.572 1258.79C344.774 1264.27 349.27 1268.6 354.747 1268.6L420.033 1268.6C425.511 1268.6 430.007 1264.27 430.209 1258.79L434.32 1147.3C434.469 1143.27 436.974 1139.71 440.711 1138.22L446.403 1135.94 453.644 1133.52C457.799 1132.13 460.717 1128.26 460.762 1123.88 460.902 1109.95 460.171 1079.15 451.074 1055.4 439.281 1024.6 429.846 1023.41 420.411 1019.86 410.976 1016.31 368.52 1016.31 356.727 1019.86 344.933 1023.41 335.498 1024.6 323.705 1055.4Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Circle Person LEFT */}
          <g className={components.nodes["E"].circle ?? ""}>
            <g>
              <g>
                <path
                  d="M45.5998 23.9999C45.5998 35.9286 35.929 45.5998 23.9999 45.5998 12.0707 45.5998 2.39999 35.9286 2.39999 23.9999 2.39999 12.0711 12.0707 2.39999 23.9999 2.39999 35.929 2.39999 45.5998 12.0711 45.5998 23.9999"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1.02083 366 1058)"
                />
              </g>
            </g>
          </g>
          {/* Bus E */}
          <g className={components.bus["E"] ?? ""}>
            <g>
              <g>
                <path
                  d="M203 817.25C203 815.737 204.238 814.5 205.75 814.5L225 814.5 225 836.5 203 836.5 203 817.25ZM230.5 814.5 252.5 814.5 252.5 836.5 230.5 836.5 230.5 814.5ZM258 814.5 280 814.5 280 836.5 258 836.5 258 814.5ZM285.5 814.5 303.788 814.5C306.4 814.5 308.738 816.425 309.15 819.037L312.313 838.562C312.588 840.625 312.863 842.687 312.863 844.75L293.75 844.75 285.5 836.5 285.5 814.5ZM197.5 814.5 197.5 864C197.5 867.025 199.975 869.5 203 869.5L203.275 869.5C203.138 868.675 203 867.712 203 866.75 203 859.187 209.188 853 216.75 853 224.313 853 230.5 859.187 230.5 866.75 230.5 867.712 230.363 868.675 230.225 869.5L280.275 869.5C280.138 868.675 280 867.712 280 866.75 280 859.187 286.188 853 293.75 853 301.313 853 307.5 859.187 307.5 866.75 307.5 867.712 307.363 868.675 307.225 869.5L313 869.5C316.025 869.5 318.5 867.025 318.5 864L318.5 846.4C318.5 843.512 318.225 840.487 317.813 837.6L314.65 817.937C313.688 812.712 309.15 808.862 303.788 808.862L203 808.862C199.975 809 197.5 811.475 197.5 814.5Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M303.375 866.75C303.375 872.066 299.066 876.375 293.75 876.375 288.434 876.375 284.125 872.066 284.125 866.75 284.125 861.434 288.434 857.125 293.75 857.125 299.066 857.125 303.375 861.434 303.375 866.75Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M226.375 866.75C226.375 872.066 222.066 876.375 216.75 876.375 211.434 876.375 207.125 872.066 207.125 866.75 207.125 861.434 211.434 857.125 216.75 857.125 222.066 857.125 226.375 861.434 226.375 866.75Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Person BOTTOM LEFT */}
          <text
            style={{
              strokeWidth: 0,
            }}
            fill="#000000"
            fill-opacity="1"
            font-family="Arial,Arial_MSFontService,sans-serif"
            font-style="normal"
            font-variant="normal"
            font-stretch="normal"
            font-size="50"
            text-anchor="start"
            direction="ltr"
            writing-mode="lr-tb"
            unicode-bidi="normal"
            text-decoration="underline"
            transform="matrix(1 0 0 1 726.738 1835)"
          >
            MOI: I
          </text>
          <g className={components.nodes["I"].person ?? ""}>
            <g>
              <g>
                <path
                  d="M655.847 1749.01C655.847 1772.55 636.838 1791.65 613.39 1791.65 589.942 1791.65 570.934 1772.55 570.934 1749.01 570.934 1725.46 589.942 1706.36 613.39 1706.36 636.838 1706.36 655.847 1725.46 655.847 1749.01Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M549.705 1841.4C540.603 1865.17 539.986 1895.99 540.178 1909.91 540.238 1914.28 543.15 1918.14 547.291 1919.53L554.423 1921.94 560.08 1924.21C563.812 1925.71 566.312 1929.27 566.46 1933.29L570.572 2044.79C570.774 2050.27 575.27 2054.6 580.747 2054.6L646.033 2054.6C651.511 2054.6 656.007 2050.27 656.209 2044.79L660.32 1933.3C660.469 1929.27 662.974 1925.71 666.711 1924.22L672.403 1921.94 679.644 1919.52C683.799 1918.13 686.717 1914.26 686.762 1909.88 686.902 1895.95 686.171 1865.15 677.074 1841.4 665.281 1810.6 655.846 1809.41 646.411 1805.86 636.976 1802.31 594.52 1802.31 582.727 1805.86 570.934 1809.41 561.498 1810.6 549.705 1841.4Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Circle Person BOTTOM LEFT */}
          <g className={components.nodes["G"].circle ?? ""}>
            <g>
              <g>
                <path
                  d="M45.6001 24.0001C45.6001 35.9289 35.9293 45.6001 24.0001 45.6001 12.0708 45.6001 2.40001 35.9289 2.40001 24.0001 2.40001 12.0712 12.0708 2.40001 24.0001 2.40001 35.9293 2.40001 45.6001 12.0712 45.6001 24.0001"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1.02083 592 1845)"
                />
              </g>
            </g>
          </g>
          {/* Line LEFT to TOP */}
          <g className={components.edges["EF"]?.line ?? ""}>
            <path
              d="M21.6638 8.22566 425.981 235.325 422.614 241.319 18.297 14.2198ZM17.243 25.4557 0 0 30.7103 1.47905ZM427.035 224.089 444.278 249.545 413.568 248.066Z"
              fill-rule="nonzero"
              fill-opacity="1"
              transform="matrix(1 0 0 -1 502.5 936.045)"
            />
          </g>
          {/* Circle Line LEFT to TOP */}
          <g className="pointer-events-none">
            <g>
              <path
                className={components.edges["EF"]?.lineCover ?? ""}
                d="M674 812.5C674 785.714 696.61 764 724.5 764 752.391 764 775 785.714 775 812.5 775 839.286 752.391 861 724.5 861 696.61 861 674 839.286 674 812.5Z"
                fill="#FFFFFF"
                fill-rule="evenodd"
                fill-opacity="1"
              />
              <circle
                onMouseLeave={(e) => {
                  e.currentTarget.blur();
                }}
                onClick={() => {
                  setViewed({ ...viewed, EF: true });
                  if (activePair[1] === "E" && activePair[2] === "F") {
                    setActivePair({
                      1: null,
                      2: null,
                    });
                  } else {
                    setActivePair({
                      1: "E",
                      2: "F",
                    });
                  }
                }}
                r={60}
                tabIndex={0}
                cx="724"
                cy="809"
                className={`${components.edges["EF"].circle} peer/EF pointer-events-auto cursor-pointer fill-transparent focus:outline-none`}
              ></circle>
              <g
                className={
                  `${activePair[1] === "E" && activePair[2] === "F" ? "stroke-black stroke-[4px]" : ""} peer-hover/EF:stroke-black peer-hover/EF:stroke-black peer-hover/EF:stroke-[4px] peer-hover/EF:stroke-[4px] peer-focus/EF:stroke-black peer-focus/EF:stroke-[4px] ` +
                  (components.edges["EF"]?.circle ?? "")
                }
              >
                <path
                  d="M724 757.75C695.135 757.742 671.728 781.135 671.72 810 671.711 838.865 695.104 862.272 723.97 862.28 752.835 862.289 776.242 838.895 776.25 810.03 776.25 810.025 776.25 810.019 776.25 810.014 776.265 781.164 752.891 757.765 724.041 757.75 724.027 757.75 724.014 757.75 724 757.75ZM724 859.529C696.654 859.537 674.478 837.375 674.47 810.029 674.461 782.682 696.623 760.507 723.97 760.498 751.316 760.49 773.492 782.652 773.5 809.998 773.5 810.005 773.5 810.011 773.5 810.018 773.473 837.347 751.329 859.497 724 859.533Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  className="stroke-1"
                  d="M724.687 785.957 721.937 785.957 721.937 808.625 699.25 808.625 699.25 811.375 721.937 811.375 721.937 834.082 724.687 834.082 724.687 811.375 747.375 811.375 747.375 808.625 724.687 808.625 724.687 785.957Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Line TOP to RIGHT */}
          <g className={components.edges["FG"]?.line ?? ""}>
            {/* <circle
              r={20}
              cx={1250}
              cy={678}
              fill={components.edges["FG"]?.line || ""}
            ></circle> */}
            <path
              d={`M1262.64 679.954 1621.27 961.688 1617.02 967.095 1258.4 685.36
              ZM1255.63 696.301 1242.5 668.5 1272.62 674.676
              ZM1624.04 950.748 1637.17 978.549 1607.05 972.373Z`}
              fill-rule="nonzero"
              fill-opacity="1"
            />
          </g>
          {/* Circle Line TOP to RIGHT */}
          <g className="pointer-events-none">
            <g>
              <path
                className={components.edges["FG"]?.lineCover ?? ""}
                d="M1380 807.5C1380 780.714 1402.39 759 1430 759 1457.61 759 1480 780.714 1480 807.5 1480 834.286 1457.61 856 1430 856 1402.39 856 1380 834.286 1380 807.5Z"
                fill="#FFFFFF"
                fill-rule="evenodd"
                fill-opacity="1"
              />
              <circle
                onMouseLeave={(e) => {
                  e.currentTarget.blur();
                }}
                onClick={() => {
                  setViewed({ ...viewed, FG: true });
                  if (activePair[1] === "F" && activePair[2] === "G") {
                    setActivePair({
                      1: null,
                      2: null,
                    });
                  } else {
                    setActivePair({
                      1: "F",
                      2: "G",
                    });
                  }
                }}
                r={60}
                tabIndex={0}
                cx="1430"
                cy="805"
                className={`${components.edges["FG"].circle} peer/FG pointer-events-auto cursor-pointer fill-transparent focus:outline-none`}
              ></circle>
              <g
                className={
                  `${activePair[1] === "F" && activePair[2] === "G" ? "stroke-black stroke-[4px]" : ""} peer-hover/FG:stroke-black peer-hover/FG:stroke-[4px] peer-focus/EF:stroke-black peer-focus/EF:stroke-[4px] ` +
                  (components.edges["FG"]?.circle ?? "")
                }
              >
                <path
                  d="M1430 752.75C1401.13 752.742 1377.73 776.135 1377.72 805 1377.71 833.865 1401.1 857.272 1429.97 857.28 1458.83 857.289 1482.24 833.896 1482.25 805.03 1482.25 805.025 1482.25 805.019 1482.25 805.014 1482.27 776.165 1458.89 752.765 1430.04 752.75 1430.03 752.75 1430.01 752.75 1430 752.75ZM1430 854.529C1402.65 854.537 1380.48 832.375 1380.47 805.029 1380.46 777.682 1402.62 755.507 1429.97 755.499 1457.32 755.49 1479.49 777.652 1479.5 804.999 1479.5 805.005 1479.5 805.011 1479.5 805.018 1479.47 832.347 1457.33 854.497 1430 854.533Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M1430.69 780.957 1427.94 780.957 1427.94 803.625 1405.25 803.625 1405.25 806.375 1427.94 806.375 1427.94 829.082 1430.69 829.082 1430.69 806.375 1453.38 806.375 1453.38 803.625 1430.69 803.625 1430.69 780.957Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Line BOTTOM LEFT to BOTTOM RIGHT */}
          <g className={components.edges["HI"]?.line ?? ""}>
            <path
              d="M792.417 1899.06 1354.94 1899.06 1354.94 1905.94 792.417 1905.94ZM797 1916.25 769.5 1902.5 797 1888.75ZM1350.35 1888.75 1377.85 1902.5 1350.35 1916.25Z"
              fill-rule="nonzero"
              fill-opacity="1"
            />
          </g>
          {/* Circle Line BOTTOM LEFT to BOTTOM RIGHT */}
          <g className="pointer-events-none">
            <g>
              <path
                className={components.edges["HI"]?.lineCover ?? ""}
                d="M1026 1903.5C1026 1876.71 1048.61 1855 1076.5 1855 1104.39 1855 1127 1876.71 1127 1903.5 1127 1930.29 1104.39 1952 1076.5 1952 1048.61 1952 1026 1930.29 1026 1903.5Z"
                fill="#FFFFFF"
                fill-rule="evenodd"
                fill-opacity="1"
              />
              <circle
                onMouseLeave={(e) => {
                  e.currentTarget.blur();
                }}
                onClick={() => {
                  setViewed({ ...viewed, HI: true });
                  if (activePair[1] === "H" && activePair[2] === "I") {
                    setActivePair({
                      1: null,
                      2: null,
                    });
                  } else {
                    setActivePair({
                      1: "H",
                      2: "I",
                    });
                  }
                }}
                r={60}
                tabIndex={0}
                cx="1076"
                cy="1902"
                className={`${components.edges["HI"].circle} peer/HI pointer-events-auto cursor-pointer fill-transparent focus:outline-none`}
              ></circle>
              <g
                className={
                  `${activePair[1] === "H" && activePair[2] === "I" ? "stroke-black stroke-[4px]" : ""} peer-hover/HI:stroke-black peer-hover/HI:stroke-[4px] peer-focus/HI:stroke-black peer-focus/HI:stroke-[4px] ` +
                  (components.edges["HI"]?.circle ?? "")
                }
              >
                <path
                  d="M1076 1849.75C1047.13 1849.74 1023.73 1873.13 1023.72 1902 1023.71 1930.87 1047.1 1954.27 1075.97 1954.28 1104.83 1954.29 1128.24 1930.9 1128.25 1902.03 1128.25 1902.02 1128.25 1902.02 1128.25 1902.01 1128.27 1873.16 1104.89 1849.77 1076.04 1849.75 1076.03 1849.75 1076.01 1849.75 1076 1849.75ZM1076 1951.53C1048.65 1951.54 1026.48 1929.38 1026.47 1902.03 1026.46 1874.68 1048.62 1852.51 1075.97 1852.5 1103.32 1852.49 1125.49 1874.65 1125.5 1902 1125.5 1902.01 1125.5 1902.01 1125.5 1902.02 1125.47 1929.35 1103.33 1951.5 1076 1951.53Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M1076.69 1877.96 1073.94 1877.96 1073.94 1900.62 1051.25 1900.62 1051.25 1903.38 1073.94 1903.38 1073.94 1926.08 1076.69 1926.08 1076.69 1903.38 1099.38 1903.38 1099.38 1900.62 1076.69 1900.62 1076.69 1877.96Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Line BOTTOM RIGHT to RIGHT */}
          <g className={components.edges["GH"]?.line ?? ""}>
            <path
              d="M13.719 18.6757 164.028 304.125 157.945 307.329 7.63581 21.879ZM0.646472 30.7391 0 0 24.9792 17.9263ZM171.017 295.265 171.664 326.004 146.684 308.078Z"
              fill-rule="nonzero"
              fill-opacity="1"
              transform="matrix(1 0 0 -1 1637.5 1674.5)"
            />
          </g>
          {/* Line BOTTOM LEFT to LEFT */}
          <g className={components.edges["EI"]?.line ?? ""}>
            <path
              d="M577.254 1642.24 422.128 1347.38 428.212 1344.18 583.338 1639.04ZM590.331 1630.18 590.966 1660.92 565.994 1642.99ZM415.135 1356.24 414.5 1325.5 439.473 1343.44Z"
              fill-rule="nonzero"
              fill-opacity="1"
            />
          </g>
          {/* Circle BOTTOM RIGHT to RIGHT */}
          <g className="pointer-events-none">
            <g>
              <path
                className={components.edges["GH"]?.lineCover ?? ""}
                d="M1673 1512.5C1673 1485.71 1695.61 1464 1723.5 1464 1751.39 1464 1774 1485.71 1774 1512.5 1774 1539.29 1751.39 1561 1723.5 1561 1695.61 1561 1673 1539.29 1673 1512.5Z"
                fill="#FFFFFF"
                fill-rule="evenodd"
                fill-opacity="1"
              />
              <circle
                onMouseLeave={(e) => {
                  e.currentTarget.blur();
                }}
                onClick={() => {
                  setViewed({ ...viewed, GH: true });
                  if (activePair[1] === "G" && activePair[2] === "H") {
                    setActivePair({
                      1: null,
                      2: null,
                    });
                  } else {
                    setActivePair({
                      1: "G",
                      2: "H",
                    });
                  }
                }}
                r={60}
                tabIndex={0}
                cx="1723"
                cy="1508"
                className={`${components.edges["GH"].circle} peer/GH pointer-events-auto cursor-pointer fill-transparent focus:outline-none`}
              ></circle>
              <g
                className={
                  `${activePair[1] === "G" && activePair[2] === "H" ? "stroke-black stroke-[4px]" : ""} peer-hover/GH:stroke-black peer-hover/GH:stroke-[4px] peer-focus/GH:stroke-black peer-focus/GH:stroke-[4px] ` +
                  (components.edges["GH"]?.circle ?? "")
                }
              >
                <path
                  d="M1723 1458.75C1694.13 1458.74 1670.73 1482.13 1670.72 1511 1670.71 1539.87 1694.1 1563.27 1722.97 1563.28 1751.83 1563.29 1775.24 1539.9 1775.25 1511.03 1775.25 1511.02 1775.25 1511.02 1775.25 1511.01 1775.27 1482.16 1751.89 1458.77 1723.04 1458.75 1723.03 1458.75 1723.01 1458.75 1723 1458.75ZM1723 1560.53C1695.65 1560.54 1673.48 1538.38 1673.47 1511.03 1673.46 1483.68 1695.62 1461.51 1722.97 1461.5 1750.32 1461.49 1772.49 1483.65 1772.5 1511 1772.5 1511.01 1772.5 1511.01 1772.5 1511.02 1772.47 1538.35 1750.33 1560.5 1723 1560.53Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M1723.69 1486.96 1720.94 1486.96 1720.94 1509.63 1698.25 1509.63 1698.25 1512.38 1720.94 1512.38 1720.94 1535.08 1723.69 1535.08 1723.69 1512.38 1746.37 1512.38 1746.37 1509.63 1723.69 1509.63 1723.69 1486.96Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Circle Line BOTTOM LEFT to LEFT */}
          <g className="pointer-events-none">
            <g>
              <path
                className={components.edges["EI"]?.lineCover ?? ""}
                d="M452 1489.5C452 1462.71 474.61 1441 502.5 1441 530.39 1441 553 1462.71 553 1489.5 553 1516.29 530.39 1538 502.5 1538 474.61 1538 452 1516.29 452 1489.5Z"
                fill="#FFFFFF"
                fill-rule="evenodd"
                fill-opacity="1"
              />
              <circle
                onMouseLeave={(e) => {
                  e.currentTarget.blur();
                }}
                onClick={() => {
                  if (phase === 14) {
                    setViewed({ ...viewed, EI: true });
                    if (activePair[1] === "E" && activePair[2] === "I") {
                      setActivePair({
                        1: null,
                        2: null,
                      });
                    } else {
                      setActivePair({
                        1: "E",
                        2: "I",
                      });
                    }
                  }
                }}
                r={60}
                tabIndex={0}
                cx="502"
                cy="1486"
                className={`${![14].includes(phase) ? "hidden" : ""} ${components.edges["EI"].circle} peer/EI pointer-events-auto cursor-pointer fill-transparent focus:outline-none`}
              ></circle>
              <g
                className={
                  `${activePair[1] === "E" && activePair[2] === "I" ? "stroke-black stroke-[4px]" : ""} peer-hover/EI:stroke-black peer-hover/EI:stroke-[4px] peer-focus/EI:stroke-black peer-focus/EI:stroke-[4px] ` +
                  (components.edges["EI"]?.circle ?? "")
                }
              >
                <path
                  d="M502 1435.75C473.135 1435.74 449.728 1459.13 449.72 1488 449.711 1516.87 473.104 1540.27 501.97 1540.28 530.835 1540.29 554.241 1516.9 554.25 1488.03 554.25 1488.02 554.25 1488.02 554.25 1488.01 554.265 1459.16 530.89 1435.77 502.041 1435.75 502.027 1435.75 502.014 1435.75 502 1435.75ZM502 1537.53C474.653 1537.54 452.478 1515.38 452.47 1488.03 452.461 1460.68 474.623 1438.51 501.97 1438.5 529.316 1438.49 551.491 1460.65 551.5 1488 551.5 1488.01 551.5 1488.01 551.5 1488.02 551.473 1515.35 529.329 1537.5 502 1537.53Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M502.687 1463.96 499.937 1463.96 499.937 1486.63 477.25 1486.63 477.25 1489.38 499.937 1489.38 499.937 1512.08 502.687 1512.08 502.687 1489.38 525.375 1489.38 525.375 1486.63 502.687 1486.63 502.687 1463.96Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Line TOP LEFT to TOP RIGHT */}
          <g className={components.edges["EG"]?.line ?? ""}>
            <path
              d="M560.417 1116.06 1680.15 1116.06 1680.15 1122.94 560.417 1122.94ZM565 1133.25 537.5 1119.5 565 1105.75ZM1675.57 1105.75 1703.07 1119.5 1675.57 1133.25Z"
              fill-rule="nonzero"
              fill-opacity="1"
            />
          </g>
          {/* Line TOP to BOTTOM LEFT */}
          <g className={components.edges["FI"]?.line ?? ""}>
            <path
              d="M12.5645 19.4713 380.096 833.359 373.831 836.188 6.29874 22.3007ZM-1.21365 30.722 0 0 23.8494 19.4041ZM387.609 824.938 386.395 855.66 362.546 836.256Z"
              fill-rule="nonzero"
              fill-opacity="1"
              transform="matrix(1 0 0 -1 670.5 1712.16)"
            />
          </g>
          {/* Circle TOP LEFT to TOP RIGHT */}
          <g className="pointer-events-none">
            <g>
              <path
                className={components.edges["EG"]?.lineCover ?? ""}
                d="M1020 1120.5C1020 1093.71 1042.39 1072 1070 1072 1097.61 1072 1120 1093.71 1120 1120.5 1120 1147.29 1097.61 1169 1070 1169 1042.39 1169 1020 1147.29 1020 1120.5Z"
                fill="#FFFFFF"
                fill-rule="evenodd"
                fill-opacity="1"
              />
              <circle
                onMouseLeave={(e) => {
                  e.currentTarget.blur();
                }}
                onClick={() => {
                  if (phase === 14) {
                    setViewed({ ...viewed, EG: true });
                    if (activePair[1] === "E" && activePair[2] === "G") {
                      setActivePair({
                        1: null,
                        2: null,
                      });
                    } else {
                      setActivePair({
                        1: "E",
                        2: "G",
                      });
                    }
                  }
                }}
                r={60}
                tabIndex={0}
                cx="1068"
                cy="1118"
                className={`${![14].includes(phase) ? "hidden" : ""} ${components.edges["EG"].circle} peer/EG pointer-events-auto cursor-pointer fill-transparent focus:outline-none`}
              ></circle>
              <g
                className={
                  `${activePair[1] === "E" && activePair[2] === "G" ? "stroke-black stroke-[4px]" : ""} peer-hover/EG:stroke-black peer-hover/EG:stroke-[4px] peer-focus/EG:stroke-black peer-focus/EG:stroke-[4px] ` +
                  (components.edges["EG"]?.circle ?? "")
                }
              >
                <path
                  d="M1069 1066.75C1040.13 1066.74 1016.73 1090.13 1016.72 1119 1016.71 1147.87 1040.1 1171.27 1068.97 1171.28 1097.84 1171.29 1121.24 1147.9 1121.25 1119.03 1121.25 1119.02 1121.25 1119.02 1121.25 1119.01 1121.27 1090.16 1097.89 1066.77 1069.04 1066.75 1069.03 1066.75 1069.01 1066.75 1069 1066.75ZM1069 1168.53C1041.65 1168.54 1019.48 1146.38 1019.47 1119.03 1019.46 1091.68 1041.62 1069.51 1068.97 1069.5 1096.32 1069.49 1118.49 1091.65 1118.5 1119 1118.5 1119.01 1118.5 1119.01 1118.5 1119.02 1118.47 1146.35 1096.33 1168.5 1069 1168.53Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M1069.69 1094.96 1066.94 1094.96 1066.94 1117.62 1044.25 1117.62 1044.25 1120.37 1066.94 1120.37 1066.94 1143.08 1069.69 1143.08 1069.69 1120.37 1092.38 1120.37 1092.38 1117.62 1069.69 1117.62 1069.69 1094.96Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Circle LINE TOP to BOTTOM LEFT */}
          <g className="pointer-events-none">
            <g>
              <path
                className={components.edges["FI"]?.lineCover ?? ""}
                d="M824 1250.5C824 1223.71 846.386 1202 874 1202 901.614 1202 924 1223.71 924 1250.5 924 1277.29 901.614 1299 874 1299 846.386 1299 824 1277.29 824 1250.5Z"
                fill="#FFFFFF"
                fill-rule="evenodd"
                fill-opacity="1"
              />
              <circle
                onMouseLeave={(e) => {
                  e.currentTarget.blur();
                }}
                onClick={() => {
                  setViewed({ ...viewed, FI: true });
                  if (activePair[1] === "F" && activePair[2] === "I") {
                    setActivePair({
                      1: null,
                      2: null,
                    });
                  } else {
                    setActivePair({
                      1: "F",
                      2: "I",
                    });
                  }
                }}
                r={60}
                tabIndex={0}
                cx="872"
                cy="1248"
                className={`${components.edges["FI"].circle} peer/FI pointer-events-auto cursor-pointer fill-transparent focus:outline-none`}
              ></circle>
              <g
                className={
                  `${activePair[1] === "F" && activePair[2] === "I" ? "stroke-black stroke-[4px]" : ""} peer-hover/FI:stroke-black peer-hover/FI:stroke-[4px] peer-focus/FI:stroke-black peer-focus/FI:stroke-[4px] ` +
                  (components.edges["FI"]?.circle ?? "")
                }
              >
                <path
                  d="M873 1196.75C844.135 1196.74 820.728 1220.13 820.72 1249 820.712 1277.87 844.105 1301.27 872.97 1301.28 901.835 1301.29 925.242 1277.9 925.25 1249.03 925.25 1249.02 925.25 1249.02 925.25 1249.01 925.265 1220.16 901.891 1196.77 873.041 1196.75 873.028 1196.75 873.014 1196.75 873 1196.75ZM873 1298.53C845.654 1298.54 823.478 1276.38 823.47 1249.03 823.461 1221.68 845.623 1199.51 872.97 1199.5 900.316 1199.49 922.492 1221.65 922.5 1249 922.5 1249.01 922.5 1249.01 922.5 1249.02 922.473 1276.35 900.329 1298.5 873 1298.53Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M873.688 1224.96 870.938 1224.96 870.938 1247.62 848.25 1247.62 848.25 1250.37 870.938 1250.37 870.938 1273.08 873.688 1273.08 873.688 1250.37 896.375 1250.37 896.375 1247.62 873.688 1247.62 873.688 1224.96Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Line BOTTOM LEFT to TOP RIGHT */}
          <g className={components.edges["GI"]?.line ?? ""}>
            <path
              d="M21.4174 8.85817 976.806 582.895 973.265 588.788 17.8766 14.7512ZM16.4907 25.9494 0 0 30.6539 2.37705ZM978.185 571.693 994.676 597.642 964.022 595.265Z"
              fill-rule="nonzero"
              fill-opacity="1"
              transform="matrix(1 0 0 -1 708.5 1786.14)"
            />
          </g>
          {/* Line LEFT to BOTTOM RIGHT */}
          <g className={components.edges["EH"]?.line ?? ""}>
            <path
              d="M1409.17 1755.07 495.118 1184.55 498.758 1178.72 1412.81 1749.24ZM1414.38 1738.06 1430.43 1764.29 1399.82 1761.39ZM493.548 1195.73 477.5 1169.5 508.109 1172.4Z"
              fill-rule="nonzero"
              fill-opacity="1"
            />
          </g>
          {/* Circle Line BOTTOM LEFT to TOP RIGHT */}
          <g className="pointer-events-none">
            <g>
              <path
                className={components.edges["GI"]?.lineCover ?? ""}
                d="M1187 1464.5C1187 1437.71 1209.61 1416 1237.5 1416 1265.39 1416 1288 1437.71 1288 1464.5 1288 1491.29 1265.39 1513 1237.5 1513 1209.61 1513 1187 1491.29 1187 1464.5Z"
                fill="#FFFFFF"
                fill-rule="evenodd"
                fill-opacity="1"
              />
              <circle
                onMouseLeave={(e) => {
                  e.currentTarget.blur();
                }}
                onClick={() => {
                  setViewed({ ...viewed, GI: true });
                  if (activePair[1] === "G" && activePair[2] === "I") {
                    setActivePair({
                      1: null,
                      2: null,
                    });
                  } else {
                    setActivePair({
                      1: "G",
                      2: "I",
                    });
                  }
                }}
                r={60}
                tabIndex={0}
                cx="1238"
                cy="1463"
                className={`${components.edges["GI"].circle} peer/GI pointer-events-auto cursor-pointer fill-transparent focus:outline-none`}
              ></circle>
              <g
                className={
                  `${activePair[1] === "G" && activePair[2] === "I" ? "stroke-black stroke-[4px]" : ""} peer-hover/GI:stroke-black peer-hover/GI:stroke-[4px] peer-focus/GI:stroke-black peer-focus/GI:stroke-[4px] ` +
                  (components.edges["GI"]?.circle ?? "")
                }
              >
                <path
                  d="M1237 1410.75C1208.13 1410.74 1184.73 1434.13 1184.72 1463 1184.71 1491.87 1208.1 1515.27 1236.97 1515.28 1265.84 1515.29 1289.24 1491.9 1289.25 1463.03 1289.25 1463.02 1289.25 1463.02 1289.25 1463.01 1289.27 1434.16 1265.89 1410.77 1237.04 1410.75 1237.03 1410.75 1237.01 1410.75 1237 1410.75ZM1237 1512.53C1209.65 1512.54 1187.48 1490.38 1187.47 1463.03 1187.46 1435.68 1209.62 1413.51 1236.97 1413.5 1264.32 1413.49 1286.49 1435.65 1286.5 1463 1286.5 1463.01 1286.5 1463.01 1286.5 1463.02 1286.47 1490.35 1264.33 1512.5 1237 1512.53Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M1237.69 1438.96 1234.94 1438.96 1234.94 1461.62 1212.25 1461.62 1212.25 1464.38 1234.94 1464.38 1234.94 1487.08 1237.69 1487.08 1237.69 1464.38 1260.38 1464.38 1260.38 1461.62 1237.69 1461.62 1237.69 1438.96Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Circle Line LEFT to BOTTOM RIGHT */}
          <g className="pointer-events-none">
            <g>
              <path
                className={components.edges["EH"]?.lineCover ?? ""}
                d="M897 1466.5C897 1439.71 919.386 1418 947 1418 974.614 1418 997 1439.71 997 1466.5 997 1493.29 974.614 1515 947 1515 919.386 1515 897 1493.29 897 1466.5Z"
                fill="#FFFFFF"
                fill-rule="evenodd"
                fill-opacity="1"
              />
              <circle
                onMouseLeave={(e) => {
                  e.currentTarget.blur();
                }}
                onClick={() => {
                  if (phase === 14) {
                    setViewed({ ...viewed, EH: true });
                    if (activePair[1] === "E" && activePair[2] === "H") {
                      setActivePair({
                        1: null,
                        2: null,
                      });
                    } else {
                      setActivePair({
                        1: "E",
                        2: "H",
                      });
                    }
                  }
                }}
                r={60}
                tabIndex={0}
                cx="945"
                cy="1465"
                className={`${![14].includes(phase) ? "hidden" : ""} ${components.edges["EH"].circle} peer/EH pointer-events-auto cursor-pointer fill-transparent focus:outline-none`}
              ></circle>
              <g
                className={
                  `${activePair[1] === "E" && activePair[2] === "H" ? "stroke-black stroke-[4px]" : ""} peer-hover/EH:stroke-black peer-hover/EH:stroke-[4px] peer-focus/EH:stroke-black peer-focus/EH:stroke-[4px] ` +
                  (components.edges["EH"]?.circle ?? "")
                }
              >
                <path
                  d="M946 1411.75C917.135 1411.74 893.728 1435.13 893.72 1464 893.711 1492.87 917.104 1516.27 945.97 1516.28 974.835 1516.29 998.242 1492.9 998.25 1464.03 998.25 1464.02 998.25 1464.02 998.25 1464.01 998.265 1435.16 974.891 1411.77 946.041 1411.75 946.028 1411.75 946.014 1411.75 946 1411.75ZM946 1513.53C918.654 1513.54 896.478 1491.38 896.47 1464.03 896.461 1436.68 918.623 1414.51 945.97 1414.5 973.316 1414.49 995.492 1436.65 995.5 1464 995.5 1464.01 995.5 1464.01 995.5 1464.02 995.473 1491.35 973.329 1513.5 946 1513.53Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M946.688 1439.96 943.938 1439.96 943.938 1462.62 921.25 1462.62 921.25 1465.38 943.938 1465.38 943.938 1488.08 946.688 1488.08 946.688 1465.38 969.375 1465.38 969.375 1462.62 946.688 1462.62 946.688 1439.96Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Line TOP to BOTTOM RIGHT */}
          <g className={components.edges["FH"]?.line ?? ""}>
            <path
              d="M1454.25 1692.22 1123.94 879.024 1130.31 876.437 1460.62 1689.63ZM1468.45 1681.51 1466.06 1712.16 1442.97 1691.86ZM1116.11 887.153 1118.5 856.5 1141.59 876.804Z"
              fill-rule="nonzero"
              fill-opacity="1"
            />
          </g>
          {/* Circle Line TOP to BOTTOM RIGHT */}
          <g className="pointer-events-none">
            <g>
              <path
                className={components.edges["FH"]?.lineCover ?? ""}
                d="M1232 1252.5C1232 1225.71 1254.61 1204 1282.5 1204 1310.39 1204 1333 1225.71 1333 1252.5 1333 1279.29 1310.39 1301 1282.5 1301 1254.61 1301 1232 1279.29 1232 1252.5Z"
                fill="#FFFFFF"
                fill-rule="evenodd"
                fill-opacity="1"
              />
              <circle
                onMouseLeave={(e) => {
                  e.currentTarget.blur();
                }}
                onClick={() => {
                  setViewed({ ...viewed, FH: true });
                  if (activePair[1] === "F" && activePair[2] === "H") {
                    setActivePair({
                      1: null,
                      2: null,
                    });
                  } else {
                    setActivePair({
                      1: "F",
                      2: "H",
                    });
                  }
                }}
                r={60}
                tabIndex={0}
                cx="1282"
                cy="1250"
                className={`${components.edges["FH"].circle} peer/FH pointer-events-auto cursor-pointer fill-transparent focus:outline-none`}
              ></circle>
              <g
                className={
                  `${activePair[1] === "F" && activePair[2] === "H" ? "stroke-black stroke-[4px]" : ""} peer-hover/FH:stroke-black peer-hover/FH:stroke-[4px] peer-focus/FH:stroke-black peer-focus/FH:stroke-[4px] ` +
                  (components.edges["FH"]?.circle ?? "")
                }
              >
                <path
                  d="M1282 1198.75C1253.13 1198.74 1229.73 1222.13 1229.72 1251 1229.71 1279.87 1253.1 1303.27 1281.97 1303.28 1310.83 1303.29 1334.24 1279.9 1334.25 1251.03 1334.25 1251.02 1334.25 1251.02 1334.25 1251.01 1334.27 1222.16 1310.89 1198.77 1282.04 1198.75 1282.03 1198.75 1282.01 1198.75 1282 1198.75ZM1282 1300.53C1254.65 1300.54 1232.48 1278.38 1232.47 1251.03 1232.46 1223.68 1254.62 1201.51 1281.97 1201.5 1309.32 1201.49 1331.49 1223.65 1331.5 1251 1331.5 1251.01 1331.5 1251.01 1331.5 1251.02 1331.47 1278.35 1309.33 1300.5 1282 1300.53Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M1282.69 1226.96 1279.94 1226.96 1279.94 1249.62 1257.25 1249.62 1257.25 1252.37 1279.94 1252.37 1279.94 1275.08 1282.69 1275.08 1282.69 1252.37 1305.37 1252.37 1305.37 1249.62 1282.69 1249.62 1282.69 1226.96Z"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
