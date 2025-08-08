import { ReactElement } from "react";
import { sections } from "../2.6/pages/sections";

// export function partOnePrompts(lang: "EN" | "FR" | "PT") {
//   return {
//     0: {
//       title: <h5>{sections[1].title[lang]}</h5>,

//       instructions: (
//         <div className="flex flex-col gap-4">
//           <p>
//             {lang === "EN"
//               ? `First up, you will need to make positive control samples from SNPs
//               when you know the MOI. Then genotype your positive control samples
//               to make sure your assay is working correctly.`
//               : lang === "FR"
//               ? `Tout d'abord, vous devrez faire des échantillons de contrôle
//               positif à partir de SNP lorsque vous connaissez le MOI. Ensuite,
//               génotypez vos échantillons de contrôle positif pour vous assurer
//               que votre test fonctionne correctement.`
//               : lang === "PT"
//               ? `Primeiro, você precisará fazer amostras de controle positivo de
//               SNPs quando souber o MOI. Em seguida, genotipe suas amostras de
//               controle positivo para garantir que seu ensaio esteja funcionando
//               corretamente.`
//               : null}
//           </p>
//         </div>
//       ),

//       // instructions:
//       //   lang === "EN" ? (
//       //     <div className="flex flex-col gap-4">
//       //       <p>
//       //         First up, you will need to make positive control samples from SNPs
//       //         when you know the MOI. Then genotype your positive control samples
//       //         to make sure your assay is working correctly.
//       //       </p>
//       //       <p>Good luck!</p>
//       //     </div>
//       //   ) : lang === "FR" ? (
//       //     <div className="flex flex-col gap-4">
//       //       <p>
//       //         Tout d'abord, vous devrez faire des échantillons de contrôle
//       //         positif à partir de SNP lorsque vous connaissez le MOI. Ensuite,
//       //         génotypez vos échantillons de contrôle positif pour vous assurer
//       //         que votre test fonctionne correctement.
//       //       </p>
//       //       <p>Bonne chance!</p>
//       //     </div>
//       //   ) : lang === "PT" ? (
//       //     <div className="flex flex-col gap-4">
//       //       <p>
//       //         Primeiro, você precisará fazer amostras de controle positivo de
//       //         SNPs quando souber o MOI. Em seguida, genotipe suas amostras de
//       //         controle positivo para garantir que seu ensaio esteja funcionando
//       //         corretamente.
//       //       </p>
//       //       <p>Boa Sorte!</p>
//       //     </div>
//       //   ) : null,
//     },
//     1: {
//       title: <h5>{sections[1].subcomponents[1].title[lang]}</h5>,
//       instructions:
//         lang === "EN" ? (
//           <div>
//             <p>
//               Click each parasite icon 1-5 to make 5 laboratory clones. Each
//               laboratory clone will be assigned SNP alleles at 12 loci in the
//               genome, randomly choosing the reference allele or alternate allele
//               at each position. The reference and alternate alleles for loci
//               1-12 are shown below.
//             </p>
//           </div>
//         ) : lang === "FR" ? (
//           <div>
//             <p>
//               Cliquez sur chaque icône de parasite 1-5 pour créer 5 clones de
//               laboratoire. Chaque clone de laboratoire se verra attribuer des
//               allèles SNP à 12 loci du génome, en choisissant au hasard l'allèle
//               de référence ou l'allèle alternatif à chaque position. Les allèles
//               de référence et alternatifs pour les loci 1-12 sont indiqués
//               ci-dessous.
//             </p>
//           </div>
//         ) : lang === "PT" ? (
//           <div>
//             <p>
//               Clique em cada ícone de parasita 1-5 para fazer 5 clones de
//               laboratório. Cada clone de laboratório receberá alelos SNP em 12
//               loci no genoma, escolhendo aleatoriamente o alelo de referência ou
//               alelo alternativo em cada posição. Os alelos de referência e
//               alternativos para os loci 1-12 são mostrados abaixo.
//             </p>
//           </div>
//         ) : null,
//       // instructions: (
//       //   <div>
//       //     <p>
//       //       Click each parasite icon 1-5 to make 5 laboratory clones. Each
//       //       laboratory clone will be assigned SNP alleles at 12 loci in the
//       //       genome, randomly choosing the reference allele or alternate allele
//       //       at each position. The reference and alternate alleles for loci 1-12
//       //       are shown below.
//       //     </p>
//       //   </div>
//       // ),
//     },
//     2: {
//       title: <h5>{sections[1].subcomponents[2].title}</h5>,
//       instructions:
//         lang === "EN" ? (
//           <div>
//             <p>
//               Make six different positive controls using different combinations
//               of your laboratory clones. Click on your laboratory clones to move
//               them on or off the sample cards on the right. The number of clones
//               you use for each positive control will depend on the MOI.
//             </p>
//           </div>
//         ) : lang === "FR" ? (
//           <div>
//             <p>
//               Créez six contrôles positifs différents en utilisant différentes
//               combinaisons de vos clones de laboratoire. Cliquez sur vos clones
//               de laboratoire pour les déplacer sur ou hors des cartes
//               d'échantillons sur la droite. Le nombre de clones que vous
//               utilisez pour chaque contrôle positif dépendra du MOI.
//             </p>
//           </div>
//         ) : lang === "PT" ? (
//           <div>
//             <p>
//               Crie seis controles positivos diferentes usando diferentes
//               combinações de seus clones de laboratório. Clique em seus clones
//               de laboratório para movê-los para dentro ou para fora dos cartões
//               de amostra à direita. O número de clones que você usa para cada
//               controle positivo dependerá do MOI.
//             </p>
//           </div>
//         ) : null,

