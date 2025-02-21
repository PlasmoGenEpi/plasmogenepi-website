import { phaseAtom } from "@/data/Interactives/interactiveStore";
import { coords } from "../../Pentagon3";
import PentagonEdge from "../PentagonEdge";
import { useAtomValue } from "jotai";
import { usePrevious } from "@/app/components/hooks";

export default function EGEdge() {
  const phase = useAtomValue(phaseAtom);
  const prevPhase = usePrevious(phase, 0);

  const direction = phase > prevPhase.current ? "forwards" : "backwards";

  // if (phase < 27) {
  //   return null;
  // }

  return (
    <PentagonEdge
      className={
        phase < 27 && direction === "backwards"
          ? `fadeOut500`
          : phase >= 27
          ? "edgeDashAppearance"
          : "hidden"
      }
      edge="EG"
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
          end: coords.EG.line.end,
          start: coords.EG.line.start,
        },
        circle: {
          x: 0,
          y: 0,
        },
      }}
    />
  );
}
