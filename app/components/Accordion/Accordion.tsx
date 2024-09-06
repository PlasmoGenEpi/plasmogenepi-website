"use client";
import { ReactNode, useCallback, useState } from "react";
import AccordionElement from "./AccordionElement";

export default function Accordion({
  elements,
}: {
  elements: {
    title: ReactNode;
    content: ReactNode;
  }[];
}) {
  const [openModules, setOpenModules] = useState<number[]>([]);
  return (
    <ol className="grid">
      {elements.map((el, idx) => {
        return (
          <AccordionElement
            setOpenModules={setOpenModules}
            openModules={openModules}
            content={el.content}
            id={idx}
            title={el.title}
            key={idx}
          />
        );
      })}
    </ol>
  );
}
