import { usePrevious } from "@/app/components/hooks";
import {
  partEightPentagonSelectedEdgesAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import PentagonEdge from "./PentagonEdge";
import { coords } from "../Pentagon3";
import FHMosquito from "./AnimationComponents/FHMosquito";
import FHEdge from "./AnimationComponents/FHEdge";
import EIMosquito from "./AnimationComponents/EIMosquito";
import EGMosquito from "./AnimationComponents/EGMosquito";
import EGEdge from "./AnimationComponents/EGEdge";
import EIEdge from "./AnimationComponents/EIEdge";
import PlayButton from "./AnimationComponents/PlayButton";
import GIEdge from "./AnimationComponents/GIEdge";
import PentagonTooltip from "./PentagonTooltip";
import { fixedData } from "@/data/Interactives/fixedData";
import { Edge } from "../Pentagon";
import PentagonTooltipDefinition from "./PentagonTooltipDefinition";

export default function AnimationPentagon() {
  const phase = useAtomValue(phase2Atom);
  const selectedEdges = useAtomValue(partEightPentagonSelectedEdgesAtom);
  const prevPhase = usePrevious(phase, 0);
  return (
    <svg id="animation-pentagon" viewBox="0 0 1000 1000" overflow={"visible"}>
      <defs>
        <symbol id="tooltip-EF2" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 -3 L 10 -3 C 13 -3 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -12 -3 -9 -3
"
            className="translate-x-1/2 stroke-microRed stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition IBD edge={"EF"} />
        </symbol>
        <symbol id="tooltip-EG2" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 -3 L 10 -3 C 13 -3 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -12 -3 -9 -3
"
            className="translate-x-1/2 stroke-microBlue stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition IBD edge={"EG"} />
        </symbol>
        <symbol id="tooltip-EH2" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 -3 L 10 -3 C 13 -3 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -12 -3 -9 -3
"
            className="translate-x-1/2 stroke-microRed stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition IBD edge={"EH"} />
        </symbol>
        <symbol id="tooltip-EI2" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 -3 L 10 -3 C 13 -3 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -12 -3 -9 -3
"
            className="translate-x-1/2 stroke-microBlue stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition IBD edge={"EI"} />
        </symbol>
        <symbol id="tooltip-FG2" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 -3 L 10 -3 C 13 -3 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -12 -3 -9 -3
"
            className="translate-x-1/2 stroke-microRed stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition IBD edge={"FG"} />
        </symbol>
        <symbol id="tooltip-FH2" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 -3 L 10 -3 C 13 -3 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -12 -3 -9 -3
"
            className="translate-x-1/2 stroke-microBlue stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition IBD edge={"FH"} />
        </symbol>
        <symbol id="tooltip-FI2" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 -3 L 10 -3 C 13 -3 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -12 -3 -9 -3
"
            className="translate-x-1/2 stroke-microRed stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition IBD edge={"FI"} />
        </symbol>
        <symbol id="tooltip-GH2" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 -3 L 10 -3 C 13 -3 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -12 -3 -9 -3
"
            className="translate-x-1/2 stroke-microRed stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition IBD edge={"GH"} />
        </symbol>
        <symbol id="tooltip-GI2" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 -3 L 10 -3 C 13 -3 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -12 -3 -9 -3
"
            className="translate-x-1/2 stroke-[purple] stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition IBD edge={"GI"} />
        </symbol>
        <symbol id="tooltip-HI2" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 -3 L 10 -3 C 13 -3 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -12 -3 -9 -3
"
            className="translate-x-1/2 stroke-microRed stroke-[0.125]"
            fill={"white"}
          />
          <PentagonTooltipDefinition IBD edge={"HI"} />
        </symbol>
        <symbol id="tooltip-EF" viewBox="0 0 10 10" overflow="visible">
          <path
            d="M -9 0 L 10 0 C 12 0 12 2 12 5 C 12 8 12 9 10 10 L 2 10 L 0 12 L -2 10 L -9 10 C -11 9 -11 8 -11 5 C -11 2 -11 0 -9 0
"
            className="-translate-y-[3px] translate-x-1/2 stroke-microRed stroke-[0.125]"
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
        <symbol id="person-MOI-E" viewBox={"0 0 600 600"}>
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          <circle
            r={9}
            cx={40}
            cy={75}
            className={`${
              phase > 23 ? "fill-cloneRed" : "fill-current"
            } stroke-black `}
          ></circle>
          <circle
            r={9}
            cx={60}
            cy={75}
            fill="white"
            className={`${
              phase > 23 ? "fill-cloneBlue" : "fill-current"
            } stroke-black `}
          ></circle>
        </symbol>
        <symbol
          className="focus:bg-black"
          // className={[27].includes(phase) ? "fadeOut500" : "fadeIn500"}
          id="person-MOI-F"
          viewBox={"0 0 600 600"}
        >
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          <circle
            r={9}
            cx={50}
            cy={65}
            className={`${
              phase >= 30 ? "fill-cloneYellow" : "fill-white"
            } stroke-black stroke-1`}
          ></circle>
          {/* <circle
            r={9}
            cx={60}
            cy={65}
            className={`${
              phase >= 30 ? "fill-cloneYellow" : "fill-white"
            } stroke-black stroke-1`}
          ></circle> */}
          <circle
            r={9}
            cx={40}
            cy={82}
            className={`${
              phase >= 30 ? "fill-cloneOrange" : "fill-white"
            } stroke-black stroke-1`}
          ></circle>
          <circle
            r={9}
            cx={60}
            cy={82}
            className={`${
              phase >= 30 ? "fill-cloneGreen" : "fill-white"
            } stroke-black stroke-1`}
          ></circle>
        </symbol>
        <symbol
          // className={[27].includes(phase) ? "fadeOut500" : "fadeIn500"}
          id="person-MOI-G"
          viewBox={"0 0 600 600"}
        >
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          <circle r={12} cx={50} cy={75} fill={`white`}></circle>
          {phase >= 27 && (
            <circle
              style={{
                animationDelay: phase === 27 ? "1000ms" : "0ms",
              }}
              r={12}
              cx={50}
              cy={75}
              className="fadeIn1000"
              fill={`url("#red-blue-gradient")`}
            ></circle>
          )}
        </symbol>
        <symbol
          // className={[27].includes(phase) ? "fadeOut500" : "fadeIn500"}
          id="person-MOI-H"
          viewBox={"0 0 600 600"}
        >
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          <circle
            r={11}
            cx={38}
            cy={75}
            fill="white"
            className="stroke-black stroke-2"
          ></circle>
          <circle
            r={11}
            cx={62}
            cy={75}
            fill="white"
            className="stroke-black stroke-2"
          ></circle>
          {phase >= 33 && (
            <g>
              <circle
                style={{
                  animationDelay: phase === 33 ? "1000ms" : "0ms",
                }}
                r={11}
                cx={38}
                cy={75}
                fill="url('#purple-orange-gradient')"
                className="fadeIn1000 stroke-black stroke-2"
              ></circle>
              <circle
                style={{
                  animationDelay: phase === 33 ? "1000ms" : "0ms",
                }}
                r={11}
                cx={62}
                cy={75}
                fill="url('#purple-teal-gradient')"
                className="fadeIn1000 stroke-black stroke-2"
              ></circle>
            </g>
          )}
        </symbol>
        <symbol
          // className={[27].includes(phase) ? "fadeOut500" : "fadeIn500"}
          id="person-MOI-I"
          viewBox={"0 0 600 600"}
        >
          <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
          <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
          <circle r={12} cx={50} cy={75} fill={`white`}></circle>
          {phase >= 28 && (
            <circle
              style={{
                animationDelay: phase === 28 ? "4000ms" : "0ms",
              }}
              r={12}
              cx={50}
              cy={75}
              className="fadeIn1000"
              fill={`url("#red-blue-gradient2")`}
            ></circle>
          )}
        </symbol>
        <linearGradient id="red-blue-gradient">
          <stop stopColor="#ffb0b0" offset={"0%"}></stop>
          <stop stopColor="#ffb0b0" offset={"50%"}></stop>
          <stop stopColor="#b8e6fa" offset={"50%"}></stop>
          <stop stopColor="#b8e6fa" offset={"100%"}></stop>
        </linearGradient>
        <linearGradient id="red-blue-gradient2" gradientTransform="rotate(90)">
          <stop
            stopColor="#ffb0b0"
            // className="bg-cloneBlue"
            offset={"0%"}
          ></stop>
          <stop stopColor="#ffb0b0" offset={"50%"}></stop>
          <stop stopColor="#b8e6fa" offset={"50%"}></stop>
          <stop stopColor="#b8e6fa" offset={"100%"}></stop>
          {/* <stop stopColor="#4896E8" offset={"0%"}></stop>
          <stop stopColor="#4896E8" offset={"50%"}></stop>
          <stop stopColor="#E61048" offset={"50%"}></stop>
          <stop stopColor="#E61048" offset={"100%"}></stop> */}
        </linearGradient>
        {/* <linearGradient id="purple-orange-gradient">
          <stop stopColor="#C45ED8" offset={"0%"}></stop>
          <stop stopColor="#C45ED8" offset={"50%"}></stop>
          <stop stopColor="#FE8638" offset={"50%"}></stop>
          <stop stopColor="#FE8638" offset={"100%"}></stop>
        </linearGradient> */}
        <linearGradient id="purple-orange-gradient">
          <stop
            className="bg-cloneGreen bg-cloneOrange bg-cloneYellow"
            stopColor="#feec96"
            offset={"0%"}
          ></stop>
          <stop stopColor="#feec96" offset={"50%"}></stop>
          <stop stopColor="#fecc94" offset={"50%"}></stop>
          <stop stopColor="#fecc94" offset={"100%"}></stop>
        </linearGradient>
        {/* <linearGradient id="purple-teal-gradient">
          <stop stopColor="#16A0AC" offset={"0%"}></stop>

          <stop stopColor="#16A0AC" offset={"50%"}></stop>

          <stop stopColor="#C45ED8" offset={"50%"}></stop>
          <stop stopColor="#C45ED8" offset={"100%"}></stop>
        </linearGradient> */}
        <linearGradient id="purple-teal-gradient">
          <stop stopColor="#c8ebc3" offset={"0%"}></stop>

          <stop stopColor="#c8ebc3" offset={"50%"}></stop>

          <stop stopColor="#feec96" offset={"50%"}></stop>
          <stop stopColor="#feec96" offset={"100%"}></stop>
        </linearGradient>
        <g>
          <path
            style={{
              animationIterationCount: 1,
            }}
            viewBox={"0 0 10 10"}
            id="test-path"
            d="M 0 0 C 100 200 200 133.3333 300 200 C 400 100 300 66.6667 300 0 C 900 200 -100 0 620 554"
          ></path>
          <path
            style={{
              animationIterationCount: 1,
            }}
            viewBox={"0 0 10 10"}
            id="test-path2"
            d="M620 554 C 100 200 200 133.3333 300 200 C 400 100 300 66.6667 300 0 C 900 200 -100 0 500 500"
          ></path>
        </g>
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
          {
            <g>
              <circle
                style={{
                  animationDelay: "1000ms",
                  transitionDelay: "2000ms",
                }}
                r={9}
                cx={25}
                cy={20}
                fill="white"
                className={`${
                  phase === 26 ? "recombination" : phase > 26 ? "hidden" : ""
                } transition-all ${
                  phase < 25 ? "hidden" : ""
                } fadeIn300 fill-microBlue stroke-black stroke-1 `}
              ></circle>
              <circle
                style={{
                  animationDelay: "1000ms",
                }}
                r={9}
                cx={25}
                cy={40}
                // fill="white"
                className={` ${
                  phase === 26 ? "recombination2" : phase > 26 ? "hidden" : ""
                } transition-all  ${
                  phase < 25 ? "hidden" : ""
                } fadeIn300 fill-cloneRed stroke-black stroke-1`}
                // fill="url('#red-ball-gradient')"
              ></circle>
              {phase >= 26 && (
                <circle
                  fill="url('#red-blue-gradient')"
                  r={12}
                  cx={25}
                  cy={30}
                  style={{
                    animationDelay: phase === 26 ? "2000ms" : "0ms",
                  }}
                  className={`${
                    phase === 26 ? "fadeIn1000" : ""
                  } stroke-black stroke-1`}
                ></circle>
              )}
            </g>
          }
          {/* <circle
            r={5}
            cx={50}
            cy={59}
            fill="white"
            className="stroke-black stroke-2"
          ></circle> */}
        </g>
        <g
          width="100pt"
          height="100pt"
          id="mosquito2"
          strokeDashoffset={2}
          // strokeDasharray={"0 0 5 5"}
          className=" origin-center scale-[150%] stroke-white stroke-[0.5] [transform-box:fill-box]"
          version="1.1"
          fill="black"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m56.359 52.145h30.25c1.1953 0 2.0352 1.1875 1.6523 2.3047-1.8359 6.7461-6.0977 13.137-13.801 13.137h-5.5195l8.7734 20.289h4.4805c2.293 0 2.293 3.4883 0 3.4883h-5.6172c-0.77734 0-1.4336-0.50781-1.6602-1.2109l-9.7578-22.566h-9.6719c-0.56641 0.75-1.2773 1.3711-2.082 1.8281l8.5742 19.832h4.4805c2.293 0 2.293 3.4844 0 3.4844h-5.6172c-0.77734 0-1.4336-0.50781-1.6602-1.2109l-9.1797-21.223h-9.9492c-0.38672 0-0.76563-0.03125-1.1367-0.09375l-9.2188 21.32c-0.22656 0.70312-0.88281 1.2109-1.6602 1.2109h-5.6172c-2.293 0-2.293-3.4844 0-3.4844h4.4805l8.8633-20.492c-0.80469-0.66406-1.457-1.5117-1.8945-2.5-1.4023 1.1367-3.1875 1.8203-5.1328 1.8203-1.1992 0-2.3359-0.26172-3.3633-0.73047-3.3711 4.3828-10.566 13.699-10.59 13.73-1.3945 1.8047-4.1445-0.32031-2.75-2.125 0.023438-0.027344 7.1406-9.2461 10.555-13.688-1.2422-1.4297-1.9961-3.2969-1.9961-5.332 0-4.4961 3.6484-8.1445 8.1445-8.1445 1.7461 0 3.3672 0.55469 4.6953 1.4922 0.64062-3.1211 3.4141-5.4102 6.625-5.4102h0.42578c0.80859-5.9258 3.8594-27.633 6.2656-35.203 3.5039-11.023 21.07-3.5039 15.211 7.7305-2.7422 5.2578-8.4688 14.473-12.828 21.34 7.2344-5.3594 17.352-12.633 22.293-15.191 10.266-5.3086 17.387 12.43 5.2852 16.234-5.4844 1.7227-15.645 4.1055-23.512 5.8672 1.4102 0.74219 2.5508 1.9727 3.1602 3.5039zm16.656-22.512c-5.2148 2.6992-16.586 10.98-23.738 16.32 8.0078-1.7617 20.23-4.5625 26.398-6.5 7.293-2.293 3.1523-12.82-2.6602-9.8203zm-22.961-15.918c-1.7734 5.582-3.9609 19.492-5.2422 28.332 4.418-6.918 11.09-17.547 14.07-23.258 3.543-6.7969-6.8477-11.293-8.8281-5.0742z" />
          {phase >= 28 && (
            <g>
              <circle
                style={{
                  animationDelay: "2000ms",
                }}
                r={9}
                cx={25}
                cy={20}
                className={`${
                  phase === 28 ? "recombination" : "hidden"
                } fadeIn1000 fill-microBlue stroke-black stroke-1`}
              ></circle>
              <circle
                style={{
                  animationDelay: "2000ms",
                }}
                r={9}
                cx={25}
                cy={40}
                className={`${
                  phase === 28 ? "recombination2" : "hidden"
                }  fadeIn1000 fill-cloneRed stroke-black stroke-1`}

                // fill="url('#red-ball-gradient')"
              ></circle>
              {phase >= 28 && (
                <circle
                  fill="url('#red-blue-gradient2')"
                  r={12}
                  cx={25}
                  cy={30}
                  style={{
                    animationDelay: phase === 28 ? "3000ms" : "0ms",
                  }}
                  className={`${
                    phase >= 28 ? "fadeIn1000" : ""
                  } stroke-black stroke-1`}
                ></circle>
              )}
            </g>
          )}
          {/* <circle
            r={5}
            cx={50}
            cy={59}
            fill="white"
            className="stroke-black stroke-2"
          ></circle> */}
        </g>
        <g
          width="100pt"
          height="100pt"
          id="mosquito3"
          strokeDashoffset={2}
          // strokeDasharray={"0 0 5 5"}
          className=" origin-center scale-[150%] stroke-white stroke-[0.5] [transform-box:fill-box]"
          version="1.1"
          fill="black"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m56.359 52.145h30.25c1.1953 0 2.0352 1.1875 1.6523 2.3047-1.8359 6.7461-6.0977 13.137-13.801 13.137h-5.5195l8.7734 20.289h4.4805c2.293 0 2.293 3.4883 0 3.4883h-5.6172c-0.77734 0-1.4336-0.50781-1.6602-1.2109l-9.7578-22.566h-9.6719c-0.56641 0.75-1.2773 1.3711-2.082 1.8281l8.5742 19.832h4.4805c2.293 0 2.293 3.4844 0 3.4844h-5.6172c-0.77734 0-1.4336-0.50781-1.6602-1.2109l-9.1797-21.223h-9.9492c-0.38672 0-0.76563-0.03125-1.1367-0.09375l-9.2188 21.32c-0.22656 0.70312-0.88281 1.2109-1.6602 1.2109h-5.6172c-2.293 0-2.293-3.4844 0-3.4844h4.4805l8.8633-20.492c-0.80469-0.66406-1.457-1.5117-1.8945-2.5-1.4023 1.1367-3.1875 1.8203-5.1328 1.8203-1.1992 0-2.3359-0.26172-3.3633-0.73047-3.3711 4.3828-10.566 13.699-10.59 13.73-1.3945 1.8047-4.1445-0.32031-2.75-2.125 0.023438-0.027344 7.1406-9.2461 10.555-13.688-1.2422-1.4297-1.9961-3.2969-1.9961-5.332 0-4.4961 3.6484-8.1445 8.1445-8.1445 1.7461 0 3.3672 0.55469 4.6953 1.4922 0.64062-3.1211 3.4141-5.4102 6.625-5.4102h0.42578c0.80859-5.9258 3.8594-27.633 6.2656-35.203 3.5039-11.023 21.07-3.5039 15.211 7.7305-2.7422 5.2578-8.4688 14.473-12.828 21.34 7.2344-5.3594 17.352-12.633 22.293-15.191 10.266-5.3086 17.387 12.43 5.2852 16.234-5.4844 1.7227-15.645 4.1055-23.512 5.8672 1.4102 0.74219 2.5508 1.9727 3.1602 3.5039zm16.656-22.512c-5.2148 2.6992-16.586 10.98-23.738 16.32 8.0078-1.7617 20.23-4.5625 26.398-6.5 7.293-2.293 3.1523-12.82-2.6602-9.8203zm-22.961-15.918c-1.7734 5.582-3.9609 19.492-5.2422 28.332 4.418-6.918 11.09-17.547 14.07-23.258 3.543-6.7969-6.8477-11.293-8.8281-5.0742z" />
          {
            <g>
              <circle
                style={{
                  transitionDelay: "1000ms",
                  animationDelay: phase === 31 ? "1000ms" : "",
                }}
                r={7}
                cy={25}
                cx={12}
                className={`${phase > 32 ? "hidden" : ""} ${
                  phase >= 32 ? "recombination" : ""
                } transition-all duration-500 ${
                  phase >= 30 ? "fill-cloneYellow" : "fill-white"
                } fadeIn300 stroke-black stroke-1`}
              ></circle>
              <circle
                style={{
                  transitionDelay: "1000ms",
                  animationDelay: phase === 31 ? "1000ms" : "",
                }}
                r={7}
                cy={25}
                cx={30}
                className={`${phase > 32 ? "hidden" : ""} ${
                  phase >= 32 ? "recombination" : ""
                } transition-all duration-500 ${
                  phase >= 30 ? "fill-cloneYellow" : "fill-white"
                } fadeIn300 stroke-black stroke-1`}
              ></circle>
              <circle
                r={7}
                style={{
                  animationDelay: phase === 31 ? "1000ms" : "",
                }}
                cx={12}
                cy={40}
                className={`${phase > 32 ? "hidden" : ""} ${
                  phase >= 32 ? "recombination2" : ""
                } transition-all ${
                  phase >= 30 ? "fill-cloneOrange" : "fill-white"
                } fadeIn300 stroke-black stroke-1`}
              ></circle>
              <circle
                r={7}
                style={{
                  animationDelay: phase === 31 ? "1000ms" : "",
                }}
                cx={30}
                cy={40}
                className={`${phase > 32 ? "hidden" : ""} ${
                  phase >= 32 ? "recombination2" : ""
                } transition-all ${
                  phase >= 30 ? "fill-cloneGreen" : "fill-white"
                } fadeIn300 stroke-black stroke-1`}
              ></circle>
              <circle
                r={10}
                style={{
                  animationDelay: phase === 32 ? "1000ms" : "",
                }}
                cx={20}
                cy={15}
                fill="url('#purple-orange-gradient')"
                className={`${phase < 32 ? "hidden" : ""} ${
                  phase === 32 ? "fadeIn1000" : ""
                } stroke-black stroke-1`}
              ></circle>
              <circle
                r={10}
                style={{
                  animationDelay: phase === 32 ? "1000ms" : "",
                }}
                cx={20}
                cy={40}
                fill="url('#purple-teal-gradient')"
                className={`${phase < 32 ? "hidden" : ""} ${
                  phase === 32 ? "fadeIn1000" : ""
                } stroke-black stroke-1`}
              ></circle>
            </g>
          }
          {/* <circle
            r={5}
            cx={50}
            cy={59}
            fill="white"
            className="stroke-black stroke-2"
          ></circle> */}
        </g>
      </defs>
      <g>
        <g className={phase === 24 ? "" : ""} id="person-E">
          <use y={"35%"} xlinkHref="#person-MOI-E"></use>
        </g>
        <g className={phase === 24 ? "opacity-20" : ""} id="person-F">
          <use y={"5%"} x={"calc(50% - 62pt)"} xlinkHref="#person-MOI-F"></use>
        </g>
        <g className={phase === 24 ? "opacity-20" : ""} id="person-G">
          <use
            x={"625pt"}
            y={"35%"}
            xlinkHref="#person-MOI-G"
            className=""
          ></use>
        </g>
        <g className={phase === 24 ? "opacity-20" : ""} id="person-H">
          <use
            x={"475pt"}
            y={"80%"}
            xlinkHref="#person-MOI-H"
            className=""
          ></use>
        </g>
        <g className={phase === 24 ? "opacity-20" : ""} id="person-I">
          <use
            x={"150pt"}
            y={"80%"}
            xlinkHref="#person-MOI-I"
            className=""
          ></use>
        </g>
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
      <g className={phase >= 34 ? "fadeOut500" : ""}>
        <EGMosquito />
        <EIMosquito />
        <FHMosquito />
      </g>
      <EGEdge />
      <EIEdge />
      <FHEdge />
      <GIEdge />
      {(phase === 34 || phase === 35) && (
        <g>
          <PentagonEdge
            edge="EF"
            active={false}
            className="edgeDashAppearance"
            handleDirection={() => {}}
            handleSelection={() => {}}
            edgeStatus={{
              direction: null,
              enabled: true,
              selected: false,
              visited: false,
            }}
            coords={{
              circle: {
                x: 0,
                y: 0,
              },
              line: {
                start: {
                  x: coords.EF.line.start.x,
                  y: coords.EF.line.start.y,
                },
                end: {
                  x: coords.EF.line.end.x,
                  y: coords.EF.line.end.y,
                },
              },
            }}
          />
          <PentagonEdge
            edge="EH"
            active={false}
            className="edgeDashAppearance"
            handleDirection={() => {}}
            handleSelection={() => {}}
            edgeStatus={{
              direction: null,
              enabled: true,
              selected: false,
              visited: false,
            }}
            coords={{
              circle: {
                x: 0,
                y: 0,
              },
              line: {
                start: {
                  x: coords.EH.line.start.x,
                  y: coords.EH.line.start.y,
                },
                end: {
                  x: coords.EH.line.end.x,
                  y: coords.EH.line.end.y,
                },
              },
            }}
          />
          <PentagonEdge
            edge="FG"
            active={false}
            className="edgeDashAppearance"
            handleDirection={() => {}}
            handleSelection={() => {}}
            edgeStatus={{
              direction: null,
              enabled: true,
              selected: false,
              visited: false,
            }}
            coords={{
              circle: {
                x: 0,
                y: 0,
              },
              line: {
                start: {
                  x: coords.FG.line.start.x,
                  y: coords.FG.line.start.y,
                },
                end: {
                  x: coords.FG.line.end.x,
                  y: coords.FG.line.end.y,
                },
              },
            }}
          />
          <PentagonEdge
            edge="FI"
            active={false}
            className="edgeDashAppearance"
            handleDirection={() => {}}
            handleSelection={() => {}}
            edgeStatus={{
              direction: null,
              enabled: true,
              selected: false,
              visited: false,
            }}
            coords={{
              circle: {
                x: 0,
                y: 0,
              },
              line: {
                start: {
                  x: coords.FI.line.start.x,
                  y: coords.FI.line.start.y,
                },
                end: {
                  x: coords.FI.line.end.x,
                  y: coords.FI.line.end.y,
                },
              },
            }}
          />
          <PentagonEdge
            edge="GI"
            active={false}
            className="edgeDashAppearance"
            handleDirection={() => {}}
            handleSelection={() => {}}
            edgeStatus={{
              direction: null,
              enabled: true,
              selected: false,
              visited: false,
            }}
            coords={{
              circle: {
                x: 0,
                y: 0,
              },
              line: {
                start: {
                  x: coords.GI.line.start.x,
                  y: coords.GI.line.start.y,
                },
                end: {
                  x: coords.GI.line.end.x,
                  y: coords.GI.line.end.y,
                },
              },
            }}
          />
          <PentagonEdge
            edge="GH"
            active={false}
            className="edgeDashAppearance"
            handleDirection={() => {}}
            handleSelection={() => {}}
            edgeStatus={{
              direction: null,
              enabled: true,
              selected: false,
              visited: false,
            }}
            coords={{
              circle: {
                x: 0,
                y: 0,
              },
              line: {
                start: {
                  x: coords.GH.line.start.x,
                  y: coords.GH.line.start.y,
                },
                end: {
                  x: coords.GH.line.end.x,
                  y: coords.GH.line.end.y,
                },
              },
            }}
          />
          <PentagonEdge
            active={false}
            className="edgeDashAppearance"
            handleDirection={() => {}}
            handleSelection={() => {}}
            edge="HI"
            edgeStatus={{
              direction: null,
              enabled: true,
              selected: false,
              visited: false,
            }}
            coords={{
              circle: {
                x: 0,
                y: 0,
              },
              line: {
                start: {
                  x: coords.HI.line.start.x,
                  y: coords.HI.line.start.y,
                },
                end: {
                  x: coords.HI.line.end.x,
                  y: coords.HI.line.end.y,
                },
              },
            }}
          />
        </g>
      )}
      {(phase === 34 || phase === 35) && (
        <g>
          {Object.keys(selectedEdges).map((k, idx) => {
            return (
              <PentagonTooltip
                IBD
                key={k}
                edge={k as Edge}
                coords={{
                  x: coords[k as Edge].circle.x,
                  y: coords[k as Edge].circle.y + 20,
                }}
              />
            );
          })}
        </g>
      )}
    </svg>
  );
}
