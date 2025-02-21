import InteractivePrompt from "../../Shared/misc/InteractivePrompt";
import { useAtom, useAtomValue } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { currentView2Atom } from "../../Shared/InteractiveViewer/InteractiveViewer";
import { phase2Atom } from "@/data/Interactives/interactiveStore";
import { s2p0CompletionAtom } from "../../Shared/ControlPanel/InteractiveControlPanel2";
import Image from "next/image";

export default function Part2Intro() {
  const [phase2, setPhase2] = useAtom(phase2Atom);
  const completion = useAtomValue(s2p0CompletionAtom);
  const [currentView2, setCurrentView2] = useAtom(currentView2Atom);

  return (
    <div>
      {phase2 === 0 ? (
        <InteractivePrompt
          complete={completion[0]}
          title={<h1>Introduction</h1>}
          instructions={
            <div className="flex flex-col gap-4">
              <p>
                Genotyping parasites from patient samples can help you determine
                how related they are to each other. In the context of a
                potential outbreak, estimates of identity by descent (IBD) and
                identity by state (IBS) help you sort out how much local
                transmission is occurring vs. how much importation from other
                geographic areas could be driving transmission.
              </p>
            </div>
          }
        />
      ) : phase2 === 1 ? (
        <InteractivePrompt
          complete={completion[currentView2.phase]}
          title={<h1>Case Study Background</h1>}
          instructions={
            <div className="flex flex-col gap-4">
              <p>
                In this activity, you return to your role as the Head of
                Surveillance for the National Malaria Control Program.
              </p>
              <Image
                alt=""
                src={`/InteractiveAssets/Slide1.png`}
                width={1200}
                height={600}
              />
              <p>
                Congratulations! Your persistent efforts advocating for
                intensified vector control within your national malaria program
                have paid off. Malaria cases are down across the country, and
                your program has just decided to attempt subnational elimination
                in a few provinces where transmission is lowest, including in
                the Eliminati Province.
              </p>
              <p>
                There were only a few cases last year in the pre-elimination
                region and, since you are taking detailed travel history from
                all cases as part of routine surveillance, you know that all of
                these cases had clear travel history to areas of the country
                with higher transmission.
              </p>
              <p>You are feeling good!</p>
              <p>Mission accomplished? Not so fast ...</p>
              <p>
                Just then, you get a text message from Tarsis, your Surveillance
                Officer in the Eliminati Region.
              </p>
              <Image
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
                alt=""
                src={`/InteractiveAssets/Slide3.png`}
                width={1200}
                height={600}
              />
              <p>
                Hey Chief," Tarsis begins. "I investigated 5 cases that occurred
                last month in a village in our Province. Only 2 of them report a
                history of travel outside the region."
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
                boarding school from another village in Eliminati Province just
                reported 4 cases in students within a month after returning from
                holidays . . . What do you think - is there an outbreak at the
                school, or did these students all acquire their infections while
                visiting family upcountry over the holidays?"
              </p>
              <p>
                "OK, Tarsis. We can handle this. Give me a few minutes to think
                about how we can approach this and I'll get back to you ASAP."
                You say as you hang up the phone.
              </p>
              <p>So what will you do next?</p>
              <Image
                alt=""
                src={`/InteractiveAssets/Slide4.png`}
                width={1200}
                height={600}
              />
              <p>
                With a sigh of relief, you remember that one of the first things
                you instituted as lead for the subnational elimination program
                was universal collection of dried blood spots from all malaria
                cases occurring in Eliminati Province.
              </p>
              <p>
                You know that you can genotype parasites from these samples and
                determine how related they are to each other, helping you sort
                out how much local transmission is occurring and what if any new
                response is required.
              </p>
              <p>
                You head to the lab to see what needs to be done next. You are
                not a molecular biologist, but you have recently taken an
                excellent online course on interpreting malaria genetic data for
                surveillance, so you know a thing or two about what needs to
                happen.
              </p>
            </div>
          }
        />
      ) : phase2 === 2 ? (
        <InteractivePrompt
          complete={completion[2]}
          title={<h1>Your Goal</h1>}
          instructions={
            <div className="flex flex-col">
              <p>
                In this activity, your goal is to determine whether the newly
                identified cases in the village and school settings represent an
                outbreak of local cases requiring additional interventions, or
                are consistent with a path towards elimination without further
                intervention.
              </p>
            </div>
          }
        />
      ) : (
        <InteractivePrompt
          complete={completion[3]}
          title={<h1>Instructions</h1>}
          instructions={
            <div className="flex flex-col gap-0 ">
              <p className="mb-4">
                You know from your course that you are trying to estimate the
                actual relatedness between infections as identity by descent, or
                IBD, since that tells you whether parasites in infections are
                likely to be related by transmission. However, you also know
                that you will only be able to directly observe identity by
                state, or IBS, in your genotyping results.
              </p>
              <p className="mb-4">
                Therefore, you will first do a series of tests on laboratory
                controls of known composition to determine which genotyping
                method you will use and how to interpret your results, as you
                should in any laboratory. With this insight, you will then
                genotype your cases, figure out what is going on in the village
                and school, and decide on next steps.
              </p>
              <p>Speficially you will:</p>
              <ol className="flex list-decimal px-4 flex-col gap-2 mt-4">
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
                    from combinations of the laboratory clones, since your cases
                    may also be polyclonal. You will then compare these controls
                    using IBS and IBD.
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
          }
        />
      )}
    </div>
  );
}
