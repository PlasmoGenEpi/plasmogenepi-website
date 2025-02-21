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
  // return (
  //   <div className="h-full bg-zinc-200 ">
  //     <Image
  //       alt="blood spot"
  //       src="/InteractiveAssets/BloodSlide.png"
  //       fill
  //       className="object-cover mix-blend-multiply max-w-[75%] ml-0"
  //     />
  //   </div>
  // );

  // return (
  //   <div className="dark:bg-zinc-600 max-w-[600px] mx-auto @4xl/main:min-h-[max(100%,260px)] @4xl/main:aspect-auto aspect-[2/1] h-full border-4 dark:shadow-2xl shadow-md relative shadow-black/50 dark:border-black/50 flex mt-auto ">
  //     {/* <div className="absolute flex inset-0">
  //       <div className="grow h-full z-20 py-4 basis-3/4 shadow-sm shadow-black/50 pl-2">
  //         {children}
  //       </div>
  //       <div className="h-full basis-1/4 bg-gradient-to-tr dark:bg-none from-zinc-100 to-zinc-200  ml-auto dark:border-l border-black"></div>
  //     </div> */}
  //     <Image
  //       alt="blood spot"
  //       src="/InteractiveAssets/BloodSlide.png"
  //       fill
  //       className="object-cover mix-blend-multiply max-w-[75%] ml-0"
  //     />
  //     {/* <div className="min-h-fit">{children}</div> */}
  //     <div className="grow h-full z-20 py-2 basis-3/4 pl-2">{children}</div>
  //     <div className="min-w-20 basis-1/5 ml-auto h-full bg-zinc-300/50"></div>
  //   </div>
  // );

  return (
    <div
      className={`${
        className ? className : ""
      } fadeIn500 relative flex h-[280px] w-full  grow  origin-top-left items-center/ pt-12 transition-[opacity,_transform] duration-300  @4xl/main:aspect-auto @4xl/main:max-h-60 @4xl/main:min-h-[300px] @4xl/main:pt-16 -translate-y-8 `}
    >
      <div className="absolute left-1/2 top-0 max-w-[150px] -z-10 aspect-square w-1/3 origin-top  -translate-x-1/2 scale-[200%] select-none rounded-full  border-black translate-y-8">
        {/* <div className="absolute aspect-square h-[90%]/  translate-x-1.5 rounded-full "></div> */}
        <Image
          alt="blood spot"
          src="/InteractiveAssets/BloodSlide.png"
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
