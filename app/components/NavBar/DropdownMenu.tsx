import { Dispatch, SetStateAction, useState } from "react";

export default function DropdownMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      className="absolute -top-8 right-2 fill-pge-darkest-blue md:hidden"
      onClick={(e) => {
        setOpen(!open);
      }}
    >
      <svg
        width="24pt"
        height="24pt"
        version="1.1"
        viewBox="0 0 1200 1200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="m1075.2 405.6h-952.8c-32.398 0-57.602-26.398-57.602-57.602 0-31.199 26.398-57.602 57.602-57.602h951.6c32.398 0 57.602 26.398 57.602 57.602 0 31.199-25.203 57.602-56.402 57.602z" />
          <path d="m1075.2 662.4h-952.8c-32.398 0-57.602-26.398-57.602-57.602 0-31.199 26.398-57.602 57.602-57.602h951.6c32.398 0 57.602 26.398 57.602 57.602s-25.203 57.602-56.402 57.602z" />
          <path d="m1075.2 918h-952.8c-32.398 0-57.602-26.398-57.602-57.602 0-32.398 26.398-57.602 57.602-57.602h951.6c32.398 0 57.602 26.398 57.602 57.602 1.1992 31.203-25.203 57.602-56.402 57.602z" />
        </g>
      </svg>
    </button>
  );
}
