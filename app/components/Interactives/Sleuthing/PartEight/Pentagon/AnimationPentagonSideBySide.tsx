import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import {
  partEightCompletionAtom,
  partEightPentagonQuestionsAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import EGComparison from "./AnimationComponents/AnimationSideBySideComponents/EGComparison";
import EIComparison from "./AnimationComponents/AnimationSideBySideComponents/EIComparison";
import GIComparison from "./AnimationComponents/AnimationSideBySideComponents/GIComparison";
import FHComparison from "./AnimationComponents/AnimationSideBySideComponents/FHComparison";
import PentagonTable from "./PentagonTable/PentagonTable";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";

export default function AnimationPentagonSideBySide({
  lang = "EN",
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [questions, setQuestions] = useAtom(partEightPentagonQuestionsAtom);
  const phase = useAtomValue(phase2Atom);
  const completion = useAtomValue(partEightCompletionAtom);

  return (
    <div>
      {phase >= 24 && phase <= 27 && <EGComparison />}
      {phase === 28 && <EIComparison />}
      {phase === 29 && <GIComparison />}
      {phase === 29.5 && (
        <div>
          {/* <FormHeader text="Reassessing" /> */}
          <KnowledgeCheckQuestion
            questionIdx={4}
            classNames={{
              answersContainer: "grid mt-4 gap-2",
            }}
            callback={(questionIdx, answerIdx) => {
              if (questions[questionIdx] === answerIdx) {
                setQuestions({ ...questions, [questionIdx]: null });
              } else {
                setQuestions({ ...questions, [questionIdx]: answerIdx });
              }
            }}
            hasAnswer={questions[4] === 1}
            headerText={
              lang === "EN"
                ? "Previously you said that the transmissions very likely originated from imported cases and to keep interventions at the current levels while remaining diligent. Does that recommendation change based on this transmission network?"
                : lang === "FR"
                ? `Auparavant, vous avez dit que les transmissions provenaient très probablement de cas importés et qu'il fallait maintenir les interventions aux niveaux actuels tout en restant diligent. Cette recommandation change-t-elle en fonction de ce réseau de transmission ?`
                : `Anteriormente, você disse que as transmissões provavelmente se originaram de casos importados e para manter as intervenções nos níveis atuais, permanecendo diligente. Essa recomendação muda com base nesta rede de transmissão?`
            }
            answers={[
              {
                checked: questions[4] === 0,
                correct: false,
                index: 0,
                text:
                  lang === "EN"
                    ? "It would not have changed my recommendation."
                    : lang === "FR"
                    ? `Ça n'aurait pas changé ma recommandation.`
                    : lang === "PT"
                    ? `Não teria mudado a minha recomendação.`
                    : ``,
              },
              {
                checked: questions[4] === 1,
                correct: true,
                index: 1,
                text:
                  lang === "EN"
                    ? "I would have been more concerned about sustained local transmission and recommended intensifying interventions aimed at reducing transmission in the village."
                    : lang === "FR"
                    ? `J'aurais été plus préoccupé par la transmission locale soutenue et j'aurais recommandé d'intensifier les interventions visant à réduire la transmission dans le village.`
                    : lang === "PT"
                    ? `Eu estaria mais preocupado com a transmissão local sustentada e recomendaria intensificar as intervenções destinadas a reduzir a transmissão na aldeia.`
                    : ``,
              },
              {
                checked: questions[4] === 2,
                correct: false,
                index: 2,
                text:
                  lang === "EN"
                    ? "I would have been less concerned and recommended reducing the intensity of interventions."
                    : lang === "FR"
                    ? `Je me serais moins inquiété et j'aurais recommandé de réduire l'intensité des interventions.`
                    : lang === "PT"
                    ? `Eu estaria menos preocupado e recomendaria reduzir a intensidade das intervenções.`
                    : ``,
              },
            ]}
          />
          <QuestionResponseText
            className="mt-8"
            visible={questions[4] === 1}
            trigger={questions[4] === 1}
            complete={completion[phase] ?? false}
            text={
              lang === "EN"
                ? `If transmission could have occurred between cases G and I, then
                this would have represented at least two generations of
                transmission - E to G and then G to I - consistent with ongoing
                local transmission and no longer consistent with elimination
                status. To achieve elimination, which is your goal for this
                area, interventions would likely need to be improved by better
                targeting or general intensification.`
                : lang === "FR"
                ? "Si la transmission avait pu se produire entre les cas G et I, cela aurait représenté au moins deux générations de transmission - de E à G, puis de G à I - ce qui est compatible avec une transmission locale continue et n'est plus compatible avec le statut d'élimination. Pour parvenir à l'élimination, qui est votre objectif pour cette zone, les interventions devraient probablement être améliorées par un meilleur ciblage ou une intensification générale."
                : lang === "PT"
                ? `Se a transmissão pudesse ter ocorrido entre os casos G e I, então isso teria representado pelo menos duas gerações de transmissão - E para G e depois G para I - consistente com a transmissão local contínua e não mais consistente com o status de eliminação. Para alcançar a eliminação, que é o seu objetivo para esta área, as intervenções provavelmente precisariam ser melhoradas através de uma melhor segmentação ou intensificação geral.`
                : ""
            }
          />
          {/* {questions[4] === 1 && (
            <div className="fadeIn500 mt-8 bg-primaryBlue/10 p-4 lg:p-8">
              <p className="text-sm">
                If transmission could have occurred between cases G and I, then
                this would have represented at least two generations of
                transmission - E to G and then G to I - consistent with ongoing
                local transmission and no longer consistent with elimination
                status. To achieve elimination, which is your goal for this
                area, interventions would likely need to be improved by better
                targeting or general intensification.
              </p>
            </div>
          )} */}
        </div>
      )}
      {phase >= 30 && phase < 34 && <FHComparison />}
      {(phase === 34 || phase === 35) && <PentagonTable />}
      {phase >= 36 && (
        <div>
          {phase === 36 && (
            <div>
              <KnowledgeCheckQuestion
                answers={Array(13)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      correct: idx === 8,
                      checked: idx === questions[5],
                      index: idx,
                      text: (idx + 1).toString(),
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                classNames={{
                  answersContainer: "grid grid-cols-4 gap-4 my-8",
                }}
                hasAnswer={questions[5] === 8}
                questionIdx={5}
                headerText={
                  lang === "EN"
                    ? "How many different parasite clones are there across all the cases? Hint: Remember that the colored balls represent the genotypes of parasites present within these five cases, so different looking balls will be distinct clones with different genotypes."
                    : lang === "FR"
                    ? `Combien de clones parasitaires différents y a-t-il dans tous les cas ? Indice : N'oubliez pas que les billes colorées représentent les génotypes des parasites présents dans ces cinq cas, donc des billes d'apparences différentes seront des clones distincts avec des génotypes différents.`
                    : lang === "PT"
                    ? `Quantos clones de parasitas diferentes existem em todos os casos? Dica: Lembre-se que as bolas coloridas representam os genótipos dos parasitas presentes nestes cinco casos, então bolas de aparência diferente serão clones distintos com genótipos diferentes.`
                    : ``
                }
              />
              <QuestionResponseText
                complete={completion[phase] ?? false}
                trigger={questions[5] === 8}
                visible={questions[5] === 8}
                text={
                  lang === "EN"
                    ? `That’s right - every parasite in these cases is genetically
                  distinct, although some are related to each other. There are
                  nine in total.`
                    : lang === "FR"
                    ? `C'est exact - chaque parasite dans ces cas est génétiquement distinct, bien que certains soient liés les uns aux autres. Il y en a neuf au total.`
                    : lang === "PT"
                    ? `Certo! Cada parasita nestes casos é geneticamente distinto, embora alguns estejam relacionados entre si. Existem nove no total.`
                    : ``
                }
              />
              {/* <div
                className={
                  questions[5] === 8
                    ? "fadeIn500 bg-primaryBlue/10 p-4 lg:p-8"
                    : "invisible"
                }
              >
                <p className="text-sm">
                  That’s right - every parasite in these cases is genetically
                  distinct, although some are related to each other. There are
                  nine in total.
                </p>
              </div> */}
            </div>
          )}
          {phase === 37 && (
            <div>
              <KnowledgeCheckQuestion
                answers={Array(8)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      correct: idx === 4,
                      checked: questions[6] === idx,
                      index: idx,
                      text: (idx + 1).toString(),
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                classNames={{
                  answersContainer: "grid grid-cols-4 gap-4 my-8",
                }}
                hasAnswer={questions[6] === 4}
                questionIdx={6}
                headerText={
                  lang === "EN"
                    ? "How many parasite clones, or lineages, were initially introduced into the village by the two cases who had traveled?"
                    : lang === "FR"
                    ? `Combien de clones parasitaires, ou lignées, ont été initialement introduits dans le village par les deux cas qui avaient voyagé ?`
                    : `Quantos clones de parasitas, ou linhagens, foram inicialmente introduzidos na aldeia pelos dois casos que viajaram?`
                }
              />
              <QuestionResponseText
                complete={completion[phase] ?? false}
                trigger={questions[6] === 4}
                visible={questions[6] === 4}
                text={
                  lang === "EN"
                    ? `Great - five genetically distinct lineages were introduced
                  into the village, two by case E and three by case F. The
                  parasites in cases G, H, and I are all related to these five
                  lineages.`
                    : lang === "FR"
                    ? `Génial - cinq lignées génétiquement distinctes ont été introduites dans le village, deux par le cas E et trois par le cas F. Les parasites des cas G, H et I sont tous liés à ces cinq lignées.`
                    : lang === "PT"
                    ? `Super - cinco linhagens geneticamente distintas foram introduzidas na aldeia, duas pelo caso E e três pelo caso F. Os parasitas nos casos G, H e I estão todos relacionados com estas cinco linhagens.`
                    : ``
                }
              />
              {/* <div
                className={
                  questions[6] === 4
                    ? "fadeIn500 bg-primaryBlue/10 p-4 lg:p-8"
                    : "invisible"
                }
              >
                <p className="text-sm">
                  Great - five genetically distinct lineages were introduced
                  into the village, two by case E and three by case F. The
                  parasites in cases G, H, and I are all related to these five
                  lineages.
                </p>
              </div> */}
            </div>
          )}
          {phase === 38 && (
            <div>
              <KnowledgeCheckQuestion
                answers={[
                  {
                    correct: false,
                    checked: questions[7] === 0,
                    index: 0,
                    text:
                      lang === "EN"
                        ? "Mutation in the human cases"
                        : lang === "FR"
                        ? `Mutation chez les cas humains`
                        : lang === "PT"
                        ? `Mutação nos casos humanos`
                        : ``,
                  },
                  {
                    correct: false,
                    checked: questions[7] === 1,
                    index: 1,
                    text:
                      lang === "EN"
                        ? "Mutation in the mosquito"
                        : lang === "FR"
                        ? `Mutation chez le moustique`
                        : lang === "PT"
                        ? `Mutação no mosquito`
                        : ``,
                  },
                  {
                    correct: false,
                    checked: questions[7] === 2,
                    index: 2,
                    text:
                      lang === "EN"
                        ? "Sexual (meiotic) recombination in the human cases"
                        : lang === "FR"
                        ? `Recombinaison sexuelle (méiotique) chez les cas humains`
                        : lang === "PT"
                        ? `Recombinação sexual (meiótica) nos casos humanos`
                        : ``,
                  },
                  {
                    correct: true,
                    checked: questions[7] === 3,
                    index: 3,
                    text:
                      lang === "EN"
                        ? "Sexual (meiotic) recombination in the mosquito"
                        : lang === "FR"
                        ? `Recombinaison sexuelle (méiotique) chez le moustique`
                        : lang === "PT"
                        ? `Recombinação sexual (meiótica) no mosquito`
                        : ``,
                  },
                  {
                    correct: false,
                    checked: questions[7] === 4,
                    index: 4,
                    text:
                      lang === "EN"
                        ? "Superinfection"
                        : lang === "FR"
                        ? `Superinfection`
                        : lang === "PT"
                        ? `Superinfecção`
                        : ``,
                  },
                  {
                    correct: false,
                    checked: questions[7] === 5,
                    index: 5,
                    text:
                      lang === "EN"
                        ? "Super-duper-infection"
                        : lang === "FR"
                        ? `Super-duper-infection`
                        : `Super-duper-infecção`,
                  },
                ]}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                classNames={{
                  answersContainer: "grid grid-cols-2 gap-4 my-8",
                }}
                hasAnswer={questions[7] === 3}
                questionIdx={7}
                headerText={
                  lang === "EN"
                    ? "What process resulted in the introduced cases (G, H, and I) being infected with related but genetically distinct parasites from the imported cases (E and F)?"
                    : lang === "FR"
                    ? `Quel processus a entraîné l'infection des cas introduits (G, H et I) par des parasites apparentés mais génétiquement distincts des cas importés (E et F) ?`
                    : lang === "PT"
                    ? `Que processo resultou na infecção dos casos introduzidos (G, H e I) por parasitas relacionados, mas geneticamente distintos, dos casos importados (E e F)?`
                    : ``
                }
              />
              <QuestionResponseText
                trigger={questions[7] === 3}
                text={
                  lang === "EN"
                    ? `Good. Sexual recombination, which occurs exclusively in the
                  mosquito, allows the genetic material of multiple distinct
                  parasites to mix if the mosquito picks up more than one
                  genetically distinct gametocyte when feeding. Some level of
                  parasite mutation does occur, but generally not enough to
                  result in parasites becoming meaningfully different over one
                  or a few transmission cycles. Sexual recombination of malaria
                  parasites occurs only in the mosquito. Superinfection, while
                  indirectly facilitating recombination by producing polyclonal
                  infections, does not directly result in distinct but related
                  parasites.`
                    : lang === "FR"
                    ? `Bien. La recombinaison sexuelle, qui se produit exclusivement chez le moustique, permet au matériel génétique de plusieurs parasites distincts de se mélanger si le moustique capte plus d'un gamétocyte génétiquement distinct lors de l'alimentation. Un certain niveau de mutation parasitaire se produit, mais généralement pas suffisamment pour que les parasites deviennent significativement différents sur un ou quelques cycles de transmission. La recombinaison sexuelle des parasites du paludisme ne se produit que chez le moustique. La surinfection, bien que facilitant indirectement la recombinaison en produisant des infections polyclonales, n'entraîne pas directement des parasites distincts mais apparentés.`
                    : `Bom. A recombinação sexual, que ocorre exclusivamente no mosquito, permite que o material genético de múltiplos parasitas distintos se misture se o mosquito captar mais de um gametócito geneticamente distinto ao se alimentar. Algum nível de mutação parasitária ocorre, mas geralmente não o suficiente para que os parasitas se tornem significativamente diferentes ao longo de um ou poucos ciclos de transmissão. A recombinação sexual de parasitas da malária ocorre apenas no mosquito. A superinfecção, embora facilite indiretamente a recombinação ao produzir infecções policlonais, não resulta diretamente em parasitas distintos, mas relacionados.`
                }
                complete={completion[phase] ?? false}
                visible={questions[7] === 3}
              />
              {/* <div
                className={
                  questions[7] === 3
                    ? "fadeIn500 bg-primaryBlue/10 p-4 lg:p-8"
                    : "invisible"
                }
              >
                {" "}
                <p className="text-sm">
                  Good. Sexual recombination, which occurs exclusively in the
                  mosquito, allows the genetic material of multiple distinct
                  parasites to mix if the mosquito picks up more than one
                  genetically distinct gametocyte when feeding. Some level of
                  parasite mutation does occur, but generally not enough to
                  result in parasites becoming meaningfully different over one
                  or a few transmission cycles. Sexual recombination of malaria
                  parasites occurs only in the mosquito. Superinfection, while
                  indirectly facilitating recombination by producing polyclonal
                  infections, does not directly result in distinct but related
                  parasites.
                </p>
              </div> */}
            </div>
          )}
          {phase === 39 && (
            <div>
              <KnowledgeCheckQuestion
                answers={Array(8)
                  .fill(0)
                  .map((el, idx) => {
                    return {
                      correct: idx === 1,
                      checked: questions[8] === idx,
                      index: idx,
                      text: (idx + 1).toString(),
                    };
                  })}
                callback={(questionIdx, answerIdx) => {
                  if (questions[questionIdx] === answerIdx) {
                    setQuestions({ ...questions, [questionIdx]: null });
                  } else {
                    setQuestions({ ...questions, [questionIdx]: answerIdx });
                  }
                }}
                classNames={{
                  answersContainer: "grid grid-cols-4 gap-4 my-8",
                }}
                hasAnswer={questions[8] === 1}
                questionIdx={8}
                headerText={
                  lang === "EN"
                    ? "Here’s a challenging thought exercise for you. If the MOI of both imported cases (E and F) was one and both infections unique, and the same transmission between people occurred as in this scenario, how many different parasite genotypes would you expect to see in this village?"
                    : lang === "FR"
                    ? `Voici un exercice de réflexion stimulant pour vous. Si le MOI des deux cas importés (E et F) était de un et que les deux infections étaient uniques, et que la même transmission entre les personnes s'est produite comme dans ce scénario, combien de génotypes parasitaires différents vous attendriez-vous à voir dans ce village ?`
                    : `Aqui está um exercício de raciocínio desafiador para você. Se o MOI de ambos os casos importados (E e F) fosse um e ambas as infecções fossem únicas, e a mesma transmissão entre as pessoas ocorresse como neste cenário, quantos genótipos de parasitas diferentes você esperaria ver nesta aldeia?`
                }
              />
              <QuestionResponseText
                complete={completion[phase] ?? false}
                trigger={questions[8] === 1}
                visible={questions[8] === 1}
                text={
                  lang === "EN"
                    ? `If case E and F were only infected with one parasite each,
                  there would have been no opportunity for recombination between
                  distinct clones. In this situation, introduced cases I and G
                  would have been infected with a clone identical to the one
                  imported by case E, and case H would have been infected with a
                  clone identical to the one imported by case F. Therefore, only
                  two distinct genotypes would have circulated. It is
                  interesting to note that in this alternate scenario there
                  would have been a lot less population diversity in the
                  circulating parasites despite the exact same transmission
                  pattern. Importantly, the connections between cases would have
                  still been apparent from your genotyping, although the
                  relationship between cases E, I, and G would have been harder
                  to estimate from the genetic data alone. Fortunately, you
                  would have had data on travel and time to help as well.`
                    : lang === "FR"
                    ? `Si les cas E et F n'étaient infectés que par un seul parasite chacun, il n'y aurait eu aucune opportunité de recombinaison entre des clones distincts. Dans cette situation, les cas introduits I et G auraient été infectés par un clone identique à celui importé par le cas E, et le cas H aurait été infecté par un clone identique à celui importé par le cas F. Par conséquent, seuls deux génotypes distincts auraient circulé. Il est intéressant de noter que dans ce scénario alternatif, il y aurait eu beaucoup moins de diversité de population dans les parasites en circulation malgré le même schéma de transmission. Il est important de noter que les liens entre les cas auraient toujours été apparents à partir de votre génotypage, bien que la relation entre les cas E, I et G aurait été plus difficile à estimer à partir des seules données génétiques. Heureusement, vous auriez également eu des données sur les voyages et le temps pour vous aider.`
                    : lang === "PT"
                    ? `Se os casos E e F fossem infectados apenas por um parasita cada, não haveria oportunidade para recombinação entre clones distintos. Nesta situação, os casos introduzidos I e G teriam sido infectados com um clone idêntico ao importado pelo caso E, e o caso H teria sido infectado com um clone idêntico ao importado pelo caso F. Portanto, apenas dois genótipos distintos teriam circulado. É interessante notar que neste cenário alternativo haveria muito menos diversidade populacional nos parasitas em circulação, apesar do mesmo padrão de transmissão. É importante ressaltar que as conexões entre os casos ainda seriam aparentes a partir do seu genotipagem, embora a relação entre os casos E, I e G teria sido mais difícil de estimar apenas a partir dos dados genéticos. Felizmente, você também teria dados sobre viagens e tempo para ajudar.`
                    : ``
                }
              />
              {/* <div
                className={
                  questions[8] === 1
                    ? "fadeIn500 bg-primaryBlue/10 p-4 lg:p-8"
                    : "invisible"
                }
              >
                {" "}
                <p className="text-sm">
                  If case E and F were only infected with one parasite each,
                  there would have been no opportunity for recombination between
                  distinct clones. In this situation, introduced cases I and G
                  would have been infected with a clone identical to the one
                  imported by case E, and case H would have been infected with a
                  clone identical to the one imported by case F. Therefore, only
                  two distinct genotypes would have circulated. It is
                  interesting to note that in this alternate scenario there
                  would have been a lot less population diversity in the
                  circulating parasites despite the exact same transmission
                  pattern. Importantly, the connections between cases would have
                  still been apparent from your genotyping, although the
                  relationship between cases E, I, and G would have been harder
                  to estimate from the genetic data alone. Fortunately, you
                  would have had data on travel and time to help as well.
                </p>
              </div> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