//       // instructions: (
//       //   <div>
//       //     <p>
//       //       Make six different positive controls using different combinations of
//       //       your laboratory clones. Click on your laboratory clones to move them
//       //       on or off the sample cards on the right. The number of clones you
//       //       use for each positive control will depend on the MOI.
//       //     </p>
//       //   </div>
//       // ),
//     },
//     3: {
//       title: <h5>{sections[1].subcomponents[3].title}</h5>,
//       instructions:
//         lang === "EN" ? (
//           <div>
//             <p>
//               Click the reference allele, the alternate allele or both alleles
//               to enter data into the genotype form at each of the 12 loci. Do
//               this for each of your positive controls. The alleles you enter
//               will depend on which are present at each loci &ndash; one, the
//               other, or both.
//             </p>
//           </div>
//         ) : lang === "FR" ? (
//           <div>
//             <p>
//               Cliquez sur l'allèle de référence, l'allèle alternatif ou les deux
//               allèles pour saisir les données dans le formulaire de génotype à
//               chacun des 12 loci. Faites cela pour chacun de vos contrôles
//               positifs. Les allèles que vous saisissez dépendront de ceux qui
//               sont présents à chaque loci &ndash; l'un, l'autre ou les deux.
//             </p>
//           </div>
//         ) : lang === "PT" ? (
//           <>
//             <p>
//               Clique no alelo de referência, no alelo alternativo ou em ambos os
//               alelos para inserir dados no formulário de genótipo em cada um dos
//               12 loci. Faça isso para cada um de seus controles positivos. Os
//               alelos que você inserir dependerão de quais estão presentes em
//               cada loci &ndash; um, o outro ou ambos.
//             </p>
//           </>
//         ) : null,
//       // instructions: (
//       //   <div>
//       //     <p>
//       //       Click the reference allele, the alternate allele or both alleles to
//       //       enter data into the genotype form at each of the 12 loci. Do this
//       //       for each of your positive controls. The alleles you enter will
//       //       depend on which are present at each loci &ndash; one, the other, or
//       //       both.
//       //     </p>
//       //   </div>
//       // ),
//     },
//     4: {
//       title: <h5>{sections[1].subcomponents[4].title}</h5>,
//       instructions:
//         lang === "EN" ? (
//           <div>
//             <p>Answer the following questions.</p>
//           </div>
//         ) : lang === "FR" ? (
//           <div>
//             <p>Répondez aux questions suivantes.</p>
//           </div>
//         ) : lang === "PT" ? (
//           <div>
//             <p>Responda às seguintes perguntas.</p>
//           </div>
//         ) : null,

