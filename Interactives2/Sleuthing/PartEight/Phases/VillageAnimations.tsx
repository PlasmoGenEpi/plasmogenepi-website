import { useAtomValue } from "jotai";
import PlayButton from "../Pentagon/AnimationComponents/PlayButton";
import AnimationPentagon from "../Pentagon/AnimationPentagon";
import AnimationPentagonSideBySide from "../Pentagon/AnimationPentagonSideBySide";
import { phaseAtom } from "@/data/Interactives/interactiveStore";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";

export default function VillageAnimations() {
  const phase = useAtomValue(phaseAtom);
  return (
    <div className="grid gap-16 md:grid-cols-2">
      <div className="">
        <FormHeader
          text={`Village Transmission Network ${
            phase === 29.5 ? "(Hypothetical)" : ""
          }
`}
        />
        <div className="relative">
          <AnimationPentagon />
          <PlayButton />
        </div>
      </div>
      <AnimationPentagonSideBySide />
    </div>
  );
}
