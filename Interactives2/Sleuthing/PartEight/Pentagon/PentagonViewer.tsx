import { atom, useAtom, useAtomValue } from "jotai";
import Pentagon3, {
  defaultPentagon,
  PentagonId,
  specialEdgeHandledAtom,
} from "../Pentagon3";
import { useEffect } from "react";
import { Edge } from "../Pentagon";
import {
  partEightPentagonSelectedEdgesAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { RESET } from "jotai/utils";
import { usePrevious } from "@/app/components/hooks";
import PentagonResetButton from "./PentagonResetButton";
import PentagonProgressButton from "./PentagonProgressButton";
import { currentCorrectionAtom } from "./PentagonEdgeCorrection";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";

// export type PentagonView = {
//   EF: {
//     active: boolean;
//   };
//   E: {
//     active: boolean;
//   };
//   F: {
//     active: boolean;
//   };
//   GHI: {
//     active: boolean;
//   };
// };

export type PentagonView = null | "EF" | "E" | "F" | "GHI";

// export const pentagonAtom = atom(defaultPentagon);
export const pentagonViewAtom = atom<PentagonView>(null);

export function involves(arr: string[], arr2: string[]) {
  for (let i = 0; i < Math.max(arr.length, arr2.length); i++) {
    for (let j = 0; j < Math.min(arr.length, arr2.length); j++) {
      if (arr[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

export function edgeIsActive(view: PentagonView, edge: Edge) {
  if (view === "EF") {
    return edge === "EF";
  } else if (view === "E") {
    return ["EG", "EH", "EI"].includes(edge);
  } else if (view === "F") {
    return ["FG", "FH", "FI"].includes(edge);
  } else if (view === "GHI") {
    return ["GH", "GI", "HI"].includes(edge);
  }
}

export const edgeAnswers: {
  [key in Edge]: {
    direction: null | "forwards" | "backwards";
    enabled: boolean;
  };
} = {
  EF: {
    direction: null,
    enabled: false,
  },
  EG: {
    direction: "forwards",
    enabled: true,
  },
  EH: {
    direction: null,
    enabled: false,
  },
  EI: {
    direction: "forwards",
    enabled: true,
  },
  FG: {
    direction: null,
    enabled: false,
  },
  FH: {
    direction: "forwards",
    enabled: true,
  },
  FI: {
    direction: null,
    enabled: false,
  },
  GH: {
    direction: null,
    enabled: false,
  },
  GI: {
    direction: null,
    enabled: false,
  },
  HI: {
    direction: null,
    enabled: false,
  },
};

export function getResults(edges: {
  [key in Edge]: {
    selected: boolean;
    visited: boolean;
    direction: null | "forwards" | "backwards";
    enabled: boolean;
  };
}) {
  let results: {
    [key in Edge]?: {
      correct?: boolean;
      enabled?: boolean;
      direction?: null | "forwards" | "backwards";
    };
  } = {};
  let k: Edge;
  for (k in edges) {
    let edge = edges[k];
    if (
      edge.enabled &&
      edge.enabled === edgeAnswers[k].enabled &&
      edge.direction === edgeAnswers[k].direction
    ) {
      results[k] = {
        correct: true,
      };
    }
    if (edge.enabled !== edgeAnswers[k].enabled) {
      results[k] = {
        correct: false,
        enabled: edgeAnswers[k].enabled,
        direction: edgeAnswers[k].direction,
      };
    }
    if (
      edge.direction !== edgeAnswers[k].direction &&
      results[k] === undefined
    ) {
      if (edge.enabled === false && edgeAnswers[k].enabled === false) {
        results[k] = { correct: true, direction: null };
      } else {
        results[k] = { correct: false, direction: edgeAnswers[k].direction };
      }
    }
    // if (k === "EG") {

    // } else if (k === "EH") {
    // } else if (k === "EI") {
    // } else if (k === "FG") {
    // } else if (k === "FH") {
    // } else if (k === "FI") {
    // } else if (k === "GH") {
    // } else if (k === "GI") {
    // } else if (k === "HI") {
    // }
  }
  return results;
}

export const edgeCorrectionsAtom = atom<
  [
    Edge,
    {
      correct?: boolean;
      direction?: null | "forwards" | "backwards";
      enabled?: boolean;
    },
  ][]
>([]);

export default function PentagonViewer() {
  // const [pentagon, setPentagon] = useAtom(pentagonAtom);
  const [pentagonView, setPentagonView] = useAtom(pentagonViewAtom);
  const [selectedEdges, setSelectedEdges] = useAtom(
    partEightPentagonSelectedEdgesAtom,
  );
  const [edgeCorrections, setEdgeCorrections] = useAtom(edgeCorrectionsAtom);
  const phase = useAtomValue(phaseAtom);
  const [specialEdgeHandled, setSpecialEdgeHandled] = useAtom(
    specialEdgeHandledAtom,
  );

  // useEffect(() => {
  //   setPentagonView(null);
  //   setSelectedEdges(RESET);
  // }, []);

  useEffect(() => {
    if (selectedEdges.EF.visited === false && pentagonView === null) {
      return;
    }
    let k: Edge;
    let newSelectedEdges = { ...selectedEdges };
    for (k in selectedEdges) {
      let newEdge = { ...newSelectedEdges[k] };
      newEdge.selected = false;
      newSelectedEdges[k as Edge] = newEdge;
    }
    setSelectedEdges(newSelectedEdges);
    setSpecialEdgeHandled(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pentagonView]);

  useEffect(() => {
    if (phase === 18) {
      setEdgeCorrections(
        //@ts-ignore
        Object.entries(getResults(selectedEdges)).sort((a, b) => {
          return a < b ? -1 : 1;
        }),
      );
    }
  }, [phase, setEdgeCorrections, selectedEdges]);

  return (
    <div>
      <FormHeader text="Village Transmission Network" />
      <div className="p-1">
        <Pentagon3 />
      </div>
      {/* <div className="flex h-24 justify-between border-t  p-2">
          <PentagonResetButton />
          <div className="flex gap-1">
            <div className="aspect-square h-3 rounded-full border border-black/50 bg-primaryBlue"></div>
            <div className="aspect-square h-3 rounded-full border border-black/50 bg-white"></div>
            <div className="aspect-square h-3 rounded-full border border-black/50 bg-white"></div>
            <div className="aspect-square h-3 rounded-full border border-black/50 bg-white"></div>
          </div>
          <PentagonProgressButton />
        </div> */}
    </div>
  );
}
