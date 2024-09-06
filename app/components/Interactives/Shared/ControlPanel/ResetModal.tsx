"use client";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import ReactModal from "react-modal";

export const resetConfirmOpenAtom = atom(false);

export default function ResetPrompt({
  resetCallback,
}: {
  resetCallback: () => void;
}) {
  const [resetConfirmOpen, setResetConfirmOpen] = useAtom(resetConfirmOpenAtom);

  useEffect(() => {
    if (window !== undefined && document) {
      let x = document.querySelector("main");
      if (x) {
        ReactModal.setAppElement(x);
      }
    }
  }, []);

  return (
    <div className="px-8">
      <ReactModal
        isOpen={resetConfirmOpen}
        style={{
          overlay: {
            zIndex: 1000,
            padding: "16px",
            backgroundColor: "#000000a0",
          },
        }}
        contentLabel="Confirm Reset Modal"
        className=" relative left-1/2 top-1/2 z-[999] flex min-h-60 w-fit -translate-x-1/2 -translate-y-1/2 flex-col bg-white outline outline-8 outline-primaryGreen"
      >
        <svg
          className="absolute left-1/2 mx-auto -translate-x-1/2 -translate-y-2"
          width="96pt"
          height="96pt"
          version="1.1"
          viewBox="0 0 1200 1200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect width="1200" height="1200" fill="transparent" />
            <path
              d="m600 285.12c-173.78 0-314.88 141.1-314.88 314.88 0 173.78 141.1 314.88 314.88 314.88 173.79 0 314.88-141.1 314.88-314.88 0-173.79-141.1-314.88-314.88-314.88zm0 62.977c139.02 0 251.91 112.89 251.91 251.91s-112.88 251.9-251.91 251.9c-139.02 0-251.9-112.88-251.9-251.9s112.88-251.91 251.9-251.91zm0 377.86c17.383 0 31.488 14.109 31.488 31.488 0 17.383-14.105 31.488-31.488 31.488-17.379 0-31.488-14.105-31.488-31.488 0-17.379 14.109-31.488 31.488-31.488zm-31.488-283.39v220.42c0 17.379 14.109 31.484 31.488 31.484 17.383 0 31.488-14.105 31.488-31.484v-220.42c0-17.383-14.105-31.488-31.488-31.488-17.379 0-31.488 14.105-31.488 31.488z"
              fill="#ff814a"
            />
          </g>
        </svg>
        <div className="mt-24 grow">
          <h2 className="py-2 text-center text-2xl">Are you sure?</h2>
          <p className="min-w-[300px] p-4">
            Resetting will clear data for this exercise and any others that
            depend on it.
          </p>
          <div className="flex justify-between p-4">
            <button
              onClick={() => {
                setResetConfirmOpen(false);
              }}
              className={`pointer-events-auto border-2 px-4 py-2  text-center text-lg  transition-transform duration-75 hover:bg-zinc-50 focus:outline-2 focus:outline-offset-2 focus:outline-amber-400 active:scale-95  active:transition-transform active:duration-75`}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (resetCallback) {
                  resetCallback();
                  setResetConfirmOpen(false);
                }
              }}
              className={`pointer-events-auto border-2 px-4 py-2  text-center text-lg   transition-transform duration-75 hover:bg-zinc-50 focus:outline-2 focus:outline-offset-2 focus:outline-amber-400 active:scale-95  active:transition-transform active:duration-75`}
            >
              Reset
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
