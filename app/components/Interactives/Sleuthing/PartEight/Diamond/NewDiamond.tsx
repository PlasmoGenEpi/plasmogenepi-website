import {
  partEightCompletionAtom,
  partEightDiamondPairViewedAtom,
  partEightDiamondPersonPairAtom,
  partEightPentagonSelectedEdgesAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import PentagonEdge from "../Pentagon/PentagonEdge";
import Person from "../Person";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

export default function NewDiamond() {
  const [viewedEdges, setViewedEdges] = useAtom(partEightDiamondPairViewedAtom);
  const phase = useAtomValue(phase2Atom);
  const [activeView, setActiveView] = useAtom(partEightDiamondPersonPairAtom);
  const p8completion = useAtomValue(partEightCompletionAtom);

  // useEffect(() => {
  //   return () => {
  //     setActiveView(null);
  //   };
  // }, []);

  useEffect(() => {
    if (phase === 5 && p8completion[5] && activeView === null) {
      setActiveView("AB");
    }
    return () => {
      setActiveView(null);
    };
  }, [phase]);

  return (
    <div className="aspect-[1.75/1] overflow-hidden">
      <svg id="school-diamond" viewBox="0 0 1000 1000" overflow={"visible"}>
        <defs>
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
        M 100, 70
        L 100, 130"
            />
          </symbol>
          <symbol id="person-MOI-A" viewBox={"0 0 600 600"}>
            <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
            <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          </symbol>
          <symbol id="person-MOI-B" viewBox={"0 0 600 600"}>
            <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
            <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          </symbol>
          <symbol id="person-MOI-C" viewBox={"0 0 600 600"}>
            <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
            <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          </symbol>
          <symbol id="person-MOI-D" viewBox={"0 0 600 600"}>
            <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
            <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          </symbol>
        </defs>
        <g>
          {viewedEdges["AB"] && (
            <text
              transform="translate(220 120)"
              fontFamily="Arial"
              fontSize={24}
              fontWeight="700"
              className={`${
                phase === 5 && activeView === "AB"
                  ? "fill-interactiveBlue"
                  : "fill-current"
              }`}
            >
              IBS: .083
              {/* IBS: 8.33% */}
            </text>
          )}
          {viewedEdges["AC"] && (
            <text
              transform="translate(620 110)"
              fontFamily="Arial"
              fontSize={24}
              fontWeight="700"
              className={`${
                phase === 5 && activeView === "AC"
                  ? "fill-interactiveBlue"
                  : "fill-current"
              }`}
              // className="fadeIn500"
            >
              IBS: .583
              {/* IBS: 58.33% */}
            </text>
          )}
          {viewedEdges["CD"] && (
            <text
              transform="translate(650 500)"
              fontFamily="Arial"
              fontSize={24}
              fontWeight="700"
              className={`${
                phase === 5 && activeView === "CD"
                  ? "fill-interactiveBlue"
                  : "fill-current"
              }`}
            >
              IBS: 0.5
              {/* IBS: 50% */}
            </text>
          )}
          {viewedEdges["BD"] && (
            <text
              transform="translate(200 495)"
              fontFamily="Arial"
              fontSize={24}
              fontWeight="700"
              className={`${
                phase === 5 && activeView === "BD"
                  ? "fill-interactiveBlue"
                  : "fill-current"
              }`}
            >
              IBS: .167
              {/* IBS: 16.67% */}
            </text>
          )}
          {viewedEdges["BC"] && (
            <text
              transform="translate(260 270)"
              fontFamily="Arial"
              fontSize={24}
              fontWeight="700"
              className={`${
                phase === 5 && activeView === "BC"
                  ? "fill-interactiveBlue"
                  : "fill-current"
              }`}
            >
              IBS: 0{/* IBS: 0% */}
            </text>
          )}
          {viewedEdges["AD"] && (
            <text
              transform="translate(550 245)"
              fontFamily="Arial"
              fontSize={24}
              fontWeight="700"
              className={`${
                phase === 5 && activeView === "AD"
                  ? "fill-interactiveBlue"
                  : "fill-current"
              }`}
            >
              IBS: .667
              {/* IBS: 66.67% */}
            </text>
          )}
          <text
            transform="translate(420 40)"
            fontFamily="Arial"
            fontSize={40}
            fontWeight="700"
          >
            A
          </text>
          <text
            transform="translate(0 250)"
            fontFamily="Arial"
            fontSize={40}
            fontWeight="700"
          >
            B
          </text>
          <text
            transform="translate(825 250)"
            fontFamily="Arial"
            fontSize={40}
            fontWeight="700"
          >
            C
          </text>
          <text
            transform="translate(420 440)"
            fontFamily="Arial"
            fontSize={40}
            fontWeight="700"
          >
            D
          </text>
        </g>
        <g className={""} id="person-A">
          <use x={420} y={"0%"} xlinkHref="#person-MOI-A"></use>
        </g>
        <g className={""} id="person-B">
          <use x={0} y={"20%"} xlinkHref="#person-MOI-A"></use>
        </g>
        <g className={""} id="person-C">
          <use x={830} y={"20%"} xlinkHref="#person-MOI-A"></use>
        </g>
        <g className={""} id="person-D">
          <use x={420} y={"40%"} xlinkHref="#person-MOI-A"></use>
        </g>
        <g id="edges-container">
          <PentagonEdge
            diamond
            edge={"AB"}
            edgeStatus={{
              direction: null,
              enabled: viewedEdges["AB"],
              selected: phase === 5 && activeView === "AB",
              visited: viewedEdges["AB"],
            }}
            handleDirection={() => {}}
            handleSelection={(edge) => {
              if (activeView === edge) {
                setActiveView(null);
              } else {
                setActiveView(edge);
              }
              setViewedEdges({ ...viewedEdges, [edge]: true });
              return;
            }}
            key={"AB"}
            active={true}
            coords={{
              line: {
                start: {
                  x: 400,
                  y: 120,
                },
                end: {
                  x: 200,
                  y: 200,
                },
              },
              circle: {
                x: 260,
                y: -355,
              },
            }}
          />
          <PentagonEdge
            diamond
            edge={"AC"}
            edgeStatus={{
              direction: null,
              enabled: viewedEdges["AC"],
              selected: phase === 5 && activeView === "AC",
              visited: viewedEdges["AC"],
            }}
            handleDirection={() => {}}
            handleSelection={(edge) => {
              if (activeView === edge) {
                setActiveView(null);
              } else {
                setActiveView(edge);
              }
              setViewedEdges({ ...viewedEdges, [edge]: true });
              return;
            }}
            key={"AC"}
            active={true}
            coords={{
              line: {
                start: {
                  x: 600,
                  y: 120,
                },
                end: {
                  x: 800,
                  y: 200,
                },
              },
              circle: {
                x: 660,
                y: -355,
              },
            }}
          />
          <PentagonEdge
            diamond
            edge={"AD"}
            edgeStatus={{
              direction: null,
              enabled: viewedEdges["AD"],
              selected: phase === 5 && activeView === "AD",
              visited: viewedEdges["AD"],
            }}
            handleDirection={() => {}}
            handleSelection={(edge) => {
              if (activeView === edge) {
                setActiveView(null);
              } else {
                setActiveView(edge);
              }
              setViewedEdges({ ...viewedEdges, [edge]: true });
              return;
            }}
            key={"AD"}
            active={true}
            coords={{
              line: {
                start: {
                  x: 500,
                  y: 200,
                },
                end: {
                  x: 500,
                  y: 360,
                },
              },
              circle: {
                x: 460,
                y: -280,
              },
            }}
          />
          <PentagonEdge
            diamond
            edge={"BC"}
            edgeStatus={{
              direction: null,
              enabled: viewedEdges["BC"],
              selected: phase === 5 && activeView === "BC",
              visited: viewedEdges["BC"],
            }}
            handleDirection={() => {}}
            handleSelection={(edge) => {
              if (activeView === edge) {
                setActiveView(null);
              } else {
                setActiveView(edge);
              }
              setViewedEdges({ ...viewedEdges, [edge]: true });
              return;
            }}
            key={"BC"}
            active={true}
            coords={{
              line: {
                start: {
                  x: 200,
                  y: 300,
                },
                end: {
                  x: 800,
                  y: 300,
                },
              },
              circle: {
                x: 360,
                y: -220,
              },
            }}
          />
          <PentagonEdge
            diamond
            edge={"BD"}
            edgeStatus={{
              direction: null,
              enabled: viewedEdges["BD"],
              selected: phase === 5 && activeView === "BD",
              visited: viewedEdges["BD"],
            }}
            handleDirection={() => {}}
            handleSelection={(edge) => {
              if (activeView === edge) {
                setActiveView(null);
              } else {
                setActiveView(edge);
              }
              setViewedEdges({ ...viewedEdges, [edge]: true });
              return;
            }}
            key={"BD"}
            active={true}
            coords={{
              line: {
                start: {
                  x: 200,
                  y: 370,
                },
                end: {
                  x: 400,
                  y: 470,
                },
              },
              circle: {
                x: 260,
                y: -100,
              },
            }}
          />
          <PentagonEdge
            diamond
            edge={"CD"}
            edgeStatus={{
              direction: null,
              enabled: viewedEdges["CD"],
              selected: phase === 5 && activeView === "CD",
              visited: viewedEdges["CD"],
            }}
            handleDirection={() => {}}
            handleSelection={(edge) => {
              if (activeView === edge) {
                setActiveView(null);
              } else {
                setActiveView(edge);
              }
              setViewedEdges({ ...viewedEdges, [edge]: true });
              return;
            }}
            key={"CD"}
            active={true}
            coords={{
              line: {
                start: {
                  x: 600,
                  y: 470,
                },
                end: {
                  x: 800,
                  y: 370,
                },
              },
              circle: {
                x: 660,
                y: -100,
              },
            }}
          />
        </g>
        {/* <g className={""} id="person-C">
        <use x={400} y={"0%"} xlinkHref="#person-MOI-A"></use>
      </g> */}
        {/* <g className={""} id="person-D">
        <use x={400} y={"0%"} xlinkHref="#person-MOI-A"></use>
      </g> */}
      </svg>
    </div>
  );
}
