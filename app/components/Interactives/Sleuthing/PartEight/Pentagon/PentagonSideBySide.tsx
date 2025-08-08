import { useAtom, useAtomValue } from "jotai";
import CompareGenotypes from "../Genotypes/CompareGenotypes";
import {
  partEightCompletionAtom,
  partEightPentagonQuestionsAtom,
  partEightPentagonSelectedEdgesAtom,
  phase2Atom,
} from "@/data/Interactives/interactiveStore";
import { Edge } from "../Pentagon";
import { useMemo } from "react";
import PentagonCorrections from "./PentagonCorrections";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { PentagonId } from "../Pentagon3";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import { atomWithStorage } from "jotai/utils";
import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";

export const additionalInfoClickedAtom = atomWithStorage(
  "additionalInfoClickedAtom",
  false,
);

export const p8addedQuestion2Atom = atomWithStorage<boolean | number>(
  "p8addedQuestion2Atom",
  false,
);

export default function PentagonSideBySide({
  lang = "EN",
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const phase = useAtomValue(phase2Atom);
  const selectedEdges = useAtomValue(partEightPentagonSelectedEdgesAtom);
  const [questions, setQuestions] = useAtom(partEightPentagonQuestionsAtom);
  const completion = useAtomValue(partEightCompletionAtom);
  const [buttonClicked, setButtonClicked] = useAtom(additionalInfoClickedAtom);
  const [p8addedQuestion2, setP8AddedQuestion2] = useAtom(p8addedQuestion2Atom);

  const activeEdge = useMemo(() => {
    let k: Edge;
    for (k in selectedEdges) {
      if (selectedEdges[k].selected) {
        return k;
      }
    }
  }, [selectedEdges]);

  // return <InteractivePrimaryLayout
  // rightHeader={phase === 20 ? 'Questions' : ''}
  // leftHeader={phase === 11 ? `Questions` : (phase > 11 && phase !== 13 && phase !== 14 && phase < 18) ? 'Genotype Matches' : ''}
  // leftContent={
  //   (phase > 11 && phase !== 13 && phase !== 14 && phase < 18) ? <div className="mb-auto ">
  //   <div className="">
  //     <CompareGenotypes
  //       firstPersonId={
  //         phase === 12 && selectedEdges.EF.visited
  //           ? "E"
  //           : activeEdge
  //           ? (activeEdge[0] as PentagonId)
  //           : null
  //       }
  //       secondPersonId={
  //         phase === 12 && selectedEdges.EF.visited
  //           ? "F"
  //           : activeEdge
  //           ? (activeEdge[1] as PentagonId)
  //           : null
  //       }
  //     />
  //   </div>
  // </div> : phase === 12 ? <></> : ''
  // }
  // />

  if (phase > 11 && phase !== 13 && phase !== 14 && phase < 18) {
    return (
      <div className="mb-auto ">
        <div className="">
          <CompareGenotypes
            firstPersonId={
              phase === 12 && selectedEdges.EF.visited
                ? "E"
                : activeEdge
                ? (activeEdge[0] as PentagonId)
                : null
            }
            secondPersonId={
              phase === 12 && selectedEdges.EF.visited
                ? "F"
                : activeEdge
                ? (activeEdge[1] as PentagonId)
                : null
            }
          />
        </div>
        <QuestionResponseText
          className="mt-8"
          complete={completion[phase]}
          trigger={phase === 12 && selectedEdges.EF.visited}
          visible={phase === 12 && selectedEdges.EF.visited}
          text={
            lang === "EN"
              ? `If the two people with travel history traveled together, for
         example if they were part of the same household, then it's
         possible that their infections might be related. In this case, we
         know that they report travel to different geographic areas with
         high transmission and likely acquired their infections there.
         Since there is generally a lot of parasite genetic diversity in
         areas of high transmission, and they're coming from different
         regions, we would not expect their parasites to be related by
         ancestry. This is exactly what we find. Since the MOI of these
         cases are 2 and 3, we'd expect to see some matches by chance;
         what we observe - 4 of 12 loci with a match, or IBS of 0.33
         - is within the range of what we'd expect with
         unrelated infections.`
              : lang === "FR"
              ? `Si les deux personnes ayant des antécédents de voyage ont voyagé ensemble, par exemple si elles faisaient partie du même foyer, il est possible que leurs infections soient liées. Dans ce cas, nous savons qu'elles ont déclaré avoir voyagé dans différentes zones géographiques à forte transmission et qu'elles y ont probablement contracté leurs infections. Étant donné qu'il existe généralement une grande diversité génétique parasitaire dans les zones à forte transmission, et qu'elles proviennent de régions différentes, nous ne nous attendrions pas à ce que leurs parasites soient liés par ascendance. C'est exactement ce que nous trouvons. Étant donné que le MOI de ces cas est de 2 et 3, nous nous attendrions à voir des correspondances par hasard ; ce que nous observons - 4 loci sur 12 avec une correspondance, ou un IBS de 0,33 - est dans la fourchette de ce à quoi nous nous attendrions avec des infections non apparentées.`
              : `Se as duas pessoas com histórico de viagem viajaram juntas, por exemplo, se faziam parte do mesmo agregado familiar, é possível que as suas infeções estivessem relacionadas. Neste caso, sabemos que elas relatam ter viajado para diferentes áreas geográficas com alta transmissão e provavelmente adquiriram as suas infeções lá. Uma vez que existe geralmente muita diversidade genética parasitária em áreas de alta transmissão, e elas vêm de regiões diferentes, não esperaríamos que os seus parasitas estivessem relacionados por ascendência. É exatamente isso que encontramos. Uma vez que o MOI destes casos é de 2 e 3, esperaríamos ver algumas correspondências por acaso; o que observamos - 4 de 12 loci com uma correspondência, ou IBS de 0,33 - está dentro do que esperaríamos com infeções não relacionadas.`
          }
        />
      </div>
    );
  } else if (phase === 12) {
    return (
      <QuestionResponseText
        className="mt-8"
        complete={completion[phase]}
        trigger={selectedEdges.EF.visited}
        visible={selectedEdges.EF.visited}
        text="If the two people with travel history traveled together, for
         example if they were part of the same household, then it's
         possible that their infections might be related. In this case, we
         know that they report travel to different geographic areas with
         high transmission and likely acquired their infections there.
         Since there is generally a lot of parasite genetic diversity in
         areas of high transmission, and they're coming from different
         regions, we would not expect their parasites to be related by
         ancestry. This is exactly what we find. Since the MOI of these
         cases are 2 and 3, we'd expect to see some matches by chance;
         what we observe - 4 of 12 loci with a match, or IBS of 0.33
         - is within the range of what we'd expect with
         unrelated infections."
      />
    );
  } else if (phase === 13 || phase === 14) {
    return (
      <div>
        {/* <FormHeader text="Questions" /> */}

        <div className={`${buttonClicked ? "hidden" : ""} my-8 flex`}>
          <button
            onClick={() => {
              setButtonClicked(true);
            }}
            className={`${
              buttonClicked ? "hidden" : ""
            } m-auto bg-interactiveBlue px-6 py-3 text-white shadow-sm shadow-black`}
          >
            <span className="block translate-y-0.5">
              {lang === "EN"
                ? `Additional Info`
                : lang === "FR"
                ? `Info. Adicional`
                : lang === "PT"
                ? `Informações Adicionais`
                : ``}
            </span>
          </button>
        </div>
        <QuestionResponseText
          // complete={completion[phase] ?? false}
          // trigger={phase === 14}
          visible={buttonClicked}
          text={
            lang === "EN"
              ? `There may be several types of information that you are
          interested in, but date of the cases is an important one. Your
          team shares a clean, well curated epidemiologic database with
          you with data for all five cases. It turns out that cases E and
          F were both detected within a week of each other, and that cases
          G, H, and I all presented with malaria between two and six weeks
          after.`
              : lang === "FR"
              ? `Il peut y avoir plusieurs types d'informations qui vous intéressent, mais la date des cas est une information importante. Votre équipe partage avec vous une base de données épidémiologiques propre et bien organisée, contenant des données pour les cinq cas. Il s'avère que les cas E et F ont tous deux été détectés à une semaine d'intervalle, et que les cas G, H et I ont tous présenté le paludisme entre deux et six semaines plus tard.`
              : lang === "PT"
              ? `Pode haver vários tipos de informação que lhe interessam, mas a data dos casos é uma delas. A sua equipa partilha consigo uma base de dados epidemiológica limpa e bem organizada com dados para todos os cinco casos. Acontece que os casos E e F foram ambos detetados com uma semana de diferença, e que os casos G, H e I apresentaram todos malária entre duas e seis semanas depois.`
              : ``
          }
        />
        <KnowledgeCheckQuestion
          questionIdx={0}
          classNames={{
            container: `mt-8 ${
              completion[phase]
                ? ""
                : buttonClicked
                ? "fadeIn500 [animationDelay:1000ms]"
                : "invisible"
            }`,
            answersContainer: "grid gap-4 mt-4",
          }}
          answers={[
            {
              text:
                lang === "EN"
                  ? "Cases E and F happened so close to each other in time that they are likely related to each other even though they both travelled to different places and their infections are not closely related genetically."
                  : lang === "FR"
                  ? `Cas E et F se sont produits si près l'un de l'autre dans le temps qu'ils sont probablement liés l'un à l'autre, même s'ils ont tous deux voyagé dans des endroits différents et que leurs infections ne sont pas génétiquement étroitement liées.`
                  : lang === "PT"
                  ? `Os casos E e F aconteceram tão próximos um do outro no tempo que provavelmente estão relacionados entre si, embora ambos tenham viajado para lugares diferentes e as suas infeções não estejam geneticamente muito relacionadas.`
                  : ``,
              checked: p8addedQuestion2 === 0,
              correct: false,
              index: 0,
            },
            {
              text:
                lang === "EN"
                  ? "Cases G, H, and I (who did not travel) cannot be related to cases E and F since they happened so much later."
                  : lang === "FR"
                  ? `Les cas G, H et I (qui n'ont pas voyagé) ne peuvent pas être liés aux cas E et F puisqu'ils se sont produits beaucoup plus tard.`
                  : `Casos G, H e I (que não viajaram) não podem estar relacionados com os casos E e F, uma vez que ocorreram muito mais tarde.`,

              checked: p8addedQuestion2 === 1,
              correct: false,
              index: 1,
            },
            {
              text:
                lang === "EN"
                  ? "Cases G, H, and I (who did not travel) could be related to the imported cases, since it can take several weeks for transmission to occur from one person to another and then cause symptomatic malaria."
                  : lang === "FR"
                  ? `Les cas G, H et I (qui n'ont pas voyagé) pourraient être liés aux cas importés, car il peut falloir plusieurs semaines pour que la transmission se produise d'une personne à l'autre et provoque ensuite le paludisme symptomatique.`
                  : lang === "PT"
                  ? `Casos G, H e I (que não viajaram) podem estar relacionados com os casos importados, uma vez que pode demorar várias semanas para que a transmissão ocorra de uma pessoa para outra e depois cause malária sintomática.`
                  : ``,
              checked: p8addedQuestion2 === 2,
              correct: true,
              index: 2,
            },
          ]}
          callback={(questionIdx, answerIdx) => {
            if (p8addedQuestion2 === answerIdx) {
              setP8AddedQuestion2(false);
            } else {
              setP8AddedQuestion2(answerIdx);
            }
          }}
          hasAnswer={p8addedQuestion2 === 2}
          headerText={
            lang === "EN"
              ? "How do you interpret these additional epidemiologic data on the timing of cases?"
              : lang === "FR"
              ? `Comment interprétez-vous ces données épidémiologiques supplémentaires sur le moment des cas ?`
              : lang === "PT"
              ? `Como interpreta estes dados epidemiológicos adicionais sobre o momento dos casos?`
              : ``
          }
        />
        {/* {phase === 14 && (
      <div className="fadeIn500 bg-primaryBlue/20 p-4 text-sm lg:p-8">
        <p>
          There may be several types of information that you are
          interested in, but date of the cases is an important one. Your
          team shares a clean, well curated epidemiologic database with
          you with data for all five cases. It turns out that cases E and
          F were both detected within a week of each other, and that cases
          G, H, and I all presented with malaria between two and six weeks
          after.
        </p>
      </div>
    )} */}
      </div>
    );
  } else if (phase >= 18 && phase < 20) {
    return <PentagonCorrections lang={lang} />;
  } else if (phase === 20) {
    return (
      <div>
        <KnowledgeCheckQuestion
          classNames={{
            container: "fadeIn500",
            answersContainer: "grid gap-4 mt-4",
          }}
          answers={[
            {
              checked: questions[1][1],
              correct: true,
              index: 0,
              text:
                lang === "EN"
                  ? "Imported cases"
                  : lang === "FR"
                  ? `Cas importés`
                  : lang === "PT"
                  ? `Casos importados`
                  : ``,
            },
            {
              checked: questions[1][2],
              correct: true,
              index: 1,
              text:
                lang === "EN"
                  ? "Introduced cases"
                  : lang === "FR"
                  ? `Cas introduits`
                  : lang === "PT"
                  ? `Casos introduzidos`
                  : ``,
            },
            {
              checked: questions[1][3],
              correct: false,
              index: 2,
              text:
                lang === "EN"
                  ? "Locally transmitted cases"
                  : lang === "FR"
                  ? `Transmission locale`
                  : lang === "PT"
                  ? `Casos de transmissão local`
                  : ``,
            },
          ]}
          callback={(questionIdx, answerIdx) => {
            setQuestions({
              ...questions,
              [questionIdx]: {
                ...questions[1],
                [answerIdx + 1]: !questions[1][answerIdx + 1],
              },
            });
          }}
          hasAnswer={questions[1][1] && questions[1][2] && !questions[1][3]}
          headerText={
            lang === "EN"
              ? "Based on your evaluation, what if any types of cases do you think are present in the village? (Choose all that apply)"
              : `Qual tipos de casos você acha que estão presentes na aldeia? (Escolha todas as opções aplicáveis)`
          }
          questionIdx={1}
        />
        <QuestionResponseText
          className="my-8"
          trigger={questions[1][1] && questions[1][2] && !questions[1][3]}
          complete={completion[phase] ?? false}
          visible={questions[1][1] && questions[1][2] && !questions[1][3]}
          text={
            lang === "EN"
              ? `Correct! Cases E and F are very likely imported cases, based on
              the fact that there have not been cases reported in this village
              before those two, and their recent travel history to high
              transmission areas. Cases I and G are likely to be introduced
              cases stemming from Case E, and Case H is likely an introduced
              case from Case F.`
              : lang === "FR"
              ? `Correct! Les cas E et F sont très probablement des cas importés, étant donné qu'aucun cas n'a été signalé dans ce village avant ces deux-là, et leur récent historique de voyage dans des zones à forte transmission. Les cas I et G sont susceptibles d'être des cas introduits provenant du cas E, et le cas H est probablement un cas introduit provenant du cas F.`
              : lang === "PT"
              ? `Correto! Os casos E e F são muito provavelmente casos importados, com base no facto de não terem sido notificados casos nesta aldeia antes desses dois, e no seu historial de viagens recentes para áreas de alta transmissão. Os casos I e G são provavelmente casos introduzidos decorrentes do Caso E, e o Caso H é provavelmente um caso introduzido do Caso F.`
              : ``
          }
        />
      </div>
    );
  } else if (phase === 21) {
    return (
      <KnowledgeCheckQuestion
        answers={[
          {
            checked: questions[2] === 0,
            correct: false,
            index: 0,
            text:
              lang === "EN"
                ? "You have definitively proven that there is absolutely no malaria transmission occurring in the village."
                : lang === "FR"
                ? `Vous avez définitivement prouvé qu'il n'y a absolument aucune transmission du paludisme dans le village.`
                : lang === "PT"
                ? `Você provou definitivamente que não há absolutamente nenhuma transmissão de malária ocorrendo na aldeia.`
                : ``,
          },
          {
            checked: questions[2] === 1,
            correct: false,
            index: 1,
            text:
              lang === "EN"
                ? "You can’t really say one way or the other whether malaria transmission is occurring in the village, so you choose to say the results were not clear."
                : lang === "FR"
                ? `Vous ne pouvez pas vraiment dire d'une manière ou d'une autre si la transmission du paludisme se produit dans le village, vous choisissez donc de dire que les résultats n'étaient pas clairs.`
                : lang === "PT"
                ? `Você não pode realmente dizer de uma forma ou de outra se a transmissão da malária está ocorrendo na aldeia, então você escolhe dizer que os resultados não foram claros.`
                : ``,
          },
          {
            checked: questions[2] === 2,
            correct: true,
            index: 2,
            text:
              lang === "EN"
                ? "You can say with a high degree of confidence that you have so far seen evidence of limited local transmission – only a single generation of transmission from imported cases leading to three introduced cases. You do not yet see any evidence of ongoing local transmission beyond this, consistent with elimination status."
                : lang === "FR"
                ? `Vous pouvez affirmer avec un degré de confiance élevé que vous avez jusqu'à présent vu des preuves de transmission locale limitée – seulement une seule génération de transmission à partir de cas importés menant à trois cas introduits. Vous ne voyez pas encore de preuves de transmission locale continue au-delà de cela, ce qui est cohérent avec le statut d'élimination.`
                : lang === "PT"
                ? `Pode dizer com um alto grau de confiança que até agora viu evidências de transmissão local limitada – apenas uma única geração de transmissão de casos importados levando a três casos introduzidos. Ainda não vê nenhuma evidência de transmissão local contínua para além disso, consistente com o estado de eliminação.`
                : ``,
          },
          {
            checked: questions[2] === 3,
            correct: false,
            index: 3,
            text:
              lang === "EN"
                ? "You can say with a reasonable degree of confidence that these five cases are not related by transmission and are not suspicious of an outbreak occurring at the village."
                : lang === "FR"
                ? `Vous pouvez dire avec un degré de confiance raisonnable que ces cinq cas ne sont pas liés par transmission et ne sont pas suspects d'une épidémie se produisant dans le village.`
                : lang === "PT"
                ? `Você pode dizer com um grau razoável de confiança que esses cinco casos não estão relacionados por transmissão e não são suspeitos de um surto ocorrendo na aldeia.`
                : ``,
          },
          {
            checked: questions[2] === 4,
            correct: false,
            index: 4,
            text:
              lang === "EN"
                ? "You can’t be bothered with interpreting results for other people and just show them the genotyping data, letting them figure it out for themselves."
                : lang === "FR"
                ? `Vous ne pouvez pas être dérangé par l'interprétation des résultats pour d'autres personnes et vous contentez de leur montrer les données de génotypage, les laissant se débrouiller seuls.`
                : lang === "PT"
                ? `Você não se importa em interpretar resultados para outras pessoas e apenas mostra os dados de genotipagem, deixando-as descobrir por si mesmas.`
                : ``,
          },
        ]}
        callback={(questionIdx, answerIdx) => {
          if (questions[2] === answerIdx) {
            setQuestions({ ...questions, 2: null });
          } else {
            setQuestions({ ...questions, 2: answerIdx });
          }
        }}
        hasAnswer={questions[2] === 2}
        headerText={
          lang === "EN"
            ? "Which of the following would be an accurate way of communicating your findings to stakeholders such as the village community, local government, and malaria control program?"
            : lang === "FR"
            ? `Quelle serait une manière précise de communiquer vos découvertes aux parties prenantes telles que la communauté villageoise, le gouvernement local et le programme de lutte contre le paludisme ?`
            : `Qual das seguintes seria uma forma precisa de comunicar as suas descobertas às partes interessadas, como a comunidade da aldeia, o governo local e o programa de controlo da malária?`
        }
        questionIdx={2}
        classNames={{
          container: "fadeIn500 mt-8",
          answersContainer: "grid gap-4 mt-8",
        }}
      />
    );
  } else if (phase === 22) {
    return (
      <div>
        <KnowledgeCheckQuestion
          answers={[
            {
              checked: questions[3] === 0,
              correct: false,
              index: 0,
              text:
                lang === "EN"
                  ? "Reducing interventions in the administrative area where this village is located, since there is no transmission occurring here and resources could be better spent elsewhere."
                  : lang === "FR"
                  ? `Réduire les interventions dans la zone administrative où se trouve ce village, car il n'y a pas de transmission ici et les ressources pourraient être mieux utilisées ailleurs.`
                  : lang === "PT"
                  ? `Reduzir as intervenções na área administrativa onde esta aldeia está localizada, uma vez que não há transmissão ocorrendo aqui e os recursos poderiam ser melhor utilizados em outro lugar.`
                  : ``,
            },
            {
              checked: questions[3] === 1,
              correct: true,
              index: 1,
              text:
                lang === "EN"
                  ? "Keeping interventions at the level they are - there was limited transmission from imported to introduced cases but it did not appear to continue beyond that. However, if additional cases in the village or nearby are detected, your team should be contacted immediately to continue the investigation. Meanwhile, you will keep all of the genotyping data well organized in your ongoing database if more cases are detected."
                  : lang === "FR"
                  ? `Maintenir les interventions au niveau actuel - il y a eu une transmission limitée des cas importés aux cas introduits, mais elle ne semble pas s'être poursuivie au-delà. Cependant, si des cas supplémentaires sont détectés dans le village ou à proximité, votre équipe doit être contactée immédiatement pour poursuivre l'enquête. En attendant, vous conserverez toutes les données de génotypage bien organisées dans votre base de données continue si d'autres cas sont détectés.`
                  : lang === "PT"
                  ? `Manter as intervenções ao nível atual - houve uma transmissão limitada de casos importados para casos introduzidos, mas não pareceu continuar para além disso. No entanto, se forem detetados casos adicionais na aldeia ou nas proximidades, a sua equipa deve ser contactada imediatamente para continuar a investigação. Entretanto, manterá todos os dados de genotipagem bem organizados na sua base de dados contínua, caso sejam detetados mais casos.`
                  : ``,
            },
            {
              checked: questions[3] === 2,
              correct: false,
              index: 2,
              text:
                lang === "EN"
                  ? "Investing in more intensive interventions, since you are concerned that a large outbreak could be imminent."
                  : lang === "FR"
                  ? `Investir dans des interventions plus intensives, car vous craignez qu'une épidémie majeure ne soit imminente.`
                  : lang === "PT"
                  ? `Investir em intervenções mais intensivas, uma vez que está preocupado com a iminência de um grande surto.`
                  : ``,
            },
          ]}
          callback={(questionIdx, answerIdx) => {
            if (questions[3] === answerIdx) {
              setQuestions({ ...questions, 3: null });
            } else {
              setQuestions({ ...questions, 3: answerIdx });
            }
          }}
          hasAnswer={questions[3] === 1}
          headerText={
            lang === "EN"
              ? "Your program director asks you what should be done programmatically based on these detailed results stemming from your thorough investigation. You suggest:"
              : lang === "FR"
              ? `Votre directeur de programme vous demande ce qui devrait être fait au niveau programmatique sur la base de ces résultats détaillés découlant de votre enquête approfondie. Vous suggérez :`
              : lang === "PT"
              ? `O seu diretor de programa pergunta-lhe o que deve ser feito programaticamente com base nestes resultados detalhados resultantes da sua investigação aprofundada. Você sugere:`
              : ``
          }
          questionIdx={3}
          classNames={{
            container: "fadeIn500 mt-8",
            answersContainer: "grid gap-4 mt-8",
          }}
        />
        <QuestionResponseText
          complete={completion[phase] ?? false}
          trigger={questions[3] === 1}
          className="mt-8"
          visible={questions[3] === 1}
          text={
            lang === "EN"
              ? ` You have shown that there is some transmission occurring in the
              village (so option A is incorrect) but it does seem to be limited,
              at least for now. Therefore, it would be reasonable to keep
              interventions where they are while continuing to be vigilant and
              investing in rigorous epidemiologic and genomic surveillance.
              Additional resources spent on interventions might reduce the
              probability of introduced cases, but since transmission does not
              appear to be sustained at this time, those resources might be
              better spent elsewhere.`
              : lang === "FR"
              ? `Vous avez montré qu'il y a une certaine transmission dans le village (donc l'option A est incorrecte) mais elle semble limitée, du moins pour l'instant. Par conséquent, il serait raisonnable de maintenir les interventions telles qu'elles sont tout en restant vigilant et en investissant dans une surveillance épidémiologique et génomique rigoureuse. Des ressources supplémentaires consacrées aux interventions pourraient réduire la probabilité de cas introduits, mais comme la transmission ne semble pas être soutenue pour le moment, ces ressources pourraient être mieux utilisées ailleurs.`
              : `Você demonstrou que alguma transmissão está ocorrendo na aldeia (portanto, a opção A está incorreta), mas parece ser limitada, pelo menos por enquanto. Portanto, seria razoável manter as intervenções como estão, continuando a ser vigilante e investindo em vigilância epidemiológica e genômica rigorosa. Recursos adicionais gastos em intervenções podem reduzir a probabilidade de casos introduzidos, mas como a transmissão não parece ser sustentada neste momento, esses recursos podem ser melhor gastos em outro lugar.`
          }
        />
      </div>
    );
  }

  return (
    <div>
      {phase === 11 && (
        <div>
          <FormHeader
            text={lang === "EN" || lang === "FR" ? "Questions" : "Perguntas"}
          />
        </div>
      )}
      {phase > 11 && phase !== 13 && phase !== 14 && phase < 18 && (
        <div>
          <FormHeader
            text={
              lang === "EN"
                ? "Genotype Matches"
                : lang === "FR"
                ? `Correspondances de génotypes`
                : `Correspondências de Genótipos`
            }
          />

          <div className="mb-auto ">
            <div className="">
              <CompareGenotypes
                firstPersonId={
                  phase === 12 && selectedEdges.EF.visited
                    ? "E"
                    : activeEdge
                    ? (activeEdge[0] as PentagonId)
                    : null
                }
                secondPersonId={
                  phase === 12 && selectedEdges.EF.visited
                    ? "F"
                    : activeEdge
                    ? (activeEdge[1] as PentagonId)
                    : null
                }
              />
            </div>
          </div>
        </div>
      )}
      {phase === 12 && (
        <QuestionResponseText
          className="mt-8"
          complete={completion[phase]}
          trigger={selectedEdges.EF.visited}
          visible={selectedEdges.EF.visited}
          text="If the two people with travel history traveled together, for
               example if they were part of the same household, then it's
               possible that their infections might be related. In this case, we
               know that they report travel to different geographic areas with
               high transmission and likely acquired their infections there.
               Since there is generally a lot of parasite genetic diversity in
               areas of high transmission, and they're coming from different
               regions, we would not expect their parasites to be related by
               ancestry. This is exactly what we find. Since the MOI of these
               cases are 2 and 3, we'd expect to see some matches by chance;
               what we observe - 4 of 12 loci with a match, or IBS of 0.33
               - is within the range of what we'd expect with
               unrelated infections."
        />
        // <div>
        //   {selectedEdges.EF.visited && (
        //     <p
        //       style={{
        //         animationDelay: "500ms",
        //       }}
        //       className="fadeIn1000 text-sm"
        //     >
        //       If the two people with travel history traveled together, for
        //       example if they were part of the same household, then it&apos;s
        //       possible that their infections might be related. In this case, we
        //       know that they report travel to different geographic areas with
        //       high transmission and likely acquired their infections there.
        //       Since there is generally a lot of parasite genetic diversity in
        //       areas of high transmission, and they&apos;re coming from different
        //       regions, we would not expect their parasites to be related by
        //       ancestry. This is exactly what we find. Since the MOI of these
        //       cases are 2 and 3, we&apos;d expect to see some matches by chance;
        //       what we observe &ndash; 4 of 12 loci with a match, or IBS of 0.33
        //       &ndash; is within the range of what we&apos;d expect with
        //       unrelated infections. Remove the connection by pressing the{" "}
        //       <svg
        //         aria-label="minus"
        //         className="inline-block"
        //         width={"24px"}
        //         viewBox="0 0 12 12"
        //       >
        //         <circle
        //           r={5}
        //           cx={6}
        //           cy={6}
        //           fill="transparent"
        //           className="stroke-black stroke-[0.5px]"
        //         ></circle>
        //         <path
        //           d="M3.5,6 L8.5,6"
        //           className="stroke-black stroke-[0.5px]"
        //         ></path>
        //       </svg>{" "}
        //       icon shown{" "}
        //       {<span className="hidden md:inline-block">to the left</span>}
        //       {<span className="md:hidden">above</span>} before continuing.
        //     </p>
        //   )}
        // </div>
      )}
      {(phase === 13 || phase === 14) && (
        <div>
          {/* <FormHeader text="Questions" /> */}

          <div className="my-8 flex">
            <button
              onClick={() => {
                setButtonClicked(true);
              }}
              className={`${
                buttonClicked ? "hidden" : ""
              } m-auto bg-interactiveBlue px-6 py-3 text-white shadow-sm shadow-black`}
            >
              <span className="block translate-y-0.5">Additional Info</span>
            </button>
          </div>
          <QuestionResponseText
            // complete={completion[phase] ?? false}
            // trigger={phase === 14}
            visible={buttonClicked}
            text="There may be several types of information that you are
                interested in, but date of the cases is an important one. Your
                team shares a clean, well curated epidemiologic database with
                you with data for all five cases. It turns out that cases E and
                F were both detected within a week of each other, and that cases
                G, H, and I all presented with malaria between two and six weeks
                after."
          />
          <KnowledgeCheckQuestion
            questionIdx={0}
            classNames={{
              container: `mt-8 ${
                completion[phase]
                  ? ""
                  : buttonClicked
                  ? "fadeIn500 [animationDelay:1000ms]"
                  : "invisible"
              }`,
              answersContainer: "grid gap-4 mt-4",
            }}
            answers={[
              {
                text: "Cases E and F happened so close to each other in time that they are likely related to each other even though they both travelled to different places and their infections are not closely related genetically.",
                checked: p8addedQuestion2 === 0,
                correct: false,
                index: 0,
              },
              {
                text: "Cases G, H, and I (who did not travel) cannot be related to cases E and F since they happened so much later.",
                checked: p8addedQuestion2 === 1,
                correct: false,
                index: 1,
              },
              {
                text: "Cases G, H, and I (who did not travel) could be related to the imported cases, since it can take several weeks for transmission to occur from one person to another and then cause symptomatic malaria.",
                checked: p8addedQuestion2 === 2,
                correct: true,
                index: 2,
              },
            ]}
            callback={(questionIdx, answerIdx) => {
              if (p8addedQuestion2 === answerIdx) {
                setP8AddedQuestion2(false);
              } else {
                setP8AddedQuestion2(answerIdx);
              }
            }}
            hasAnswer={p8addedQuestion2 === 2}
            headerText="How do you interpret these additional epidemiologic data on the timing of cases?"
          />
          {/* {phase === 14 && (
            <div className="fadeIn500 bg-primaryBlue/20 p-4 text-sm lg:p-8">
              <p>
                There may be several types of information that you are
                interested in, but date of the cases is an important one. Your
                team shares a clean, well curated epidemiologic database with
                you with data for all five cases. It turns out that cases E and
                F were both detected within a week of each other, and that cases
                G, H, and I all presented with malaria between two and six weeks
                after.
              </p>
            </div>
          )} */}
        </div>
      )}
      {phase >= 18 && phase < 20 && <PentagonCorrections lang={lang} />}
      {phase === 20 && (
        <div>
          <FormHeader text="Questions" />
          <KnowledgeCheckQuestion
            classNames={{
              container: "fadeIn500",
              answersContainer: "grid gap-4 mt-4",
            }}
            answers={[
              {
                checked: questions[1][1],
                correct: true,
                index: 0,
                text: "Imported cases",
              },
              {
                checked: questions[1][2],
                correct: true,
                index: 1,
                text: "Introduced cases",
              },
              {
                checked: questions[1][3],
                correct: false,
                index: 2,
                text: "Locally transmitted cases",
              },
            ]}
            callback={(questionIdx, answerIdx) => {
              setQuestions({
                ...questions,
                [questionIdx]: {
                  ...questions[1],
                  [answerIdx + 1]: !questions[1][answerIdx + 1],
                },
              });
            }}
            hasAnswer={questions[1][1] && questions[1][2] && !questions[1][3]}
            headerText="Based on your evaluation, what if any types of cases do you think are present in the village? (Choose all that apply)"
            questionIdx={1}
          />
          <QuestionResponseText
            className="my-8"
            trigger={questions[1][1] && questions[1][2] && !questions[1][3]}
            complete={completion[phase] ?? false}
            visible={questions[1][1] && questions[1][2] && !questions[1][3]}
            text="Correct! Cases E and F are very likely imported cases, based on
              the fact that there have not been cases reported in this village
              before those two, and their recent travel history to high
              transmission areas. Cases I and G are likely to be introduced
              cases stemming from Case E, and Case H is likely an introduced
              case from Case F."
          />
          {/* <div
            className={`${questions[1][1] && questions[1][2] && !questions[1][3] ? "" : "hidden"} my-8 bg-primaryBlue/10 p-4 lg:p-8`}
          >
            <p className={` text-sm`}>
              Correct! Cases E and F are very likely imported cases, based on
              the fact that there have not been cases reported in this village
              before those two, and their recent travel history to high
              transmission areas. Cases I and G are likely to be introduced
              cases stemming from Case E, and Case H is likely an introduced
              case from Case F.
            </p>
          </div> */}
        </div>
      )}
      {phase === 21 && (
        <div>
          <FormHeader text="Questions" />
          <KnowledgeCheckQuestion
            answers={[
              {
                checked: questions[2] === 0,
                correct: false,
                index: 0,
                text: "You have definitively proven that there is absolutely no malaria transmission occurring in the village.",
              },
              {
                checked: questions[2] === 1,
                correct: false,
                index: 1,
                text: "You can’t really say one way or the other whether malaria transmission is occurring in the village, so you choose to say the results were not clear.",
              },
              {
                checked: questions[2] === 2,
                correct: true,
                index: 2,
                text: "You can say with a high degree of confidence that you have so far seen evidence of limited local transmission – only a single generation of transmission from imported cases leading to three introduced cases. You do not yet see any evidence of ongoing local transmission beyond this, consistent with elimination status.",
              },
              {
                checked: questions[2] === 3,
                correct: false,
                index: 3,
                text: "You can say with a reasonable degree of confidence that these five cases are not related by transmission and are not suspicious of an outbreak occurring at the village.",
              },
              {
                checked: questions[2] === 4,
                correct: false,
                index: 4,
                text: "You can’t be bothered with interpreting results for other people and just show them the genotyping data, letting them figure it out for themselves.",
              },
            ]}
            callback={(questionIdx, answerIdx) => {
              if (questions[2] === answerIdx) {
                setQuestions({ ...questions, 2: null });
              } else {
                setQuestions({ ...questions, 2: answerIdx });
              }
            }}
            hasAnswer={questions[2] === 2}
            headerText="Which of the following would be an accurate way of communicating your findings to stakeholders such as the village community, local government, and malaria control program?"
            questionIdx={2}
            classNames={{
              container: "fadeIn500 mt-8",
              answersContainer: "grid gap-4 mt-8",
            }}
          />
        </div>
      )}
      {phase === 22 && (
        <div>
          <FormHeader text="Questions" />

          <KnowledgeCheckQuestion
            answers={[
              {
                checked: questions[3] === 0,
                correct: false,
                index: 0,
                text: "Reducing interventions in the administrative area where this village is located, since there is no transmission occurring here and resources could be better spent elsewhere.",
              },
              {
                checked: questions[3] === 1,
                correct: true,
                index: 1,
                text: "Keeping interventions at the level they are - there was limited transmission from imported to introduced cases but it did not appear to continue beyond that. However, if additional cases in the village or nearby are detected, your team should be contacted immediately to continue the investigation. Meanwhile, you will keep all of the genotyping data well organized in your ongoing database if more cases are detected.",
              },
              {
                checked: questions[3] === 2,
                correct: false,
                index: 2,
                text: "Investing in more intensive interventions, since you are concerned that a large outbreak could be imminent.",
              },
            ]}
            callback={(questionIdx, answerIdx) => {
              if (questions[3] === answerIdx) {
                setQuestions({ ...questions, 3: null });
              } else {
                setQuestions({ ...questions, 3: answerIdx });
              }
            }}
            hasAnswer={questions[3] === 1}
            headerText="Your program director asks you what should be done programmatically based on these detailed results stemming from your thorough investigation. You suggest:"
            questionIdx={3}
            classNames={{
              container: "fadeIn500 mt-8",
              answersContainer: "grid gap-4 mt-8",
            }}
          />
          <QuestionResponseText
            complete={completion[phase] ?? false}
            trigger={questions[3] === 1}
            className="mt-8"
            visible={questions[3] === 1}
            text=" You have shown that there is some transmission occurring in the
              village (so option A is incorrect) but it does seem to be limited,
              at least for now. Therefore, it would be reasonable to keep
              interventions where they are while continuing to be vigilant and
              investing in rigorous epidemiologic and genomic surveillance.
              Additional resources spent on interventions might reduce the
              probability of introduced cases, but since transmission does not
              appear to be sustained at this time, those resources might be
              better spent elsewhere."
          />
          {/* <div
            className={`${questions[3] === 1 ? "fadeIn500" : "hidden"} my-8 bg-primaryBlue/10 p-4 text-sm lg:p-8`}
          >
            <p className="text-sm">
              You have shown that there is some transmission occurring in the
              village (so option A is incorrect) but it does seem to be limited,
              at least for now. Therefore, it would be reasonable to keep
              interventions where they are while continuing to be vigilant and
              investing in rigorous epidemiologic and genomic surveillance.
              Additional resources spent on interventions might reduce the
              probability of introduced cases, but since transmission does not
              appear to be sustained at this time, those resources might be
              better spent elsewhere.
            </p>
          </div> */}
        </div>
      )}
    </div>
  );
}
