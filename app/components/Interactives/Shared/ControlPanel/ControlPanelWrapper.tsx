import { ReactNode } from "react";
import PrimaryButton from "./PrimaryButton";
import ResetPrompt, { resetConfirmOpenAtom } from "./ResetModal";
import { findFirstFocusableElement } from "../../helpers";
// import { findFirstFocusableElement } from "@/helpers/helpers";

export default function ControlPanelWrapper({
  fixed,
  children,
  resetCallback,
}: {
  resetCallback: () => void;
  children: ReactNode;
  fixed?: boolean;
}) {
  return (
    <div className="z-[999] bottom-0 w-screen fixed bg-[#0a0a0a]">
      {children}
    </div>
  );

  return (
    <div
      className={`${
        fixed
          ? "fixed bottom-0 left-0 z-[999] border-t-2 border-black bg-zinc-900/80 p-4 backdrop-blur-sm"
          : "mt-8"
      } w-full`}
    >
      {children}
      <button
        onClick={() => {
          let z = document.getElementById("interactive-top");
          if (z) {
            z.focus();
          }
        }}
        className="sr-only absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 text-white focus:not-sr-only focus:absolute focus:px-4 focus:py-2"
      >
        Back to Top
      </button>
      <ResetPrompt
        resetCallback={() => {
          resetCallback();
          let x: HTMLElement | undefined = findFirstFocusableElement(
            document.getElementById("form-interactive")
          );
          x?.focus();
        }}
      />
    </div>
  );
}
