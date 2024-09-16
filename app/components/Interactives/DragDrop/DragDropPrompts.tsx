import { usePrevious } from "@/components/hooks";
import {
  dragDropCompletionAtom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import { chimaeraPlacedAtom } from "./DragDropElements/ReferenceGenome";
import GenotypeResult from "../Shared/Genotyping/GenotypeResult";

let sampleRef = [
  "A",
  "T",
  "T",
  "G",
  "A",
  "T",
  "C",
  "G",
  "T",
  "C",
  "C",
  "A",
  "A",
  "A",
  "G",
];
let sampleRead = [
  "A",
  "A",
  "T",
  "G",
  "A",
  "T",
  "C",
  "C",
  "T",
  "C",
  "C",
  "A",
  "A",
  "T",
  "C",
];

export default function DragDropPrompts() {
  const phase = useAtomValue(phaseAtom);
  const completion = useAtomValue(dragDropCompletionAtom);
  const prevPhase = usePrevious(phase, 0);
  const forwards = phase >= prevPhase.current ? true : false;
  const chimaeraPlaced = useAtomValue(chimaeraPlacedAtom);

  const complete = completion[phase];
  const skippable = false;

  return (
    <div className="mb-8  text-pretty sm:px-2 md:px-0">
      <div className="flex justify-between py-2">
        <button
          id="interactive-top"
          className="sr-only focus:not-sr-only focus:absolute focus:px-1 focus:py-0.5"
        >
          Top of Interactive
        </button>
        <div
          className={`${complete ? "" : "invisible"} ml-auto flex items-center gap-2`}
        >
          <span className="ml-auto text-lg font-normal">(Complete)</span>
          <svg
            className="-translate-y-1 fill-current"
            width="16pt"
            height="16pt"
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m880 400c0-154.64-125.36-280-280-280s-280 125.36-280 280v240h80v-240c0-110.46 89.543-200 200-200s200 89.543 200 200v240h80z" />
              <path d="m200 600.23v399.53c0 44.312 35.93 80.234 79.633 80.234h640.73c43.98 0 79.633-35.883 79.633-80.234v-399.53c0-44.312-35.93-80.234-79.633-80.234h-640.73c-43.98 0-79.633 35.883-79.633 80.234z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
        <div className="flex flex-col-reverse justify-between gap-2 text-xl font-bold md:flex-row md:gap-8">
          {phase < 5 && <h5>Step 1</h5>}
          {phase >= 5 && phase <= 8 && <h5>Step 2</h5>}
          {phase > 8 && <h5>Step 3</h5>}
        </div>
        <div className="leading-[23px]">
          {phase <= 4 && (
            <ol className="list flex list-decimal flex-col gap-2 px-4">
              <li className={phase > 1 ? `text-gray-500` : forwards ? `` : ""}>
                Press run to view the reference genome, a sequence of 51 DNA
                base letters A, G, C, and T.
              </li>
              <li
                className={
                  phase > 2
                    ? `text-gray-500`
                    : phase === 2 && forwards
                      ? `fadeIn500`
                      : phase === 2
                        ? ""
                        : "invisible"
                }
              >
                Press run again to generate 10 reads, each of which are
                sequences of 15 DNA base letters.
              </li>
              <li
                className={
                  phase > 3
                    ? `text-gray-500`
                    : phase === 3 && forwards
                      ? `fadeIn500`
                      : phase === 3
                        ? ""
                        : "invisible"
                }
              >
                Drag the reads to the matching position in the reference genome.
              </li>
              <li
                className={
                  phase > 4
                    ? `text-gray-500`
                    : phase === 4 && forwards
                      ? `fadeIn500`
                      : phase === 4
                        ? ""
                        : "invisible"
                }
              >
                Answer the following questions.
              </li>
            </ol>
          )}
          {phase > 4 && phase < 8 && (
            <ol className="list flex list-decimal flex-col gap-2 px-4">
              <li className={phase > 5 ? `text-gray-500` : forwards ? `` : ""}>
                Now run the simulation to generate 10 new reads. This time, some
                of the reads will contain mutations, false mutations, off target
                errors, and chimera errors.
              </li>
              <li
                className={
                  phase > 6
                    ? `text-gray-500`
                    : phase === 6 && forwards
                      ? `fadeIn500`
                      : phase === 6
                        ? ""
                        : "invisible"
                }
              >
                Drag and drop the reads to the matching positions in the
                reference genome. Reads that don't match the reference genome
                can be dropped in the trash below. Then press run again to
                generate 10 more reads.
              </li>
              <li
                className={
                  phase > 7
                    ? `text-gray-500`
                    : phase === 7 && forwards
                      ? `fadeIn500`
                      : phase === 7
                        ? ""
                        : "invisible"
                }
              >
                Place the next 10 reads.
              </li>
              <li
                className={
                  phase > 8
                    ? `text-gray-500`
                    : phase === 7.5 && forwards
                      ? `fadeIn500`
                      : phase === 7.5
                        ? ""
                        : "invisible"
                }
              >
                Answer the questions below.
              </li>
            </ol>
          )}
          {phase === 8 && (
            <div className="flex flex-col gap-2">
              <p className={chimaeraPlaced ? "text-gray-500" : ""}>
                Well done! While two of the reads you discarded were
                exceptionally erroneous, the other one is noteworthy for a
                different reason. Align this read where the first half most
                closely matches the reference genome.{" "}
              </p>
              {/* <p className={chimaeraPlaced ? "fadeIn500" : "invisible"}>
                Sequencing and library preparations are not perfect processes.
                Many of the resulting sequences correspond to off-target
                amplification (e.g. from the human DNA in our samples) or may be
                completely spurious sequences. Some reads may look like a
                correct one, partially matching the reference genome, but still
                be spurious. A common type of error that occurs during amplicon
                sequencing is a chimera formed from a combination of two
                different amplicons that occurs during PCR. Chimeras can be
                detected because part of the sequence will match well with one
                amplicon, while another part will match well with a different
                amplicon. These reads also need to be discarded, since they
                don't represent actual sequences in the genome.
              </p> */}
            </div>
          )}
          {(phase === 9 || phase === 9.5) && (
            <div>
              <p>
                View the same reads that were matched to the reference genome in
                the last step. We will start by correcting our data. Identify
                and select any false mutations present in the reads below (for
                our purposes we will consider a false mutation a unique
                variation at the allele). Once you have identified all false
                mutations, press Next to answer the questions below.
              </p>
              <div role="img" className="mb-8 mt-4 flex">
                <div
                  role="img"
                  aria-label="select false mutations example"
                  className="relative mx-auto grid grid-rows-2 place-items-center text-center"
                >
                  <div className="absolute -bottom-6 right-2">
                    <svg
                      width="24pt"
                      height="24pt"
                      className=" fill-white"
                      version="1.1"
                      viewBox="0 0 1200 1200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="black"
                        d="m999.6 526.8c0-4.8008-2.3984-28.801-24-52.801-22.801-26.398-58.801-40.801-105.6-44.398-4.8008-7.1992-10.801-14.398-20.398-21.602-26.398-20.398-67.199-31.199-120-32.398-4.8008-6-13.199-13.199-22.801-20.398-24-16.801-54-26.398-91.199-30v-97.203c0-9.6016 1.1992-50.398-26.398-79.199-12-13.199-34.801-28.801-73.199-28.801-39.602 0-62.398 15.602-75.602 28.801-25.199 27.602-25.199 63.602-25.199 72v343.2c-22.801-24-48-50.398-62.398-60-30-22.801-86.398-10.801-118.8 13.199-31.199 22.801-42 57.602-30 91.199 21.602 60 75.602 120 88.801 134.4 12 22.801 66 122.4 114 158.4 25.199 19.199 44.398 98.398 49.199 148.8l2.3984 26.398h453.6v-118.8c6-16.801 20.398-52.801 36-69.602 37.199-37.199 49.199-130.8 49.199-159.6l-0.003906-200.39zm-58.801 199.2c0 34.801-14.398 100.8-32.398 118.8-31.199 31.199-50.398 91.199-51.602 97.199l-1.1992 3.6016v69.602l-343.2-0.003906c-2.3984-13.199-4.8008-30-9.6016-48-14.398-57.602-33.602-94.801-58.801-114-34.801-26.398-84-111.6-99.602-142.8l-4.7969-7.2031c0-1.1992-58.801-61.199-79.199-116.4-2.3984-7.1992-2.3984-13.199 6-21.602 15.602-14.398 45.602-18 52.801-15.602 18 14.398 73.199 73.199 104.4 108l51.602 57.602v-497.99c0-4.8008 1.1992-20.398 9.6016-28.801 6-7.1992 16.801-10.801 32.398-10.801 13.199 0 22.801 3.6016 30 9.6016 9.6016 10.801 10.801 30 10.801 37.199v310.8h58.801v-151.2c54 6 69.602 28.801 72 32.398l2.3984 6v112.8h58.801v-99.602c50.398 4.8008 69.602 20.398 74.398 27.602v114h58.801v-87.602c51.602 7.1992 60 34.801 61.199 40.801v195.6z"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      aspectRatio: 450 / 48,
                    }}
                    className="grid w-[340px] [grid-template-columns:repeat(17,1fr)] "
                  >
                    <span className="block translate-y-0.5 text-2xl">A</span>
                    {sampleRef.map((el, idx) => {
                      return (
                        <span
                          key={idx}
                          className="block translate-y-0.5 text-2xl"
                        >
                          {el}
                        </span>
                      );
                    })}
                    <span className="block translate-y-0.5 text-2xl">T</span>
                  </div>
                  <div
                    style={{
                      aspectRatio: 450 / 48,
                    }}
                    className="grid w-[304px]  border-2 border-black [grid-template-columns:repeat(15,1fr)] "
                  >
                    {sampleRef.map((el, idx) => {
                      return (
                        <span
                          // style={
                          //   sampleRead[idx] !== sampleRef[idx]
                          //     ? {
                          //         fontWeight: "600",
                          //         color: "white",
                          //         WebkitTextStroke: "black",
                          //         WebkitTextStrokeWidth: ".75px",
                          //       }
                          //     : {}
                          // }
                          key={idx}
                          className={`${idx === 14 ? " text-[darkorange]" : ""} block translate-y-0.5 text-2xl`}
                        >
                          {idx === 14 ? "T" : el}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          {(phase === 10 || phase === 10.5) && (
            <div className="flex flex-col gap-2">
              <p>
                Now we will take a closer look at the rest of our reads. View
                the same reads that were matched to the reference genome in the
                last step. Click the letters in the reads where you see the
                mutations, changing the appearance of the letters from normal to
                hollow text. When you have identified all the mutations, press
                Next to answer the questions below.
              </p>
              <div className="mt-4 flex">
                <div
                  role="img"
                  aria-label="select false mutations example"
                  className="relative mx-auto grid grid-rows-2 place-items-center text-center"
                >
                  <div className="absolute -bottom-6 right-2">
                    <svg
                      width="24pt"
                      height="24pt"
                      className=" fill-white"
                      version="1.1"
                      viewBox="0 0 1200 1200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="black"
                        d="m999.6 526.8c0-4.8008-2.3984-28.801-24-52.801-22.801-26.398-58.801-40.801-105.6-44.398-4.8008-7.1992-10.801-14.398-20.398-21.602-26.398-20.398-67.199-31.199-120-32.398-4.8008-6-13.199-13.199-22.801-20.398-24-16.801-54-26.398-91.199-30v-97.203c0-9.6016 1.1992-50.398-26.398-79.199-12-13.199-34.801-28.801-73.199-28.801-39.602 0-62.398 15.602-75.602 28.801-25.199 27.602-25.199 63.602-25.199 72v343.2c-22.801-24-48-50.398-62.398-60-30-22.801-86.398-10.801-118.8 13.199-31.199 22.801-42 57.602-30 91.199 21.602 60 75.602 120 88.801 134.4 12 22.801 66 122.4 114 158.4 25.199 19.199 44.398 98.398 49.199 148.8l2.3984 26.398h453.6v-118.8c6-16.801 20.398-52.801 36-69.602 37.199-37.199 49.199-130.8 49.199-159.6l-0.003906-200.39zm-58.801 199.2c0 34.801-14.398 100.8-32.398 118.8-31.199 31.199-50.398 91.199-51.602 97.199l-1.1992 3.6016v69.602l-343.2-0.003906c-2.3984-13.199-4.8008-30-9.6016-48-14.398-57.602-33.602-94.801-58.801-114-34.801-26.398-84-111.6-99.602-142.8l-4.7969-7.2031c0-1.1992-58.801-61.199-79.199-116.4-2.3984-7.1992-2.3984-13.199 6-21.602 15.602-14.398 45.602-18 52.801-15.602 18 14.398 73.199 73.199 104.4 108l51.602 57.602v-497.99c0-4.8008 1.1992-20.398 9.6016-28.801 6-7.1992 16.801-10.801 32.398-10.801 13.199 0 22.801 3.6016 30 9.6016 9.6016 10.801 10.801 30 10.801 37.199v310.8h58.801v-151.2c54 6 69.602 28.801 72 32.398l2.3984 6v112.8h58.801v-99.602c50.398 4.8008 69.602 20.398 74.398 27.602v114h58.801v-87.602c51.602 7.1992 60 34.801 61.199 40.801v195.6z"
                      />
                    </svg>
                  </div>
                  <div
                    style={{
                      aspectRatio: 450 / 48,
                    }}
                    className="grid w-[340px] [grid-template-columns:repeat(17,1fr)] "
                  >
                    <span className="block pt-0.5 text-2xl">A</span>
                    {sampleRef.map((el, idx) => {
                      return (
                        <span key={idx} className="block pt-0.5 text-2xl">
                          {el}
                        </span>
                      );
                    })}
                    <span className="block pt-0.5 text-2xl">T</span>
                  </div>
                  <div
                    style={{
                      aspectRatio: 450 / 48,
                    }}
                    className="grid w-[304px]  border-2 border-black [grid-template-columns:repeat(15,1fr)] "
                  >
                    {sampleRead.map((el, idx) => {
                      return (
                        <span
                          style={
                            sampleRead[idx] !== sampleRef[idx]
                              ? {
                                  fontWeight: "600",
                                  color: "white",
                                  WebkitTextStrokeColor: "black",
                                  WebkitTextStrokeWidth: ".75px",
                                }
                              : {}
                          }
                          key={idx}
                          className={`${idx === 14 ? "bg-primaryGreen/50 " : ""} block pt-0.5 text-2xl`}
                        >
                          {el}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          {phase === 11 && (
            <div>
              <p>
                With the microhaplotypes identified for both loci, we can
                determine the MOI. Answer the questions below.
              </p>
            </div>
          )}
        </div>
      </div>
      {skippable && (
        <button
          onClick={(e) => {
            let z = document.getElementById("interactive-first");
            if (z) {
              z.focus();
            }
          }}
          className="sr-only focus:not-sr-only focus:absolute focus:p-1"
        >
          Skip Interactive Content
        </button>
      )}
    </div>
  );

  return (
    <div>
      <h5>Step 1</h5>
      <ol className="list list-decimal px-4">
        <li>
          Press run to view the reference genome, a sequence of 51 DNA base
          letters A, G, C, and T.
        </li>
        <li>
          Press run again to generate 10 reads, each of which are sequences of
          15 DNA base letters.
        </li>
        <li>
          Drag the reads to the matching position in the reference genome. Reads
          that don't match the reference genome can be dropped in the trash
          below.
        </li>
      </ol>
    </div>
  );
}