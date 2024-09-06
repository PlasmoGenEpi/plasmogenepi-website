export default function InlinePlus({ minus }: { minus?: boolean }) {
  return (
    <svg
      aria-label="plus"
      className="inline-block"
      width={"1.5em"}
      viewBox="0 0 12 12"
    >
      <circle
        r={5}
        cx={6}
        cy={6}
        fill="transparent"
        className="stroke-black stroke-[0.5px]"
      ></circle>
      <path d="M3.5,6 L8.5,6" className="stroke-black stroke-[0.5px]"></path>
      {!minus && (
        <path d="M6,3.5 L6,8.5" className="stroke-black stroke-[0.5px]"></path>
      )}
    </svg>
  );
}
