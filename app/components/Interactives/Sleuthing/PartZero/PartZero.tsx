import { phase1Atom } from "@/data/Interactives/interactiveStore";
import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import StepOneTeaser from "./PartZeroTeasers/StepOneTeaser";

export const partZeroCompletionAtom = atomWithStorage(
  "partZeroCompletionAtom",
  {
    0: false,
    1: false,
    2: false,
  },
);

export default function PartZero({ lang }: { lang: "EN" | "FR" | "PT" }) {
  const [phase1, setPhase1] = useAtom(phase1Atom);
  const completion = useAtomValue(partZeroCompletionAtom);
  return (
    <div>
      {phase1 === 0 ? (
        <InteractivePrompt
          lang={lang}
          title={
            <h1>
              {lang === "EN"
                ? `Background`
                : lang === "FR"
                ? `Contexte`
                : `Contexto`}
            </h1>
          }
          instructions={
            lang === "EN" ? (
              <div className="flex flex-col gap-4">
                <p>
                  Estimating the multiplicity of infection (MOI) in a set of
                  patient samples can be a valuable tool for assessing the
                  effectiveness of malaria control interventions, like bed-nets,
                  indoor residual spraying or antimalarial treatments. A high
                  MOI generally indicates a higher transmission intensity in the
                  community because if people are infected more frequently there
                  is a greater change of superinfection. Therefore, effective
                  malaria control interventions should reduce the transmission
                  of the parasite, leading to a decrease in the MOI over time.
                </p>
                <p>
                  In this activity, you return to your role as the Head of
                  Surveillance of the National Malaria Control Program of
                  Kambawe.
                </p>
                <p>
                  The National Malaria Control Program of Kambawe has been
                  implementing an expensive new vector control intervention.
                  Routine surveillance data suggest it may be working. But you
                  are not convinced of the data's quality.
                </p>
                <p>
                  You have dried blood spot (DBS) samples stored from a recent
                  malaria indicator survey and a functioning molecular lab. You
                  also have historic data showing average MOI in this high
                  transmission area was 2.5 before the vector controls
                  intervention began.
                </p>
              </div>
            ) : lang === "FR" ? (
              <div className="flex flex-col gap-4">
                <p>
                  L'estimation de la multiplicité des infections (MOI) dans un
                  ensemble d'échantillons de patients peut être un outil
                  précieux pour évaluer l'efficacité des interventions de lutte
                  contre le paludisme, comme les moustiquaires, les
                  pulvérisations intradomiciliaires d'insecticide à effet
                  rémanent ou les traitements antipaludiques. Un taux
                  d'infection élevé indique généralement une intensité de
                  transmission plus élevée dans la communauté, car si les
                  personnes sont infectées plus fréquemment, le risque de
                  surinfection est plus important. Par conséquent, les
                  interventions efficaces de lutte contre le paludisme doivent
                  réduire la transmission du parasite, ce qui entraîne une
                  diminution de la MOI au fil du temps.
                </p>
                <p>
                  Dans cette activité, vous reprenez votre rôle de responsable
                  de la surveillance du Programme national de contrôle du
                  paludisme de Kambawe.
                </p>
                <p>
                  Le programme national de lutte contre le paludisme de Kambawe
                  a mis en œuvre une nouvelle intervention coûteuse de lutte
                  contre les vecteurs. Les données de surveillance de routine
                  suggèrent qu'elle est efficace. Mais vous n'êtes pas convaincu
                  de la qualité des données.
                </p>
                <p>
                  Vous disposez d'échantillons de taches de sang séché provenant
                  d'une enquête récente sur les indicateurs du paludisme et d'un
                  laboratoire moléculaire opérationnel. Vous disposez également
                  de données historiques montrant que le MOI moyen dans cette
                  zone à forte transmission était de 2,5 avant le début de
                  l'intervention de lutte antivectorielle.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p>
                  A estimativa da multiplicidade de infeção (MOI) num conjunto
                  de amostras de pacientes pode ser um instrumento valioso para
                  avaliar a eficácia das intervenções de controlo do paludismo,
                  tais como mosquiteiros, pulverização residual em recintos
                  fechados ou tratamentos antipalúdicos. Um MOI elevado indica
                  geralmente uma maior intensidade de transmissão na comunidade,
                  porque se as pessoas forem infectadas com mais frequência, há
                  uma maior probabilidade de superinfeção. Por conseguinte, as
                  intervenções eficazes de controlo da malária devem reduzir a
                  transmissão do parasita, conduzindo a uma diminuição do MOI ao
                  longo do tempo.
                </p>
                <p>
                  Nesta atividade, regressa ao seu papel de Chefe de Vigilância
                  do Programa Nacional de Controlo do Paludismo de Kambawe.
                </p>
                <p>
                  O Programa Nacional de Controlo da Malária de Kambawe tem
                  vindo a implementar uma nova e dispendiosa intervenção de
                  controlo de vectores. Os dados de vigilância de rotina sugerem
                  que pode estar a funcionar. Mas não está convencido da
                  qualidade dos dados.
                </p>{" "}
                <p>
                  Tem amostras de manchas de sangue seco (DBS) armazenadas de um
                  inquérito recente sobre indicadores da malária e um
                  laboratório molecular a funcionar. Também tem dados históricos
                  que mostram que o MOI médio nesta zona de alta transmissão era
                  de 2,5 antes do início da intervenção de controlo dos
                  vectores.
                </p>
              </div>
            )
          }
          // instructions={
          //   <div className="flex flex-col gap-4">
          //     <p>
          //       Estimating the multiplicity of infection (MOI) in a set of
          //       patient samples can be a valuable tool for assessing the
          //       effectiveness of malaria control interventions, like bed-nets,
          //       indoor residual spraying or antimalarial treatments. A high MOI
          //       generally indicates a higher transmission intensity in the
          //       community because if people are infected more frequently there
          //       is a greater change of superinfection. Therefore, effective
          //       malaria control interventions should reduce the transmission of
          //       the parasite, leading to a decrease in the MOI over time.
          //     </p>
          //     <p>
          //       In this activity, you return to your role as the Head of
          //       Surveillance of the National Malaria Control Program of Kambawe.
          //     </p>
          //     <p>
          //       The National Malaria Control Program of Kambawe has been
          //       implementing an expensive new vector control intervention.
          //       Routine surveillance data suggest it may be working. But you are
          //       not convinced of the data's quality.
          //     </p>
          //     <p>
          //       You have dried blood spot (DBS) samples stored from a recent
          //       malaria indicator survey and a functioning molecular lab. You
          //       also have historic data showing average MOI in this high
          //       transmission area was 2.5 before the vector controls
          //       intervention began.
          //     </p>
          //   </div>
          // }
          complete={completion[phase1]}
        />
      ) : phase1 === 1 ? (
        <InteractivePrompt
          lang={lang}
          title={
            <h1>
              {lang === "EN" ? `Goal` : lang === "FR" ? `Objectif` : `Objetivo`}
            </h1>
          }
          instructions={
            lang === "EN" ? (
              <div className="flex flex-col gap-4">
                <p>
                  The goal of this activity is to interpret the genotypes of a
                  set of samples where the true MOI in your population is
                  unknown. Then, you will interpret results to assess whether or
                  not the National Malaria Control Program's interventions have
                  been effective.
                </p>
              </div>
            ) : lang === "FR" ? (
              <div className="flex flex-col gap-4">
                <p>
                  L'objectif de cette activité est d'interpréter les génotypes
                  d'un ensemble d'échantillons pour lesquels le véritable MOI de
                  votre population est inconnu. Ensuite, vous interpréterez les
                  résultats pour évaluer si les interventions du Programme
                  national de lutte contre le paludisme ont été efficaces ou
                  non.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p>
                  O objetivo desta atividade é interpretar os genótipos de um
                  conjunto de amostras em que o verdadeiro MOI na sua população
                  é desconhecido. Depois, interpretará os resultados para
                  avaliar se as intervenções do Programa Nacional de Controlo do
                  Paludismo foram ou não eficazes.
                </p>
              </div>
            )
          }
          complete={completion[phase1]}
        />
      ) : (
        <InteractivePrompt
          lang={lang}
          title={
            <h1>
              {lang === "EN"
                ? `Instructions`
                : lang === "FR"
                ? `Instructions`
                : `Instruções`}
            </h1>
          }
          // instructions={
          //   <div className="flex flex-col gap-0 ">
          //     <p className="mb-8">
          //       This activity includes six steps, which are intended to reflect
          //       the process of using genetic data to estimate MOI in a molecular
          //       lab:
          //     </p>
          //     <ol className="flex list-disc flex-col gap-4 px-4">
          //       <li>
          //         <p>
          //           <span className="font-bold">Step 1:</span> Make positive
          //           control samples from laboratory clones where you know the
          //           MOI. Then genotype your positive control samples to make
          //           sure your assay is working correctly.
          //         </p>
          //         {/* <div className="mt-4">
          //           <StepOneTeaser />
          //         </div> */}
          //       </li>
          //       <li>
          //         <p>
          //           <span className="font-bold">Step 2:</span> Analyze results
          //           from your field samples using SNPs to estimate the MOI in
          //           your population.
          //         </p>
          //       </li>
          //       <li>
          //         <p>
          //           <span className="font-bold">Step 3:</span> Genotype the same
          //           positive controls at the same loci, this time analyzing
          //           groups of SNPs together as microhaplotypes.
          //         </p>
          //       </li>
          //       <li>
          //         <p>
          //           <span className="font-bold">Step 4:</span> Analyze results
          //           from your field samples using microphaplotypes to estimate
          //           the unknown MOI in your population.
          //         </p>
          //       </li>
          //       <li>
          //         <p>
          //           <span className="font-bold">Step 5:</span> Compare your
          //           estimates of MOI from SNPs to your estimates of MOI from
          //           microhaplotypes.
          //         </p>
          //       </li>
          //       <li>
          //         <p>
          //           <span className="font-bold">Step 6:</span> Interpret results
          //           and provide feedback to your program about the intervention.
          //         </p>
          //       </li>
          //     </ol>
          //   </div>
          // }
          instructions={
            lang === "EN" ? (
              <div className="flex flex-col gap-0 ">
                <p className="mb-8">
                  This activity includes six steps, which are intended to
                  reflect the process of using genetic data to estimate MOI in a
                  molecular lab:
                </p>
                <ol className="flex list-disc flex-col gap-4 px-4">
                  <li>
                    <p>
                      <span className="font-bold">Step 1:</span> Make positive
                      control samples from laboratory clones where you know the
                      MOI. Then genotype your positive control samples to make
                      sure your assay is working correctly.
                    </p>
                    {/* <div className="mt-4">
                      <StepOneTeaser />
                    </div> */}
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Step 2:</span> Analyze results
                      from your field samples using SNPs to estimate the MOI in
                      your population.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Step 3:</span> Genotype the
                      same positive controls at the same loci, this time
                      analyzing groups of SNPs together as microhaplotypes.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Step 4:</span> Analyze results
                      from your field samples using microphaplotypes to estimate
                      the unknown MOI in your population.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Step 5:</span> Compare your
                      estimates of MOI from SNPs to your estimates of MOI from
                      microhaplotypes.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Step 6:</span> Interpret
                      results and provide feedback to your program about the
                      intervention.
                    </p>
                  </li>
                </ol>
              </div>
            ) : lang === "FR" ? (
              <div className="flex flex-col gap-0 ">
                <p className="mb-8">
                  Cette activité comprend six étapes, qui visent à refl éter le
                  processus d'utilisation des données génétiques pour estimer le
                  MOI dans un laboratoire moléculaire :
                </p>
                <ol className="flex list-disc flex-col gap-4 px-4">
                  <li>
                    <p>
                      <span className="font-bold">Étape 1 :</span> Préparez des
                      échantillons de contrôle positif à partir de clones de
                      laboratoire dont vous connaissez la MOI. Ensuite,
                      génotypez vos échantillons de contrôle positif pour vous
                      assurer que votre test fonctionne correctement.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Étape 2 :</span> Analysez les
                      résultats de vos échantillons de terrain en utilisant les
                      SNP pour estimer le MOI dans votre population.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Étape 3 :</span> Génotyper les
                      mêmes contrôles positifs aux mêmes loci, en analysant
                      cette fois des groupes de SNP ensemble en tant que
                      microhaplotypes.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Étape 4 :</span> Analysez les
                      résultats de vos échantillons de terrain en utilisant les
                      microphaplotypes pour estimer le MOI inconnu dans votre
                      population.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Étape 5 :</span> Comparez vos
                      estimations de la MOI à partir des SNP à vos estimations
                      de la MOI à partir des microhaplotypes.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Étape 6 :</span> Interpréter
                      les résultats et fournir un retour d'information sur
                      l'intervention à votre programme.
                    </p>
                  </li>
                </ol>
              </div>
            ) : (
              <div className="flex flex-col gap-0 ">
                <p className="mb-8">
                  Esta atividade inclui seis passos, que pretendem refletir o
                  processo de utilização de dados genéticos para estimar o MOI
                  num laboratório molecular:
                </p>
                <ol className="flex list-disc flex-col gap-4 px-4">
                  <li>
                    <p>
                      <span className="font-bold">Etapa 1:</span> Faça amostras
                      de controlo positivo a partir de clones de laboratório
                      para os quais conhece o MOI. Em seguida, faça o genótipo
                      das suas amostras de controlo positivo para se certificar
                      de que o ensaio está a funcionar corretamente.
                    </p>
                    {/* <div className="mt-4">
                      <StepOneTeaser />
                    </div> */}
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Etapa 2:</span> Analisar os
                      resultados das suas amostras de campo utilizando SNPs para
                      estimar o MOI na sua população.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Etapa 3:</span> Genotipar os
                      mesmos controlos positivos nos mesmos loci, desta vez
                      analisando grupos de SNPs em conjunto como
                      microhaplótipos.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Etapa 4:</span> Analisar os
                      resultados das suas amostras de campo utilizando os
                      microhaplótipos para estimar o MOI desconhecido na sua
                      população.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Etapa 5:</span> Compare as
                      suas estimativas de MOI a partir de SNPs com as suas
                      estimativas de MOI a partir de microhaplótipos.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">Etapa 6:</span> Interpretar os
                      resultados e dar feedback ao seu programa sobre a
                      intervenção.
                    </p>
                  </li>
                </ol>
              </div>
            )
          }
          complete={completion[phase1]}
        />
      )}
    </div>
  );
}
