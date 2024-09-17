"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FullscreenImageWrapper, {
  fullscreenAtom,
} from "./FullscreenImageWrapper";
import { useAtom } from "jotai";
import CarouselThumbnails from "./CarouselThumbnails";
import { usePrevious } from "../hooks";

export default function Carousel({
  images,
}: {
  images: { path: string; alt: string }[];
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const prevIndex = usePrevious(imageIndex, 0).current;
  const intervalTimeoutRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    if (intervalTimeoutRef.current === null) {
      intervalTimeoutRef.current = setTimeout(
        () => {
          if (imageIndex === images.length) {
            setImageIndex(0);
          } else {
            setImageIndex(imageIndex + 1);
          }
        },
        imageIndex === 0 && prevIndex === images.length ? 0 : 5000,
      );
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
      <div className=" overflow-hidden bg-zinc-50">
        <div
          // style={{
          //   transform: `translateX(calc(${-100 * imageIndex}%)`,
          // }}
          className={`flex mix-blend-multiply`}
        >
          {images.map(({ path, alt }, idx) => {
            return (
              <Image
                style={{
                  transform: `translateX(${-100 * imageIndex}%)`,
                }}
                className={`motion-reduce:transition-none ${
                  imageIndex === 0 && prevIndex === images.length
                    ? "duration-0"
                    : "duration-1000"
                }`}
                src={path}
                alt={alt}
                key={idx}
                width={900}
                height={400}
              />
            );
          })}
          {images.length && (
            <Image
              style={{
                transform: `translateX(${-100 * imageIndex}%)`,
              }}
              className={`${
                imageIndex === images.length &&
                prevIndex === images.length - 1 &&
                imageIndex !== 1
                  ? "duration-1000"
                  : "duration-0"
              } scale-50 motion-reduce:hidden`}
              src={images[0].path}
              alt={images[0].alt}
              key={images.length}
              width={900}
              height={400}
            />
          )}

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
            imageIndex={imageIndex === images.length ? 0 : imageIndex}
            images={images}
          />
        </div>
      </div>
    </div>
  );
}
