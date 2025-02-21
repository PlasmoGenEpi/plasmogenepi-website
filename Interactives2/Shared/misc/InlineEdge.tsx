export default function InlineEdge({ arrow }: { arrow?: boolean }) {
  return (
    <svg
      overflow="visible"
      aria-label="edge"
      className="inline-block -translate-y-0.5"
      width={"1.5em"}
      viewBox="0 0 12 12"
    >
      <defs>
        <marker
          id={`triangle`}
          viewBox="0 0 10 10"
          refX="1"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="4"
          markerHeight="4"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className={"fill-black"} />
        </marker>
      </defs>
      <polyline
        markerStart={arrow ? "url(#triangle)" : undefined}
        markerEnd={arrow ? "url(#triangle)" : undefined}
        className="stroke-black stroke-[.75px]"
        points={arrow ? `2,6 8,6` : `2,5 8.5,8`}
      />
      {!arrow && (
        <g>
          <circle
            cx={2}
            cy={5}
            r={1}
            className="fill-black stroke-black "
          ></circle>
          <circle
            cx={8.5}
            cy={8}
            r={1}
            className="fill-black stroke-black "
          ></circle>
        </g>
      )}
    </svg>
  );

  return (
    <svg
      overflow="visible"
      aria-label="edge"
      className="inline-block"
      width={"1.5em"}
      viewBox="0 0 12 12"
    >
      <defs>
        <marker
          id={`triangle`}
          viewBox="0 0 10 10"
          refX="1"
          refY="5"
          markerUnits="strokeWidth"
          markerWidth="4"
          markerHeight="4"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className={"fill-black"} />
        </marker>
      </defs>
      <polyline
        markerStart={"url(#triangle)"}
        markerEnd="url(#triangle)"
        className="stroke-black stroke-[.75px]"
        points={`2,5 8.5,8`}
      />
    </svg>
  );
}
