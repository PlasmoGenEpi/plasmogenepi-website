import { ReactElement, useRef } from "react";

export default function InteractiveStandardForm({
  title,
  instructions,
  content,
}: {
  title: string | ReactElement;
  instructions?: string | ReactElement;
  content?: ReactElement;
  complete?: boolean;
}) {
  const topOfInteractiveRef = useRef(null);
  return (
    <form className="flex flex-col gap-8">
      {/* <a className="invisible focus-visible:visible">Top of page</a> */}
      {typeof title === "string" ? (
        <h1 className="font-bold text-2xl ">{title}</h1>
      ) : (
        title
      )}
      {typeof instructions === "string" ? (
        <p className="[font-size:17px]">{instructions}</p>
      ) : (
        instructions
      )}
      <div className="mt-8 @container/main">{content}</div>
      {/* <div className="@container">
        <div className="@lg:h-20 bg-red-500 @md:h-40 @sm:h-60"></div>
      </div> */}
    </form>
  );
}
