export default function InlineCircle({
  className,
  hybrid,
  polyclonal,
}: {
  polyclonal?: 1 | 2;
  className?: string;
  hybrid?: boolean;
}) {
  if (polyclonal === 1) {
    return (
      <span className=" h-[1.25em] w-[1.25em] align-middle dark:brightness-75">
        <span className="inline-block h-[.75em] w-[.75em] -translate-y-[.25em] rounded-full bg-cloneRed"></span>
        <span className="inline-block h-[.75em] w-[.75em] translate-y-[.25em] rounded-full bg-cloneBlue"></span>
      </span>
    );
  }
  if (polyclonal === 2) {
    return (
      <span className=" h-[1.25em] w-[1.25em] align-middle dark:brightness-75">
        <span className="inline-block h-[.75em] w-[.75em] -translate-y-[.25em] rounded-full bg-cloneBlue"></span>
        <span className="inline-block h-[.75em] w-[.75em] translate-y-[.25em] rounded-full bg-cloneGreen"></span>
      </span>
    );
  }

  return (
    <span
      className={`${
        hybrid
          ? "bg-gradient-to-r from-cloneRed via-[#FFB0B0_50%,#B8E6FA_50%] to-cloneBlue dark:brightness-75"
          : "dark:brightness-75"
      } inline-block h-[1.25em] w-[1.25em]    overflow-hidden rounded-full align-middle  ${
        className ? className : ""
      }`}
    ></span>
  );
}
