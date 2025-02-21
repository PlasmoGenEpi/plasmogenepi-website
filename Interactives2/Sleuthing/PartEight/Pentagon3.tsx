import { atom, useAtom, useAtomValue } from "jotai";
import PentagonEdge from "./Pentagon/PentagonEdge";
import {
  edgeCorrectionsAtom,
  edgeIsActive,
  pentagonViewAtom,
} from "./Pentagon/PentagonViewer";
import {
  partEightPentagonSelectedEdgesAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import PentagonTooltip from "./Pentagon/PentagonTooltip";
import { fixedData } from "@/data/Interactives/fixedData";
import { useEffect } from "react";
import PentagonTooltipDefinition from "./Pentagon/PentagonTooltipDefinition";
import PentagonEdgeCorrection from "./Pentagon/PentagonEdgeCorrection";

export type Edge =
  | "AB"
  | "AC"
  | "AD"
  | "BC"
  | "BD"
  | "CD"
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

export type PentagonId = "E" | "F" | "G" | "H" | "I";
export const defaultPentagon: {
  ids: {
    [key in PentagonId]: string;
  };
  edges: {
    [key in Edge]: {
      hidden: boolean;
      button: string;
      direction: null | "forwards" | "backwards";
      line: string;
      text: string;
    };
  };
} = {
  ids: {
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
  },
  edges: {
    EF: {
      hidden: false,
      button: "",
      direction: null,
      line: "",
      text: "",
    },
    EG: {
      hidden: false,
      button: "",
      direction: null,
      line: "",
      text: "",
    },
    EH: {
      hidden: false,
      button: "",
      direction: null,
      line: "",
      text: "",
    },
    EI: {
      hidden: false,
      button: "",
      direction: null,
      line: "",
      text: "",
    },
    FG: {
      hidden: false,
      button: "",
      direction: null,
      line: "",
      text: "",
    },
    FH: {
      hidden: false,
      button: "",
      direction: null,
      line: "",
      text: "",
    },
    FI: {
      hidden: false,
      button: "",
      direction: null,
      line: "",
      text: "",
    },
    GH: {
      hidden: false,
      button: "",
      direction: null,
      line: "",
      text: "",
    },
    GI: {
      hidden: false,
      button: "",
      direction: null,
      line: "",
      text: "",
    },
    HI: {
      hidden: false,
      button: "",
      direction: null,
      line: "",
      text: "",
    },
  },
};

export const coords = {
  EF: {
    circle: {
      x: 245,
      y: -250,
    },
    line: {
      start: {
        x: 150,
        y: 350,
      },
      end: {
        x: 400,
        y: 200,
      },
    },
  },
  EG: {
    circle: {
      x: 460,
      y: -95,
    },
    line: {
      start: {
        x: 200,
        y: 425,
      },
      end: {
        x: 800,
        y: 425,
      },
    },
  },
  EH: {
    circle: {
      x: 370,
      y: 110,
    },
    line: {
      start: {
        x: 200,
        y: 500,
      },
      end: {
        x: 650,
        y: 780,
      },
    },
  },
  EI: {
    circle: {
      x: 160,
      y: 150,
    },
    line: {
      start: {
        x: 150,
        y: 580,
      },
      end: {
        x: 250,
        y: 760,
      },
    },
  },
  FG: {
    circle: {
      x: 665,
      y: -250,
    },
    line: {
      start: {
        x: 600,
        y: 200,
      },
      end: {
        x: 850,
        y: 350,
      },
    },
  },
  FH: {
    circle: {
      x: 590,
      y: 0,
    },
    line: {
      start: {
        x: 550,
        y: 250,
      },
      end: {
        x: 700,
        y: 750,
      },
    },
  },
  FI: {
    circle: {
      x: 330,
      y: 0,
    },
    line: {
      start: {
        x: 450,
        y: 250,
      },
      end: {
        x: 300,
        y: 750,
      },
    },
  },
  GH: {
    circle: {
      x: 760,
      y: 150,
    },
    line: {
      start: {
        x: 850,
        y: 580,
      },
      end: {
        x: 750,
        y: 760,
      },
    },
  },
  GI: {
    circle: {
      x: 550,
      y: 110,
    },
    line: {
      start: {
        x: 800,
        y: 500,
      },
      end: {
        x: 350,
        y: 780,
      },
    },
  },
  HI: {
    circle: {
      x: 460,
      y: 330,
    },
    line: {
      start: {
        x: 600,
        y: 850,
      },
      end: {
        x: 400,
        y: 850,
      },
    },
  },
};

export const pentagonResetAnimationAtom = atom(true);

export const currentCorrectionAtom = atom<null | {
  id: Edge;
  correct?: boolean;
  direction?: null | "forwards" | "backwards";
  enabled?: boolean;
}>(null);
export const specialEdgeHandledAtom = atom(false);

export default function Pentagon3() {
  // const [pentagon, setPentagon] = useAtom(pentagonAtom);
  const [pentagonView, setPentagonView] = useAtom(pentagonViewAtom);
  const [selectedEdges, setSelectedEdges] = useAtom(
    partEightPentagonSelectedEdgesAtom,
  );
  const [pentagonResetAnimation, setPentagonResetAnimation] = useAtom(
    pentagonResetAnimationAtom,
  );
  const [edgeCorrections, setEdgeCorrections] = useAtom(edgeCorrectionsAtom);

  const phase = useAtomValue(phaseAtom);
  const [currentCorrection, setCurrentCorrection] = useAtom(
    currentCorrectionAtom,
  );
  const [specialEdgeHandled, setSpecialEdgeHandled] = useAtom(
    specialEdgeHandledAtom,
  );

  useEffect(() => {
    for (let i = 0; i < edgeCorrections.length; i++) {
      if (!edgeCorrections[i][1].correct) {
        setCurrentCorrection({
          ...edgeCorrections[i][1],
          id: edgeCorrections[i][0],
        });
      }
      return;
    }
    setCurrentCorrection(null);
  }, [edgeCorrections, setCurrentCorrection]);

  // useEffect(() => {
  //   return () => {
  //     setPentagonResetAnimation(false);
  //   }
  // }, [])

  return (
    <svg
      className="select-none"
      id="village-pentagon"
      viewBox="0 0 1000 1000"
      overflow={"visible"}
    >
      <defs>
        <symbol id="tooltip-EF" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
"
            className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition edge={"EF"} />
        </symbol>
        <symbol id="tooltip-EG" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
"
            className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition edge="EG" />
        </symbol>
        <symbol id="tooltip-EH" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
"
            className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition edge="EH" />
        </symbol>
        <symbol id="tooltip-EI" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
"
            className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition edge="EI" />
        </symbol>
        <symbol id="tooltip-FG" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
"
            className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition edge="FG" />
        </symbol>
        <symbol id="tooltip-FH" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
"
            className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition edge="FH" />
        </symbol>
        <symbol id="tooltip-FI" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
"
            className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition edge="FI" />
        </symbol>
        <symbol id="tooltip-GH" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
"
            className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition edge="GH" />
        </symbol>
        <symbol id="tooltip-GI" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
"
            className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition edge="GI" />
        </symbol>
        <symbol id="tooltip-HI" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
"
            className="-translate-y-[3px] translate-x-1/2 stroke-black stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition edge="HI" />
        </symbol>
        <symbol id="bus" overflow="visible" viewBox="0 0 1000 1000">
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
        </symbol>
        <symbol
          id="circle-minus"
          overflow={"visible"}
          className="fill-white "
          viewBox="0 0 100 100"
        >
          <path
            d="
        M 100, 100
        m 75, 0
        a 75,75 0 1,0 -150,0
        a 75,75 0 1,0  150,0
        "
          />
          <path
            className="stroke-[10px]"
            strokeLinecap="round"
            d="       M 70, 100
        L 130, 100
        "
          />
        </symbol>
        <symbol
          id="circle-plus"
          overflow={"visible"}
          className="fill-white"
          viewBox="0 0 100 100"
        >
          <path
            d="
        M 100, 100
        m 75, 0
        a 75,75 0 1,0 -150,0
        a 75,75 0 1,0  150,0
        "
          />
          <path
            className="stroke-[10px]"
            strokeLinecap="round"
            d="       M 70, 100
        L 130, 100
        M 100, 70
        L 100, 130"
          />
        </symbol>
        <path
          style={{
            animationFillMode: "forwards",
            animationIterationCount: 1,
          }}
          viewBox={"0 0 10 10"}
          id="test-path"
          d="M 0 0 C 100 200 200 133.3333 300 200 C 400 100 300 66.6667 300 0 C 900 200 -100 0 620 554"
        ></path>
        <path
          style={{
            animationFillMode: "forwards",
            animationIterationCount: 1,
          }}
          viewBox={"0 0 10 10"}
          id="test-path2"
          d="M620 554 C 100 200 200 133.3333 300 200 C 400 100 300 66.6667 300 0 C 900 200 -100 0 500 500"
        ></path>
        <path
          style={{
            animationFillMode: "forwards",
            animationIterationCount: 1,
          }}
          id="path-EF"
          d="M150,350 400,200"
        ></path>
        <path
          style={{
            animationFillMode: "forwards",
            animationIterationCount: 1,
          }}
          id="path-EG"
          d="M200,425 800,425"
        ></path>
        <path
          style={{
            animationFillMode: "forwards",
            animationIterationCount: 1,
          }}
          id="path-EH"
          d="M200,500 650,780"
        ></path>
        <path
          style={{
            animationFillMode: "forwards",
            animationIterationCount: 1,
          }}
          id="path-EI"
          d="M150,580 250,760"
        ></path>
        <path
          style={{
            animationFillMode: "forwards",
            animationIterationCount: 1,
          }}
          id="path-FG"
          d="M600,200 850,350"
        ></path>
        <path
          style={{
            animationFillMode: "forwards",
            animationIterationCount: 1,
          }}
          id="path-FH"
          d="M550,250 700,750"
        ></path>
        <path
          style={{
            animationFillMode: "forwards",
            animationIterationCount: 1,
          }}
          id="path-FI"
          d="M450,250 300,750"
        ></path>
        <path id="path-GH" d="M850,580 750,760"></path>
        <path
          style={{
            animationFillMode: "forwards",
            animationIterationCount: 1,
          }}
          id="path-GI"
          d="M800,500 350,780"
        ></path>
        <path
          style={{
            animationFillMode: "forwards",
            animationIterationCount: 1,
          }}
          id="path-HI"
          d="M400,850 600,850"
        ></path>
        <g
          width="100pt"
          height="100pt"
          id="mosquito"
          strokeDashoffset={2}
          // strokeDasharray={"0 0 5 5"}
          className=" origin-center scale-[150%] stroke-white stroke-[0.5] [transform-box:fill-box]"
          version="1.1"
          fill="black"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m56.359 52.145h30.25c1.1953 0 2.0352 1.1875 1.6523 2.3047-1.8359 6.7461-6.0977 13.137-13.801 13.137h-5.5195l8.7734 20.289h4.4805c2.293 0 2.293 3.4883 0 3.4883h-5.6172c-0.77734 0-1.4336-0.50781-1.6602-1.2109l-9.7578-22.566h-9.6719c-0.56641 0.75-1.2773 1.3711-2.082 1.8281l8.5742 19.832h4.4805c2.293 0 2.293 3.4844 0 3.4844h-5.6172c-0.77734 0-1.4336-0.50781-1.6602-1.2109l-9.1797-21.223h-9.9492c-0.38672 0-0.76563-0.03125-1.1367-0.09375l-9.2188 21.32c-0.22656 0.70312-0.88281 1.2109-1.6602 1.2109h-5.6172c-2.293 0-2.293-3.4844 0-3.4844h4.4805l8.8633-20.492c-0.80469-0.66406-1.457-1.5117-1.8945-2.5-1.4023 1.1367-3.1875 1.8203-5.1328 1.8203-1.1992 0-2.3359-0.26172-3.3633-0.73047-3.3711 4.3828-10.566 13.699-10.59 13.73-1.3945 1.8047-4.1445-0.32031-2.75-2.125 0.023438-0.027344 7.1406-9.2461 10.555-13.688-1.2422-1.4297-1.9961-3.2969-1.9961-5.332 0-4.4961 3.6484-8.1445 8.1445-8.1445 1.7461 0 3.3672 0.55469 4.6953 1.4922 0.64062-3.1211 3.4141-5.4102 6.625-5.4102h0.42578c0.80859-5.9258 3.8594-27.633 6.2656-35.203 3.5039-11.023 21.07-3.5039 15.211 7.7305-2.7422 5.2578-8.4688 14.473-12.828 21.34 7.2344-5.3594 17.352-12.633 22.293-15.191 10.266-5.3086 17.387 12.43 5.2852 16.234-5.4844 1.7227-15.645 4.1055-23.512 5.8672 1.4102 0.74219 2.5508 1.9727 3.1602 3.5039zm16.656-22.512c-5.2148 2.6992-16.586 10.98-23.738 16.32 8.0078-1.7617 20.23-4.5625 26.398-6.5 7.293-2.293 3.1523-12.82-2.6602-9.8203zm-22.961-15.918c-1.7734 5.582-3.9609 19.492-5.2422 28.332 4.418-6.918 11.09-17.547 14.07-23.258 3.543-6.7969-6.8477-11.293-8.8281-5.0742z" />
          <circle r={5} cx={50} cy={59} fill="white" className=""></circle>
        </g>
        <symbol
          className={
            pentagonView === "E" ||
            pentagonView === "EF" ||
            pentagonView === null
              ? "opacity-100"
              : "opacity-20"
          }
          id="person-MOI-E"
          viewBox={"0 0 600 600"}
        >
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          <circle
            r={9}
            cx={40}
            cy={75}
            className="fill-white stroke-black stroke-2"
          ></circle>
          <circle
            r={9}
            cx={60}
            cy={75}
            fill="white"
            className="fill-white stroke-black stroke-2"
          ></circle>
        </symbol>
        <symbol
          className={
            pentagonView === "F" ||
            pentagonView === "EF" ||
            pentagonView === null
              ? "opacity-100"
              : "opacity-20"
          }
          id="person-MOI-F"
          viewBox={"0 0 600 600"}
        >
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          <circle
            r={9}
            cx={50}
            cy={65}
            fill="white"
            className="stroke-black stroke-2"
          ></circle>
          <circle
            r={9}
            cx={40}
            cy={82}
            fill="white"
            className="stroke-black stroke-2"
          ></circle>
          <circle
            r={9}
            cx={60}
            cy={82}
            fill="white"
            className="stroke-black stroke-2"
          ></circle>
        </symbol>
        <symbol
          className={
            pentagonView === "E" ||
            pentagonView === "F" ||
            pentagonView === "GHI" ||
            pentagonView === null
              ? "opacity-100"
              : "opacity-20"
          }
          id="person-MOI-G"
          viewBox={"0 0 600 600"}
        >
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          <circle
            r={9}
            cx={50}
            cy={75}
            fill="white"
            className="stroke-black stroke-2"
          ></circle>
        </symbol>
        <symbol
          className={
            pentagonView === "E" ||
            pentagonView === "F" ||
            pentagonView === "GHI" ||
            pentagonView === null
              ? "opacity-100"
              : "opacity-20"
          }
          id="person-MOI-H"
          viewBox={"0 0 600 600"}
        >
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          <circle
            r={9}
            cx={40}
            cy={75}
            fill="white"
            className="stroke-black stroke-2"
          ></circle>
          <circle
            r={9}
            cx={60}
            cy={75}
            fill="white"
            className="stroke-black stroke-2"
          ></circle>
        </symbol>
        <symbol
          className={
            pentagonView === "E" ||
            pentagonView === "F" ||
            pentagonView === "GHI" ||
            pentagonView === null
              ? "opacity-100"
              : "opacity-20"
          }
          id="person-MOI-I"
          viewBox={"0 0 600 600"}
        >
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          <circle
            r={9}
            cx={50}
            cy={75}
            fill="white"
            className="stroke-black stroke-2"
          ></circle>
        </symbol>
      </defs>
      <g className={""} id="person-E">
        <use y={"35%"} xlinkHref="#person-MOI-E"></use>
      </g>
      <g className={""} id="person-F">
        <use y={"5%"} x={"calc(50% - 62pt)"} xlinkHref="#person-MOI-F"></use>
      </g>
      <g className={""} id="person-G">
        <use x={"625pt"} y={"35%"} xlinkHref="#person-MOI-G" className=""></use>
      </g>
      <g className={""} id="person-H">
        <use x={"475pt"} y={"80%"} xlinkHref="#person-MOI-H" className=""></use>
      </g>
      <g className={""} id="person-I">
        <use x={"150pt"} y={"80%"} xlinkHref="#person-MOI-I" className=""></use>
      </g>
      <g>
        <text
          transform="translate(0 350)"
          fontFamily="Arial"
          fontSize={40}
          fontWeight="700"
        >
          E
        </text>
        <text
          transform="translate(425 60)"
          fontFamily="Arial"
          fontWeight="700"
          fontSize={40}
        >
          F
        </text>
        <text
          transform="translate(950 350)"
          fontFamily="Arial"
          fontWeight="700"
          fontSize={40}
        >
          G
        </text>
        <text
          transform="translate(760 800)"
          fontFamily="Arial"
          fontWeight="700"
          fontSize={40}
        >
          H
        </text>
        <text
          transform="translate(230 800)"
          fontFamily="Arial"
          fontWeight="700"
          fontSize={40}
        >
          I
        </text>
        {/* <text transform="translate(0 350)" fontFamily="Arial" fontSize={40}>
          G
        </text>
        <text transform="translate(0 350)" fontFamily="Arial" fontSize={40}>
          H
        </text>
        <text transform="translate(0 350)" fontFamily="Arial" fontSize={40}>
          I
        </text> */}
      </g>
      <g
        className={
          pentagonView === "E" || pentagonView === "EF" || pentagonView === null
            ? "opacity-100"
            : "opacity-20"
        }
        overflow="visible"
      >
        <use width={"400pt"} x={-420} y={-100} xlinkHref="#bus"></use>
      </g>
      <g
        className={
          pentagonView === "F" || pentagonView === "EF" || pentagonView === null
            ? "opacity-100"
            : "opacity-20"
        }
        overflow="visible"
      >
        <use width={"400pt"} x={0} y={-400} xlinkHref="#bus"></use>
      </g>
      {phase !== 18 && (
        <g id="edges-container">
          {Object.keys(selectedEdges).map((edge, idx) => {
            return (
              <PentagonEdge
                edge={edge as Edge}
                edgeStatus={selectedEdges[edge as Edge]}
                handleDirection={(end) => {
                  setSelectedEdges({
                    ...selectedEdges,
                    [edge]: {
                      ...selectedEdges[edge as Edge],
                      direction: end,
                    },
                  });
                }}
                handleSelection={() => {
                  // setSelectedEdges({...selectedEdges,
                  //   [edge]: {
                  //     ...selectedEdges[edge as Edge],
                  //     selected: !selectedEdges[edge as Edge].selected,
                  //     visited: true,
                  //   },
                  // })
                  // return;
                  let newSelectedEdges: typeof selectedEdges = JSON.parse(
                    JSON.stringify(selectedEdges),
                  );
                  let k: Edge;
                  for (k in newSelectedEdges) {
                    let newEdge = { ...newSelectedEdges[k] };
                    if (k === edge) {
                      newEdge.selected = true;
                      newEdge.enabled = !newEdge.enabled;
                      newEdge.direction = null;
                      newEdge.visited = true;
                    } else {
                      newEdge.selected = false;
                    }
                    newSelectedEdges[k] = newEdge;
                  }
                  console.log(newSelectedEdges);
                  setSelectedEdges(newSelectedEdges);
                }}
                key={edge}
                active={!!edgeIsActive(pentagonView, edge as Edge)}
                coords={{
                  line: coords[edge as Edge].line,
                  circle: coords[edge as Edge].circle,
                }}
              />
            );
          })}
          {Object.keys(selectedEdges).map((edge, idx) => {
            return (
              <PentagonTooltip
                key={edge}
                edge={edge as Edge}
                coords={coords[edge as Edge].circle}
              />
            );
          })}
        </g>
      )}
      {phase === 18 && (
        <g id="edges-container">
          {edgeCorrections.map((edgeCorrection, idx) => {
            return (
              <PentagonEdgeCorrection
                edgeCorrections={edgeCorrections}
                idx={idx}
                edgeCorrection={edgeCorrection}
                edgeStatus={selectedEdges[edgeCorrection[0] as Edge]}
                handleDirection={(end) => {
                  setSelectedEdges({
                    ...selectedEdges,
                    [edgeCorrection[0]]: {
                      ...selectedEdges[edgeCorrection[0] as Edge],
                      direction: end,
                    },
                  });
                }}
                handleSelection={() => {
                  // setSelectedEdges({...selectedEdges,
                  //   [edge]: {
                  //     ...selectedEdges[edge as Edge],
                  //     selected: !selectedEdges[edge as Edge].selected,
                  //     visited: true,
                  //   },
                  // })
                  // return;
                  let newSelectedEdges: typeof selectedEdges = JSON.parse(
                    JSON.stringify(selectedEdges),
                  );
                  let k: Edge;
                  for (k in newSelectedEdges) {
                    let newEdge = { ...newSelectedEdges[k] };
                    if (edgeCorrection[0] === "GI") {
                      setSpecialEdgeHandled(true);
                    }
                    if (k === edgeCorrection[0]) {
                      newEdge.selected = true;
                      newEdge.enabled = !newEdge.enabled;
                      newEdge.direction = null;
                      newEdge.visited = true;
                    } else {
                      newEdge.selected = false;
                    }
                    newSelectedEdges[k] = newEdge;
                  }
                  console.log(newSelectedEdges);
                  setSelectedEdges(newSelectedEdges);
                }}
                key={edgeCorrection[0]}
                active={!!edgeIsActive(pentagonView, edgeCorrection[0] as Edge)}
                coords={{
                  line: coords[edgeCorrection[0] as Edge].line,
                  circle: coords[edgeCorrection[0] as Edge].circle,
                }}
              />
            );
          })}
        </g>
      )}
      {phase === 19 && (
        <PentagonEdgeCorrection
          handleDirection={() => {}}
          handleSelection={() => {}}
          edgeCorrections={edgeCorrections}
          edgeStatus={selectedEdges["GI"]}
          idx={0}
          edgeCorrection={[
            "GI",
            {
              correct: false,
              direction: null,
              enabled: false,
            },
          ]}
          active={!!edgeIsActive(pentagonView, "GI" as Edge)}
          coords={{
            line: coords["GI" as Edge].line,
            circle: coords["GI" as Edge].circle,
          }}
        />
      )}
      {/* <PentagonEdge
        edge="EF"
        lineClassName={pentagon.edges.EF.line}
        enabled={selectedEdges.EF.enabled}
        hidden={pentagon.edges.EF.hidden}
        key="EF"
        direction={selectedEdges.EF.direction}
        endpoints={{
          callback: (endpoint) => {
            if (endpoint === "start") {
              setSelectedEdges({
                ...selectedEdges,
                EF: { ...selectedEdges["EF"], direction: "backwards" },
              });
            } else {
              setSelectedEdges({
                ...selectedEdges,
                EF: { ...selectedEdges["EF"], direction: "forwards" },
              });
            }
          },
          className:
            "stroke-black stroke-2 hover:stroke-[4px] focus:stroke-[4px]",
        }}
        coords={{
          startingX: 150,
          startingY: 350,
          endingX: 400,
          endingY: 200,
        }}
        circle={{
          callback: () => {
            // console.log("EF");
            setSelectedEdges({
              ...selectedEdges,
              EF: {
                ...selectedEdges["EF"],
                enabled: !selectedEdges["EF"].enabled,
                direction: null,
                visited: true,
              },
            });
          },
          className:
            pentagon.edges.EF.button +
            " " +
            "cursor-pointer hover:stroke-[8px] focus:stroke-[8px]",
          coords: {
            x: 245,
            y: -250,
          },
          radius: 9,
          width: 40,
        }}
      />
      <PentagonEdge
        edge="EG"
        lineClassName={pentagon.edges.EG.line}
        enabled={selectedEdges.EG.enabled}
        hidden={pentagon.edges.EG.hidden}
        key="EG"
        direction={selectedEdges.EG.direction}
        endpoints={{
          callback: (endpoint) => {
            if (endpoint === "start") {
              setSelectedEdges({
                ...selectedEdges,
                EG: { ...selectedEdges["EG"], direction: "backwards" },
              });
            } else {
              setSelectedEdges({
                ...selectedEdges,
                EG: { ...selectedEdges["EG"], direction: "forwards" },
              });
            }
          },
          className:
            "stroke-black stroke-2 hover:stroke-[4px] focus:stroke-[4px]",
        }}
        coords={{
          startingX: 200,
          startingY: 425,
          endingX: 800,
          endingY: 425,
        }}
        circle={{
          callback: () => {
            setSelectedEdges({
              ...selectedEdges,
              EG: {
                ...selectedEdges["EG"],
                enabled: !selectedEdges["EG"].enabled,
                direction: null,
                visited: true,
              },
            });
          },
          className:
            pentagon.edges.EG.button +
            " " +
            "cursor-pointer hover:stroke-[8px] focus:stroke-[8px]",
          coords: {
            x: 460,
            y: -95,
          },
          radius: 9,
          width: 40,
        }}
      />
      <PentagonEdge
        edge="EH"
        lineClassName={pentagon.edges.EH.line}
        enabled={selectedEdges.EH.enabled}
        hidden={pentagon.edges.EH.hidden}
        key="EH"
        direction={selectedEdges.EH.direction}
        endpoints={{
          callback: (endpoint) => {
            if (endpoint === "start") {
              setSelectedEdges({
                ...selectedEdges,
                EH: { ...selectedEdges["EH"], direction: "backwards" },
              });
            } else {
              setSelectedEdges({
                ...selectedEdges,
                EH: { ...selectedEdges["EH"], direction: "forwards" },
              });
            }
          },
          className:
            "stroke-black stroke-2 hover:stroke-[4px] focus:stroke-[4px]",
        }}
        coords={{
          startingX: 200,
          startingY: 500,
          endingX: 650,
          endingY: 780,
        }}
        circle={{
          callback: () => {
            setSelectedEdges({
              ...selectedEdges,
              EH: {
                ...selectedEdges["EH"],
                enabled: !selectedEdges["EH"].enabled,
                direction: null,
                visited: true,
              },
            });
          },
          className:
            pentagon.edges.EH.button +
            " " +
            "cursor-pointer hover:stroke-[8px] focus:stroke-[8px]",
          coords: {
            x: 370,
            y: 110,
          },
          radius: 9,
          width: 40,
        }}
      />
      <PentagonEdge
        edge="EI"
        lineClassName={pentagon.edges.EI.line}
        enabled={selectedEdges.EI.enabled}
        hidden={pentagon.edges.EI.hidden}
        key="EI"
        direction={selectedEdges.EI.direction}
        endpoints={{
          callback: (endpoint) => {
            if (endpoint === "start") {
              setSelectedEdges({
                ...selectedEdges,
                EI: { ...selectedEdges["EI"], direction: "backwards" },
              });
            } else {
              setSelectedEdges({
                ...selectedEdges,
                EI: { ...selectedEdges["EI"], direction: "forwards" },
              });
            }
          },
          className:
            "stroke-black stroke-2 hover:stroke-[4px] focus:stroke-[4px]",
        }}
        coords={{
          startingX: 150,
          startingY: 580,
          endingX: 250,
          endingY: 760,
        }}
        circle={{
          callback: () => {
            setSelectedEdges({
              ...selectedEdges,
              EI: {
                ...selectedEdges["EI"],
                enabled: !selectedEdges["EI"].enabled,
                direction: null,
                visited: true,
              },
            });
          },
          className:
            pentagon.edges.EI.button +
            " " +
            "cursor-pointer hover:stroke-[8px] focus:stroke-[8px]",
          coords: {
            x: 160,
            y: 150,
          },
          radius: 9,
          width: 40,
        }}
      />
      <PentagonEdge
        edge="FG"
        lineClassName={pentagon.edges.FG.line}
        enabled={selectedEdges.FG.enabled}
        hidden={pentagon.edges.FG.hidden}
        key="FG"
        direction={selectedEdges.FG.direction}
        endpoints={{
          callback: (endpoint) => {
            if (endpoint === "start") {
              setSelectedEdges({
                ...selectedEdges,
                FG: { ...selectedEdges["FG"], direction: "backwards" },
              });
            } else {
              setSelectedEdges({
                ...selectedEdges,
                FG: { ...selectedEdges["FG"], direction: "forwards" },
              });
            }
          },
          className:
            "stroke-black stroke-2 hover:stroke-[4px] focus:stroke-[4px]",
        }}
        coords={{
          startingX: 600,
          startingY: 200,
          endingX: 850,
          endingY: 350,
        }}
        circle={{
          callback: () => {
            setSelectedEdges({
              ...selectedEdges,
              FG: {
                ...selectedEdges["FG"],
                enabled: !selectedEdges["FG"].enabled,
                direction: null,
                visited: true,
              },
            });
          },
          className:
            pentagon.edges.FG.button +
            " " +
            "cursor-pointer hover:stroke-[8px] focus:stroke-[8px]",
          coords: {
            x: 665,
            y: -250,
          },
          radius: 9,
          width: 40,
        }}
      />
      <PentagonEdge
        edge="FH"
        lineClassName={pentagon.edges.FH.line}
        enabled={selectedEdges.FH.enabled}
        hidden={pentagon.edges.FH.hidden}
        key="FH"
        direction={selectedEdges.FH.direction}
        endpoints={{
          callback: (endpoint) => {
            if (endpoint === "start") {
              setSelectedEdges({
                ...selectedEdges,
                FH: { ...selectedEdges["FH"], direction: "backwards" },
              });
            } else {
              setSelectedEdges({
                ...selectedEdges,
                FH: { ...selectedEdges["FH"], direction: "forwards" },
              });
            }
          },
          className:
            "stroke-black stroke-2 hover:stroke-[4px] focus:stroke-[4px]",
        }}
        coords={{
          startingX: 550,
          startingY: 250,
          endingX: 700,
          endingY: 750,
        }}
        circle={{
          callback: () => {
            setSelectedEdges({
              ...selectedEdges,
              FH: {
                ...selectedEdges["FH"],
                enabled: !selectedEdges["FH"].enabled,
                direction: null,
                visited: true,
              },
            });
          },
          className:
            pentagon.edges.FH.button +
            " " +
            "cursor-pointer hover:stroke-[8px] focus:stroke-[8px]",
          coords: {
            x: 590,
            y: 0,
          },
          radius: 9,
          width: 40,
        }}
      />
      <PentagonEdge
        edge="FI"
        lineClassName={pentagon.edges.FI.line}
        enabled={selectedEdges.FI.enabled}
        hidden={pentagon.edges.FI.hidden}
        key="FI"
        direction={selectedEdges.FI.direction}
        endpoints={{
          callback: (endpoint) => {
            if (endpoint === "start") {
              setSelectedEdges({
                ...selectedEdges,
                FI: { ...selectedEdges["FI"], direction: "backwards" },
              });
            } else {
              setSelectedEdges({
                ...selectedEdges,
                FI: { ...selectedEdges["FI"], direction: "forwards" },
              });
            }
          },
          className:
            "stroke-black stroke-2 hover:stroke-[4px] focus:stroke-[4px]",
        }}
        coords={{
          startingX: 450,
          startingY: 250,
          endingX: 300,
          endingY: 750,
        }}
        circle={{
          callback: () => {
            setSelectedEdges({
              ...selectedEdges,
              FI: {
                ...selectedEdges["FI"],
                enabled: !selectedEdges["FI"].enabled,
                direction: null,
                visited: true,
              },
            });
          },
          className:
            pentagon.edges.FI.button +
            " " +
            "cursor-pointer hover:stroke-[8px] focus:stroke-[8px]",
          coords: {
            x: 330,
            y: 0,
          },
          radius: 9,
          width: 40,
        }}
      />
      <PentagonEdge
        edge="GH"
        lineClassName={pentagon.edges.GH.line}
        enabled={selectedEdges.GH.enabled}
        hidden={pentagon.edges.GH.hidden}
        key="GH"
        direction={selectedEdges.GH.direction}
        endpoints={{
          callback: (endpoint) => {
            if (endpoint === "start") {
              setSelectedEdges({
                ...selectedEdges,
                GH: { ...selectedEdges["GH"], direction: "backwards" },
              });
            } else {
              setSelectedEdges({
                ...selectedEdges,
                GH: { ...selectedEdges["GH"], direction: "forwards" },
              });
            }
          },
          className:
            "stroke-black stroke-2 hover:stroke-[4px] focus:stroke-[4px]",
        }}
        coords={{
          startingX: 850,
          startingY: 580,
          endingX: 750,
          endingY: 760,
        }}
        circle={{
          callback: () => {
            setSelectedEdges({
              ...selectedEdges,
              GH: {
                ...selectedEdges["GH"],
                enabled: !selectedEdges["GH"].enabled,
                direction: null,
                visited: true,
              },
            });
          },
          className:
            pentagon.edges.GH.button +
            " " +
            "cursor-pointer hover:stroke-[8px] focus:stroke-[8px]",
          coords: {
            x: 760,
            y: 150,
          },
          radius: 9,
          width: 40,
        }}
      />
      <PentagonEdge
        edge="GI"
        lineClassName={
          pentagon.edges.GI.line +
          (selectedEdges.GI.enabled && selectedEdges.GI.direction === null
            ? " stroke-orange-400 "
            : " stroke-black")
        }
        enabled={selectedEdges.GI.enabled}
        hidden={pentagon.edges.GI.hidden}
        key="GI"
        direction={selectedEdges.GI.direction}
        endpoints={{
          callback: (endpoint) => {
            if (endpoint === "start") {
              setSelectedEdges({
                ...selectedEdges,
                GI: { ...selectedEdges["GI"], direction: "backwards" },
              });
            } else {
              setSelectedEdges({
                ...selectedEdges,
                GI: { ...selectedEdges["GI"], direction: "forwards" },
              });
            }
          },
          className:
            (selectedEdges.GI.enabled && selectedEdges.GI.direction === null
              ? " stroke-orange-400 "
              : " stroke-black ") +
            "stroke-black stroke-2 hover:stroke-[4px] focus:stroke-[4px]",
        }}
        coords={{
          startingX: 800,
          startingY: 500,
          endingX: 350,
          endingY: 780,
        }}
        circle={{
          callback: () => {
            setSelectedEdges({
              ...selectedEdges,
              GI: {
                ...selectedEdges["GI"],
                enabled: !selectedEdges["GI"].enabled,
                direction: null,
                visited: true,
              },
            });
          },
          className:
            pentagon.edges.GI.button +
            " " +
            "cursor-pointer hover:stroke-[8px] focus:stroke-[8px]",
          coords: {
            x: 550,
            y: 110,
          },
          radius: 9,
          width: 40,
        }}
      />
      <PentagonEdge
        edge="HI"
        lineClassName={pentagon.edges.HI.line}
        enabled={selectedEdges.HI.enabled}
        hidden={pentagon.edges.HI.hidden}
        key="HI"
        direction={selectedEdges.HI.direction}
        endpoints={{
          callback: (endpoint) => {
            if (endpoint === "start") {
              setSelectedEdges({
                ...selectedEdges,
                HI: { ...selectedEdges["HI"], direction: "backwards" },
              });
            } else {
              setSelectedEdges({
                ...selectedEdges,
                HI: { ...selectedEdges["HI"], direction: "forwards" },
              });
            }
          },
          className:
            "stroke-black stroke-2 hover:stroke-[4px] focus:stroke-[4px]",
        }}
        coords={{
          startingX: 600,
          startingY: 850,
          endingX: 400,
          endingY: 850,
        }}
        circle={{
          callback: () => {
            setSelectedEdges({
              ...selectedEdges,
              HI: {
                ...selectedEdges["HI"],
                enabled: !selectedEdges["HI"].enabled,
                direction: null,
                visited: true,
              },
            });
          },
          className:
            pentagon.edges.HI.button +
            " " +
            "cursor-pointer hover:stroke-[8px] focus:stroke-[8px]",
          coords: {
            x: 460,
            y: 330,
          },
          radius: 9,
          width: 40,
        }}
      /> */}
      {/* <g>
        <use y={200} xlinkHref="#mosquito"></use>
        <animateMotion
          xlinkHref="#mosquito"
          dur="4s"
          begin="0s"
          fill="freeze"
          repeatCount="indefinite"
          rotate=""
        >
          <mpath xlinkHref="#test-path" />
        </animateMotion>{" "}
        <animateMotion
          xlinkHref="#mosquito"
          dur="4s"
          begin="05s"
          fill="freeze"
          repeatCount="indefinite"
          rotate=""
        >
          <mpath xlinkHref="#test-path2" />
        </animateMotion>{" "}
      </g> */}
      {/* <g>
        <use xlinkHref="#path-EF" className="stroke-black stroke-2" />
        <use xlinkHref="#path-EG" className="stroke-black stroke-2" />
        <use xlinkHref="#path-EH" className="stroke-black stroke-2" />
        <use xlinkHref="#path-EI" className="stroke-black stroke-2" />
        <use xlinkHref="#path-FG" className="stroke-black stroke-2" />
        <use xlinkHref="#path-FH" className="stroke-black stroke-2" />
        <use xlinkHref="#path-FI" className="stroke-black stroke-2" />
        <use xlinkHref="#path-GH" className="stroke-black stroke-2" />
        <use xlinkHref="#path-GI" className="stroke-black stroke-2" />
        <use xlinkHref="#path-HI" className="stroke-black stroke-2" />
      </g> */}
    </svg>
  );
}
