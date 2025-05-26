import { ReactElement } from "react";
import InlinePlus from "../../Shared/misc/InlinePlus";
import InlineEdge from "../../Shared/misc/InlineEdge";
import { ModuleCopyCode } from "../../Shared/Buttons/ModuleCopyCode";
import Image from "next/image";

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
    title: {
      [key in "EN" | "FR" | "PT"]: ReactElement;
    };
    instructions: {
      [key in "EN" | "FR" | "PT"]: ReactElement;
    };
  };
} = {
  1: {
    // title: <h5>3.1. Potential Outbreak at the Boarding School</h5>,
    title: {
      EN: <h5>3.1. Potential Outbreak at the Boarding School</h5>,
      FR: <h5>3.1. Épidémie Potentielle à l'Internat</h5>,
      PT: <h5>3.1. Potencial Surto no Internato</h5>,
    },
    instructions: {
      EN: (
        <div>
          <p className="mb-4">
            Now let&apos;s figure out what is going on with these outbreaks!
            Remember that as lead for your country&apos;s subnational malaria
            elimination effort, you were called on to investigate two different
            scenarios in Eliminati Province: four students came down with
            malaria in a boarding school, and five cases occurred in a different
            village.
          </p>
          <p>
            Let&apos;s start with the cases in the boarding school. These were
            all students who were diagnosed with malaria soon after returning
            from holiday visits to families. Some of these students travel far
            for school and may have family homes in higher transmission areas.
            Your lab has successfully genotyped infections from all four cases
            using the same amplicon sequencing panel with 12 microhaplotypes you
            just evaluated on controls.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p className="mb-4">
            Maintenant, déterminons ce qui se passe avec ces épidémies !
            N'oubliez pas qu'en tant que responsable de l'effort d'élimination
            du paludisme sous-national de votre pays, vous avez été appelé à
            enquêter sur deux scénarios différents dans la province d'Eliminati
            : quatre étudiants ont contracté le paludisme dans un internat, et
            cinq cas se sont produits dans un village différent.
          </p>
          <p>
            Commençons par les cas de l'internat. Il s'agissait d'étudiants chez
            qui le paludisme a été diagnostiqué peu après leur retour de
            vacances familiales. Certains de ces étudiants voyagent loin pour
            l'école et peuvent avoir des maisons familiales dans des zones de
            transmission plus élevée. Votre laboratoire a réussi à génotyper les
            infections des quatre cas en utilisant le même panel de séquençage
            d'amplicons avec 12 microhaplotypes que vous venez d'évaluer sur les
            contrôles.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p className="mb-4">
            Agora vamos descobrir o que está acontecendo com esses surtos!
            Lembre-se de que, como líder do esforço de eliminação da malária
            subnacional do seu país, você foi chamado para investigar dois
            cenários diferentes na Província de Eliminati: quatro estudantes
            contraíram malária em um internato e cinco casos ocorreram em uma
            vila diferente.
          </p>
          <p>
            Vamos começar com os casos no internato. Todos eram estudantes que
            foram diagnosticados com malária logo após retornarem das visitas de
            férias às famílias. Alguns desses estudantes viajam muito para a
            escola e podem ter casas de família em áreas de maior transmissão.
            Seu laboratório genotipou com sucesso as infecções de todos os
            quatro casos usando o mesmo painel de sequenciamento de amplicons
            com 12 microhaplótipos que você acabou de avaliar nos controles.
          </p>
        </div>
      ),
    },
    // instructions: (
    //   <div>
    //     <p className="mb-4">
    //       Now let&apos;s figure out what is going on with these outbreaks!
    //       Remember that as lead for your country&apos;s subnational malaria
    //       elimination effort, you were called on to investigate two different
    //       scenarios in Eliminati Province: four students came down with malaria
    //       in a boarding school, and five cases occurred in a different village.
    //     </p>
    //     <p>
    //       Let&apos;s start with the cases in the boarding school. These were all
    //       students who were diagnosed with malaria soon after returning from
    //       holiday visits to families. Some of these students travel far for
    //       school and may have family homes in higher transmission areas. Your
    //       lab has successfully genotyped infections from all four cases using
    //       the same amplicon sequencing panel with 12 microhaplotypes you just
    //       evaluated on controls.
    //     </p>
    //   </div>
    // ),
  },
  2: {
    // title: <h5>3.1. Potential Outbreak at the Boarding School</h5>,
    title: {
      EN: <h5>3.1. Potential Outbreak at the Boarding School</h5>,
      FR: <h5>3.1. Épidémie Potentielle à l'Internat</h5>,
      PT: <h5>3.1. Potencial Surto no Internato</h5>,
    },
    instructions: {
      EN: (
        <div>
          <p>
            Let&apos;s start with the cases in the boarding school. These were
            all students who were diagnosed with malaria soon after returning
            from holiday visits to families. Some of these students travel far
            for school and may have family homes in higher transmission areas.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Commençons par les cas de l'internat. Il s'agissait d'étudiants chez
            qui le paludisme a été diagnostiqué peu après leur retour de
            vacances familiales. Certains de ces étudiants voyagent loin pour
            l'école et peuvent avoir des maisons familiales dans des zones de
            transmission plus élevée.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Vamos começar com os casos no internato. Todos eram estudantes que
            foram diagnosticados com malária logo após retornarem das visitas de
            férias às famílias. Alguns desses estudantes viajam muito para a
            escola e podem ter casas de família em áreas de maior transmissão.
          </p>
        </div>
      ),
    },
    // instructions: (
    //   <div>
    //     <p>
    //       Let&apos;s start with the cases in the boarding school. These were all
    //       students who were diagnosed with malaria soon after returning from
    //       holiday visits to families. Some of these students travel far for
    //       school and may have family homes in higher transmission areas.
    //     </p>
    //   </div>
    // ),
  },
  3: {
    // title: <h5>3.1. Potential Outbreak at the Boarding School</h5>,
    title: {
      EN: <h5>3.1. Potential Outbreak at the Boarding School</h5>,
      FR: <h5>3.1. Épidémie Potentielle à l'Internat</h5>,
      PT: <h5>3.1. Potencial Surto no Internato</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Your lab has successfully genotyped infections from all four cases
    //       using the same amplicon sequencing panel with 12 microhaplotypes you
    //       just evaluated on controls.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Your lab has successfully genotyped infections from all four cases
            using the same amplicon sequencing panel with 12 microhaplotypes you
            just evaluated on controls.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Votre laboratoire a réussi à génotyper les infections des quatre cas
            en utilisant le même panel de séquençage d'amplicons avec 12
            microhaplotypes que vous venez d'évaluer sur les contrôles.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Seu laboratório genotipou com sucesso as infecções de todos os
            quatro casos usando o mesmo painel de sequenciamento de amplicons
            com 12 microhaplótipos que você acabou de avaliar nos controles.
          </p>
        </div>
      ),
    },
  },
  4: {
    // title: <h5>3.1.1. Estimating MOI</h5>,
    title: {
      EN: <h5>3.1.1. Estimating MOI</h5>,
      FR: <h5>3.1.1. Estimation de MOI</h5>,
      PT: <h5>3.1.1. Estimativa de MOI</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     {/* <p>
    //       Let&apos;s start with the cases in the boarding school. These were all
    //       students who were diagnosed with malaria soon after returning from
    //       holiday visits to families. Some of these students travel far for
    //       school and may have family homes in higher transmission areas. Your
    //       lab has successfully genotyped infections from all four cases using
    //       the same amplicon sequencing panel with 12 microhaplotypes you just
    //       evaluated on controls.
    //     </p> */}
    //     <p>
    //       First let&apos;s estimate the MOI of each infection. Recall from
    //       Module 2, and from the controls you just evaluated, that with diverse
    //       loci like microhaplotypes you can just count the maximum number of
    //       alleles detected at a given locus to obtain a reasonable estimate of
    //       MOI. As before, the 12 columns represent your 12 microhaplotype loci,
    //       and the number of unique alleles detected at each locus is shown by
    //       colored boxes at that locus.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          {/* <p>
        Let&apos;s start with the cases in the boarding school. These were all
        students who were diagnosed with malaria soon after returning from
        holiday visits to families. Some of these students travel far for
        school and may have family homes in higher transmission areas. Your
        lab has successfully genotyped infections from all four cases using
        the same amplicon sequencing panel with 12 microhaplotypes you just
        evaluated on controls.
      </p> */}
          <p>
            First let&apos;s estimate the MOI of each infection. Recall from
            Module 2, and from the controls you just evaluated, that with
            diverse loci like microhaplotypes you can just count the maximum
            number of alleles detected at a given locus to obtain a reasonable
            estimate of MOI. As before, the 12 columns represent your 12
            microhaplotype loci, and the number of unique alleles detected at
            each locus is shown by colored boxes at that locus.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Tout d'abord, estimons le MOI de chaque infection. Rappelez-vous du
            Module 2, et des contrôles que vous venez d'évaluer, qu'avec des
            loci divers comme les microhaplotypes, vous pouvez simplement
            compter le nombre maximum d'allèles détectés à un locus donné pour
            obtenir une estimation raisonnable du MOI. Comme précédemment, les
            12 colonnes représentent vos 12 loci de microhaplotypes, et le
            nombre d'allèles uniques détectés à chaque locus est indiqué par des
            cases colorées à ce locus.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Primeiro, vamos estimar o MOI de cada infecção. Lembre-se do Módulo
            2 e dos controles que você acabou de avaliar, que com loci diversos
            como microhaplótipos, você pode simplesmente contar o número máximo
            de alelos detectados em um determinado locus para obter uma
            estimativa razoável de MOI. Como antes, as 12 colunas representam
            seus 12 loci de microhaplótipos, e o número de alelos únicos
            detectados em cada locus é mostrado por caixas coloridas naquele
            locus.
          </p>
        </div>
      ),
    },
  },
  5: {
    // title: <h5>3.1.2. Comparing Genotypes</h5>,
    title: {
      EN: <h5>3.1.2. Comparing Genotypes</h5>,
      FR: <h5>3.1.2. Comparaison des Génotypes</h5>,
      PT: <h5>3.1.2. Comparando Genótipos</h5>,
    },
    // instructions: (
    // <div>
    //   <p>
    //     Let&apos;s compare the genotypes of patients A-D to get a more
    //     definitive answer. There are 6 pairwise comparisons (A and B, A and C,
    //     A and D, B and C, B and D, C and D). Select each <InlinePlus /> to
    //     compare the genotypes and IBS between each pair . You must view all 6
    //     pairwise comparisons before moving on.
    //   </p>
    // </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>
            Let&apos;s compare the genotypes of patients A-D to get a more
            definitive answer. There are 6 pairwise comparisons (A and B, A and
            C, A and D, B and C, B and D, C and D). Select each <InlinePlus />{" "}
            to compare the genotypes and IBS between each pair . You must view
            all 6 pairwise comparisons before moving on.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Comparons les génotypes des patients A à D pour obtenir une réponse
            plus définitive. Il y a 6 comparaisons par paires (A et B, A et C, A
            et D, B et C, B et D, C et D). Sélectionnez chaque <InlinePlus />{" "}
            pour comparer les génotypes et l'IBS entre chaque paire. Vous devez
            consulter les 6 comparaisons par paires avant de passer à l'étape
            suivante.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Vamos comparar os genótipos dos pacientes A-D para obter uma
            resposta mais definitiva. Existem 6 comparações em pares (A e B, A e
            C, A e D, B e C, B e D, C e D). Selecione cada <InlinePlus /> para
            comparar os genótipos e o IBS entre cada par. Você deve visualizar
            todas as 6 comparações em pares antes de prosseguir.
          </p>
        </div>
      ),
    },
  },
  6: {
    // title: <h5>3.1.2. Comparing Genotypes</h5>,
    title: {
      EN: <h5>3.1.2. Comparing Genotypes</h5>,
      FR: <h5>3.1.2. Comparaison des Génotypes</h5>,
      PT: <h5>3.1.2. Comparando Genótipos</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>Answer the following questions.</p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>Answer the following questions.</p>
        </div>
      ),
      FR: (
        <div>
          <p>Répondre aux questions suivantes.</p>
        </div>
      ),
      PT: (
        <div>
          <p>Responder às seguintes perguntas.</p>
        </div>
      ),
    },
  },
  7: {
    // title: <h5>3.1.2. Comparing Genotypes</h5>,
    // instructions: (
    //   <div>
    //     <p>Answer the following questions.</p>
    //   </div>
    // ),
    title: {
      EN: <h5>3.1.2. Comparing Genotypes</h5>,
      FR: <h5>3.1.2. Comparaison des Génotypes</h5>,
      PT: <h5>3.1.2. Comparando Genótipos</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>Answer the following questions.</p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>Answer the following questions.</p>
        </div>
      ),
      FR: (
        <div>
          <p>Répondre aux questions suivantes.</p>
        </div>
      ),
      PT: (
        <div>
          <p>Responder às seguintes perguntas.</p>
        </div>
      ),
    },
  },
  8: {
    // title: <h5>3.1.3. Actual Infections</h5>,
    title: {
      EN: <h5>3.1.3. Actual Infections</h5>,
      FR: <h5>3.1.3. Actualisation des Infections</h5>,
      PT: <h5>3.1.3. Infecções Reais</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>
    //       In a real-world setting, you would be able to interpret the genotypes
    //       as you have just done, and be able to come to the right conclusions
    //       without actually needing to know what the actual parasite composition
    //       of the infections were. However, since this is a simulated example,
    //       you might be interested to know what the underlying infections in
    //       these unrelated cases actually looked like.
    //     </p>
    //     <p className="mt-4">
    //       Consistent with your conclusions, you can see that the parasites in
    //       the infections are completely unrelated to any other by descent (i.e.
    //       IBD is 0 for all comparisons). The simulation code used to create
    //       these data randomly chose alleles for each of the 8 parasites, just
    //       like when you created your lab clones.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>
            In a real-world setting, you would be able to interpret the
            genotypes as you have just done, and be able to come to the right
            conclusions without actually needing to know what the actual
            parasite composition of the infections were. However, since this is
            a simulated example, you might be interested to know what the
            underlying infections in these unrelated cases actually looked like.
          </p>
          <p className="mt-4">
            Consistent with your conclusions, you can see that the parasites in
            the infections are completely unrelated to any other by descent
            (i.e. IBD is 0 for all comparisons). The simulation code used to
            create these data randomly chose alleles for each of the 8
            parasites, just like when you created your lab clones.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Dans un contexte réel, vous seriez en mesure d'interpréter les
            génotypes comme vous venez de le faire, et de tirer les bonnes
            conclusions sans avoir réellement besoin de connaître la composition
            réelle des parasites dans les infections. Cependant, comme il s'agit
            d'un exemple simulé, vous pourriez être intéressé de savoir à quoi
            ressemblaient réellement les infections sous-jacentes dans ces cas
            non liés.
          </p>
          <p className="mt-4">
            Conformément à vos conclusions, vous pouvez voir que les parasites
            dans les infections ne sont liés à aucun autre par descendance
            (c'est-à-dire que l'IBD est de 0 pour toutes les comparaisons). Le
            code de simulation utilisé pour créer ces données a choisi au hasard
            des allèles pour chacun des 8 parasites, tout comme lorsque vous
            avez créé vos clones de laboratoire.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Em um cenário do mundo real, você seria capaz de interpretar os
            genótipos como acabou de fazer e chegar às conclusões corretas sem
            realmente precisar saber qual era a composição real dos parasitas
            nas infecções. No entanto, como este é um exemplo simulado, você
            pode estar interessado em saber como eram realmente as infecções
            subjacentes nesses casos não relacionados.
          </p>
          <p className="mt-4">
            Consistente com suas conclusões, você pode ver que os parasitas nas
            infecções não são relacionados a nenhum outro por descendência (ou
            seja, o IBD é 0 para todas as comparações). O código de simulação
            usado para criar esses dados escolheu aleatoriamente alelos para
            cada um dos 8 parasitas, assim como quando você criou seus clones de
            laboratório.
          </p>
        </div>
      ),
    },
  },
  9: {
    // title: <h5>3.2. Outbreak at the Boarding School</h5>,
    title: {
      EN: <h5>3.2. Outbreak at the Boarding School</h5>,
      FR: <h5>3.2. Épidémie au Pensionnat</h5>,
      PT: <h5>3.2. Surto no Internato</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>
    //       Now let&apos;s investigate the five cases that occurred in the
    //       community of a different village. Recall that two of these five
    //       reported a history of recent travel outside Eliminati Province to
    //       different, high-transmission areas. That history may be consistent
    //       with them acquiring the infections elsewhere and importing them to the
    //       community you are investigating. However, the other three cases
    //       don&apos;t report recent travel and therefore raise concern about
    //       sustained transmission, potentially threatening your goal of
    //       elimination. If you do find evidence of transmission, you know cases
    //       directly linked to imported cases are classified as “introduced” cases
    //       and can sometimes occur even in areas certified as having eliminated
    //       malaria. However, if transmission occurs beyond introduced cases, you
    //       may need to consider intensifying interventions to successfully reach
    //       and maintain elimination.
    //     </p>
    //     <p className="mt-2">Let&apos;s take a look at your data!</p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>
            Now let&apos;s investigate the five cases that occurred in the
            community of a different village. Recall that two of these five
            reported a history of recent travel outside Eliminati Province to
            different, high-transmission areas. That history may be consistent
            with them acquiring the infections elsewhere and importing them to
            the community you are investigating. However, the other three cases
            don&apos;t report recent travel and therefore raise concern about
            sustained transmission, potentially threatening your goal of
            elimination. If you do find evidence of transmission, you know cases
            directly linked to imported cases are classified as “introduced”
            cases and can sometimes occur even in areas certified as having
            eliminated malaria. However, if transmission occurs beyond
            introduced cases, you may need to consider intensifying
            interventions to successfully reach and maintain elimination.
          </p>
          <p className="mt-2">Let&apos;s take a look at your data!</p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Maintenant, enquêtons sur les cinq cas survenus dans la communauté
            d'un village différent. Rappelons que deux de ces cinq cas ont
            signalé des voyages récents à l'extérieur de la province d'Eliminati
            vers des zones différentes à forte transmission. Ces antécédents
            peuvent indiquer qu'ils ont contracté les infections ailleurs et les
            ont importées dans la communauté que vous étudiez. Cependant, les
            trois autres cas ne signalent pas de voyages récents et suscitent
            donc des inquiétudes quant à une transmission soutenue, ce qui
            pourrait menacer votre objectif d'élimination. Si vous trouvez des
            preuves de transmission, vous savez que les cas directement liés aux
            cas importés sont classés comme des cas « introduits » et peuvent
            parfois survenir même dans des zones certifiées comme ayant éliminé
            le paludisme. Cependant, si la transmission se produit au-delà des
            cas introduits, vous devrez peut-être envisager d'intensifier les
            interventions pour atteindre et maintenir l'élimination avec succès.
          </p>
          <p className="mt-2">Jetons un coup d'œil à vos données !</p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Agora vamos investigar os cinco casos que ocorreram na comunidade de
            uma vila diferente. Lembre-se de que dois desses cinco relataram um
            histórico de viagens recentes para fora da Província de Eliminati
            para áreas diferentes e de alta transmissão. Esse histórico pode ser
            consistente com a aquisição das infecções em outro lugar e a
            importação delas para a comunidade que você está investigando. No
            entanto, os outros três casos não relatam viagens recentes e,
            portanto, levantam preocupações sobre a transmissão sustentada,
            potencialmente ameaçando sua meta de eliminação. Se você encontrar
            evidências de transmissão, saberá que os casos diretamente ligados
            aos casos importados são classificados como casos “introduzidos” e
            podem ocorrer mesmo em áreas certificadas como tendo eliminado a
            malária. No entanto, se a transmissão ocorrer além dos casos
            introduzidos, você pode precisar considerar a intensificação das
            intervenções para atingir e manter a eliminação com sucesso.
          </p>
          <p className="mt-2">Vamos dar uma olhada nos seus dados!</p>
        </div>
      ),
    },
  },
  10: {
    // title: <h5>3.2.1. Estimating MOI</h5>,
    title: {
      EN: <h5>3.2.1. Estimating MOI</h5>,
      FR: <h5>3.2.1. Estimation de MOI</h5>,
      PT: <h5>3.2.1. Estimativa de MOI</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>
    //       View the genotypes for each infection. Estimate the MOI based on the
    //       genotype and enter it in the form. This information will not provide
    //       definitive answers regarding transmission, but may help you interpret
    //       your IBS results, since you learned earlier in this exercise that MOI
    //       can affect IBS.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>
            View the genotypes for each infection. Estimate the MOI based on the
            genotype and enter it in the form. This information will not provide
            definitive answers regarding transmission, but may help you
            interpret your IBS results, since you learned earlier in this
            exercise that MOI can affect IBS.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Consultez les génotypes de chaque infection. Estimez le MOI en
            fonction du génotype et saisissez-le dans le formulaire. Ces
            informations ne fourniront pas de réponses définitives concernant la
            transmission, mais pourront vous aider à interpréter vos résultats
            IBS, car vous avez appris plus tôt dans cet exercice que le MOI peut
            affecter l'IBS.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Visualize os genótipos de cada infecção. Estime o MOI com base no
            genótipo e insira-o no formulário. Essas informações não fornecerão
            respostas definitivas sobre a transmissão, mas podem ajudá-lo a
            interpretar seus resultados de IBS, já que você aprendeu
            anteriormente neste exercício que o MOI pode afetar o IBS.
          </p>
        </div>
      ),
    },
  },
  11: {
    // title: <h5>3.2.2. Comparing Genotypes</h5>,
    title: {
      EN: <h5>3.2.2. Comparing Genotypes</h5>,
      FR: <h5>3.2.2. Comparaison des Génotypes</h5>,
      PT: <h5>3.2.2. Comparando Genótipos</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>
    //       Now let&apos;s compare the genotypes. First, take a look at the two
    //       cases with travel history (likely imported). Before we do, let&apos;s
    //       make a prediction.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>
            Now let&apos;s compare the genotypes. First, take a look at the two
            cases with travel history (likely imported). Before we do,
            let&apos;s make a prediction.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Comparons maintenant les génotypes. Tout d'abord, examinons les deux
            cas avec des antécédents de voyage (probablement importés). Avant de
            le faire, faisons une prédiction.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Agora vamos comparar os genótipos. Primeiro, vamos dar uma olhada
            nos dois casos com histórico de viagens (provavelmente importados).
            Antes de fazermos isso, vamos fazer uma previsão.
          </p>
        </div>
      ),
    },
  },
  12: {
    // title: <h5>3.2.2. Comparing Genotypes</h5>,
    title: {
      EN: <h5>3.2.2. Comparing Genotypes</h5>,
      FR: <h5>3.2.2. Comparaison des Génotypes</h5>,
      PT: <h5>3.2.2. Comparando Genótipos</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>
    //       Ok &ndash; let&apos;s see if the genetic data for these cases match
    //       your expectations. Select the <InlinePlus /> icon to compare the
    //       genotypes and IBS between these two infections. Once you understand
    //       why the transmission is unlikely, select the <InlinePlus minus /> to
    //       remove the connection.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
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
      FR: (
        <div>
          <p>
            Ok &ndash; voyons si les données génétiques de ces cas correspondent
            à vos attentes. Sélectionnez l'icône <InlinePlus /> pour comparer
            les génotypes et l'IBS entre ces deux infections. Une fois que vous
            avez compris pourquoi la transmission est peu probable, sélectionnez
            le <InlinePlus minus /> pour supprimer la connexion.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Ok &ndash; vamos ver se os dados genéticos para esses casos
            correspondem às suas expectativas. Selecione o ícone <InlinePlus />{" "}
            para comparar os genótipos e o IBS entre essas duas infecções.
            Depois de entender por que a transmissão é improvável, selecione o{" "}
            <InlinePlus minus /> para remover a conexão.
          </p>
        </div>
      ),
    },
  },
  13: {
    // title: <h5>3.2.2. Comparing Genotypes</h5>,
    title: {
      EN: <h5>3.2.2. Comparing Genotypes</h5>,
      PT: <h5>3.2.2. Comparando Genótipos</h5>,
      FR: <h5>3.2.2. Comparaison des Génotypes</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>
    //       Great &ndash; your investigation is starting to come together. Next,
    //       we might be interested to see if either of these potentially imported
    //       cases might have been responsible for infecting the three other cases
    //       (G, H, and I).
    //     </p>
    //     <p className="mt-4">
    //       Before we look at the genotyping data, what basic piece of
    //       epidemiologic data might you want to know in addition to the fact that
    //       they didn’t report recent travel? Why? Think about your answer then
    //       click the button below to get this important additional data!
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>
            Great &ndash; your investigation is starting to come together. Next,
            we might be interested to see if either of these potentially
            imported cases might have been responsible for infecting the three
            other cases (G, H, and I).
          </p>
          <p className="mt-4">
            Before we look at the genotyping data, what basic piece of
            epidemiologic data might you want to know in addition to the fact
            that they didn’t report recent travel? Why? Think about your answer
            then click the button below to get this important additional data!
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Super &ndash; votre enquête commence à se concrétiser. Ensuite, nous
            pourrions être intéressés de voir si l'un de ces cas potentiellement
            importés pourrait avoir été responsable de l'infection des trois
            autres cas (G, H et I).
          </p>
          <p className="mt-4">
            Avant d'examiner les données de génotypage, quelle donnée
            épidémiologique de base pourriez-vous vouloir connaître en plus du
            fait qu'ils n'ont pas signalé de voyage récent ? Pourquoi ?
            Réfléchissez à votre réponse, puis cliquez sur le bouton ci-dessous
            pour obtenir cette donnée supplémentaire importante !
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Ótimo &ndash; sua investigação está começando a se concretizar. Em
            seguida, podemos estar interessados em ver se algum desses casos
            potencialmente importados pode ter sido responsável por infectar os
            outros três casos (G, H e I).
          </p>
          <p className="mt-4">
            Antes de analisarmos os dados de genotipagem, qual informação
            epidemiológica básica você gostaria de saber, além do fato de que
            eles não relataram viagens recentes? Por quê? Pense em sua resposta
            e clique no botão abaixo para obter esses dados adicionais
            importantes!
          </p>
        </div>
      ),
    },
  },
  14: {
    // title: <h5>3.2.2. Comparing Genotypes</h5>,
    title: {
      EN: <h5>3.2.2. Comparing Genotypes</h5>,
      FR: <h5>3.2.2. Comparaison des Génotypes</h5>,
      PT: <h5>3.2.2. Comparando Genótipos</h5>,
    },
    // instructions: (
    //   <div>
    //     <p>
    //       Great &ndash; your investigation is starting to come together. Next,
    //       we might be interested to see if either of these potentially imported
    //       cases might have been responsible for infecting the three other cases
    //       (G, H, and I). Answer the question below before continuing.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>
            Great &ndash; your investigation is starting to come together. Next,
            we might be interested to see if either of these potentially
            imported cases might have been responsible for infecting the three
            other cases (G, H, and I). Answer the question below before
            continuing.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Super &ndash; votre enquête commence à se concrétiser. Ensuite, nous
            pourrions être intéressés de voir si l'un de ces cas potentiellement
            importés pourrait avoir été responsable de l'infection des trois
            autres cas (G, H et I). Répondez à la question ci-dessous avant de
            continuer.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Ótimo &ndash; sua investigação está começando a se concretizar. Em
            seguida, podemos estar interessados em ver se algum desses casos
            potencialmente importados pode ter sido responsável por infectar os
            outros três casos (G, H e I). Responda à pergunta abaixo antes de
            continuar.
          </p>
        </div>
      ),
    },
  },
  15: {
    // title: <h5>3.2.2. Comparing Genotypes</h5>,
    title: {
      EN: <h5>3.2.2. Comparing Genotypes</h5>,
      FR: <h5>3.2.2. Comparaison des Génotypes</h5>,
      PT: <h5>3.2.2. Comparando Genótipos</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Let&apos;s start with looking at any evidence of introduced cases
    //       stemming from case E. Based on your genotyping data and the
    //       epidemiologic data that you have, identify what, if any, transmission
    //       you think is related to case E.
    //     </p>
    //     <p>
    //       Click the <InlinePlus /> to check IBS and decide whether you believe a
    //       transmission has taken place to add a connection. Click the{" "}
    //       <InlinePlus minus /> to remove the connection if you think
    //       transmission is unlikely. If you think transmission is likely, click
    //       the ends of the connection <InlineEdge /> to indicate which direction
    //       the infection likely went. You must view all connections and all
    //       connections you choose to keep must have a direction{" "}
    //       <InlineEdge arrow /> before proceeding.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Let&apos;s start with looking at any evidence of introduced cases
            stemming from case E. Based on your genotyping data and the
            epidemiologic data that you have, identify what, if any,
            transmission you think is related to case E.
          </p>
          <p>
            Click the <InlinePlus /> to check IBS and decide whether you believe
            a transmission has taken place to add a connection. Click the{" "}
            <InlinePlus minus /> to remove the connection if you think
            transmission is unlikely. If you think transmission is likely, click
            the ends of the connection <InlineEdge /> to indicate which
            direction the infection likely went. You must view all connections
            and all connections you choose to keep must have a direction{" "}
            <InlineEdge arrow /> before proceeding.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Commençons par examiner toute preuve de cas introduits découlant du
            cas E. En fonction de vos données de génotypage et des données
            épidémiologiques dont vous disposez, identifiez toute transmission
            que vous pensez être liée au cas E.
          </p>
          <p>
            Cliquez sur le <InlinePlus /> pour vérifier l'IBS et décider si vous
            pensez qu'une transmission a eu lieu pour ajouter une connexion.
            Cliquez sur le <InlinePlus minus /> pour supprimer la connexion si
            vous pensez que la transmission est peu probable. Si vous pensez que
            la transmission est probable, cliquez sur les extrémités de la
            connexion <InlineEdge /> pour indiquer la direction probable de
            l'infection. Vous devez consulter toutes les connexions et toutes
            les connexions que vous choisissez de conserver doivent avoir une
            direction <InlineEdge arrow /> avant de continuer.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Vamos começar analisando qualquer evidência de casos introduzidos
            decorrentes do caso E. Com base em seus dados de genotipagem e nos
            dados epidemiológicos que você possui, identifique qual, se houver,
            transmissão você acha que está relacionada ao caso E.
          </p>
          <p>
            Clique no <InlinePlus /> para verificar o IBS e decidir se você
            acredita que ocorreu uma transmissão para adicionar uma conexão.
            Clique no <InlinePlus minus /> para remover a conexão se você achar
            que a transmissão é improvável. Se você achar que a transmissão é
            provável, clique nas extremidades da conexão <InlineEdge /> para
            indicar a direção provável da infecção. Você deve visualizar todas
            as conexões e todas as conexões que você escolher manter devem ter
            uma direção <InlineEdge arrow /> antes de prosseguir.
          </p>
        </div>
      ),
    },
  },
  16: {
    // title: <h5>3.2.2. Comparing Genotypes</h5>,
    title: {
      EN: <h5>3.2.2. Comparing Genotypes</h5>,
      FR: <h5>3.2.2. Comparaison des Génotypes</h5>,
      PT: <h5>3.2.2. Comparando Genótipos</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Now let&apos;s look at case F. Based on your genotyping data and the
    //       epidemiologic data you have, identify what, if any, transmission you
    //       think is related to case F.
    //     </p>
    //     <p>
    //       Click the <InlinePlus /> to check IBS and decide whether you believe a
    //       transmission has taken place to add a connection. Click the{" "}
    //       <InlinePlus minus /> to remove the connection if you think
    //       transmission is unlikely. If you think transmission is likely, click
    //       the ends of the connection <InlineEdge /> to indicate which direction
    //       the infection likely went. You must view all connections and all
    //       connections you choose to keep must have a direction{" "}
    //       <InlineEdge arrow /> before proceeding.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Now let&apos;s look at case F. Based on your genotyping data and the
            epidemiologic data you have, identify what, if any, transmission you
            think is related to case F.
          </p>
          <p>
            Click the <InlinePlus /> to check IBS and decide whether you believe
            a transmission has taken place to add a connection. Click the{" "}
            <InlinePlus minus /> to remove the connection if you think
            transmission is unlikely. If you think transmission is likely, click
            the ends of the connection <InlineEdge /> to indicate which
            direction the infection likely went. You must view all connections
            and all connections you choose to keep must have a direction{" "}
            <InlineEdge arrow /> before proceeding.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Examinons maintenant le cas F. En fonction de vos données de
            génotypage et des données épidémiologiques dont vous disposez,
            identifiez toute transmission que vous pensez être liée au cas F.
          </p>
          <p>
            Cliquez sur le <InlinePlus /> pour vérifier l'IBS et décider si vous
            pensez qu'une transmission a eu lieu pour ajouter une connexion.
            Cliquez sur le <InlinePlus minus /> pour supprimer la connexion si
            vous pensez que la transmission est peu probable. Si vous pensez que
            la transmission est probable, cliquez sur les extrémités de la
            connexion <InlineEdge />
            pour indiquer la direction probable de l'infection. Vous devez
            consulter toutes les connexions et toutes les connexions que vous
            choisissez de conserver doivent avoir une direction{" "}
            <InlineEdge arrow />
            avant de continuer.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Agora vamos analisar o caso F. Com base em seus dados de genotipagem
            e nos dados epidemiológicos que você possui, identifique qual, se
            houver, transmissão você acha que está relacionada ao caso F.
          </p>
          <p>
            Clique no <InlinePlus /> para verificar o IBS e decidir se você
            acredita que ocorreu uma transmissão para adicionar uma conexão.
            Clique no <InlinePlus minus /> para remover a conexão se você achar
            que a transmissão é improvável. Se você achar que a transmissão é
            provável, clique nas extremidades da conexão <InlineEdge /> para
            indicar a direção provável da infecção. Você deve visualizar todas
            as conexões e todas as conexões que você escolher manter devem ter
            uma direção <InlineEdge arrow /> antes de prosseguir.
          </p>
        </div>
      ),
    },
  },
  17: {
    // title: <h5>3.2.2. Comparing Genotypes</h5>,
    title: {
      EN: <h5>3.2.2. Comparing Genotypes</h5>,
      FR: <h5>3.2.2. Comparaison des Génotypes</h5>,
      PT: <h5>3.2.2. Comparando Genótipos</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Finally, let&apos;s look for any evidence of local transmission
    //       between cases G, H, and I.
    //     </p>
    //     <p>
    //       Click the <InlinePlus /> to check IBS and decide whether you believe a
    //       transmission has taken place to add a connection. Click the{" "}
    //       <InlinePlus minus /> to remove the connection if you think
    //       transmission is unlikely. If you think transmission is likely, click
    //       the ends of the connection <InlineEdge /> to indicate which direction
    //       the infection likely went. You must view all connections and all
    //       connections you choose to keep must have a direction{" "}
    //       <InlineEdge arrow /> before proceeding.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Finally, let&apos;s look for any evidence of local transmission
            between cases G, H, and I.
          </p>
          <p>
            Click the <InlinePlus /> to check IBS and decide whether you believe
            a transmission has taken place to add a connection. Click the{" "}
            <InlinePlus minus /> to remove the connection if you think
            transmission is unlikely. If you think transmission is likely, click
            the ends of the connection <InlineEdge /> to indicate which
            direction the infection likely went. You must view all connections
            and all connections you choose to keep must have a direction{" "}
            <InlineEdge arrow /> before proceeding.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Enfin, recherchons toute preuve de transmission locale entre les cas
            G, H et I.
          </p>
          <p>
            Cliquez sur le <InlinePlus /> pour vérifier l'IBS et décider si vous
            pensez qu'une transmission a eu lieu pour ajouter une connexion.
            Cliquez sur le <InlinePlus minus /> pour supprimer la connexion si
            vous pensez que la transmission est peu probable. Si vous pensez que
            la transmission est probable, cliquez sur les extrémités de la
            connexion <InlineEdge /> pour indiquer la direction probable de
            l'infection. Vous devez consulter toutes les connexions et toutes
            les connexions que vous choisissez de conserver doivent avoir une
            direction <InlineEdge arrow /> avant de continuer.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Finalmente, vamos procurar qualquer evidência de transmissão local
            entre os casos G, H e I.
          </p>
          <p>
            Clique no <InlinePlus /> para verificar o IBS e decidir se você
            acredita que ocorreu uma transmissão para adicionar uma conexão.
            Clique no <InlinePlus minus /> para remover a conexão se você achar
            que a transmissão é improvável. Se você achar que a transmissão é
            provável, clique nas extremidades da conexão <InlineEdge /> para
            indicar a direção provável da infecção. Você deve visualizar todas
            as conexões e todas as conexões que você escolher manter devem ter
            uma direção <InlineEdge arrow /> antes de prosseguir.
          </p>
        </div>
      ),
    },
  },
  18: {
    // title: (
    //   <h5>3.2.3. Interpretation of Results and Communcation of Findings</h5>
    // ),
    title: {
      EN: (
        <h5>3.2.3. Interpretation of Results and Communcation of Findings</h5>
      ),
      FR: (
        <h5>
          3.2.3. Interprétation des Résultats et Communication des Conclusions
        </h5>
      ),
      PT: (
        <h5>
          3.2.3. Interpretação dos Resultados e Comunicação das Conclusões
        </h5>
      ),
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Let's take a look at your results. Use this opportunity to fix your
    //       network by changing the direction of the infections, removing ones
    //       that should not exist, or adding ones that should.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Let's take a look at your results. Use this opportunity to fix your
            network by changing the direction of the infections, removing ones
            that should not exist, or adding ones that should.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Examinons vos résultats. Profitez de cette occasion pour corriger
            votre réseau en modifiant la direction des infections, en supprimant
            celles qui ne devraient pas exister ou en ajoutant celles qui
            devraient.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Vamos dar uma olhada nos seus resultados. Use esta oportunidade para
            corrigir sua rede alterando a direção das infecções, removendo
            aquelas que não deveriam existir ou adicionando aquelas que
            deveriam.
          </p>
        </div>
      ),
    },
  },
  19: {
    // title: (
    //   <h5>3.2.3. Interpretation of Results and Communcation of Findings</h5>
    // ),
    title: {
      EN: (
        <h5>3.2.3. Interpretation of Results and Communcation of Findings</h5>
      ),
      FR: (
        <h5>
          3.2.3. Interprétation des Résultats et Communication des Conclusions
        </h5>
      ),
      PT: (
        <h5>
          3.2.3. Interpretação dos Resultados e Comunicação das Conclusões
        </h5>
      ),
    },
    // instructions: (
    //   <div>
    //     <p>
    //       Finally, let&apos;s look for any evidence of local transmission
    //       between cases G, H, and I.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div>
          <p>
            Finally, let&apos;s look for any evidence of local transmission
            between cases G, H, and I.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Enfin, recherchons toute preuve de transmission locale entre les cas
            G, H et I.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Finalmente, vamos procurar qualquer evidência de transmissão local
            entre os casos G, H e I.
          </p>
        </div>
      ),
    },
  },
  20: {
    // title: (
    //   <h5>3.2.3. Interpretation of Results and Communcation of Findings</h5>
    // ),
    title: {
      EN: (
        <h5>3.2.3. Interpretation of Results and Communcation of Findings</h5>
      ),
      FR: (
        <h5>
          3.2.3. Interprétation des Résultats et Communication des Conclusions
        </h5>
      ),
      PT: (
        <h5>
          3.2.3. Interpretação dos Resultados e Comunicação das Conclusões
        </h5>
      ),
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Based on your genotyping data and the epidemiologic data you have,
    //       identify what, if any, transmission you think is related to case F.
    //     </p>
    //     <p>
    //       Once you are satisfied with the connections and their directions,
    //       continue to the next step. You can return to this step during the
    //       activity to adjust your connections.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
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
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Sur la base de vos données de génotypage et des données
            épidémiologiques dont vous disposez, identifiez toute transmission
            que vous pensez être liée au cas F.
          </p>
          <p>
            Une fois que vous êtes satisfait des connexions et de leurs
            directions, passez à l'étape suivante. Vous pouvez revenir à cette
            étape pendant l'activité pour ajuster vos connexions.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Com base em seus dados de genotipagem e nos dados epidemiológicos
            que você possui, identifique qual, se houver, transmissão você acha
            que está relacionada ao caso F.
          </p>
          <p>
            Depois de ficar satisfeito com as conexões e suas direções, continue
            para a próxima etapa. Você pode retornar a esta etapa durante a
            atividade para ajustar suas conexões.
          </p>
        </div>
      ),
    },
  },
  21: {
    // title: (
    //   <h5>3.2.3. Interpretation of Results and Communcation of Findings</h5>
    // ),
    title: {
      EN: (
        <h5>3.2.3. Interpretation of Results and Communcation of Findings</h5>
      ),
      FR: (
        <h5>
          3.2.3. Interprétation des Résultats et Communication des Conclusions
        </h5>
      ),
      PT: (
        <h5>
          3.2.3. Interpretação dos Resultados e Comunicação das Conclusões
        </h5>
      ),
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Based on your genotyping data and the epidemiologic data you have,
    //       identify what, if any, transmission you think is related to case F.
    //     </p>
    //     <p>
    //       Once you are satisfied with the connections and their directions,
    //       continue to the next step. You can return to this step during the
    //       activity to adjust your connections.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
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
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Sur la base de vos données de génotypage et des données
            épidémiologiques dont vous disposez, identifiez toute transmission
            que vous pensez être liée au cas F.
          </p>
          <p>
            Une fois que vous êtes satisfait des connexions et de leurs
            directions, passez à l'étape suivante. Vous pouvez revenir à cette
            étape pendant l'activité pour ajuster vos connexions.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Com base em seus dados de genotipagem e nos dados epidemiológicos
            que você possui, identifique qual, se houver, transmissão você acha
            que está relacionada ao caso F.
          </p>
          <p>
            Depois de ficar satisfeito com as conexões e suas direções, continue
            para a próxima etapa. Você pode retornar a esta etapa durante a
            atividade para ajustar suas conexões.
          </p>
        </div>
      ),
    },
  },
  22: {
    // title: (
    //   <h5>3.2.3. Interpretation of Results and Communcation of Findings</h5>
    // ),
    title: {
      EN: (
        <h5>3.2.3. Interpretation of Results and Communcation of Findings</h5>
      ),
      FR: (
        <h5>
          3.2.3. Interprétation des Résultats et Communication des Conclusions
        </h5>
      ),
      PT: (
        <h5>
          3.2.3. Interpretação dos Resultados e Comunicação das Conclusões
        </h5>
      ),
    },

    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Based on your genotyping data and the epidemiologic data you have,
    //       identify what, if any, transmission you think is related to case F.
    //     </p>
    //     <p>
    //       Once you are satisfied with the connections and their directions,
    //       continue to the next step. You can return to this step during the
    //       activity to adjust your connections.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
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
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Sur la base de vos données de génotypage et des données
            épidémiologiques dont vous disposez, identifiez toute transmission
            que vous pensez être liée au cas F.
          </p>
          <p>
            Une fois que vous êtes satisfait des connexions et de leurs
            directions, passez à l'étape suivante. Vous pouvez revenir à cette
            étape pendant l'activité pour ajuster vos connexions.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Com base em seus dados de genotipagem e nos dados epidemiológicos
            que você possui, identifique qual, se houver, transmissão você acha
            que está relacionada ao caso F.
          </p>
          <p>
            Depois de ficar satisfeito com as conexões e suas direções, continue
            para a próxima etapa. Você pode retornar a esta etapa durante a
            atividade para ajustar suas conexões.
          </p>
        </div>
      ),
    },
  },
  23: {
    // title: <h5>3.2.4. Actual Infections</h5>,
    title: {
      EN: <h5>3.2.4. Actual Infections</h5>,
      FR: <h5>3.2.4. Infections Réelles</h5>,
      PT: <h5>3.2.4. Infecções Reais</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       As with Scenario 1, you would be able to interpret the genotypes as
    //       you have just done and come to the right conclusions without actually
    //       needing to know what the parasite composition of the infections were.
    //       However, since this is a simulated example, we can show you what the
    //       underlying infections and transmission history in these cases actually
    //       looked like.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            As with Scenario 1, you would be able to interpret the genotypes as
            you have just done and come to the right conclusions without
            actually needing to know what the parasite composition of the
            infections were. However, since this is a simulated example, we can
            show you what the underlying infections and transmission history in
            these cases actually looked like.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Comme pour le scénario 1, vous seriez en mesure d'interpréter les
            génotypes comme vous venez de le faire et de tirer les bonnes
            conclusions sans avoir réellement besoin de savoir quelle était la
            composition des parasites dans les infections. Cependant, comme il
            s'agit d'un exemple simulé, nous pouvons vous montrer à quoi
            ressemblaient réellement les infections sous-jacentes et l'histoire
            de la transmission dans ces cas.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Assim como no Cenário 1, você seria capaz de interpretar os
            genótipos como acabou de fazer e chegar às conclusões corretas sem
            realmente precisar saber qual era a composição dos parasitas nas
            infecções. No entanto, como este é um exemplo simulado, podemos
            mostrar a você como eram realmente as infecções subjacentes e o
            histórico de transmissão nesses casos.
          </p>
        </div>
      ),
    },
  },

  24: {
    // title: <h5>3.2.4. Actual Infections</h5>,
    title: {
      EN: <h5>3.2.4. Actual Infections</h5>,
      FR: <h5>3.2.4. Infections Réelles</h5>,
      PT: <h5>3.2.4. Infecções Reais</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Let’s look at how this transmission occurred now, step by step. Case E
    //       came into the village after traveling to a high transmission area and
    //       being infected with two genetically distinct parasite clones,
    //       resulting in a polyclonal infection with MOI of 2 (indicated by the
    //       red and blue colored balls in case E). This could have been due to
    //       infections by two different mosquitoes while traveling
    //       (superinfection) or infection with two unrelated parasite clones at
    //       the same time from one mosquito (cotransmission).
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Let’s look at how this transmission occurred now, step by step. Case
            E came into the village after traveling to a high transmission area
            and being infected with two genetically distinct parasite clones,
            resulting in a polyclonal infection with MOI of 2 (indicated by the
            red and blue colored balls in case E). This could have been due to
            infections by two different mosquitoes while traveling
            (superinfection) or infection with two unrelated parasite clones at
            the same time from one mosquito (cotransmission).
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Voyons maintenant comment cette transmission s'est produite, étape
            par étape. Le cas E est arrivé dans le village après s'être rendu
            dans une zone à forte transmission et avoir été infecté par deux
            clones de parasites génétiquement distincts, ce qui a entraîné une
            infection polyclonale avec un MOI de 2 (indiqué par les boules
            colorées en rouge et bleu dans le cas E). Cela pourrait être dû à
            des infections par deux moustiques différents pendant le voyage
            (superinfection) ou à une infection par deux clones de parasites non
            liés en même temps par un moustique (cotransmission).
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Vamos ver como essa transmissão ocorreu agora, passo a passo. O caso
            E chegou à vila depois de viajar para uma área de alta transmissão e
            ser infectado com dois clones de parasitas geneticamente distintos,
            resultando em uma infecção policlonal com MOI de 2 (indicado pelas
            bolas coloridas em vermelho e azul no caso E). Isso pode ter sido
            devido a infecções por dois mosquitos diferentes durante a viagem
            (superinfecção) ou infecção com dois clones de parasitas não
            relacionados ao mesmo tempo de um mosquito (cotransmissão).
          </p>
        </div>
      ),
    },
  },

  25: {
    // title: <h5>3.2.4. Actual Infections</h5>,
    title: {
      EN: <h5>3.2.4. Actual Infections</h5>,
      FR: <h5>3.2.4. Infections Réelles</h5>,
      PT: <h5>3.2.4. Infecções Reais</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>Next, a mosquito bit case E, and was infected with both clones.</p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>Next, a mosquito bit case E, and was infected with both clones.</p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Ensuite, un moustique a piqué le cas E et a été infecté par les deux
            clones.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Em seguida, um mosquito picou o caso E e foi infectado com ambos os
            clones.
          </p>
        </div>
      ),
    },

    26: {
      // title: <h5>3.2.4. Actual Infections</h5>,
      title: {
        EN: <h5>3.2.4. Actual Infections</h5>,
        FR: <h5>3.2.4. Infections Réelles</h5>,
        PT: <h5>3.2.4. Infecções Reais</h5>,
      },
      // instructions: (
      //   <div className="flex flex-col gap-2">
      //     <p>
      //       Finally, that mosquito went on to bite case H, and transmitted both
      //       clones, resulting in a polyclonal infection with MOI of 2.
      //     </p>
      //   </div>
      // ),
      instructions: {
        EN: (
          <div className="flex flex-col gap-2">
            <p>
              Finally, that mosquito went on to bite case H, and transmitted
              both clones, resulting in a polyclonal infection with MOI of 2.
            </p>
          </div>
        ),
        FR: (
          <div className="flex flex-col gap-2">
            <p>
              Enfin, ce moustique a piqué le cas H et a transmis les deux
              clones, ce qui a entraîné une infection polyclonale avec un MOI de
              2.
            </p>
          </div>
        ),
        PT: (
          <div className="flex flex-col gap-2">
            <p>
              Finalmente, esse mosquito picou o caso H e transmitiu ambos os
              clones, resultando em uma infecção policlonal com MOI de 2.
            </p>
          </div>
        ),
      },
    },
  },

  26: {
    // title: <h5>3.2.4. Actual Infections</h5>,
    title: {
      EN: <h5>3.2.4. Actual Infections</h5>,
      FR: <h5>3.2.4. Infections Réelles</h5>,
      PT: <h5>3.2.4. Infecções Reais</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Sexual recombination between the clones occurred in the mosquito,
    //       creating a parasite clone that was a hybrid of the two.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Sexual recombination between the clones occurred in the mosquito,
            creating a parasite clone that was a hybrid of the two.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Une recombinaison sexuelle entre les clones s'est produite chez le
            moustique, créant un clone de parasite hybride des deux.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            A recombinação sexual entre os clones ocorreu no mosquito, criando
            um clone de parasita que era um híbrido dos dois.
          </p>
        </div>
      ),
    },
  },

  27: {
    // title: <h5>3.2.4. Actual Infections</h5>,
    title: {
      EN: <h5>3.2.4. Actual Infections</h5>,
      FR: <h5>3.2.4. Infections Réelles</h5>,
      PT: <h5>3.2.4. Infecções Reais</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       After a week or so, the mosquito became infectious and was able to
    //       successfully feed on case G, infecting them and causing them to become
    //       sick with malaria a week or two after that. You were able to link
    //       these infections with genotyping despite the recombination, since all
    //       of the parasite genome in case G descended from the parasites in case
    //       E.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            After a week or so, the mosquito became infectious and was able to
            successfully feed on case G, infecting them and causing them to
            become sick with malaria a week or two after that. You were able to
            link these infections with genotyping despite the recombination,
            since all of the parasite genome in case G descended from the
            parasites in case E.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Après environ une semaine, le moustique est devenu infectieux et a
            pu se nourrir avec succès du cas G, l'infectant et le rendant malade
            du paludisme une semaine ou deux plus tard. Vous avez pu relier ces
            infections au génotypage malgré la recombinaison, car tout le génome
            du parasite dans le cas G descend des parasites du cas E.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Depois de uma semana ou mais, o mosquito tornou-se infeccioso e foi
            capaz de se alimentar com sucesso do caso G, infectando-o e fazendo
            com que ele ficasse doente com malária uma ou duas semanas depois.
            Você foi capaz de vincular essas infecções à genotipagem apesar da
            recombinação, já que todo o genoma do parasita no caso G descendeu
            dos parasitas no caso E.
          </p>
        </div>
      ),
    },
  },

  28: {
    // title: <h5>3.2.4. Actual Infections</h5>,
    title: {
      EN: <h5>3.2.4. Actual Infections</h5>,
      FR: <h5>3.2.4. Infections Réelles</h5>,
      PT: <h5>3.2.4. Infecções Reais</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       A similar process occurred for case I, after a second mosquito bit
    //       case E, was also infected, and transmitted a different hybrid of the
    //       parasites imported by case E.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            A similar process occurred for case I, after a second mosquito bit
            case E, was also infected, and transmitted a different hybrid of the
            parasites imported by case E.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Un processus similaire s'est produit pour le cas I, après qu'un
            deuxième moustique a piqué le cas E, a également été infecté et a
            transmis un hybride différent des parasites importés par le cas E.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Um processo semelhante ocorreu para o caso I, depois que um segundo
            mosquito picou o caso E, também foi infectado e transmitiu um
            híbrido diferente dos parasitas importados pelo caso E.
          </p>
        </div>
      ),
    },
  },
  29: {
    // title: <h5>3.2.4. Actual Infections</h5>,
    title: {
      EN: <h5>3.2.4. Actual Infections</h5>,
      FR: <h5>3.2.4. Infections Réelles</h5>,
      PT: <h5>3.2.4. Infecções Reais</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       In summary, you can see that the parasites in cases G and I are
    //       related to the parasites in case E by descent, but are not identical
    //       due to sexual recombination in the mosquito.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            In summary, you can see that the parasites in cases G and I are
            related to the parasites in case E by descent, but are not identical
            due to sexual recombination in the mosquito.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            En résumé, vous pouvez voir que les parasites dans les cas G et I
            sont liés aux parasites dans le cas E par descendance, mais ne sont
            pas identiques en raison de la recombinaison sexuelle chez le
            moustique.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Em resumo, você pode ver que os parasitas nos casos G e I estão
            relacionados aos parasitas no caso E por descendência, mas não são
            idênticos devido à recombinação sexual no mosquito.
          </p>
        </div>
      ),
    },
  },

  // 29: {
  //   title: <h5>3.2.4. Actual Infections</h5>,
  //   instructions: (
  //     <div className="flex flex-col gap-2">
  //       <p>
  //         Notice that since cases G and I both were infected with parasites
  //         which had the same two parents, they are siblings. You had thought
  //         this might be the case from your genotyping data earlier, and you were
  //         right! We can also see from their sequences that IBD is 0.5, as we
  //         would expect for siblings.
  //       </p>
  //     </div>
  //   ),
  // },

  29.5: {
    title: {
      EN: <h5>3.2.4. Actual Infections</h5>,
      FR: <h5>3.2.4. Infections Réelles</h5>,
      PT: <h5>3.2.4. Infecções Reais</h5>,
    },

    // },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Fortunately, you were able to distinguish this relatedness from direct
    //       transmission between cases I and G. If you hadn’t been able to make
    //       that distinction, then transmission could have looked like this
    //       instead. How might this have changed your recommendations to the
    //       program?
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Fortunately, you were able to distinguish this relatedness from
            direct transmission between cases I and G. If you hadn’t been able
            to make that distinction, then transmission could have looked like
            this instead. How might this have changed your recommendations to
            the program?
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Heureusement, vous avez pu distinguer cette parenté de la
            transmission directe entre les cas I et G. Si vous n'aviez pas pu
            faire cette distinction, la transmission aurait pu ressembler à ceci
            à la place. Comment cela aurait-il pu modifier vos recommandations
            au programme ?
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Felizmente, você foi capaz de distinguir esse parentesco da
            transmissão direta entre os casos I e G. Se você não tivesse sido
            capaz de fazer essa distinção, a transmissão poderia ter se parecido
            com isso. Como isso poderia ter mudado suas recomendações para o
            programa?
          </p>
        </div>
      ),
    },
  },
  // 30: {
  //   // title: <h5>3.2.5. Summary</h5>,
  //   title: {
  //     EN: <h5>3.2.5. Summary</h5>,
  //     FR: <h5>3.2.5. Résumé</h5>,
  //     PT: <h5>3.2.5. Resumo</h5>,
  //   },
  //   // instructions: (
  //   //   <div className="flex flex-col gap-2">
  //   //     <p>
  //   //       Congratulations! You have successfully used parasite genotyping data
  //   //       to investigate a potential outbreak. You were able to identify that
  //   //       cases E and F were likely imported, and that cases G, H, and I were
  //   //       linked to case E.
  //   //     </p>
  //   //   </div>
  //   // ),
  //   instructions: {
  //     EN: (
  //       <div className="flex flex-col gap-2">
  //         <p>
  //           Congratulations! You have successfully used parasite genotyping data
  //           to investigate a potential outbreak. You were able to identify that
  //           cases E and F were likely imported, and that cases G, H, and I were
  //           linked to case E.
  //         </p>
  //       </div>
  //     ),

  //   }
  // },

  30: {
    // title: <h5>3.2.4. Actual Infections</h5>,
    title: {
      EN: <h5>3.2.4. Actual Infections</h5>,
      FR: <h5>3.2.4. Infections Réelles</h5>,
      PT: <h5>3.2.4. Infecções Reais</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Case F also came into the village after traveling from a different
    //       high transmission area. This person was infected with three
    //       genetically distinct parasite clones during travel.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Case F also came into the village after traveling from a different
            high transmission area. This person was infected with three
            genetically distinct parasite clones during travel.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Le cas F est également arrivé dans le village après avoir voyagé
            depuis une autre zone à forte transmission. Cette personne a été
            infectée par trois clones de parasites génétiquement distincts
            pendant le voyage.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            O caso F também chegou à vila depois de viajar de uma área diferente
            de alta transmissão. Essa pessoa foi infectada com três clones de
            parasitas geneticamente distintos durante a viagem.
          </p>
        </div>
      ),
    },
  },
  31: {
    // title: <h5>3.2.4. Actual Infections</h5>,
    title: {
      EN: <h5>3.2.4. Actual Infections</h5>,
      FR: <h5>3.2.4. Infections Réelles</h5>,
      PT: <h5>3.2.4. Infecções Reais</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       However, none of the parasites in case F were transmitted to other
    //       cases in the village.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            However, none of the parasites in case F were transmitted to other
            cases in the village.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Cependant, aucun des parasites du cas F n'a été transmis à d'autres
            cas dans le village.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            No entanto, nenhum dos parasitas no caso F foi transmitido para
            outros casos na vila.
          </p>
        </div>
      ),
    },
  },
  32: {
    // title: <h5>3.2.4. Actual Infections</h5>,
    title: {
      EN: <h5>3.2.4. Actual Infections</h5>,
      FR: <h5>3.2.4. Infections Réelles</h5>,
      PT: <h5>3.2.4. Infecções Reais</h5>,
    },

    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Recombination between these parasites again occurred in the mosquito,
    //       creating two new hybrid clones.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Recombination between these parasites again occurred in the
            mosquito, creating two new hybrid clones.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Une recombinaison entre ces parasites s'est à nouveau produite chez
            le moustique, créant deux nouveaux clones hybrides.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            A recombinação entre esses parasitas ocorreu novamente no mosquito,
            criando dois novos clones híbridos.
          </p>
        </div>
      ),
    },
  },
  33: {
    // title: <h5>3.2.5. Summary</h5>,
    title: {
      EN: <h5>3.2.5. Summary</h5>,
      FR: <h5>3.2.5. Résumé</h5>,
      PT: <h5>3.2.5. Resumo</h5>,
    },
    // instructions: (
    //   <div className="flex flex-col gap-2">
    //     <p>
    //       Congratulations! You have successfully used parasite genotyping data
    //       to investigate a potential outbreak. You were able to identify that
    //       cases E and F were likely imported, and that cases G, H, and I were
    //       linked to case E.
    //     </p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-2">
          <p>
            Congratulations! You have successfully used parasite genotyping data
            to investigate a potential outbreak. You were able to identify that
            cases E and F were likely imported, and that cases G, H, and I were
            linked to case E.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-2">
          <p>
            Félicitations ! Vous avez utilisé avec succès les données de
            génotypage des parasites pour enquêter sur une épidémie potentielle.
            Vous avez pu identifier que les cas E et F étaient probablement
            importés, et que les cas G, H et I étaient liés au cas E.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-2">
          <p>
            Parabéns! Você usou com sucesso os dados de genotipagem de parasitas
            para investigar um possível surto. Você foi capaz de identificar que
            os casos E e F provavelmente foram importados e que os casos G, H e
            I estavam ligados ao caso E.
          </p>
        </div>
      ),
    },
  },
};

