import { phaseAtom, dragDropQuestionsAtom } from "@/store";
import { useAtomValue } from "jotai";
import { useState } from "react";

export default function MicrohalotypeLabels({
  xOffset,
  yOffset,
  size,
  readRowHeight,
}: {
  size: number;
  readRowHeight: number;
  xOffset: number;
  yOffset: number;
}) {
  const phase = useAtomValue(phaseAtom);
  const readTwoQuestions = useAtomValue(dragDropQuestionsAtom);
  const [mergeMicro, setMergeMicro] = useState(false);
  return (
    <div className="text-black">
      <p
        style={{
          display: phase >= 10 ? "none" : "block",
          left: phase < 10 ? 744 : 584,
          top: phase < 10 ? 364 : 312,
        }}
        className="absolute left-[584px] top-[312px] w-[260px] text-base italic transition-all duration-500"
      >
        Unlike the microhaplotypes you have seen before, these are composed of 4
        SNPs!
      </p>
      <div
        style={{
          // top: phase < 10 ? 72 : 56,
          top: yOffset + 48 + readRowHeight,
          left: xOffset + size * 19.5,
        }}
        className={
          "growUp250 absolute flex h-10 w-fit border-4 border-[#AA6012] font-bold shadow-sm shadow-black transition-all duration-500 "
        }
      >
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span className="mt-2">G</span>
        </div>
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span className="mt-2">A</span>{" "}
        </div>
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span className="mt-2">G</span>{" "}
        </div>
        <div className="flex aspect-square items-center justify-center ">
          <span className="mt-2">A</span>{" "}
        </div>
      </div>
      <div
        style={{
          // top: phase < 10 ? 72 : 56,
          top: yOffset + 48 + readRowHeight * 5,
          left: xOffset + size * 19.5,
        }}
        className={
          "growUp250 absolute flex  h-10 w-fit border-4 border-[#E61048] font-bold shadow-sm shadow-black transition-all duration-500"
        }
      >
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span className="mt-2">G</span>
        </div>
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span className="mt-2">A</span>{" "}
        </div>
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span
            style={{
              WebkitTextStroke: "black",
              WebkitTextStrokeWidth: "1px",
              color: "white",
            }}
            className="mt-2"
          >
            A
          </span>{" "}
        </div>
        <div className="flex aspect-square items-center justify-center ">
          <span className="mt-2">A</span>{" "}
        </div>
      </div>
      <div
        style={{
          // top: phase < 10 ? 72 : 56,
          top: yOffset + 48 + readRowHeight * 8,
          left: xOffset + size * 19.5,
        }}
        className={
          "growUp250 absolute flex h-10 w-fit border-4 border-[#FE8638] font-bold shadow-sm shadow-black transition-all duration-500"
        }
      >
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span
            style={{
              WebkitTextStroke: "black",
              WebkitTextStrokeWidth: "1px",
              color: "white",
            }}
            className="mt-2"
          >
            C
          </span>
        </div>
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span className="mt-2">A</span>{" "}
        </div>
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span
            style={{
              WebkitTextStroke: "black",
              WebkitTextStrokeWidth: "1px",
              color: "white",
            }}
            className="mt-2"
          >
            A
          </span>{" "}
        </div>
        <div className="flex aspect-square items-center justify-center ">
          <span
            style={{
              WebkitTextStroke: "black",
              WebkitTextStrokeWidth: "1px",
              color: "white",
            }}
            className="mt-2"
          >
            C
          </span>{" "}
        </div>
      </div>
      <div
        // disabled={phase !== 12}
        // onClick={(e) => {
        //   console.log("clicked");
        //   setMergeMicro(!mergeMicro);
        // }}
        style={{
          // top: phase < 10 ? 72 : 56,
          top: yOffset + 48 + readRowHeight * 11,
          left: xOffset + size * 19.5,
        }}
        className={
          mergeMicro
            ? "growUp250 pointer-events-auto absolute flex  h-10 w-[136px]  border-4 border-[#FE8638] font-bold shadow-sm shadow-black transition-all duration-500"
            : "growUp250 pointer-events-auto absolute flex  h-10 w-[136px] border-4 border-[#16A0AC] font-bold shadow-sm shadow-black transition-all duration-500"
        }
      >
        <div className="flex aspect-square h-8 basis-full items-center justify-center border-r-2">
          <span
            style={{
              WebkitTextStroke: "black",
              WebkitTextStrokeWidth: "1px",
              color: "white",
            }}
            className="mt-2"
          >
            C
          </span>
        </div>
        <div className="flex aspect-square h-8 basis-full items-center justify-center border-r-2">
          <span
            style={
              mergeMicro
                ? {}
                : {
                    WebkitTextStroke: "black",
                    WebkitTextStrokeWidth: "1px",
                    color: "white",
                  }
            }
            className="mt-2"
          >
            {mergeMicro ? "A" : "T"}
          </span>{" "}
        </div>
        <div className="flex aspect-square h-8 basis-full items-center justify-center border-r-2">
          <span
            style={{
              WebkitTextStroke: "black",
              WebkitTextStrokeWidth: "1px",
              color: "white",
            }}
            className="mt-2"
          >
            A
          </span>{" "}
        </div>
        <div className="flex aspect-square h-8 basis-full items-center justify-center ">
          <span
            style={{
              WebkitTextStroke: "black",
              WebkitTextStrokeWidth: "1px",
              color: "white",
            }}
            className="mt-2"
          >
            C
          </span>{" "}
        </div>
      </div>
      <div
        style={{
          top: yOffset + 48 + readRowHeight,
          left: xOffset + size * 48.5,
        }}
        className={
          "growUp250 absolute flex h-10 w-fit border-4 border-[#C45ED8] font-bold shadow-sm shadow-black transition-all duration-500"
        }
      >
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span className="mt-2">T</span>
        </div>
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span
            // style={{
            //   WebkitTextStroke: "black",
            //   WebkitTextStrokeWidth: "1px",
            //   color: "white",
            // }}
            className="mt-2"
          >
            A
          </span>{" "}
        </div>
        <div className="flex aspect-square items-center justify-center ">
          <span className="mt-2">T</span>{" "}
        </div>
      </div>
      <div
        style={{
          top: yOffset + 48 + readRowHeight * 6,
          left: xOffset + size * 48.5,
        }}
        className={
          "growUp250 absolute flex h-10 w-fit border-4 border-[#4896E8] font-bold shadow-sm shadow-black transition-all duration-500"
        }
      >
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span
            style={{
              WebkitTextStroke: "black",
              WebkitTextStrokeWidth: "1px",
              color: "white",
            }}
            className="mt-2"
          >
            G
          </span>
        </div>
        <div className="flex aspect-square items-center justify-center border-r-2">
          <span
            style={{
              WebkitTextStroke: "black",
              WebkitTextStrokeWidth: "1px",
              color: "white",
            }}
            className="mt-2"
          >
            G
          </span>{" "}
        </div>
        <div className="flex aspect-square items-center justify-center ">
          <span
            style={{
              WebkitTextStroke: "black",
              WebkitTextStrokeWidth: "1px",
              color: "white",
            }}
            className="mt-2"
          >
            T
          </span>{" "}
        </div>
      </div>
    </div>
  );
}
