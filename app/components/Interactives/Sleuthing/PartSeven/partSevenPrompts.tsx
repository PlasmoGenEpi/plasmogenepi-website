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
    title: {
      EN: <h5>2.1.1 Case Study Recap</h5>,
      FR: <h5>2.1.1 Récapitulatif de l'étude de cas</h5>,
      PT: <h5>2.1.1 Recapitulação do estudo de caso</h5>,
    },
    //  <h5>2.1.1 Case Study Recap</h5>,
    // instructions: (
    // <div className="flex flex-col gap-4 font-helvetica [font-size:15px]">
    //   <p>
    //     So far, you have been comparing genotypes of individual parasites to
    //     each other. However, you remember that to evaluate data from real
    //     cases in your potential outbreaks you will need to compare infections
    //     which are often polyclonal, containing more than one genetically
    //     distinct parasite.
    //   </p>
    //   <p>
    //     Your lab director suggests a solution: make positive controls using
    //     combinations of the laboratory clones, so you can see what IBS looks
    //     like in the setting of polyclonal infections when you know the truth.
    //     You agree this is the best next step and ask your lab to make the
    //     polyclonal controls right away.
    //   </p>
    //   <p>
    //     While the controls are being prepared, you think about how you will
    //     evaluate IBS when there are multiple alleles present in each sample.
    //     In reality, there are several ways this could be calculated, but for
    //     the purposes of this exercise we will consider a locus to be IBS if
    //     there are any matching alleles between samples.
    //   </p>
    //   <p>
    //     With this in mind, do you expect IBS to be higher or lower with
    //     unrelated polyclonal vs. monoclonal samples?
    //   </p>
    //   <div className="mt-12">
    //     <p>
    //       At the end of step 1, you have 3 laboratory clones made from
    //       microhaplotypes. Take a moment to recall their composition.
    //     </p>
    //     <div className="mt-8 grid place-items-center">
    //       <div className="mx-auto w-full max-w-[500px]">
    //         <h5 className="mb-4 font-bold">
    //           Lab Clones with Microhaplotypes
    //         </h5>
    //         <P6MHPCloneRows />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-4 font-helvetica [font-size:15px]">
          <p>
            So far, you have been comparing genotypes of individual parasites to
            each other. However, you remember that to evaluate data from real
            cases in your potential outbreaks you will need to compare
            infections which are often polyclonal, containing more than one
            genetically distinct parasite.
          </p>
          <p>
            Your lab director suggests a solution: make positive controls using
            combinations of the laboratory clones, so you can see what IBS looks
            like in the setting of polyclonal infections when you know the
            truth. You agree this is the best next step and ask your lab to make
            the polyclonal controls right away.
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
      FR: (
        <div className="flex flex-col gap-4 font-helvetica [font-size:15px]">
          <p>
            Jusqu'à présent, vous avez comparé les génotypes de parasites
            individuels les uns aux autres. Cependant, vous vous souvenez que
            pour évaluer les données de cas réels dans vos épidémies
            potentielles, vous devrez comparer des infections qui sont souvent
            polyclonales, contenant plus d'un parasite génétiquement distinct.
          </p>
          <p>
            Votre directeur de laboratoire suggère une solution : créer des
            contrôles positifs en utilisant des combinaisons des clones de
            laboratoire, afin que vous puissiez voir à quoi ressemble l'IBS dans
            le contexte d'infections polyclonales lorsque vous connaissez la
            vérité. Vous convenez que c'est la meilleure prochaine étape et
            demandez à votre laboratoire de préparer les contrôles polyclonaux
            immédiatement.
          </p>
          <p>
            Pendant que les contrôles sont préparés, vous réfléchissez à la
            façon dont vous évaluerez l'IBS lorsqu'il y aura plusieurs allèles
            présents dans chaque échantillon. En réalité, il existe plusieurs
            façons de calculer cela, mais aux fins de cet exercice, nous
            considérerons qu'un locus est IBS s'il y a des allèles
            correspondants entre les échantillons.
          </p>
          <p>
            Dans cette optique, vous attendez-vous à ce que l'IBS soit plus
            élevé ou plus bas avec des échantillons polyclonaux non liés par
            rapport à des échantillons monoclonaux ?
          </p>
          <div className="mt-12">
            <p>
              À la fin de l'étape 1, vous avez 3 clones de laboratoire fabriqués
              à partir de microhaplotypes. Prenez un moment pour vous rappeler
              leur composition.
            </p>
            <div className="mt-8 grid place-items-center">
              <div className="mx-auto w-full max-w-[500px]">
                <h5 className="mb-4 font-bold">
                  Clones de laboratoire avec microhaplotypes
                </h5>
                <P6MHPCloneRows />
              </div>
            </div>
          </div>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4 font-helvetica [font-size:15px]">
          <p>
            Até agora, você tem comparado genótipos de parasitas individuais uns
            aos outros. No entanto, você se lembra de que, para avaliar dados de
            casos reais em seus potenciais surtos, você precisará comparar
            infecções que muitas vezes são policlonais, contendo mais de um
            parasita geneticamente distinto.
          </p>
          <p>
            Seu diretor de laboratório sugere uma solução: fazer controles
            positivos usando combinações dos clones de laboratório, para que
            você possa ver como o IBS se parece no cenário de infecções
            policlonais quando você sabe a verdade. Você concorda que este é o
            melhor próximo passo e pede ao seu laboratório para fazer os
            controles policlonais imediatamente.
          </p>
          <p>
            Enquanto os controles estão sendo preparados, você pensa em como
            avaliará o IBS quando houver múltiplos alelos presentes em cada
            amostra. Na realidade, existem várias maneiras de calcular isso, mas
            para os propósitos deste exercício, consideraremos um locus como IBS
            se houver quaisquer alelos correspondentes entre as amostras.
          </p>
          <p>
            Com isso em mente, você espera que o IBS seja maior ou menor com
            amostras policlonais não relacionadas em comparação com amostras
            monoclonais?
          </p>
          <div className="mt-12">
            <p>
              No final da etapa 1, você tem 3 clones de laboratório feitos de
              microhaplótipos. Reserve um momento para relembrar sua composição.
            </p>
            <div className="mt-8 grid place-items-center">
              <div className="mx-auto w-full max-w-[500px]">
                <h5 className="mb-4 font-bold">
                  Clones de laboratório com microhaplótipos
                </h5>
                <P6MHPCloneRows />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  },
  1: {
    // title: <h5>2.1.2. View Your Positive Controls</h5>,
    title: {
      EN: <h5>2.1.2 View Your Positive Controls</h5>,
      FR: <h5>2.1.2 Voir Vos Contrôles Positifs</h5>,
      PT: <h5>2.1.2 Visualize Seus Controles Positivos</h5>,
    },
    // instructions: (
    //   <div>
    //     <p className="mt-2">
    //       Following the advice of your lab manager (see intro to Step 2), you
    //       make 3 polyclonal positive controls. These positive controls consist
    //       of different combinations of the monoclonal laboratory clones 1{" "}
    //       <InlineCircle className="bg-cloneRed" />, 2{" "}
    //       <InlineCircle className="bg-cloneBlue" />, and 3{" "}
    //       <InlineCircle className="bg-cloneGreen" /> from step 1, including:
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-4 font-helvetica [font-size:15px]">
          <p>
            Following the advice of your lab manager (see intro to Step 2), you
            make 3 polyclonal positive controls. These positive controls consist
            of different combinations of the monoclonal laboratory clones 1{" "}
            <InlineCircle className="bg-cloneRed" />, 2{" "}
            <InlineCircle className="bg-cloneBlue" />, and 3{" "}
            <InlineCircle className="bg-cloneGreen" /> from step 1, including:
          </p>
          {/* <ul className="list-disc pl-8">
            <li>
              Polyclonal control 1:2 <InlineCircle polyclonal={1} /> (a
              combination of lab clones 1{" "}
              <InlineCircle className="bg-cloneRed" /> and 2{" "}
              <InlineCircle className="bg-cloneBlue" />)
            </li>
            <li>
              Polyclonal control 2:3 <InlineCircle polyclonal={2} /> (a
              combination of lab clones 2{" "}
              <InlineCircle className="bg-cloneBlue" /> and 3{" "}
              <InlineCircle className="bg-cloneGreen" />)
            </li>
            <li>
              Polyclonal control 1:3 <InlineCircle polyclonal={3} /> (a
              combination of lab clones 1{" "}
              <InlineCircle className="bg-cloneRed" /> and 3{" "}
              <InlineCircle className="bg-cloneGreen" />)
            </li>
          </ul> */}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4 font-helvetica [font-size:15px]">
          <p>
            Suivant les conseils de votre responsable de laboratoire (voir
            l'introduction à l'étape 2), vous créez 3 contrôles positifs
            polyclonaux. Ces contrôles positifs sont constitués de différentes
            combinaisons des clones de laboratoire monoclonaux 1{" "}
            <InlineCircle className="bg-cloneRed" />, 2{" "}
            <InlineCircle className="bg-cloneBlue" />, et 3{" "}
            <InlineCircle className="bg-cloneGreen" /> de l'étape 1, notamment :
          </p>
          {/* <ul className="list-disc pl-8">
            <li>
              Contrôle polyclonal 1:2 <InlineCircle polyclonal={1} /> (une
              combinaison des clones de laboratoire 1{" "}
              <InlineCircle className="bg-cloneRed" /> et 2{" "}
              <InlineCircle className="bg-cloneBlue" />)
            </li>
            <li>
              Contrôle polyclonal 2:3 <InlineCircle polyclonal={2} /> (une
              combinaison des clones de laboratoire 2{" "}
              <InlineCircle className="bg-cloneBlue" /> et 3{" "}
              <InlineCircle className="bg-cloneGreen" />)
            </li>
            <li>
              Contrôle polyclonal 1:3 <InlineCircle polyclonal={3} /> (une
              combinaison des clones de laboratoire 1{" "}
              <InlineCircle className="bg-cloneRed" /> et 3{" "}
              <InlineCircle className="bg-cloneGreen" />)
            </li>
          </ul> */}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4 font-helvetica [font-size:15px]">
          <p>
            Seguindo o conselho do seu gerente de laboratório (veja a introdução
            ao Passo 2), você faz 3 controles positivos policlonais. Esses
            controles positivos consistem em diferentes combinações dos clones
            de laboratório monoclonais 1{" "}
            <InlineCircle className="bg-cloneRed" />, 2{" "}
            <InlineCircle className="bg-cloneBlue" />, e 3{" "}
            <InlineCircle className="bg-cloneGreen" /> do passo 1, incluindo:
          </p>
          {/* <ul className="list-disc pl-8">
            <li>
              Controle poloclonal 1:2 <InlineCircle polyclonal={1} /> (uma
              combinação dos clones de laboratório 1{" "}
              <InlineCircle className="bg-cloneRed" /> e 2{" "}
              <InlineCircle className="bg-cloneBlue" />)
            </li>
            <li>
              Controle poloclonal 2:3 <InlineCircle polyclonal={2} /> (uma
              combinação dos clones de laboratório 2{" "}
              <InlineCircle className="bg-cloneBlue" /> e 3{" "}
              <InlineCircle className="bg-cloneGreen" />)
            </li>
            <li>
              Controle poloclonal 1:3 <InlineCircle polyclonal={3} /> (uma
              combinação dos clones de laboratório 1{" "}
              <InlineCircle className="bg-cloneRed" /> e 3{" "}
              <InlineCircle className="bg-cloneGreen" />)
            </li>
          </ul> */}
        </div>
      ),
    },
  },
  2: {
    title: {
      EN: (
        <h5>2.1.3. View the Genotypes of Your Polyclonal Positive Controls</h5>
      ),
      FR: (
        <h5>2.1.3. Voir les génotypes de vos contrôles positifs polyclonaux</h5>
      ),
      PT: (
        <h5>
          2.1.3. Visualize os genótipos de seus controles positivos policlonais
        </h5>
      ),
    },
    // instructions: (
    //   <div>
    //     <div className="flex flex-col gap-4">
    //       <p>
    //         Then, you prepare a genotype for each of the polyclonal positive
    //         controls . . .
    //       </p>
    //       <p>
    //         For the genotypes, note that the 12 columns represent your 12
    //         microhaplotype loci just like in lab clones, and the number of
    //         unique alleles detected at each locus are shown by colored boxes at
    //         that locus. If the two clones share an allele at a locus, only one
    //         allele will be detected . When you genotype polyclonal infections,
    //         remember the data are usually unphased - in other words you don’t
    //         know which allele corresponds to which parasite(s). This is
    //         represented here by randomly placing alleles on top or bottom
    //         regardless of what parasite they came from.
    //       </p>
    //     </div>
    //     {/* <p className="mt-2">
    //       Following the advice of your lab manager (see intro to Step 2), you
    //       make 3 polyclonal positive controls. These positive controls consist
    //       of different combinations of the monoclonal laboratory clones 1{" "}
    //       <InlineCircle className="bg-cloneRed" />, 2{" "}
    //       <InlineCircle className="bg-cloneBlue" />, and 3{" "}
    //       <InlineCircle className="bg-cloneGreen" /> from step 1, including:
    //     </p> */}
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <div className="flex flex-col gap-4">
            <p>
              Then, you prepare a genotype for each of the polyclonal positive
              controls . . .
            </p>
            <p>
              For the genotypes, note that the 12 columns represent your 12
              microhaplotype loci just like in lab clones, and the number of
              unique alleles detected at each locus are shown by colored boxes
              at that locus. If the two clones share an allele at a locus, only
              one allele will be detected . When you genotype polyclonal
              infections, remember the data are usually unphased - in other
              words you don’t know which allele corresponds to which
              parasite(s). This is represented here by randomly placing alleles
              on top or bottom regardless of what parasite they came from.
            </p>
          </div>
        </div>
      ),
      FR: (
        <div>
          <div className="flex flex-col gap-4">
            <p>
              Ensuite, vous préparez un génotype pour chacun des contrôles
              positifs polyclonaux...
            </p>
            <p>
              Pour les génotypes, notez que les 12 colonnes représentent vos 12
              loci de microhaplotypes, tout comme dans les clones de
              laboratoire, et le nombre d'allèles uniques détectés à chaque
              locus est indiqué par des cases colorées à ce locus. Si les deux
              clones partagent un allèle à un locus, un seul allèle sera
              détecté. Lorsque vous génotypez des infections polyclonales,
              rappelez-vous que les données sont généralement non phasées - en
              d'autres termes, vous ne savez pas quel allèle correspond à
              quel(s) parasite(s). Ceci est représenté ici en plaçant
              aléatoirement les allèles en haut ou en bas, indépendamment du
              parasite dont ils proviennent.
            </p>
          </div>
        </div>
      ),
      PT: (
        <div>
          <div className="flex flex-col gap-4">
            <p>
              Em seguida, você prepara um genótipo para cada um dos controles
              positivos policlonais...
            </p>
            <p>
              Para os genótipos, observe que as 12 colunas representam seus 12
              loci de microhaplótipos, assim como nos clones de laboratório, e o
              número de alelos únicos detectados em cada locus é mostrado por
              caixas coloridas naquele locus. Se os dois clones compartilham um
              alelo em um locus, apenas um alelo será detectado. Quando você
              genotipa infecções policlonais, lembre-se de que os dados
              geralmente não são faseados - em outras palavras, você não sabe
              qual alelo corresponde a qual(is) parasita(s). Isso é representado
              aqui colocando aleatoriamente os alelos em cima ou embaixo,
              independentemente do parasita de onde eles vieram.
            </p>
          </div>
        </div>
      ),
    },
  },
  3: {
    // title: (
    //   <h5>2.1.3. View the Genotypes of Your Polyclonal Positive Controls</h5>
    // ),
    title: {
      EN: (
        <h5>2.1.3. View the Genotypes of Your Polyclonal Positive Controls</h5>
      ),
      FR: (
        <h5>2.1.3. Voir les génotypes de vos contrôles positifs polyclonaux</h5>
      ),
      PT: (
        <h5>
          2.1.3. Visualize os genótipos de seus controles positivos policlonais
        </h5>
      ),
    },
    // instructions: (
    // <div className="flex flex-col gap-4">
    //   <p>
    //     Then, you prepare a genotype for each of the polyclonal positive
    //     controls . . .
    //   </p>
    //   <p>
    //     For the genotypes, note that the 12 columns represent your 12
    //     microhaplotype loci just like in lab clones, and the number of unique
    //     alleles detected at each locus are shown by colored boxes at that
    //     locus. If the two clones share an allele at a locus, only one allele
    //     will be detected . When you genotype polyclonal infections, remember
    //     the data are usually unphased - in other words you don’t know which
    //     allele corresponds to which parasite(s). This is represented here by
    //     randomly placing alleles on top or bottom regardless of what parasite
    //     they came from.
    //   </p>
    // </div>
    // ),
    instructions: {
      EN: (
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
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Ensuite, vous préparez un génotype pour chacun des contrôles
            positifs polyclonaux...
          </p>
          <p>
            Pour les génotypes, notez que les 12 colonnes représentent vos 12
            loci de microhaplotypes, tout comme dans les clones de laboratoire,
            et le nombre d'allèles uniques détectés à chaque locus est indiqué
            par des cases colorées à ce locus. Si les deux clones partagent un
            allèle à un locus, un seul allèle sera détecté. Lorsque vous
            génotypez des infections polyclonales, rappelez-vous que les données
            sont généralement non phasées - en d'autres termes, vous ne savez
            pas quel allèle correspond à quel(s) parasite(s). Ceci est
            représenté ici en plaçant aléatoirement les allèles en haut ou en
            bas, indépendamment du parasite dont ils proviennent.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Em seguida, você prepara um genótipo para cada um dos controles
            positivos policlonais...
          </p>
          <p>
            Para os genótipos, observe que as 12 colunas representam seus 12
            loci de microhaplótipos, assim como nos clones de laboratório, e o
            número de alelos únicos detectados em cada locus é mostrado por
            caixas coloridas naquele locus. Se os dois clones compartilham um
            alelo em um locus, apenas um alelo será detectado. Quando você
            genotipa infecções policlonais, lembre-se de que os dados geralmente
            não são faseados - em outras palavras, você não sabe qual alelo
            corresponde a qual(is) parasita(s). Isso é representado aqui
            colocando aleatoriamente os alelos em cima ou embaixo,
            independentemente do parasita de onde eles vieram.
          </p>
        </div>
      ),
    },
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
    // title: (
    // <h5>
    //   2.2.1. Check Matching Alleles at Each Locus between Polyclonal Control
    //   1:2 <InlineCircle polyclonal={1} /> and Lab Clone 3{" "}
    //   <InlineCircle className="bg-cloneGreen" /> (Unrelated){" "}
    //   {/* 2.2.1 Check matching alleles at each locus between polyclonal control{" "}
    //   <InlineCircle polyclonal={1} /> and lab clone 3{" "}
    //   <InlineCircle className="bg-cloneGreen" /> (unrelated) */}
    // </h5>
    // ),
    title: {
      EN: (
        <h5>
          2.2.1. Check Matching Alleles at Each Locus between Polyclonal Control
          1:2 <InlineCircle polyclonal={1} /> and Lab Clone 3{" "}
          <InlineCircle className="bg-cloneGreen" /> (Unrelated){" "}
          {/* 2.2.1 Check matching alleles at each locus between polyclonal control{" "}
      <InlineCircle polyclonal={1} /> and lab clone 3{" "}
      <InlineCircle className="bg-cloneGreen" /> (unrelated) */}
        </h5>
      ),
      FR: (
        <h5>
          2.2.1. Vérifier les allèles correspondants à chaque locus entre le
          contrôle polyclonal 1:2 <InlineCircle polyclonal={1} /> et le clone de
          laboratoire 3 <InlineCircle className="bg-cloneGreen" /> (non
          apparenté){" "}
        </h5>
      ),
      PT: (
        <h5>
          2.2.1. Verificar Alelos Correspondentes em Cada Locus entre o Controle
          Policlonal 1:2 <InlineCircle polyclonal={1} /> e o Clone de
          Laboratório 3 <InlineCircle className="bg-cloneGreen" /> (Não
          Relacionado){" "}
        </h5>
      ),
    },
    // instructions: (
    // <div className="flex flex-col gap-2">
    //   <p>Now you are ready to make some comparisons.</p>
    //   <p>
    //     Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
    //     clone 3 <InlineCircle className="bg-cloneGreen" />. Check yes or no
    //     for each of the 12 loci as to whether there is any match in alleles
    //     between the two samples. Remember, if any alleles match between two
    //     samples at a locus you will consider that locus to be identical by
    //     state (IBS).
    //   </p>{" "}
    // </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>Now you are ready to make some comparisons.</p>
          <p>
            Compare the polyclonal control <InlineCircle polyclonal={1} /> to
            lab clone 3 <InlineCircle className="bg-cloneGreen" />. Check yes or
            no for each of the 12 loci as to whether there is any match in
            alleles between the two samples. Remember, if any alleles match
            between two samples at a locus you will consider that locus to be
            identical by state (IBS).
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>Maintenant, vous êtes prêt à faire quelques comparaisons.</p>
          <p>
            Comparez le contrôle polyclonal <InlineCircle polyclonal={1} /> au
            clone de laboratoire 3 <InlineCircle className="bg-cloneGreen" />.
            Cochez oui ou non pour chacun des 12 loci pour indiquer s'il y a une
            correspondance d'allèles entre les deux échantillons. N'oubliez pas
            que si des allèles correspondent entre deux échantillons à un locus,
            vous considérerez ce locus comme identique par état (IBS).
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>Agora você está pronto para fazer algumas comparações.</p>
          <p>
            Compare o controle poloclonal <InlineCircle polyclonal={1} /> ao
            clone de laboratório 3 <InlineCircle className="bg-cloneGreen" />.
            Marque sim ou não para cada um dos 12 loci para indicar se há alguma
            correspondência de alelos entre as duas amostras. Lembre-se, se
            quaisquer alelos corresponderem entre duas amostras em um locus,
            você considerará esse locus como idêntico por estado (IBS).
          </p>{" "}
        </div>
      ),
    },
  },
  5: {
    // title: (
    //   <h5>
    //     2.2.1. Check Matching Alleles at Each Locus between Polyclonal Control
    //     1:2 <InlineCircle polyclonal={1} /> and Lab Clone 3{" "}
    //     <InlineCircle className="bg-cloneGreen" /> (Unrelated){" "}
    //   </h5>
    // ),
    title: {
      EN: (
        <h5>
          2.2.1. Check Matching Alleles at Each Locus between Polyclonal Control
          1:2 <InlineCircle polyclonal={1} /> and Lab Clone 3{" "}
          <InlineCircle className="bg-cloneGreen" /> (Unrelated){" "}
        </h5>
      ),
      FR: (
        <h5>
          2.2.1. Vérifier les allèles correspondants à chaque locus entre le
          contrôle polyclonal 1:2 <InlineCircle polyclonal={1} /> et le clone de
          laboratoire 3 <InlineCircle className="bg-cloneGreen" /> (non
          apparenté){" "}
        </h5>
      ),
      PT: (
        <h5>
          2.2.1. Verificar Alelos Correspondentes em Cada Locus entre o Controle
          Policlonal 1:2 <InlineCircle polyclonal={1} /> e o Clone de
          Laboratório 3 <InlineCircle className="bg-cloneGreen" /> (Não
          Relacionado){" "}
        </h5>
      ),
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>Now you are ready to make some comparisons.</p>
    //     <p>
    //       Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
    //       clone 3 <InlineCircle className="bg-cloneGreen" />. Check yes or no
    //       for each of the 12 loci as to whether there is any match in alleles
    //       between the two samples. Remember, if any alleles match between two
    //       samples at a locus you will consider that locus to be identical by
    //       state (IBS).
    //     </p>{" "}
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>Now you are ready to make some comparisons.</p>
          <p>
            Compare the polyclonal control <InlineCircle polyclonal={1} /> to
            lab clone 3 <InlineCircle className="bg-cloneGreen" />. Check yes or
            no for each of the 12 loci as to whether there is any match in
            alleles between the two samples. Remember, if any alleles match
            between two samples at a locus you will consider that locus to be
            identical by state (IBS).
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>Maintenant, vous êtes prêt à faire quelques comparaisons.</p>
          <p>
            Comparez le contrôle polyclonal <InlineCircle polyclonal={1} /> au
            clone de laboratoire 3 <InlineCircle className="bg-cloneGreen" />.
            Cochez oui ou non pour chacun des 12 loci pour indiquer s'il y a une
            correspondance d'allèles entre les deux échantillons. N'oubliez pas
            que si des allèles correspondent entre deux échantillons à un locus,
            vous considérerez ce locus comme identique par état (IBS).
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>Agora você está pronto para fazer algumas comparações.</p>
          <p>
            Compare o controle poloclonal <InlineCircle polyclonal={1} /> ao
            clone de laboratório 3 <InlineCircle className="bg-cloneGreen" />.
            Marque sim ou não para cada um dos 12 loci para indicar se há alguma
            correspondência de alelos entre as duas amostras. Lembre-se, se
            quaisquer alelos corresponderem entre duas amostras em um locus,
            você considerará esse locus como idêntico por estado (IBS).
          </p>{" "}
        </div>
      ),
    },
  },
  6: {
    // title: (
    //   <h5>
    //     2.2.2. Check Matching Alleles at Each Locus between Polyclonal Control
    //     2:3 <InlineCircle polyclonal={2} /> and Lab Clone 1{" "}
    //     <InlineCircle className="bg-cloneRed" /> (Unrelated){" "}
    //   </h5>
    // ),
    title: {
      EN: (
        <h5>
          2.2.2. Check Matching Alleles at Each Locus between Polyclonal Control
          2:3 <InlineCircle polyclonal={2} /> and Lab Clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> (Unrelated){" "}
        </h5>
      ),
      FR: (
        <h5>
          2.2.2. Vérifier les allèles correspondants à chaque locus entre le
          contrôle polyclonal 2:3 <InlineCircle polyclonal={2} /> et le clone de
          laboratoire 1 <InlineCircle className="bg-cloneRed" /> (non apparenté){" "}
        </h5>
      ),
      PT: (
        <h5>
          2.2.2. Verificar Alelos Correspondentes em Cada Locus entre o Controle
          Policlonal 2:3 <InlineCircle polyclonal={2} /> e o Clone de
          Laboratório 1 <InlineCircle className="bg-cloneRed" /> (Não
          Relacionado){" "}
        </h5>
      ),
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>Now you are ready to make some comparisons.</p>
    //     <p>
    //       Compare the polyclonal control <InlineCircle polyclonal={2} /> to lab
    //       clone 1 <InlineCircle className="bg-cloneRed" />. Check yes or no for
    //       each of the 12 loci as to whether there is any match in alleles
    //       between the two samples. Remember, if any alleles match between two
    //       samples at a locus you will consider that locus to be identical by
    //       state (IBS).
    //     </p>{" "}
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>Now you are ready to make some comparisons.</p>
          <p>
            Compare the polyclonal control <InlineCircle polyclonal={2} /> to
            lab clone 1 <InlineCircle className="bg-cloneRed" />. Check yes or
            no for each of the 12 loci as to whether there is any match in
            alleles between the two samples. Remember, if any alleles match
            between two samples at a locus you will consider that locus to be
            identical by state (IBS).
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>Maintenant, vous êtes prêt à faire quelques comparaisons.</p>
          <p>
            Comparez le contrôle polyclonal <InlineCircle polyclonal={2} /> au
            clone de laboratoire 1 <InlineCircle className="bg-cloneRed" />.
            Cochez oui ou non pour chacun des 12 loci pour indiquer s'il y a une
            correspondance d'allèles entre les deux échantillons. N'oubliez pas
            que si des allèles correspondent entre deux échantillons à un locus,
            vous considérerez ce locus comme identique par état (IBS).
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>Agora você está pronto para fazer algumas comparações.</p>
          <p>
            Compare o controle poloclonal <InlineCircle polyclonal={2} /> ao
            clone de laboratório 1 <InlineCircle className="bg-cloneRed" />.
            Marque sim ou não para cada um dos 12 loci para indicar se há alguma
            correspondência de alelos entre as duas amostras. Lembre-se, se
            quaisquer alelos corresponderem entre duas amostras em um locus,
            você considerará esse locus como idêntico por estado (IBS).
          </p>{" "}
        </div>
      ),
    },
  },
  7: {
    // title: (
    //   <h5>
    //     2.2.2. Check Matching Alleles at Each Locus between Polyclonal Control
    //     2:3 <InlineCircle polyclonal={2} /> and Lab Clone 1{" "}
    //     <InlineCircle className="bg-cloneRed" /> (Unrelated){" "}
    //   </h5>
    // ),
    title: {
      EN: (
        <h5>
          2.2.2. Check Matching Alleles at Each Locus between Polyclonal Control
          2:3 <InlineCircle polyclonal={2} /> and Lab Clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> (Unrelated){" "}
        </h5>
      ),
      FR: (
        <h5>
          2.2.2. Vérifier les allèles correspondants à chaque locus entre le
          contrôle polyclonal 2:3 <InlineCircle polyclonal={2} /> et le clone de
          laboratoire 1 <InlineCircle className="bg-cloneRed" /> (non apparenté){" "}
        </h5>
      ),
      PT: (
        <h5>
          2.2.2. Verificar Alelos Correspondentes em Cada Locus entre o Controle
          Policlonal 2:3 <InlineCircle polyclonal={2} /> e o Clone de
          Laboratório 1 <InlineCircle className="bg-cloneRed" /> (Não
          Relacionado){" "}
        </h5>
      ),
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>Now you are ready to make some comparisons.</p>
    //     <p>
    //       Compare the polyclonal control <InlineCircle polyclonal={2} /> to lab
    //       clone 1 <InlineCircle className="bg-cloneRed" />. Check yes or no for
    //       each of the 12 loci as to whether there is any match in alleles
    //       between the two samples. Remember, if any alleles match between two
    //       samples at a locus you will consider that locus to be identical by
    //       state (IBS).
    //     </p>{" "}
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>Now you are ready to make some comparisons.</p>
          <p>
            Compare the polyclonal control <InlineCircle polyclonal={2} /> to
            lab clone 1 <InlineCircle className="bg-cloneRed" />. Check yes or
            no for each of the 12 loci as to whether there is any match in
            alleles between the two samples. Remember, if any alleles match
            between two samples at a locus you will consider that locus to be
            identical by state (IBS).
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>Maintenant, vous êtes prêt à faire quelques comparaisons.</p>
          <p>
            Comparez le contrôle polyclonal <InlineCircle polyclonal={2} /> au
            clone de laboratoire 1 <InlineCircle className="bg-cloneRed" />.
            Cochez oui ou non pour chacun des 12 loci pour indiquer s'il y a une
            correspondance d'allèles entre les deux échantillons. N'oubliez pas
            que si des allèles correspondent entre deux échantillons à un locus,
            vous considérerez ce locus comme identique par état (IBS).
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>Agora você está pronto para fazer algumas comparações.</p>
          <p>
            Compare o controle poloclonal <InlineCircle polyclonal={2} /> ao
            clone de laboratório 1 <InlineCircle className="bg-cloneRed" />.
            Marque sim ou não para cada um dos 12 loci para indicar se há alguma
            correspondência de alelos entre as duas amostras. Lembre-se, se
            quaisquer alelos corresponderem entre duas amostras em um locus,
            você considerará esse locus como idêntico por estado (IBS).
          </p>{" "}
        </div>
      ),
    },
  },
  8: {
    // title: <h5>2.2.3. Knowledge Check Questions When IBD is 0</h5>,
    title: {
      EN: <h5>2.2.3. Knowledge Check Questions When IBD is 0</h5>,
      FR: (
        <h5>
          2.2.3. Questions de vérification des connaissances lorsque IBD est de
          0
        </h5>
      ),
      PT: (
        <h5>2.2.3. Perguntas de verificação de conhecimento quando IBD é 0</h5>
      ),
    },
    // instructions: (
    // <div className="flex flex-col gap-2">
    //   <p>
    //     With comparing polyclonal samples where IBD is 0, you may have noticed
    //     that IBS is higher than before, as you expected. These comparisons had
    //     an MOI of 1 in one sample, and an MOI of 2 in the other. As you can
    //     see in the histogram, on average we would expect to see more matches
    //     when comparing monoclonal samples (blue bars) versus samples where one
    //     is polyclonal with an MOI of two (purple bars). With monoclonal
    //     samples, we expect the number of matches to usually be 5 or less (IBS
    //     &lt; 0.5), but when one sample has an MOI of 2 we may see as many as 7
    //     matches (IBS &gt; 0.5).
    //   </p>
    // </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            With comparing polyclonal samples where IBD is 0, you may have
            noticed that IBS is higher than before, as you expected. These
            comparisons had an MOI of 1 in one sample, and an MOI of 2 in the
            other. As you can see in the histogram, on average we would expect
            to see more matches when comparing monoclonal samples (blue bars)
            versus samples where one is polyclonal with an MOI of two (purple
            bars). With monoclonal samples, we expect the number of matches to
            usually be 5 or less (IBS &lt; 0.5), but when one sample has an MOI
            of 2 we may see as many as 7 matches (IBS &gt; 0.5).
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            En comparant des échantillons polyclonaux où IBD est de 0, vous avez
            peut-être remarqué que l'IBS est plus élevé qu'auparavant, comme
            vous vous y attendiez. Ces comparaisons avaient un MOI de 1 dans un
            échantillon et un MOI de 2 dans l'autre. Comme vous pouvez le voir
            dans l'histogramme, en moyenne, nous nous attendrions à voir plus de
            correspondances lors de la comparaison d'échantillons monoclonaux
            (barres bleues) par rapport aux échantillons où l'un est polyclonal
            avec un MOI de deux (barres violettes). Avec les échantillons
            monoclonaux, nous nous attendons à ce que le nombre de
            correspondances soit généralement de 5 ou moins (IBS &lt; 0,5), mais
            lorsqu'un échantillon a un MOI de 2, nous pouvons voir jusqu'à 7
            correspondances (IBS &gt; 0,5).
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Ao comparar amostras policlonais onde IBD é 0, você pode ter notado
            que o IBS é maior do que antes, como você esperava. Essas
            comparações tinham um MOI de 1 em uma amostra e um MOI de 2 na
            outra. Como você pode ver no histograma, em média, esperaríamos ver
            mais correspondências ao comparar amostras monoclonais (barras
            azuis) versus amostras onde uma é poloclonal com um MOI de dois
            (barras roxas). Com amostras monoclonais, esperamos que o número de
            correspondências seja geralmente de 5 ou menos (IBS &lt; 0,5), mas
            quando uma amostra tem um MOI de 2, podemos ver até 7
            correspondências (IBS &gt; 0,5).
          </p>
        </div>
      ),
    },
  },
  9: {
    // title: <h5>2.2.3. Knowledge Check Questions When IBD is 0</h5>,
    title: {
      EN: <h5>2.2.3. Knowledge Check Questions When IBD is 0</h5>,
      FR: (
        <h5>
          2.2.3. Questions de vérification des connaissances lorsque IBD est de
          0
        </h5>
      ),
      PT: (
        <h5>2.2.3. Perguntas de verificação de conhecimento quando IBD é 0</h5>
      ),
    },

    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Notice that when MOI is three in both samples, you may see IBS as high
    //       as 1 even when IBD is 0 using the genotyping panel in this exercise:
    //       12 microhaplotypes with 8 alleles each. As MOI gets higher, it gets
    //       harder to distinguish infections containing related parasites from
    //       those containing unrelated parasites!
    //     </p>{" "}
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Notice that when MOI is three in both samples, you may see IBS as
            high as 1 even when IBD is 0 using the genotyping panel in this
            exercise: 12 microhaplotypes with 8 alleles each. As MOI gets
            higher, it gets harder to distinguish infections containing related
            parasites from those containing unrelated parasites!
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Notez que lorsque le MOI est de trois dans les deux échantillons,
            vous pouvez voir un IBS aussi élevé que 1 même lorsque l'IBD est de
            0 en utilisant le panel de génotypage dans cet exercice : 12
            microhaplotypes avec 8 allèles chacun. À mesure que le MOI augmente,
            il devient plus difficile de distinguer les infections contenant des
            parasites apparentés de celles contenant des parasites non
            apparentés !
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Observe que quando o MOI é três em ambas as amostras, você pode ver
            o IBS tão alto quanto 1 mesmo quando o IBD é 0 usando o painel de
            genotipagem neste exercício: 12 microhaplótipos com 8 alelos cada. À
            medida que o MOI aumenta, torna-se mais difícil distinguir infecções
            contendo parasitas relacionados daqueles contendo parasitas não
            relacionados!
          </p>{" "}
        </div>
      ),
    },
  },

  10: {
    // title: (
    //   <h5>
    //     2.3.1. Check Matching Alleles at Each Locus between Polyclonal Control
    //     1:2 <InlineCircle polyclonal={1} /> and Lab Clone 1{" "}
    //     <InlineCircle className="bg-cloneRed" /> (Related){" "}
    //     {/* 2.3.1 Check matching alleles at each locus between polyclonal control{" "}
    //     <InlineCircle polyclonal={1} /> and lab clone 1{" "}
    //     <InlineCircle className="bg-cloneRed" /> (related){" "} */}
    //   </h5>
    // ),
    title: {
      EN: (
        <h5>
          2.3.1. Check Matching Alleles at Each Locus between Polyclonal Control
          1:2 <InlineCircle polyclonal={1} /> and Lab Clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> (Related){" "}
          {/* 2.3.1 Check matching alleles at each locus between polyclonal control{" "}
      <InlineCircle polyclonal={1} /> and lab clone 1{" "}
      <InlineCircle className="bg-cloneRed" /> (related){" "} */}
        </h5>
      ),
      FR: (
        <h5>
          2.3.1. Vérifier les allèles correspondants à chaque locus entre le
          contrôle polyclonal 1:2 <InlineCircle polyclonal={1} /> et le clone de
          laboratoire 1 <InlineCircle className="bg-cloneRed" /> (Apparenté){" "}
        </h5>
      ),
      PT: (
        <h5>
          2.3.1. Verificar Alelos Correspondentes em Cada Locus entre o Controle
          Policlonal 1:2 <InlineCircle polyclonal={1} /> e o Clone de
          Laboratório 1 <InlineCircle className="bg-cloneRed" /> (Relacionado){" "}
        </h5>
      ),
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Now let&apos;s see what happens when you compare polyclonal samples
    //       where there is at least 1 perfectly related parasite between the two.
    //     </p>
    //     <p>
    //       Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
    //       clone 1 <InlineCircle className="bg-cloneRed" />. Note that lab clone
    //       1 <InlineCircle className="bg-cloneRed" /> is contained within the
    //       polyclonal control (so it is perfectly related to one of the clones in
    //       that control). Check yes or no for each of the 12 loci as to whether
    //       there is any match in alleles between the two samples.
    //     </p>{" "}
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Now let&apos;s see what happens when you compare polyclonal samples
            where there is at least 1 perfectly related parasite between the
            two.
          </p>
          <p>
            Compare the polyclonal control <InlineCircle polyclonal={1} /> to
            lab clone 1 <InlineCircle className="bg-cloneRed" />. Note that lab
            clone 1 <InlineCircle className="bg-cloneRed" /> is contained within
            the polyclonal control (so it is perfectly related to one of the
            clones in that control). Check yes or no for each of the 12 loci as
            to whether there is any match in alleles between the two samples.
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Voyons maintenant ce qui se passe lorsque vous comparez des
            échantillons polyclonaux où il y a au moins 1 parasite parfaitement
            apparenté entre les deux.
          </p>
          <p>
            Comparez le contrôle polyclonal <InlineCircle polyclonal={1} /> au
            clone de laboratoire 1 <InlineCircle className="bg-cloneRed" />.
            Notez que le clone de laboratoire 1{" "}
            <InlineCircle className="bg-cloneRed" /> est contenu dans le
            contrôle polyclonal (il est donc parfaitement apparenté à l'un des
            clones de ce contrôle). Cochez oui ou non pour chacun des 12 loci
            pour indiquer s'il y a une correspondance d'allèles entre les deux
            échantillons.
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Agora vamos ver o que acontece quando você compara amostras
            policlonais onde há pelo menos 1 parasita perfeitamente relacionado
            entre os dois.
          </p>
          <p>
            Compare o controle poloclonal <InlineCircle polyclonal={1} /> ao
            clone de laboratório 1 <InlineCircle className="bg-cloneRed" />.
            Observe que o clone de laboratório 1{" "}
            <InlineCircle className="bg-cloneRed" /> está contido no controle
            policlonal (portanto, está perfeitamente relacionado a um dos clones
            nesse controle). Marque sim ou não para cada um dos 12 loci para
            indicar se há alguma correspondência de alelos entre as duas
            amostras.
          </p>{" "}
        </div>
      ),
    },
  },
  11: {
    // title: (
    //   <h5>
    //     2.3.1. Check Matching Alleles at Each Locus between Polyclonal Control
    //     1:2 <InlineCircle polyclonal={1} /> and Lab Clone 1{" "}
    //     <InlineCircle className="bg-cloneRed" /> (Related){" "}
    //   </h5>
    // ),
    title: {
      EN: (
        <h5>
          2.3.1. Check Matching Alleles at Each Locus between Polyclonal Control
          1:2 <InlineCircle polyclonal={1} /> and Lab Clone 1{" "}
          <InlineCircle className="bg-cloneRed" /> (Related){" "}
        </h5>
      ),
      FR: (
        <h5>
          2.3.1. Vérifier les allèles correspondants à chaque locus entre le
          contrôle polyclonal 1:2 <InlineCircle polyclonal={1} /> et le clone de
          laboratoire 1 <InlineCircle className="bg-cloneRed" /> (Apparenté){" "}
        </h5>
      ),
      PT: (
        <h5>
          2.3.1. Verificar Alelos Correspondentes em Cada Locus entre o Controle
          Policlonal 1:2 <InlineCircle polyclonal={1} /> e o Clone de
          Laboratório 1 <InlineCircle className="bg-cloneRed" /> (Relacionado){" "}
        </h5>
      ),
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Now let&apos;s see what happens when you compare polyclonal samples
    //       where there is at least 1 perfectly related parasite between the two.
    //     </p>
    //     <p>
    //       Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
    //       clone 1 <InlineCircle className="bg-cloneRed" />. Note that lab clone
    //       1 <InlineCircle className="bg-cloneRed" /> is contained within the
    //       polyclonal control (so it is perfectly related to one of the clones in
    //       that control). Check yes or no for each of the 12 loci as to whether
    //       there is any match in alleles between the two samples.
    //     </p>{" "}
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Now let&apos;s see what happens when you compare polyclonal samples
            where there is at least 1 perfectly related parasite between the
            two.
          </p>
          <p>
            Compare the polyclonal control <InlineCircle polyclonal={1} /> to
            lab clone 1 <InlineCircle className="bg-cloneRed" />. Note that lab
            clone 1 <InlineCircle className="bg-cloneRed" /> is contained within
            the polyclonal control (so it is perfectly related to one of the
            clones in that control). Check yes or no for each of the 12 loci as
            to whether there is any match in alleles between the two samples.
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Voyons maintenant ce qui se passe lorsque vous comparez des
            échantillons polyclonaux où il y a au moins 1 parasite parfaitement
            apparenté entre les deux.
          </p>
          <p>
            Comparez le contrôle polyclonal <InlineCircle polyclonal={1} /> au
            clone de laboratoire 1 <InlineCircle className="bg-cloneRed" />.
            Notez que le clone de laboratoire 1{" "}
            <InlineCircle className="bg-cloneRed" /> est contenu dans le
            contrôle polyclonal (il est donc parfaitement apparenté à l'un des
            clones de ce contrôle). Cochez oui ou non pour chacun des 12 loci
            pour indiquer s'il y a une correspondance d'allèles entre les deux
            échantillons.
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Agora vamos ver o que acontece quando você compara amostras
            policlonais onde há pelo menos 1 parasita perfeitamente relacionado
            entre os dois.
          </p>
          <p>
            Compare o controle poloclonal <InlineCircle polyclonal={1} /> ao
            clone de laboratório 1 <InlineCircle className="bg-cloneRed" />.
            Observe que o clone de laboratório 1{" "}
            <InlineCircle className="bg-cloneRed" /> está contido no controle
            policlonal (portanto, está perfeitamente relacionado a um dos clones
            nesse controle). Marque sim ou não para cada um dos 12 loci para
            indicar se há alguma correspondência de alelos entre as duas
            amostras.
          </p>{" "}
        </div>
      ),
    },
  },
  12: {
    // title: <h5> 2.3.2. Making the Connection</h5>,
    title: {
      EN: <h5> 2.3.2. Making the Connection</h5>,
      FR: <h5> 2.3.2. Faire le Lien</h5>,
      PT: <h5> 2.3.2. Fazendo a Conexão</h5>,
    },
    // instructions: (
    // <div className="flex flex-col gap-2">
    //   <p>
    //     Note that this comparison of lab clones would be similar to a
    //     situation in which a person was infected with 2 parasite clones (MOI
    //     of 2) and a mosquito passed one of those two clones on to another
    //     person, without any recombination occurring. IBD and IBS would both be
    //     1 just like with the lab clones, since one parasite is being passed on
    //     from one person to another.
    //   </p>{" "}
    // </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Note that this comparison of lab clones would be similar to a
            situation in which a person was infected with 2 parasite clones (MOI
            of 2) and a mosquito passed one of those two clones on to another
            person, without any recombination occurring. IBD and IBS would both
            be 1 just like with the lab clones, since one parasite is being
            passed on from one person to another.
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Notez que cette comparaison de clones de laboratoire serait
            similaire à une situation dans laquelle une personne était infectée
            par 2 clones de parasites (MOI de 2) et un moustique a transmis l'un
            de ces deux clones à une autre personne, sans qu'aucune
            recombinaison ne se produise. L'IBD et l'IBS seraient toutes deux de
            1, tout comme avec les clones de laboratoire, puisqu'un parasite est
            transmis d'une personne à une autre.
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Observe que esta comparação de clones de laboratório seria
            semelhante a uma situação em que uma pessoa foi infectada com 2
            clones de parasitas (MOI de 2) e um mosquito passou um desses dois
            clones para outra pessoa, sem que ocorresse recombinação. IBD e IBS
            seriam ambos 1, assim como com os clones de laboratório, já que um
            parasita está sendo transmitido de uma pessoa para outra.
          </p>{" "}
        </div>
      ),
    },
  },
  13: {
    // title: <h5> 2.3.2. Making the Connection</h5>,
    title: {
      EN: <h5> 2.3.2. Making the Connection</h5>,
      FR: <h5> 2.3.2. Faire le Lien</h5>,
      PT: <h5> 2.3.2. Fazendo a Conexão</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Note that this comparison of lab clones would be similar to a
    //       situation in which a person was infected with 2 parasite clones (MOI
    //       of 2) and a mosquito passed one of those two clones on to another
    //       person, without any recombination occurring. IBD and IBS would both be
    //       1 just like with the lab clones, since one parasite is being passed on
    //       from one person to another.
    //     </p>{" "}
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Note that this comparison of lab clones would be similar to a
            situation in which a person was infected with 2 parasite clones (MOI
            of 2) and a mosquito passed one of those two clones on to another
            person, without any recombination occurring. IBD and IBS would both
            be 1 just like with the lab clones, since one parasite is being
            passed on from one person to another.
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Notez que cette comparaison de clones de laboratoire serait
            similaire à une situation dans laquelle une personne était infectée
            par 2 clones de parasites (MOI de 2) et un moustique a transmis l'un
            de ces deux clones à une autre personne, sans qu'aucune
            recombinaison ne se produise. L'IBD et l'IBS seraient toutes deux de
            1, tout comme avec les clones de laboratoire, puisqu'un parasite est
            transmis d'une personne à une autre.
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Observe que esta comparação de clones de laboratório seria
            semelhante a uma situação em que uma pessoa foi infectada com 2
            clones de parasitas (MOI de 2) e um mosquito passou um desses dois
            clones para outra pessoa, sem que ocorresse recombinação. IBD e IBS
            seriam ambos 1, assim como com os clones de laboratório, já que um
            parasita está sendo transmitido de uma pessoa para outra.
          </p>{" "}
        </div>
      ),
    },
  },
  14: {
    // title: (
    //   <h5>
    //     2.3.3. Check Matching Alleles at Each Locus between the Polyclonal
    //     Control <InlineCircle polyclonal={1} /> and Lab Clone 4{" "}
    //     <InlineCircle hybrid /> (Related){" "}
    //     {/* 2.3.3 Check matching alleles at each locus between polyclonal control{" "}
    //     <InlineCircle polyclonal={1} /> and lab clone 4 <InlineCircle hybrid />{" "}
    //     (related){" "} */}
    //   </h5>
    // ),
    title: {
      EN: (
        <h5>
          2.3.3. Check Matching Alleles at Each Locus between the Polyclonal
          Control <InlineCircle polyclonal={1} /> and Lab Clone 4{" "}
          <InlineCircle hybrid /> (Related){" "}
          {/* 2.3.3 Check matching alleles at each locus between polyclonal control{" "}
      <InlineCircle polyclonal={1} /> and lab clone 4 <InlineCircle hybrid />{" "}
      (related){" "} */}
        </h5>
      ),
      FR: (
        <h5>
          2.3.3. Vérifier les allèles correspondants à chaque locus entre le
          contrôle polyclonal <InlineCircle polyclonal={1} /> et le clone de
          laboratoire 4 <InlineCircle hybrid /> (Apparenté){" "}
        </h5>
      ),
      PT: (
        <h5>
          2.3.3. Verificar Alelos Correspondentes em Cada Locus entre o Controle
          Policlonal <InlineCircle polyclonal={1} /> e o Clone de Laboratório 4{" "}
          <InlineCircle hybrid /> (Relacionado){" "}
        </h5>
      ),
    },

    // instructions: (
    // <div className="flex flex-col gap-2">
    //   <p>
    //     Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
    //     clone 1 <InlineCircle hybrid />. Check yes or no for each of the 12
    //     loci as to whether there is any match in alleles between the two
    //     samples.
    //   </p>{" "}
    // </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Compare the polyclonal control <InlineCircle polyclonal={1} /> to
            lab clone 1 <InlineCircle hybrid />. Check yes or no for each of the
            12 loci as to whether there is any match in alleles between the two
            samples.
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Comparez le contrôle polyclonal <InlineCircle polyclonal={1} /> au
            clone de laboratoire 1 <InlineCircle hybrid />. Cochez oui ou non
            pour chacun des 12 loci pour indiquer s'il y a une correspondance
            d'allèles entre les deux échantillons.
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Compare o controle poloclonal <InlineCircle polyclonal={1} /> ao
            clone de laboratório 1 <InlineCircle hybrid />. Marque sim ou não
            para cada um dos 12 loci para indicar se há alguma correspondência
            de alelos entre as duas amostras.
          </p>{" "}
        </div>
      ),
    },
  },
  15: {
    // title: (
    //   <h5>
    //     2.3.3. Check Matching Alleles at Each Locus between the Polyclonal
    //     Control <InlineCircle polyclonal={1} /> and Lab Clone 4{" "}
    //     <InlineCircle hybrid /> (Related){" "}
    //   </h5>
    // ),
    title: {
      EN: (
        <h5>
          2.3.3. Check Matching Alleles at Each Locus between the Polyclonal
          Control <InlineCircle polyclonal={1} /> and Lab Clone 4{" "}
          <InlineCircle hybrid /> (Related){" "}
        </h5>
      ),
      FR: (
        <h5>
          2.3.3. Vérifier les allèles correspondants à chaque locus entre le
          contrôle polyclonal <InlineCircle polyclonal={1} /> et le clone de
          laboratoire 4 <InlineCircle hybrid /> (Apparenté){" "}
        </h5>
      ),
      PT: (
        <h5>
          2.3.3. Verificar Alelos Correspondentes em Cada Locus entre o Controle
          Policlonal <InlineCircle polyclonal={1} /> e o Clone de Laboratório 4{" "}
          <InlineCircle hybrid /> (Relacionado){" "}
        </h5>
      ),
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Compare the polyclonal control <InlineCircle polyclonal={1} /> to
            lab clone 1 <InlineCircle hybrid />. Check yes or no for each of the
            12 loci as to whether there is any match in alleles between the two
            samples.
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Comparez le contrôle polyclonal <InlineCircle polyclonal={1} /> au
            clone de laboratoire 1 <InlineCircle hybrid />. Cochez oui ou non
            pour chacun des 12 loci pour indiquer s'il y a une correspondance
            d'allèles entre les deux échantillons.
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Compare o controle poloclonal <InlineCircle polyclonal={1} /> ao
            clone de laboratório 1 <InlineCircle hybrid />. Marque sim ou não
            para cada um dos 12 loci para indicar se há alguma correspondência
            de alelos entre as duas amostras.
          </p>{" "}
        </div>
      ),
    },
  },
  // 16: {
  //   // title: <h5> 2.3.4. Making the Connection</h5>,
  //   title: {
  //     EN: <h5> 2.3.4. Making the Connection</h5>,
  //     FR: <h5> 2.3.4. Faire le Lien</h5>,
  //     PT: <h5> 2.3.4. Fazendo a Conexão</h5>,
  //   },
  //   // instructions: (
  //   //   <div className="flex flex-col gap-2">
  //   //     <p>
  //   //       Note that this comparison of lab clones would be similar to a
  //   //       situation in which a person was infected with 2 parasite clones (MOI
  //   //       of 2) and a mosquito passed one of those two clones on to another
  //   //       person, but recombination occurred between the two parasites in the
  //   //       first person before transmission. IBD would be 0.5, since half of the
  //   //       genome is shared between the two parasites, and IBS would be lower
  //   //       than in the previous example where IBD was 1.
  //   //     </p>{" "}
  //   //   </div>
  //   // ),
  //   instructions: {
  //     EN: (
  //       <div className="flex flex-col gap-2">
  //         <p>
  //           Note that this comparison of lab clones would be similar
  //   }
  //   // instructions: (
  //   //
  // },
  // // 15: {
  // //   title: (
  // //     <h5>
  // //       2.3.3. Check Matching Alleles at Each Locus between the Polyclonal
  // //       Control <InlineCircle polyclonal={1} /> and Lab Clone 4{" "}
  // //       <InlineCircle hybrid /> (Related){" "}
  // //     </h5>
  // //   ),

  // //   instructions: (
  // //     <div className="flex flex-col gap-2">
  // //       <p>
  // //         Compare the polyclonal control <InlineCircle polyclonal={1} /> to lab
  // //         clone 1 <InlineCircle hybrid />. Check yes or no for each of the 12
  // //         loci as to whether there is any match in alleles between the two
  // //         samples.
  // //       </p>{" "}
  // //     </div>
  // //   ),
  // // },
  16: {
    // title: <h5> 2.3.4. Step 2 Summary</h5>,
    title: {
      EN: <h5> 2.3.4. Step 2 Summary</h5>,
      FR: <h5> 2.3.4. Résumé de l'Étape 2</h5>,
      PT: <h5> 2.3.4. Resumo do Passo 2</h5>,
    },

    // instructions: (
    // <div className="flex flex-col gap-2">
    //   <p>
    //     You may have noticed in this case that IBD between the child{" "}
    //     <InlineCircle hybrid /> is only 0.5 with each parent (lab clone 1{" "}
    //     <InlineCircle className="bg-cloneRed" /> and lab clone 2{" "}
    //     <InlineCircle className="bg-cloneBlue" />
    //     ). However, since the child has gotten some of its genetic material at
    //     every locus from at least one parent, there is a match at every locus.
    //   </p>{" "}
    // </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            You may have noticed in this case that IBD between the child{" "}
            <InlineCircle hybrid /> is only 0.5 with each parent (lab clone 1{" "}
            <InlineCircle className="bg-cloneRed" /> and lab clone 2{" "}
            <InlineCircle className="bg-cloneBlue" />
            ). However, since the child has gotten some of its genetic material
            at every locus from at least one parent, there is a match at every
            locus.
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Vous avez peut-être remarqué dans ce cas que l'IBD entre l'enfant{" "}
            <InlineCircle hybrid /> n'est que de 0,5 avec chaque parent (clone
            de laboratoire 1 <InlineCircle className="bg-cloneRed" /> et clone
            de laboratoire 2 <InlineCircle className="bg-cloneBlue" />
            ). Cependant, comme l'enfant a reçu une partie de son matériel
            génétique à chaque locus d'au moins un parent, il y a une
            correspondance à chaque locus.
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Você pode ter notado neste caso que o IBD entre a criança{" "}
            <InlineCircle hybrid /> é apenas 0,5 com cada pai (clone de
            laboratório 1 <InlineCircle className="bg-cloneRed" /> e clone de
            laboratório 2 <InlineCircle className="bg-cloneBlue" />
            ). No entanto, como a criança recebeu parte de seu material genético
            em cada locus de pelo menos um dos pais, há uma correspondência em
            cada locus.
          </p>{" "}
        </div>
      ),
    },
  },
  17: {
    // title: <h5> 2.3.4. Step 2 Summary</h5>,
    title: {
      EN: <h5> 2.3.4. Step 2 Summary</h5>,
      FR: <h5> 2.3.4. Résumé de l'Étape 2</h5>,
      PT: <h5> 2.3.4. Resumo do Passo 2</h5>,
    },

    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Are you ready to solve the outbreak cases? Before we do, let’s
    //       summarize what we’ve learned in this section. When MOI is high, IBS
    //       can be high between two infections even none of the parasites are
    //       related - there are just a lot of alleles that can match by chance.
    //       Increasing the number and diversity of loci can help in these
    //       situations. The good news is that two infections related by direct
    //       transmission should always have a matching allele at every locus - IBS
    //       of 1.0. This means that with your current genotyping panel of 12
    //       microhaplotypes, you should be able to tell using IBS if two
    //       infections are related by direct transmission or not as long as MOI is
    //       &#x2264;2 in both of the infections. You should be able to tell
    //       whether MOI is &gt;2 pretty easily with the 12 microhaplotypes as
    //       well; at least one locus should have 3 or more alleles if so. Now
    //       let’s solve the cases!
    //     </p>{" "}
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Are you ready to solve the outbreak cases? Before we do, let’s
            summarize what we’ve learned in this section. When MOI is high, IBS
            can be high between two infections even none of the parasites are
            related - there are just a lot of alleles that can match by chance.
            Increasing the number and diversity of loci can help in these
            situations. The good news is that two infections related by direct
            transmission should always have a matching allele at every locus -
            IBS of 1.0. This means that with your current genotyping panel of 12
            microhaplotypes, you should be able to tell using IBS if two
            infections are related by direct transmission or not as long as MOI
            is &#x2264;2 in both of the infections. You should be able to tell
            whether MOI is &gt;2 pretty easily with the 12 microhaplotypes as
            well; at least one locus should have 3 or more alleles if so. Now
            let’s solve the cases!
          </p>{" "}
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Êtes-vous prêt à résoudre les cas d'épidémie ? Avant de le faire,
            résumons ce que nous avons appris dans cette section. Lorsque le MOI
            est élevé, l'IBS peut être élevé entre deux infections même si aucun
            des parasites n'est apparenté - il y a juste beaucoup d'allèles qui
            peuvent correspondre par hasard. L'augmentation du nombre et de la
            diversité des loci peut aider dans ces situations. La bonne nouvelle
            est que deux infections liées par transmission directe devraient
            toujours avoir un allèle correspondant à chaque locus - IBS de 1,0.
            Cela signifie qu'avec votre panel de génotypage actuel de 12
            microhaplotypes, vous devriez être en mesure de déterminer en
            utilisant l'IBS si deux infections sont liées par transmission
            directe ou non tant que le MOI est &#x2264;2 dans les deux
            infections. Vous devriez également être en mesure de déterminer
            assez facilement si le MOI est &gt;2 avec les 12 microhaplotypes ;
            au moins un locus devrait avoir 3 allèles ou plus si c'est le cas.
            Résolvons maintenant les cas !
          </p>{" "}
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Você está pronto para resolver os casos de surto? Antes de fazermos
            isso, vamos resumir o que aprendemos nesta seção. Quando o MOI é
            alto, o IBS pode ser alto entre duas infecções, mesmo que nenhum dos
            parasitas seja relacionado - há apenas muitos alelos que podem
            corresponder por acaso. Aumentar o número e a diversidade de loci
            pode ajudar nessas situações. A boa notícia é que duas infecções
            relacionadas por transmissão direta devem sempre ter um alelo
            correspondente em cada locus - IBS de 1,0. Isso significa que com
            seu painel de genotipagem atual de 12 microhaplótipos, você deve ser
            capaz de dizer usando IBS se duas infecções estão relacionadas por
            transmissão direta ou não tão que o MOI seja &#x2264;2 nas duas
            infectações. Você deve ser capaz de dizer se o MOI é &gt;2 com os 12
            microhaplotipos; pelo menos um locus deve ter 3 ou mais alelosse for
            o caso. Agora vamos resolver os casos!
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
        <h5>
          2.2.5 &ndash; Additional knowledge check questions when IBD is 0
        </h5>
      ),
      instructions: (
        <div>
          <p className="mt-2">
            When comparing polyclonal samples where IBD is 0, you may have
            noticed that IBS is higher than before, as you expected. These
            comparisons had an MOI of 1 in one sample, and an MOI of 2 in the
            other. As you can see in the histogram, on average we would expect
            to see more matches when comparing monoclonal samples (blue bars)
            versus samples where one is polyclonal with an MOI of two (purple
            bars). With monoclonal samples, we expect the number of matches to
            usually be 5 or less (IBS &lt; 0.5), but when one sample has an MOI
            of 2 we may see as many as 7 matches (IBS &gt; 0.5).
          </p>
        </div>
      ),
    },
    60: {
      title: (
        <h5>
          2.2.5 &ndash; Additional knowledge check questions when IBD is 0
        </h5>
      ),
      instructions: (
        <div>
          <p className="mt-2">
            When comparing polyclonal samples where IBD is 0, you may have
            noticed that IBS is higher than before, as you expected. These
            comparisons had an MOI of 1 in one sample, and an MOI of 2 in the
            other. As you can see in the histogram, on average we would expect
            to see more matches when comparing monoclonal samples (blue bars)
            versus samples where one is polyclonal with an MOI of two (purple
            bars). With monoclonal samples, we expect the number of matches to
            usually be 5 or less (IBS &lt; 0.5), but when one sample has an MOI
            of 2 we may see as many as 7 matches (IBS &gt; 0.5).
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
            where there is at least 1 perfectly related parasite between the
            two.
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
  },
};