//   31: {
//     // title: <h5>3.2.4. Actual Infections</h5>,
//     title: {
//       EN: <h5>3.2.4. Actual Infections</h5>,
//       FR: <h5>3.2.4. Infections Réelles</h5>,
//       PT: <h5>3.2.4. Infecções Reais</h5>,
//     },
//     // instructions: (
//     //   <div className="flex flex-col gap-2">
//     //     <p>
//     //       However, none of the parasites in case F were transmitted to other
//     //       cases in the village.
//     //     </p>
//     //   </div>
//     // ),
//     instructions: {
//       EN: (
//         <div className="flex flex-col gap-2">
//           <p>
//             However, none of the parasites in case F were transmitted to other
//             cases in the village.
//           </p>
//         </div>
//       ),
//       FR: (
//         <div className="flex flex-col gap-2">
//           <p>
//             Cependant, aucun des parasites du cas F n'a été transmis à
//             d'autres cas dans le village.
//           </p>
//         </div>
//       ),
//       PT: (
//         <div className="flex flex-col gap-2">
//           <p>
//             No entanto, nenhum dos parasitas no caso F foi transmitido para
//             outros casos na vila.
//           </p>
//         </div>
//       ),
//     }

//   },

// 32: {
//   // title: <h5>3.2.4. Actual Infections</h5>,
//   title: {
//     EN: <h5>3.2.4. Actual Infections</h5>,

