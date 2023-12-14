import { memo, useState } from "react";
import { Box } from "./Box";
import { Read2 } from "./Read2";
export const ReadDragPreview2 = memo(function ReadDragPreview2({
  text,
  specials,
}: {
  specials: {
    color: string;
    [key: number]: string;
  };
  text: string;
}) {
  return (
    <div className="inline-block">
      <Read2 text={text} preview specials={specials} />
    </div>
  );
});
