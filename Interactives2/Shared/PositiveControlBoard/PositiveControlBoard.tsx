import { compareUnorderedArrays } from "@/helpers/helpers";
import Image from "next/image";
import { ReactNode } from "react";

export default function PositiveControlBoard({
  className,
  children,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className ? className : ""} fadeIn500 relative flex aspect-[2/1] w-full  grow  origin-top-left items-center pt-12 transition-[opacity,_transform] duration-300  md:aspect-auto md:max-h-60 md:min-h-[300px] md:pt-16`}
    >
      <div className="absolute left-1/2 top-0 -z-10 aspect-square w-1/3 origin-top  -translate-x-1/2 scale-[200%] select-none rounded-full  border-black">
        <div className="absolute aspect-square h-[90%]  translate-x-1.5 rounded-full "></div>
        <Image
          alt="blood spot"
          src="/assets/BloodSlide.png"
          fill
          className="object-cover"
        />
      </div>
      {children}
      {/* <div
        data-tip="Hint: Use the correct number of controls according to the MOI."
        className="tooltip tooltip-bottom tooltip-open absolute left-1/3 border border-black [--tooltip-color:#fffffff2] [--tooltip-font-size:12px] [--tooltip-tail:1rem] [--tooltip-text-color:black] before:max-w-60 before:px-2 before:pb-2   before:pt-4 before:text-base before:ring-1 before:ring-black after:z-10 after:translate-x-full md:left-1/4 "
      >
      </div> */}
    </div>
  );
}
