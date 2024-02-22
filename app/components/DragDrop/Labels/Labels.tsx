import { dragDropQuestionsAtom, phaseAtom } from "@/store";
import { useAtomValue } from "jotai";
import LabelOne from "./LabelOne";
import LabelTwo from "./LabelTwo";
import LabelThree from "./LabelThree";
import GenomePointer from "./GenomePointer";
import MicrohalotypeLabels from "./MicrohaplotypeLabels";

export default function Labels({
  size,
  readRowHeight,
  xOffset,
  yOffset,
}: {
  xOffset: number;
  yOffset: number;
  size: number;
  readRowHeight: number;
}) {
  const phase = useAtomValue(phaseAtom);
  const dragDropQuestions = useAtomValue(dragDropQuestionsAtom);

  // console.log(yOffset);

  return (
    <div className="absolute inset-0 text-base pointer-events-none">
      {phase === 4 && dragDropQuestions[1][1] === 1 ? (
        <LabelOne
          labelClassName="text-primaryGreen -translate-y-2 block"
          left={3 * size + xOffset}
          size={size}
          top={-12 + yOffset}
          text={"Locus 1"}
        />
      ) : null}
      {phase === 4 && dragDropQuestions[1][1] === 1 ? (
        <LabelOne
          labelClassName="text-primaryGreen -translate-y-2 block"
          left={32 * size + xOffset}
          size={size}
          top={-12 + yOffset}
          text={"Locus 2"}
        />
      ) : null}
      {phase === 4 && dragDropQuestions[1][2] === 2 ? (
        <LabelTwo
          // <label className="text-sm text-primaryGreen shrink w-min absolute right-full -translate-x-2">

          labelClassName="text-primaryGreen w-min translate-x-2 shrink text-wrap"
          readRowHeight={readRowHeight}
          text="Sequencing depth: 6"
          rowNumber={6}
          left={18 * size + xOffset}
          size={size}
          top={readRowHeight + yOffset + 16}
        />
      ) : null}
      {phase === 4 && dragDropQuestions[1][2] === 2 ? (
        <LabelTwo
          // <label className="text-sm text-primaryGreen shrink w-min absolute right-full -translate-x-2">

          labelClassName="text-primaryGreen w-min translate-x-2 shrink text-wrap"
          readRowHeight={readRowHeight}
          text="Sequencing depth: 4"
          rowNumber={4}
          left={47 * size + xOffset}
          size={size}
          top={readRowHeight + yOffset + 16}
        />
      ) : // <LabelThree
      //   readRowHeight={readRowHeight}
      //   labelClassName="text-primaryGreen shrink w-min absolute right-full -translate-x-2"
      //   left={30.5 * size}
      //   size={size}
      //   top={readRowHeight}
      //   rowNumber={4}
      //   text="Sequencing depth: 4"
      // />
      null}
      {phase === 10 && (
        <div
          style={{
            left: xOffset,
            top: yOffset + 18,
          }}
          className="absolute"
        >
          <GenomePointer x={size * 4} y={yOffset} />
          <GenomePointer x={size * 9} y={yOffset} />

          <GenomePointer x={size * 11} y={yOffset} />
          <GenomePointer x={size * 16} y={yOffset} />
          <GenomePointer x={size * 35} y={yOffset} />
          <GenomePointer x={size * 38} y={yOffset} />
          <GenomePointer x={size * 43} y={yOffset} />
        </div>
      )}
      {phase >= 11 && dragDropQuestions[2][2] === 1 ? (
        <div>
          <LabelTwo
            // <label className="text-sm text-primaryGreen shrink w-min absolute right-full -translate-x-2">

            labelClassName="text-primaryGreen w-min translate-x-2 shrink text-wrap"
            readRowHeight={readRowHeight + 1}
            // text="Sequencing depth: 6"
            rowNumber={4}
            left={18 * size + xOffset}
            size={size}
            top={readRowHeight + yOffset + 16}
          />
          <LabelTwo
            // <label className="text-sm text-primaryGreen shrink w-min absolute right-full -translate-x-2">

            labelClassName="text-primaryGreen w-min translate-x-2 shrink text-wrap"
            readRowHeight={readRowHeight + 1}
            // text="Sequencing depth: 6"
            rowNumber={2}
            left={18 * size + xOffset}
            size={size}
            top={readRowHeight * 6 + yOffset + 16}
          />
          <LabelTwo
            // <label className="text-sm text-primaryGreen shrink w-min absolute right-full -translate-x-2">

            labelClassName="text-primaryGreen w-min translate-x-2 shrink text-wrap"
            readRowHeight={readRowHeight + 1}
            // text="Sequencing depth: 6"
            rowNumber={2}
            left={18 * size + xOffset}
            size={size}
            top={readRowHeight * 9 + yOffset + 16}
          />
          <LabelTwo
            // <label className="text-sm text-primaryGreen shrink w-min absolute right-full -translate-x-2">

            labelClassName="text-primaryGreen w-min translate-x-2 shrink text-wrap"
            readRowHeight={readRowHeight + 1}
            // text="Sequencing depth: 6"
            rowNumber={1}
            left={18 * size + xOffset}
            size={size}
            top={readRowHeight * 12 + yOffset + 16}
          />

          <LabelTwo
            // <label className="text-sm text-primaryGreen shrink w-min absolute right-full -translate-x-2">

            labelClassName="text-primaryGreen w-min translate-x-2 shrink text-wrap"
            readRowHeight={readRowHeight + 1}
            // text="Sequencing depth: 4"
            rowNumber={4}
            left={47 * size + xOffset}
            size={size}
            top={readRowHeight + yOffset + 16}
          />

          <LabelTwo
            // <label className="text-sm text-primaryGreen shrink w-min absolute right-full -translate-x-2">

            labelClassName="text-primaryGreen w-min translate-x-2 shrink text-wrap"
            readRowHeight={readRowHeight + 1}
            // text="Sequencing depth: 4"
            rowNumber={4}
            left={47 * size + xOffset}
            size={size}
            top={readRowHeight * 6 + yOffset + 16}
          />
        </div>
      ) : null}
      {phase >= 11 && dragDropQuestions[2][2] === 1 && (
        <div className="">
          <MicrohalotypeLabels
            xOffset={xOffset}
            yOffset={yOffset}
            size={size}
            readRowHeight={readRowHeight}
          />
        </div>
      )}
    </div>
  );
}
