// import { usePrevious } from "@/app/components/hooks";
// import { phaseAtom } from "@/data/Interactives/interactiveStore";
import { useAtomValue } from "jotai";
import { ReactElement, useEffect, useMemo, useRef } from "react";

export default function QuestionResponseText({
  text,
  visible,
  content,
  className,
  trigger,
  complete = false,
}: {
  complete?: boolean;
  trigger?: boolean;
  className?: string;
  text?: string | (string | ReactElement)[];
  visible: boolean;
  content?: ReactElement;
}) {
  let z = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (trigger && !complete && complete !== undefined) {
      if (z.current !== null) {
        z.current.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return (
    <div
      ref={z}
      className={`${
        visible && complete
          ? "visible"
          : visible
          ? "fadeIn500 dark:animate-none"
          : "invisible"
      } ${className && className} [fontSize:15px]`}
    >
      {content ? (
        content
      ) : typeof text === "string" ? (
        <div
          className={
            "bg-interactiveBlue/10 text-pretty p-4 leading-[23px] dark:bg-zinc-900/50 dark:text-emerald-400 md:p-6 md:px-8"
          }
        >
          <p>{text}</p>
        </div>
      ) : (
        <div className="bg-interactiveBlue/10 text-pretty p-4 leading-[23px] dark:bg-zinc-900/50 dark:text-emerald-400 md:p-6 md:px-8">
          <p>
            {text &&
              text.map((str, idx) => {
                return str;
              })}
          </p>
        </div>
      )}
    </div>
  );
}
