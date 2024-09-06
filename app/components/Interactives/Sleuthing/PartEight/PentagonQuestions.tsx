import {
  partEightPentagonPairViewedAtom,
  partEightPentagonPersonPairAtom,
  partEightPentagonSelectedEdgesAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import {
  checkEdges,
  queuedChangeAtom,
  successQueueAtom,
} from "./Phases/PentagonComparisons";
import CompareGenotypes from "./Genotypes/CompareGenotypes";
import PrimaryButton from "../../Shared/ControlPanel/PrimaryButton";
import { Edge } from "./Pentagon";

function getTypeOfError(queueChange, selectedEdges, success) {
  if (success) {
    for (let k in queueChange) {
      return selectedEdges[k as Edge].selected !== queueChange[k].selected
        ? queueChange[k].selected === true
          ? 2 // Missing
          : 1 // Extra
        : 3; // Directional
    }
  }
}

export default function PentagonQuestions({
  wrongEdges,
}: {
  wrongEdges: string[];
}) {
  const phase = useAtomValue(phaseAtom);
  const [queuedChange, setQueuedChange] = useAtom(queuedChangeAtom);
  const [successQueue, setSuccessQueue] = useAtom(successQueueAtom);
  const [selectedEdges, setSelectedEdges] = useAtom(
    partEightPentagonSelectedEdgesAtom,
  );
  const [activePair, setActivePair] = useAtom(partEightPentagonPersonPairAtom);

  function applyQueuedChange() {
    let newSelectedEdges = { ...selectedEdges };
    for (let k in queuedChange) {
      newSelectedEdges[k as Edge] = queuedChange[k];
    }
    setQueuedChange(null);
    setSuccessQueue(null);
    setSelectedEdges(newSelectedEdges);
  }

  console.log(getTypeOfError(queuedChange, selectedEdges, successQueue));

  return (
    <div>
      <h2 className="mb-8 text-center text-xl font-bold md:text-left">
        Results
      </h2>
      <div className="text-sm font-bold">
        Incorrect connections:{" "}
        {successQueue
          ? checkEdges(selectedEdges).length - 1
          : checkEdges(selectedEdges).length}
      </div>
      <div className={`} mt-8 p-4`}>
        <CompareGenotypes
          firstPersonId={activePair[1]}
          secondPersonId={activePair[2]}
        />
      </div>
      {queuedChange && queuedChange["GI"] ? (
        <div className="bg-primaryBlue/20 p-4 text-sm md:p-8">
          <p>
            You have very good intuition &ndash; these two cases have more loci
            related than would be expected by chance. The MOI is only one for
            both cases, so we would not expect to see more than five loci
            matching if the cases were completely unrelated (blue bars in the
            histogram) and we see 8 matches (IBS of 0.67). However, we also know
            that they are not directly related by transmission, since we would
            then expect them to be identical (IBS=1). What do you think could
            explain this intermediate level of relatedness?
          </p>
        </div>
      ) : (
        <div>
          <p>
            {getTypeOfError(queuedChange, selectedEdges, successQueue) === 1
              ? "Recall that we expect IBS to be 1 (all 12 loci matching) if there is direct transmission. Here, IBS is less than 1, so that is evidence against direct transmission between these two cases"
              : getTypeOfError(queuedChange, selectedEdges, successQueue) === 2
                ? "IBS in this case is quite high, 1, which is consistent with direct transmission and greater than we would expect to see by chance."
                : getTypeOfError(queuedChange, selectedEdges, successQueue) ===
                    3
                  ? "You are correct that there seems to be evidence of direct transmission between these two cases, since IBS is 1. Remember that Case (E or F, depending on the edge) reported a history of travel and occurred several weeks before Case (G, H, or I, depending on the edge), making it more likely that transmission occurred in the other direction."
                  : ""}
          </p>
        </div>
      )}
      <div className="flex">
        <PrimaryButton
          callback={() => {
            applyQueuedChange();
          }}
          disabled={!successQueue}
          text="Continue"
          className="ml-auto mr-4 mt-4 bg-green-300 p-2 text-sm disabled:bg-green-300/50"
        />
      </div>
    </div>
  );
}
