"use client";
import { atom, useAtom, useSetAtom } from "jotai";
import Image from "next/image";
import {
  cloneElement,
  CSSProperties,
  KeyboardEvent,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { fullscreenImageElementAtom } from "./FullscreenImage";
// export const fullscreenAtom = atom(false);

export default function FullscreenImageWrapper({
  children,
  index,
  fullscreenClassName,
  intrinsicWidth,
  intrinsicHeight,
  quality,
  className,
  unsharedClassName,
  fullscreenContainerClassName,
  unsharedStyle,
}: {
  fullscreenContainerClassName?: string;
  unsharedClassName?: string;
  unsharedStyle?: CSSProperties;
  className?: string;
  quality?: number;
  fullscreenClassName?: string;
  intrinsicWidth?: number;
  intrinsicHeight?: number;
  index?: number;
  children: ReactElement;
}) {
  const [fullscreen, setFullscreen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeModalRef = useRef<HTMLButtonElement | null>(null);

  const handleTab = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (fullscreen) {
        if (event.key === "Tab") {
          event.preventDefault();
          closeModalRef.current?.focus();
        }
      }
    },
    [fullscreen],
  );

  const handleEscape = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" || event.key === " ") {
      event.preventDefault();
      // @ts-ignore
      if (!document.startViewTransition) {
        setFullscreen(false);
      } else {
        //@ts-ignore
        document.startViewTransition(() => {
          setFullscreen(false);
        });
      }
    }
  };

  if (fullscreen) {
    return (
      <div
        className="max-w-fit cursor-pointer"
        tabIndex={0}
        onLoad={(e) => {
          e.currentTarget.focus();
        }}
        onKeyDown={(e) => {
          handleTab(e);
          handleEscape(e);
        }}
        ref={modalRef}
      >
        <div
          onClick={() => {
            console.log("clicked");
            // @ts-ignore
            if (!document.startViewTransition) {
              setFullscreen(false);
            } else {
              //@ts-ignore
              document.startViewTransition(() => {
                setFullscreen(false);
              });
            }
          }}
          className="fixed inset-0 z-[9999] grid place-items-center overflow-auto bg-black/50 p-4 backdrop-blur-sm md:p-16 lg:p-24"
        >
          <div className={`${fullscreenContainerClassName ?? ""}`}>
            <button
              onClick={() => {
                //@ts-ignore
                if (!document.startViewTransition) {
                  setFullscreen(false);
                } else {
                  //@ts-ignore
                  document.startViewTransition(() => {
                    setFullscreen(false);
                  });
                }
              }}
              ref={closeModalRef}
              className="sr-only"
            >
              Close
            </button>
            {cloneElement(children, {
              height: intrinsicHeight || 700,
              width: intrinsicWidth || 1200,
              quality: quality || 75,
              className: `${
                children.props.className ?? ""
              }  object-contain max-w-full mx-auto ${
                fullscreenClassName ?? ""
              }`,
            })}
          </div>
        </div>
        {cloneElement(children, {
          className: `invisible`,
        })}
      </div>
    );
  } else {
    return (
      <div
        style={unsharedStyle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            // @ts-ignore
            if (!document.startViewTransition) {
              setFullscreen(true);
            } else {
              //@ts-ignore
              document.startViewTransition(() => {
                setFullscreen(true);
              });
            }
          }
        }}
        tabIndex={0}
        role="button"
        onClick={() => {
          //@ts-ignore
          if (!document.startViewTransition) {
            setFullscreen(true);
          } else {
            //@ts-ignore
            document.startViewTransition(() => {
              setFullscreen(true);
            });
          }
        }}
        className=" max-w-fit shrink-0 focus-visible:outline"
        aria-label={"Expand image"}
      >
        <div>
          <div>
            <button className="hidden"></button>
            {cloneElement(children, {
              className: `${children.props.className}  cursor-pointer ${
                className ?? ""
              } ${unsharedClassName ?? ""}`,
            })}
          </div>
        </div>
      </div>
    );
  }
}