//   }
//   instructions: (
//     <div className="flex flex-col gap-2">
//       <p>
//         Recombination between these parasites again occurred in the mosquito,
//         creating two new hybrid clones.
//       </p>
//     </div>
//   ),
// },
//   33: {
//     title: <h5>3.2.4. Actual Infections</h5>,
//     instructions: (
//       <div className="flex flex-col gap-2">
//         <p>
//           The mosquito then infected case H with the two hybrid clones. Case H
//           developed malaria from these 2 clones, which you were able to clearly
//           link to case F with your genotyping despite the polyclonal nature of
//           both the infections.
//         </p>
//       </div>
//     ),
//   },
//   34: {
//     title: <h5>3.2.5. IBD & IBS Comparisons</h5>,
//     instructions: (
//       <div className="flex flex-col gap-2">
//         <p>
//           Now that we know exactly what the composition of all the infections
//           was, we can evaluate IBD for each pair of infections and compare this
//           to IBS. Click on any of the comparisons between cases in the table at
//           the right to see more information about that connection (or lack of
//           connection). Remember that IBD tells us more directly about shared
//           ancestry than IBS, and therefore is potentially more informative about
//           transmission, but that IBS is easier to calculate from genotyping
//           data. In this scenario, you were able to use IBS to figure out the
//           transmission process, but in a more complicated situation IBD might be
//           more helpful. The good news is that there are available statistical
//           methods which can estimate IBD from the same type of genotyping data
//           you used here, even when you don’t know the underlying composition of
//           the infections. There are even methods under development to
//           specifically estimate transmission links, which we will review later
//           in this module.
//         </p>
//       </div>
//     ),
//   },
//   35: {
//     title: <h5>3.2.5. IBD & IBS Comparisons</h5>,
//     instructions: (
//       <div className="flex flex-col gap-2">
//         <p>
//           Notice that both IBD and IBS are 1 for all related infections, but
//           that IBD is generally much lower than IBS for unrelated infections,
//           making it easier to distinguish which are truly related by ancestry.
//           In particular, note that the two infections which are siblings (cases
//           G and I) have an IBD which is easier to distinguish from completely
//           unrelated cases (0.5 vs. 0 for unrelated cases) than the IBS values
//           (0.67 vs. a range of 0.17-0.33 for unrelated cases). This information
//           about the siblings could have been particularly useful if case E was
//           not captured by your surveillance – for example if they had an
//           asymptomatic infection and did not present for care. In this case, we
//           might still have be able to infer the presence of an imported case
//           leading to cases G and I based on fact that these two siblings quite
//           possibly derived from the same infection.
//         </p>
//       </div>
//     ),
//   },
//   36: {
//     title: <h5>3.2.6. Knowledge Check</h5>,
//     instructions: (
//       <div className="flex flex-col gap-2">
//         <p>
//           We’ve covered a lot of material in this module so far! Before we
//           finish with the activity, let’s use this scenario to review a few
//           concepts.
//         </p>
//       </div>
//     ),
//   },
//   37: {
//     title: <h5>3.2.6. Knowledge Check</h5>,
//     instructions: (
//       <div className="flex flex-col gap-2">
//         <p>
//           We’ve covered a lot of material in this module so far! Before we
//           finish with the activity, let’s use this scenario to review a few
//           concepts.
//         </p>
//       </div>
//     ),
//   },
//   38: {
//     title: <h5>3.2.6. Knowledge Check</h5>,
//     instructions: (
//       <div className="flex flex-col gap-2">
//         <p>
//           We’ve covered a lot of material in this module so far! Before we
//           finish with the activity, let’s use this scenario to review a few
//           concepts.
//         </p>
//       </div>
//     ),
//   },
//   39: {
//     title: <h5>3.2.6. Knowledge Check</h5>,
//     instructions: (
//       <div className="flex flex-col gap-2">
//         <p>
//           We’ve covered a lot of material in this module so far! Before we
//           finish with the activity, let’s use this scenario to review a few
//           concepts.
//         </p>
//       </div>
//     ),
//   },
//   40: {
//     title: <h5>Summary</h5>,
//     instructions: (
//       <div className="flex flex-col gap-2">
//         <p>
//           That was hard work, but it has paid off. You have shown that there is
//           no concern about transmission in Scenario 1, allaying fears of an
//           outbreak in the boarding school. You have also demonstrated for
//           Scenario 2 that while there has been limited local transmission in the
//           village, leading to a few introduced cases, there is not yet any
//           evidence of sustained transmission. You made some very good choices
//           early on, allowing you to come to such clear conclusions. You started
//           by rigorously evaluating your genotyping methods on laboratory
//           controls, allowing you to ensure that the data you produced were
//           likely to provide the information that you needed. For example, you
//           determined early on that a panel of 12 SNPs would not allow you to
//           easily distinguish whether polyclonal infections were related or not
//           and moved to a higher resolution panel of 12 microhaplotypes. You also
//           generated enough data from your controls to show you how to interpret
//           the results on unknowns. Finally, you carefully considered your
//           genotyping data in the context of your high quality epidemiologic
//           data, based your conclusions on the available evidence, and
//           communicated results in a straightforward and accurate way to relevant
//           parties. Your efforts have been noticed by those in charge, and there
//           are rumors that additional resources are being mobilized to support
//           your work along with promotions for you and your team.
//         </p>
//         <div className="mt-8">
//           <ModuleCopyCode code="TuYouyou1930" />
//         </div>
//         <Image
//           width={1200}
//           height={800}
//           alt="Finished"
//           className="dark:brightness-50"
//           src="/InteractiveAssets/Slide9.png"
//         />
//       </div>
//     ),
//   },
// };
