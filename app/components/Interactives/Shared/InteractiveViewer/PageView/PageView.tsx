import { useAtom } from "jotai";
import { InteractiveViewSettings } from "../InteractiveViewer";
import PartZero from "../../../Sleuthing/PartZero/PartZero";
import PartOne from "../../../Sleuthing/PartOne/PartOne";
import PartTwo from "../../../Sleuthing/PartTwo/PartTwo";
import PartThree from "../../../Sleuthing/PartThree/PartThree";
import PartFour from "../../../Sleuthing/PartFour/PartFour";
import PartFive from "../../../Sleuthing/PartFive/PartFive";
import StepSix from "../../../Sleuthing/StepSix/StepSix";
import InteractivePrompt from "../../misc/InteractivePrompt";
import Part2Intro from "../../../Sleuthing/Part2Intro/Part2Intro";
import PartSix from "../../../Sleuthing/PartSix/PartSix";
import PartSeven from "../../../Sleuthing/PartSeven/PartSeven";
import PartEight from "../../../Sleuthing/PartEight/PartEight";
import { ModuleCopyCode } from "../../Buttons/ModuleCopyCode";
// import PartOne from "@/app/components/Interactives/Sleuthing/PartOne/PartOne";
// import PartZero from "@/app/components/Interactives/Sleuthing/PartZero/PartZero";
// import PartTwo from "@/app/components/Interactives/Sleuthing/PartTwo/PartTwo";
// import PartThree from "@/app/components/Interactives/Sleuthing/PartThree/PartThree";
// import PartFour from "@/app/components/Interactives/Sleuthing/PartFour/PartFour";
// import PartFiveControlPanel from "@/app/components/Interactives/Sleuthing/PartFive/PartFiveControlPanel";
// import PartFive from "@/app/components/Interactives/Sleuthing/PartFive/PartFive";
// import StepSix from "@/app/components/Interactives/Sleuthing/StepSix/StepSix";
// import Part2Intro from "@/app/components/Interactives/Sleuthing/Part2Intro/Part2Intro";
// import PartSix from "@/app/components/Interactives/Sleuthing/PartSix/PartSix";
// import InteractivePrompt from "../../misc/InteractivePrompt";
// import PartSeven from "@/app/components/Interactives/Sleuthing/PartSeven/PartSeven";
// import PartEight from "@/app/components/Interactives/Sleuthing/PartEight/PartEight";

