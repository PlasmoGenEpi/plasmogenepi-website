import { partEightPentagonSelectedEdgesAtom } from "@/data/Interactives/interactiveStore";
import { pentagonViewAtom } from "./PentagonViewer";
import { useSetAtom } from "jotai";
import { pentagonResetAnimationAtom } from "../Pentagon3";
import { RESET } from "jotai/utils";

export default function PentagonResetButton() {
  const setPentagonView = useSetAtom(pentagonViewAtom);
  const setSelectedEdges = useSetAtom(partEightPentagonSelectedEdgesAtom);
  const setPentagonResetAnimation = useSetAtom(pentagonResetAnimationAtom);

  return (
    <button
      onClick={() => {
        setPentagonView(null);
        setSelectedEdges(RESET);
        setPentagonResetAnimation(false);
      }}
      className="tooltip"
      data-tip="Reset"
    >
      <svg
        width="80px"
        height="80px"
        version="1.1"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m67.711 26.387c-4.9336-3.707-11.07-5.9062-17.711-5.9062-16.293 0-29.52 13.227-29.52 29.52s13.227 29.52 29.52 29.52c15.531 0 28.273-12.02 29.434-27.254 0.16406-2.1641-1.457-4.0586-3.625-4.2227-2.168-0.16406-4.0586 1.457-4.2227 3.625-0.85156 11.172-10.199 19.98-21.586 19.98-11.949 0-21.648-9.6992-21.648-21.648s9.6992-21.648 21.648-21.648c4.6289 0 8.9219 1.457 12.441 3.9375h-2.6016c-2.1719 0-3.9375 1.7617-3.9375 3.9336s1.7656 3.9375 3.9375 3.9375h11.809c2.1758 0 3.9336-1.7617 3.9336-3.9375v-11.809c0-2.1719-1.7617-3.9336-3.9336-3.9336-2.1719 0-3.9375 1.7617-3.9375 3.9336z"
          fill-rule="evenodd"
        />
      </svg>
    </button>
  );
}
