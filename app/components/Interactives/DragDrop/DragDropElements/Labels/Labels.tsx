import {
  dragDropCompletionAtom,
  dragDropQuestionsAtom,
  globalDragAtom,
  phase3Atom,
} from "@/data/Interactives/interactiveStore";
import LocusOneLabel from "./LocusOneLabel";
import { useAtomValue } from "jotai";
import LocusTwoLabel from "./LocusTwoLabel";
import SequencingOneLabel from "./SequencingOneLabel";
import SNPLabel from "./SNPLabel";
import MicrohaplotypeLabel from "./MicrohaplotypeLabel";
import CloneLabel from "./CloneLabel";
import { currentView3Atom } from "../../../Shared/InteractiveViewer/InteractiveViewer";
// import { currentView3Atom } from "@/app/components/Interactives/Shared/InteractiveViewer/InteractiveViewer";

const topDistanceIncludingBorder = 172;
const borderWidth = 24;
const paddingFromBorder = topDistanceIncludingBorder - borderWidth;
const paddingLeft = 32;
const paddingRight = 64;
const rowHeight = 32;
const rowDistance = 32;
const charSize = 18;
const readStartOffset = 18;
const dropContainerWidth = 1148;

export default function Labels() {
  // const phase = useAtomValue(phase3Atom);
  const currentView = useAtomValue(currentView3Atom);
  const globalDrag = useAtomValue(globalDragAtom);
  const dragDropQuestions = useAtomValue(dragDropQuestionsAtom);
  const completion = useAtomValue(dragDropCompletionAtom);

  const { phase, section } = currentView;

  return (
    <div
      className={`${
        globalDrag
          ? "pointer-events-none"
          : [4].includes(phase)
          ? "pointer-events-auto"
          : "pointer-events-none"
      } absolute inset-0 text-lg text-interactiveBlue dark:text-emerald-500`}
    >
      {/* <LocusOneLabel
        style={{
          animationDelay: "500ms",
        }}
        labelClassName="text-primaryGreen [fontSize:15px] translate-y-1 block fadeIn500 text-right"
        left={3 * charSize + paddingLeft}
        size={charSize}
        // top={-72 + topDistanceIncludingBorder}
        top={paddingFromBorder - rowDistance * 1.5}
        text={"Locus 1"}
        active={dragDropQuestions[1] === 0 && section === 1 && phase === 1}
      />
      <LocusTwoLabel
        style={{
          animationDelay: "500ms",
        }}
        labelClassName="text-primaryGreen [fontSize:15px] translate-y-1 block fadeIn500 text-left"
        left={32 * charSize + paddingLeft}
        size={charSize}
        top={paddingFromBorder - rowDistance * 1.5}
        text={"Locus 2"}
        active={dragDropQuestions[1] === 0 && section === 1 && phase === 1}
      /> */}
      <LocusOneLabel
        style={{
          animationDelay: "500ms",
        }}
        labelClassName={`${
          section === 1 ? "" : "invisible"
        } text-primaryGreen [fontSize:15px] translate-y-1 block fadeIn500`}
        left={3 * charSize + paddingLeft}
        size={charSize}
        // top={-72 + topDistanceIncludingBorder}
        top={paddingFromBorder - rowDistance * 1.5}
        text={"Locus 1"}
        active={
          dragDropQuestions[1] === 0 &&
          (section === 1 ||
            (section === 2 && phase === 0 && !completion?.[2]?.[0]))
        }
      />
      <LocusTwoLabel
        style={{
          animationDelay: "500ms",
        }}
        labelClassName={`${
          section === 1 ? "" : "invisible"
        } text-primaryGreen [fontSize:15px] translate-y-1 block fadeIn500`}
        left={32 * charSize + paddingLeft}
        size={charSize}
        top={paddingFromBorder - rowDistance * 1.5}
        text={"Locus 2"}
        active={
          dragDropQuestions[1] === 0 &&
          (section === 1 ||
            (section === 2 && phase === 0 && !completion?.[2]?.[0]))
        }
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
        active={section === 1 && phase === 1 && dragDropQuestions[2] === 1}
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
        active={section === 1 && phase === 1 && dragDropQuestions[2] === 1}
      />
      {section === 3 && phase >= 1 && dragDropQuestions[5] === 1 && (
        <div>
          <SNPLabel
            top={topDistanceIncludingBorder - rowDistance * 1.2}
            left={charSize * 4 + paddingLeft}
            trigger={!completion?.[3]?.[1]}
          />
          <SNPLabel
            top={topDistanceIncludingBorder - rowDistance * 1.2}
            left={charSize * 11 + paddingLeft}
          />
          <SNPLabel
            top={topDistanceIncludingBorder - rowDistance * 1.2}
            left={charSize * 16 + paddingLeft}
          />
          <SNPLabel
            top={topDistanceIncludingBorder - rowDistance * 1.2}
            left={charSize * 35 + paddingLeft}
          />
          <SNPLabel
            top={topDistanceIncludingBorder - rowDistance * 1.2}
            left={charSize * 38 + paddingLeft}
          />
          <SNPLabel
            top={topDistanceIncludingBorder - rowDistance * 1.2}
            left={charSize * 43 + paddingLeft}
          />
        </div>
      )}
      {section === 3 && phase >= 1 && dragDropQuestions[6] === 2 && (
        <div>
          <MicrohaplotypeLabel
            trigger={phase === 10.5 && !completion?.[phase]}
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
      {section === 3 && phase === 2 && dragDropQuestions[7] === 2 && (
        <div>
          <CloneLabel
            trigger={dragDropQuestions[7] === 2}
            className="bg-cloneYellow"
            top={paddingFromBorder + rowDistance * 2}
            left={2 * charSize}
          />
          <CloneLabel
            className="bg-cloneGreen"
            top={paddingFromBorder + rowDistance * 6}
            left={2 * charSize}
          />
          <CloneLabel
            className="bg-cloneBlue"
            top={paddingFromBorder + rowDistance * 9.5}
            left={2 * charSize}
          />
          <CloneLabel
            className="bg-cloneYellow"
            top={paddingFromBorder + rowDistance * 2}
            left={31 * charSize}
          />
          <CloneLabel
            className="bg-cloneBlue"
            top={paddingFromBorder + rowDistance * 6}
            left={31 * charSize}
          />
          <CloneLabel
            className="bg-cloneGreen"
            top={paddingFromBorder + rowDistance * 8}
            left={31 * charSize}
          />
        </div>
      )}
    </div>
  );
}
