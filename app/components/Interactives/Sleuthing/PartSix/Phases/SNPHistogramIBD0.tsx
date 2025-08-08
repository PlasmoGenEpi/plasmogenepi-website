import InteractivePrimaryLayout from "@/app/components/Interactives/Shared/InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
import KnowledgeCheckQuestion from "@/app/components/Interactives/Shared/KnowledgeChecks/KnowledgeCheckQuestion";
import FormHeader from "@/app/components/Interactives/Shared/misc/FormHeader";
import ImageContainer from "@/app/components/Interactives/Shared/misc/ImageContainer";
import QuestionResponseText from "@/app/components/Interactives/Shared/misc/QuestionResponseText";
import StandardLayout from "@/app/components/Interactives/Shared/misc/StandardLayout";
import {
  partSixCompletionAtom,
  partSixSNPHistogramQuestionsAtom,
  phase2Atom,
  phaseAtom,
} from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { RESET } from "jotai/utils";
import Image from "next/image";
import { useEffect } from "react";

export default function SNPHistogramIBD0({
  lang,
}: {
  lang: "EN" | "FR" | "PT";
}) {
  const [questions, setQuestions] = useAtom(partSixSNPHistogramQuestionsAtom);
  const [phase, setPhase] = useAtom(phase2Atom);
  const [completion, setCompletion] = useAtom(partSixCompletionAtom);

  // useEffect(() => {
  //   setCompletion({ ...completion, 8: false, 9: false, 10: false });
  //   setQuestions(RESET);
  // }, [setQuestions]);

  return (
    <InteractivePrimaryLayout
      leftHeader={
        lang === "EN"
          ? `Questions`
          : lang === "FR"
          ? `Questions`
          : lang === "PT"
          ? `Perguntas`
          : ""
      }
      leftContent={
        <div>
          {phase === 8 && (
            <div>
              <KnowledgeCheckQuestion
                callback={(questionIdx, answerIdx) => {
                  if (questions[1] === answerIdx) {
                    setQuestions({ ...questions, 1: null });
                  } else {
                    setQuestions({ ...questions, 1: answerIdx });
                  }
                }}
                hasAnswer={questions[1] === 1}
                classNames={{
                  answersContainer:
                    "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
                }}
                headerText={
                  lang === "EN"
                    ? "Based on this, do you think it is likely that all 12 loci would match if parasites are unrelated?"
                    : lang === "FR"
                    ? "Sur la base de cela, pensez-vous qu'il est probable que les 12 loci correspondent si les parasites ne sont pas apparentés ?"
                    : lang === "PT"
                    ? "Com base nisto, acha provável que todos os 12 loci correspondam se os parasitas não estiverem relacionados?"
                    : ""
                }
                questionIdx={1}
                answers={[
                  {
                    checked: questions[1] === 0,
                    correct: false,
                    index: 0,
                    text:
                      lang === "EN"
                        ? "Yes"
                        : lang === "FR"
                        ? "Oui"
                        : lang === "PT"
                        ? "Sim"
                        : "",
                  },
                  {
                    checked: questions[1] === 1,
                    correct: true,
                    index: 1,
                    text:
                      lang === "EN"
                        ? "No"
                        : lang === "FR"
                        ? "Non"
                        : lang === "PT"
                        ? "Não"
                        : "",
                  },
                ]}
              />
              <QuestionResponseText
                className="mt-8"
                complete={completion[phase] || false}
                trigger={questions[1] === 1}
                visible={questions[1] === 1}
                text={
                  lang === "EN"
                    ? `It is very unlikely that they would all match by
            chance; the probability is the same as none of them matching,
            around 0.02%. It also unlikely ( <1% chance) that 11 of the
            12 would match.`
                    : lang === "FR"
                    ? `Il est très improbable qu'ils correspondent tous par hasard ; la probabilité est la même que celle qu'aucun d'entre eux ne corresponde, soit environ 0,02 %. Il est également improbable (probabilité < 1 %) que 11 des 12 loci correspondent.`
                    : lang === "PT"
                    ? `É muito improvável que todos correspondam por acaso; a probabilidade é a mesma que a de nenhum deles corresponder, cerca de 0,02%. Também é improvável (probabilidade < 1%) que 11 dos 12 loci correspondam.`
                    : ""
                }
              />
            </div>
          )}
          {phase === 9 && (
            <div className={``}>
              <KnowledgeCheckQuestion
                callback={(questionIdx, answerIdx) => {
                  if (questions[2] === answerIdx) {
                    setQuestions({ ...questions, 2: null });
                  } else {
                    setQuestions({ ...questions, 2: answerIdx });
                  }
                }}
                hasAnswer={questions[2] === 0}
                classNames={{
                  answersContainer:
                    "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
                }}
                headerText={
                  lang === "EN"
                    ? "This scenario is somewhat optimistic in that the SNPs are perfectly diverse. In a more realistic situation if SNP allele frequencies were not actually 50/50 but e.g. 80/20 would we expect more or fewer matches?"
                    : lang === "FR"
                    ? "Ce scénario est quelque peu optimiste dans la mesure où les SNP sont parfaitement diversifiés. Dans une situation plus réaliste, si les fréquences des allèles SNP n'étaient pas réellement de 50/50 mais par exemple de 80/20, s'attendrait-on à plus ou moins de correspondances ?"
                    : lang === "PT"
                    ? "Este cenário é um tanto otimista, pois os SNPs são perfeitamente diversos. Numa situação mais realista, se as frequências dos alelos SNP não fossem realmente de 50/50, mas, por exemplo, de 80/20, esperaríamos mais ou menos correspondências?"
                    : ""
                }
                questionIdx={1}
                answers={[
                  {
                    checked: questions[2] === 0,
                    correct: true,
                    index: 0,
                    text:
                      lang === "EN"
                        ? "More matches"
                        : lang === "FR"
                        ? "Plus de correspondances"
                        : lang === "PT"
                        ? "Mais correspondências"
                        : "More matches",
                  },
                  {
                    checked: questions[2] === 1,
                    correct: false,
                    index: 1,
                    text:
                      lang === "EN"
                        ? "Fewer matches"
                        : lang === "FR"
                        ? "Moins de correspondances"
                        : lang === "PT"
                        ? "Menos correspondências"
                        : "Fewer matches",
                  },
                ]}
              />
              <QuestionResponseText
                className="mt-8"
                complete={completion[phase] || false}
                trigger={questions[2] === 0}
                visible={questions[2] === 0}
                text={
                  lang === "EN"
                    ? `
                   You would expect more matches since there is less
                      diversity. The more common allele would be more likely to
                      be present in both parasites, and so they would match more
                      often, about 70% of the time. For the 80/20 case, the
                      probability of seeing different numbers of matches is
                      shown in the graphic.`
                    : lang === "FR"
                    ? `
                   Vous vous attendriez à plus de correspondances car il y a moins
                      de diversité. L'allèle le plus courant serait plus susceptible
                      d'être présent dans les deux parasites, et ils correspondraient
                      donc plus souvent, environ 70 % du temps. Pour le cas 80/20, la
                      probabilité de voir différents nombres de correspondances est
                      indiquée dans le graphique.`
                    : lang === "PT"
                    ? `
                   Esperaria mais correspondências, uma vez que há menos
                      diversidade. O alelo mais comum seria mais provável de estar
                      presente em ambos os parasitas e, portanto, corresponderiam com
                      mais frequência, cerca de 70% das vezes. Para o caso de 80/20, a
                      probabilidade de ver diferentes números de correspondências é
                      mostrada no gráfico.`
                    : ""
                }
              />
            </div>
          )}
          {phase === 10 && (
            <div>
              <KnowledgeCheckQuestion
                classNames={{
                  answersContainer:
                    "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
                }}
                answers={[
                  {
                    checked: questions[3] === 0,
                    correct: true,
                    index: 0,
                    text:
                      lang === "EN"
                        ? "Harder"
                        : lang === "FR"
                        ? "Plus difficile"
                        : lang === "PT"
                        ? "Mais difícil"
                        : "Harder",
                  },
                  {
                    checked: questions[3] === 1,
                    correct: false,
                    index: 1,
                    text:
                      lang === "EN"
                        ? "Easier"
                        : lang === "FR"
                        ? "Plus facile"
                        : lang === "PT"
                        ? "Mais fácil"
                        : "Easier",
                  },
                ]}
                callback={(questionIdx, answerIdx) => {
                  console.log("called");
                  if (questions[3] === answerIdx) {
                    setQuestions({ ...questions, 3: null });
                  } else {
                    setQuestions({ ...questions, 3: answerIdx });
                  }
                }}
                hasAnswer={questions[3] === 0}
                headerText={
                  lang === "EN"
                    ? "Do you think this higher allele frequency would make it harder or easier to distinguish related from unrelated parasites?"
                    : lang === "FR"
                    ? "Pensez-vous que cette fréquence allélique plus élevée rendrait plus difficile ou plus facile la distinction entre les parasites apparentés et non apparentés ?"
                    : lang === "PT"
                    ? "Acha que esta frequência de alelos mais elevada tornaria mais difícil ou mais fácil distinguir parasitas relacionados de não relacionados?"
                    : "Do you think this higher allele frequency would make it harder or easier to distinguish related from unrelated parasites?"
                }
                questionIdx={3}
              />
              <QuestionResponseText
                className="mt-8"
                complete={completion[phase] || false}
                trigger={questions[3] === 0}
                visible={questions[3] === 0}
                text={
                  lang === "EN"
                    ? `Correct: This is because there will be more matches when
            parasites are unrelated, so there will less of a difference in
            IBS between related and unrelated parasites. They will all have
            a fairly high number of matches. For example, 12/12 matches (IBS
            of 1.0) is still uncommon but no longer extremely rare for
            completely unrelated parasites, at around 1%. Notably, over 20% of comparisons between unrelated parasites will still have 10/12 or more matches (IBS>0.8)!`
                    : lang === "FR"
                    ? `Correct : C'est parce qu'il y aura plus de correspondances lorsque
            les parasites ne sont pas apparentés, il y aura donc moins de différence
            d'IBS entre les parasites apparentés et non apparentés. Ils auront tous
            un nombre assez élevé de correspondances. Par exemple, 12/12 correspondances (IBS
            de 1,0) est toujours rare mais plus extrêmement rare pour
            les parasites complètement non apparentés, à environ 1 %, et plus de 20 % des
            comparaisons auront 10/12 correspondances ou plus (IBS > 0,8) !`
                    : lang === "PT"
                    ? `Correto: Isto porque haverá mais correspondências quando
            os parasitas não estiverem relacionados, pelo que haverá menos diferença
            no SCI entre parasitas relacionados e não relacionados. Todos eles terão
            um número bastante elevado de correspondências. Por exemplo, 12/12 correspondências (SCI
            de 1,0) ainda é incomum, mas já não é extremamente raro para
            parasitas completamente não relacionados, em cerca de 1%! Notavelmente, mais de 20% das comparações entre parasitas não relacionados ainda terão 10/12 ou mais correspondências (SCI>0,8)!`
                    : `Correct: This is because there will be more matches when
            parasites are unrelated, so there will less of a difference in
            IBS between related and unrelated parasites. They will all have
            a fairly high number of matches. For example, 12/12 matches (IBS
            of 1.0) is still uncommon but no longer extremely rare for
            completely unrelated parasites, at around 1%. Notably, over 20% of comparisons between unrelated parasites will still have 10/12 or more matches (IBS>0.8)!`
                }
              />
            </div>
          )}
        </div>
      }
      rightHeader={
        lang === "EN"
          ? `IBS Probability`
          : lang === "FR"
          ? `Probabilité IBS`
          : lang === "PT"
          ? `Probabilidade de SCI`
          : "IBS Probability"
      }
      rightContent={
        <div className={`${!completion[phase] ? "fadeIn500" : ""}`}>
          <div
            className={
              (phase === 8 && questions[1] === 1) ||
              (phase >= 9 && questions[2] === 0)
                ? "border-2 border-interactiveBlue"
                : ""
            }
          >
            {phase === 8 && questions[1] === 1 ? (
              <ImageContainer
                className="''500"
                // path="/InteractiveAssets/M5_sluething_histogram_8020SNPs_MOI1_IBD0.svg"
                path="/InteractiveAssets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                label={
                  lang === "EN"
                    ? "SNP Match Probability - 50/50 Allele Distribution"
                    : lang === "FR"
                    ? "Probabilité de correspondance SNP - Distribution des allèles 50/50"
                    : lang === "PT"
                    ? "Probabilidade de Correspondência SNP - Distribuição de Alelos 50/50"
                    : "SNP Match Probability - 50/50 Allele Distribution"
                }
                id="50-50-snp"
              />
            ) : phase >= 9 && questions[2] === 0 ? (
              <ImageContainer
                className={`''500`}
                path="/InteractiveAssets/M5_sluething_histogram_8020SNPs_MOI1_IBD0.svg"
                label={
                  lang === "EN"
                    ? "SNP Match Probability - 80/20 Allele Distribution"
                    : lang === "FR"
                    ? "Probabilité de correspondance SNP - Distribution des allèles 80/20"
                    : lang === "PT"
                    ? "Probabilidade de Correspondência SNP - Distribuição de Alelos 80/20"
                    : "SNP Match Probability - 80/20 Allele Distribution"
                }
                id="80-20-snp"
              />
            ) : null}
          </div>
        </div>
      }
    />
  );

  return (
    <StandardLayout>
      <div>
        <FormHeader text={`Questions`} />

        {phase === 8 && (
          <div>
            <KnowledgeCheckQuestion
              callback={(questionIdx, answerIdx) => {
                if (questions[1] === answerIdx) {
                  setQuestions({ ...questions, 1: null });
                } else {
                  setQuestions({ ...questions, 1: answerIdx });
                }
              }}
              hasAnswer={questions[1] === 1}
              classNames={{
                answersContainer: "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
              }}
              headerText="Based on this, do you think it is likely that all 12 loci would match if parasites are unrelated?"
              questionIdx={1}
              answers={[
                {
                  checked: questions[1] === 0,
                  correct: false,
                  index: 0,
                  text: "Yes",
                },
                {
                  checked: questions[1] === 1,
                  correct: true,
                  index: 1,
                  text: "No",
                },
              ]}
            />
            <QuestionResponseText
              className="mt-8"
              complete={completion[phase] || false}
              trigger={questions[1] === 1}
              visible={questions[1] === 1}
              text={`It is very unlikely that they would all match by
                chance; the probability is the same as none of them matching,
                around 0.02%. It also unlikely ( <1% chance) that 11 of the
                12 would match.`}
            />
          </div>
        )}
        {phase === 9 && (
          <div className="''500">
            <KnowledgeCheckQuestion
              callback={(questionIdx, answerIdx) => {
                if (questions[2] === answerIdx) {
                  setQuestions({ ...questions, 2: null });
                } else {
                  setQuestions({ ...questions, 2: answerIdx });
                }
              }}
              hasAnswer={questions[2] === 0}
              classNames={{
                answersContainer: "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
              }}
              headerText="This scenario is somewhat optimistic in that the SNPs are perfectly diverse. In a more realistic situation if SNP allele frequencies were not actually 50/50 but e.g. 80/20 would we expect more or fewer matches?"
              questionIdx={1}
              answers={[
                {
                  checked: questions[2] === 0,
                  correct: true,
                  index: 0,
                  text: "More matches",
                },
                {
                  checked: questions[2] === 1,
                  correct: false,
                  index: 1,
                  text: "Fewer matches",
                },
              ]}
            />
            <QuestionResponseText
              className="mt-8"
              complete={completion[phase] || false}
              trigger={questions[2] === 0}
              visible={questions[2] === 0}
              content={
                <div className="bg-primaryBlue/10 p-4 [fontSize:15px] md:p-6 md:px-8">
                  <p className="text-sm">
                    You would expect more matches since there is less diversity.
                    The more common allele would be more likely to be present in
                    both parasites, and so they would match more often, about
                    70% of the time. For the 80/20 case, the probability of
                    seeing different numbers of matches is shown{" "}
                    <span className="hidden md:inline-block">to the left.</span>{" "}
                    <span className="inline-block md:hidden">above.</span>
                  </p>
                </div>
              }
            />
          </div>
        )}
        {phase === 10 && (
          <div>
            <KnowledgeCheckQuestion
              classNames={{
                answersContainer: "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
              }}
              answers={[
                {
                  checked: questions[3] === 0,
                  correct: true,
                  index: 0,
                  text: "Harder",
                },
                {
                  checked: questions[3] === 1,
                  correct: false,
                  index: 1,
                  text: "Easier",
                },
              ]}
              callback={(questionIdx, answerIdx) => {
                console.log("called");
                if (questions[3] === answerIdx) {
                  setQuestions({ ...questions, 3: null });
                } else {
                  setQuestions({ ...questions, 3: answerIdx });
                }
              }}
              hasAnswer={questions[3] === 0}
              headerText="Do you think this higher allele frequency would make it harder or easier to distinguish related from unrelated parasites?"
              questionIdx={3}
            />
            <QuestionResponseText
              className="mt-8"
              complete={completion[phase] || false}
              trigger={questions[3] === 0}
              visible={questions[3] === 0}
              text={` Correct: This is because there will be more matches when
                parasites are unrelated, so there will less of a difference in
                IBS between related and unrelated parasites. They will all have
                a fairly high number of matches. For example, 12/12 matches (IBS
                of 1.0) is still uncommon but no longer extremely rare for
                completely unrelated parasites, at around 1%, and over 20% of
                comparisons will have 10/12 or more matches (IBS>0.8)!`}
            />
            {/* <div
              className={`${questions[3] === 0 ? "''500" : "invisible"} mt-8 bg-primaryBlue/10 p-4 md:p-8`}
            >
              <p className="text-sm">
                Correct: This is because there will be more matches when
                parasites are unrelated, so there will less of a difference in
                IBS between related and unrelated parasites. They will all have
                a fairly high number of matches. For example, 12/12 matches (IBS
                of 1.0) is still uncommon but no longer extremely rare for
                completely unrelated parasites, at around 1%, and over 20% of
                comparisons will have 10/12 or more matches (IBS&gt;0.8)!
              </p>
            </div> */}
          </div>
        )}
      </div>
      <div>
        <FormHeader text={`IBS Probability`} />
        <div>
          <div
            className={
              (phase === 8 && questions[1] === 1) ||
              (phase >= 9 && questions[2] === 0)
                ? "border-primaryBlue border-2"
                : ""
            }
          >
            {phase === 8 && questions[1] === 1 ? (
              <ImageContainer
                className="''500"
                path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
                label="SNP Match Probability - 50/50 Allele Distribution"
                id="50-50-snp"
              />
            ) : phase >= 9 && questions[2] === 0 ? (
              <ImageContainer
                className={`''500`}
                path="/assets/M5_sluething_histogram_8020SNPs_MOI1_IBD0.svg"
                label="SNP Match Probability - 80/20 Allele Distribution"
                id="80-20-snp"
              />
            ) : null}
          </div>
          {/* {phase >= 9 && questions[2] === 0 && (
            <ImageContainer
              className={`''500 border-2 border-primaryBlue`}
              path="/assets/M5_sluething_histogram_8020SNPs_MOI1_IBD0.svg"
              label="SNP Match Probability - 80/20 Allele Distribution"
              id="80-20-snp"
            />
          )}
          {phase === 8 && questions[1] === 1 && (
            <ImageContainer
              className="''500 border-2 border-primaryBlue"
              path="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
              label="SNP Match Probability - 50/50 Allele Distribution"
              id="50-50-snp"
            />
          )} */}
        </div>
      </div>
    </StandardLayout>
  );

  return (
    <StandardLayout>
      <div>
        <div className="mb-12 text-center text-xl font-bold md:text-left">
          <h2>IBS Probability</h2>
        </div>
        <div className="text-center">
          <label>50/50 allele frequency</label>
          <Image
            height={400}
            width={600}
            alt="SNP IBD 50% distributionw diagram"
            src="/assets/M5_sluething_histogram_SNPs_MOI1_IBD0.svg"
          ></Image>
        </div>
        <div
          className={`${
            questions[2] === 0 ? "''500 hidden md:block" : "hidden"
          } mt-24 text-center`}
        >
          <label>80/20 allele frequency</label>

          <Image
            height={400}
            width={600}
            alt="SNP IBD 50% distributionw diagram"
            src="/assets/M5_sluething_histogram_8020SNPs_MOI1_IBD0.svg"
          ></Image>
        </div>
      </div>
      <div>
        <div className="mb-12 text-center text-xl font-bold md:text-left">
          <h2>Questions</h2>
        </div>
        <div className="flex flex-col gap-8">
          <KnowledgeCheckQuestion
            callback={(questionIdx, answerIdx) => {
              if (questions[1] === answerIdx) {
                setQuestions({ ...questions, 1: null });
              } else {
                setQuestions({ ...questions, 1: answerIdx });
              }
            }}
            hasAnswer={questions[1] === 1}
            classNames={{
              answersContainer: "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
            }}
            headerText="Based on this, do you think it is likely that all 12 loci would match if parasites are unrelated?"
            questionIdx={1}
            answers={[
              {
                checked: questions[1] === 0,
                correct: false,
                index: 0,
                text: "Yes",
              },
              {
                checked: questions[1] === 1,
                correct: true,
                index: 1,
                text: "No",
              },
            ]}
          />
          <div
            className={
              questions[1] !== 1
                ? "bg-primaryBlue/10  hidden  p-4 md:p-8"
                : "''500 bg-primaryBlue/10  p-4 md:p-8"
            }
          >
            <p>
              Correct: It is very unlikely that they would all match by chance;
              the probability is the same as none of them matching, around
              0.02%. It also unlikely ( &lt;1% chance) that 11 of the 12 would
              match.
            </p>
          </div>
          <div
            style={{
              animationDelay: "1000ms",
            }}
            className={`${questions[1] === 1 ? "''500" : "invisible"}`}
          >
            <KnowledgeCheckQuestion
              callback={(questionIdx, answerIdx) => {
                if (questions[2] === answerIdx) {
                  setQuestions({ ...questions, 2: null });
                } else {
                  setQuestions({ ...questions, 2: answerIdx });
                }
              }}
              hasAnswer={questions[2] === 0}
              classNames={{
                answersContainer: "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
              }}
              headerText="This scenario is somewhat optimistic in that the SNPs are perfectly diverse. In a more realistic situation if SNP allele frequencies were not actually 50/50 but e.g. 80/20 would we expect more or fewer matches?"
              questionIdx={1}
              answers={[
                {
                  checked: questions[2] === 0,
                  correct: true,
                  index: 0,
                  text: "More matches",
                },
                {
                  checked: questions[2] === 1,
                  correct: false,
                  index: 1,
                  text: "Fewer matches",
                },
              ]}
            />
            <div
              className={
                questions[2] !== 0
                  ? "bg-primaryBlue/10  invisible mt-8  p-4 md:p-8"
                  : "''500 bg-primaryBlue/10 mt-8  p-4 md:p-8"
              }
            >
              <p>
                You would expect more matches since there is less diversity. The
                more common allele would be more likely to be present in both
                parasites, and so they would match more often, about 70% of the
                time. For the 80/20 case, the probability of seeing different
                numbers of matches is shown here.
              </p>
            </div>
            <div
              className={`${
                questions[2] === 0 ? "" : "hidden"
              } mt-8 text-center md:hidden`}
            >
              <label>80/20 allele frequency</label>

              <Image
                height={400}
                width={600}
                alt="SNP IBD 50% distributionw diagram"
                src="/assets/M5_sluething_histogram_8020SNPs_MOI1_IBD0.svg"
              ></Image>
            </div>
            <div
              style={{
                animationDelay: "1000ms",
              }}
              className={`${questions[2] === 0 ? "''500" : "hidden"} mt-8`}
            >
              <KnowledgeCheckQuestion
                classNames={{
                  answersContainer:
                    "mt-4 grid grid-cols-2 md:grid-cols-1 gap-2",
                }}
                answers={[
                  {
                    checked: questions[3] === 0,
                    correct: true,
                    index: 0,
                    text: "Harder",
                  },
                  {
                    checked: questions[3] === 1,
                    correct: false,
                    index: 1,
                    text: "Easier",
                  },
                ]}
                callback={(questionIdx, answerIdx) => {
                  console.log("called");
                  if (questions[3] === answerIdx) {
                    setQuestions({ ...questions, 3: null });
                  } else {
                    setQuestions({ ...questions, 3: answerIdx });
                  }
                }}
                hasAnswer={questions[3] === 0}
                headerText="Do you think this would make it harder or easier to distinguish related from unrelated parasites?"
                questionIdx={3}
              />
            </div>
            <div
              className={`${
                questions[3] === 0 ? "''500" : "invisible"
              } bg-primaryBlue/10 mt-8 p-4 md:p-8`}
            >
              <p>
                Correct: This is because there will be more matches when
                parasites are unrelated, so there will less of a difference in
                IBS between related and unrelated parasites. They will all have
                a fairly high number of matches. For example, 12/12 matches (IBS
                of 1.0) is still uncommon but no longer extremely rare for
                completely unrelated parasites, at around 1%, and over 20% of
                comparisons will have 10/12 or more matches (IBS&gt;0.8)!
              </p>
            </div>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}
