import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
  globalDragAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import {
  charSize,
  paddingFromBorder,
  paddingLeft,
  rowDistance,
  topDistanceIncludingBorder,
} from "../Container";
import LocusOneLabel from "./LocusOneLabel";
import { useAtomValue } from "jotai";
import LocusTwoLabel from "./LocusTwoLabel";
import SequencingOneLabel from "./SequencingOneLabel";
import SNPLabel from "./SNPLabel";
import MicrohaplotypeLabel from "./MicrohaplotypeLabel";
import CloneLabel from "./CloneLabel";

export default function Labels() {
  const phase = useAtomValue(phaseAtom);
  const globalDrag = useAtomValue(globalDragAtom);
  const dragDropQuestions = useAtomValue(dragDropQuestionsAtom);
  const completion = useAtomValue(dragDropCompletionAtom);
  return (
    <div
      className={`${globalDrag || phase === 9 ? "pointer-events-none" : [4].includes(phase) ? "pointer-events-auto" : "pointer-events-none"} absolute inset-0 text-lg`}
    >
      <LocusOneLabel
        style={{
          animationDelay: "500ms",
        }}
        labelClassName="text-primaryGreen [fontSize:15px] translate-y-1 block fadeIn500"
        left={3 * charSize + paddingLeft}
        size={charSize}
        // top={-72 + topDistanceIncludingBorder}
        top={paddingFromBorder - rowDistance * 1.5}
        text={"Locus 1"}
        active={dragDropQuestions[1] === 0 && phase === 4}
      />
      <LocusTwoLabel
        style={{
          animationDelay: "500ms",
        }}
        labelClassName="text-primaryGreen [fontSize:15px] translate-y-1 block fadeIn500"
        left={32 * charSize + paddingLeft}
        size={charSize}
        top={paddingFromBorder - rowDistance * 1.5}
        text={"Locus 2"}
        active={dragDropQuestions[1] === 0 && phase === 4}
      />
      <SequencingOneLabel
        labelStyle={{
          animationDelay: "500ms",
        }}
        labelClassName="text-primaryGreen [fontSize:15px] translate-y-1 block fadeIn500 text-right translate-x-2"
        readRowHeight={rowDistance}
        text="Sequencing depth: 6"
        rowNumber={6.25}
        left={18 * charSize + paddingLeft}
        size={charSize}
        top={topDistanceIncludingBorder - 4}
        active={phase === 4 && dragDropQuestions[2] === 1}
      />
      <SequencingOneLabel
        labelStyle={{
          animationDelay: "500ms",
        }}
        labelClassName="text-primaryGreen [fontSize:15px] translate-y-1 block fadeIn500 text-right translate-x-2"
        readRowHeight={rowDistance}
        text="Sequencing depth: 4"
        rowNumber={4.25}
        left={47 * charSize + paddingLeft}
        size={charSize}
        top={topDistanceIncludingBorder - 4}
        active={phase === 4 && dragDropQuestions[2] === 1}
      />
      {phase >= 10.5 && dragDropQuestions[5] === 1 && (
        <div>
          <SNPLabel
            top={50}
            left={charSize * 4 + paddingLeft}
            trigger={!completion[phase]}
          />
          <SNPLabel top={50} left={charSize * 11 + paddingLeft} />
          <SNPLabel top={50} left={charSize * 16 + paddingLeft} />
          <SNPLabel top={50} left={charSize * 35 + paddingLeft} />
          <SNPLabel top={50} left={charSize * 38 + paddingLeft} />
          <SNPLabel top={50} left={charSize * 43 + paddingLeft} />
        </div>
      )}
      {phase >= 10.5 && dragDropQuestions[6] === 2 && (
        <div>
          <MicrohaplotypeLabel
            trigger={phase === 10.5 && !completion[phase]}
            top={paddingFromBorder + rowDistance * 2}
            left={400}
            vals={[0, 0, 0]}
            className="border-2 border-microBrown bg-microBrown"
            possibleVals={[
              {
                reference: "G",
                alternate: "C",
              },
              {
                reference: "G",
                alternate: "A",
              },
              {
                reference: "A",
                alternate: "C",
              },
            ]}
          />
          <MicrohaplotypeLabel
            top={paddingFromBorder + 22 + rowDistance * 5.5}
            left={400}
            vals={[0, 1, 0]}
            className="border-2 border-microRed bg-microRed"
            possibleVals={[
              {
                reference: "G",
                alternate: "C",
              },
              {
                reference: "G",
                alternate: "A",
              },
              {
                reference: "A",
                alternate: "C",
              },
            ]}
          />
          <MicrohaplotypeLabel
            top={paddingFromBorder + 22 + rowDistance * 9}
            left={400}
            vals={[1, 1, 1]}
            className="border-2 border-microOrange bg-microOrange"
            possibleVals={[
              {
                reference: "G",
                alternate: "C",
              },
              {
                reference: "G",
                alternate: "A",
              },
              {
                reference: "A",
                alternate: "C",
              },
            ]}
          />
          <MicrohaplotypeLabel
            top={paddingFromBorder + rowDistance * 2}
            left={920}
            vals={[0, 0, 0]}
            className="border-2 border-microGrey bg-microGrey"
            possibleVals={[
              {
                reference: "T",
                alternate: "G",
              },
              {
                reference: "A",
                alternate: "G",
              },
              {
                reference: "A",
                alternate: "T",
              },
            ]}
          />
          <MicrohaplotypeLabel
            top={paddingFromBorder + 22 + rowDistance * 6.5}
            left={920}
            vals={[1, 1, 1]}
            className="border-2 border-microPurple bg-microPurple"
            possibleVals={[
              {
                reference: "T",
                alternate: "G",
              },
              {
                reference: "A",
                alternate: "G",
              },
              {
                reference: "A",
                alternate: "T",
              },
            ]}
          />
        </div>
      )}
      {phase >= 11 && dragDropQuestions[7] === 2 && (
        <div>
          <CloneLabel
            trigger={dragDropQuestions[7] === 2}
            className="bg-cloneYellow"
            top={paddingFromBorder + rowDistance * 2}
            left={1 * charSize}
          />
          <CloneLabel
            className="bg-cloneGreen"
            top={paddingFromBorder + rowDistance * 6}
            left={1 * charSize}
          />
          <CloneLabel
            className="bg-cloneBlue"
            top={paddingFromBorder + rowDistance * 9.5}
            left={1 * charSize}
          />
          <CloneLabel
            className="bg-cloneBlue"
            top={paddingFromBorder + rowDistance * 2}
            left={30 * charSize}
          />
          <CloneLabel
            className="bg-cloneYellow"
            top={paddingFromBorder + rowDistance * 6}
            left={30 * charSize}
          />
          <CloneLabel
            className="bg-cloneGreen"
            top={paddingFromBorder + rowDistance * 8}
            left={30 * charSize}
          />
        </div>
      )}
    </div>
  );
}
