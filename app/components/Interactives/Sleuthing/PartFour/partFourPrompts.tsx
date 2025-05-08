import { ReactElement } from "react";
import { sections } from "../2.6/pages/sections";

export const partFourPrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  0: {
    // title: <h5>{sections[4].title}</h5>,
    title: {
      EN: <h5>{sections[4].subcomponents[0].title["EN"]}</h5>,
      FR: <h5>{sections[4].subcomponents[0].title["FR"]}</h5>,
      PT: <h5>{sections[4].subcomponents[0].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <p>
          Now it's time to analyze results from your field samples using
          microhaplotypes to estimate the unknown MOI in your population.
        </p>
      ),
      FR: (
        <p>
          Il est maintenant temps d'analyser les résultats de vos échantillons
          de terrain en utilisant les microhaplotypes pour estimer le MOI
          inconnu de votre population.
        </p>
      ),
      PT: (
        <p>
          Agora é altura de analisar os resultados das suas amostras de campo
          utilizando microhaplótipos para estimar o MOI desconhecido na sua
          população.
        </p>
      ),
    },
    // instructions: (
    //   <p>
    //     Now it's time to analyze results from your field samples using
    //     microhaplotypes to estimate the unknown MOI in your population.
    //   </p>
    // ),
  },
  1: {
    // title: <h5>{sections[4].subcomponents[1].title}</h5>,
    title: {
      EN: <h5>{sections[4].subcomponents[1].title["EN"]}</h5>,
      FR: <h5>{sections[4].subcomponents[1].title["FR"]}</h5>,
      PT: <h5>{sections[4].subcomponents[1].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <p>
          View the genotype for each field samples from microhaplotypes.
          Estimate the MOI for each infection and enter it into the table. When
          you enter your estimate of the MOI for each infection, the results
          will display in a histogram below.
        </p>
      ),
      FR: (
        <p>
          Affichez le génotype de chaque échantillon de terrain à partir de
          microhaplotypes. Estimez le MOI pour chaque infection et saisissez-le
          dans le tableau. Lorsque vous saisissez votre estimation du MOI pour
          chaque infection, les résultats s'affichent dans un histogramme
          ci-dessous.
        </p>
      ),
      PT: (
        <p>
          Visualize o genótipo para cada amostra de campo de microhaplótipos.
          Estime o MOI para cada infeção e introduza-o na tabela. Quando
          introduzir a sua estimativa do MOI para cada infeção, os resultados
          serão apresentados num histograma abaixo.
        </p>
      ),
    },
    // instructions: (
    //   <p>
    //     View the genotype for each field samples from microhaplotypes. Estimate
    //     the MOI for each infection and enter it into the table. When you enter
    //     your estimate of the MOI for each infection, the results will display in
    //     a histogram below.
    //   </p>
    // ),
  },
  2: {
    title: {
      EN: <h5>{sections[4].subcomponents[2].title["EN"]}</h5>,
      FR: <h5>{sections[4].subcomponents[2].title["FR"]}</h5>,
      PT: <h5>{sections[4].subcomponents[2].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <div>
          <p>
            {" "}
            Calculate the average MOI from your estimates (add up your 10
            estimates of MOI and divide by 10). This has been done for you.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            {" "}
            Calculez le MOI moyen à partir de vos estimations (additionnez vos
            10 estimations de MOI et divisez par 10). Cela a été fait pour vous.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            {" "}
            Calcule o MOI médio a partir das suas estimativas (some as suas 10
            estimativas de MOI e divida por 10). Isto já foi feito por si.
          </p>
        </div>
      ),
    },
    // title: <h5>{sections[4].subcomponents[2].title}</h5>,
    // instructions: (
    //   <div>
    //     <p>
    //       {" "}
    //       Calculate the average MOI from your estimates (add up your 10
    //       estimates of MOI and divide by 10). This has been done for you.
    //     </p>
    //   </div>
    // ),
  },
};
