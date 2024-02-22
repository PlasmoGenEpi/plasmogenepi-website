"use client";
import { useState } from "react";
import { useDragDropManager, useDrop } from "react-dnd";

export default function Trash({
  setReadTrash,
}: {
  setReadTrash: (id: number) => void;
}) {
  const [, drop] = useDrop(
    () => ({
      accept: "read",
      drop(item: { id: number; text: string }, monitor) {
        console.log("drop");
        setReadTrash(item.id);
        // let ab = monitor.getInitialSourceClientOffset();
        // let dropCoords = dropRef.current?.getBoundingClientRect();
        // let coords = monitor.getSourceClientOffset();
        // if (coords && coords.x && ab) {
        //   changeCharStart(
        //     item.id,
        //     Math.round((coords.x - (dropCoords ? dropCoords.x : 0)) / size),
        //     1
        //   );
        // }
        return undefined;
      },
    }),
    [setReadTrash]
  );
  return (
    <div
      style={
        {
          // backgroundColor: isOver ? "black" : "white",
        }
      }
      className="basis-1/2  bg-white shadow-sm shadow-black/50 flex items-center"
      ref={drop}
    >
      <svg
        className="ml-4"
        width="48pt"
        height="48pt"
        version="1.1"
        viewBox="0 0 1200 1200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="m1e3 187.5h-115.38l-40.5-87c-14.375-30.625-45.5-50.5-79.375-50.5h-329.5c-33.75 0-65 19.75-79.375 50.5l-40.5 87h-115.38c-34.5 0-62.5 28-62.5 62.5v75c0 6.875 5.625 12.5 12.5 12.5h50v737.5c0 41.375 33.625 75 75 75h650c41.375 0 75-33.625 75-75v-737.5h50c6.875 0 12.5-5.625 12.5-12.5v-75c0-34.5-28-62.5-62.5-62.5zm-621.38-76.5c10.25-21.875 32.5-36 56.75-36h329.5c24.125 0 46.375 14.125 56.625 36l35.625 76.5h-27.625l-27.25-58.625c-8.125-17.5-26-28.875-45.375-28.875h-313.5c-19.375 0-37.125 11.375-45.375 28.875l-27.25 58.625h-27.625l35.625-76.5zm423.25 76.5h-403.62l22.375-48.125c4.125-8.75 13-14.375 22.625-14.375h313.5c9.625 0 18.625 5.625 22.625 14.375l22.375 48.125zm173.25 887.5c0 27.625-22.375 50-50 50h-650.12c-27.625 0-50-22.375-50-50v-737.5h750v737.5zm62.5-762.5h-875.12v-62.5c0-20.625 16.875-37.5 37.5-37.5h800c20.625 0 37.5 16.875 37.5 37.5v62.5z" />
          <path d="m600 1062.5c27.625 0 50-22.375 50-50v-562.5c0-27.625-22.375-50-50-50s-50 22.375-50 50v562.5c0 27.625 22.375 50 50 50zm-25-612.5c0-13.75 11.25-25 25-25s25 11.25 25 25v562.5c0 13.75-11.25 25-25 25s-25-11.25-25-25z" />
          <path d="m800 1062.5c27.625 0 50-22.375 50-50v-562.5c0-27.625-22.375-50-50-50s-50 22.375-50 50v562.5c0 27.625 22.375 50 50 50zm-25-612.5c0-13.75 11.25-25 25-25s25 11.25 25 25v562.5c0 13.75-11.25 25-25 25s-25-11.25-25-25z" />
          <path d="m400 1062.5c27.625 0 50-22.375 50-50v-562.5c0-27.625-22.375-50-50-50s-50 22.375-50 50v562.5c0 27.625 22.375 50 50 50zm-25-612.5c0-13.75 11.25-25 25-25s25 11.25 25 25v562.5c0 13.75-11.25 25-25 25s-25-11.25-25-25z" />
        </g>
      </svg>
    </div>
  );
}
