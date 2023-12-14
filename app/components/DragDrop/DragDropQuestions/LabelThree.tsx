import { phaseAtom, readOneQuestionsAtom } from "@/store";
import { useAtomValue } from "jotai";

export default function LabelThree() {
  const phase = useAtomValue(phaseAtom);
  const readOneQuestions = useAtomValue(readOneQuestionsAtom);
  // if (readOneQuestions[2].oneChecked && phase === 2) {
  return (
    <div
      className={
        readOneQuestions[2].twoChecked && phase === 2
          ? "absolute left-[612px] top-[26px] z-[30] h-[200px] w-3 border-2 border-[#0E5258] opacity-100 transition-opacity duration-500"
          : "absolute left-[612px] top-[26px] z-[30] h-[200px] w-3 border-2 border-[#0E5258] opacity-0 transition-opacity duration-500"
      }
    >
      {" "}
      {/* <span className="absolute left-1/2 block -translate-x-1/2 -translate-y-6 text-center text-base text-[#0E5258]">
          Locus 1
        </span> */}
      <span className="absolute left-4 top-3/4 my-auto -translate-y-1/2 text-base text-[#0E5258]">
        Sequencing depth: 6
      </span>
      <div className="absolute z-10 h-[105%] w-2 -translate-x-1 -translate-y-2 bg-white"></div>
    </div>
  );
  // } else {
  //   return null;
  // }
}
