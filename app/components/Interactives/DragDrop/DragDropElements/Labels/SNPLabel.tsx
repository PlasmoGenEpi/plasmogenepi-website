import { CSSProperties, useEffect, useRef } from "react";
import { charSize } from "../Container";

export default function SNPLabel({
  top,
  left,
  style,
  trigger,
}: {
  trigger?: boolean;
  top: number;
  left: number;
  style?: CSSProperties;
}) {
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (trigger) {
      labelRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div
      ref={labelRef}
      className={"fadeIn500 absolute rotate-180 opacity-100"}
      style={{
        ...style,
        left,
        top,
        width: charSize,
        animationDelay: `500ms`,
      }}
    >
      {/* {trigger && (
        <span className="block translate-x-1 translate-y-10 rotate-180 text-sm not-italic text-interactiveGreen dark:text-cyan-500">
          SNP
        </span>
      )} */}
      <svg
        className="absolute translate-x-[1px] fill-[#0E5258] dark:fill-cyan-500"
        width="10pt"
        height="10pt"
        version="1.1"
        viewBox="0 0 1000 1000"
        overflow={`visible`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m600 0-525 525h300v675h450v-675h300z" />
      </svg>
    </div>
  );
}
