export default function ResetModalRow({
  id,
  callback,
  checked,
  completion,
  disabled,
  requires,
}: {
  requires: boolean;
  disabled: boolean;
  id: string | number;
  callback: () => void;
  checked: boolean;
  completion: {
    [key: number]: boolean;
  };
}) {
  console.log(id, requires, disabled);

  return (
    <div
      className={`flex px-2 py-4 gap-24 justify-between ${
        requires ? "disabled pointer-events-none" : ""
      }`}
    >
      <div className="flex">
        <label
          className={`${requires ? "opacity-50" : ""}`}
          htmlFor={`interactive-reset-${id}`}
        >{`Step ${id}`}</label>
        <span>
          {requires && (
            <svg
              className=" fill-zinc-600 m-auto mt-2"
              width="16pt"
              height="16pt"
              version="1.1"
              viewBox="0 0 1200 1200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="m880 400c0-154.64-125.36-280-280-280s-280 125.36-280 280v240h80v-240c0-110.46 89.543-200 200-200s200 89.543 200 200v240h80z" />
                <path d="m200 600.23v399.53c0 44.312 35.93 80.234 79.633 80.234h640.73c43.98 0 79.633-35.883 79.633-80.234v-399.53c0-44.312-35.93-80.234-79.633-80.234h-640.73c-43.98 0-79.633 35.883-79.633 80.234z" />
              </g>
            </svg>
          )}
        </span>
      </div>
      <input
        disabled={disabled || requires}
        id={`interactive-reset-${id}`}
        onChange={callback}
        checked={!requires && checked}
        type="checkbox"
        className={`m-4/ mb-auto accent-orange-400 ${
          requires ? "opacity-50 pointer-events-none" : ""
        }`}
      />
    </div>
  );
}
