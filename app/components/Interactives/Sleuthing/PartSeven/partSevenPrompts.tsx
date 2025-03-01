import { ReactElement, ReactNode } from "react";
import InlineCircle from "../../Shared/misc/InlineCircle";
import KnowledgeCheckQuestion from "../../Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import QuestionResponseText from "../../Shared/misc/QuestionResponseText";
import P6MHPCloneRows from "../PartSix/CloneRows/P6MHPCloneRows";

export const partSevenPrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  // 1: {
  //   title: <h5>2.1.1 &ndash; Case study recap</h5>,
  //   instructions: (
  //     <div className="flex flex-col gap-2">
  //       <p>
  //         So far, you have been comparing genotypes of individual parasites to
  //         each other. However, you remember that to evaluate data from real
  //         cases in your potential outbreaks you will need to compare infections
  //         which are often polyclonal, containing more than one genetically
  //         distinct parasite.{" "}
  //       </p>
  //       <p>
  //         Your lab director suggests a solution: make positive controls using
  //         combinations of the laboratory clones, so you can see what IBS looks
  //         like in the setting of polyclonal infections when you know the truth.
  //         You agree this is the best next step and ask your lab to make the
  //         polyclonal controls right away.
  //       </p>
  //       <p>
  //         While the controls are being prepared, you think about how you will
  //         evaluate IBS when there are multiple alleles present in each sample.
  //         In reality, there are several ways this could be calculated, but for
  //         the purposes of this exercise we will consider a locus to be IBS if
  //         there are any matching alleles between samples.
  //       </p>
  //       <p>
  //         With this in mind, do you expect IBS to be higher or lower with
  //         unrelated polyclonal vs. monoclonal samples?
  //       </p>
  //       <p>Let’s see what you discover.</p>
  //     </div>
  //   ),
  // },
  0: {
    title: <h5>2.1.1 Case Study Recap</h5>,
    instructions: (
      <div className="flex flex-col gap-4 font-helvetica [font-size:15px]">
        <p>
          So far, you have been comparing genotypes of individual parasites to
          each other. However, you remember that to evaluate data from real
          cases in your potential outbreaks you will need to compare infections
          which are often polyclonal, containing more than one genetically
          distinct parasite.
        </p>
        <p>
          Your lab director suggests a solution: make positive controls using
          combinations of the laboratory clones, so you can see what IBS looks
          like in the setting of polyclonal infections when you know the truth.
          You agree this is the best next step and ask your lab to make the
          polyclonal controls right away.
        </p>
        <p>
          While the controls are being prepared, you think about how you will
          evaluate IBS when there are multiple alleles present in each sample.
          In reality, there are several ways this could be calculated, but for
          the purposes of this exercise we will consider a locus to be IBS if
          there are any matching alleles between samples.
        </p>
        <p>
          With this in mind, do you expect IBS to be higher or lower with
          unrelated polyclonal vs. monoclonal samples?
        </p>
        <div className="mt-12">
          <p>
            At the end of step 1, you have 3 laboratory clones made from
            microhaplotypes. Take a moment to recall their composition.
          </p>
          <div className="mt-8 grid place-items-center">
            <div className="mx-auto w-full max-w-[500px]">
              <h5 className="mb-4 font-bold">
                Lab Clones with Microhaplotypes
              </h5>
              <P6MHPCloneRows />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  1: {
    title: <h5>2.1.2. View Your Positive Controls</h5>,
    instructions: (
      <div>
        {/* <p className="mt-2">
          At the end of step 1, you have 4 laboratory clones made from
          microhaplotypes. Take a moment to recall their composition.
        </p> */}
        <p className="mt-2">
          Following the advice of your lab manager (see intro to Step 2), you
          make 3 polyclonal positive controls. These positive controls consist
          of different combinations of the monoclonal laboratory clones 1{" "}
          <InlineCircle className="bg-cloneRed" />, 2{" "}
          <InlineCircle className="bg-cloneBlue" />, and 3{" "}
          <InlineCircle className="bg-cloneGreen" /> from step 1, including:
        </p>
      </div>
    ),
  },
  2: {
    title: (
      <h5>2.1.3. View the Genotypes of Your Polyclonal Positive Controls</h5>
    ),
    instructions: (
      <div>
        <div className="flex flex-col gap-4">
          <p>
            Then, you prepare a genotype for each of the polyclonal positive
            controls . . .
          </p>
          <p>
            For the genotypes, note that the 12 columns represent your 12
            microhaplotype loci just like in lab clones, and the number of
            unique alleles detected at each locus are shown by colored boxes at
            that locus. If the two clones share an allele at a locus, only one
            allele will be detected . When you genotype polyclonal infections,
            remember the data are usually unphased - in other words you don’t
            know which allele corresponds to which parasite(s). This is
            represented here by randomly placing alleles on top or bottom
            regardless of what parasite they came from.
          </p>
        </div>
        {/* <p className="mt-2">
          Following the advice of your lab manager (see intro to Step 2), you
          make 3 polyclonal positive controls. These positive controls consist
          of different combinations of the monoclonal laboratory clones 1{" "}
          <InlineCircle className="bg-cloneRed" />, 2{" "}
          <InlineCircle className="bg-cloneBlue" />, and 3{" "}
          <InlineCircle className="bg-cloneGreen" /> from step 1, including:
        </p> */}
      </div>
    ),
  },
  3: {
    title: (
      <h5>2.1.3. View the Genotypes of Your Polyclonal Positive Controls</h5>
    ),
    instructions: (
      <div className="flex flex-col gap-4">
        <p>
          Then, you prepare a genotype for each of the polyclonal positive
          controls . . .
        </p>
        <p>
          For the genotypes, note that the 12 columns represent your 12
          microhaplotype loci just like in lab clones, and the number of unique
          alleles detected at each locus are shown by colored boxes at that
          locus. If the two clones share an allele at a locus, only one allele
          will be detected . When you genotype polyclonal infections, remember
          the data are usually unphased - in other words you don’t know which
          allele corresponds to which parasite(s). This is represented here by
          randomly placing alleles on top or bottom regardless of what parasite
          they came from.
        </p>
      </div>
    ),
  },
  // 4: {
  //   title: (
  //     <h5>
  //       {" "}
  //       2.2.1 &ndash; Check matching alleles at each locus between polyclonal
  //       control  and lab clone 3 (unrelated){" "}
  //     </h5>
  //   ),
  //   instructions: (
  //     <div>
  //       <p>
  //         Then, you prepare a genotype for each of the polyclonal positive
  //         controls...
  //       </p>{" "}
  //     </div>
  //   ),
  // },
  4: {
    title: (
      <h5>
        2.2.1. Check Matching Alleles at Each Locus between Polyclonal Control
        1:2 <InlineCircle polyclonal={1} /> and Lab Clone 3{" "}
        <InlineCircle className="bg-cloneGreen" /> (Unrelated){" "}
        {/* 2.2.1 Check matching alleles at each locus between polyclonal control{" "}
        <InlineCircle polyclonal={1} /> and lab clone 3{" "}
        <InlineCircle className="bg-cloneGreen" /> (unrelated) */}
      </h5>
    ),
    instructions: (
      <div className="flex flex-col gap-2">
        <p>Now you are ready to make some comparisons.</p>
        <p>
          Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
          clone 3 <InlineCircle className="bg-cloneGreen" />. Check yes or no
          for each of the 12 loci as to whether there is any match in alleles
          between the two samples. Remember, if any alleles match between two
          samples at a locus you will consider that locus to be identical by
          state (IBS).
        </p>{" "}
      </div>
    ),
  },
  5: {
    title: (
      <h5>
        2.2.1. Check Matching Alleles at Each Locus between Polyclonal Control
        1:2 <InlineCircle polyclonal={1} /> and Lab Clone 3{" "}
        <InlineCircle className="bg-cloneGreen" /> (Unrelated){" "}
      </h5>
    ),
    instructions: (
      <div className="flex flex-col gap-2">
        <p>Now you are ready to make some comparisons.</p>
        <p>
          Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
          clone 3 <InlineCircle className="bg-cloneGreen" />. Check yes or no
          for each of the 12 loci as to whether there is any match in alleles
          between the two samples. Remember, if any alleles match between two
          samples at a locus you will consider that locus to be identical by
          state (IBS).
        </p>{" "}
      </div>
    ),
  },
  6: {
    title: (
      <h5>
        2.2.2. Check Matching Alleles at Each Locus between Polyclonal Control
        2:3 <InlineCircle polyclonal={2} /> and Lab Clone 1{" "}
        <InlineCircle className="bg-cloneRed" /> (Unrelated){" "}
      </h5>
    ),
    instructions: (
      <div className="flex flex-col gap-2">
        <p>Now you are ready to make some comparisons.</p>
        <p>
          Compare the polyclonal control <InlineCircle polyclonal={2} /> to lab
          clone 1 <InlineCircle className="bg-cloneRed" />. Check yes or no for
          each of the 12 loci as to whether there is any match in alleles
          between the two samples. Remember, if any alleles match between two
          samples at a locus you will consider that locus to be identical by
          state (IBS).
        </p>{" "}
      </div>
    ),
  },
  7: {
    title: (
      <h5>
        2.2.2. Check Matching Alleles at Each Locus between Polyclonal Control
        2:3 <InlineCircle polyclonal={2} /> and Lab Clone 1{" "}
        <InlineCircle className="bg-cloneRed" /> (Unrelated){" "}
      </h5>
    ),
    instructions: (
      <div className="flex flex-col gap-2">
        <p>Now you are ready to make some comparisons.</p>
        <p>
          Compare the polyclonal control <InlineCircle polyclonal={2} /> to lab
          clone 1 <InlineCircle className="bg-cloneRed" />. Check yes or no for
          each of the 12 loci as to whether there is any match in alleles
          between the two samples. Remember, if any alleles match between two
          samples at a locus you will consider that locus to be identical by
          state (IBS).
        </p>{" "}
      </div>
    ),
  },
  8: {
    title: <h5>2.2.3. Knowledge Check Questions When IBD is 0</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          With comparing polyclonal samples where IBD is 0, you may have noticed
          that IBS is higher than before, as you expected. These comparisons had
          an MOI of 1 in one sample, and an MOI of 2 in the other. As you can
          see in the histogram, on average we would expect to see more matches
          when comparing monoclonal samples (blue bars) versus samples where one
          is polyclonal with an MOI of two (purple bars). With monoclonal
          samples, we expect the number of matches to usually be 5 or less (IBS
          &lt; 0.5), but when one sample has an MOI of 2 we may see as many as 7
          matches (IBS &gt; 0.5).
        </p>
      </div>
    ),
  },
  9: {
    title: <h5>2.2.3. Knowledge Check Questions When IBD is 0</h5>,

    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Notice that when MOI is three in both samples, you may see IBS as high
          as 1 even when IBD is 0 using the genotyping panel in this exercise:
          12 microhaplotypes with 8 alleles each. As MOI gets higher, it gets
          harder to distinguish infections containing related parasites from
          those containing unrelated parasites!
        </p>{" "}
      </div>
    ),
  },

  10: {
    title: (
      <h5>
        2.3.1. Check Matching Alleles at Each Locus between Polyclonal Control
        1:2 <InlineCircle polyclonal={1} /> and Lab Clone 1{" "}
        <InlineCircle className="bg-cloneRed" /> (Related){" "}
        {/* 2.3.1 Check matching alleles at each locus between polyclonal control{" "}
        <InlineCircle polyclonal={1} /> and lab clone 1{" "}
        <InlineCircle className="bg-cloneRed" /> (related){" "} */}
      </h5>
    ),
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Now let&apos;s see what happens when you compare polyclonal samples
          where there is at least 1 perfectly related parasite between the two.
        </p>
        <p>
          Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
          clone 1 <InlineCircle className="bg-cloneRed" />. Note that lab clone
          1 <InlineCircle className="bg-cloneRed" /> is contained within the
          polyclonal control (so it is perfectly related to one of the clones in
          that control). Check yes or no for each of the 12 loci as to whether
          there is any match in alleles between the two samples.
        </p>{" "}
      </div>
    ),
  },
  11: {
    title: (
      <h5>
        2.3.1. Check Matching Alleles at Each Locus between Polyclonal Control
        1:2 <InlineCircle polyclonal={1} /> and Lab Clone 1{" "}
        <InlineCircle className="bg-cloneRed" /> (Related){" "}
      </h5>
    ),
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Now let&apos;s see what happens when you compare polyclonal samples
          where there is at least 1 perfectly related parasite between the two.
        </p>
        <p>
          Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
          clone 1 <InlineCircle className="bg-cloneRed" />. Note that lab clone
          1 <InlineCircle className="bg-cloneRed" /> is contained within the
          polyclonal control (so it is perfectly related to one of the clones in
          that control). Check yes or no for each of the 12 loci as to whether
          there is any match in alleles between the two samples.
        </p>{" "}
      </div>
    ),
  },
  12: {
    title: <h5> 2.3.2. Making the Connection</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Note that this comparison of lab clones would be similar to a
          situation in which a person was infected with 2 parasite clones (MOI
          of 2) and a mosquito passed one of those two clones on to another
          person, without any recombination occurring. IBD and IBS would both be
          1 just like with the lab clones, since one parasite is being passed on
          from one person to another.
        </p>{" "}
      </div>
    ),
  },
  13: {
    title: <h5> 2.3.2. Making the Connection</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Note that this comparison of lab clones would be similar to a
          situation in which a person was infected with 2 parasite clones (MOI
          of 2) and a mosquito passed one of those two clones on to another
          person, without any recombination occurring. IBD and IBS would both be
          1 just like with the lab clones, since one parasite is being passed on
          from one person to another.
        </p>{" "}
      </div>
    ),
  },
  14: {
    title: (
      <h5>
        2.3.3. Check Matching Alleles at Each Locus between the Polyclonal
        Control <InlineCircle polyclonal={1} /> and Lab Clone 4{" "}
        <InlineCircle hybrid /> (Related){" "}
        {/* 2.3.3 Check matching alleles at each locus between polyclonal control{" "}
        <InlineCircle polyclonal={1} /> and lab clone 4 <InlineCircle hybrid />{" "}
        (related){" "} */}
      </h5>
    ),

    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
          clone 1 <InlineCircle hybrid />. Check yes or no for each of the 12
          loci as to whether there is any match in alleles between the two
          samples.
        </p>{" "}
      </div>
    ),
  },
  15: {
    title: (
      <h5>
        2.3.3. Check Matching Alleles at Each Locus between the Polyclonal
        Control <InlineCircle polyclonal={1} /> and Lab Clone 4{" "}
        <InlineCircle hybrid /> (Related){" "}
      </h5>
    ),

    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
          clone 1 <InlineCircle hybrid />. Check yes or no for each of the 12
          loci as to whether there is any match in alleles between the two
          samples.
        </p>{" "}
      </div>
    ),
  },
  16: {
    title: <h5> 2.3.4. Step 2 Summary</h5>,

    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          You may have noticed in this case that IBD between the child{" "}
          <InlineCircle hybrid /> is only 0.5 with each parent (lab clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> and lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" />
          ). However, since the child has gotten some of its genetic material at
          every locus from at least one parent, there is a match at every locus.
        </p>{" "}
      </div>
    ),
  },
  17: {
    title: <h5> 2.3.4. Step 2 Summary</h5>,

    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Are you ready to solve the outbreak cases? Before we do, let’s
          summarize what we’ve learned in this section. When MOI is high, IBS
          can be high between two infections even none of the parasites are
          related - there are just a lot of alleles that can match by chance.
          Increasing the number and diversity of loci can help in these
          situations. The good news is that two infections related by direct
          transmission should always have a matching allele at every locus - IBS
          of 1.0. This means that with your current genotyping panel of 12
          microhaplotypes, you should be able to tell using IBS if two
          infections are related by direct transmission or not as long as MOI is
          &#x2264;2 in both of the infections. You should be able to tell
          whether MOI is &gt;2 pretty easily with the 12 microhaplotypes as
          well; at least one locus should have 3 or more alleles if so. Now
          let’s solve the cases!
        </p>{" "}
      </div>
    ),
  },
  // 8: {
  //   title: (
  //     <h5>
  //       {" "}
  //       2.2.5 &ndash; Check matching alleles at each locus between polyclonal
  //       control 1:3 and lab clone 2 (unrelated){" "}
  //     </h5>
  //   ),
  //   instructions: (
  //     <div className="flex flex-col gap-2">
  //       <p>Now you are ready to make some comparisons.</p>
  //       <p>
  //         Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab clone 3{" "}
  //         <InlineCircle className="bg-cloneGreen" />. Check yes or no for each
  //         of the 12 loci as to whether there is any match in alleles between the
  //         two samples. Remember, if any alleles match between two samples at a
  //         locus you will consider that locus to be identical by state (IBS).
  //       </p>{" "}
  //     </div>
  //   ),
  // },
  // 9: {
  //   title: (
  //     <h5>
  //       {" "}
  //       2.2.6 &ndash; Check matching alleles at each locus between polyclonal
  //       control 1:3 and lab clone 2 (unrelated){" "}
  //     </h5>
  //   ),
  //   instructions: (
  //     <div className="flex flex-col gap-2">
  //       <p>Now you are ready to make some comparisons.</p>
  //       <p>
  //         Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab clone 3{" "}
  //         <InlineCircle className="bg-cloneGreen" />. Check yes or no for each
  //         of the 12 loci as to whether there is any match in alleles between the
  //         two samples. Remember, if any alleles match between two samples at a
  //         locus you will consider that locus to be identical by state (IBS).
  //       </p>{" "}
  //     </div>
  //   ),
  // },
  56: {
    title: (
      <h5>
        2.1.1 &ndash; View the genotypes of your polyclonal positive controls
      </h5>
    ),
    instructions: (
      <div>
        <p>Now, you are ready to make some comparisons …</p>
      </div>
    ),
  },
  57: {
    title: (
      <h5>
        2.2.1 &ndash; Check matching alleles at each locus between polyclonal
        control <InlineCircle polyclonal={1} /> and lab clone 3 (unrelated)
      </h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          Compare the polyclonal control (red/blue) to lab clone 3 (green).
          Check yes or no for each of the 12 loci as to whether there is any
          match in alleles between the two samples. Remember, if any alleles
          match between two samples at a locus you will consider that locus to
          be identical by state (IBS).
        </p>
      </div>
    ),
  },
  58: {
    title: (
      <h5>
        2.2.3 &ndash; Check matching alleles at each locus between polyclonal
        control <InlineCircle polyclonal={2} /> and lab clone 1 (unrelated)
      </h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          Compare the polyclonal control (blue/green) to lab clone 1 (red).
          Check yes or no for each of the 12 loci as to whether there is any
          match in alleles between the two samples.
        </p>
      </div>
    ),
  },
  59: {
    title: (
      <h5>2.2.5 &ndash; Additional knowledge check questions when IBD is 0</h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          When comparing polyclonal samples where IBD is 0, you may have noticed
          that IBS is higher than before, as you expected. These comparisons had
          an MOI of 1 in one sample, and an MOI of 2 in the other. As you can
          see in the histogram, on average we would expect to see more matches
          when comparing monoclonal samples (blue bars) versus samples where one
          is polyclonal with an MOI of two (purple bars). With monoclonal
          samples, we expect the number of matches to usually be 5 or less (IBS
          &lt; 0.5), but when one sample has an MOI of 2 we may see as many as 7
          matches (IBS &gt; 0.5).
        </p>
      </div>
    ),
  },
  60: {
    title: (
      <h5>2.2.5 &ndash; Additional knowledge check questions when IBD is 0</h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          When comparing polyclonal samples where IBD is 0, you may have noticed
          that IBS is higher than before, as you expected. These comparisons had
          an MOI of 1 in one sample, and an MOI of 2 in the other. As you can
          see in the histogram, on average we would expect to see more matches
          when comparing monoclonal samples (blue bars) versus samples where one
          is polyclonal with an MOI of two (purple bars). With monoclonal
          samples, we expect the number of matches to usually be 5 or less (IBS
          &lt; 0.5), but when one sample has an MOI of 2 we may see as many as 7
          matches (IBS &gt; 0.5).
        </p>
      </div>
    ),
  },
  61: {
    title: (
      <h5>2.3 &ndash; Compare polyclonal control to related lab clones</h5>
    ),
    instructions: (
      <div>
        <p className="mt-2">
          Now let&apos;s see what happens when you compare polyclonal samples
          where there is at least 1 perfectly related parasite between the two.
        </p>
      </div>
    ),
  },
  62: {
    title: <h5>2.3 &ndash; Other comparisons</h5>,
    instructions: (
      <div>
        <p className="mt-2">
          What if we had a similar situation, but recombination did occur?
        </p>
      </div>
    ),
  },
};
