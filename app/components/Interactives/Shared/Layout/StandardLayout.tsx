import { ReactNode } from "react";

export default function StandardLayout({
  children,
  className,
  complete,
  part,
}: {
  part?: number;
  complete?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div>
      <form
        id="form-interactive"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={`relative grid gap-y-16 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:gap-x-16 sm:[&>div]:mx-auto sm:[&>div]:w-full [&>div]:sm:max-w-[80%] md:[&>div]:mx-0 md:[&>div]:w-auto [&>div]:md:max-w-none ${className}`}
      >
        {children}
      </form>
    </div>
  );
}
