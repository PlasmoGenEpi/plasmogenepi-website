import { useAtom } from "jotai";
import ControlPanelWrapper from "../../Shared/ControlPanel/ControlPanelWrapper";
import { currentViewAtom } from "../../Shared/InteractiveViewer/InteractiveViewer";
import { partZeroCompletionAtom } from "./PartZero";
import { SetStateAction } from "jotai";

export default function PartZeroControlPanel({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (prev: boolean) => void;
}) {
  const [currentView, setCurrentView] = useAtom(currentViewAtom);
  const [completion, setCompletion] = useAtom(partZeroCompletionAtom);
  const phase = currentView.phase;

  // return (
  //   <div className="flex justify-between h-full w-full">
  //     <div className="bg-red-500 p-8"></div>
  //   </div>
  // );

  return (
    <ControlPanelWrapper resetCallback={() => {}}>
      <div className="grid grid-cols-[60px_auto_60px] md:grid-cols-[24rem_auto_auto] md:grid-rows-1 px-2 w-full h-full place-items-center">
        <button
          disabled={currentView.phase === 1}
          aria-label="Back"
          className="disabled:invisible"
        >
          <svg
            className={`mx-auto mb-auto rotate-90 fill-white aspect-square h-12 md:h-8`}
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
          </svg>
        </button>
        <div className="w-full h-full flex flex-col md:flex-row gap-x-8 text-white text-center pt-2 text-xl md:max-w-sm md:col-start-1 row-start-1 col-start-2 md:justify-center md:text-lg">
          <span className="block translate-y-0.5">Introduction </span>{" "}
          <span className="block translate-y-0.5">
            {currentView.phase + " / 3"}
          </span>
        </div>
        <button
          onClick={() => {
            if (phase !== 3) {
              setCurrentView({ ...currentView, phase: currentView.phase + 1 });
            } else {
              setCurrentView({
                ...currentView,
                phase: 0,
                section: currentView.section + 1,
              });
            }
            setCompletion({ ...completion, [currentView.phase]: true });
          }}
          aria-label="Next"
          className="disabled:invisible"
        >
          <svg
            className={`mx-auto mb-auto -rotate-90 fill-white  aspect-square h-12 md:h-8`}
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
          </svg>
        </button>
      </div>
    </ControlPanelWrapper>
  );

  return (
    <ControlPanelWrapper resetCallback={() => {}}>
      <div className="fixed bottom-0 z-50 w-[100vw] bg-interactiveGreen flex">
        <div className="left-0 max-w-sm w-full flex px-4 justify-center items-center">
          <div className="flex gap-12 px-2 text-white text-xl md:text-lg">
            {/* <p className="my-auto">
              {interactiveView === 0
                ? "Introduction"
                : `Step ${interactiveView}`}
            </p> */}
            <span className="block translate-y-0.5">Introduction</span>
            <span className="block translate-y-0.5">
              {currentView.phase + " / 3"}
            </span>
          </div>
        </div>
        <div className="mx-auto max-w-4xl p-2 grow">
          <button
            onClick={() => {
              setCurrentView({
                ...currentView,
                phase: currentView.phase + 1,
              });
            }}
            className="bg-interactiveGreen text-white disabled:invisible"
            // text="Back"
            disabled={phase === 1}
          >
            <svg
              width="24pt"
              height="24pt"
              className={`mx-auto mb-auto rotate-90 fill-white`}
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
            </svg>
          </button>
          <button
            onClick={() => {
              // if (!isDisabled(phase)) {
              //   handleClick(phase);
              // }
            }}
            // text={getText()}
          >
            <svg
              width="24pt"
              height="24pt"
              className={`mx-auto mb-auto -rotate-90 fill-white duration-500`}
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m562.88 812.12-300-300c-20.5-20.504-20.5-53.746 0-74.25 20.504-20.5 53.746-20.5 74.25 0l262.88 262.88 262.88-262.88c20.504-20.5 53.746-20.5 74.25 0 20.5 20.504 20.5 53.746 0 74.25l-300 300c-20.504 20.5-53.746 20.5-74.25 0z" />
            </svg>
          </button>
        </div>
      </div>
    </ControlPanelWrapper>
  );
}
