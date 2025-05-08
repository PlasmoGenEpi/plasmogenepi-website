import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";
import AlleleDistribution from "../AlleleDistribution/AlleleDistribution";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import Image from "next/image";
import ImageContainer from "@/app/components/Interactives/Shared/misc/ImageContainer";

export const newP1QuestionsAtom = atomWithStorage<{
  [key: number]: null | number | number[];
  2: number[];
}>("newP1QuestionsAtom", {
  1: null,
  2: [],
  3: null,
  4: null,
  5: null,
  6: null,
});

export default function P1KnowledgeCheck2({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [newQuestions, setNewQuestions] = useAtom(newP1QuestionsAtom);

  // useEffect(() => {
  //   setNewQuestions({
  //     1: null,
  //     2: [],
  //     3: null,
  //     4: null,
  //     5: null,
  //     6: null,
  //   });
  // }, []);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? "Allele Count"
          : lang === "FR"
          ? "Nombre d'allèles"
          : "Contagem de alelos"
      }
      leftContent={<AlleleDistribution lang={lang} />}
      rightHeader={
        lang === "EN"
          ? "Questions"
          : lang === "FR"
          ? "Des questions"
          : "Questões"
      }
      rightContent={
        <div className="grid">
          <KnowledgeCheckQuestion
            trigger={false}
            answers={[
              {
                checked: newQuestions[1] === 1,
                correct: false,
                index: 1,
                text: lang === "EN" ? "Yes" : lang === "FR" ? "Oui" : "Sim",
              },
              {
                checked: newQuestions[1] === 2,
                correct: true,
                index: 2,
                text: lang === "EN" ? "No" : lang === "FR" ? "Non" : "No",
              },
            ]}
            classNames={{
              headerText: "mb-4",
              answersContainer: "grid grid-cols-5 gap-8 md:gap-4",
              answers: "w-4 md:w-3 lg:w-4",
            }}
            callback={(questionIdx, answerIdx) => {
              setNewQuestions({
                ...newQuestions,
                [questionIdx]:
                  newQuestions[questionIdx] === answerIdx ? null : answerIdx,
              });
            }}
            questionIdx={1}
            hasAnswer={newQuestions[1] === 2}
            headerText={
              lang === "EN"
                ? "1. Should you get any heterozygous loci – loci containing more than a single allele - when you genotype a control containing a single clone?"
                : lang === "FR"
                ? "1. Devriez-vous obtenir des loci hétérozygotes – des loci contenant plus d'un seul allèle – lorsque vous génotypez un contrôle contenant un seul clone ?"
                : lang === "PT"
                ? "1. Você deve obter algum loci heterozigoto – loci contendo mais de um único alelo – quando você genotipa um controle contendo um único clone?"
                : ""
            }
          />
          <QuestionResponseText
            className="mt-4"
            visible={newQuestions[1] === 2}
            text={
              lang === "EN"
                ? `That’s right – if there is only one clone present in the sample, we should only get one allele at each locus. Therefore, each locus should be homozygous (containing a single allele) not heterozygous (containing multiple alleles).`
                : lang === "FR"
                ? `C'est exact – s'il n'y a qu'un seul clone présent dans l'échantillon, nous ne devrions obtenir qu'un seul allèle à chaque locus. Par conséquent, chaque locus doit être homozygote (contenant un seul allèle) et non hétérozygote (contenant plusieurs allèles).`
                : lang === "PT"
                ? `Isso mesmo – se houver apenas um clone presente na amostra, devemos obter apenas um alelo em cada locus. Portanto, cada locus deve ser homozigoto (contendo um único alelo) e não heterozigoto (contendo múltiplos alelos).`
                : ""
            }
          />
          {newQuestions[1] === 2 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[2].includes(1),
                    correct: true,
                    index: 1,
                    text:
                      lang === "EN"
                        ? "The assay is not working correctly"
                        : lang === "FR"
                        ? "Le test ne fonctionne pas correctement"
                        : lang === "PT"
                        ? "O ensaio não está funcionando corretamente"
                        : "",
                  },
                  {
                    checked: newQuestions[2].includes(2),
                    correct: true,
                    index: 2,
                    text:
                      lang === "EN"
                        ? "The assay is generating false positives"
                        : lang === "FR"
                        ? "Le test génère des faux positifs"
                        : lang === "PT"
                        ? "O ensaio está gerando falsos positivos"
                        : "",
                  },
                  {
                    checked: newQuestions[2].includes(3),
                    correct: true,
                    index: 3,
                    text:
                      lang === "EN"
                        ? "Your sample is contaminated"
                        : lang === "FR"
                        ? "Votre échantillon est contaminé"
                        : lang === "PT"
                        ? "Sua amostra está contaminada"
                        : "",
                  },
                  {
                    checked: newQuestions[2].includes(4),
                    correct: true,
                    index: 4,
                    text:
                      lang === "EN"
                        ? "You mixed up the sample, i.e. the sample isn’t what you think it is"
                        : lang === "FR"
                        ? "Vous avez mélangé l'échantillon, c'est-à-dire que l'échantillon n'est pas ce que vous pensez qu'il est"
                        : lang === "PT"
                        ? "Você confundiu a amostra, ou seja, a amostra não é o que você pensa que é"
                        : "",
                  },
                  {
                    checked: newQuestions[2].includes(5),
                    correct: false,
                    index: 5,
                    text:
                      lang === "EN"
                        ? "You forgot to add the sample DNA"
                        : lang === "FR"
                        ? "Vous avez oublié d'ajouter l'ADN de l'échantillon"
                        : lang === "PT"
                        ? "Você esqueceu de adicionar o DNA da amostra"
                        : "",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  let x = newQuestions[2].slice();
                  if (x.includes(answerIdx)) {
                    x.splice(x.indexOf(answerIdx), 1);
                  } else {
                    x.push(answerIdx);
                  }
                  setNewQuestions({ ...newQuestions, 2: x });
                  // setNewQuestions({
                  //   ...newQuestions,
                  //   [questionIdx]:
                  //     newQuestions[questionIdx].includes(answerIdx)
                  //       ? null
                  //       : answerIdx,
                  // });
                }}
                questionIdx={2}
                hasAnswer={
                  newQuestions[2].includes(1) &&
                  newQuestions[2].includes(2) &&
                  newQuestions[2].includes(3) &&
                  newQuestions[2].includes(4) &&
                  !newQuestions[2].includes(5)
                }
                headerText={
                  lang === "EN"
                    ? "2. If you did get heterozygous loci when genotyping a single clone, what are some possible explanations?"
                    : lang === "FR"
                    ? "2. Si vous avez obtenu des loci hétérozygotes lors du génotypage d'un seul clone, quelles sont les explications possibles ?"
                    : lang === "PT"
                    ? "2. Se você obteve loci heterozigotos ao genotipar um único clone, quais são algumas explicações possíveis?"
                    : ""
                }
                // headerText="2. If you did get heterozygous loci when genotyping a single clone, what are some possible explanations?"
              />
              <QuestionResponseText
                visible={
                  newQuestions[2].includes(1) &&
                  newQuestions[2].includes(2) &&
                  newQuestions[2].includes(3) &&
                  newQuestions[2].includes(4) &&
                  !newQuestions[2].includes(5)
                }
                text={
                  lang === "EN"
                    ? `The last option is not correct – if you forgot to add sample DNA you should detect no alleles, not too many.  All of the other options represent possible explanations for why you could get heterozygous allele data from a single clone.`
                    : lang === "FR"
                    ? `La dernière option n'est pas correcte – si vous avez oublié d'ajouter l'ADN de l'échantillon, vous ne devriez détecter aucun allèle, pas trop. Toutes les autres options représentent des explications possibles sur les raisons pour lesquelles vous pourriez obtenir des données d'allèles hétérozygotes à partir d'un seul clone.`
                    : lang === "PT"
                    ? `A última opção não está correta – se você esqueceu de adicionar o DNA da amostra, você não deve detectar nenhum alelo, não muitos. Todas as outras opções representam possíveis explicações para o motivo de você obter dados de alelos heterozigotos de um único clone.`
                    : ""
                }

                // text={`The last option is not correct – if you forgot to add sample DNA you should detect no alleles, not too many.  All of the other options represent possible explanations for why you could get heterozygous allele data from a single clone.`}
              />
            </div>
          )}
          {newQuestions[2].includes(1) &&
            newQuestions[2].includes(2) &&
            newQuestions[2].includes(3) &&
            newQuestions[2].includes(4) &&
            !newQuestions[2].includes(5) && (
              <div className="mt-8 flex flex-col gap-4">
                <KnowledgeCheckQuestion
                  style={{
                    animationDelay: `1000ms`,
                  }}
                  triggerEnd
                  answers={[
                    {
                      checked: newQuestions[3] === 1,
                      correct: false,
                      index: 1,
                      text:
                        lang === "EN"
                          ? "Nothing, these are only controls not “real” data."
                          : lang === "FR"
                          ? "Rien, ce ne sont que des contrôles et non des données « réelles »."
                          : lang === "PT"
                          ? "Nada, estes são apenas controles, não dados “reais”."
                          : "",

                      // text: "Nothing, these are only controls not “real” data.",
                    },
                    {
                      checked: newQuestions[3] === 2,
                      correct: false,
                      index: 2,
                      text:
                        lang === "EN"
                          ? "Nothing, it is ok to get incorrect results some of the time. No assay is perfect"
                          : lang === "FR"
                          ? "Rien, il est normal d'obtenir des résultats incorrects de temps en temps. Aucun test n'est parfait"
                          : lang === "PT"
                          ? "Nada, tudo bem obter resultados incorretos de vez em quando. Nenhum ensaio é perfeito"
                          : "",

                      // text: "Nothing, it is ok to get incorrect results some of the time. No assay is perfect",
                    },
                    {
                      checked: newQuestions[3] === 3,
                      correct: true,
                      index: 3,
                      text:
                        lang === "EN"
                          ? "Rigorously investigate the potential source of the error, so you know what the source is and how to interpret data on clinical samples."
                          : lang === "FR"
                          ? "Enquêter rigoureusement sur la source potentielle de l'erreur, afin de savoir quelle est la source et comment interpréter les données sur les échantillons cliniques."
                          : lang === "PT"
                          ? "Investigue rigorosamente a fonte potencial do erro, para que você saiba qual é a fonte e como interpretar os dados em amostras clínicas."
                          : "",

                      // text: "Rigorously investigate the potential source of the error, so you know what the source is and how to interpret data on clinical samples.",
                    },
                  ]}
                  classNames={{
                    headerText: "mb-4",
                    answersContainer: "grid gap-8 md:gap-4",
                    answers: "w-4 md:w-3 lg:w-4",
                    container: "fadeIn1000",
                  }}
                  callback={(questionIdx, answerIdx) => {
                    setNewQuestions({
                      ...newQuestions,
                      [questionIdx]:
                        newQuestions[questionIdx] === answerIdx
                          ? null
                          : answerIdx,
                    });
                  }}
                  questionIdx={3}
                  hasAnswer={newQuestions[3] === 3}
                  headerText={
                    lang === "EN"
                      ? "3. If you got heterozygous loci from a single clone, what should you do? (choose one)"
                      : lang === "FR"
                      ? "3. Si vous avez obtenu des loci hétérozygotes à partir d'un seul clone, que devez-vous faire ? (choisissez-en un)"
                      : lang === "PT"
                      ? "3. Se você obteve loci heterozigotos de um único clone, o que você deve fazer? (escolha um)"
                      : ""
                  }

                  // headerText="3. If you got heterozygous loci from a single clone, what should you do? (choose one)"
                />
                <QuestionResponseText
                  visible={newQuestions[3] === 3}
                  text={
                    lang === "EN"
                      ? `Controls are the most important samples you will ever run on a laboratory assay. They tell you if your assay is working or not so you know how to interpret the data. If your controls are giving you wrong results, you should not trust any other results until you thoroughly investigate the source of the problem and correct it.`
                      : lang === "FR"
                      ? `Les contrôles sont les échantillons les plus importants que vous aurez à exécuter sur un test de laboratoire. Ils vous indiquent si votre test fonctionne ou non afin que vous sachiez comment interpréter les données. Si vos contrôles vous donnent des résultats erronés, vous ne devez faire confiance à aucun autre résultat tant que vous n'avez pas étudié en profondeur la source du problème et que vous ne l'avez pas corrigé.`
                      : lang === "PT"
                      ? `Os controles são as amostras mais importantes que você executará em um ensaio de laboratório. Eles informam se o seu ensaio está funcionando ou não, para que você saiba como interpretar os dados. Se seus controles estiverem fornecendo resultados incorretos, você não deverá confiar em nenhum outro resultado até que investigue minuciosamente a origem do problema e o corrija.`
                      : ""
                  }
                  // text={`Controls are the most important samples you will ever run on a laboratory assay. They tell you if your assay is working or not so you know how to interpret the data. If your controls are giving you wrong results, you should not trust any other results until you thoroughly investigate the source of the problem and correct it.`}
                />
              </div>
            )}
          {newQuestions[3] === 3 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[4] === 1,
                    correct: false,
                    index: 1,
                    // text: "Definitely yes.",
                    text:
                      lang === "EN"
                        ? "Definitely yes."
                        : lang === "FR"
                        ? "Absolument oui."
                        : lang === "PT"
                        ? "Definitivamente sim."
                        : "",
                    // text: "Definitely yes.",
                  },
                  {
                    checked: newQuestions[4] === 2,
                    correct: false,
                    index: 2,
                    // text: "Definitely not.",
                    text:
                      lang === "EN"
                        ? "Definitely not."
                        : lang === "FR"
                        ? "Absolument pas."
                        : lang === "PT"
                        ? "Definitivamente não."
                        : "",
                    // text: "Definitely not.",
                  },
                  {
                    checked: newQuestions[4] === 3,
                    correct: true,
                    index: 3,
                    // text: "Possibly, but extremely unlikely.",
                    text:
                      lang === "EN"
                        ? "Possibly, but extremely unlikely."
                        : lang === "FR"
                        ? "Possible, mais extrêmement improbable."
                        : lang === "PT"
                        ? "Possivelmente, mas extremamente improvável."
                        : "",
                    // text: "Possibly, but extremely unlikely.",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  setNewQuestions({
                    ...newQuestions,
                    [questionIdx]:
                      newQuestions[questionIdx] === answerIdx
                        ? null
                        : answerIdx,
                  });
                }}
                questionIdx={4}
                hasAnswer={newQuestions[4] === 3}
                // headerText={
                //   "4. If all 12 of your loci are heterozygous, does that mean you have exactly 2 clones? "
                // }
                headerText={
                  lang === "EN"
                    ? "4. If all 12 of your loci are heterozygous, does that mean you have exactly 2 clones? "
                    : lang === "FR"
                    ? "4. Si les 12 de vos loci sont hétérozygotes, cela signifie-t-il que vous avez exactement 2 clones ?"
                    : lang === "PT"
                    ? "4. Se todos os 12 loci forem heterozigotos, isso significa que você tem exatamente 2 clones?"
                    : ""
                }
                // headerText={
                //   "4. If all 12 of your loci are heterozygous, does that mean you have exactly 2 clones? "
                // }
              />
              <QuestionResponseText
                visible={newQuestions[4] === 3}
                // text={`It definitely means that you have more than one clone, but two clones would not be likely to give you heterozygous calls at ALL the loci. Based on the controls that you have created, it seems you would require a fairly high MOI for this to be likely. Recall, how many of your loci were heterozygous when genotyping controls with an MOI of 2? Of 4?`}
                text={
                  lang === "EN"
                    ? `It definitely means that you have more than one clone, but two clones would not be likely to give you heterozygous calls at ALL the loci. Based on the controls that you have created, it seems you would require a fairly high MOI for this to be likely. Recall, how many of your loci were heterozygous when genotyping controls with an MOI of 2? Of 4?`
                    : lang === "FR"
                    ? `Cela signifie certainement que vous avez plus d'un clone, mais deux clones ne seraient probablement pas en mesure de vous donner des appels hétérozygotes à TOUS les loci. D'après les contrôles que vous avez créés, il semble que vous auriez besoin d'un MOI assez élevé pour que cela soit probable. Rappelez-vous, combien de vos loci étaient hétérozygotes lors du génotypage de contrôles avec un MOI de 2 ? De 4 ?`
                    : lang === "PT"
                    ? `Isso definitivamente significa que você tem mais de um clone, mas dois clones provavelmente não dariam a você chamadas heterozigotas em TODOS os loci. Com base nos controles que você criou, parece que você precisaria de um MOI bastante alto para que isso fosse provável. Lembre-se, quantos de seus loci eram heterozigotos ao genotipar controles com um MOI de 2? De 4?`
                    : ""
                }
                // text={`It definitely means that you have more than one clone, but two clones would not be likely to give you heterozygous calls at ALL the loci. Based on the controls that you have created, it seems you would require a fairly high MOI for this to be likely. Recall, how many of your loci were heterozygous when genotyping controls with an MOI of 2? Of 4?`}
              />
            </div>
          )}
          {newQuestions[4] === 3 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[5] === 1,
                    correct: false,
                    index: 1,
                    // text: "It is more likely that you have a monoclonal sample and a lot of false positives.",
                    text:
                      lang === "EN"
                        ? "It is more likely that you have a monoclonal sample and a lot of false positives."
                        : lang === "FR"
                        ? "Il est plus probable que vous ayez un échantillon monoclonal et beaucoup de faux positifs."
                        : lang === "PT"
                        ? "É mais provável que você tenha uma amostra monoclonal e muitos falsos positivos."
                        : "",
                    // text: "It is more likely that you have a monoclonal sample and a lot of false positives.",
                  },
                  {
                    checked: newQuestions[5] === 2,
                    correct: false,
                    index: 2,
                    // text: "12 heterozygous loci means you have an MOI of 12, not 2.",
                    text:
                      lang === "EN"
                        ? "12 heterozygous loci means you have an MOI of 12, not 2."
                        : lang === "FR"
                        ? "12 loci hétérozygotes signifie que vous avez un MOI de 12, pas 2."
                        : lang === "PT"
                        ? "12 loci heterozigotos significa que você tem um MOI de 12, não 2."
                        : "",
                    // text: "12 heterozygous loci means you have an MOI of 12, not 2.",
                  },
                  {
                    checked: newQuestions[5] === 3,
                    correct: true,
                    index: 3,
                    text:
                      lang === "EN"
                        ? "You would expect at least some of the loci to have the same allele for the two clones, so most likely at least some will have a single allele."
                        : lang === "FR"
                        ? "Vous vous attendriez à ce qu'au moins certains des loci aient le même allèle pour les deux clones, donc très probablement au moins certains auront un seul allèle."
                        : lang === "PT"
                        ? "Você esperaria que pelo menos alguns dos loci tivessem o mesmo alelo para os dois clones, então, provavelmente, pelo menos alguns terão um único alelo."
                        : "",

                    // text: "You would expect at least some of the loci to have the same allele for the two clones, so most likely at least some will have a single allele.",
                  },
                  {
                    checked: newQuestions[5] === 4,
                    correct: false,
                    index: 4,
                    text:
                      lang === "EN"
                        ? "The likelihood of having two clones with different SNPs at each locus is low because each SNP occurs independently and randomly."
                        : lang === "FR"
                        ? "La probabilité d'avoir deux clones avec des SNP différents à chaque locus est faible car chaque SNP se produit indépendamment et aléatoirement."
                        : lang === "PT"
                        ? "A probabilidade de ter dois clones com SNPs diferentes em cada locus é baixa porque cada SNP ocorre de forma independente e aleatória."
                        : "",

                    // text: "The likelihood of having two clones with different SNPs at each locus is low because each SNP occurs independently and randomly.",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  setNewQuestions({
                    ...newQuestions,
                    [questionIdx]:
                      newQuestions[questionIdx] === answerIdx
                        ? null
                        : answerIdx,
                  });
                }}
                questionIdx={5}
                hasAnswer={newQuestions[5] === 3}
                // headerText={
                //   "5. Why is it extremely unlikely that you would have 2 clones when all of your 12 loci are heterozygous?"
                // }
                headerText={
                  lang === "EN"
                    ? "5. Why is it extremely unlikely that you would have 2 clones when all of your 12 loci are heterozygous?"
                    : lang === "FR"
                    ? "5. Pourquoi est-il extrêmement improbable que vous ayez 2 clones alors que les 12 de vos loci sont hétérozygotes ?"
                    : lang === "PT"
                    ? "5. Por que é extremamente improvável que você tenha 2 clones quando todos os seus 12 loci são heterozigotos?"
                    : ""
                }
                // headerText={
                //   "5. Why is it extremely unlikely that you would have 2 clones when all of your 12 loci are heterozygous?"
                // }
              />
              <QuestionResponseText
                visible={newQuestions[5] === 3}
                // text={`With two perfectly balanced SNPs as in this exercise, there is a 50/50 chance you will get the reference or alternate allele. Therefore, getting a heterozygous SNP genotype with two clones is like flipping two coins and getting heads on one and tails on the other - this will happen 50% of the time. Doing the two-coin flip and having them be different from each other 12 times in a row is very unlikely (<0.02% chance)! The same is true for 12 loci - you would expect somewhere around 6 of them to be heterozygous, maybe a few more, maybe a few less, but very unlikely to be all 12.`}
                text={
                  lang === "EN"
                    ? `With two perfectly balanced SNPs as in this exercise, there is a 50/50 chance you will get the reference or alternate allele. Therefore, getting a heterozygous SNP genotype with two clones is like flipping two coins and getting heads on one and tails on the other - this will happen 50% of the time. Doing the two-coin flip and having them be different from each other 12 times in a row is very unlikely (<0.02% chance)! The same is true for 12 loci - you would expect somewhere around 6 of them to be heterozygous, maybe a few more, maybe a few less, but very unlikely to be all 12.`
                    : lang === "FR"
                    ? `Avec deux SNP parfaitement équilibrés comme dans cet exercice, il y a une chance de 50/50 que vous obteniez l'allèle de référence ou l'allèle alternatif. Par conséquent, obtenir un génotype SNP hétérozygote avec deux clones revient à lancer deux pièces et à obtenir pile sur l'une et face sur l'autre - cela se produira 50 % du temps. Faire le lancer de deux pièces et les avoir différentes l'une de l'autre 12 fois de suite est très improbable (moins de 0,02 % de chances) ! Il en va de même pour 12 loci : vous vous attendriez à ce qu'environ 6 d'entre eux soient hétérozygotes, peut-être un peu plus, peut-être un peu moins, mais il est très improbable qu'ils soient tous les 12.`
                    : lang === "PT"
                    ? `Com dois SNPs perfeitamente balanceados como neste exercício, há uma chance de 50/50 de você obter o alelo de referência ou o alelo alternativo. Portanto, obter um genótipo SNP heterozigoto com dois clones é como jogar duas moedas e obter cara em uma e coroa na outra - isso acontecerá 50% das vezes. Fazer o lançamento de duas moedas e tê-las diferentes uma da outra 12 vezes seguidas é muito improvável (menos de 0,02% de chance)! O mesmo vale para 12 loci - you would expect somewhere around 6 of them to be heterozygous, maybe a few more, maybe a few less, but very unlikely to be all 12.`
                    : ""
                }
                // text={`With two perfectly balanced SNPs as in this exercise, there is a 50/50 chance you will get the reference or alternate allele. Therefore, getting a heterozygous SNP genotype with two clones is like flipping two coins and getting heads on one and tails on the other - this will happen 50% of the time. Doing the two-coin flip and having them be different from each other 12 times in a row is very unlikely (<0.02% chance)! The same is true for 12 loci - you would expect somewhere around 6 of them to be heterozygous, maybe a few more, maybe a few less, but very unlikely to be all 12.`}
              />
            </div>
          )}
          {newQuestions[5] === 3 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[6] === 1,
                    correct: true,
                    index: 1,
                    // text: "Yes",
                    text: lang === "EN" ? "Yes" : lang === "FR" ? "Oui" : "Sim",
                  },
                  {
                    checked: newQuestions[6] === 2,
                    correct: false,
                    index: 2,
                    // text: "No",
                    text: lang === "EN" ? "No" : lang === "FR" ? "Non" : "Não",
                    // text: "No",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  setNewQuestions({
                    ...newQuestions,
                    [questionIdx]:
                      newQuestions[questionIdx] === answerIdx
                        ? null
                        : answerIdx,
                  });
                }}
                questionIdx={6}
                hasAnswer={newQuestions[6] === 1}
                // headerText={
                //   "6. Would you expect to get any heterozygous loci when you genotype a control containing 4 clones?"
                // }
                headerText={
                  lang === "EN"
                    ? "6. Would you expect to get any heterozygous loci when you genotype a control containing 4 clones?"
                    : lang === "FR"
                    ? "6. Vous attendriez-vous à obtenir des loci hétérozygotes lorsque vous génotypez un contrôle contenant 4 clones ?"
                    : lang === "PT"
                    ? "6. Você esperaria obter algum loci heterozigoto ao genotipar um controle contendo 4 clones?"
                    : ""
                }
                // headerText={
                //   "6. Would you expect to get any heterozygous loci when you genotype a control containing 4 clones?"
                // }
              />
              <QuestionResponseText
                visible={newQuestions[6] === 1}
                // text={`It is very likely, particularly in this scenario where you know the alleles are perfectly balanced. You are likely to get at least some loci where  you have at least one of each allele.`}
                text={
                  lang === "EN"
                    ? `It is very likely, particularly in this scenario where you know the alleles are perfectly balanced. You are likely to get at least some loci where  you have at least one of each allele.`
                    : lang === "FR"
                    ? `C'est très probable, en particulier dans ce scénario où vous savez que les allèles sont parfaitement équilibrés. Vous êtes susceptible d'obtenir au moins certains loci où vous avez au moins un de chaque allèle.`
                    : lang === "PT"
                    ? `É muito provável, particularmente neste cenário em que você sabe que os alelos são perfeitamente balanceados. É provável que você obtenha pelo menos alguns loci onde você tem pelo menos um de cada alelo.`
                    : ""
                }
                // text={`It is very likely, particularly in this scenario where you know the alleles are perfectly balanced. You are likely to get at least some loci where  you have at least one of each allele.`}
              />
            </div>
          )}
          {newQuestions[6] === 1 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[7] === 1,
                    correct: true,
                    index: 1,
                    // text: "Yes - but exceedingly unlikely!",
                    text:
                      lang === "EN"
                        ? "Yes - but exceedingly unlikely!"
                        : lang === "FR"
                        ? "Oui - mais extrêmement improbable !"
                        : lang === "PT"
                        ? "Sim - mas extremamente improvável!"
                        : "",
                    // text: "Yes - but exceedingly unlikely!",
                  },
                  {
                    checked: newQuestions[7] === 2,
                    correct: false,
                    index: 2,
                    // text: "No",
                    text:
                      lang === "EN"
                        ? "No"
                        : lang === "FR"
                        ? "Non"
                        : lang === "PT"
                        ? "Não"
                        : "",
                    // text: "No",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  setNewQuestions({
                    ...newQuestions,
                    [questionIdx]:
                      newQuestions[questionIdx] === answerIdx
                        ? null
                        : answerIdx,
                  });
                }}
                questionIdx={7}
                hasAnswer={newQuestions[7] === 1}
                // headerText={
                //   "7. Is it possible that you could genotype a control containing 4 clones but get no heterozygous loci using 12 perfectly balanced SNPs?"
                // }
                headerText={
                  lang === "EN"
                    ? "7. Is it possible that you could genotype a control containing 4 clones but get no heterozygous loci using 12 perfectly balanced SNPs?"
                    : lang === "FR"
                    ? "7. Est-il possible que vous puissiez génotyper un contrôle contenant 4 clones mais n'obtenir aucun locus hétérozygote en utilisant 12 SNP parfaitement équilibrés ?"
                    : lang === "PT"
                    ? "7. É possível que você possa genotipar um controle contendo 4 clones, mas não obter nenhum loci heterozigoto usando 12 SNPs perfeitamente balanceados?"
                    : ""
                }
                // headerText={
                //   "7. Is it possible that you could genotype a control containing 4 clones but get no heterozygous loci using 12 perfectly balanced SNPs?"
                // }
              />
              <QuestionResponseText
                visible={newQuestions[7] === 1}
                // text={`It is possible, but very unlikely. To NOT get any heterozygous loci, this would be like flipping four coins and having them all land heads or all land tails, then doing that 12 times in a row!`}
                text={
                  lang === "EN"
                    ? `It is possible, but very unlikely. To NOT get any heterozygous loci, this would be like flipping four coins and having them all land heads or all land tails, then doing that 12 times in a row!`
                    : lang === "FR"
                    ? `C'est possible, mais très improbable. Pour ne PAS obtenir de loci hétérozygotes, ce serait comme lancer quatre pièces et les avoir toutes atterrir sur pile ou toutes atterrir sur face, puis faire cela 12 fois de suite !`
                    : lang === "PT"
                    ? `É possível, mas muito improvável. Para NÃO obter nenhum loci heterozigoto, isso seria como jogar quatro moedas e tê-las todas caindo cara ou todas caindo coroa, e então fazer isso 12 vezes seguidas!`
                    : ""
                }
                // text={`It is possible, but very unlikely. To NOT get any heterozygous loci, this would be like flipping four coins and having them all land heads or all land tails, then doing that 12 times in a row!`}
              />
            </div>
          )}
          {newQuestions[7] === 1 && (
            <div className="mt-8 flex flex-col gap-4">
              <KnowledgeCheckQuestion
                style={{
                  animationDelay: `1000ms`,
                }}
                triggerEnd
                answers={[
                  {
                    checked: newQuestions[8] === 1,
                    correct: true,
                    index: 1,
                    // text: "The higher the MOI, the higher the proportion of loci that are heterozygous.",
                    text:
                      lang === "EN"
                        ? "The higher the MOI, the higher the proportion of loci that are heterozygous."
                        : lang === "FR"
                        ? "Plus le MOI est élevé, plus la proportion de loci hétérozygotes est élevée."
                        : "Quanto maior o MOI, maior a proporção de loci heterozigotos.",
                  },
                  {
                    checked: newQuestions[8] === 2,
                    correct: false,
                    index: 2,
                    // text: "The lower the MOI, the higher the proportion of loci that are heterozygous.",
                    text:
                      lang === "EN"
                        ? "The lower the MOI, the higher the proportion of loci that are heterozygous."
                        : lang === "FR"
                        ? "Plus le MOI est faible, plus la proportion de loci hétérozygotes est élevée."
                        : "Quanto menor o MOI, maior a proporção de loci heterozigotos.",
                  },
                  {
                    checked: newQuestions[8] === 3,
                    correct: false,
                    index: 3,
                    text:
                      lang === "EN"
                        ? "MOI and the proportion of heterozygous loci are not related."
                        : lang === "FR"
                        ? "Le MOI et la proportion de loci hétérozygotes ne sont pas liés."
                        : "MOI e a proporção de loci heterozigotos não estão relacionados.",

                    // text: "MOI and the proportion of heterozygous loci are not related.",
                  },
                ]}
                classNames={{
                  headerText: "mb-4",
                  answersContainer: "grid gap-8 md:gap-4",
                  answers: "w-4 md:w-3 lg:w-4",
                  container: "fadeIn1000",
                }}
                callback={(questionIdx, answerIdx) => {
                  setNewQuestions({
                    ...newQuestions,
                    [questionIdx]:
                      newQuestions[questionIdx] === answerIdx
                        ? null
                        : answerIdx,
                  });
                }}
                questionIdx={8}
                hasAnswer={newQuestions[8] === 1}
                // headerText={
                //   "8. What do you notice about the relationship between MOI and the number of loci that are heterzygous?"
                // }
                headerText={
                  lang === "EN"
                    ? "8. What do you notice about the relationship between MOI and the number of loci that are heterzygous?"
                    : lang === "FR"
                    ? "8. Que remarquez-vous à propos de la relation entre le MOI et le nombre de loci hétérozygotes ?"
                    : "8. O que você percebe sobre a relação entre MOI e o número de loci heterozigotos?"
                }
              />
              <QuestionResponseText
                visible={newQuestions[8] === 1}
                content={
                  <div>
                    <div
                      className={
                        "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
                      }
                    >
                      {lang === "EN" ? (
                        <p>
                          You should have noticed that the higher the MOI, the
                          higher proportion of loci that are heterozygous. The
                          exact proportion you would expect for a given MOI will
                          depend on how diverse each SNP is in the population
                          and to some extent on random variation. In this
                          example, each of the 12 SNPs is perfectly balanced
                          like a coin, maximizing diversity.
                        </p>
                      ) : lang === "FR" ? (
                        <p>
                          Vous auriez dû remarquer que plus le MOI est élevé,
                          plus la proportion de loci hétérozygotes est élevée.
                          La proportion exacte à laquelle vous vous attendriez
                          pour un MOI donné dépendra de la diversité de chaque
                          SNP dans la population et, dans une certaine mesure,
                          de la variation aléatoire. Dans cet exemple, chacun
                          des 12 SNP est parfaitement équilibré comme une pièce
                          de monnaie, maximisant la diversité.
                        </p>
                      ) : (
                        <p>
                          Você deve ter notado que quanto maior o MOI, maior a
                          proporção de loci heterozigotos. A proporção exata que
                          você esperaria para um determinado MOI dependerá de
                          quão diverso cada SNP é na população e, em certa
                          medida, da variação aleatória. Neste exemplo, cada um
                          dos 12 SNPs é perfeitamente balanceado como uma moeda,
                          maximizando a diversidade.
                        </p>
                      )}
                    </div>
                    <ImageContainer
                      className="border-x-[32px] border-x-interactiveBlue/10 dark:border-zinc-900/50"
                      id=""
                      label={
                        lang === "EN"
                          ? "Heterozygous Allele Distribution"
                          : lang === "FR"
                          ? "Distribution des allèles hétérozygotes"
                          : lang === "PT"
                          ? "Distribuição dos alelos heterozigotos"
                          : ""
                      }
                      path="/InteractiveAssets/M2_sluething_histogram_number_hetero_SNPs_MOI2to4.svg"
                    />
                    <div
                      className={
                        "text-pretty bg-interactiveBlue/10 p-4 leading-[23px] md:p-6 md:px-8 dark:bg-zinc-900/50 dark:text-emerald-400"
                      }
                    >
                      {lang === "EN" ? (
                        <p>
                          The histogram shows the expected number of
                          heterozygous loci for different MOI with 12 perfectly
                          balanced SNPs. In practice, most SNPs are not
                          perfectly diverse, and diversity for a given SNP will
                          likely vary in different settings, even within a
                          country. The more SNPs you have and the more diverse
                          each one is, the more precisely you can estimate MOI.
                        </p>
                      ) : lang === "FR" ? (
                        <p>
                          L'histogramme montre le nombre attendu de loci
                          hétérozygotes pour différents MOI avec 12 SNP
                          parfaitement équilibrés. En pratique, la plupart des
                          SNP ne sont pas parfaitement diversifiés, et la
                          diversité pour un SNP donné variera probablement dans
                          différents contextes, même au sein d'un pays. Plus
                          vous avez de SNP et plus chacun d'eux est diversifié,
                          plus vous pouvez estimer précisément le MOI.
                        </p>
                      ) : (
                        <p>
                          O histograma mostra o número esperado de loci
                          heterozigotos para diferentes MOI com 12 SNPs
                          perfeitamente balanceados. Na prática, a maioria dos
                          SNPs não são perfeitamente diversos, e a diversidade
                          para um determinado SNP provavelmente variará em
                          diferentes configurações, mesmo dentro de um país.
                          Quanto mais SNPs você tiver e quanto mais diverso cada
                          um for, mais precisamente você poderá estimar o MOI.
                        </p>
                      )}
                    </div>
                  </div>
                }
                // text={` You should have noticed that the higher the MOI, the higher proportion of loci that are heterozygous. The exact proportion you would expect for a given MOI will depend on how diverse each SNP is in the population and to some extent on random variation. In this example, each of the 12 SNPs is perfectly balanced like a coin, maximizing diversity. The histogram shows the expected number of heterozygous loci for different MOI with 12 perfectly balanced SNPs. In practice, most SNPs are not perfectly diverse, and diversity for a given SNP will likely vary in different settings, even within a country. The more SNPs you have and the more diverse each one is, the more precisely you can estimate MOI. `}
              />
            </div>
          )}
        </div>
      }
    />
  );
}
