import { phaseAtom, readOneQuestionsAtom } from "@/store";
import { useAtomValue } from "jotai";

export default function LabelOne() {
  const phase = useAtomValue(phaseAtom);
  const readOneQuestions = useAtomValue(readOneQuestionsAtom);
  // if (readOneQuestions[1].twoChecked && phase === 2) {
  return (
    // <div className="fadeIn500 absolute -top-2 left-[366px] h-4 w-[244px] border-2 border-[#0E5258]">
    <div
      className={
        readOneQuestions[1].oneChecked && phase === 2
          ? "absolute -top-2 left-[366px] z-[30] h-4 w-[244px] border-2 border-[#0E5258] opacity-100 transition-opacity duration-500"
          : "absolute -top-2 left-[366px] z-[30] h-4 w-[244px] border-2 border-[#0E5258] opacity-0 transition-opacity duration-500"
      }
    >
      <span className="absolute left-1/2 block -translate-x-1/2 -translate-y-6 text-center text-base text-[#0E5258]">
        Locus 1
      </span>
      <div className="absolute z-10 h-full w-[105%] -translate-x-2 translate-y-1/2 bg-white"></div>
    </div>
  );
  // } else {
  //   return null;
  // }
}
