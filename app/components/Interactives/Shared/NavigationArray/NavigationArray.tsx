import { ReactNode } from "react";

export default function NavigationArray({
  className,
  childComponents,
  invisible,
}: {
  invisible?: boolean;
  className?: string;
  childComponents: ReactNode[];
}) {
  return (
    <div
      className={`${className ? className : ""} mx-auto grid grid-cols-2 place-items-center gap-6 gap-y-4 transition-all duration-1000 sm:grid-cols-3 lg:grid-cols-6 ${invisible ? "fadeOut1000 invisible" : "fadeIn1000"}`}
    >
      {childComponents.map((node, idx) => {
        return node;
      })}
    </div>
  );
}
