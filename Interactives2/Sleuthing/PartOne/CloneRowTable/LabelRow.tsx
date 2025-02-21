export default function LabelRow() {
  return (
    <div className="grid grid-cols-12 px-1">
      {Array(12)
        .fill(0)
        .map((el, idx) => {
          return (
            <span
              className="inline-block text-center text-xs font-normal first-letter:text-sm"
              key={idx + 1}
            >
              L{idx + 1}
            </span>
          );
        })}
    </div>
  );
}
