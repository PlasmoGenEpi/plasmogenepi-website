export default function CloneElement({
  possibleValues,
  className,
  val,
  animation,
  callback,
  checked,
  disabled,
  ariaLabel,
}: {
  ariaLabel?: string;
  disabled?: boolean;
  checked?: boolean;
  callback?: () => void;
  animation?: boolean;
  val: 0 | 1 | null;
  className?: string;
  possibleValues: {
    reference: string;
    alternate: string;
  };
}) {
  if (callback) {
    return (
      <button
        aria-label={ariaLabel ? ariaLabel : undefined}
        disabled={disabled}
        role="checkbox"
        aria-checked={checked}
        onClick={(e) => {
          callback();
        }}
        className={`my-auto flex aspect-square items-center justify-center shadow-sm shadow-black ${className}`}
      >
        <span
          // label={`locus ${idx + 1}`}
          key={val}
          className={`${animation ? "letterRoll" : ""} ${val === 1 ? "alternateAllele" : ""} translate-y-[3px] text-lg font-bold leading-6 sm:text-xl`}
        >
          {val === 0
            ? possibleValues?.reference
            : val === 1
              ? possibleValues?.alternate
              : ""}
        </span>
      </button>
    );
  }

  return (
    <li
      className={`my-auto flex aspect-square items-center justify-center  shadow-sm shadow-black ${className}`}
    >
      <span
        // label={`locus ${idx + 1}`}
        key={val}
        className={`${animation ? "letterRoll" : ""} ${val === 1 ? "alternateAllele" : ""} translate-y-[3px] text-lg font-bold leading-6 sm:text-xl`}
      >
        {val === 0
          ? possibleValues?.reference
          : val === 1
            ? possibleValues?.alternate
            : ""}
      </span>
    </li>
  );
}
