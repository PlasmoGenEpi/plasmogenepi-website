import { ReactElement } from "react";
import InlinePlus from "../../Shared/misc/InlinePlus";
import InlineEdge from "../../Shared/misc/InlineEdge";

const sections = {
  // 0: {
  //   title: `Step 3. Genotype Your Cases From the Village And School, Assess Their Genetic Relatedness, and Lead Your Program to the Correct Interventions`,

  // },
  1: {
    title: "Potential Outbreak at the School",
  },
};

export const partEightPrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  1: {
    title: <h5>Potential Outbreak at the School</h5>,
    instructions: (
      <div>
        <p className="mb-4">
          Now let&apos;s figure out what is going on with these outbreaks!
          Remember that as lead for your country&apos;s subnational malaria
          elimination effort, you were called on to investigate two different
          scenarios in Eliminati Province: four students came down with malaria
          in a boarding school, and five cases occurred in a different village.
        </p>
        <p>
          Let&apos;s start with the cases in the boarding school. These were all
          students who were diagnosed with malaria soon after returning from
          holiday visits to families. Some of these students travel far for
          school and may have family homes in higher transmission areas. Your
          lab has successfully genotyped infections from all four cases using
          the same amplicon sequencing panel with 12 microhaplotypes you just
          evaluated on controls.
        </p>
      </div>
    ),
  },
  2: {
    title: <h5>Potential Outbreak at the School</h5>,
    instructions: (
      <div>
        <p>
          Let&apos;s start with the cases in the boarding school. These were all
          students who were diagnosed with malaria soon after returning from
          holiday visits to families. Some of these students travel far for
          school and may have family homes in higher transmission areas.
        </p>
      </div>
    ),
  },
  3: {
    title: <h5>Potential Outbreak at the School</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        {/* <p>
          Let&apos;s start with the cases in the boarding school. These were all
          students who were diagnosed with malaria soon after returning from
          holiday visits to families. Some of these students travel far for
          school and may have family homes in higher transmission areas.
        </p> */}
        <p>
          Your lab has successfully genotyped infections from all four cases
          using the same amplicon sequencing panel with 12 microhaplotypes you
          just evaluated on controls.
        </p>
      </div>
    ),
  },
  4: {
    title: <h5>Estimating MOI</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Let&apos;s start with the cases in the boarding school. These were all
          students who were diagnosed with malaria soon after returning from
          holiday visits to families. Some of these students travel far for
          school and may have family homes in higher transmission areas. Your
          lab has successfully genotyped infections from all four cases using
          the same amplicon sequencing panel with 12 microhaplotypes you just
          evaluated on controls.
        </p>
        <p>
          First let&apos;s estimate the MOI of each infection. Recall from
          Module 2, and from the controls you just evaluated, that with diverse
          loci like microhaplotypes you can just count the maximum number of
          alleles detected at a given locus to obtain a reasonable estimate of
          MOI. As before, the 12 columns represent your 12 microhaplotype loci,
          and the number of unique alleles detected at each locus is shown by
          colored boxes at that locus.
        </p>
      </div>
    ),
  },
  5: {
    title: <h5>Estimating MOI</h5>,
    instructions: (
      <div>
        <p>
          Let&apos;s compare the genotypes of patients A-D to get a more
          definitive answer. There are 6 pairwise comparisons (A and B, A and C,
          A and D, B and C, B and D, C and D). Select each <InlinePlus /> to
          compare the genotypes and IBS between each pair . You must view all 6
          pairwise comparisons before moving on.
        </p>
      </div>
    ),
  },
  6: {
    title: <h5>Estimating MOI</h5>,
    instructions: (
      <div>
        <p>Answer the following questions.</p>
      </div>
    ),
  },
  7: {
    title: <h5>Estimating MOI</h5>,
    instructions: (
      <div>
        <p>Answer the following questions.</p>
      </div>
    ),
  },
  8: {
    title: <h5>Estimating MOI</h5>,
    instructions: (
      <div>
        <p>
          In a real-world setting, you would be able to interpret the genotypes
          as you have just done, and be able to come to the right conclusions
          without actually needing to know what the actual parasite composition
          of the infections were. However, since this is a simulated example,
          you might be interested to know what the underlying infections in
          these unrelated cases actually looked like.
        </p>
        <p className="mt-4">
          Consistent with your conclusions, you can see that the parasites in
          the infections are completely unrelated to any other by descent (i.e.
          IBD is 0 for all comparisons). The simulation code used to create
          these data randomly chose alleles for each of the 8 parasites, just
          like when you created your lab clones.
        </p>
      </div>
    ),
  },
  9: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div>
        <p>
          Now let&apos;s investigate the five cases that occurred in the
          community of a different village. Recall that two of these five
          reported a history of recent travel outside Eliminati Province to
          different, high-transmission areas. That history may be consistent
          with them acquiring the infections elsewhere and importing them to the
          community you are investigating. However, the other three cases
          don&apos;t report recent travel and therefore raise concern about
          sustained transmission, potentially threatening your goal of
          elimination. If you do find evidence of transmission, you know cases
          directly linked to imported cases are classified as “introduced” cases
          and can sometimes occur even in areas certified as having eliminated
          malaria. However, if transmission occurs beyond introduced cases, you
          may need to consider intensifying interventions to successfully reach
          and maintain elimination.
        </p>
        <p className="mt-2">Let&apos;s take a look at your data!</p>
      </div>
    ),
  },
  10: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div>
        <p>
          View the genotypes for each infection. Estimate the MOI based on the
          genotype and enter it in the form. This information will not provide
          definitive answers regarding transmission, but may help you interpret
          your IBS results, since you learned earlier in this exercise that MOI
          can affect IBS.
        </p>
      </div>
    ),
  },
  11: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div>
        <p>
          Now let&apos;s compare the genotypes. First, take a look at the two
          cases with travel history (likely imported). Before we do, let&apos;s
          make a prediction.
        </p>
      </div>
    ),
  },
  12: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div>
        <p>
          Ok &ndash; let&apos;s see if the genetic data for these cases match
          your expectations. Select the <InlinePlus /> icon to compare the
          genotypes and IBS between these two infections. Once you understand
          why the transmission is unlikely, select the <InlinePlus minus /> to
          remove the connection.
        </p>
      </div>
    ),
  },
  13: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div>
        <p>
          Great &ndash; your investigation is starting to come together. Next,
          we might be interested to see if either of these potentially imported
          cases might have been responsible for infecting the three other cases
          (G, H, and I).
        </p>
        <p className="mt-4">
          Before we look at the genotyping data, what basic piece of
          epidemiologic data might you want to know in addition to the fact that
          they didn’t report recent travel? Why? Think about your answer then
          click the button below to get this important additional data!
        </p>
      </div>
    ),
  },
  14: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div>
        <p>
          Great &ndash; your investigation is starting to come together. Next,
          we might be interested to see if either of these potentially imported
          cases might have been responsible for infecting the three other cases
          (G, H, and I). Answer the question below before continuing.
        </p>
      </div>
    ),
  },
  15: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Let&apos;s start with looking at any evidence of introduced cases
          stemming from case E. Based on your genotyping data and the
          epidemiologic data that you have, identify what, if any, transmission
          you think is related to case E.
        </p>
        <p>
          Click the <InlinePlus /> to check IBS and decide whether you believe a
          transmission has taken place to add a connection. Click the{" "}
          <InlinePlus minus /> to remove the connection if you think
          transmission is unlikely. If you think transmission is likely, click
          the ends of the connection <InlineEdge /> to indicate which direction
          the infection likely went. You must view all connections and all
          connections you choose to keep must have a direction{" "}
          <InlineEdge arrow /> before proceeding.
        </p>
      </div>
    ),
  },
  16: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Now let&apos;s look at case F. Based on your genotyping data and the
          epidemiologic data you have, identify what, if any, transmission you
          think is related to case F.
        </p>
        <p>
          Click the <InlinePlus /> to check IBS and decide whether you believe a
          transmission has taken place to add a connection. Click the{" "}
          <InlinePlus minus /> to remove the connection if you think
          transmission is unlikely. If you think transmission is likely, click
          the ends of the connection <InlineEdge /> to indicate which direction
          the infection likely went. You must view all connections and all
          connections you choose to keep must have a direction{" "}
          <InlineEdge arrow /> before proceeding.
        </p>
      </div>
    ),
  },
  17: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Finally, let&apos;s look for any evidence of local transmission
          between cases G, H, and I.
        </p>
        <p>
          Click the <InlinePlus /> to check IBS and decide whether you believe a
          transmission has taken place to add a connection. Click the{" "}
          <InlinePlus minus /> to remove the connection if you think
          transmission is unlikely. If you think transmission is likely, click
          the ends of the connection <InlineEdge /> to indicate which direction
          the infection likely went. You must view all connections and all
          connections you choose to keep must have a direction{" "}
          <InlineEdge arrow /> before proceeding.
        </p>
      </div>
    ),
  },
  18: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Let's take a look at your results. Use this opportunity to fix your
          network by changing the direction of the infections, removing ones
          that should not exist, or adding ones that should.
        </p>
      </div>
    ),
  },
  19: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div>
        <p>
          Finally, let&apos;s look for any evidence of local transmission
          between cases G, H, and I.
        </p>
      </div>
    ),
  },
  20: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Based on your genotyping data and the epidemiologic data you have,
          identify what, if any, transmission you think is related to case F.
        </p>
        <p>
          Once you are satisfied with the connections and their directions,
          continue to the next step. You can return to this step during the
          activity to adjust your connections.
        </p>
      </div>
    ),
  },
  21: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Based on your genotyping data and the epidemiologic data you have,
          identify what, if any, transmission you think is related to case F.
        </p>
        <p>
          Once you are satisfied with the connections and their directions,
          continue to the next step. You can return to this step during the
          activity to adjust your connections.
        </p>
      </div>
    ),
  },
  22: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Based on your genotyping data and the epidemiologic data you have,
          identify what, if any, transmission you think is related to case F.
        </p>
        <p>
          Once you are satisfied with the connections and their directions,
          continue to the next step. You can return to this step during the
          activity to adjust your connections.
        </p>
      </div>
    ),
  },
  23: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          As with Scenario 1, you would be able to interpret the genotypes as
          you have just done and come to the right conclusions without actually
          needing to know what the parasite composition of the infections were.
          However, since this is a simulated example, we can show you what the
          underlying infections and transmission history in these cases actually
          looked like.
        </p>
      </div>
    ),
  },

  24: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Let’s look at how this transmission occurred now, step by step. Case E
          came into the village after traveling to a high transmission area and
          being infected with two genetically distinct parasite clones,
          resulting in a polyclonal infection with MOI of 2 (indicated by the
          red and blue colored balls in case E). This could have been due to
          infections by two different mosquitoes while traveling
          (superinfection) or infection with two unrelated parasite clones at
          the same time from one mosquito (cotransmission).
        </p>
      </div>
    ),
  },

  25: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>Next, a mosquito bit case E, and was infected with both clones.</p>
      </div>
    ),
  },

  26: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Sexual recombination between the clones occurred in the mosquito,
          creating a parasite clone that was a hybrid of the two.
        </p>
      </div>
    ),
  },

  27: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          After a week or so, the mosquito became infectious and was able to
          successfully feed on case G, infecting them and causing them to become
          sick with malaria a week or two after that. You were able to link
          these infections with genotyping despite the recombination, since all
          of the parasite genome in case G descended from the parasites in case
          E.
        </p>
      </div>
    ),
  },

  28: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          A similar process occurred for case I, after a second mosquito bit
          case E, was also infected, and transmitted a different hybrid of the
          parasites imported by case E.
        </p>
      </div>
    ),
  },

  29: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Notice that since cases G and I both were infected with parasites
          which had the same two parents, they are siblings. You had thought
          this might be the case from your genotyping data earlier, and you were
          right! We can also see from their sequences that IBD is 0.5, as we
          would expect for siblings.
        </p>
      </div>
    ),
  },

  29.5: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Fortunately, you were able to distinguish this relatedness from direct
          transmission between cases I and G. If you hadn’t been able to make
          that distinction, then transmission could have looked like this
          instead. How might this have changed your recommendations to the
          program?
        </p>
      </div>
    ),
  },

  30: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Case F also came into the village after traveling from a different
          high transmission area. This person was infected with three
          genetically distinct parasite clones during travel.
        </p>
      </div>
    ),
  },

  31: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          A third mosquito bit case F and was infected with at least 4
          gametocytes, representing all three clones.
        </p>
      </div>
    ),
  },

  32: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Recombination between these parasites again occurred in the mosquito,
          creating two new hybrid clones.
        </p>
      </div>
    ),
  },
  33: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          The mosquito then infected case H with the two hybrid clones. Case H
          developed malaria from these 2 clones, which you were able to clearly
          link to case F with your genotyping despite the polyclonal nature of
          both the infections.
        </p>
      </div>
    ),
  },
  34: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Now that we know exactly what the composition of all the infections
          was, we can evaluate IBD for each pair of infections and compare this
          to IBS. Click on any of the comparisons between cases in the table at
          the right to see more information about that connection (or lack of
          connection). Remember that IBD tells us more directly about shared
          ancestry than IBS, and therefore is potentially more informative about
          transmission, but that IBS is easier to calculate from genotyping
          data. In this scenario, you were able to use IBS to figure out the
          transmission process, but in a more complicated situation IBD might be
          more helpful. The good news is that there are available statistical
          methods which can estimate IBD from the same type of genotyping data
          you used here, even when you don’t know the underlying composition of
          the infections. There are even methods under development to
          specifically estimate transmission links, which we will review later
          in this module.
        </p>
      </div>
    ),
  },
  35: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          Notice that both IBD and IBS are 1 for all related infections, but
          that IBD is generally much lower than IBS for unrelated infections,
          making it easier to distinguish which are truly related by ancestry.
          In particular, note that the two infections which are siblings (cases
          G and I) have an IBD which is easier to distinguish from completely
          unrelated cases (0.5 vs. 0 for unrelated cases) than the IBS values
          (0.67 vs. a range of 0.17-0.33 for unrelated cases). This information
          about the siblings could have been particularly useful if case E was
          not captured by your surveillance – for example if they had an
          asymptomatic infection and did not present for care. In this case, we
          might still have be able to infer the presence of an imported case
          leading to cases G and I based on fact that these two siblings quite
          possibly derived from the same infection.
        </p>
      </div>
    ),
  },
  36: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          We’ve covered a lot of material in this module so far! Before we
          finish with the activity, let’s use this scenario to review a few
          concepts.
        </p>
      </div>
    ),
  },
  37: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          We’ve covered a lot of material in this module so far! Before we
          finish with the activity, let’s use this scenario to review a few
          concepts.
        </p>
      </div>
    ),
  },
  38: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          We’ve covered a lot of material in this module so far! Before we
          finish with the activity, let’s use this scenario to review a few
          concepts.
        </p>
      </div>
    ),
  },
  39: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          We’ve covered a lot of material in this module so far! Before we
          finish with the activity, let’s use this scenario to review a few
          concepts.
        </p>
      </div>
    ),
  },
  40: {
    title: <h5>Scenario 2: Village outbreak</h5>,
    instructions: (
      <div className="flex flex-col gap-2">
        <p>
          That was hard work, but it has paid off. You have shown that there is
          no concern about transmission in Scenario 1, allaying fears of an
          outbreak in the boarding school. You have also demonstrated for
          Scenario 2 that while there has been limited local transmission in the
          village, leading to a few introduced cases, there is not yet any
          evidence of sustained transmission. You made some very good choices
          early on, allowing you to come to such clear conclusions. You started
          by rigorously evaluating your genotyping methods on laboratory
          controls, allowing you to ensure that the data you produced were
          likely to provide the information that you needed. For example, you
          determined early on that a panel of 12 SNPs would not allow you to
          easily distinguish whether polyclonal infections were related or not
          and moved to a higher resolution panel of 12 microhaplotypes. You also
          generated enough data from your controls to show you how to interpret
          the results on unknowns. Finally, you carefully considered your
          genotyping data in the context of your high quality epidemiologic
          data, based your conclusions on the available evidence, and
          communicated results in a straightforward and accurate way to relevant
          parties. Your efforts have been noticed by those in charge, and there
          are rumors that additional resources are being mobilized to support
          your work along with promotions for you and your team.
        </p>
        <div className="py-8">
          <button
            onClick={() => {
              navigator.clipboard.writeText("TuYouyou1930");
            }}
            className="copy-tooltip ml-auto p-2 pb-1 underline"
          >
            Copy Code
          </button>
          <p className="text-center text-2xl text-interactiveBlue">
            TuYouyou1930
          </p>
        </div>{" "}
      </div>
    ),
  },
};
