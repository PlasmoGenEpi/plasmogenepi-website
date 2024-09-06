"use client";
import { SetStateAction } from "jotai";
import { Dispatch, ReactNode } from "react";
import CloneElement from "./CloneElement";

export const cloneRowButtonColors: { [key: number]: string } = {
  1: "to-cloneRed via-cloneRed border border-microRed",
  2: "to-cloneBlue via-cloneBlue border border-microBlue",
  3: "to-cloneYellow via-cloneYellow border border-[#e6e600]",
  4: "to-cloneGreen via-cloneGreen border border-microGreen",
  5: "to-cloneOrange via-cloneOrange border border-microOrange",
};

export const cloneRowColors: { [key: number]: string } = {
  1: "bg-cloneRed border border-microRed",
  2: "bg-cloneBlue border border-microBlue",
  3: "bg-cloneYellow border border-border-[#e6e600]",
  4: "bg-cloneGreen border border-microGreen",
  5: "bg-cloneOrange border border-microOrange",
};

export default function CloneRow({
  id,
  classNames,
  callback,
  disabled,
  label,
  children,
  wrapperOnly,
}: {
  wrapperOnly?: boolean;
  children: ReactNode;
  animation?: boolean;
  label?: string | number;
  disabled?: boolean;
  callback?: (id: number) => void;
  classNames?: {
    wrapper?: string;
    button?: string;
    row?: string;
  };
  id?: number;
}) {
  return (
    <div
      className={` ${classNames?.wrapper ? classNames.wrapper : ""} grid gap-1 font-helvetica [grid-template-columns:8%_auto]`}
    >
      <div>
        <div
          className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${classNames?.button ? classNames?.button : ""}`}
        >
          <div className="flex aspect-square items-center justify-center rounded-full">
            <span className="absolute translate-y-[3px] font-bold">
              {label || id}
            </span>
          </div>
        </div>
      </div>
      <ol
        className={`grid h-full grow grid-cols-12 gap-1 p-1 shadow-sm shadow-black  ${classNames?.row ? classNames.row : ""}`}
      >
        {children}
      </ol>
    </div>
  );

  if (wrapperOnly) {
    return (
      <div
        onClick={(e) => {
          if (callback && id !== undefined) {
            callback(id);
          }
        }}
        aria-label={`lab clone ${id}`}
        className={`grid gap-1 font-helvetica transition-all [grid-template-columns:8%_auto] ${classNames?.wrapper ? classNames?.wrapper : ""}`}
      >
        <div>
          <div
            className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${classNames?.button ? classNames?.button : ""}`}
          >
            <div className="flex aspect-square items-center justify-center rounded-full">
              <span className="absolute translate-y-[3px] font-bold">
                {label || id}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`grid h-full grow grid-cols-12 gap-1 shadow-sm shadow-black  ${classNames?.row ? classNames?.row : ""}`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        if (callback && id !== undefined) {
          callback(id);
        }
      }}
      aria-label={`lab clone ${id}`}
      className={`grid max-w-[500px] gap-1 font-helvetica transition-all [grid-template-columns:8%_auto] hover:scale-105 hover:transition-all disabled:scale-100 ${classNames?.wrapper ? classNames?.wrapper : ""}`}
    >
      <div>
        <div
          className={`aspect-square rounded-full bg-gradient-radial from-[white_20%] ${classNames?.button ? classNames?.button : ""}`}
        >
          <div className="flex aspect-square items-center justify-center rounded-full">
            <span className="absolute translate-y-[3px] font-bold">
              {label || id}
            </span>
          </div>
        </div>
      </div>
      <div
        className={`grid h-full grow grid-cols-12 gap-1 p-1 shadow-sm shadow-black  ${classNames?.row ? classNames?.row : ""}`}
      >
        {children}
      </div>
    </button>
  );
}
