"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FullscreenImageWrapper, {
  fullscreenAtom,
} from "./FullscreenImageWrapper";
import { useAtom } from "jotai";
import CarouselThumbnails from "./CarouselThumbnails";

export default function Carousel({
  images,
}: {
  images: { path: string; alt: string }[];
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const intervalTimeoutRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (intervalTimeoutRef.current === null) {
      intervalTimeoutRef.current = setTimeout(() => {
        // document.startViewTransition(() => {
        // if (imageIndex === images.length - 1) {
        //   setImageIndex(0);
        // } else {
        //   setImageIndex(imageIndex + 1);
        // }
        // });
        if (imageIndex === images.length - 1) {
          setImageIndex(0);
        } else {
          setImageIndex(imageIndex + 1);
        }
      }, 8000);
    }
    return () => {
      if (intervalTimeoutRef.current !== null) {
        clearTimeout(intervalTimeoutRef.current);
        intervalTimeoutRef.current = null;
      }
    };
  }, [imageIndex, images.length]);

  return (
    <div className="">
      <div className=" overflow-hidden bg-zinc-50 p-2">
        <div
          style={{
            // imageWidth + (imageIndex * inline padding)
            transform: `translateX(calc(${-100 * imageIndex}% - ${
              8 * imageIndex
            }px))`,
          }}
          className={`myCarousel flex mix-blend-multiply duration-1000`}
        >
          {images.map(({ path, alt }, idx) => {
            return (
              <Image src={path} alt={alt} key={idx} width={900} height={400} />
            );
          })}
          {/* {
          <div>
            <Image
              key={imageIndex - 1}
              className="fadeIn300"
              src={images?.[imageIndex - 1]?.path}
              alt=""
              width={900}
              height={400}
            />
            <Image
              key={imageIndex}
              className="fadeIn300"
              src={images[imageIndex].path}
              alt=""
              width={900}
              height={400}
            />
          </div>
        } */}
        </div>
        <div className="mx-auto mt-8 md:mt-4">
          <CarouselThumbnails
            setImageIndex={setImageIndex}
            imageIndex={imageIndex}
            images={images}
          />
        </div>
      </div>
    </div>
  );
}
