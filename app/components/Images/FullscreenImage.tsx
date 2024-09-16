"use client";
import { atom, useAtom } from "jotai";
import { cloneElement, ReactElement } from "react";
import FullscreenImageWrapper from "./FullscreenImageWrapper";
import Image from "next/image";

export const fullscreenImageElementAtom = atom<null | ReactElement>(null);

export default function FullscreenImage({
  visible,
  onClick,
}: {
  visible: boolean;
  onClick: any;
}) {
  // const [fullscreenImage, setFullscreenImage] = useAtom(
  //   fullscreenImageElementAtom,
  // );

  return (
    <div
      onClick={onClick}
      // onClick={() => {
      //   document.startViewTransition(() => {
      //     setOpen3(false);
      //   });
      // }}
      className={
        visible
          ? "fixed inset-0 grid place-items-center overflow-auto bg-black/50 px-12 "
          : "hidden"
      }
    >
      <Image
        // key={1}
        className="min-w-[600px] border-4 border-transparent [view-transition-name:myImg] "
        src={"/assets/genotyping-example2.png"}
        alt=""
        height={800}
        width={1200}
        quality={100}
      />
    </div>
  );

  if (!fullscreenImage) {
    return null;
  } else {
    return (
      <div
        onClick={() => {
          //@ts-ignore
          if (!document.startViewTransition) {
            setFullscreenImage(null);
          } else {
            //@ts-ignore
            document.startViewTransition(() => {
              setFullscreenImage(null);
            });
          }
        }}
        className={`fixed inset-0 z-50 grid place-items-center overflow-y-hidden overscroll-contain bg-black/50 px-4 backdrop-blur-sm`}
      >
        <FullscreenImageWrapper>
          {cloneElement(fullscreenImage, {
            className: `m-auto min-w-[600px] mx-auto cursor-pointer object-contain max-h-[95vh]   [view-transition-name:myImg] select-none`,
            width: 1200,
            height: 800,
          })}
        </FullscreenImageWrapper>
      </div>
    );
  }
}
