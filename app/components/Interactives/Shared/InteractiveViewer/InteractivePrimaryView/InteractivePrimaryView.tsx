import { useAtom } from "jotai";
import { sideBarIsOpenAtom } from "../InteractiveSideBar/InteractiveSideBar";
import InteractiveStandardForm from "../../InteractiveStandardForm/InteractiveStandardForm";
import InteractivePrimaryLayout from "../../InteractiveStandardForm/InteractivePrimaryLayout/InteractivePrimaryLayout";
// import PartOne from "@/app/components/Interactives/Sleuthing/PartOne/PartOne";
import {
  InteractiveViewSettings,
  sideBarDisablesMainContent,
} from "../InteractiveViewer";
import PageView from "../PageView/PageView";
import { SetStateAction } from "jotai";

export default function InteractivePrimaryView({
  currentView,
  setCurrentView,
}: {
  currentView: InteractiveViewSettings;
  setCurrentView: any;
}) {
  const [isOpen, setIsOpen] = useAtom(sideBarIsOpenAtom);
  // const [currentView, setCurrentView] = useAtom(currentViewAtom);
  return (
    <div
      onFocus={
        sideBarDisablesMainContent
          ? () => {
              setIsOpen(false);
            }
          : undefined
      }
      tabIndex={isOpen && sideBarDisablesMainContent ? 0 : undefined}
      className={`overflow-clip/ relative min-h-screen w-full max-w-6xl grow basis-full border-black ${
        isOpen
          ? "hidden sm:block"
          : "fadeFromHidden opacity-100 sm:animate-none"
      }`}
    >
      <div
        // inert={isOpen}
        className="@container/main relative pb-80"
      >
        <PageView currentView={currentView} />
      </div>
    </div>
  );
}
