"use client";

import { useState } from "react";

export default function Accordion({
  pages,
}: {
  pages: { id: number; content: string[]; title: string }[];
}) {
  const [openPage, setOpenPage] = useState(0);

  return (
    <div>
      {pages?.map((page, idx) => {
        return (
          <div
            key={idx}
            onClick={(e) => {
              console.log("hi", idx);
              setOpenPage(idx);
            }}
            className={openPage === idx ? "collapse-open collapse" : "collapse"}
          >
            <div className="collapse-title text-2xl font-medium">
              <h2>{page.title}</h2>
            </div>
            <div className="collapse-content">
              {page.content.map((text, z) => {
                return (
                  <p className="" key={z}>
                    {text}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

{
  /* <div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div>
<div class="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div class="collapse-title text-xl font-medium">
    Click to open this one and close others
  </div>
  <div class="collapse-content">
    <p>hello</p>
  </div>
</div> */
}
