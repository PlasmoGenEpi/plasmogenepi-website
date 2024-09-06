import { CSSProperties, useEffect, useRef } from "react";

export default function LocusTwoLabel({
  left,
  top,
  size,
  text,
  labelClassName,
  active,
  style,
}: {
  style?: CSSProperties;
  active: boolean;
  labelClassName: string;
  text: string;
  left: number;
  top: number;
  size: number;
}) {
  const labelRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (active && labelRef?.current) {
  //     labelRef.current.scrollIntoView({
  //       block: "center",
  //       behavior: "smooth",
  //     });
  //   }
  // }, [active]);

  return (
    <div
      ref={labelRef}
      className={active ? "transition-[width] duration-1000" : "invisible"}
      style={{
        position: "absolute",
        width: active ? 15 * size : 0,
        left: left,
        top: top - 4,
      }}
    >
      <div className="pointer-events-auto mb-1 w-full text-center">
        <label
          style={{
            ...style,
          }}
          className={active ? labelClassName : "hidden"}
        >
          {text}
        </label>
      </div>
      <div className=" relative h-2 w-full border-[2px] border-primaryGreen border-b-transparent">
        {/* <div className="absolute left-0 right-0 top-1/2 h-[4px] bg-white border-white"></div> */}
      </div>
    </div>
  );
}
