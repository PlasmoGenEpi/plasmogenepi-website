import { ReactElement } from "react";
import Microhaplotype from "../../Shared/Microhaplotypes/Microhaplotype";
import { fixedData } from "@/data/Interactives/fixedData";
import { microhaplotypeColorMap } from "../../Shared/Microhaplotypes/MicrohaplotypeTable/MicrohaplotypeTableRow";
import SquareMicrohaplotype from "../../Shared/Microhaplotypes/SquareMicrohaplotype";
import InlineCircle from "../../Shared/misc/InlineCircle";

export const partSixPrompts: {
  [key: number]: {
    // title: ReactElement;
    // instructions: ReactElement;
    title: {
      EN: ReactElement;
      FR: ReactElement;
      PT: ReactElement;
    };
    instructions: {
      EN: ReactElement;
      FR: ReactElement;
      PT: ReactElement;
    };
  };
} = {
  0: {
    title: {
      EN: <h5>1.1. Genotyping with SNPs</h5>,
      FR: <h5>1.1 Génotypage à l'aide de SNP</h5>,
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            As is the case with most laboratory assays, it is often very helpful
            and sometimes essential to first generate and interpret data when
            you know the truth, so you can interpret the data where the truth is
            unknown.
          </p>
          <p>
            Therefore, in order to understand how to interpret data from your
            village and school outbreaks, you will first evaluate your methods
            and analysis on some laboratory clones. Fortunately, your
            experienced Laboratory Research Scientist, Dr. Issac, has stored
            samples from cultured parasite clones. You ask them to pull out
            samples from 3 clones that come from 3 different continents.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Comme c'est le cas pour la plupart des analyses de laboratoire, il
            est souvent très utile, voire essentiel, de générer et d'interpréter
            d'abord des données lorsque l'on connaît la vérité, afin de pouvoir
            interpréter les données lorsque la vérité est inconnue.
          </p>
          <p>
            Par conséquent, afin de comprendre comment interpréter les données
            des épidémies de votre village et de votre école, vous allez d'abord
            évaluer vos méthodes et vos analyses sur des clones de laboratoire.
            Heureusement, votre chercheur expérimenté en laboratoire, le Dr
            Issac, a stocké des échantillons de clones de parasites cultivés.
            Vous lui demandez de prélever des échantillons sur trois clones
            provenant de trois continents différents.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            As is the case with most laboratory assays, it is often very helpful
            and sometimes essential to first generate and interpret data when
            you know the truth, so you can interpret the data where the truth is
            unknown.
          </p>
          <p>
            Therefore, in order to understand how to interpret data from your
            village and school outbreaks, you will first evaluate your methods
            and analysis on some laboratory clones. Fortunately, your
            experienced Laboratory Research Scientist, Dr. Issac, has stored
            samples from cultured parasite clones. You ask them to pull out
            samples from 3 clones that come from 3 different continents.
          </p>
        </div>
      ),
    },
    // title: (
    //   <h5>
    //     1.1. Genotyping with SNPs
    //     {/* Genotype laboratory clones, estimate their relatedness by
    //     calculating IBS, and compare this to what you know about IBD. */}
    //   </h5>
    // ),
    // instructions: (
    //   <div className="flex flex-col gap-4">
    // <p>
    //   As is the case with most laboratory assays, it is often very helpful
    //   and sometimes essential to first generate and interpret data when you
    //   know the truth, so you can interpret the data where the truth is
    //   unknown.
    // </p>
    // <p>
    //   Therefore, in order to understand how to interpret data from your
    //   village and school outbreaks, you will first evaluate your methods and
    //   analysis on some laboratory clones. Fortunately, your experienced
    //   Laboratory Research Scientist, Dr. Issac, has stored samples from
    //   cultured parasite clones. You ask them to pull out samples from 3
    //   clones that come from 3 different continents.
    // </p>
    //   </div>
    // ),
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
    // title: <h5>1.1.1. Genotype 3 Unrelated Laboratory Clones with SNPs</h5>,
    // instructions: (
    //   <div>
    //     <p>
    // The simulation will randomly assign SNP alleles to 12 loci for each
    // laboratory clone. The reference and alternate alleles for these 12
    // loci are shown below. Like prior genotype sleuthing activities, these
    // SNPs have only 2 alleles each and are perfectly balanced, so there is
    // a 50/50 chance of getting the reference or alternate allele at each
    // locus. Each clone is completely unrelated to the others by ancestry,
    // as indicated by their different colors &ndash; you know this since
    // they come from completely different parts of the world. Click on each
    // of the three laboratory clones below to generate genotypes.
    //     </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.1. Genotyping with SNPs</h5>,
      FR: (
        <h5>
          1.1.1. Clones de laboratoire non apparentés du génotype 3 avec SNP
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          The simulation will randomly assign SNP alleles to 12 loci for each
          laboratory clone. The reference and alternate alleles for these 12
          loci are shown below. Like prior genotype sleuthing activities, these
          SNPs have only 2 alleles each and are perfectly balanced, so there is
          a 50/50 chance of getting the reference or alternate allele at each
          locus. Each clone is completely unrelated to the others by ancestry,
          as indicated by their different colors &ndash; you know this since
          they come from completely different parts of the world. Click on each
          of the three laboratory clones below to generate genotypes.
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          La simulation attribue au hasard des allèles SNP à 12 loci pour chaque
          clone de laboratoire. Les allèles de référence et alternatifs pour ces
          12 loci sont indiqués ci-dessous. Comme pour les activités précédentes
          de recherche de génotypes, ces SNP n'ont que 2 allèles chacun et sont
          parfaitement équilibrés, de sorte qu'il y a une chance sur deux
          d'obtenir l'allèle de référence ou l'allèle alternatif à chaque locus.
          Chaque clone n'a aucun lien de parenté avec les autres, comme
          l'indiquent leurs couleurs différentes - vous le savez puisqu'ils
          proviennent de régions du monde complètement différentes. Cliquez sur
          chacun des trois clones de laboratoire ci-dessous pour générer des
          génotypes.
        </div>
      ),
      PT: <div className="flex flex-col gap-4"></div>,
    },
  },
  2: {
    // title: (
    //   <h5>
    // 1.1.2. Predict What You Will Observe about IBS/IBD in Pairwise
    // Comparisons
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    //     <p>
    // Now that these unrelated clones have sequences, you can compare their
    // genotypes and calculate IBS - the percentage of SNPs that match
    // between any two. Before you do, however, you already have a sense of
    // what you expect.
    //     </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.1.2. Predict What You Will Observe about IBS/IBD in Pairwise
          Comparisons
        </h5>
      ),
      FR: (
        <h5>
          1.1.2. Prédire ce que vous observerez sur le SII/la MII dans les
          comparaisons par paires
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          Now that these unrelated clones have sequences, you can compare their
          genotypes and calculate IBS - the percentage of SNPs that match
          between any two. Before you do, however, you already have a sense of
          what you expect.
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          Maintenant que ces clones non apparentés ont des séquences, vous
          pouvez comparer leurs génotypes et calculer l'IBS - le pourcentage de
          SNP qui correspondent entre deux clones. Mais avant de le faire, vous
          avez déjà une idée de ce à quoi vous vous attendez.
        </div>
      ),
      PT: <div className="flex flex-col gap-4"></div>,
    },
  },
  3: {
    // title: <h5>1.1.3. Genotype and Compare Pairs of Unrelated Clones</h5>,
    // instructions: (
    //   <div>
    //     <p>
    // Compare the genotype of lab clone 1{" "}
    // <InlineCircle className="bg-cloneRed" /> to lab clone 2{" "}
    // <InlineCircle className="bg-cloneBlue" /> and use the interactive form
    // to check if the SNP alleles match at each locus.
    //     </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.1.3. Genotype and Compare Pairs of Unrelated Clones</h5>,
      FR: (
        <h5>
          1.1.3. Génotypage et comparaison de paires de clones non apparentés
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          Compare the genotype of lab clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> to lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" /> and use the interactive form
          to check if the SNP alleles match at each locus.
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          Comparez le génotype du clone de laboratoire 1 à celui du clone de
          laboratoire 2 et utilisez le formulaire interactif pour vérifier si
          les allèles SNP correspondent à chaque locus.
        </div>
      ),
      PT: <div className="flex flex-col gap-4"></div>,
    },
  },
  4: {
    // title: <h5>1.1.3. Genotype and Compare Pairs of Unrelated Clones</h5>,
    // instructions: (
    //   <div>
    //     <p>
    // Compare the genotype of lab clone 1{" "}
    // <InlineCircle className="bg-cloneRed" /> to lab clone 3{" "}
    // <InlineCircle className="bg-cloneGreen" /> and use the interactive
    // form to check if the SNP alleles match at each locus.
    //     </p>{" "}
    //   </div>
    // ),
    title: {
      EN: <h5>1.1.3. Genotype and Compare Pairs of Unrelated Clones</h5>,
      FR: (
        <h5>
          1.1.3. Génotypage et comparaison de paires de clones non apparentés
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          Compare the genotype of lab clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> to lab clone 3{" "}
          <InlineCircle className="bg-cloneGreen" /> and use the interactive
          form to check if the SNP alleles match at each locus.
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          Comparez le génotype du clone de laboratoire 1 à celui du clone de
          laboratoire 3 et utilisez le formulaire interactif pour vérifier si
          les allèles SNP correspondent à chaque locus.
        </div>
      ),
      PT: <div className="flex flex-col gap-4"></div>,
    },
  },
  5: {
    // title: <h5>1.1.3. Genotype and Compare Pairs of Unrelated Clones</h5>,
    // instructions: (
    //   <div>
    //     <p>
    // Compare the genotype of lab clone 2{" "}
    // <InlineCircle className="bg-cloneBlue" /> to lab clone 3{" "}
    // <InlineCircle className="bg-cloneGreen" /> and use the interactive
    // form to check if the SNP alleles match at each locus.
    //     </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.1.3. Genotype and Compare Pairs of Unrelated Clones</h5>,
      FR: (
        <h5>
          1.1.3. Génotypage et comparaison de paires de clones non apparentés
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          Compare the genotype of lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" /> to lab clone 3{" "}
          <InlineCircle className="bg-cloneGreen" /> and use the interactive
          form to check if the SNP alleles match at each locus.
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          Comparez le génotype du clone de laboratoire 2 à celui du clone de
          laboratoire 3 et utilisez le formulaire interactif pour vérifier si
          les allèles SNP correspondent à chaque locus.
        </div>
      ),
      PT: <div className="flex flex-col gap-4"></div>,
    },
  },
  6: {
    // title: <h5>1.1.4. Observe All Three IBS Estimates Together</h5>,
    // instructions: (
    //   <div>
    // <p>
    //   Take a look at the IBS estimates between these 3 pairs of clones,
    //   using 12 perfectly balanced SNPs.
    // </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.1.4. Observe All Three IBS Estimates Together</h5>,
      FR: <h5>1.1. Genotyping with SNPs</h5>,
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Take a look at the IBS estimates between these 3 pairs of clones,
            using 12 perfectly balanced SNPs.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Jetez un coup d'œil aux estimations de l'IBS entre ces 3 paires de
            clones, en utilisant 12 SNP parfaitement équilibrés.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Take a look at the IBS estimates between these 3 pairs of clones,
            using 12 perfectly balanced SNPs.
          </p>
        </div>
      ),
    },
  },
  7: {
    // title: <h5>1.1.4. Observe All Three IBS Estimates Together</h5>,
    // instructions: (
    //   <div>
    //     <p>Answer the following questions.</p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.1.4. Observe All Three IBS Estimates Together</h5>,
      FR: <h5>1.1. Genotyping with SNPs</h5>,
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>Answer the following questions.</p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>Répondez à la question suivante.</p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p></p>
        </div>
      ),
    },
  },
  8: {
    // title: (
    //   <h5>
    // 1.1.5. Knowledge Check: Distinguishing Related Parasites from Unrelated
    // Parasites Using IBS
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    //     <p>
    //       With 12 perfectly balanced SNPs like in these examples, we can
    //       estimate the probability that a certain number of SNPs will match when
    //       IBD is zero.
    //     </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.1.5. Knowledge Check: Distinguishing Related Parasites from
          Unrelated Parasites Using IBS
        </h5>
      ),
      FR: (
        <h5>
          1.1.5. Contrôle des connaissances : Distinguer les parasites
          apparentés des parasites non apparentés à l'aide de l'IBS
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            With 12 perfectly balanced SNPs like in these examples, we can
            estimate the probability that a certain number of SNPs will match
            when IBD is zero. //{" "}
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Avec 12 SNP parfaitement équilibrés comme dans ces exemples, nous
            pouvons estimer la probabilité qu'un certain nombre de SNP
            correspondent lorsque l'IBD est nul.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            // With 12 perfectly balanced SNPs like in these examples, we can //
            estimate the probability that a certain number of SNPs will match
            when // IBD is zero. //{" "}
          </p>
        </div>
      ),
    },
  },
  9: {
    // title: (
    //   <h5>
    //     1.1.5. Knowledge Check: Distinguishing Related Parasites from Unrelated
    //     Parasites Using IBS
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    // <p>
    //   With 12 perfectly balanced SNPs like in these examples, we can
    //   estimate the probability that a certain number of SNPs will match when
    //   IBD is zero.
    // </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.1.5. Knowledge Check: Distinguishing Related Parasites from
          Unrelated Parasites Using IBS
        </h5>
      ),
      FR: <h5>1.1. Genotyping with SNPs</h5>,
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            With 12 perfectly balanced SNPs like in these examples, we can
            estimate the probability that a certain number of SNPs will match
            when IBD is zero.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Avec 12 SNP parfaitement équilibrés comme dans ces exemples, nous
            pouvons estimer la probabilité qu'un certain nombre de SNP
            correspondent lorsque l'IBD est nul.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            With 12 perfectly balanced SNPs like in these examples, we can
            estimate the probability that a certain number of SNPs will match
            when IBD is zero.
          </p>
        </div>
      ),
    },
  },
  10: {
    // title: (
    //   <h5>
    //     1.1.5. Knowledge Check: Distinguishing Related Parasites from Unrelated
    //     Parasites Using IBS
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    // <p>
    //   With 12 perfectly balanced SNPs like in these examples, we can
    //   estimate the probability that a certain number of SNPs will match when
    //   IBD is zero.
    // </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.1.5. Knowledge Check: Distinguishing Related Parasites from
          Unrelated Parasites Using IBS
        </h5>
      ),
      FR: <h5>1.1. Genotyping with SNPs</h5>,
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            With 12 perfectly balanced SNPs like in these examples, we can
            estimate the probability that a certain number of SNPs will match
            when IBD is zero.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Avec 12 SNP parfaitement équilibrés comme dans ces exemples, nous
            pouvons estimer la probabilité qu'un certain nombre de SNP
            correspondent lorsque l'IBD est nul.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            With 12 perfectly balanced SNPs like in these examples, we can
            estimate the probability that a certain number of SNPs will match
            when IBD is zero.
          </p>
        </div>
      ),
    },
  },
  11: {
    // title: <h5>1.1.6. Generate a Laboratory Clone for 1 Hybrid Strain</h5>,
    // instructions: (
    //   <div className="flex flex-col gap-4">
    // <p>
    //   Now you and your lab team have a good idea of what to expect in terms
    //   of IBS when you compare 12 SNPs in two completely unrelated parasites.
    //   How about when they are related to each other?
    // </p>
    // <p>
    //   What if the parasites are related, but not the same? Once again, your
    //   wise lab director impresses you with their preparedness and deep
    //   respect for the utility of proper laboratory controls. They apparently
    //   have an additional sample that is a hybrid of 2 of the 3 unrelated
    //   clones. You are fortunate to work with such a fantastic team.
    // </p>
    // <p className="mt-2">
    //   This time, the simulation will make a laboratory clone (#4{" "}
    //   <InlineCircle hybrid />) that is a hybrid of lab clone 1{" "}
    //   <InlineCircle className="bg-cloneRed" /> and lab clone 2{" "}
    //   <InlineCircle className="bg-cloneBlue" />. Just like with humans, half
    //   of the genome of the progeny will be related to each parent. In this
    //   case, the first six SNP loci are identical to clone 1{" "}
    //   <InlineCircle className="bg-cloneRed" />, and the last six are
    //   identical to clone 2 <InlineCircle className="bg-cloneBlue" />. Click
    //   on the mosquito to have the parasites recombine and form a hybrid
    //   clone.
    // </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.1.6. Generate a Laboratory Clone for 1 Hybrid Strain</h5>,
      FR: (
        <h5>1.1.6. Générer un clone de laboratoire pour une souche hybride</h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Now you and your lab team have a good idea of what to expect in
            terms of IBS when you compare 12 SNPs in two completely unrelated
            parasites. How about when they are related to each other?
          </p>
          <p>
            What if the parasites are related, but not the same? Once again,
            your wise lab director impresses you with their preparedness and
            deep respect for the utility of proper laboratory controls. They
            apparently have an additional sample that is a hybrid of 2 of the 3
            unrelated clones. You are fortunate to work with such a fantastic
            team.
          </p>
          <p className="mt-2">
            This time, the simulation will make a laboratory clone (#4{" "}
            <InlineCircle hybrid />) that is a hybrid of lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" /> and lab clone 2{" "}
            <InlineCircle className="bg-cloneBlue" />. Just like with humans,
            half of the genome of the progeny will be related to each parent. In
            this case, the first six SNP loci are identical to clone 1{" "}
            <InlineCircle className="bg-cloneRed" />, and the last six are
            identical to clone 2 <InlineCircle className="bg-cloneBlue" />.
            Click on the mosquito to have the parasites recombine and form a
            hybrid clone.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Maintenant, vous et votre équipe de laboratoire avez une bonne idée
            de ce à quoi il faut s'attendre en termes d'IBS lorsque vous
            comparez 12 SNP dans deux parasites complètement non apparentés.
            Qu'en est-il lorsqu'ils sont apparentés l'un à l'autre ?
          </p>
          <p>
            Que se passe-t-il si les parasites sont apparentés, mais pas
            identiques ? Une fois de plus, votre directeur de laboratoire avisé
            vous impressionne par sa préparation et son profond respect de
            l'utilité des contrôles de laboratoire appropriés. Ils ont
            apparemment un échantillon supplémentaire qui est un hybride de 2
            des 3 clones non apparentés. Vous avez la chance de travailler avec
            une équipe aussi fantastique.
          </p>
          <p className="mt-2">
            Cette fois, la simulation produira un clone de laboratoire (#4) qui
            est un hybride du clone de laboratoire 1 et du clone de laboratoire
            2. Comme pour les humains, la moitié du génome de la progéniture
            sera liée à chaque parent. Dans ce cas, les six premiers loci SNP
            sont identiques au clone 1, et les six derniers sont identiques au
            clone 2. Cliquez sur le moustique pour que les parasites se
            recombinent et forment un clone hybride.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Now you and your lab team have a good idea of what to expect in
            terms of IBS when you compare 12 SNPs in two completely unrelated
            parasites. How about when they are related to each other?
          </p>
          <p>
            What if the parasites are related, but not the same? Once again,
            your wise lab director impresses you with their preparedness and
            deep respect for the utility of proper laboratory controls. They
            apparently have an additional sample that is a hybrid of 2 of the 3
            unrelated clones. You are fortunate to work with such a fantastic
            team.
          </p>
          <p className="mt-2">
            This time, the simulation will make a laboratory clone (#4{" "}
            <InlineCircle hybrid />) that is a hybrid of lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" /> and lab clone 2{" "}
            <InlineCircle className="bg-cloneBlue" />. Just like with humans,
            half of the genome of the progeny will be related to each parent. In
            this case, the first six SNP loci are identical to clone 1{" "}
            <InlineCircle className="bg-cloneRed" />, and the last six are
            identical to clone 2 <InlineCircle className="bg-cloneBlue" />.
            Click on the mosquito to have the parasites recombine and form a
            hybrid clone.
          </p>
        </div>
      ),
    },
  },
  12: {
    // title: (
    //   <h5>
    //     1.1.7. Genotype and Compare the Hybrid Clone to the First Three Clones
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    // <p className="mt-2">
    //   Let&apos;s compare the genotype of the new hybrid clone 4{" "}
    //   <InlineCircle hybrid /> to one of its parents, lab clone 1{" "}
    //   <InlineCircle className="bg-cloneRed" />. Use the interactive form to
    //   check if the SNP alleles match at each locus.
    // </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.1.7. Genotype and Compare the Hybrid Clone to the First Three Clones
        </h5>
      ),
      FR: (
        <h5>
          1.1.7. Génotyper et comparer le clone hybride aux trois premiers
          clones
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p className="mt-2">
            Let&apos;s compare the genotype of the new hybrid clone 4{" "}
            <InlineCircle hybrid /> to one of its parents, lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" />. Use the interactive form
            to check if the SNP alleles match at each locus.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p className="mt-2">
            Comparons le génotype du nouveau clone hybride 4 à l'un de ses
            parents, le clone de laboratoire 1. Utilisez le formulaire
            interactif pour vérifier si les allèles SNP correspondent à chaque
            locus.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p className="mt-2">
            Let&apos;s compare the genotype of the new hybrid clone 4{" "}
            <InlineCircle hybrid /> to one of its parents, lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" />. Use the interactive form
            to check if the SNP alleles match at each locus.
          </p>
        </div>
      ),
    },
  },
  13: {
    // title: (
    //   <h5>
    //     1.1.7. Genotype and Compare the Hybrid Clone to the First Three Clones
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    //     <p className="mt-2">
    // Now, let’s compare the genotype of the new hybrid clone 4{" "}
    // <InlineCircle hybrid /> to its other parent, lab clone 2{" "}
    // <InlineCircle className="bg-cloneBlue" />. Use the interactive form to
    // check if the SNP alleles match at each locus.
    //     </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.1.7. Genotype and Compare the Hybrid Clone to the First Three Clones
        </h5>
      ),
      FR: (
        <h5>
          1.1.7. Génotyper et comparer le clone hybride aux trois premiers
          clones
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          Now, let’s compare the genotype of the new hybrid clone 4{" "}
          <InlineCircle hybrid /> to its other parent, lab clone 2{" "}
          <InlineCircle className="bg-cloneBlue" />. Use the interactive form to
          check if the SNP alleles match at each locus.
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          Comparons maintenant le génotype du nouveau clone hybride 4 à celui de
          son autre parent, le clone de laboratoire 2. Utilisez le formulaire
          interactif pour vérifier si les allèles SNP correspondent à chaque
          locus.
        </div>
      ),
      PT: <div className="flex flex-col gap-4"></div>,
    },
  },
  13.5: {
    // title: (
    //   <h5>
    //     1.1.7. Genotype and Compare the Hybrid Clone to the First Three Clones
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    //     {/* <p className="mt-2">
    //       Now, let’s compare the genotype of the new hybrid clone 4{" "}
    //       <InlineCircle hybrid /> to its other parent, lab clone 2{" "}
    //       <InlineCircle className="bg-cloneBlue" />. Use the interactive form to
    //       check if the SNP alleles match at each locus.
    //     </p> */}
    //     <p>Answer the following question.</p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.1.7. Genotype and Compare the Hybrid Clone to the First Three Clones
        </h5>
      ),
      FR: (
        <h5>
          1.1.7. Génotyper et comparer le clone hybride aux trois premiers
          clones
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>Answer the following question.</p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>Répondez à la question suivante.</p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>Answer the following question.</p>
        </div>
      ),
    },
  },
  14: {
    // title: (
    //   <h5>
    //     1.1.7. Genotype and Compare the Hybrid Clone to the First Three Clones
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    //     <p className="mt-2">
    // Now let&apos;s compare our hybrid lab clone 4 <InlineCircle hybrid />{" "}
    // to clone 3 <InlineCircle className="bg-cloneGreen" />, which is not
    // its parent.
    //     </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.1.7. Genotype and Compare the Hybrid Clone to the First Three Clones
        </h5>
      ),
      FR: (
        <h5>
          1.1.7. Génotyper et comparer le clone hybride aux trois premiers
          clones
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          Now let&apos;s compare our hybrid lab clone 4 <InlineCircle hybrid />{" "}
          to clone 3 <InlineCircle className="bg-cloneGreen" />, which is not
          its parent.
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          Comparons maintenant notre laboratoire hybride clone 4 au clone 3 ,
          qui n'est pas son parent.
        </div>
      ),
      PT: <div className="flex flex-col gap-4"></div>,
    },
  },
  14.5: {
    // title: (
    //   <h5>
    //     1.1.7. Genotype and Compare the Hybrid Clone to the First Three Clones
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    // <p className="mt-2">
    //   At the other extreme, what if we compare two parasites which are
    //   completely related to each other, in other words they are genetically
    //   identical?
    // </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.1.7. Genotype and Compare the Hybrid Clone to the First Three Clones
        </h5>
      ),
      FR: (
        <h5>
          1.1.7. Génotyper et comparer le clone hybride aux trois premiers
          clones
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p className="mt-2">
            At the other extreme, what if we compare two parasites which are
            completely related to each other, in other words they are
            genetically identical?
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p className="mt-2">
            A l'autre extrême, que se passe-t-il si l'on compare deux parasites
            totalement apparentés, c'est-à-dire génétiquement identiques?
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p className="mt-2">
            At the other extreme, what if we compare two parasites which are
            completely related to each other, in other words they are
            genetically identical?
          </p>
        </div>
      ),
    },
  },
  15: {
    // title: (
    //   <h5>
    // 1.1.8. Knowledge Check: Distinguishing Related Parasites from Unrelated
    // Parasites Using IBS
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    // <p className="mt-2">
    //   Great work! You&apos;ve now done lab work to estimate genetic
    //   relatedness via IBS using 12 SNPs for a few parasites you know are
    //   unrelated by ancestry (IBD 0), some which are strongly related (IBD
    //   0.5, like siblings) or are completely identical (IBD 1.0).
    // </p>
    // <p className="mt-2">Let's review our results so far.</p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.1.8. Knowledge Check: Distinguishing Related Parasites from
          Unrelated Parasites Using IBS
        </h5>
      ),
      FR: (
        <h5>
          1.1.8. Contrôle des connaissances: Distinguer les parasites apparentés
          des parasites non apparentés à l'aide de l'IBS
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p className="mt-2">
            Great work! You&apos;ve now done lab work to estimate genetic
            relatedness via IBS using 12 SNPs for a few parasites you know are
            unrelated by ancestry (IBD 0), some which are strongly related (IBD
            0.5, like siblings) or are completely identical (IBD 1.0).
          </p>
          <p className="mt-2">Let's review our results so far.</p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p className="mt-2">
            Excellent travail ! Vous avez maintenant effectué un travail de
            laboratoire pour estimer la parenté génétique par le biais de l'IBS
            en utilisant 12 SNP pour quelques parasites dont vous savez qu'ils
            ne sont pas apparentés par l'ascendance (IBD 0), certains étant
            fortement apparentés (IBD 0,5, comme des frères et sœurs) ou
            complètement identiques (IBD 1,0).
          </p>
          <p className="mt-2">
            Passons en revue les résultats obtenus jusqu'à présent.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
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
    // title: <h5>1.2. Genotyping with Microhaplotypes</h5>,
    // instructions: (
    //   <div className="flex flex-col gap-2">
    // <p>
    //   Let’s look now and see how your related and unrelated clones would
    //   compare with microhaplotype genotyping. In this part of the activity,
    //   you will once again genotype laboratory clones, estimate their
    //   relatedness by calculating IBS, and compare this to what you know
    //   about IBD – but this time, all with microhaplotypes.
    // </p>
    // <p>
    //   In this example, each microhaplotype locus can have 1 of 8 alleles,
    //   like the exercise you did before in Module 2 where they were composed
    //   of 3 SNPs each. Microhaplotypes can have more or fewer possible
    //   alleles. Do you think it will be easier or harder to distinguish
    //   related and unrelated parasites using microhaplotypes? Let’s find out!
    // </p>
    // <p>
    //   A quick note about microhaplotypes in this exercise and moving
    //   forward. In previous exercises you will recall they appeared as{" "}
    //   <span
    //     aria-label="microhaplotype TTT"
    //     className=" inline-block h-0 w-[72px] scale-75 dark:brightness-75 "
    //   >
    //     <Microhaplotype
    //       possibleVals={[
    //         {
    //           reference: fixedData[1].refValues[0 * 3],
    //           alternate: fixedData[1].altValues[0 * 3],
    //         },
    //         {
    //           reference: fixedData[1].refValues[0 * 3 + 1],
    //           alternate: fixedData[1].altValues[0 * 3 + 1],
    //         },
    //         {
    //           reference: fixedData[1].refValues[0 * 3 + 2],
    //           alternate: fixedData[1].altValues[0 * 3 + 2],
    //         },
    //       ]}
    //       // @ts-ignore
    //       vals={[0, 0, 0]}
    //       childClassNames={{
    //         left: "pl-2",
    //         right: "pr-2",
    //       }}
    //       className={`col-span-3 border-2 ${microhaplotypeColorMap.get(
    //         JSON.stringify([0, 0, 0]),
    //       )}`}
    //     />
    //   </span>
    //   showing the component SNPs but moving forward the microhaplotype
    //   allele be shown just as a different color without the individual SNPs
    //   visible{" "}
    //   <span className="inline-block">
    //     <SquareMicrohaplotype
    //       className="absolute h-4 w-4 -translate-y-3"
    //       id={0}
    //     />
    //     <span className="inline-block w-5"></span>
    //   </span>
    //   . Just know that these represent the same thing.{" "}
    // </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.2. Genotyping with Microhaplotypes</h5>,
      FR: <h5>1.2 Génotypage avec les microhaplotypes</h5>,
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Let’s look now and see how your related and unrelated clones would
            compare with microhaplotype genotyping. In this part of the
            activity, you will once again genotype laboratory clones, estimate
            their relatedness by calculating IBS, and compare this to what you
            know about IBD – but this time, all with microhaplotypes.
          </p>
          <p>
            In this example, each microhaplotype locus can have 1 of 8 alleles,
            like the exercise you did before in Module 2 where they were
            composed of 3 SNPs each. Microhaplotypes can have more or fewer
            possible alleles. Do you think it will be easier or harder to
            distinguish related and unrelated parasites using microhaplotypes?
            Let’s find out!
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
                  JSON.stringify([0, 0, 0]),
                )}`}
              />
            </span>
            showing the component SNPs but moving forward the microhaplotype
            allele be shown just as a different color without the individual
            SNPs visible{" "}
            <span className="inline-block">
              <SquareMicrohaplotype
                className="absolute h-4 w-4 -translate-y-3"
                id={0}
              />
              <span className="inline-block w-5"></span>
            </span>
            . Just know that these represent the same thing.{" "}
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Voyons maintenant comment vos clones apparentés et non apparentés se
            comparent avec le génotypage par microhaplotypes. Dans cette partie
            de l'activité, vous allez à nouveau génotyper des clones de
            laboratoire, estimer leur parenté en calculant l'IBS, et comparer
            cela à ce que vous savez sur les MICI - mais cette fois-ci, tout
            cela avec des microhaplotypes.
          </p>
          <p>
            Dans cet exemple, chaque locus de microhaplotype peut avoir 1 ou 8
            allèles, comme dans l'exercice que vous avez fait précédemment dans
            le module 2 où ils étaient composés de 3 SNP chacun. Les
            microhaplotypes peuvent avoir plus ou moins d'allèles possibles.
            Pensez-vous qu'il sera plus facile ou plus difficile de distinguer
            les parasites apparentés de ceux qui ne le sont pas en utilisant les
            microhaplotypes ? Nous allons le découvrir !
          </p>
          <p>
            Une petite remarque sur les microhaplotypes dans cet exercice et à
            l'avenir. Dans les exercices précédents, vous vous souviendrez
            qu'ils apparaissaient comme montrant les SNP composants, mais dans
            la suite de l'exercice, l'allèle du microhaplotype sera montré comme
            une couleur différente sans que les SNP individuels soient visibles.
            Sachez simplement qu'il s'agit de la même chose.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Let’s look now and see how your related and unrelated clones would
            compare with microhaplotype genotyping. In this part of the
            activity, you will once again genotype laboratory clones, estimate
            their relatedness by calculating IBS, and compare this to what you
            know about IBD – but this time, all with microhaplotypes.
          </p>
          <p>
            In this example, each microhaplotype locus can have 1 of 8 alleles,
            like the exercise you did before in Module 2 where they were
            composed of 3 SNPs each. Microhaplotypes can have more or fewer
            possible alleles. Do you think it will be easier or harder to
            distinguish related and unrelated parasites using microhaplotypes?
            Let’s find out!
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
                  JSON.stringify([0, 0, 0]),
                )}`}
              />
            </span>
            showing the component SNPs but moving forward the microhaplotype
            allele be shown just as a different color without the individual
            SNPs visible{" "}
            <span className="inline-block">
              <SquareMicrohaplotype
                className="absolute h-4 w-4 -translate-y-3"
                id={0}
              />
              <span className="inline-block w-5"></span>
            </span>
            . Just know that these represent the same thing.{" "}
          </p>
        </div>
      ),
    },
  },

  22: {
    // title: (
    //   <h5>
    // 1.2.1. Generate Laboratory Clones for 3 Unrelated Strains with
    // Microhaplotypes
    //   </h5>
    // ),
    // instructions: (
    //   <div className="flex flex-col gap-4">
    // <p>
    //   Run the simulation by clicking the empty rows in the table to genotype
    //   3 laboratory clones. Each laboratory clone will be assigned a random
    //   sequence of 12 microhaplotype alleles (represented by 1 of 8 colors).
    // </p>
    // <p>
    //   Like prior genotype sleuthing activities, these microhaplotypes are
    //   perfectly balanced, so there is a 1/8 chance of getting any
    //   microhaplotype allele at each locus. Just like before, each clone is
    //   completely unrelated to the others by ancestry, as indicated by their
    //   different colors – you know this since they come from completely
    //   different parts of the world.
    // </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.2.1. Generate Laboratory Clones for 3 Unrelated Strains with
          Microhaplotypes
        </h5>
      ),
      FR: (
        <h5>
          1.2.1. Générer des clones de laboratoire pour 3 souches non
          apparentées avec des microhaplotypes
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Run the simulation by clicking the empty rows in the table to
            genotype 3 laboratory clones. Each laboratory clone will be assigned
            a random sequence of 12 microhaplotype alleles (represented by 1 of
            8 colors).
          </p>
          <p>
            Like prior genotype sleuthing activities, these microhaplotypes are
            perfectly balanced, so there is a 1/8 chance of getting any
            microhaplotype allele at each locus. Just like before, each clone is
            completely unrelated to the others by ancestry, as indicated by
            their different colors – you know this since they come from
            completely different parts of the world.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Exécutez la simulation en cliquant sur les lignes vides du tableau
            pour génotyper 3 clones de laboratoire. Chaque clone de laboratoire
            se verra attribuer une séquence aléatoire de 12 allèles de
            microhaplotypes (représentés par 1 des 8 couleurs).
          </p>
          <p>
            Comme pour les activités précédentes de recherche de génotypes, ces
            microhaplotypes sont parfaitement équilibrés, de sorte qu'il y a une
            chance sur huit d'obtenir n'importe quel allèle de microhaplotype à
            chaque locus. Comme précédemment, chaque clone n'a aucun lien de
            parenté avec les autres, comme l'indiquent leurs couleurs
            différentes - vous le savez puisqu'ils proviennent de régions du
            monde complètement différentes.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Run the simulation by clicking the empty rows in the table to
            genotype 3 laboratory clones. Each laboratory clone will be assigned
            a random sequence of 12 microhaplotype alleles (represented by 1 of
            8 colors).
          </p>
          <p>
            Like prior genotype sleuthing activities, these microhaplotypes are
            perfectly balanced, so there is a 1/8 chance of getting any
            microhaplotype allele at each locus. Just like before, each clone is
            completely unrelated to the others by ancestry, as indicated by
            their different colors – you know this since they come from
            completely different parts of the world.
          </p>
        </div>
      ),
    },
  },
  22.5: {
    // title: (
    //   <h5>
    // 1.2.2. Predict What You Will Observe about IBS/IBD in Pairwise
    // Comparisons
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    // <p>
    //   Now that these unrelated clones have microhaplotype sequences, you can
    //   compare their genotypes and calculate IBS - the percentage of
    //   microhaplotypes that match between any two pairs. Before you do...
    // </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.2.2. Predict What You Will Observe about IBS/IBD in Pairwise
          Comparisons
        </h5>
      ),
      FR: (
        <h5>
          1.2.2. Prédire ce que vous observerez sur le SII/la MII dans les
          comparaisons par paires
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Now that these unrelated clones have microhaplotype sequences, you
            can compare their genotypes and calculate IBS - the percentage of
            microhaplotypes that match between any two pairs. Before you do...
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Maintenant que ces clones non apparentés ont des séquences de
            microhaplotypes, vous pouvez comparer leurs génotypes et calculer
            l'IBS - le pourcentage de microhaplotypes qui correspondent entre
            deux paires. Avant de procéder...
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Now that these unrelated clones have microhaplotype sequences, you
            can compare their genotypes and calculate IBS - the percentage of
            microhaplotypes that match between any two pairs. Before you do...
          </p>
        </div>
      ),
    },
  },
  23: {
    // title: <h5>1.2.3. Genotype and Compare Pairs of Unrelated Clones</h5>,
    // instructions: (
    //   <div>
    // <p>
    //   Compare the genotype of lab clone 1{" "}
    //   <InlineCircle className="bg-cloneRed" /> to lab clone 2{" "}
    //   <InlineCircle className="bg-cloneBlue" /> and use the interactive form
    //   to check if the SNP alleles match at each locus.
    // </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.2.3. Genotype and Compare Pairs of Unrelated Clones</h5>,
      FR: (
        <h5>
          1.2.3. Génotypage et comparaison de paires de clones non apparentés
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Compare the genotype of lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" /> to lab clone 2{" "}
            <InlineCircle className="bg-cloneBlue" /> and use the interactive
            form to check if the SNP alleles match at each locus.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Comparez le génotype du clone de laboratoire 1 à celui du clone de
            laboratoire 2 et utilisez le formulaire interactif pour vérifier si
            les allèles SNP correspondent à chaque locus.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Compare the genotype of lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" /> to lab clone 2{" "}
            <InlineCircle className="bg-cloneBlue" /> and use the interactive
            form to check if the SNP alleles match at each locus.
          </p>
        </div>
      ),
    },
  },
  24: {
    // title: <h5>1.2.3. Genotype and Compare Pairs of Unrelated Clones </h5>,
    // instructions: (
    //   <div>
    // <p>
    //   Compare the genotype of lab clone 1{" "}
    //   <InlineCircle className="bg-cloneRed" /> to lab clone 3{" "}
    //   <InlineCircle className="bg-cloneGreen" /> and use the interactive
    //   form to check if the SNP alleles match at each locus.
    // </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.2.3. Genotype and Compare Pairs of Unrelated Clones </h5>,
      FR: (
        <h5>
          1.2.3. Génotypage et comparaison de paires de clones non apparentés
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Compare the genotype of lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" /> to lab clone 3{" "}
            <InlineCircle className="bg-cloneGreen" /> and use the interactive
            form to check if the SNP alleles match at each locus.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Comparez le génotype du clone de laboratoire 1 à celui du clone de
            laboratoire 3 et utilisez le formulaire interactif pour vérifier si
            les allèles SNP correspondent à chaque locus.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Compare the genotype of lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" /> to lab clone 3{" "}
            <InlineCircle className="bg-cloneGreen" /> and use the interactive
            form to check if the SNP alleles match at each locus.
          </p>
        </div>
      ),
    },
  },
  25: {
    // title: <h5>1.2.3. Genotype and Compare Pairs of Unrelated Clones </h5>,
    // instructions: (
    //   <div>
    // <p>
    //   Compare the genotype of lab clone 2{" "}
    //   <InlineCircle className="bg-cloneBlue" /> to lab clone 3{" "}
    //   <InlineCircle className="bg-cloneGreen" /> and use the interactive
    //   form to check if the SNP alleles match at each locus.
    // </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.2.3. Genotype and Compare Pairs of Unrelated Clones </h5>,
      FR: (
        <h5>
          1.2.3. Génotypage et comparaison de paires de clones non apparentés
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Compare the genotype of lab clone 2{" "}
            <InlineCircle className="bg-cloneBlue" /> to lab clone 3{" "}
            <InlineCircle className="bg-cloneGreen" /> and use the interactive
            form to check if the SNP alleles match at each locus.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Comparez le génotype du clone de laboratoire 2 à celui du clone de
            laboratoire 3 et utilisez le formulaire interactif pour vérifier si
            les allèles SNP correspondent à chaque locus.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Compare the genotype of lab clone 2{" "}
            <InlineCircle className="bg-cloneBlue" /> to lab clone 3{" "}
            <InlineCircle className="bg-cloneGreen" /> and use the interactive
            form to check if the SNP alleles match at each locus.
          </p>
        </div>
      ),
    },
  },
  26: {
    // title: <h5>1.2.4. Observe All Three IBS Estimates Together</h5>,
    // instructions: (
    //   <div>
    //     <p>Answer the questions below.</p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.2.4. Observe All Three IBS Estimates Together</h5>,
      FR: <h5>1.2.4. Observer les trois estimations de l'IBS ensemble</h5>,
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>Answer the questions below.</p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>Répondez aux questions ci-dessous.</p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>Answer the questions below.</p>
        </div>
      ),
    },
  },
  27: {
    // title: <h5>1.2.4 Knowledge Check</h5>,
    // instructions: (
    //   <div>
    // <p>
    //   You should have noticed that you had fewer alleles matching by chance
    //   in these unrelated parasites, since the microhaplotypes were more
    //   diverse than SNPs – making IBS lower and better reflecting IBD (which
    //   was always zero). This histogram shows the expected number of matches
    //   using 12 microhaplotypes with 8 alleles each – usually less than 5.
    //   This contrasts with SNPs, which could have up to 9 or 10 matches.
    // </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.2.4 Knowledge Check</h5>,
      FR: <h5>1.2.4. Contrôle des connaissances</h5>,
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            You should have noticed that you had fewer alleles matching by
            chance in these unrelated parasites, since the microhaplotypes were
            more diverse than SNPs – making IBS lower and better reflecting IBD
            (which was always zero). This histogram shows the expected number of
            matches using 12 microhaplotypes with 8 alleles each – usually less
            than 5. This contrasts with SNPs, which could have up to 9 or 10
            matches.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            You should have noticed that you had fewer alleles matching by
            chance in these unrelated parasites, since the microhaplotypes were
            more diverse than SNPs – making IBS lower and better reflecting IBD
            (which was always zero). This histogram shows the expected number of
            matches using 12 microhaplotypes with 8 alleles each – usually less
            than 5. This contrasts with SNPs, which could have up to 9 or 10
            matches.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Vous auriez dû remarquer que vous aviez moins d'allèles
            correspondant par hasard dans ces parasites non apparentés, car les
            microhaplotypes étaient plus diversifiés que les SNP - ce qui rend
            l'IBS plus faible et reflète mieux l'IBD (qui était toujours nul).
            Cet histogramme montre le nombre attendu de correspondances en
            utilisant 12 microhaplotypes avec 8 allèles chacun - généralement
            moins de 5. Cela contraste avec les SNP, qui pourraient avoir
            jusqu'à 9 ou 10 correspondances.
          </p>
        </div>
      ),
    },
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
    // title: <h5>1.2.5. Generate a Laboratory Clone for 1 Hybrid Strain</h5>,
    // instructions: (
    //   <div>
    // <p>
    //   Now you and your lab team have a good idea of what to expect in terms
    //   of IBS when you compare 12 microhaplotypes in two completely unrelated
    //   parasites, and how that is different to when you used SNPs to compare
    //   unrelated parasites. But what about related parasites?
    // </p>
    // <p className="mt-4">
    //   Click the mosquito to run the simulation. This time, the simulation
    //   will make a laboratory clone from microhaplotypes (#4{" "}
    //   <InlineCircle hybrid /> ) that is a hybrid of lab clone 1{" "}
    //   <InlineCircle className="bg-cloneRed" /> and lab clone 2{" "}
    //   <InlineCircle className="bg-cloneBlue" />. Just like when we used SNPs
    //   earlier in the exercise, half of the genome of the progeny will be
    //   related to each parent. In this case, the first six microhaplotype
    //   loci are identical to clone 1 <InlineCircle className="bg-cloneRed" />{" "}
    //   , and the last six microhaplotype loci are identical to clone 2{" "}
    //   <InlineCircle className="bg-cloneBlue" />. Click on the mosquito to
    //   have the parasites recombine and form a hybrid clone.
    // </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.2.5. Generate a Laboratory Clone for 1 Hybrid Strain</h5>,
      FR: (
        <h5>1.2.5. Générer un clone de laboratoire pour une souche hybride</h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Now you and your lab team have a good idea of what to expect in
            terms of IBS when you compare 12 microhaplotypes in two completely
            unrelated parasites, and how that is different to when you used SNPs
            to compare unrelated parasites. But what about related parasites?
          </p>
          <p>
            Click the mosquito to run the simulation. This time, the simulation
            will make a laboratory clone from microhaplotypes (#4{" "}
            <InlineCircle hybrid /> ) that is a hybrid of lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" /> and lab clone 2{" "}
            <InlineCircle className="bg-cloneBlue" />. Just like when we used
            SNPs earlier in the exercise, half of the genome of the progeny will
            be related to each parent. In this case, the first six
            microhaplotype loci are identical to clone 1{" "}
            <InlineCircle className="bg-cloneRed" /> , and the last six
            microhaplotype loci are identical to clone 2{" "}
            <InlineCircle className="bg-cloneBlue" />. Click on the mosquito to
            have the parasites recombine and form a hybrid clone.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Maintenant, vous et votre équipe de laboratoire avez une bonne idée
            de ce à quoi vous pouvez vous attendre en termes de SII lorsque vous
            comparez 12 microhaplotypes dans deux parasites complètement non
            apparentés, et de la façon dont cela diffère de l'utilisation de SNP
            pour comparer des parasites non apparentés. Mais qu'en est-il des
            parasites apparentés ?
          </p>
          <p>
            Cliquez sur le moustique pour lancer la simulation. Cette fois, la
            simulation produira un clone de laboratoire à partir de
            microhaplotypes (#4) qui est un hybride du clone de laboratoire 1 et
            du clone de laboratoire 2. Tout comme lorsque nous avons utilisé les
            SNP plus tôt dans l'exercice, la moitié du génome de la progéniture
            sera liée à chaque parent. Dans ce cas, les six premiers loci du
            microhaplotype sont identiques au clone 1, et les six derniers loci
            du microhaplotype sont identiques au clone 2. Cliquez sur le
            moustique pour que les parasites se recombinent et forment un clone
            hybride.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Now you and your lab team have a good idea of what to expect in
            terms of IBS when you compare 12 microhaplotypes in two completely
            unrelated parasites, and how that is different to when you used SNPs
            to compare unrelated parasites. But what about related parasites?
          </p>
          <p>
            Click the mosquito to run the simulation. This time, the simulation
            will make a laboratory clone from microhaplotypes (#4{" "}
            <InlineCircle hybrid /> ) that is a hybrid of lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" /> and lab clone 2{" "}
            <InlineCircle className="bg-cloneBlue" />. Just like when we used
            SNPs earlier in the exercise, half of the genome of the progeny will
            be related to each parent. In this case, the first six
            microhaplotype loci are identical to clone 1{" "}
            <InlineCircle className="bg-cloneRed" /> , and the last six
            microhaplotype loci are identical to clone 2{" "}
            <InlineCircle className="bg-cloneBlue" />. Click on the mosquito to
            have the parasites recombine and form a hybrid clone.
          </p>
        </div>
      ),
    },
  },
  30: {
    // title: (
    //   <h5>
    //     1.2.6. Genotype and Compare the Hybrid Clone to First Three Clones
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    // <p className="mt-2">
    //   Let’s compare the genotype of the new hybrid clone 4{" "}
    //   <InlineCircle hybrid /> to one of its parents, lab clone 1{" "}
    //   <InlineCircle className="bg-cloneRed" />. Use the interactive form to
    //   check if the microhaplotype alleles match at each locus.
    // </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.2.6. Genotype and Compare the Hybrid Clone to First Three Clones
        </h5>
      ),
      FR: (
        <h5>
          1.2.6. Génotyper et comparer le clone hybride aux trois premiers
          clones
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Let’s compare the genotype of the new hybrid clone 4{" "}
            <InlineCircle hybrid /> to one of its parents, lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" />. Use the interactive form
            to check if the microhaplotype alleles match at each locus.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Comparons le génotype du nouveau clone hybride 4 à l'un de ses
            parents, le clone de laboratoire 1. Utilisez le formulaire
            interactif pour vérifier si les allèles du microhaplotype
            correspondent à chaque locus.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Let’s compare the genotype of the new hybrid clone 4{" "}
            <InlineCircle hybrid /> to one of its parents, lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" />. Use the interactive form
            to check if the microhaplotype alleles match at each locus.
          </p>
        </div>
      ),
    },
  },
  31: {
    // title: (
    //   <h5>
    //     1.2.6. Genotype and Compare the Hybrid Clone to First Three Clones
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    // <p className="mt-2">
    //   Now, let’s compare the genotype of the new hybrid clone 4{" "}
    //   <InlineCircle hybrid /> to its other parent, lab clone 2{" "}
    //   <InlineCircle className="bg-cloneBlue" />. Use the interactive form to
    //   check if the microhaplotype alleles match at each locus.
    // </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.2.6. Genotype and Compare the Hybrid Clone to First Three Clones
        </h5>
      ),
      FR: (
        <h5>
          1.2.6. Génotyper et comparer le clone hybride aux trois premiers
          clones
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Now, let’s compare the genotype of the new hybrid clone 4{" "}
            <InlineCircle hybrid /> to its other parent, lab clone 2{" "}
            <InlineCircle className="bg-cloneBlue" />. Use the interactive form
            to check if the microhaplotype alleles match at each locus.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Comparons le génotype du nouveau clone hybride 4 à l'un de ses
            parents, le clone de laboratoire 2. Utilisez le formulaire
            interactif pour vérifier si les allèles du microhaplotype
            correspondent à chaque locus.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Now, let’s compare the genotype of the new hybrid clone 4{" "}
            <InlineCircle hybrid /> to its other parent, lab clone 2{" "}
            <InlineCircle className="bg-cloneBlue" />. Use the interactive form
            to check if the microhaplotype alleles match at each locus.
          </p>
        </div>
      ),
    },
  },
  31.5: {
    // title: (
    //   <h5>
    //     1.2.6. Genotype and Compare the Hybrid Clone to First Three Clones
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    // <p className="mt-2">
    //   Now, let’s compare the genotype of the new hybrid clone 4{" "}
    //   <InlineCircle hybrid /> to its other parent, lab clone 3{" "}
    //   <InlineCircle className="bg-cloneGreen" />.{" "}
    //   <span className="invisible">
    //     Use the interactive form to check if the microhaplotype alleles
    //     match at each locus.
    //   </span>
    // </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.2.6. Genotype and Compare the Hybrid Clone to First Three Clones
        </h5>
      ),
      FR: (
        <h5>
          1.2.6. Génotyper et comparer le clone hybride aux trois premiers
          clones
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
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
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Comparons maintenant le génotype du nouveau clone hybride 4 à celui
            de son autre parent, le clone de laboratoire 3.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
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
  },
  32: {
    // title: (
    //   <h5>
    //     1.2.6. Genotype and Compare the Hybrid Clone to First Three Clones
    //   </h5>
    // ),
    // instructions: (
    // <div>
    // <p className="mt-2">
    //   Now, let’s compare the genotype of the new hybrid clone 4{" "}
    //   <InlineCircle hybrid /> to an unrelated clone, lab clone 3{" "}
    //   <InlineCircle className="bg-cloneGreen" />.{" "}
    //   <span className="invisible">
    //     Use the interactive form to check if the microhaplotype alleles
    //     match at each locus.
    //   </span>
    // </p>
    // </div>
    // ),
    title: {
      EN: (
        <h5>
          1.2.6. Genotype and Compare the Hybrid Clone to First Three Clones
        </h5>
      ),
      FR: (
        <h5>
          1.2.6. Génotyper et comparer le clone hybride aux trois premiers
          clones
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
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
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Comparons maintenant le génotype du nouveau clone hybride 4 à celui
            de son autre parent, le clone de laboratoire 3.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
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
  },
  33: {
    // title: (
    //   <h5>
    // 1.2.7. Knowledge Check: Distinguishing Related Parasites from Unrelated
    // Parasites Using IBS
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    // <p>
    //   Great work! You’ve now done lab work to estimate genetic relatedness
    //   via IBS using 12 microhaplotypes for a few parasites you know are
    //   unrelated by ancestry (IBD 0) and some which are strongly related (
    //   IBD 0.5, like siblings). You already know that if parasites are
    //   completely identical (IBD 1.0), then genotypes will be identical
    //   unless there is mutation or error.
    // </p>
    // <p className="mt-2">Let’s review our results so far:</p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.2.7. Knowledge Check: Distinguishing Related Parasites from
          Unrelated Parasites Using IBS
        </h5>
      ),
      FR: (
        <h5>
          1.2.7. Contrôle des connaissances : Distinguer les parasites
          apparentés des parasites non apparentés à l'aide de l'IBS
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Great work! You’ve now done lab work to estimate genetic relatedness
            via IBS using 12 microhaplotypes for a few parasites you know are
            unrelated by ancestry (IBD 0) and some which are strongly related (
            IBD 0.5, like siblings). You already know that if parasites are
            completely identical (IBD 1.0), then genotypes will be identical
            unless there is mutation or error.
          </p>
          <p>Let’s review our results so far:</p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Excellent travail ! Vous avez maintenant effectué un travail de
            laboratoire pour estimer la parenté génétique via l'IBS en utilisant
            12 microhaplotypes pour quelques parasites dont vous savez qu'ils ne
            sont pas apparentés par l'ascendance (IBD 0) et certains qui sont
            fortement apparentés ( IBD 0,5, comme des frères et sœurs). Vous
            savez déjà que si les parasites sont totalement identiques (IBD
            1,0), les génotypes seront identiques, sauf en cas de mutation ou
            d'erreur.
          </p>
          <p>Passons en revue les résultats obtenus jusqu'à présent:</p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Great work! You’ve now done lab work to estimate genetic relatedness
            via IBS using 12 microhaplotypes for a few parasites you know are
            unrelated by ancestry (IBD 0) and some which are strongly related (
            IBD 0.5, like siblings). You already know that if parasites are
            completely identical (IBD 1.0), then genotypes will be identical
            unless there is mutation or error.
          </p>
          <p>Let’s review our results so far:</p>
        </div>
      ),
    },
  },
  33.5: {
    // title: (
    //   <h5>
    //     1.2.7. Knowledge Check: Distinguishing Related Parasites from Unrelated
    //     Parasites Using IBS
    //   </h5>
    // ),
    // instructions: (
    //   <div>
    // <p>
    //   Your investment has paid off &ndash; with 12 SNPs it was difficult for
    //   you to distinguish siblings from unrelated parasites, and sometimes
    //   even from perfectly related parasites, based on the number of matches.
    // </p>
    //   </div>
    // ),
    title: {
      EN: (
        <h5>
          1.2.7. Knowledge Check: Distinguishing Related Parasites from
          Unrelated Parasites Using IBS
        </h5>
      ),
      FR: (
        <h5>
          1.2.7. Contrôle des connaissances : Distinguer les parasites
          apparentés des parasites non apparentés à l'aide de l'IBS
        </h5>
      ),
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Your investment has paid off &ndash; with 12 SNPs it was difficult
            for you to distinguish siblings from unrelated parasites, and
            sometimes even from perfectly related parasites, based on the number
            of matches.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Votre investissement a porté ses fruits : avec 12 SNP, il vous était
            difficile de distinguer les frères et sœurs des parasites non
            apparentés, et parfois même des parasites parfaitement apparentés,
            sur la base du nombre de correspondances.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            O seu investimento valeu a pena - com 12 SNPs era difícil distinguir
            irmãos de parasitas não relacionados, e por vezes até de parasitas
            perfeitamente relacionados, com base no número de correspondências.
          </p>
        </div>
      ),
    },
  },
  34: {
    // title: <h5> unrelated parasites using IBS</h5>,
    // instructions: (
    //   <div>
    //     <p>
    //       By increasing the resolution of your genotyping, you can more easily
    //       tell which parasites are related by ancestry and therefore by
    //       transmission. You also now have a good sense of what you observe in
    //       terms of IBS means in terms of the true relatedness of the parasites.
    //       You are almost ready to answer your program’s questions about these
    //       concerning outbreaks! You have just one more thing to do first…
    //     </p>
    //   </div>
    // ),
    title: {
      EN: <h5>1.1. Genotyping with SNPs</h5>,
      FR: <h5>1.1. Genotyping with SNPs</h5>,
      PT: <h5>1.1. Genotyping with SNPs</h5>,
    },
    instructions: {
      EN: <div className="flex flex-col gap-4"></div>,
      FR: <div className="flex flex-col gap-4"></div>,
      PT: <div className="flex flex-col gap-4"></div>,
    },
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
