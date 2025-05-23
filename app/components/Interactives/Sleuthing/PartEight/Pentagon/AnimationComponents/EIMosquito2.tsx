import { usePrevious } from "@/app/components/hooks";
import { phase2Atom } from "@/data/Interactives/interactiveStore";
import { useAtom, useAtomValue } from "jotai";
import { EIAnimationCompleteAtom } from "./AnimationSideBySideComponents/EIComparison";

export default function EIMosquito2() {
  const phase = useAtomValue(phase2Atom);
  const prevPhase = usePrevious(phase, 0);
  const [EIAnimationComplete, setEIAnimationComplete] = useAtom(
    EIAnimationCompleteAtom,
  );

  const direction = phase > prevPhase.current ? "forwards" : "backwards";

  if (phase < 28) {
    return null;
  }

  return (
    <g>
      <defs>
        <g
          width="100pt"
          height="100pt"
          id="mosquito2"
          strokeDashoffset={2}
          // strokeDasharray={"0 0 5 5"}
          className=" origin-center scale-[150%] stroke-white stroke-[0.5] [transform-box:fill-box]"
          version="1.1"
          fill="black"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m56.359 52.145h30.25c1.1953 0 2.0352 1.1875 1.6523 2.3047-1.8359 6.7461-6.0977 13.137-13.801 13.137h-5.5195l8.7734 20.289h4.4805c2.293 0 2.293 3.4883 0 3.4883h-5.6172c-0.77734 0-1.4336-0.50781-1.6602-1.2109l-9.7578-22.566h-9.6719c-0.56641 0.75-1.2773 1.3711-2.082 1.8281l8.5742 19.832h4.4805c2.293 0 2.293 3.4844 0 3.4844h-5.6172c-0.77734 0-1.4336-0.50781-1.6602-1.2109l-9.1797-21.223h-9.9492c-0.38672 0-0.76563-0.03125-1.1367-0.09375l-9.2188 21.32c-0.22656 0.70312-0.88281 1.2109-1.6602 1.2109h-5.6172c-2.293 0-2.293-3.4844 0-3.4844h4.4805l8.8633-20.492c-0.80469-0.66406-1.457-1.5117-1.8945-2.5-1.4023 1.1367-3.1875 1.8203-5.1328 1.8203-1.1992 0-2.3359-0.26172-3.3633-0.73047-3.3711 4.3828-10.566 13.699-10.59 13.73-1.3945 1.8047-4.1445-0.32031-2.75-2.125 0.023438-0.027344 7.1406-9.2461 10.555-13.688-1.2422-1.4297-1.9961-3.2969-1.9961-5.332 0-4.4961 3.6484-8.1445 8.1445-8.1445 1.7461 0 3.3672 0.55469 4.6953 1.4922 0.64062-3.1211 3.4141-5.4102 6.625-5.4102h0.42578c0.80859-5.9258 3.8594-27.633 6.2656-35.203 3.5039-11.023 21.07-3.5039 15.211 7.7305-2.7422 5.2578-8.4688 14.473-12.828 21.34 7.2344-5.3594 17.352-12.633 22.293-15.191 10.266-5.3086 17.387 12.43 5.2852 16.234-5.4844 1.7227-15.645 4.1055-23.512 5.8672 1.4102 0.74219 2.5508 1.9727 3.1602 3.5039zm16.656-22.512c-5.2148 2.6992-16.586 10.98-23.738 16.32 8.0078-1.7617 20.23-4.5625 26.398-6.5 7.293-2.293 3.1523-12.82-2.6602-9.8203zm-22.961-15.918c-1.7734 5.582-3.9609 19.492-5.2422 28.332 4.418-6.918 11.09-17.547 14.07-23.258 3.543-6.7969-6.8477-11.293-8.8281-5.0742z" />
          <g>
            <circle
              style={{
                animationDelay: "2000ms",
              }}
              r={9}
              cx={25}
              cy={20}
              className={direction === "backwards" ? "hidden" : ""}
              // className="recombination fadeIn1000 fill-microBlue stroke-black stroke-1"
            ></circle>
            <circle
              style={{
                animationDelay: "2000ms",
              }}
              r={9}
              cx={25}
              cy={40}
              className={direction === "backwards" ? "hidden" : ""}

              // className="recombination2 fadeIn1000 fill-microRed stroke-black stroke-1"

              // fill="url('#red-ball-gradient')"
            ></circle>
            {phase >= 28 && (
              <circle
                fill="url('#red-blue-gradient2')"
                r={12}
                cx={25}
                cy={30}
                style={{
                  animationDelay: phase === 28 ? "3000ms" : "0ms",
                }}
                className={`${
                  phase >= 28 ? "fadeIn1000" : ""
                } stroke-black stroke-1`}
              ></circle>
            )}
          </g>
        </g>
      </defs>
      <g>
        <use
          onAnimationEnd={() => {
            if (phase === 28 && direction === "forwards") {
              setEIAnimationComplete(true);
              console.log("fin");
            }
          }}
          x={phase === 28 ? 200 : 280}
          y={phase === 28 ? 200 : 690}
          xlinkHref="#mosquito2"
          className={
            phase === 28 && direction === "forwards"
              ? "mosquito2"
              : direction === "backwards" && phase === 28
              ? "translate-x-[80px] translate-y-[490px]"
              : ""
          }
        ></use>
      </g>
    </g>
  );
}