//       // instructions: (
//       //   <div>
//       //     <p>Answer the following questions.</p>
//       //   </div>
//       // ),
//     },
//     5: {
//       title: <h5>{sections[1].subcomponents[5].title}</h5>,
//       instructions:
//         lang === "EN" ? (
//           <div>
//             <p>
//               Before you continue to Step 2, let's take a moment to think about
//               the relationship between genotypes and heterozygosity. Complete
//               the eight-question quiz below.
//             </p>
//           </div>
//         ) : lang === "FR" ? (
//           <div>
//             <p>
//               Avant de passer à l'étape 2, prenons un moment pour réfléchir à la
//               relation entre les génotypes et l'hétérozygotie. Répondez au quiz
//               de huit questions ci-dessous.
//             </p>
//           </div>
//         ) : lang === "PT" ? (
//           <div>
//             <p>
//               Antes de continuar para a Etapa 2, vamos dedicar um momento para
//               pensar sobre a relação entre genótipos e heterozigosidade. Conclua
//               o questionário de oito perguntas abaixo.
//             </p>
//           </div>
//         ) : null,

//       // instructions: (
//       //   <div>
//       //     <p>
//       //       Before you continue to Step 2, let's take a moment to think about
//       //       the relationship between genotypes and heterozygosity. Complete the
//       //       eight-question quiz below.
//       //     </p>
//       //   </div>
//     },
//     // 6: {
//     //   title: <h5>1.1 Create laboratory clones</h5>,
//     //   instructions:
//     //     lang === "EN" ? (
//     //       <div>
//     //         <p>
//     //           Click each parasite icon 1-5 to make 5 laboratory clones. Each
//     //           laboratory clone will be assigned SNP alleles at 12 loci in the
//     //           genome, randomly choosing the reference allele or alternate allele
//     //           at each position. The reference and alternate alleles for loci
//     //           1-12 are shown below.
//     //         </p>
//     //       </div>
//     //     ) : lang === "FR" ? (
//     //       <div>
//     //         <p>
//     //           Cliquez sur chaque icône de parasite 1-5 pour créer 5 clones de
//     //           laboratoire. Chaque clone de laboratoire se verra attribuer des
//     //           allèles SNP à 12 loci du génome, en choisissant au hasard l'allèle
//     //           de référence ou l'allèle alternatif à chaque position. Les allèles
//     //           de référence et alternatifs pour les loci 1-12 sont indiqués
//     //           ci-dessous.
//     //         </p>
//     //       </div>
//     //     ) : lang === "PT" ? (
//     //       <div>
//     //         <p>
//     //           Clique em cada ícone de parasita 1-5 para fazer 5 clones de
//     //           laboratório. Cada clone de laboratório receberá alelos SNP em 12
//     //           loci no genoma, escolhendo aleatoriamente o alelo de referência ou
//     //           alelo alternativo em cada posição. Os alelos de referência e
//     //           alternativos para os loci 1-12 são mostrados abaixo.
//     //         </p>
//     //       </div>
//     //     ) : null,

//     //   // instructions: (
//     //   //   <div>
//     //   //     <p>
//     //   //       Click each parasite icon 1-5 to make 5 laboratory clones. Each
//     //   //       laboratory clone will be assigned SNP alleles at 12 loci in the
//     //   //       genome, randomly choosing the reference allele or alternate allele
//     //   //       at each position. The reference and alternate alleles for loci 1-12
//     //   //       are shown below.
//     //   //     </p>
//     //   //   </div>
//     //   // ),
//     // },
//     // 7: {
//     //   title: <h5>1.1 Make laboratory clones with SNPs</h5>,
//     //   instructions: (
//     //     <div>
//     //       <p>
//     //         Run the simulation by clicking the empty rows in the table to make 5
//     //         laboratory clones. Each laboratory clone is a random sequence of 12
//     //         DNA base letters selected from the reference allele or alternate
//     //         allele at each position.
//     //       </p>
//     //     </div>
//     //   ),
//     // },
//   };
// }

