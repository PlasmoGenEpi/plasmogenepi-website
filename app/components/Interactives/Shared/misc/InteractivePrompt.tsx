import { ReactElement } from "react";
import { InteractiveSideBarOpenAtom } from "../Layout/InteractiveSideBar/InteractiveSideBar";
import { useAtomValue } from "jotai";

export default function InteractivePrompt({
  title,
  instructions,
  complete,
  skippable,
  lang = "EN",
}: {
  lang: "EN" | "FR" | "PT";
  skippable?: boolean;
  complete: boolean;
  title: ReactElement | null;
  instructions: ReactElement | null;
}) {
  const sideBarOpen = useAtomValue(InteractiveSideBarOpenAtom);
  return (
    <div className="mb-8 text-pretty">
      <div className="flex justify-between py-2">
        <button
          id="interactive-top"
          className="sr-only focus:not-sr-only focus:absolute focus:px-1 focus:py-0.5"
        >
          {lang === "EN"
            ? `Top of Interactive`
            : lang === "FR"
            ? `Haut de l'interactif`
            : lang === "PT"
            ? `Topo do Interativo`
            : `Top of Interactive`}
        </button>
        <div
          className={`${
            complete ? "" : "invisible"
          } ml-auto flex items-center gap-2`}
        >
          <span className="ml-auto text-lg font-normal">
            (
            {lang === "EN"
              ? `Complete`
              : lang === "FR"
              ? `Complété`
              : lang === "PT"
              ? `Completo`
              : `Complete`}
            )
          </span>
          <svg
            className="-translate-y-1 fill-current"
            width="16pt"
            height="16pt"
            version="1.1"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m880 400c0-154.64-125.36-280-280-280s-280 125.36-280 280v240h80v-240c0-110.46 89.543-200 200-200s200 89.543 200 200v240h80z" />
              <path d="m200 600.23v399.53c0 44.312 35.93 80.234 79.633 80.234h640.73c43.98 0 79.633-35.883 79.633-80.234v-399.53c0-44.312-35.93-80.234-79.633-80.234h-640.73c-43.98 0-79.633 35.883-79.633 80.234z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-4 font-helvetica [fontSize:15px]">
        <div
          className={`flex flex-col-reverse justify-between gap-2 text-xl font-bold md:flex-row md:gap-8`}
        >
          {title}
        </div>
        <div className="min-h-[calc(2lh+8px)] leading-[23px]">
          {instructions}
        </div>
      </div>
      {skippable && (
        <button
          onClick={(e) => {
            let z = document.getElementById("interactive-first");
            if (z) {
              z.focus();
            }
          }}
          className="sr-only focus:not-sr-only focus:absolute focus:p-1"
        >
          {lang === "EN"
            ? `Skip Interactive Content`
            : lang === "FR"
            ? `Passer le contenu interactif`
            : lang === "PT"
            ? `Pular conteúdo interativo`
            : `Skip Interactive Content`}
        </button>
      )}
    </div>
  );
}
