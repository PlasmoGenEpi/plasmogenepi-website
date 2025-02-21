import { ReactElement } from "react";
import Microhaplotype from "../../Shared/Microhaplotypes/Microhaplotype";
import { fixedData } from "@/data/Interactives/fixedData";
import { microhaplotypeColorMap } from "../../Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTableRow";
import SquareMicrohaplotype from "../../Shared/Microhaplotypes/SquareMicrohaplotype";
import InlineCircle from "../../Shared/misc/InlineCircle";

export const partSixPrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  0: {
    title: (
      <h5>
        Step 1
        {/* Genotype laboratory clones, estimate their relatedness by
        calculating IBS, and compare this to what you know about IBD. */}
      </h5>
    ),
    instructions: (
      <div className="flex flex-col gap-4">
        <p>
          As is the case with most laboratory assays, it is often very helpful
          and sometimes essential to first generate and interpret data when you
          know the truth, so you can interpret the data where the truth is
          unknown.
        </p>
        <p>
          Therefore, in order to understand how to interpret data from your
          village and school outbreaks, you will first evaluate your methods and
          analysis on some laboratory clones. Fortunately, your experienced
          Laboratory Research Scientist, Dr. Issac, has stored samples from
          cultured parasite clones. You ask them to pull out samples from 3
          clones that come from 3 different continents.
        </p>
      </div>
    ),
  },
  // 0.5: {
  //   title: (
  //     <h5>
  //       Step 1 &ndash; Genotype laboratory clones, estimate their relatedness by
  //       calculating IBS, and compare this to what you know about IBD
  //     </h5>
  //   ),
  //   instructions: (
  //     <div>
  //       <p>
  //         As is the case with most laboratory assays, it is often very helpful
  //         and sometimes essential to first generate and interpret data when you
  //         know the truth, so you can interpret the data where the truth is
  //         unknown. Therefore, to understand how to interpret data from your
  //         village and school outbreaks, you will first evaluate your methods and
  //         analysis on some laboratory clones.
  //       </p>
  //     </div>
  //   ),
  // },
  1: {
    title: <h5>1.1.1 Genotype 3 unrelated laboratory clones with SNPs</h5>,
    instructions: (
      <div>
        <p>
          The simulation will randomly assign SNP alleles to 12 loci for each
          laboratory clone. The reference and alternate alleles for these 12
          loci are shown below. Like prior genotype sleuthing activities, these
          SNPs have only 2 alleles each and are perfectly balanced, so there is
          a 50/50 chance of getting the reference or alternate allele at each
          locus. Each clone is completely unrelated to the others by ancestry,
          as indicated by their different colors &ndash; you know this since
          they come from completely different parts of the world. Click on each
          of the three laboratory clones below to generate genotypes.
        </p>
      </div>
    ),
  },
  2: {
    title: (
      <h5>
        {" "}
        1.1.2 Predict what you will observe about IBS/IBD in pairwise
        comparisons
      </h5>
    ),
    instructions: (
      <div>
        <p>
          Now that these unrelated clones have sequences, you can compare their
          genotypes and calculate IBS - the percentage of SNPs that match
          between any two. Before you do, however, you already have a sense of
          what you expect.
        </p>
      </div>
    ),
  },
  3: {
    title: <h5>1.1.3 Genotype and compare pairs of unrelated clones</h5>,
    instructions: (
      <div>
        <p>
          Compare the genotype of lab clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> to lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" /> and use the interactive form
          to check if the SNP alleles match at each locus.
        </p>
      </div>
    ),
  },
  4: {
    title: <h5>1.1.3 Genotype and compare pairs of related clones</h5>,
    instructions: (
      <div>
        <p>
          Compare the genotype of lab clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> to lab clone 3{" "}
          <InlineCircle className="bg-cloneGreen" /> and use the interactive
          form to check if the SNP alleles match at each locus.
        </p>{" "}
      </div>
    ),
  },
  5: {
    title: <h5>1.1.3 Genotype and compare pairs of related clones</h5>,
    instructions: (
      <div>
        <p>
          Compare the genotype of lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" /> to lab clone 3{" "}
          <InlineCircle className="bg-cloneGreen" /> and use the interactive
          form to check if the SNP alleles match at each locus.
        </p>
      </div>
    ),
  },
  6: {
    title: <h5>1.1.4 Observe all three IBS estimates together.</h5>,
    instructions: (
      <div>
        <p>
          Take a look at the IBS estimates between these 3 pairs of clones,
          using 12 perfectly balanced SNPs.
        </p>
      </div>
    ),
  },
  7: {
    title: <h5>1.1.4 Observe all three IBS estimates together.</h5>,
    instructions: (
      <div>
        <p>Answer the following questions.</p>
      </div>
    ),
  },
  8: {
    title: (
      <h5>
        1.1.5 Knowledge Check: distinguishing related parasites from unrelated
        parasites using IBS
      </h5>
    ),
    instructions: (
      <div>
        <p>
          With 12 perfectly balanced SNPs like in these examples, we can
          estimate the probability that a certain number of SNPs will match when
          IBD is zero.
        </p>
      </div>
    ),
  },
  9: {
    title: (
      <h5>
        1.1.5 Knowledge Check: distinguishing related parasites from unrelated
        parasites using IBS
      </h5>
    ),
    instructions: (
      <div>
        <p>
          With 12 perfectly balanced SNPs like in these examples, we can
          estimate the probability that a certain number of SNPs will match when
          IBD is zero.
        </p>
      </div>
    ),
  },
  10: {
    title: (
      <h5>
        1.1.5 Knowledge Check: distinguishing related parasites from unrelated
        parasites using IBS
      </h5>
    ),
    instructions: (
      <div>
        <p>
          With 12 perfectly balanced SNPs like in these examples, we can
          estimate the probability that a certain number of SNPs will match when
          IBD is zero.
        </p>
      </div>
    ),
  },
  11: {
    title: <h5>1.1.6 Generate laboratory clone for 1 hybrid strain</h5>,
    instructions: (
      <div className="flex flex-col gap-4">
        <p>
          Now you and your lab team have a good idea of what to expect in terms
          of IBS when you compare 12 SNPs in two completely unrelated parasites.
          How about when they are related to each other?
        </p>
        <p>
          What if the parasites are related, but not the same? Once again, your
          wise lab director impresses you with their preparedness and deep
          respect for the utility of proper laboratory controls. They apparently
          have an additional sample that is a hybrid of 2 of the 3 unrelated
          clones. You are fortunate to work with such a fantastic team.
        </p>
        <p className="mt-2">
          This time, the simulation will make a laboratory clone (#4{" "}
          <InlineCircle hybrid />) that is a hybrid of lab clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> and lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" />. Just like with humans, half
          of the genome of the progeny will be related to each parent. In this
          case, the first six SNP loci are identical to clone 1{" "}
          <InlineCircle className="bg-cloneRed" />, and the last six are
          identical to clone 2 <InlineCircle className="bg-cloneBlue" />. Click
          on the mosquito to have the parasites recombine and form a hybrid
          clone.
        </p>
      </div>
    ),
  },
  12: {
    title: (
      <h5>1.1.7 Genotype and compare hybrid clone to first three clones</h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          Let&apos;s compare the genotype of the new hybrid clone 4{" "}
          <InlineCircle hybrid /> to one of its parents, lab clone 1{" "}
          <InlineCircle className="bg-cloneRed" />. Use the interactive form to
          check if the SNP alleles match at each locus.
        </p>
      </div>
    ),
  },
  13: {
    title: (
      <h5>1.1.7 Genotype and compare hybrid clone to first three clones</h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          Now, let’s compare the genotype of the new hybrid clone 4{" "}
          <InlineCircle hybrid /> to its other parent, lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" />. Use the interactive form to
          check if the SNP alleles match at each locus.
        </p>
      </div>
    ),
  },
  13.5: {
    title: (
      <h5>1.1.7 Genotype and compare hybrid clone to first three clones</h5>
    ),
    instructions: (
      <div>
        {/* <p className="mt-2">
          Now, let’s compare the genotype of the new hybrid clone 4{" "}
          <InlineCircle hybrid /> to its other parent, lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" />. Use the interactive form to
          check if the SNP alleles match at each locus.
        </p> */}
        <p>Answer the following question.</p>
      </div>
    ),
  },
  14: {
    title: (
      <h5>1.1.7 Genotype and compare hybrid clone to first three clones</h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          Now let&apos;s compare our hybrid lab clone 4 <InlineCircle hybrid />{" "}
          to clone 3 <InlineCircle className="bg-cloneGreen" />, which is not
          its parent.
        </p>
      </div>
    ),
  },
  14.5: {
    title: (
      <h5>1.1.7 Genotype and compare hybrid clone to first three clones</h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          At the other extreme, what if we compare two parasites which are
          completely related to each other, in other words they are genetically
          identical?
        </p>
      </div>
    ),
  },
  15: {
    title: (
      <h5>
        1.1.8 Knowledge Check: Distinguishing related parasites from unrelated
        parasites using IBS
      </h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          Great work! You&apos;ve now done lab work to estimate genetic
          relatedness via IBS using 12 SNPs for a few parasites you know are
          unrelated by ancestry (IBD 0), some which are strongly related (IBD
          0.5, like siblings) or are completely identical (IBD 1.0).
        </p>
        <p className="mt-2">Let's review our results so far.</p>
      </div>
    ),
  },
  // 16:
  // {
  //   title: <h5>1.1.9 Conclusions</h5>,
  //   instructions: (
  //     <div>
  //       <p>
  //         Statistically, it should be relatively straightforward to distinguish
  //         perfectly related parasites from completely unrelated parasites with
  //         12 perfectly balanced SNPs. This is because perfectly related
  //         parasites will always have an IBS of 1, whereas completely unrelated
  //         parasites will almost always have IBS at least a little less than 1,
  //         like in these two histograms:
  //       </p>
  //     </div>
  //   ),
  // },
  // 17: {
  //   title: <h5>1.1.9 &ndash; Conclusions</h5>,
  //   instructions: (
  //     <div>
  //       <p>
  //         Distinguishing related parasites from unrelated parasites appears
  //         reasonably straightforward with SNPs, but what about sibling parasites
  //         (IBD 0.5) from those that are unrelated (IBD 0)?
  //       </p>
  //     </div>
  //   ),
  // },
  // 18: {
  //   title: <h5>1.1.9 &ndash; Conclusions</h5>,

  //   instructions: (
  //     <div>
  //       <p>
  //         Siblings may be difficult to reliably distinguish from unrelated
  //         parasites. This is because the number of matches we expect to see with
  //         12 SNPs overlaps in these two situations. We tend to have more matches
  //         on average in the siblings than for completely unrelated parasites,
  //         but not reliably so.
  //       </p>
  //     </div>
  //   ),
  // },
  // 19: {
  //   title: <h5>1.1.9 &ndash; Conclusions</h5>,

  //   instructions: (
  //     <div>
  //       <p>
  //         Take a look at the IBS tables again, then answer the following
  //         question.
  //       </p>
  //     </div>
  //   ),
  // },
  // 20: {
  //   title: <h5>1.1.9 &ndash; Conclusions</h5>,

  //   instructions: (
  //     <div className="flex flex-col gap-2">
  //       <p>
  //         The more loci you evaluate, the easier it will be to distinguish the
  //         proportion of matches (IBS) consistent with related vs. unrelated
  //         parasites. Similarly, the more diverse the loci, the less likely there
  //         will be matches occurring by chance, so IBS will more closely reflect
  //         IBD
  //       </p>

  //       <p>
  //         Increasing both the number and diversity of loci will give you the
  //         greatest power. Loci with higher diversity are particularly useful
  //         when you have polyclonal infections, which you know can be common, so
  //         you decide to go this route.
  //       </p>

  //       <p>
  //         You know from an online course about malaria genomics that
  //         microhaplotypes have more diversity than SNPs and can be easily
  //         genotyped with targeted sequencing, so you direct your lab to redo the
  //         sequencing using 12 microhaplotypes instead of 12 SNPs.
  //       </p>
  //       {/* <p className="mt-2">
  //         Great work! You&apos;ve now done lab work to estimate genetic
  //         relatedness via IBS using 12 SNPs for a few parasites you know are
  //         unrelated by ancestry (IBD 0), some which are strongly related (IBD
  //         0.5, like siblings) or are completely identical (IBD 1.0).
  //       </p>
  //       <p className="mt-2">Let's review our results so far.</p> */}
  //     </div>
  //   ),
  // },
  // 20.1: {
  //   title: <h5>1.1.9 &ndash; Conclusions</h5>,
  //   instructions: (
  //     <div>
  //       <p>
  //         Statistically, it should be relatively straightforward to distinguish
  //         perfectly related parasites from completely unrelated parasites with
  //         12 perfectly balanced SNPs. This is because perfectly related
  //         parasites will always have an IBS of 1, whereas completely unrelated
  //         parasites will almost always have IBS at least a little less than 1,
  //         like in these two histograms:
  //       </p>
  //     </div>
  //   ),
  // },
  // 20.2: {
  //   title: <h5>1.1.9 &ndash; Conclusions</h5>,
  //   instructions: (
  //     <div>
  //       <p>
  //         Siblings may be difficult to reliably distinguish from unrelated
  //         parasites. This is because the number of matches we expect to see with
  //         12 SNPs overlaps in these two situations. We tend to have more matches
  //         on average in the siblings than for completely unrelated parasites,
  //         but not reliably so.
  //       </p>
  //     </div>
  //   ),
  // },
  // 16: {
  //   title: <h5>1.2 &ndash; Genotyping with Microhaplotypes</h5>,
  //   instructions: <></>,
  // },
  21: {
    title: <h5>1.2 Genotyping with Microhaplotypes</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Let’s look now and see how your related and unrelated clones would
          compare with microhaplotype genotyping. In this part of the activity,
          you will once again genotype laboratory clones, estimate their
          relatedness by calculating IBS, and compare this to what you know
          about IBD – but this time, all with microhaplotypes.
        </p>
        <p>
          In this example, each microhaplotype locus can have 1 of 8 alleles,
          like the exercise you did before in Module 2 where they were composed
          of 3 SNPs each. Microhaplotypes can have more or fewer possible
          alleles. Do you think it will be easier or harder to distinguish
          related and unrelated parasites using microhaplotypes? Let’s find out!
        </p>
        <p>
          A quick note about microhaplotypes in this exercise and moving
          forward. In previous exercises you will recall they appeared as{" "}
          <span
            aria-label="microhaplotype TTT"
            className=" inline-block h-0 w-[72px] scale-75 dark:brightness-75 "
          >
            <Microhaplotype
              possibleVals={[
                {
                  reference: fixedData[1].refValues[0 * 3],
                  alternate: fixedData[1].altValues[0 * 3],
                },
                {
                  reference: fixedData[1].refValues[0 * 3 + 1],
                  alternate: fixedData[1].altValues[0 * 3 + 1],
                },
                {
                  reference: fixedData[1].refValues[0 * 3 + 2],
                  alternate: fixedData[1].altValues[0 * 3 + 2],
                },
              ]}
              // @ts-ignore
              vals={[0, 0, 0]}
              childClassNames={{
                left: "pl-2",
                right: "pr-2",
              }}
              className={`col-span-3 border-2 ${microhaplotypeColorMap.get(
                JSON.stringify([0, 0, 0])
              )}`}
            />
          </span>
          showing the component SNPs but moving forward the microhaplotype
          allele be shown just as a different color without the individual SNPs
          visible. Just know that these represent the same thing.{" "}
          <span className="inline-block">
            <SquareMicrohaplotype
              className="absolute h-4 w-4 -translate-y-3"
              id={0}
            />
            <span className="inline-block w-6"></span>
          </span>
        </p>
      </div>
    ),
  },

  22: {
    title: (
      <h5>
        1.2.1 Generate laboratory clones for 3 <i>unrelated strains</i> with
        microhaplotypes
      </h5>
    ),
    instructions: (
      <div className="flex flex-col gap-4">
        <p>
          Run the simulation by clicking the empty rows in the table to genotype
          3 laboratory clones. Each laboratory clone will be assigned a random
          sequence of 12 microhaplotype alleles (represented by 1 of 8 colors).
        </p>
        <p>
          Like prior genotype sleuthing activities, these microhaplotypes are
          perfectly balanced, so there is a 1/8 chance of getting any
          microhaplotype allele at each locus. Just like before, each clone is
          completely unrelated to the others by ancestry, as indicated by their
          different colors – you know this since they come from completely
          different parts of the world.
        </p>
      </div>
    ),
  },
  22.5: {
    title: (
      <h5>
        1.2.2 Predict what you will observe about IBS/IBD in pairwise
        comparisons
      </h5>
    ),
    instructions: (
      <div>
        <p>
          Now that these unrelated clones have microhaplotype sequences, you can
          compare their genotypes and calculate IBS - the percentage of
          microhaplotypes that match between any two pairs. Before you do...
        </p>
      </div>
    ),
  },
  23: {
    title: <h5>1.2.3 Genotype and compare pairs of related clones </h5>,
    instructions: (
      <div>
        <p>
          Compare the genotype of lab clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> to lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" /> and use the interactive form
          to check if the SNP alleles match at each locus.
        </p>
      </div>
    ),
  },
  24: {
    title: <h5>1.2.3 Genotype and compare pairs of related clones </h5>,
    instructions: (
      <div>
        <p>
          Compare the genotype of lab clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> to lab clone 3{" "}
          <InlineCircle className="bg-cloneGreen" /> and use the interactive
          form to check if the SNP alleles match at each locus.
        </p>
      </div>
    ),
  },
  25: {
    title: <h5>1.2.3 Genotype and compare pairs of related clones </h5>,
    instructions: (
      <div>
        <p>
          Compare the genotype of lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" /> to lab clone 3{" "}
          <InlineCircle className="bg-cloneGreen" /> and use the interactive
          form to check if the SNP alleles match at each locus.
        </p>
      </div>
    ),
  },
  26: {
    title: <h5>1.2.4 Observe all three IBS estimates together</h5>,
    instructions: (
      <div>
        <p>Answer the questions below.</p>
      </div>
    ),
  },
  27: {
    title: <h5>1.2.4 Knowledge Check</h5>,
    instructions: (
      <div>
        <p>
          You should have noticed that you had fewer alleles matching by chance
          in these unrelated parasites, since the microhaplotypes were more
          diverse than SNPs – making IBS lower and better reflecting IBD (which
          was always zero). This histogram shows the expected number of matches
          using 12 microhaplotypes with 8 alleles each – usually less than 5.
          This contrasts with SNPs, which could have up to 9 or 10 matches.
        </p>
      </div>
    ),
  },
  // 28: {
  //   title: <h5>1.1.8 Hybrid clones, with microhaplotypes</h5>,
  //   instructions: (
  //     <div>
  //       <p>
  //         Now you and your lab team have a good idea of what to expect in terms
  //         of IBS when you compare 12 microhaplotypes in two completely unrelated
  //         parasites, and how that is different to when you used SNPs to compare
  //         unrelated parasites. But what about related parasites?
  //       </p>
  //     </div>
  //   ),
  // },
  29: {
    title: <h5>1.2.5 Generate laboratory clone for 1 hybrid strain</h5>,
    instructions: (
      <div>
        <p>
          Now you and your lab team have a good idea of what to expect in terms
          of IBS when you compare 12 microhaplotypes in two completely unrelated
          parasites, and how that is different to when you used SNPs to compare
          unrelated parasites. But what about related parasites?
        </p>
        <p className="mt-4">
          Click the mosquito to run the simulation. This time, the simulation
          will make a laboratory clone from microhaplotypes (#4{" "}
          <InlineCircle hybrid /> ) that is a hybrid of lab clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> and lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" />. Just like when we used SNPs
          earlier in the exercise, half of the genome of the progeny will be
          related to each parent. In this case, the first six microhaplotype
          loci are identical to clone 1 <InlineCircle className="bg-cloneRed" />{" "}
          , and the last six microhaplotype loci are identical to clone 2{" "}
          <InlineCircle className="bg-cloneBlue" />. Click on the mosquito to
          have the parasites recombine and form a hybrid clone.
        </p>
      </div>
    ),
  },
  30: {
    title: (
      <h5>1.2.6 Genotype and compare hybrid clone to first three clones</h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          Let’s compare the genotype of the new hybrid clone 4{" "}
          <InlineCircle hybrid /> to one of its parents, lab clone 1{" "}
          <InlineCircle className="bg-cloneRed" />. Use the interactive form to
          check if the microhaplotype alleles match at each locus.
        </p>
      </div>
    ),
  },
  31: {
    title: (
      <h5>1.2.6 Genotype and compare hybrid clone to first three clones</h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          Now, let’s compare the genotype of the new hybrid clone 4{" "}
          <InlineCircle hybrid /> to its other parent, lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" />. Use the interactive form to
          check if the microhaplotype alleles match at each locus.
        </p>
      </div>
    ),
  },
  31.5: {
    title: (
      <h5>1.2.6 Genotype and compare hybrid clone to first three clones</h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          Now, let’s compare the genotype of the new hybrid clone 4{" "}
          <InlineCircle hybrid /> to its other parent, lab clone 3{" "}
          <InlineCircle className="bg-cloneGreen" />.{" "}
          <span className="invisible">
            Use the interactive form to check if the microhaplotype alleles
            match at each locus.
          </span>
        </p>
      </div>
    ),
  },
  32: {
    title: (
      <h5>1.2.6 Genotype and compare hybrid clone to first three clones</h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          Now, let’s compare the genotype of the new hybrid clone 4{" "}
          <InlineCircle hybrid /> to an unrelated clone, lab clone 3{" "}
          <InlineCircle className="bg-cloneGreen" />.{" "}
          <span className="invisible">
            Use the interactive form to check if the microhaplotype alleles
            match at each locus.
          </span>
        </p>
      </div>
    ),
  },
  33: {
    title: (
      <h5>
        1.2.7 Knowledge Check: Distinguishing related parasites from unrelated
        parasites using IBS
      </h5>
    ),
    instructions: (
      <div>
        <p>
          Great work! You’ve now done lab work to estimate genetic relatedness
          via IBS using 12 microhaplotypes for a few parasites you know are
          unrelated by ancestry (IBD 0) and some which are strongly related (
          IBD 0.5, like siblings). You already know that if parasites are
          completely identical (IBD 1.0), then genotypes will be identical
          unless there is mutation or error.
        </p>
        <p className="mt-2">Let’s review our results so far:</p>
      </div>
    ),
  },
  33.5: {
    title: (
      <h5>
        {" "}
        1.2.7 Knowledge Check: Distinguishing related parasites from unrelated
        parasites using IBS{" "}
      </h5>
    ),
    instructions: (
      <div>
        <p>
          Your investment has paid off &ndash; with 12 SNPs it was difficult for
          you to distinguish siblings from unrelated parasites, and sometimes
          even from perfectly related parasites, based on the number of matches.
        </p>
      </div>
    ),
  },
  34: {
    title: <h5> unrelated parasites using IBS</h5>,
    instructions: (
      <div>
        <p>
          By increasing the resolution of your genotyping, you can more easily
          tell which parasites are related by ancestry and therefore by
          transmission. You also now have a good sense of what you observe in
          terms of IBS means in terms of the true relatedness of the parasites.
          You are almost ready to answer your program’s questions about these
          concerning outbreaks! You have just one more thing to do first…
        </p>
      </div>
    ),
  },
  // 50: {
  //   title: <h5>2.1.1 &ndash; View four laboratory clones from Step 1</h5>,
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         At the end of step 1, you have 4 laboratory clones made from
  //         microhaplotypes. Take a moment to recall their composition.
  //       </p>
  //     </div>
  //   ),
  // },
  // 51: {
  //   title: <h5>2.1.1 &ndash; View your positive controls</h5>,
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         Following the advice of your lab manager (see intro to Step 2), you
  //         make 3 polyclonal positive controls. These positive controls consist
  //         of different combinations of the monoclonal laboratory clones 1 (red),
  //         2 (blue), and 3 (green) from step 1, including:
  //       </p>
  //     </div>
  //   ),
  // },
  // 52: {
  //   title: <h5>2.1.1 &ndash; View your positive controls</h5>,
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         Following the advice of your lab manager (see intro to Step 2), you
  //         make 3 polyclonal positive controls. These positive controls consist
  //         of different combinations of the monoclonal laboratory clones 1 (red),
  //         2 (blue), and 3 (green) from step 1, including:
  //       </p>
  //     </div>
  //   ),
  // },
  // 53: {
  //   title: <h5>2.1.1 &ndash; View your positive controls</h5>,
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         Following the advice of your lab manager (see intro to Step 2), you
  //         make 3 polyclonal positive controls. These positive controls consist
  //         of different combinations of the monoclonal laboratory clones 1 (red),
  //         2 (blue), and 3 (green) from step 1, including:
  //       </p>
  //     </div>
  //   ),
  // },
  // 54: {
  //   title: (
  //     <h5>
  //       2.1.1 &ndash; View the genotypes of your polyclonal positive controls
  //     </h5>
  //   ),
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         Then, you prepare a genotype for each of the polyclonal positive
  //         controls . . .
  //       </p>
  //     </div>
  //   ),
  // },
  // 55: {
  //   title: (
  //     <h5>
  //       2.1.1 &ndash; View the genotypes of your polyclonal positive controls
  //     </h5>
  //   ),
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         Then, you prepare a genotype for each of the polyclonal positive
  //         controls . . .
  //       </p>
  //     </div>
  //   ),
  // },
  // 56: {
  //   title: (
  //     <h5>
  //       2.1.1 &ndash; View the genotypes of your polyclonal positive controls
  //     </h5>
  //   ),
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         Then, you prepare a genotype for each of the polyclonal positive
  //         controls . . .
  //       </p>
  //     </div>
  //   ),
  // },
  // 57: {
  //   title: (
  //     <h5>
  //       2.2.1 &ndash; Check matching alleles at each locus between polyclonal
  //       control 1:2 and lab clone 3 (unrelated)
  //     </h5>
  //   ),
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         Compare the polyclonal control <InlineCircle hybrid />. to lab clone 3{" "}
  //         <InlineCircle className="bg-cloneGreen" />. Check yes or no for each
  //         of the 12 loci as to whether there is any match in alleles between the
  //         two samples. Remember, if any alleles match between two samples at a
  //         locus you will consider that locus to be identical by state (IBS).
  //       </p>
  //     </div>
  //   ),
  // },
  // 58: {
  //   title: (
  //     <h5>
  //       2.2.3 &ndash; Check matching alleles at each locus between polyclonal
  //       control 2:3 and lab clone 1 (unrelated)
  //     </h5>
  //   ),
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         Compare the polyclonal control 2:3 (blue/green) to lab clone 1 (red).
  //         Check yes or no for each of the 12 loci as to whether there is any
  //         match in alleles between the two samples.
  //       </p>
  //     </div>
  //   ),
  // },
  // 59: {
  //   title: (
  //     <h5>2.2.5 &ndash; Additional knowledge check questions when IBD is 0</h5>
  //   ),
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         When comparing polyclonal samples where IBD is 0, you may have noticed
  //         that IBS is higher than before, as you expected. These comparisons had
  //         an MOI of 1 in one sample, and an MOI of 2 in the other. As you can
  //         see in the histogram, on average we would expect to see more matches
  //         when comparing monoclonal samples (blue bars) versus samples where one
  //         is polyclonal with an MOI of two (purple bars). With monoclonal
  //         samples, we expect the number of matches to usually be 5 or less (IBS
  //         &lt; 0.5), but when one sample has an MOI of 2 we may see as many as 7
  //         matches (IBS &gt; 0.5).
  //       </p>
  //     </div>
  //   ),
  // },
  // 60: {
  //   title: (
  //     <h5>2.2.5 &ndash; Additional knowledge check questions when IBD is 0</h5>
  //   ),
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         When comparing polyclonal samples where IBD is 0, you may have noticed
  //         that IBS is higher than before, as you expected. These comparisons had
  //         an MOI of 1 in one sample, and an MOI of 2 in the other. As you can
  //         see in the histogram, on average we would expect to see more matches
  //         when comparing monoclonal samples (blue bars) versus samples where one
  //         is polyclonal with an MOI of two (purple bars). With monoclonal
  //         samples, we expect the number of matches to usually be 5 or less (IBS
  //         &lt; 0.5), but when one sample has an MOI of 2 we may see as many as 7
  //         matches (IBS &gt; 0.5).
  //       </p>
  //     </div>
  //   ),
  // },
  // 61: {
  //   title: (
  //     <h5>2.3 &ndash; Compare polyclonal control to related lab clones</h5>
  //   ),
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         Now let&apos;s see what happens when you compare polyclonal samples
  //         where there is at least 1 perfectly related parasite between the two.
  //       </p>
  //     </div>
  //   ),
  // },
  // 62: {
  //   title: <h5>2.3 &ndash; Other comparisons</h5>,
  //   instructions: (
  //     <div>
  //       <p className="mt-2">
  //         What if we had a similar situation, but recombination did occur?
  //       </p>
  //     </div>
  //   ),
  // },
};