export default function PageView({
  currentView,
  lang,
}: {
  lang: "EN" | "FR" | "PT";
  currentView: InteractiveViewSettings;
}) {
  // const [currentView, setCurrentView] = useAtom(currentViewAtom);
  let { module, section, phase } = currentView;

  if (module === "2.6") {
    if (section === 0 || section === null) {
      return <PartZero lang={lang} />;
    } else if (section === 1) {
      return <PartOne lang={lang} />;
    } else if (section === 2) {
      return <PartTwo lang={lang} fixedPanel={false} />;
    } else if (section === 3) {
      return <PartThree lang={lang} fixedPanel={false} />;
    } else if (section === 4) {
      return <PartFour lang={lang} fixedPanel={false} />;
    } else if (section === 5) {
      return <PartFive lang={lang} fixedPanel={false} />;
    } else if (section === 6) {
      return <StepSix lang={lang} />;
    } else if (section === 7) {
      return (
        <div>
          <InteractivePrompt
            lang={lang}
            complete={true}
            title={
              <h1>
                {lang === "EN"
                  ? `Summary`
                  : lang === "FR"
                  ? `Résumé`
                  : `Resumo`}
              </h1>
            }
            instructions={
              <p>
                {lang === "EN"
                  ? `Amazing work! You successfully interpreted the genotypes of a
                set of samples where the true MOI in your population was
                unknown! Using that information, you were able to demonstrate
                that the National Malaria Control Program is, in fact,
                controlling malaria with its new vector control interventions.
                Parabéns camarada !!!`
                  : lang === "FR"
                  ? `Un travail incroyable! Vous avez interprété avec succès les génotypes d'un ensemble d'échantillons pour lesquels le véritable MOI de votre population était inconnu! Grâce à ces informations, vous avez pu démontrer que le Programme national de lutte contre le paludisme contrôle bel et bien le paludisme grâce à ses nouvelles interventions de lutte antivectorielle.
Félicitations camarade!!!`
                  : `Trabalho incrível! Interpretou com sucesso os genótipos de um conjunto de amostras em que o verdadeiro MOI na sua população era desconhecido! Utilizando essa informação, conseguiu demonstrar que o Programa Nacional de Controlo do Paludismo está, de facto, a controlar a malária com as suas novas intervenções de controlo de vetores.
Parabéns camarada!!!`}
              </p>
            }
          />
          <div className="max-w-2xl font-helvetica [font-size:15px]">
            {lang === "EN" ? (
              <div>
                <h2 className="mb-4 text-xl font-bold">Key Takeaways</h2>
                <p>
                  You covered a lot in this activity! Here are a few key
                  takeaways:
                </p>
                <ul className="mt-4 flex list-disc flex-col gap-4 px-4">
                  <li>
                    Both SNPs and microhaplotypes can be used to estimate MOI.
                  </li>
                  <li>
                    Microhaplotypes have more diversity than SNPs and provide a
                    more accurate reflection of MOI, particularly when MOI is
                    high.
                  </li>
                  <li>
                    Even though microhaplotypes are more easy to interpret, they
                    are not perfect.
                  </li>
                  <li>
                    Getting accurate MOI even from a relatively small number of
                    samples from your population may provide insight into
                    changes in transmission, along with other epidemiological
                    and genetic data.
                  </li>
                </ul>
                <div className="mt-8">
                  <ModuleCopyCode code="HildrusPoindexter1901" />
                </div>
              </div>
            ) : lang === "FR" ? (
              <div>
                <h2 className="mb-4 text-xl font-bold">
                  Principaux points à retenir
                </h2>
                <p>
                  Vous avez beaucoup couvert dans cette activité ! Voici
                  quelques points clés à retenir :
                </p>
                <ul className="mt-4 flex list-disc flex-col gap-4 px-4">
                  <li>
                    Les SNP et les microhaplotypes peuvent être utilisés pour
                    estimer le MOI.
                  </li>
                  <li>
                    Les microhaplotypes ont plus de diversité que les SNP et
                    reflètent plus précisément le MOI, en particulier lorsque le
                    MOI est élevé.
                  </li>
                  <li>
                    Même si les microhaplotypes sont plus faciles à interpréter,
                    ils ne sont pas parfaits.
                  </li>
                  <li>
                    L'obtention d'un MOI précis, même à partir d'un nombre
                    relativement faible d'échantillons de votre population, peut
                    donner un aperçu des changements dans la transmission, ainsi
                    que d'autres données épidémiologiques et génétiques.
                  </li>
                </ul>
                <div className="mt-8">
                  <ModuleCopyCode code="HildrusPoindexter1901" />
                </div>
              </div>
            ) : (
              <div>
                <h2 className="mb-4 text-xl font-bold">
                  Principais conclusões
                </h2>
                <p>
                  Abordou muita coisa nesta atividade! Aqui estão algumas
                  conclusões importantes:
                </p>
                <ul className="mt-4 flex list-disc flex-col gap-4 px-4">
                  <li>
                    Tanto os SNPs como os microhaplótipos podem ser utilizados
                    para estimar o MOI.
                  </li>
                  <li>
                    Os microhaplótipos têm mais diversidade do que os SNPs e
                    fornecem um reflexo mais preciso do MOI, particularmente
                    quando o MOI é elevado.
                  </li>
                  <li>
                    Apesar de os microhaplótipos serem mais fáceis de
                    interpretar, não são perfeitos.
                  </li>
                  <li>
                    Obter um MOI preciso, mesmo a partir de um número
                    relativamente pequeno de amostras da sua população, pode
                    fornecer informações sobre alterações na transmissão,
                    juntamente com outros dados epidemiológicos e genéticos.
                  </li>
                </ul>
                <div className="mt-8">
                  <ModuleCopyCode code="HildrusPoindexter1901" />
                </div>
              </div>
            )}

            {/* <div className="flex w-full flex-col py-8">
              <h6 className="text-xl font-bold">Module Code</h6>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("HildrusPoindexter1901");
                }}
                className="tooltip [--tooltip-color:#ffffff] [--tooltip-tail:.5rem] [--tooltip-text-color:black] focus:tooltip-open before:p-4 before:pb-3 before:text-xl before:ring-2  before:ring-interactiveBlue after:border-t-interactiveBlue after:[color:blue]"
                data-tip={`Copy HildrusPoindexter1901`}
                // className="copy-tooltip clicked:text-red-500 ml-auto p-2 pb-1 underline "
              >
                C
              </button>
              <p className="text-center text-2xl ">HildrusPoindexter1901</p>
            </div> */}
          </div>
        </div>
      );
    }
  } else if (module === "4.4") {
  } else if (module === "5.6") {
    // return <div>Hello world</div>;
    if (section === 0) {
      return <Part2Intro />;
    } else if (section === 1) {
      return <PartSix />;
    } else if (section === 2) {
      return <PartSeven />;
    } else if (section === 3) {
      return <PartEight fixed={false} />;
    }
  }
}
