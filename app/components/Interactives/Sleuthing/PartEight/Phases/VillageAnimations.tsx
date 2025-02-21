import { useAtomValue } from "jotai";
import PlayButton from "../Pentagon/AnimationComponents/PlayButton";
import AnimationPentagon from "../Pentagon/AnimationPentagon";
import AnimationPentagonSideBySide from "../Pentagon/AnimationPentagonSideBySide";
import { phase2Atom } from "@/data/Interactives/interactiveStore";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export default function VillageAnimations() {
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
      rightHeader={
        phase >= 24 && phase !== 29.5 && phase < 34 ? (
          <h2 className="text-center text-xl font-bold md:text-left">
            <span className="">
              {phase >= 30 ? "F" : phase === 29 ? "G" : phase >= 24 ? "E" : ""}
            </span>
            <svg
              className="mx-1 inline-block -translate-y-0.5"
              width="12pt"
              height="12pt"
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m1171.7 529.2-395.04-395.04c-17.961-18.898-42.789-29.746-68.859-30.082-26.066-0.33594-51.168 9.8633-69.609 28.289-18.445 18.43-28.668 43.52-28.352 69.59 0.3125 26.066 11.137 50.906 30.02 68.883l233.52 233.16h-776.64c-34.555 0-66.484 18.434-83.762 48.359-17.277 29.926-17.277 66.797 0 96.719 17.277 29.926 49.207 48.363 83.762 48.363h774.48l-231.36 231.72c-23.41 24.629-32.176 59.738-23.094 92.48 9.082 32.742 34.68 58.32 67.434 67.375 32.75 9.0508 67.852 0.25391 92.461-23.176l395.04-395.04c18.207-18.098 28.406-42.73 28.32-68.402 0.0625-0.79688 0.0625-1.6016 0-2.3984 0.058594-0.80078 0.058594-1.6016 0-2.3984-0.007812-25.652-10.195-50.254-28.32-68.402z" />
            </svg>

            <span className="">
              {phase >= 30
                ? "H"
                : phase >= 24 && phase < 28
                ? "G"
                : phase >= 28
                ? "I"
                : ""}
            </span>
          </h2>
        ) : phase === 29.5 ? (
          `Reassessing`
        ) : phase >= 34 && phase < 36 ? (
          "Transmissions"
        ) : phase >= 36 && phase < 40 ? (
          "Questions"
        ) : (
          ""
        )
      }
      leftContent={<AnimationPentagon />}
      rightContent={<AnimationPentagonSideBySide />}
    />
  );

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
