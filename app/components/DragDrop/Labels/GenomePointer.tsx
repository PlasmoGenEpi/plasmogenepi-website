import { dragDropQuestionsAtom, phaseAtom } from "@/store";
import { useAtomValue } from "jotai";

export default function GenomePointer({
  x,
  y,
  delay,
}: {
  x: number;
  y: number;
  delay?: number;
}) {
  const dragDropQuestions = useAtomValue(dragDropQuestionsAtom);
  const phase = useAtomValue(phaseAtom);

  return (
    <div>
      <div
        className={
          dragDropQuestions[2][1] === 2 && phase === 10
            ? "fadeIn500 absolute flex rotate-180 flex-col text-lg opacity-100 transition-all duration-500"
            : "hidden"
        }
        style={{
          animationDelay: `${delay}ms`,
          // top: first
          //   ? read2Questions[2].oneChecked
          //     ? y
          //     : y - 96
          //   : read2Questions[2].oneChecked
          //     ? y - 64
          //     : y - 96,
          top: -16,
          left: x,
        }}
      >
        <svg
          fill="#0E5258"
          width="10pt"
          height="10pt"
          version="1.1"
          viewBox="0 0 1200 1200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m600 0-525 525h300v675h450v-675h300z" />
        </svg>
      </div>
    </div>
  );
}
