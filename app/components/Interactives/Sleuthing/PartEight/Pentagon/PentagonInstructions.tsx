import {
  partEightPentagonSelectedEdgesAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import { pentagonViewAtom } from "./PentagonViewer";
import InteractivePrompt from "@/components/Interactives/Shared/misc/InteractivePrompt";

export default function PentagonInstructions() {
  const phase = useAtomValue(phaseAtom);
  const view = useAtomValue(pentagonViewAtom);
  const selectedEdges = useAtomValue(partEightPentagonSelectedEdgesAtom);
  if (phase === 11) {
    if (view === null && !selectedEdges.EF.visited) {
      return (
        <div>
          <p>
            Now let&apos;s compare the genotypes. First, take a look at the two
            cases with travel history (likely imported). Before we do,
            let&apos;s make a prediction.
          </p>
        </div>
      );
    } else if (view === "EF") {
      return (
        <div>
          <p>
            Ok &ndash; let&apos;s see if the genetic data for these cases match
            your expectations. Select the + icon to compare the genotypes and
            IBS between these two infections.
          </p>
        </div>
      );
    } else if (view === "E") {
      return (
        <div>
          <p>
            Great &ndash; your investigation is starting to come together. Next,
            we might be interested to see if either of these potentially
            imported cases might have been responsible for infecting the three
            other cases (G, H, and I). Before we look at the genotyping data,
            what basic piece of epidemiologic data might you want to know in
            addition to the fact that they didn&apos;t report recent travel?
            Why?
          </p>
        </div>
      );
    }
  }
}
