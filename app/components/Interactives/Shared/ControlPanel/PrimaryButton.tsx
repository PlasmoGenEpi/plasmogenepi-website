export default function PrimaryButton({
  callback,
  disabled,
  text,
  label,
  className,
  first,
  type,
}: {
  type?: "submit" | "reset" | "button";
  first?: boolean;
  className?: string;
  label?: string;
  text: string;
  disabled?: boolean;
  callback: () => void;
}) {
  return (
    <button
      type={type}
      id={first ? "interactive-first" : undefined}
      aria-label={label}
      disabled={disabled}
      onClick={(e) => {
        callback();
      }}
      className={` pointer-events-auto px-8 py-4  text-center text-lg font-extrabold  shadow-sm shadow-black  transition-transform duration-75 focus:outline-2 focus:outline-offset-2 focus:outline-amber-400 active:scale-95 active:transition-transform active:duration-75  disabled:opacity-20 ${className}`}
    >
      {text}
    </button>
  );
}
