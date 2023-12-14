import { memo, useState } from "react";
import { Box } from "./Box";
export const ReadDragPreview = memo(function ReadDragPreview({
  text,
  specials,
  specials2,
}: {
  specials2;
  specials: {
    color: string;
    [key: number]: string;
  };
  text: string;
}) {
  return (
    <div className="inline-block">
      <Box text={text} preview specials={specials} specials2={specials2} />
    </div>
  );
});
