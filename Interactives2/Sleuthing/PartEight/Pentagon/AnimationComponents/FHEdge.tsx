import { phaseAtom } from "@/data/Interactives/interactiveStore";
import { coords } from "../../Pentagon3";
import PentagonEdge from "../PentagonEdge";
import { useAtomValue } from "jotai";
import { usePrevious } from "@/app/components/hooks";

export default function FHEdge() {
  const phase = useAtomValue(phaseAtom);
  const prevPhase = usePrevious(phase, 0);

  const direction = phase > prevPhase.current ? "forwards" : "backwards";

  if (phase < 33) {
    return null;
  }

  return (
    <PentagonEdge
      style={{
        animationDelay:
          direction === "forwards" && phase === 33 ? "1000ms" : "0ms",
      }}
      className="edgeDashAppearance"
      edge="FH"
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
          end: coords.FH.line.end,
          start: coords.FH.line.start,
        },
        circle: {
          x: 0,
          y: 0,
        },
      }}
    />
  );
}
