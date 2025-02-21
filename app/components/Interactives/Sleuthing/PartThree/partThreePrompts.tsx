import { ReactElement } from "react";

export const partThreePrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  0: {
    title: <h5>Background</h5>,
    instructions: (
      <div className="flex flex-col gap-4">
        <p>
          You now have data from a new malaria indicator survey, with thousands
          of samples collected across your country, and you genotyped a
          representative set of the samples that were positive. Your lab
          director comes in and tells you that the 12 SNPs actually come from 4
          distinct parts of the genome - each containing 3 SNPs right next to
          each other (i.e. 4 microhaplotypes).
        </p>
        <div className="relative h-48 my-8 dark:brightness-75">
          <div className="absolute flex font-mono overflow-hidden max-w-full top-1/2 -translate-y-1/2 h-8 border border-black w-full">
            <div className="bg-zinc-200 dark:bg-zinc-700 w-[8%]"></div>
            <div className="bg-microBrown w-[4%]"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 w-[24%]"></div>
            <div className="bg-microRed w-[4%]"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 w-[11%]"></div>
            <div className="bg-microPurple w-[4%]"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 grow"></div>
            <div className="bg-microGreen w-[4%]"></div>
            <div className="bg-zinc-200 dark:bg-zinc-700 w-[20%]"></div>

            {/* {Array(150)
                .fill(0)
                .map((el, idx) => {
                  return (
                    <div className="w-3 py-2  text-[10px]" key={idx}>
                      {Math.random() > 0.5
                        ? Math.random() > 0.5
                          ? "A"
                          : "T"
                        : Math.random() > 0.5
                        ? "G"
                        : "C"}
                    </div>
                  );
                })} */}
          </div>
          <div className="absolute text-black  bottom-0 bg-microBrown grid grid-cols-3 p-1 gap-0.5 w-[20cqi] @xl/main:w-[15cqi] @3xl/main:w-[10cqi] text-center text-lg left-[5%] ">
            <label className="absolute -top-6 w-full dark:text-white text-xs first-letter:text-sm">
              L1
            </label>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5">A</span>
            </div>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5">T</span>
            </div>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5">T</span>
            </div>
          </div>
          <div className="absolute text-black  top-6 bg-microRed grid grid-cols-3 p-1 gap-0.5 w-[20cqi] @xl/main:w-[15cqi] @3xl/main:w-[10cqi] text-center text-lg left-[25%]">
            <label className="absolute -top-6 w-full dark:text-white text-xs first-letter:text-sm">
              L2
            </label>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5 alternateAllele">C</span>
            </div>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5">G</span>
            </div>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5 alternateAllele">G</span>
            </div>
          </div>
          <div className="absolute text-black  bottom-0 bg-microPurple grid grid-cols-3 p-1 gap-0.5 w-[20cqi] @xl/main:w-[15cqi] @3xl/main:w-[10cqi] text-center text-lg left-[50%] -translate-x-1/2">
            <label className="absolute -top-6 w-full dark:text-white text-xs first-letter:text-sm">
              L3
            </label>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5 alternateAllele">T</span>
            </div>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5">C</span>
            </div>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5">T</span>
            </div>
          </div>
          <div className="absolute text-black  top-6 bg-microGreen grid grid-cols-3 p-1 gap-0.5 w-[20cqi] @xl/main:w-[15cqi] @3xl/main:w-[10cqi] text-center text-lg right-[15%]">
            <label className="absolute -top-6 w-full dark:text-white text-xs first-letter:text-sm">
              L4
            </label>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5">G</span>
            </div>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5 alternateAllele">A</span>
            </div>
            <div className="aspect-square font-bold bg-white flex items-center justify-center shadow-sm shadow-black">
              <span className="block translate-y-0.5 alternateAllele">C</span>
            </div>
          </div>
        </div>
        {/* <div className="w-full bg-zinc-300/ border-2 border-white h-8 my-24">
            <svg
              height={40}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -10 36 10"
              // fill="#000000a0"
              className="translate-y-10 fill-black/50"
            >
              <path d="M 0 0 L 0 -10 L 36 -10 L 36 0 L 0 0" />
              <text className="text-[10px] fill-white">T G G</text>
            </svg>
            <svg
              height={40}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -10 36 10"
              overflow="visible"
            >
              <path d="M 0 0 L 0 -10 L 18 -16" fill="#000000a0" />
              <path
                // className="[transform:rotateY(180deg)]"
                d="M 36 -10 L 36 0 L 18 -16"
                fill="#000000a0"
                className="stroke-[.25px] stroke-black"
              />
            </svg>
          </div> */}
        <p>
          The director asks whether analyzing the same data as microhaplotypes
          might provide more accurate and easily interpretable results. You
          agree to try.
        </p>
        <p>
          In this step of the activity, you will repeat the process, using the
          same genotyping results. But, instead of using the individual SNPs,
          this time you will analyze combinations of SNPs as microhaplotypes.
        </p>
        <p>Will the microhaplotypes give you a different result?</p>
        <p>Let's find out!</p>
      </div>
    ),
  },
  1: {
    title: <h5> 3.1 Analyze your laboratory clones using microhaplotypes</h5>,
    instructions: (
      <div>
        <p>
          You will now analyze the same 5 laboratory clones using
          microhaplotypes. Note that the individual SNPs are the same as before,
          but now you are analyzing each combination of 3 SNPs together as a
          single microhaplotype (4 microhaplotypes in total). Therefore you have
          4 loci instead of 12, each with more diversity than the individual
          SNPs. Click microhaplotypes in the look-up table on the left to place
          them on loci on the right. Selecting a different column will change
          the loci shown in the table.
        </p>
      </div>
    ),
  },
  2: {
    title: <h5>3.2 Make positive controls with your labatory clones</h5>,
    instructions: (
      <div>
        <p>
          Make six positive controls using different combinations of your
          laboratory clones. Click on your laboratory clones to move them on or
          off the sample cards on the right. The number of clones you use for
          each positive control will depend on the MOI,
          {/* {" "}
          <span className="underline"> */}
          and each control must be different from others.
          {/* </span> */}
        </p>
      </div>
    ),
  },
  3: {
    title: <h5>3.3 Genotype your labatory clones using microhaplotypes</h5>,
    instructions: (
      <div>
        <p>
          Enter data in the genotype form by clicking each microhaplotype that
          is present at locus 1, 2, 3, and 4. The number of microhaplotypes that
          you enter will depend on how many different microhaplotypes are
          present at each locus.
        </p>
      </div>
    ),
  },
  4: {
    title: <h5> 3.4 Counting Alleles</h5>,
    instructions: (
      <div>
        <p>Answer the following questions.</p>
      </div>
    ),
  },
  5: {
    title: <h5> 3.5 Knowledge Check: Step 3</h5>,
    instructions: (
      <div>
        <p>
          Before you continue to Step 4, let's take a moment to think about the
          relationship between MOI and the number of alleles you observe in
          microhaplotypes. Complete the three-question quiz below.{" "}
        </p>
      </div>
    ),
  },
};
