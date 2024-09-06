import { phaseAtom } from "@/data/Interactives/interactiveStore";
import { coords } from "../../Pentagon3";
import PentagonEdge from "../PentagonEdge";
import { useAtomValue } from "jotai";
import { usePrevious } from "@/components/hooks";

export default function EIEdge() {
  const phase = useAtomValue(phaseAtom);
  const prevPhase = usePrevious(phase, 0);

  const direction = phase > prevPhase.current ? "forwards" : "backwards";

  // if (phase < 28) {
  //   return null;
  // }

  if (phase === 29.5) {
    return null;
  }

  return (
    <PentagonEdge
      style={{
        animationDelay:
          direction === "forwards" && phase === 28 ? "4000ms" : "0ms",
      }}
      className={
        phase < 28 && direction === "backwards"
          ? `fadeOut500`
          : phase >= 28
            ? "edgeDashAppearance"
            : "hidden"
      }
      edge="EI"
      active={false}
      edgeStatus={{
        direction: "forwards",
        enabled: true,
        selected: false,
        visited: true,
      }}
      handleDirection={() => {}}
      handleSelection={() => {}}
      coords={{
        line: {
          end: coords.EI.line.end,
          start: coords.EI.line.start,
        },
        circle: {
          x: 0,
          y: 0,
        },
      }}
    />
  );
}
