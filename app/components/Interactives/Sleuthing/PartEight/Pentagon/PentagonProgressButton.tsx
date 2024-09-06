import { partEightPentagonSelectedEdgesAtom } from "@/data/Interactives/interactiveStore";
import { pentagonViewAtom } from "./PentagonViewer";
import { useAtom } from "jotai";
import { Edge } from "../Pentagon";
import { useMemo } from "react";

export function isValid(
  edges: Edge[],
  selectedEdges: {
    [key in Edge]: {
      visited: boolean;
      enabled: boolean;
      selected: boolean;
      direction: null | "forwards" | "backwards";
    };
  },
) {
  for (let i = 0; i < edges.length; i++) {
    if (
      !selectedEdges[edges[i]].visited ||
      selectedEdges[edges[i]].enabled !== !!selectedEdges[edges[i]].direction
    ) {
      return false;
    }
  }
  return true;
}

export default function PentagonProgressButton() {
  const [pentagonView, setPentagonView] = useAtom(pentagonViewAtom);
  const [selectedEdges, setSelectedEdges] = useAtom(
    partEightPentagonSelectedEdgesAtom,
  );

  // const isDisabled = useMemo(() => {
  //   if (pentagonView === "EF") {
  //     return !(selectedEdges.EF.visited && !selectedEdges.EF.enabled);
  //   } else if (pentagonView === "E") {
  //     return !isValid(["EG", "EH", "EI"], selectedEdges);
  //   } else if (pentagonView === "F") {
  //     return !isValid(["FG", "FH", "FI"], selectedEdges);
  //   } else if (pentagonView === "GHI") {
  //     return !isValid(["GH", "GI", "HI"], selectedEdges);
  //   }
  //   return false;
  // }, [pentagonView, selectedEdges]);

  return (
    <button
      data-tip="Continue"
      className="aspect-square disabled:opacity-20"
      onClick={() => {
        if (pentagonView === null && !selectedEdges.EF.visited) {
          console.log("called");
          let k: Edge;
          let newSelectedEdges = { ...selectedEdges };
          for (k in selectedEdges) {
            let newEdge = { ...newSelectedEdges[k] };
            newEdge.selected = false;
            newSelectedEdges[k] = newEdge;
          }
          setSelectedEdges(newSelectedEdges);
          setPentagonView("EF");
        } else if (pentagonView === "EF") {
          console.log("called");
          if (selectedEdges.EF.visited && !selectedEdges.EF.enabled) {
            let k: Edge;
            let newSelectedEdges = { ...selectedEdges };
            for (k in selectedEdges) {
              let newEdge = { ...newSelectedEdges[k] };
              newEdge.selected = false;
              newSelectedEdges[k] = newEdge;
            }
            setSelectedEdges(newSelectedEdges);
            setPentagonView("E");
          }
        } else if (pentagonView === "E") {
          if (isValid(["EG", "EH", "EI"], selectedEdges)) {
            let k: Edge;
            let newSelectedEdges = { ...selectedEdges };
            for (k in selectedEdges) {
              let newEdge = { ...newSelectedEdges[k] };
              newEdge.selected = false;
              newSelectedEdges[k] = newEdge;
            }
            setSelectedEdges(newSelectedEdges);
            setPentagonView("F");
          }
        } else if (pentagonView === "F") {
          if (isValid(["FG", "FH", "FI"], selectedEdges)) {
            let k: Edge;
            let newSelectedEdges = { ...selectedEdges };
            for (k in selectedEdges) {
              let newEdge = { ...newSelectedEdges[k] };
              newEdge.selected = false;
              newSelectedEdges[k] = newEdge;
            }
            setSelectedEdges(newSelectedEdges);
            setPentagonView("GHI");
          }
        } else if (pentagonView === "GHI") {
          if (isValid(["GH", "GI", "HI"], selectedEdges)) {
            let k: Edge;
            let newSelectedEdges = { ...selectedEdges };
            for (k in selectedEdges) {
              let newEdge = { ...newSelectedEdges[k] };
              newEdge.selected = false;
              newSelectedEdges[k] = newEdge;
            }
            setSelectedEdges(newSelectedEdges);
            setPentagonView(null);
          }
        } else if (pentagonView === null && selectedEdges.EF.visited) {
        }
      }}
    >
      <svg
        className="mx-auto"
        width="60px"
        height="60px"
        version="1.1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m36.852 99.891 63.148-49.711-63-50.07v23.051c-1.1016 0.058594-36.109 0.26953-37 0.32812v52.91h36.852z" />
      </svg>
    </button>
  );
}