// export const partOnePrompts: {
//   [key: number]: {
//     title: ReactElement;
//     instructions: ReactElement;
//   };
// } = {
//   0: {
//     title: <h5>{sections[1].title}</h5>,
//     instructions: (
//       <div className="flex flex-col gap-4">
//         <p>
//           First up, you will need to make positive control samples from SNPs
//           when you know the MOI. Then genotype your positive control samples to
//           make sure your assay is working correctly.
//         </p>
//         <p>Good luck!</p>
//       </div>
//     ),
//   },
//   1: {
//     title: <h5>{sections[1].subcomponents[1].title}</h5>,
//     instructions: (
//       <div>
//         <p>
//           Click each parasite icon 1-5 to make 5 laboratory clones. Each
//           laboratory clone will be assigned SNP alleles at 12 loci in the
//           genome, randomly choosing the reference allele or alternate allele at
//           each position. The reference and alternate alleles for loci 1-12 are
//           shown below.
//         </p>
//       </div>
//     ),
//   },
//   2: {
//     title: <h5>{sections[1].subcomponents[2].title}</h5>,
//     instructions: (
//       <div>
//         <p>
//           Make six different positive controls using different combinations of
//           your laboratory clones. Click on your laboratory clones to move them
//           on or off the sample cards on the right. The number of clones you use
//           for each positive control will depend on the MOI.
//         </p>
//       </div>
//     ),
//   },
//   3: {
//     title: <h5>{sections[1].subcomponents[3].title}</h5>,
//     instructions: (
//       <div>
//         <p>
//           Click the reference allele, the alternate allele or both alleles to
//           enter data into the genotype form at each of the 12 loci. Do this for
//           each of your positive controls. The alleles you enter will depend on
//           which are present at each loci &ndash; one, the other, or both.
//         </p>
//       </div>
//     ),
//   },
//   4: {
//     title: <h5>{sections[1].subcomponents[4].title}</h5>,
//     instructions: (
//       <div>
//         <p>Answer the following questions.</p>
//       </div>
//     ),
//   },
//   5: {
//     title: <h5>{sections[1].subcomponents[5].title}</h5>,
//     instructions: (
//       <div>
//         <p>
//           Before you continue to Step 2, let's take a moment to think about the
//           relationship between genotypes and heterozygosity. Complete the
//           eight-question quiz below.
//         </p>
//       </div>
//     ),
//   },
//   6: {
//     title: <h5>1.1 Create laboratory clones</h5>,
//     instructions: (
//       <div>
//         <p>
//           Click each parasite icon 1-5 to make 5 laboratory clones. Each
//           laboratory clone will be assigned SNP alleles at 12 loci in the
//           genome, randomly choosing the reference allele or alternate allele at
//           each position. The reference and alternate alleles for loci 1-12 are
//           shown below.
//         </p>
//       </div>
//     ),
//   },
//   7: {
//     title: <h5>1.1 Make laboratory clones with SNPs</h5>,
//     instructions: (
//       <div>
//         <p>
//           Run the simulation by clicking the empty rows in the table to make 5
//           laboratory clones. Each laboratory clone is a random sequence of 12
//           DNA base letters selected from the reference allele or alternate
//           allele at each position.
//         </p>
//       </div>
//     ),
//   },
// };

