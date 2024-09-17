import { SetStateAction } from "jotai";
import Image from "next/image";
import { Dispatch } from "react";
import FullscreenImageWrapper from "./FullscreenImageWrapper";

export default function CarouselThumbnails({
  images,
  imageIndex,
  setImageIndex,
}: {
  setImageIndex: Dispatch<SetStateAction<number>>;
  imageIndex: number;
  images: { path: string; alt: string }[];
}) {
  return (
    <div className="mx-auto flex max-w-full justify-center gap-4 md:gap-4">
      {images.map((image, idx) => {
        return (
          <button
            onClick={() => {
              // if (idx === 0) {
              //   console.log("first");
              //   console.log(imageIndex, images.length / 2);
              //   if (imageIndex < images.length / 2) {
              //     console.log("start");
              //     setImageIndex(0);
              //   } else {
              //     console.log("end");
              //     setImageIndex(images.length);
              //   }
              // } else {
              //   setImageIndex(idx);
              // }
              setImageIndex(idx);
            }}
            aria-label={`carousel image ${idx + 1} ${
              idx === imageIndex ? "active" : "inactive"
            }`}
            className={`w-full border-t-4 md:h-auto md:w-auto md:border-t-2 ${
              imageIndex === idx
                ? " border-black bg-pge-dark-teal md:bg-transparent"
                : " border-transparent bg-black/10 hover:scale-105 focus-visible:scale-105 md:bg-transparent md:mix-blend-multiply [&>*]:opacity-50 hover:[&>*]:opacity-100  focus-visible:[&>*]:opacity-100"
            } overflow-hidden border-2 outline-offset-4 transition-all md:rounded md:outline-offset-2`}
            key={idx}
          >
            {/* <FullscreenImageWrapper key={idx} index={idx} path={image.path}> */}
            <Image
              className="hidden  md:block"
              src={image.path}
              alt={`image carousel thumbnail ${idx + 1}`}
              height={300}
              width={400}
              key={idx}
            />
            {/* </FullscreenImageWrapper> */}
          </button>
          // <div
          //   key={idx}
          //   className={`${
          //     activeIndex === idx ? "z-10 opacity-100" : "opacity-20"
          //   } mix-blend-multiply`}
          // >
          // <Image
          //   key={idx}
          //   src={image.path}
          //   alt={`image carousel thumbnail ${idx + 1}`}
          //   height={300}
          //   width={400}
          // />
          // </div>
        );
      })}
    </div>
  );
}
