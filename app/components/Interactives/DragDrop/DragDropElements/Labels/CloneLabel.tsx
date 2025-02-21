import { useEffect, useRef } from "react";

export default function CloneLabel({
  top,
  left,
  className,
  trigger,
}: {
  trigger?: boolean;
  className?: string;
  top: number;
  left: number;
}) {
  const labelRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (trigger) {
      labelRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [trigger]);

  return (
    <div
      ref={labelRef}
      style={{
        top,
        left,
        animationDelay: "1000ms",
      }}
      className={`fadeIn500 absolute aspect-square h-10 rounded-full dark:brightness-75 ${className}`}
    ></div>
  );
}
