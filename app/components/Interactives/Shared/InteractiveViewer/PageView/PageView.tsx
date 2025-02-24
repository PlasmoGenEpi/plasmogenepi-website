import { useAtom } from "jotai";
import { InteractiveViewSettings } from "../InteractiveViewer";
import PartZero from "../../../Sleuthing/PartZero/PartZero";
import PartOne from "../../../Sleuthing/PartOne/PartOne";
import PartTwo from "../../../Sleuthing/PartTwo/PartTwo";
import PartThree from "../../../Sleuthing/PartThree/PartThree";
import PartFour from "../../../Sleuthing/PartFour/PartFour";
import PartFive from "../../../Sleuthing/PartFive/PartFive";
import StepSix from "../../../Sleuthing/StepSix/StepSix";
import InteractivePrompt from "../../misc/InteractivePrompt";
import Part2Intro from "../../../Sleuthing/Part2Intro/Part2Intro";
import PartSix from "../../../Sleuthing/PartSix/PartSix";
import PartSeven from "../../../Sleuthing/PartSeven/PartSeven";
import PartEight from "../../../Sleuthing/PartEight/PartEight";
// import PartOne from "@/app/components/Interactives/Sleuthing/PartOne/PartOne";
// import PartZero from "@/app/components/Interactives/Sleuthing/PartZero/PartZero";
// import PartTwo from "@/app/components/Interactives/Sleuthing/PartTwo/PartTwo";
// import PartThree from "@/app/components/Interactives/Sleuthing/PartThree/PartThree";
// import PartFour from "@/app/components/Interactives/Sleuthing/PartFour/PartFour";
// import PartFiveControlPanel from "@/app/components/Interactives/Sleuthing/PartFive/PartFiveControlPanel";
// import PartFive from "@/app/components/Interactives/Sleuthing/PartFive/PartFive";
// import StepSix from "@/app/components/Interactives/Sleuthing/StepSix/StepSix";
// import Part2Intro from "@/app/components/Interactives/Sleuthing/Part2Intro/Part2Intro";
// import PartSix from "@/app/components/Interactives/Sleuthing/PartSix/PartSix";
// import InteractivePrompt from "../../misc/InteractivePrompt";
// import PartSeven from "@/app/components/Interactives/Sleuthing/PartSeven/PartSeven";
// import PartEight from "@/app/components/Interactives/Sleuthing/PartEight/PartEight";

export default function PageView({
  currentView,
}: {
  currentView: InteractiveViewSettings;
}) {
  // const [currentView, setCurrentView] = useAtom(currentViewAtom);
  let { module, section, phase } = currentView;

  console.log("rendered");

  if (module === "2.6") {
    if (section === 0 || section === null) {
      return <PartZero />;
    } else if (section === 1) {
      return <PartOne />;
    } else if (section === 2) {
      return <PartTwo fixedPanel={false} />;
    } else if (section === 3) {
      return <PartThree fixedPanel={false} />;
    } else if (section === 4) {
      return <PartFour fixedPanel={false} />;
    } else if (section === 5) {
      return <PartFive fixedPanel={false} />;
    } else if (section === 6) {
      return <StepSix />;
    } else if (section === 7) {
      return (
        <div>
          <InteractivePrompt
            complete={true}
            title={<h1>Summary</h1>}
            instructions={
              <p>
                Amazing work! You successfully interpreted the genotypes of a
                set of samples where the true MOI in your population was
                unknown! Using that information, you were able to demonstrate
                that the National Malaria Control Program is, in fact,
                controlling malaria with its new vector control interventions.
                Parabéns camarada !!!
              </p>
            }
          />
          <div className="max-w-2xl font-helvetica [font-size:15px]">
            <h2 className="mb-4 text-xl font-bold">Key Takeaways</h2>
            <p>
              You covered a lot in this activity! Here are a few key takeaways:
            </p>
            <ul className="mt-4 flex list-disc flex-col gap-4 px-4">
              <li>
                Both SNPs and microhaplotypes can be used to estimate MOI.
              </li>
              <li>
                Microhaplotypes have more diversity than SNPs and provide a more
                accurate reflection of MOI, particularly when MOI is high.
              </li>
              <li>
                Even though microhaplotypes are more easy to interpret, they are
                not perfect.
              </li>
              <li>
                Getting accurate MOI even from a relatively small number of
                samples from your population may provide insight into changes in
                transmission, along with other epidemiological and genetic data.
              </li>
            </ul>
            <div className="py-8">
              <button
                onClick={() => {
                  navigator.clipboard.writeText("HildrusPoindexter1901");
                }}
                className="copy-tooltip ml-auto p-2 pb-1 underline"
              >
                Copy Code
              </button>
              <p className="text-center text-2xl text-interactiveBlue">
                HildrusPoindexter1901
              </p>
            </div>
          </div>
        </div>
      );
    }
  } else if (module === "4.4") {
  } else if (module === "5.6") {
    // return <div>Hello world</div>;
    if (section === 0) {
      return <Part2Intro />;
    } else if (section === 1) {
      return <PartSix />;
    } else if (section === 2) {
      return <PartSeven />;
    } else if (section === 3) {
      return <PartEight fixed={false} />;
    }
  }
}
