import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import { phase2Atom } from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import AnimationPentagon from "../Pentagon/AnimationPentagon";
import AnimationPentagonSideBySide from "../Pentagon/AnimationPentagonSideBySide";
import AnimationPentagon2 from "../Pentagon/AnimationPentagon2/AnimationPentagon2";
import AnimationPentagon2SideBySide from "../Pentagon/AnimationPentagon2/AnimationPentagon2SideBySide/AnimationPentagon2SideBySide";

export default function VillageAnimations2() {
  const phase = useAtomValue(phase2Atom);

  // return (
  //   <div className="max-w-6xl mx-autoa">
  //     <div className="aspect-square mx-auto max-h-[500px]">
  //       <AnimationPentagon />
  //     </div>
  //   </div>
  // );

  return (
    <InteractivePrimaryLayout
      leftHeader={`Village Transmission Network ${
        phase === 29.5 ? "(Hypothetical)" : ""
      }
  `}
      rightHeader={``}
      leftContent={<AnimationPentagon2 />}
      rightContent={<AnimationPentagon2SideBySide />}
      //   rightContent={<AnimationPentagonSideBySide />}
    />
  );
}
