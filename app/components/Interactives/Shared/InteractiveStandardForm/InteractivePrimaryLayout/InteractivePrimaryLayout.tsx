"use client";
import { atom, useAtom, useSetAtom } from "jotai";
import {
  CSSProperties,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";

export const viewWidthAtom = atom(0);

export default function InteractivePrimaryLayout({
  leftHeader,
  leftContent,
  rightHeader,
  rightContent,
  moreContent,
  layoutStyle,

  leftContentStyle,
  rightContentStyle,
}: {
  leftHeader?: string | ReactElement;
  leftHeaderStyle?: CSSProperties;
  layoutStyle?: CSSProperties;
  leftContent?: string | ReactElement;
  rightHeader?: string | ReactElement;
  rightHeaderStyle?: CSSProperties;
  rightContent?: string | ReactElement;
  moreContent?: string | ReactElement;
  leftContentStyle?: CSSProperties;
  rightContentStyle?: CSSProperties;
}) {
  const containerRef = useRef<null | HTMLDivElement>(null);
  // const [resizes, setResizes] = useState(0);
  const setViewWidth = useSetAtom(viewWidthAtom);

  useEffect(() => {
    const handleResize = (entries: any) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setViewWidth(width);
      }
    };

    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      style={
        layoutStyle
          ? { ...layoutStyle, overflowClipMargin: "2rem" }
          : {
              overflowClipMargin: "2rem",
            }
      }
      ref={containerRef}
      className="@4xl/main:grid-cols-2 grid gap-x-16 gap-y-8 font-helvetica grid-flow-row-dense  overflow-clip pb-24 "
    >
      {typeof leftHeader === "string" ? (
        <div
          className={`@4xl/main:col-start-1 ${
            !rightHeader ? "col-span-full" : ""
          } text-center @4xl/main:text-left`}
        >
          <h4 className="text-balance text-center text-lg  font-semibold @2xl/main:text-wrap @2xl/main:text-left">
            {leftHeader}
          </h4>
        </div>
      ) : (
        leftHeader
      )}
      <div
        style={leftContentStyle ? leftContentStyle : undefined}
        className="max-w-[500px] col-start-1 relative [&>*]:w-full mx-auto @2xl/main:mx-0 @2xl/main:max-w-none/ @4xl/main:max-w-none w-full grid place-items-center @2xl/main:place-items-start "
      >
        {leftContent}
      </div>
      {rightHeader && typeof rightHeader === "string" ? (
        <div className="@4xl/main:col-start-2 @4xl/main:row-start-1 text-center @4xl/main:text-left @4xl/main:mt-0 mt-8">
          <h4 className="text-balance text-center text-lg  font-semibold @2xl/main:text-wrap @2xl/main:text-left">
            {rightHeader}
          </h4>
        </div>
      ) : (
        rightHeader
      )}
      <div
        style={rightContentStyle ? rightContentStyle : undefined}
        className="max-w-[500px] relative [&>*]:w-full mx-auto @2xl/main:mx-0 @2xl/main:max-w-none/ @4xl/main:max-w-none w-full grid place-items-center @2xl/main:place-items-start "
      >
        {rightContent}
      </div>
      {moreContent}
    </div>
  );
}
