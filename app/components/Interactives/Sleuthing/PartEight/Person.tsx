export default function Person({
  color,
  id,
  circles,
  viewBox,
}: {
  viewBox?: string;
  circles?: string[];
  color?: string;
  id?: string | null;
}) {
  return (
    <svg overflow={"visible"} viewBox={viewBox || "0 0 100 100"}>
      <text
        y={12}
        x={5}
        fontFamily="Arial"
        fontSize={"20px"}
        className="font-bold"
      >
        {id}
      </text>
      {/* <symbol id="person" viewBox={"0 0 100 100"}>
        <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
        <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
        <circle
          r={9}
          cx={50}
          cy={65}
          fill="white"
          className="stroke-black stroke-2"
        ></circle>
        <circle
          r={9}
          cx={40}
          cy={82}
          fill="white"
          className="stroke-black stroke-2"
        ></circle>
        <circle
          r={9}
          cx={60}
          cy={82}
          fill="white"
          className="stroke-black stroke-2"
        ></circle>
      </symbol> */}
      {/* <g>
        <use xlinkHref={"#person"}></use>
      </g> */}
      <path d="m27.082 94.27h45.836c3.7383 0 6.7695-3.0312 6.7695-6.7695v-10.938c0-6.6289-2.6328-12.988-7.3242-17.676-4.6875-4.6914-11.047-7.3242-17.676-7.3242h-9.375c-6.6289 0-12.988 2.6328-17.676 7.3242-4.6914 4.6875-7.3242 11.047-7.3242 17.676v10.938c0 3.7383 3.0312 6.7695 6.7695 6.7695z" />
      <path d="m71.355 27.082c0 11.793-9.5625 21.355-21.355 21.355s-21.355-9.5625-21.355-21.355 9.5625-21.352 21.355-21.352 21.355 9.5586 21.355 21.352" />
    </svg>
  );

  return (
    <svg className={``} version="1.1" viewBox="0 0 1200 1200">
      <g>
        <text
          fill="#000000"
          fill-opacity="1"
          font-family="Arial,Arial_MSFontService,sans-serif"
          font-style="normal"
          font-variant="normal"
          font-weight="400"
          font-stretch="normal"
          font-size="200"
          text-anchor="start"
          direction="ltr"
          writing-mode="lr-tb"
          unicode-bidi="normal"
          text-decoration="none"
          transform="matrix(1 0 0 1 0 300)"
        >
          {id}
        </text>
        <path d="m600.02 399.42c82.227 0 149.12-66.898 149.12-149.14 0-82.227-66.898-149.13-149.12-149.13-82.238 0-149.16 66.898-149.16 149.13 0 82.238 66.91 149.14 149.16 149.14z" />
        <path d="m769.17 441.7h-338.34c-45.629 0-82.754 37.125-82.754 82.754v184.38c0 45.629 37.125 82.754 82.754 82.754h23.371c10.352 0 18.75 8.3984 18.75 18.75v215.83c0 40.07 32.605 72.664 72.664 72.664h108.77c40.059 0 72.664-32.598 72.664-72.664l0.003906-215.82c0-10.352 8.3984-18.75 18.75-18.75h23.371c45.629 0 82.754-37.125 82.754-82.754v-184.39c0-45.629-37.125-82.754-82.754-82.754z" />
        {circles && circles.length === 1 && (
          <circle cx="600" cy="625" r="70" fill={circles[0] ?? color} />
        )}
        {circles && circles.length === 2 && (
          <g>
            <circle cx="600" cy="550" r="70" fill={circles[0]} />
            <circle cx="600" cy="700" r="70" fill={circles[1]} />
          </g>
        )}
        {circles && circles.length === 3 && (
          <g>
            <circle cx="600" cy="550" r="70" fill={circles[0]} />
            <circle cx="525" cy="700" r="70" fill={circles[1]} />
            <circle cx="675" cy="700" r="70" fill={circles[2]} />
          </g>
        )}
      </g>
    </svg>
  );
}
