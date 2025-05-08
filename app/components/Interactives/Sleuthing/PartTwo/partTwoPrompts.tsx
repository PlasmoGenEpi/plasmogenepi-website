import { ReactElement } from "react";
import { sections } from "../2.6/pages/sections";

export const partTwoPrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  0: {
    title: {
      EN: <h5>{sections[2].subcomponents[0].title["EN"]}</h5>,
      FR: <h5>{sections[2].subcomponents[0].title["FR"]}</h5>,
      PT: <h5>{sections[2].subcomponents[0].title["PT"]}</h5>,
    },
    // title: <h5>{sections[1].subcomponents[1].title["EN"]}</h5>,
    // instructions: (
    //   <div className="flex flex-col gap-4">
    //     <p>
    //       Now that you have validated your lab’s genotyping data, you are ready
    //       to test the samples from your malaria indicator survey!
    //     </p>
    //     <p>
    //       These samples are collected from across your country and therefore
    //       should be broadly representative of what is going on. In this step of
    //       the activity, you will analyze 10 genotyped infections so you can
    //       finish this activity in a reasonable amount of time, but we will
    //       assume that they are representative of your full sample which is much
    //       larger.
    //     </p>
    //     <p>
    //       You will need to estimate the MOI for each one, based on your
    //       experience analyzing data from controls. Then you will calculate the
    //       mean MOI and interpret your results to determine if your vector
    //       control interventions are working.
    //     </p>
    //     <p>Good luck!</p>
    //   </div>
    // ),
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Now that you have validated your lab’s genotyping data, you are
            ready to test the samples from your malaria indicator survey!
          </p>
          <p>
            These samples are collected from across your country and therefore
            should be broadly representative of what is going on. In this step
            of the activity, you will analyze 10 genotyped infections so you can
            finish this activity in a reasonable amount of time, but we will
            assume that they are representative of your full sample which is
            much larger.
          </p>
          <p>
            You will need to estimate the MOI for each one, based on your
            experience analyzing data from controls. Then you will calculate the
            mean MOI and interpret your results to determine if your vector
            control interventions are working.
          </p>
          <p>Good luck!</p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Maintenant que vous avez validé les données de génotypage de votre
            laboratoire, vous êtes prêt à tester les échantillons de votre
            enquête sur les indicateurs du paludisme !
          </p>
          <p>
            Ces échantillons sont collectés dans tout votre pays et devraient
            donc être largement représentatifs de ce qui se passe. Dans cette
            étape de l'activité, vous analyserez 10 infections génotypées afin
            de pouvoir terminer cette activité dans un délai raisonnable, mais
            nous supposerons qu'elles sont représentatives de votre échantillon
            complet qui est beaucoup plus grand.
          </p>
          <p>
            Vous devrez estimer le MOI pour chacun d'eux, en fonction de votre
            expérience dans l'analyse des données des contrôles. Ensuite, vous
            calculerez le MOI moyen et interpréterez vos résultats pour
            déterminer si vos interventions de lutte antivectorielle
            fonctionnent.
          </p>
          <p>Bonne chance !</p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Agora que você validou os dados de genotipagem do seu laboratório,
            você está pronto para testar as amostras do seu levantamento de
            indicadores de malária!
          </p>
          <p>
            Essas amostras são coletadas em todo o país e, portanto, devem ser
            amplamente representativas do que está acontecendo. Nesta etapa da
            atividade, você analisará 10 infecções genotipadas para que possa
            concluir esta atividade em um período de tempo razoável, mas
            presumiremos que elas sejam representativas de sua amostra completa,
            que é muito maior.
          </p>
          <p>
            Você precisará estimar o MOI para cada um deles, com base em sua
            experiência na análise de dados de controles. Em seguida, você
            calculará o MOI médio e interpretará seus resultados para determinar
            se suas intervenções de controle de vetores estão funcionando.
          </p>
          <p>Boa sorte!</p>
        </div>
      ),
    },
  },
  1: {
    title: {
      EN: <h5>{sections[2].subcomponents[1].title["EN"]}</h5>,
      FR: <h5>{sections[2].subcomponents[1].title["FR"]}</h5>,
      PT: <h5>{sections[2].subcomponents[1].title["PT"]}</h5>,
    },
    // title: <h5>{sections[2].subcomponents[1].title}</h5>,
    instructions: {
      EN: (
        <div>
          <p>
            View the genotype for each field samples from SNPs. Estimate the MOI
            for each infection and enter it into the table. When you enter your
            estimate of the MOI for each infection, the results will display in
            a histogram below.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Affichez le génotype de chaque échantillon de terrain à partir des
            SNP. Estimez le MOI pour chaque infection et saisissez-le dans le
            tableau. Lorsque vous saisissez votre estimation du MOI pour chaque
            infection, les résultats s'affichent dans un histogramme ci-dessous.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Visualize o genótipo para cada amostra de campo de SNPs. Estime o
            MOI para cada infecção e insira-o na tabela. Quando você inserir sua
            estimativa do MOI para cada infecção, os resultados serão exibidos
            em um histograma abaixo.
          </p>
        </div>
      ),
    },

    // instructions: (
    //   <div>
    //     <p>
    //       View the genotype for each field samples from SNPs. Estimate the MOI
    //       for each infection and enter it into the table. When you enter your
    //       estimate of the MOI for each infection, the results will display in a
    //       histogram below.
    //     </p>
    //   </div>
    // ),
  },
  2: {
    title: {
      EN: <h5>{sections[2].subcomponents[2].title["EN"]}</h5>,
      FR: <h5>{sections[2].subcomponents[2].title["FR"]}</h5>,
      PT: <h5>{sections[2].subcomponents[2].title["PT"]}</h5>,
    },
    // title: <h5>{sections[2].subcomponents[2].title}</h5>,
    instructions: {
      EN: (
        <div>
          <p>
            The average MOI from your estimates (adding up your 10 estimates of
            MOI and dividing by 10) is shown below.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Le MOI moyen de vos estimations (en additionnant vos 10 estimations
            de MOI et en divisant par 10) est indiqué ci-dessous.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            O MOI médio de suas estimativas (somando suas 10 estimativas de MOI
            e dividindo por 10) é mostrado abaixo.
          </p>
        </div>
      ),
    },
    // instructions: (
    //   <div>
    //     <p>
    //       The average MOI from your estimates (adding up your 10 estimates of
    //       MOI and dividing by 10) is shown below.
    //     </p>
    //   </div>
    // ),
  },
  3: {
    // title: <h5>{sections[2].subcomponents[3].title}</h5>,
    title: {
      EN: <h5>{sections[2].subcomponents[3].title["EN"]}</h5>,
      FR: <h5>{sections[2].subcomponents[3].title["FR"]}</h5>,
      PT: <h5>{sections[2].subcomponents[3].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            Before you continue to Step 3, let's take a moment to think about
            the relationship between MOI and the impact of your vector control
            interventions.
          </p>
          <p>
            Recall from the beginning of the activity that have DBS stored from
            a recent malaria indicator survey and historic data showing average
            MOI was 2.5 before the intervention.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Avant de passer à l'étape 3, prenons un moment pour réfléchir à la
            relation entre le MOI et l'impact de vos interventions de lutte
            antivectorielle.
          </p>
          <p>
            Rappelez-vous du début de l'activité que vous avez des DBS stockés
            provenant d'une récente enquête sur les indicateurs du paludisme et
            des données historiques indiquant que le MOI moyen était de 2,5
            avant l'intervention.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Antes de continuar para a Etapa 3, vamos dedicar um momento para
            pensar sobre a relação entre o MOI e o impacto de suas intervenções
            de controle de vetores.
          </p>
          <p>
            Lembre-se do início da atividade de que você tem DBS armazenados de
            um recente levantamento de indicadores de malária e dados históricos
            mostrando que o MOI médio era de 2,5 antes da intervenção.
          </p>
        </div>
      ),
    },
    // instructions: (
    //   <div className="flex flex-col gap-4">
    //     <p>
    //       Before you continue to Step 3, let's take a moment to think about the
    //       relationship between MOI and the impact of your vector control
    //       interventions.
    //     </p>
    //     <p>
    //       Recall from the beginning of the activity that have DBS stored from a
    //       recent malaria indicator survey and historic data showing average MOI
    //       was 2.5 before the intervention.
    //     </p>
    //   </div>
    // ),
  },
};