export const partOnePrompts: {
  [key: number]: {
    title: ReactElement;
    instructions: ReactElement;
  };
} = {
  0: {
    title: {
      EN: <h5>{sections[1].title["EN"]}</h5>,
      FR: <h5>{sections[1].title["FR"]}</h5>,
      PT: <h5>{sections[1].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <div className="flex flex-col gap-4">
          <p>
            First up, you will need to make positive control samples from SNPs
            when you know the MOI. Then genotype your positive control samples
            to make sure your assay is working correctly.
          </p>
        </div>
      ),
      FR: (
        <div className="flex flex-col gap-4">
          <p>
            Tout d'abord, vous devrez faire des échantillons de contrôle positif
            à partir de SNP lorsque vous connaissez le MOI. Ensuite, génotypez
            vos échantillons de contrôle positif pour vous assurer que votre
            test fonctionne correctement.
          </p>
        </div>
      ),
      PT: (
        <div className="flex flex-col gap-4">
          <p>
            Em primeiro lugar, terá de fazer amostras de controlo positivo a
            partir de SNPs quando souber o MOI. Em seguida, faça o genótipo das
            suas amostras de controlo positivo para se certificar de que o seu
            ensaio está a funcionar corretamente.
          </p>
        </div>
      ),
    },

    // instructions: (
    //   <div className="flex flex-col gap-4">
    //     <p>
    //       First up, you will need to make positive control samples from SNPs
    //       when you know the MOI. Then genotype your positive control samples to
    //       make sure your assay is working correctly.
    //     </p>
    //     <p>Good luck!</p>
    //   </div>
    // ),
  },
  1: {
    title: {
      EN: <h5>{sections[1].subcomponents[1].title["EN"]}</h5>,
      FR: <h5>{sections[1].subcomponents[1].title["FR"]}</h5>,
      PT: <h5>{sections[1].subcomponents[1].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <div>
          <p>
            Click each parasite icon 1-5 to make 5 laboratory clones. Each
            laboratory clone will be assigned SNP alleles at 12 loci in the
            genome, randomly choosing the reference allele or alternate allele
            at each position. The reference and alternate alleles for loci 1-12
            are shown below.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Cliquez sur chaque icône de parasite 1-5 pour créer 5 clones de
            laboratoire. Chaque clone de laboratoire se verra attribuer des
            allèles SNP à 12 loci du génome, en choisissant au hasard l'allèle
            de référence ou l'allèle alternatif à chaque position. Les allèles
            de référence et alternatifs pour les loci 1-12 sont indiqués
            ci-dessous.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Clique em cada ícone de parasita 1-5 para criar 5 clones de
            laboratório. A cada clone de laboratório serão atribuídos alelos SNP
            em 12 loci no genoma, escolhendo aleatoriamente o alelo de
            referência ou o alelo alternativo em cada posição. Os alelos de
            referência e alternativos para os loci 1-12 são mostrados abaixo.
          </p>
        </div>
      ),
    },

    // instructions: (
    //   <div>
    //     <p>
    //       Click each parasite icon 1-5 to make 5 laboratory clones. Each
    //       laboratory clone will be assigned SNP alleles at 12 loci in the
    //       genome, randomly choosing the reference allele or alternate allele at
    //       each position. The reference and alternate alleles for loci 1-12 are
    //       shown below.
    //     </p>
    //   </div>
    // ),
  },
  2: {
    title: {
      EN: <h5>{sections[1].subcomponents[2].title["EN"]}</h5>,
      FR: <h5>{sections[1].subcomponents[2].title["FR"]}</h5>,
      PT: <h5>{sections[1].subcomponents[2].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <div>
          <p>
            Make six different positive controls using different combinations of
            your laboratory clones. Click on your laboratory clones to move them
            on or off the sample cards on the right. The number of clones you
            use for each positive control will depend on the MOI.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Créez six contrôles positifs différents en utilisant différentes
            combinaisons de vos clones de laboratoire. Cliquez sur vos clones de
            laboratoire pour les déplacer sur les cartes d'échantillons à
            droite. Le nombre de clones que vous utilisez pour chaque contrôle
            positif dépend de la MOI.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Faça seis controlos positivos diferentes utilizando combinações
            diferentes dos seus clones de laboratório. Clique nos seus clones de
            laboratório para os mover para dentro ou para fora dos cartões de
            amostra à direita. O número de clones que utilizar para cada
            controlo positivo dependerá do MOI.
          </p>
        </div>
      ),
    },

    // instructions: (
    //   <div>
    //     <p>
    //       Make six different positive controls using different combinations of
    //       your laboratory clones. Click on your laboratory clones to move them
    //       on or off the sample cards on the right. The number of clones you use
    //       for each positive control will depend on the MOI.
    //     </p>
    //   </div>
    // ),
  },
  3: {
    title: {
      EN: <h5>{sections[1].subcomponents[3].title["EN"]}</h5>,
      FR: <h5>{sections[1].subcomponents[3].title["FR"]}</h5>,
      PT: <h5>{sections[1].subcomponents[3].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <div>
          <p>
            Click the reference allele, the alternate allele or both alleles to
            enter data into the genotype form at each of the 12 loci. Do this
            for each of your positive controls. The alleles you enter will
            depend on which are present at each loci &ndash; one, the other, or
            both.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Cliquez sur l'allèle de référence, l'allèle alternatif ou les deux
            allèles pour saisir les données dans le formulaire de génotype à
            chacun des 12 loci. Faites cela pour chacun de vos contrôles
            positifs. Les allèles que vous saisissez dépendront de ceux qui sont
            présents à chaque loci &ndash; l'un, l'autre ou les deux.
          </p>
        </div>
      ),
      PT: (
        <>
          <p>
            Clique no alelo de referência, no alelo alternativo ou em ambos os
            alelos para introduzir dados no formulário de genótipo em cada um
            dos 12 loci. Faça isto para cada um dos seus controlos positivos. Os
            alelos introduzidos dependem de quais estão presentes em cada loci -
            um, o outro ou ambos.
          </p>
        </>
      ),
    },

    // instructions: (
    //   <div>
    //     <p>
    //       Click the reference allele, the alternate allele or both alleles to
    //       enter data into the genotype form at each of the 12 loci. Do this for
    //       each of your positive controls. The alleles you enter will depend on
    //       which are present at each loci &ndash; one, the other, or both.
    //     </p>
    //   </div>
    // ),
  },
  4: {
    title: {
      EN: <h5>{sections[1].subcomponents[4].title["EN"]}</h5>,
      FR: <h5>{sections[1].subcomponents[4].title["FR"]}</h5>,
      PT: <h5>{sections[1].subcomponents[4].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <div>
          <p>Answer the following questions.</p>
        </div>
      ),
      FR: (
        <div>
          <p>Répondez aux questions suivantes.</p>
        </div>
      ),
      PT: (
        <div>
          <p>Responda às seguintes perguntas.</p>
        </div>
      ),
    },

    // instructions: (
    //   <div>
    //     <p>Answer the following questions.</p>
    //   </div>
    // ),
  },
  5: {
    title: {
      EN: <h5>{sections[1].subcomponents[5].title["EN"]}</h5>,
      FR: <h5>{sections[1].subcomponents[5].title["FR"]}</h5>,
      PT: <h5>{sections[1].subcomponents[5].title["PT"]}</h5>,
    },
    instructions: {
      EN: (
        <div>
          <p>
            Before you continue to Step 2, let's take a moment to think about
            the relationship between genotypes and heterozygosity. Complete the
            eight-question quiz below.
          </p>
        </div>
      ),
      FR: (
        <div>
          <p>
            Avant de passer à l'étape 2, prenons le temps de réfléchir à la
            relation entre les génotypes et l'hétérozygotie. Répondez aux huit
            questions ci-dessous.
          </p>
        </div>
      ),
      PT: (
        <div>
          <p>
            Antes de prosseguir para o etapa 2, vamos parar um momento para
            pensar na relação entre genótipos e heterozigotia. Complete o
            questionário de oito perguntas abaixo.
          </p>
        </div>
      ),
    },

    // instructions: (
    //   <div>
    //     <p>
    //       Before you continue to Step 2, let's take a moment to think about the
    //       relationship between genotypes and heterozygosity. Complete the
    //       eight-question quiz below.
    //     </p>
    //   </div>
    // ),
  },
  // 6: {
  //   title: <h5>1.1 Create laboratory clones</h5>,
  //   instructions: (
  //     <div>
  //       <p>
  //         Click each parasite icon 1-5 to make 5 laboratory clones. Each
  //         laboratory clone will be assigned SNP alleles at 12 loci in the
  //         genome, randomly choosing the reference allele or alternate allele at
  //         each position. The reference and alternate alleles for loci 1-12 are
  //         shown below.
  //       </p>
  //     </div>
  //   ),
  // },
  // 7: {
  //   title: <h5>1.1 Make laboratory clones with SNPs</h5>,
  //   instructions: (
  //     <div>
  //       <p>
  //         Run the simulation by clicking the empty rows in the table to make 5
  //         laboratory clones. Each laboratory clone is a random sequence of 12
  //         DNA base letters selected from the reference allele or alternate
  //         allele at each position.
  //       </p>
  //     </div>
  //   ),
  // },
};
