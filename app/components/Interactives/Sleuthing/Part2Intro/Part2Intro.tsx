import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { currentView2Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";
import { phase2Atom } from "@/data/Interactives/interactiveStore";
import { s2p0CompletionAtom } from "../../Shared/ControlPanel/InteractiveControlPanel2";
import Image from "next/image";

export default function Part2Intro({ lang }: { lang: "EN" | "FR" | "PT" }) {
  const [phase2, setPhase2] = useAtom(phase2Atom);
  const completion = useAtomValue(s2p0CompletionAtom);
  const [currentView2, setCurrentView2] = useAtom(currentView2Atom);

  return (
    <div>
      {phase2 === 0 ? (
        <InteractivePrompt
          lang={lang}
          complete={completion[0]}
          title={
            <h1>
              {lang === "EN"
                ? `Introduction`
                : lang === "FR"
                ? `Introduction`
                : lang === "PT"
                ? `Introdução`
                : `Introduction`}
            </h1>
          }
          instructions={
            <div className="flex flex-col gap-4">
              {lang === "EN" ? (
                <p>
                  Genotyping parasites from patient samples can help you
                  determine how related they are to each other. In the context
                  of a potential outbreak, estimates of identity by descent
                  (IBD) and identity by state (IBS) help you sort out how much
                  local transmission is occurring vs. how much importation from
                  other geographic areas could be driving transmission.
                </p>
              ) : lang === "FR" ? (
                <p>
                  Le génotypage des parasites à partir d'échantillons de
                  patients peut vous aider à déterminer leur degré de parenté.
                  Dans le contexte d'une épidémie potentielle, les estimations
                  de l'identité par descendance (IBD) et de l'identité par état
                  (IBS) vous aident à déterminer la part de transmission locale
                  et la part d'importation provenant d'autres zones
                  géographiques qui pourraient être à l'origine de la
                  transmission.
                </p>
              ) : lang === "PT" ? (
                <p>
                  A genotipagem de parasitas de amostras de pacientes pode
                  ajudá-lo a determinar o quão relacionados eles estão uns com
                  os outros. No contexto de um potencial surto, as estimativas
                  de identidade por descendência (IBD) e identidade por estado
                  (IBS) ajudam-no a determinar quanta transmissão local está a
                  ocorrer versus quanta importação de outras áreas geográficas
                  pode estar a impulsionar a transmissão.
                </p>
              ) : (
                <p>
                  Genotyping parasites from patient samples can help you
                  determine how related they are to each other. In the context
                  of a potential outbreak, estimates of identity by descent
                  (IBD) and identity by state (IBS) help you sort out how much
                  local transmission is occurring vs. how much importation from
                  other geographic areas could be driving transmission.
                </p>
              )}
            </div>
          }
        />
      ) : phase2 === 1 ? (
        <InteractivePrompt
          lang={lang}
          complete={completion[currentView2.phase]}
          title={
            <h1>
              {lang === "EN"
                ? `Case Study Background`
                : lang === "FR"
                ? `Contexte de l'étude de cas`
                : lang === "PT"
                ? `Antecedentes do Estudo de Caso`
                : `Case Study Background`}
            </h1>
          }
          instructions={
            lang === "EN" ? (
              <div className="flex flex-col gap-4">
                <p>
                  In this activity, you return to your role as the Head of
                  Surveillance for the National Malaria Control Program.
                </p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide1.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  Congratulations! Your persistent efforts advocating for
                  intensified vector control within your national malaria
                  program have paid off. Malaria cases are down across the
                  country, and your program has just decided to attempt
                  subnational elimination in a few provinces where transmission
                  is lowest, including in the Eliminati Province.
                </p>
                <p>
                  There were only a few cases last year in the pre-elimination
                  region and, since you are taking detailed travel history from
                  all cases as part of routine surveillance, you know that all
                  of these cases had clear travel history to areas of the
                  country with higher transmission.
                </p>
                <p>You are feeling good!</p>
                <p>Mission accomplished? Not so fast ...</p>
                <p>
                  Just then, you get a text message from Tarsis, your
                  Surveillance Officer in the Eliminati Region.
                </p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide2.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  “Hey Chief, this is Tarsis. I'm concerned about some new cases
                  up here in Eliminati Province. Please call me as soon as you
                  can!"
                </p>
                <p>
                  You drop what you were doing (mainly feeling good about
                  yourself) and call Tarsis immediately.
                </p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide3.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  Hey Chief," Tarsis begins. "I investigated 5 cases that
                  occurred last month in a village in our Province. Only 2 of
                  them report a history of travel outside the region."
                </p>
                <p>"Go on," you reply.</p>
                <p>
                  Tarsis continues, "I know that malaria cases directly stemming
                  from imported cases are known as introduced cases and can
                  occasionally occur without too much concern . . . But if the 3
                  cases without travel history represent a longer chain of
                  sustained transmission, that could threaten our program's goal
                  of elimination!"
                </p>
                <p>
                  "OK, well this is concerning but nothing to get too worried
                  about," You reply calmly.
                </p>
                <p>
                  "But, wait boss," Tarsis continues. "There's more . . . A
                  boarding school from another village in Eliminati Province
                  just reported 4 cases in students within a month after
                  returning from holidays . . . What do you think - is there an
                  outbreak at the school, or did these students all acquire
                  their infections while visiting family upcountry over the
                  holidays?"
                </p>
                <p>
                  "OK, Tarsis. We can handle this. Give me a few minutes to
                  think about how we can approach this and I'll get back to you
                  ASAP." You say as you hang up the phone.
                </p>
                <p>So what will you do next?</p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide4.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  With a sigh of relief, you remember that one of the first
                  things you instituted as lead for the subnational elimination
                  program was universal collection of dried blood spots from all
                  malaria cases occurring in Eliminati Province.
                </p>
                <p>
                  You know that you can genotype parasites from these samples
                  and determine how related they are to each other, helping you
                  sort out how much local transmission is occurring and what if
                  any new response is required.
                </p>
                <p>
                  You head to the lab to see what needs to be done next. You are
                  not a molecular biologist, but you have recently taken an
                  excellent online course on interpreting malaria genetic data
                  for surveillance, so you know a thing or two about what needs
                  to happen.
                </p>
              </div>
            ) : lang === "FR" ? (
              <div className="flex flex-col gap-4">
                <p>
                  Dans cette activité, vous reprenez votre rôle de responsable
                  de la surveillance pour le Programme national de lutte contre
                  le paludisme.
                </p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide1.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  Félicitations ! Vos efforts persistants de plaidoyer pour une
                  lutte antivectorielle intensifiée au sein de votre programme
                  national de lutte contre le paludisme ont porté leurs fruits.
                  Les cas de paludisme sont en baisse dans tout le pays, et
                  votre programme vient de décider de tenter une élimination
                  sous-nationale dans quelques provinces où la transmission est
                  la plus faible, y compris dans la province d'Eliminati.
                </p>
                <p>
                  Il n'y a eu que quelques cas l'année dernière dans la région
                  de pré-élimination et, comme vous recueillez des antécédents
                  de voyage détaillés auprès de tous les cas dans le cadre de la
                  surveillance de routine, vous savez que tous ces cas avaient
                  des antécédents de voyage clairs vers des régions du pays où
                  la transmission est plus élevée.
                </p>
                <p>Vous vous sentez bien !</p>
                <p>Mission accomplie ? Pas si vite...</p>
                <p>
                  À ce moment-là, vous recevez un SMS de Tarsis, votre agent de
                  surveillance dans la région d'Eliminati.
                </p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide2.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  "Salut Chef, c'est Tarsis. Je suis préoccupé par quelques
                  nouveaux cas ici dans la province d'Eliminati. Veuillez
                  m'appeler dès que possible !"
                </p>
                <p>
                  Vous laissez tomber ce que vous étiez en train de faire (vous
                  sentir bien dans votre peau) et appelez Tarsis immédiatement.
                </p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide3.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  "Salut Chef", commence Tarsis. "J'ai enquêté sur 5 cas
                  survenus le mois dernier dans un village de notre province.
                  Seuls 2 d'entre eux déclarent avoir voyagé en dehors de la
                  région."
                </p>
                <p>"Continuez", répondez-vous.</p>
                <p>
                  Tarsis poursuit : "Je sais que les cas de paludisme découlant
                  directement de cas importés sont connus sous le nom de cas
                  introduits et peuvent occasionnellement se produire sans trop
                  de préoccupations... Mais si les 3 cas sans antécédents de
                  voyage représentent une chaîne plus longue de transmission
                  soutenue, cela pourrait menacer l'objectif d'élimination de
                  notre programme !"
                </p>
                <p>
                  "OK, c'est inquiétant, mais il n'y a pas lieu de s'inquiéter",
                  répondez-vous calmement.
                </p>
                <p>
                  "Mais, attendez patron", poursuit Tarsis. "Il y a plus... Un
                  internat d'un autre village de la province d'Eliminati vient
                  de signaler 4 cas chez des élèves dans le mois suivant leur
                  retour de vacances... Qu'en pensez-vous - y a-t-il une
                  épidémie à l'école, ou ces élèves ont-ils tous contracté leur
                  infection lors de leur visite à leur famille dans
                  l'arrière-pays pendant les vacances ?"
                </p>
                <p>
                  "OK, Tarsis. Nous pouvons gérer cela. Laissez-moi quelques
                  minutes pour réfléchir à la façon dont nous pouvons aborder ce
                  problème et je vous recontacterai dès que possible."
                  Dites-vous en raccrochant le téléphone.
                </p>
                <p>
                  "OK, Tarsis. Nous pouvons gérer cela. Laissez-moi quelques
                  minutes pour réfléchir à la façon dont nous pouvons aborder ce
                  problème et je vous recontacterai dès que possible."
                  Dites-vous en raccrochant le téléphone.
                </p>
                <p>Alors, que ferez-vous ensuite ?</p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide4.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  Avec un soupir de soulagement, vous vous souvenez que l'une
                  des premières choses que vous avez instituées en tant que chef
                  du programme d'élimination sous-nationale était la collecte
                  universelle de taches de sang séché de tous les cas de
                  paludisme survenant dans la province d'Eliminati.
                </p>
                <p>
                  Vous savez que vous pouvez génotyper les parasites à partir de
                  ces échantillons et déterminer leur degré de parenté, ce qui
                  vous aidera à déterminer la part de transmission locale et la
                  nécessité d'une nouvelle réponse.
                </p>
                <p>
                  Vous vous dirigez vers le laboratoire pour voir ce qu'il faut
                  faire ensuite. Vous n'êtes pas biologiste moléculaire, mais
                  vous avez récemment suivi un excellent cours en ligne sur
                  l'interprétation des données génétiques du paludisme à des
                  fins de surveillance, vous savez donc une chose ou deux sur ce
                  qui doit se passer.
                </p>
              </div>
            ) : lang === "PT" ? (
              <div className="flex flex-col gap-4">
                <p>
                  Nesta atividade, você retorna ao seu papel como Chefe de
                  Vigilância do Programa Nacional de Controle da Malária.
                </p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide1.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  Parabéns! Os seus esforços persistentes na defesa do controlo
                  vetorial intensificado dentro do seu programa nacional de
                  malária deram frutos. Os casos de malária estão em baixo em
                  todo o país, e o seu programa acabou de decidir tentar a
                  eliminação subnacional em algumas províncias onde a
                  transmissão é mais baixa, incluindo na Província de Eliminati.
                </p>
                <p>
                  Houve apenas alguns casos no ano passado na região de
                  pré-eliminação e, uma vez que está a recolher o histórico de
                  viagens detalhado de todos os casos como parte da vigilância
                  de rotina, sabe que todos estes casos tinham um histórico de
                  viagens claro para áreas do país com maior transmissão.
                </p>
                <p>Está a sentir-se bem!</p>
                <p>Missão cumprida? Não tão depressa...</p>
                <p>
                  Nesse momento, recebe uma mensagem de texto de Tarsis, o seu
                  Oficial de Vigilância na Região de Eliminati.
                </p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide2.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  "Olá Chefe, é o Tarsis. Estou preocupado com alguns novos
                  casos aqui na Província de Eliminati. Por favor, ligue-me
                  assim que puder!"
                </p>
                <p>
                  Deixa cair o que estava a fazer (principalmente a sentir-se
                  bem consigo mesmo) e liga imediatamente para Tarsis.
                </p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide3.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  "Olá Chefe", começa Tarsis. "Investiguei 5 casos que ocorreram
                  no mês passado numa aldeia na nossa Província. Apenas 2 deles
                  relatam um histórico de viagem fora da região."
                </p>
                <p>"Continue"</p>
                <p>
                  Tarsisp prossegue: "Sei que os casos de malária decorrentes
                  diretamente de casos importados são conhecidos como casos
                  introduzidos e podem ocorrer ocasionalmente sem muita
                  preocupação... Mas se os 3 casos sem histórico de viagens
                  representarem uma cadeia mais longa de transmissão sustentada,
                  isso poderá ameaçar o objetivo de eliminação do nosso
                  programa!"
                </p>
                <p>
                  "OK, isto é preocupante, mas não há motivo para ficar muito
                  preocupado", responde calmamente.
                </p>
                <p>
                  "Mas, espere chefe", continua Tarsis. "Há mais... Um internato
                  de outra aldeia na Província de Eliminati acabou de relatar 4
                  casos em estudantes dentro de um mês após o regresso das
                  férias... O que pensa - há um surto na escola, ou estes
                  estudantes adquiriram todos as suas infeções enquanto
                  visitavam a família no interior durante as férias?"
                </p>
                <p>
                  "OK, Tarsis. Podemos lidar com isto. Dê-me alguns minutos para
                  pensar em como podemos abordar isto e eu volto a contactá-lo o
                  mais rapidamente possível." Diz enquanto desliga o telefone.
                </p>
                <p>Então, o que vai fazer a seguir?</p>
                <Image
                  className="dark:brightness-50"
                  alt=""
                  src={`/InteractiveAssets/Slide4.png`}
                  width={1200}
                  height={600}
                />
                <p>
                  Com um suspiro de alívio, lembra-se de que uma das primeiras
                  coisas que instituiu como líder do programa de eliminação
                  subnacional foi a recolha universal de manchas de sangue seco
                  de todos os casos de malária que ocorrem na Província de
                  Eliminati.
                </p>
                <p>
                  Sabe que pode fazer a genotipagem de parasitas destas amostras
                  e determinar o quão relacionados eles estão uns com os outros,
                  ajudando-o a determinar quanta transmissão local está a
                  ocorrer e qual a nova resposta necessária.
                </p>
                <p>
                  Dirige-se para o laboratório para ver o que precisa de ser
                  feito a seguir. Não é biólogo molecular, mas recentemente fez
                  um excelente curso online sobre a interpretação de dados
                  genéticos da malária para vigilância, por isso sabe uma coisa
                  ou duas sobre o que precisa de acontecer.
                </p>
              </div>
            ) : null
          }
        />
      ) : phase2 === 2 ? (
        <InteractivePrompt
          lang={lang}
          complete={completion[2]}
          title={
            <h1>
              {lang === "EN"
                ? `Your Goal`
                : lang === "FR"
                ? `Votre objectif`
                : lang === "PT"
                ? `O seu objetivo`
                : `Your Goal`}
            </h1>
          }
          instructions={
            lang === "EN" ? (
              <div className="flex flex-col">
                <p>
                  In this activity, your goal is to determine whether the newly
                  identified cases in the village and school settings represent
                  an outbreak of local cases requiring additional interventions,
                  or are consistent with a path towards elimination without
                  further intervention.
                </p>
              </div>
            ) : lang === "FR" ? (
              <div className="flex flex-col">
                <p>
                  Dans cette activité, votre objectif est de déterminer si les
                  cas récemment identifiés dans les villages et les écoles
                  représentent une épidémie de cas locaux nécessitant des
                  interventions supplémentaires, ou s'ils sont compatibles avec
                  une voie vers l'élimination sans intervention supplémentaire.
                </p>
              </div>
            ) : lang === "PT" ? (
              <div className="flex flex-col">
                <p>
                  Nesta atividade, o seu objetivo é determinar se os casos
                  recém-identificados nas aldeias e escolas representam um surto
                  de casos locais que requerem intervenções adicionais, ou se
                  são consistentes com um caminho para a eliminação sem
                  intervenção adicional.
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                <p>
                  In this activity, your goal is to determine whether the newly
                  identified cases in the village and school settings represent
                  an outbreak of local cases requiring additional interventions,
                  or are consistent with a path towards elimination without
                  further intervention.
                </p>
              </div>
            )
          }
        />
      ) : (
        <InteractivePrompt
          lang={lang}
          complete={completion[3]}
          title={
            <h1>
              {lang === "EN"
                ? `Instructions`
                : lang === "FR"
                ? `Instructions`
                : lang === "PT"
                ? `Instruções`
                : `Instructions`}
            </h1>
          }
          instructions={
            lang === "EN" ? (
              <div className="flex flex-col gap-0 ">
                <p className="mb-4">
                  You know from your course that you are trying to estimate the
                  actual relatedness between infections as identity by descent,
                  or IBD, since that tells you whether parasites in infections
                  are likely to be related by transmission. However, you also
                  know that you will only be able to directly observe identity
                  by state, or IBS, in your genotyping results.
                </p>
                <p className="mb-4">
                  Therefore, you will first do a series of tests on laboratory
                  controls of known composition to determine which genotyping
                  method you will use and how to interpret your results, as you
                  should in any laboratory. With this insight, you will then
                  genotype your cases, figure out what is going on in the
                  village and school, and decide on next steps.
                </p>
                <p>Speficially you will:</p>
                <ol className="mt-4 flex list-decimal flex-col gap-2 px-4">
                  <li>
                    <p>
                      Genotype laboratory clones, estimate their relatedness by
                      calculating IBS, and compare this to what you know about
                      IBD.
                    </p>
                  </li>
                  <li>
                    <p>
                      Evaluate genotypes of polyclonal positive controls created
                      from combinations of the laboratory clones, since your
                      cases may also be polyclonal. You will then compare these
                      controls using IBS and IBD.
                    </p>
                  </li>
                  <li>
                    <p>
                      Genotype your cases from the village and school, assess
                      their genetic relatedness, and lead your program to the
                      right set of next steps.
                    </p>
                  </li>
                </ol>
                <p className="mt-8">Good luck. Let's get started!</p>
              </div>
            ) : lang === "FR" ? (
              <div className="flex flex-col gap-0 ">
                <p className="mb-4">
                  Vous savez grâce à votre cours que vous essayez d'estimer la
                  parenté réelle entre les infections en termes d'identité par
                  descendance, ou IBD, car cela vous indique si les parasites
                  des infections sont susceptibles d'être liés par la
                  transmission. Cependant, vous savez également que vous ne
                  pourrez observer directement que l'identité par état, ou IBS,
                  dans vos résultats de génotypage.
                </p>
                <p className="mb-4">
                  Par conséquent, vous allez d'abord effectuer une série de
                  tests sur des contrôles de laboratoire de composition connue
                  afin de déterminer quelle méthode de génotypage vous allez
                  utiliser et comment interpréter vos résultats, comme vous
                  devriez le faire dans n'importe quel laboratoire. Grâce à ces
                  informations, vous génotyperez ensuite vos cas, déterminerez
                  ce qui se passe dans le village et l'école, et déciderez des
                  prochaines étapes.
                </p>
                <p>Plus précisément, vous allez :</p>
                <ol className="mt-4 flex list-decimal flex-col gap-2 px-4">
                  <li>
                    <p>
                      Génotyper les clones de laboratoire, estimer leur parenté
                      en calculant l'IBS, et comparer cela à ce que vous savez
                      sur l'IBD.
                    </p>
                  </li>
                  <li>
                    <p>
                      Évaluer les génotypes des contrôles positifs polyclonaux
                      créés à partir de combinaisons de clones de laboratoire,
                      puisque vos cas peuvent également être polyclonaux. Vous
                      comparerez ensuite ces contrôles en utilisant l'IBS et
                      l'IBD.
                    </p>
                  </li>
                  <li>
                    <p>
                      Génotyper vos cas du village et de l'école, évaluer leur
                      parenté génétique et orienter votre programme vers le bon
                      ensemble d'étapes suivantes.
                    </p>
                  </li>
                </ol>
                <p className="mt-8">Bonne chance. Commençons !</p>
              </div>
            ) : lang === "PT" ? (
              <div className="flex flex-col gap-0 ">
                <p className="mb-4">
                  Você sabe pelo seu curso que está a tentar estimar a relação
                  real entre infeções como identidade por descendência, ou IBD,
                  uma vez que isso lhe diz se os parasitas nas infeções são
                  propensos a estar relacionados por transmissão. No entanto,
                  também sabe que só poderá observar diretamente a identidade
                  por estado, ou IBS, nos seus resultados de genotipagem.
                </p>
                <p className="mb-4">
                  Portanto, irá primeiro fazer uma série de testes em controlos
                  de laboratório de composição conhecida para determinar qual o
                  método de genotipagem que irá utilizar e como interpretar os
                  seus resultados, como deve fazer em qualquer laboratório. Com
                  esta informação, irá então genotipar os seus casos, descobrir
                  o que se está a passar na aldeia e na escola, e decidir sobre
                  os próximos passos.
                </p>
                <p>Especificamente, irá:</p>
                <ol className="mt-4 flex list-decimal flex-col gap-2 px-4">
                  <li>
                    <p>
                      Fazer a genotipagem dos clones de laboratório, estimar a
                      sua relação de parentesco através do cálculo do IBS e
                      comparar com o que sabe sobre o IBD.
                    </p>
                  </li>
                  <li>
                    <p>
                      Avaliar os genótipos dos controlos positivos policlonais
                      criados a partir de combinações dos clones de laboratório,
                      uma vez que os seus casos também podem ser policlonais.
                      Irá então comparar estes controlos utilizando IBS e IBD.
                    </p>
                  </li>
                  <li>
                    <p>
                      Fazer o genótipo dos seus casos da aldeia e da escola,
                      avaliar a sua relação genética e conduzir o seu programa
                      para o conjunto correto de próximos passos.
                    </p>
                  </li>
                </ol>
                <p className="mt-8">Boa sorte. Vamos começar!</p>
              </div>
            ) : null
          }
        />
      )}
    </div>
  );
}
