import { useState } from "react";

export function ModuleCopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <h6 className="mb-4 text-xl font-bold">Module Code</h6>
      {/* <button
        onMouseLeave={() => {
          setCopied(false);
        }}
        onBlur={() => {
          setCopied(false);
        }}
        onClick={() => {
          navigator.clipboard.writeText(`${code}`);
          setCopied(true);
        }}
        className="tooltip [--tooltip-color:#ffffff] [--tooltip-tail:.5rem] [--tooltip-text-color:black] focus:tooltip-open before:p-4 before:pb-3 before:text-xl before:ring-2  before:ring-interactiveBlue after:border-t-interactiveBlue after:[color:blue]"
        data-tip={`Copy ${code}`}
        // className="copy-tooltip clicked:text-red-500 ml-auto p-2 pb-1 underline "
      >
        Copy Text
      </button> */}
      {/* <p className="text-center text-2xl ">{code}</p> */}
      <div className="border-2/  min-h-8 ml-8 w-fit border-interactiveBlue text-lg font-bold">
        <div className="flex items-center gap-4">
          <span className="ml-auto block translate-y-0.5">{code}</span>
          {/* <div className="bg-red-300/ flex items-center rounded bg-interactiveBlue/20 p-1.5"> */}
          <button
            aria-label={`Copy ${code}`}
            onMouseLeave={() => {
              setCopied(false);
            }}
            onBlur={() => {
              setCopied(false);
            }}
            onClick={() => {
              navigator.clipboard.writeText(`${code}`);
              setCopied(true);
            }}
            data-tip={copied ? `Copied!` : `Copy`}
            // data-tip={copied ? `Copied! ${code}` : `Copy: ${code}`}
            className={`bg-red-300/ before:max-w-fit/ before:ring-interactiveBlue/ after:border-t-interactiveBlue/ before:ring-2/ border/ tooltip flex items-center rounded border-zinc-200 p-1 font-normal [--tooltip-color:#f4f4f4]  [--tooltip-tail:.5rem] [--tooltip-text-color:black] before:p-2 before:pb-1 before:text-sm before:transition-none after:transition-none hover:bg-zinc-200`}
          >
            <svg
              width="12pt"
              height="12pt"
              version="1.1"
              viewBox="0 0 1200 1200"
              className="stroke-current stroke-[24px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m281.02 870.42c15.234 0 27.562 12.328 27.562 27.562s-12.328 27.562-27.562 27.562h-24.375c-40.266 0-76.875-16.453-103.41-42.984s-42.984-63.141-42.984-103.41v-620.68c0-40.266 16.453-76.875 42.984-103.41s63.141-42.984 103.41-42.984h425.9c40.266 0 76.875 16.453 103.41 42.984s42.984 63.141 42.984 103.41v26.016c0 15.188-12.328 27.562-27.562 27.562s-27.562-12.328-27.562-27.562v-26.016c0-25.078-10.266-47.906-26.812-64.5-16.547-16.547-39.375-26.812-64.5-26.812h-425.9c-25.078 0-47.906 10.266-64.5 26.812-16.547 16.547-26.859 39.375-26.859 64.5v620.68c0 25.078 10.312 47.859 26.859 64.453 16.547 16.547 39.375 26.859 64.5 26.859h24.375zm236.44-595.92h425.9c40.266 0 76.875 16.453 103.41 42.984s42.984 63.141 42.984 103.41v620.68c0 40.266-16.453 76.875-42.984 103.41s-63.141 42.984-103.41 42.984h-425.9c-40.266 0-76.875-16.453-103.41-42.984s-42.984-63.141-42.984-103.41v-620.68c0-40.266 16.453-76.875 42.984-103.41s63.141-42.984 103.41-42.984zm425.9 55.125h-425.9c-25.078 0-47.906 10.266-64.5 26.859-16.547 16.547-26.812 39.375-26.812 64.453v620.68c0 25.078 10.266 47.906 26.812 64.5 16.547 16.547 39.375 26.812 64.5 26.812h425.9c25.078 0 47.906-10.266 64.5-26.812 16.547-16.547 26.859-39.375 26.859-64.5v-620.68c0-25.078-10.312-47.859-26.859-64.453-16.547-16.547-39.375-26.859-64.5-26.859z" />
            </svg>
          </button>
          {/* </div> */}
        </div>
        {/* {code} */}
      </div>
    </div>
  );
}
