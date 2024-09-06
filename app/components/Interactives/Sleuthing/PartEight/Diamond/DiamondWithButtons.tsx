import { partEightDiamondPairViewedAtom } from "@/data/Interactives/interactiveStore";
import { useAtom } from "jotai";

export default function DiamondWithButtons({
  activePair,
  setActivePair,
}: {
  activePair: {
    1: "A" | "B" | "C" | "D" | null;
    2: "A" | "B" | "C" | "D" | null;
  };
  setActivePair: (activePair: {
    1: "A" | "B" | "C" | "D" | null;
    2: "A" | "B" | "C" | "D" | null;
  }) => {};
}) {
  const [partEightDiamondPairViewed, setPartEightDiamondPairViewed] = useAtom(
    partEightDiamondPairViewedAtom,
  );
  return (
    <svg viewBox="0 0 3763 2255" overflow="hidden">
      <g transform="translate(-311 -105)">
        <g>
          <g>
            <g>
              <g
                className={`${activePair[1] === null ? "opacity-100" : activePair[1] === "A" || activePair[2] === "A" ? "opacity-100" : "opacity-50"}`}
              >
                {/* Person TOP */}
                <path
                  d="M2247.67 192.446C2247.67 220.272 2225.21 242.829 2197.51 242.829 2169.8 242.829 2147.34 220.272 2147.34 192.446 2147.34 164.62 2169.8 142.062 2197.51 142.062 2225.21 142.062 2247.67 164.62 2247.67 192.446Z"
                  fill="#21272A"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M2122.26 301.615C2111.5 329.699 2110.77 366.12 2111 382.565 2111.07 387.728 2114.51 392.293 2119.41 393.941L2127.83 396.783 2134.52 399.469C2138.93 401.24 2141.88 405.441 2142.05 410.188L2146.91 541.943C2147.15 548.411 2152.46 553.531 2158.94 553.531L2236.08 553.531C2242.55 553.531 2247.86 548.411 2248.1 541.943L2252.96 410.2C2253.13 405.446 2256.09 401.242 2260.51 399.473L2267.24 396.781 2275.79 393.925C2280.7 392.286 2284.15 387.714 2284.2 382.538 2284.37 366.079 2283.5 329.684 2272.76 301.615 2258.82 265.227 2247.67 263.823 2236.52 259.624 2225.38 255.425 2175.21 255.425 2161.28 259.623 2147.34 263.822 2136.19 265.227 2122.26 301.615Z"
                  fill="#21272A"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                {/* Circle Person TOP */}
                <path
                  d="M53.1997 27.9998C53.1997 41.9167 41.9172 53.1997 27.9998 53.1997 14.0825 53.1997 2.79998 41.9167 2.79998 27.9998 2.79998 14.083 14.0825 2.79998 27.9998 2.79998 41.9172 2.79998 53.1997 14.083 53.1997 27.9998"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1.03572 2172 305)"
                />
              </g>
            </g>
          </g>
          <text
            fill="#000000"
            fill-opacity="1"
            font-family="Arial,Arial_MSFontService,sans-serif"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            font-size="83"
            text-anchor="start"
            direction="ltr"
            writing-mode="lr-tb"
            unicode-bidi="normal"
            text-decoration="none"
            transform="matrix(1 0 0 1 2002 214)"
          >
            A
          </text>
          <g>
            <g>
              <g
                className={`${activePair[1] === null ? "opacity-100" : activePair[1] === "B" || activePair[2] === "B" ? "opacity-100" : "opacity-50"}`}
              >
                {" "}
                {/* Person RIGHT */}
                <path
                  d="M3887.67 1019.45C3887.67 1047.27 3865.21 1069.83 3837.51 1069.83 3809.8 1069.83 3787.34 1047.27 3787.34 1019.45 3787.34 991.62 3809.8 969.062 3837.51 969.062 3865.21 969.062 3887.67 991.62 3887.67 1019.45Z"
                  fill="#21272A"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M3762.26 1128.62C3751.5 1156.7 3750.77 1193.12 3751 1209.56 3751.07 1214.73 3754.51 1219.29 3759.41 1220.94L3767.83 1223.78 3774.52 1226.47C3778.93 1228.24 3781.88 1232.44 3782.05 1237.19L3786.91 1368.94C3787.15 1375.41 3792.46 1380.53 3798.94 1380.53L3876.08 1380.53C3882.55 1380.53 3887.86 1375.41 3888.1 1368.94L3892.96 1237.2C3893.13 1232.45 3896.09 1228.24 3900.51 1226.47L3907.24 1223.78 3915.79 1220.92C3920.7 1219.29 3924.15 1214.71 3924.2 1209.54 3924.37 1193.08 3923.5 1156.68 3912.76 1128.62 3898.82 1092.23 3887.67 1090.82 3876.52 1086.62 3865.38 1082.42 3815.21 1082.42 3801.28 1086.62 3787.34 1090.82 3776.19 1092.23 3762.26 1128.62Z"
                  fill="#21272A"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                {/* Circle Person RIGHT */}
                <path
                  d="M53.2 28C53.2 41.917 41.9174 53.2 28 53.2 14.0826 53.2 2.8 41.917 2.8 28 2.8 14.0831 14.0826 2.8 28 2.8 41.9174 2.8 53.2 14.0831 53.2 28"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1.03572 3812 1132)"
                />
              </g>
            </g>
          </g>
          <text
            fill="#000000"
            fill-opacity="1"
            font-family="Arial,Arial_MSFontService,sans-serif"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            font-size="83"
            text-anchor="start"
            direction="ltr"
            writing-mode="lr-tb"
            unicode-bidi="normal"
            text-decoration="none"
            transform="matrix(1 0 0 1 3633.97 1042)"
          >
            B
          </text>
          <g>
            <g>
              <g
                className={`${activePair[1] === null ? "opacity-100" : activePair[1] === "C" || activePair[2] === "C" ? "opacity-100" : "opacity-50"}`}
              >
                {" "}
                {/* Person LEFT */}
                <path
                  d="M607.673 1019.45C607.673 1047.27 585.213 1069.83 557.507 1069.83 529.801 1069.83 507.341 1047.27 507.341 1019.45 507.341 991.62 529.801 969.062 557.507 969.062 585.213 969.062 607.673 991.62 607.673 1019.45Z"
                  fill="#21272A"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M482.258 1128.62C471.503 1156.7 470.773 1193.12 471 1209.56 471.072 1214.73 474.513 1219.29 479.405 1220.94L487.832 1223.78 494.517 1226.47C498.926 1228.24 501.88 1232.44 502.055 1237.19L506.914 1368.94C507.152 1375.41 512.464 1380.53 518.937 1380.53L596.077 1380.53C602.55 1380.53 607.863 1375.41 608.101 1368.94L612.959 1237.2C613.135 1232.45 616.094 1228.24 620.51 1226.47L627.235 1223.78 635.792 1220.92C640.701 1219.29 644.149 1214.71 644.202 1209.54 644.368 1193.08 643.504 1156.68 632.755 1128.62 618.821 1092.23 607.673 1090.82 596.524 1086.62 585.376 1082.42 535.211 1082.42 521.276 1086.62 507.341 1090.82 496.192 1092.23 482.258 1128.62Z"
                  fill="#21272A"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                {/* Circle Person LEFT */}
                <path
                  d="M53.2 28C53.2 41.917 41.9174 53.2 28 53.2 14.0826 53.2 2.8 41.917 2.8 28 2.8 14.0831 14.0826 2.8 28 2.8 41.9174 2.8 53.2 14.0831 53.2 28"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1.03572 532 1132)"
                />
              </g>
            </g>
          </g>
          <text
            fill="#000000"
            fill-opacity="1"
            font-family="Arial,Arial_MSFontService,sans-serif"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            font-size="83"
            text-anchor="start"
            direction="ltr"
            writing-mode="lr-tb"
            unicode-bidi="normal"
            text-decoration="none"
            transform="matrix(1 0 0 1 361.807 1042)"
          >
            C
          </text>
          <g>
            <g>
            <g
                className={`${activePair[1] === null ? "opacity-100" : activePair[1] === "D" || activePair[2] === "D" ? "opacity-100" : "opacity-50"}`}
              >                {/* Person BOTTOM */}
                <path
                  d="M2247.67 1969.45C2247.67 1997.27 2225.21 2019.83 2197.51 2019.83 2169.8 2019.83 2147.34 1997.27 2147.34 1969.45 2147.34 1941.62 2169.8 1919.06 2197.51 1919.06 2225.21 1919.06 2247.67 1941.62 2247.67 1969.45Z"
                  fill="#21272A"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M2122.26 2078.62C2111.5 2106.7 2110.77 2143.12 2111 2159.56 2111.07 2164.73 2114.51 2169.29 2119.41 2170.94L2127.83 2173.78 2134.52 2176.47C2138.93 2178.24 2141.88 2182.44 2142.05 2187.19L2146.91 2318.94C2147.15 2325.41 2152.46 2330.53 2158.94 2330.53L2236.08 2330.53C2242.55 2330.53 2247.86 2325.41 2248.1 2318.94L2252.96 2187.2C2253.13 2182.45 2256.09 2178.24 2260.51 2176.47L2267.24 2173.78 2275.79 2170.92C2280.7 2169.29 2284.15 2164.71 2284.2 2159.54 2284.37 2143.08 2283.5 2106.68 2272.76 2078.62 2258.82 2042.23 2247.67 2040.82 2236.52 2036.62 2225.38 2032.42 2175.21 2032.43 2161.28 2036.62 2147.34 2040.82 2136.19 2042.23 2122.26 2078.62Z"
                  fill="#21272A"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          <g>
            <g>
              <g>
                {/* Circle Person BOTTOM */}
                <path
                  d="M53.1997 27.9998C53.1997 41.9167 41.9172 53.1997 27.9998 53.1997 14.0825 53.1997 2.79998 41.9167 2.79998 27.9998 2.79998 14.083 14.0825 2.79998 27.9998 2.79998 41.9172 2.79998 53.1997 14.083 53.1997 27.9998"
                  fill="#FFFFFF"
                  fill-rule="nonzero"
                  fill-opacity="1"
                  transform="matrix(1 0 0 1.01786 2172 2083)"
                />
              </g>
            </g>
          </g>
          <text
            fill="#000000"
            fill-opacity="1"
            font-family="Arial,Arial_MSFontService,sans-serif"
            font-style="normal"
            font-variant="normal"
            font-weight="400"
            font-stretch="normal"
            font-size="83"
            text-anchor="start"
            direction="ltr"
            writing-mode="lr-tb"
            unicode-bidi="normal"
            text-decoration="none"
            transform="matrix(1 0 0 1 2006.9 1992)"
          >
            D
          </text>
          {/* Line A to B */}
          <path
            d="M2453.21 371.611 3583.1 998.412 3579.76 1004.42 2449.87 377.623ZM2448.88 388.864 2431.5 363.5 2462.22 364.816ZM3584.09 987.17 3601.47 1012.53 3570.75 1011.22Z"
            fill="#AEAEAE"
            fill-rule="nonzero"
            fill-opacity="1"
          />
          {/* Line A to C */}
          <path
            d="M21.6338 8.29532 1246.14 701.4 1242.76 707.383 18.2473 14.2784ZM17.1591 25.5123 0 0 30.7053 1.58013ZM1247.23 690.166 1264.39 715.678 1233.69 714.098Z"
            fill="#AEAEAE"
            fill-rule="nonzero"
            fill-opacity="1"
            transform="matrix(1 0 0 -1 710.5 1079.18)"
          />
          {/* Line C to D */}
          <path
            d="M731.443 1248.41 1952.87 2067.88 1949.04 2073.59 727.612 1254.12ZM725.676 1265.24 710.5 1238.5 740.997 1242.4ZM1954.81 2056.76 1969.99 2083.5 1939.49 2079.6Z"
            fill="#AEAEAE"
            fill-rule="nonzero"
            fill-opacity="1"
          />
          {/* Line B to D */}
          <path
            d="M21.6338 8.29532 1246.14 701.4 1242.76 707.383 18.2473 14.2784ZM17.1591 25.5123 0 0 30.7053 1.58013ZM1247.23 690.166 1264.39 715.678 1233.69 714.098Z"
            fill="#AEAEAE"
            fill-rule="nonzero"
            fill-opacity="1"
            transform="matrix(1 0 0 -1 2384.5 2083.18)"
          />
          <path
            d="M1299 723.5C1299 676.832 1338.4 639 1387 639 1435.6 639 1475 676.832 1475 723.5 1475 770.168 1435.6 808 1387 808 1338.4 808 1299 770.168 1299 723.5Z"
            fill="#FFFFFF"
            fill-rule="evenodd"
            fill-opacity="1"
          />
          {/* Button A to C */}
          <g className="pointer-events-none">
            <g>
              <g>
                <circle
                  r={100}
                  tabIndex={0}
                  cx="1386"
                  cy="720"
                  width="200"
                  height="200"
                  fill="transparent"
                  onClick={() => {
                    if (
                      activePair &&
                      activePair[1] === "A" &&
                      activePair[2] === "C"
                    ) {
                      console.log("called");
                      setActivePair({
                        1: null,
                        2: null,
                      });
                    } else {
                      setActivePair({
                        1: "A",
                        2: "C",
                      });
                    }
                    setPartEightDiamondPairViewed({
                      ...partEightDiamondPairViewed,
                      AC: true,
                    });
                  }}
                  className={`${(activePair && activePair[1] === "A" && activePair[2]) === "C" ? "stroke-primaryBlue stroke-[16px]" : "stroke-black stroke-[8px]"} pointer-events-auto cursor-pointer  focus:outline-none`}
                ></circle>{" "}
                <path
                  d="M1386.5 629.062C1335.99 629.048 1295.02 669.986 1295.01 720.5 1294.99 771.014 1335.93 811.976 1386.45 811.99 1436.96 812.005 1477.92 771.067 1477.94 720.553 1477.94 720.543 1477.94 720.534 1477.94 720.524 1477.96 670.038 1437.06 629.089 1386.57 629.062 1386.55 629.062 1386.52 629.062 1386.5 629.062ZM1386.5 807.176C1338.64 807.19 1299.84 768.407 1299.82 720.551 1299.81 672.694 1338.59 633.887 1386.45 633.873 1434.3 633.858 1473.11 672.641 1473.12 720.498 1473.12 720.509 1473.12 720.52 1473.12 720.531 1473.08 768.357 1434.33 807.12 1386.5 807.183Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M1387.7 678.424 1382.89 678.424 1382.89 718.094 1343.19 718.094 1343.19 722.906 1382.89 722.906 1382.89 762.643 1387.7 762.643 1387.7 722.906 1427.41 722.906 1427.41 718.094 1387.7 718.094 1387.7 678.424Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          <path
            d="M2929 690C2929 643.056 2968.4 605 3017 605 3065.6 605 3105 643.056 3105 690 3105 736.944 3065.6 775 3017 775 2968.4 775 2929 736.944 2929 690Z"
            fill="#FFFFFF"
            fill-rule="evenodd"
            fill-opacity="1"
          />
          {/* Button A to B */}
          <g className="pointer-events-none">
            <g>
              <g>
                <circle
                  r={100}
                  tabIndex={0}
                  cx="3016"
                  cy="688"
                  width="200"
                  height="200"
                  fill="transparent"
                  // stroke="black"
                  // strokeWidth="2px"
                  // className="stroke-black stroke-2"
                  onClick={() => {
                    if (
                      activePair &&
                      activePair[1] === "A" &&
                      activePair[2] === "B"
                    ) {
                      console.log("called");
                      setActivePair({
                        1: null,
                        2: null,
                      });
                    } else {
                      setActivePair({
                        1: "A",
                        2: "B",
                      });
                    }
                    setPartEightDiamondPairViewed({
                      ...partEightDiamondPairViewed,
                      AB: true,
                    });
                  }}
                  className={`${(activePair && activePair[1] === "A" && activePair[2]) === "B" ? "stroke-primaryBlue stroke-[16px]" : "stroke-black stroke-[8px]"} pointer-events-auto cursor-pointer  focus:outline-none`}
                ></circle>{" "}
                <path
                  d="M3015.5 596.062C2964.99 596.048 2924.02 636.986 2924.01 687.5 2923.99 738.014 2964.93 778.976 3015.45 778.99 3065.96 779.005 3106.92 738.067 3106.94 687.553 3106.94 687.543 3106.94 687.534 3106.94 687.524 3106.96 637.038 3066.06 596.089 3015.57 596.062 3015.55 596.062 3015.52 596.062 3015.5 596.062ZM3015.5 774.176C2967.64 774.19 2928.84 735.407 2928.82 687.551 2928.81 639.694 2967.59 600.887 3015.45 600.873 3063.3 600.858 3102.11 639.641 3102.12 687.498 3102.12 687.509 3102.12 687.52 3102.12 687.531 3102.08 735.357 3063.33 774.12 3015.5 774.183Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M3016.7 645.424 3011.89 645.424 3011.89 685.094 2972.19 685.094 2972.19 689.906 3011.89 689.906 3011.89 729.643 3016.7 729.643 3016.7 689.906 3056.41 689.906 3056.41 685.094 3016.7 685.094 3016.7 645.424Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          <path
            d="M2902 1773C2902 1726.06 2941.4 1688 2990 1688 3038.6 1688 3078 1726.06 3078 1773 3078 1819.94 3038.6 1858 2990 1858 2941.4 1858 2902 1819.94 2902 1773Z"
            fill="#FFFFFF"
            fill-rule="evenodd"
            fill-opacity="1"
          />
          {/* Button B to D */}
          <g className="pointer-events-none">
            <g>
              <g>
                <circle
                  r={100}
                  tabIndex={0}
                  cx="2989"
                  cy="1769"
                  width="200"
                  height="200"
                  fill="transparent"
                  // stroke="black"
                  // strokeWidth="2px"
                  // className="stroke-black stroke-2"
                  onClick={() => {
                    if (
                      activePair &&
                      activePair[1] === "B" &&
                      activePair[2] === "D"
                    ) {
                      console.log("called");
                      setActivePair({
                        1: null,
                        2: null,
                      });
                    } else {
                      setActivePair({
                        1: "B",
                        2: "D",
                      });
                    }
                    setPartEightDiamondPairViewed({
                      ...partEightDiamondPairViewed,
                      BD: true,
                    });
                  }}
                  className={`${(activePair && activePair[1] === "B" && activePair[2]) === "D" ? "stroke-primaryBlue stroke-[16px]" : "stroke-black stroke-[8px]"} pointer-events-auto cursor-pointer  focus:outline-none`}
                ></circle>{" "}
                <path
                  d="M2989.5 1678.06C2938.99 1678.05 2898.02 1718.99 2898.01 1769.5 2897.99 1820.01 2938.93 1860.98 2989.45 1860.99 3039.96 1861.01 3080.92 1820.07 3080.94 1769.55 3080.94 1769.54 3080.94 1769.53 3080.94 1769.52 3080.96 1719.04 3040.06 1678.09 2989.57 1678.06 2989.55 1678.06 2989.52 1678.06 2989.5 1678.06ZM2989.5 1856.18C2941.64 1856.19 2902.84 1817.41 2902.82 1769.55 2902.81 1721.69 2941.59 1682.89 2989.45 1682.87 3037.3 1682.86 3076.11 1721.64 3076.12 1769.5 3076.12 1769.51 3076.12 1769.52 3076.12 1769.53 3076.08 1817.36 3037.33 1856.12 2989.5 1856.18Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M2990.7 1727.42 2985.89 1727.42 2985.89 1767.09 2946.19 1767.09 2946.19 1771.91 2985.89 1771.91 2985.89 1811.64 2990.7 1811.64 2990.7 1771.91 3030.41 1771.91 3030.41 1767.09 2990.7 1767.09 2990.7 1727.42Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          <path
            d="M1299 1728C1299 1681.06 1338.4 1643 1387 1643 1435.6 1643 1475 1681.06 1475 1728 1475 1774.94 1435.6 1813 1387 1813 1338.4 1813 1299 1774.94 1299 1728Z"
            fill="#FFFFFF"
            fill-rule="evenodd"
            fill-opacity="1"
          />
          {/* Button C to D */}
          <g className="pointer-events-none">
            <g>
              <g>
                <circle
                  r={100}
                  tabIndex={0}
                  cx="1387"
                  cy="1724"
                  width="200"
                  height="200"
                  fill="transparent"
                  // stroke="black"
                  // strokeWidth="2px"
                  // className="stroke-black stroke-2"
                  onClick={() => {
                    if (
                      activePair &&
                      activePair[1] === "C" &&
                      activePair[2] === "D"
                    ) {
                      console.log("called");
                      setActivePair({
                        1: null,
                        2: null,
                      });
                    } else {
                      setActivePair({
                        1: "C",
                        2: "D",
                      });
                    }
                    setPartEightDiamondPairViewed({
                      ...partEightDiamondPairViewed,
                      CD: true,
                    });
                  }}
                  className={`${(activePair && activePair[1] === "C" && activePair[2]) === "D" ? "stroke-primaryBlue stroke-[16px]" : "stroke-black stroke-[8px]"} pointer-events-auto cursor-pointer  focus:outline-none`}
                ></circle>{" "}
                <path
                  d="M1386.5 1633.06C1335.99 1633.05 1295.02 1673.99 1295.01 1724.5 1294.99 1775.01 1335.93 1815.98 1386.45 1815.99 1436.96 1816.01 1477.92 1775.07 1477.94 1724.55 1477.94 1724.54 1477.94 1724.53 1477.94 1724.52 1477.96 1674.04 1437.06 1633.09 1386.57 1633.06 1386.55 1633.06 1386.52 1633.06 1386.5 1633.06ZM1386.5 1811.18C1338.64 1811.19 1299.84 1772.41 1299.82 1724.55 1299.81 1676.69 1338.59 1637.89 1386.45 1637.87 1434.3 1637.86 1473.11 1676.64 1473.12 1724.5 1473.12 1724.51 1473.12 1724.52 1473.12 1724.53 1473.08 1772.36 1434.33 1811.12 1386.5 1811.18Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M1387.7 1682.42 1382.89 1682.42 1382.89 1722.09 1343.19 1722.09 1343.19 1726.91 1382.89 1726.91 1382.89 1766.64 1387.7 1766.64 1387.7 1726.91 1427.41 1726.91 1427.41 1722.09 1387.7 1722.09 1387.7 1682.42Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          {/* Line A to D */}
          <path
            d="M2194.22 615.369 2208.42 1765.37 2201.55 1765.45 2187.35 615.454ZM2177.09 620.168 2190.5 592.5 2204.59 619.828ZM2218.68 1760.66 2205.27 1788.32 2191.18 1761Z"
            fill="#AEAEAE"
            fill-rule="nonzero"
            fill-opacity="1"
          />
          {/* Line C to B */}
          <path
            d="M3640.06 1170.11 818.424 1164.98 818.437 1158.1 3640.07 1163.24ZM3635.51 1152.92 3662.98 1166.72 3635.46 1180.42ZM822.975 1175.3 795.5 1161.5 823.025 1147.8Z"
            fill="#AEAEAE"
            fill-rule="nonzero"
            fill-opacity="1"
          />
          <path
            d="M2111 930C2111 883.056 2150.4 845 2199 845 2247.6 845 2287 883.056 2287 930 2287 976.944 2247.6 1015 2199 1015 2150.4 1015 2111 976.944 2111 930Z"
            fill="#FFFFFF"
            fill-rule="evenodd"
            fill-opacity="1"
          />
          {/* Button A to D */}
          <g className="pointer-events-none">
            <g>
              <g>
                <circle
                  r={100}
                  tabIndex={0}
                  cx="2199"
                  cy="926"
                  width="200"
                  height="200"
                  fill="transparent"
                  // stroke="black"
                  // strokeWidth="2px"
                  // className="stroke-black stroke-2"
                  onClick={() => {
                    if (
                      activePair &&
                      activePair[1] === "A" &&
                      activePair[2] === "D"
                    ) {
                      console.log("called");
                      setActivePair({
                        1: null,
                        2: null,
                      });
                    } else {
                      setActivePair({
                        1: "A",
                        2: "D",
                      });
                    }
                    setPartEightDiamondPairViewed({
                      ...partEightDiamondPairViewed,
                      AD: true,
                    });
                  }}
                  className={`${(activePair && activePair[1] === "A" && activePair[2]) === "D" ? "stroke-primaryBlue stroke-[16px]" : "stroke-black stroke-[8px]"} pointer-events-auto cursor-pointer  focus:outline-none`}
                ></circle>{" "}
                <path
                  d="M2198.5 836.062C2147.99 836.048 2107.02 876.986 2107.01 927.5 2107 978.014 2147.93 1018.98 2198.45 1018.99 2248.96 1019.01 2289.92 978.067 2289.94 927.553 2289.94 927.543 2289.94 927.534 2289.94 927.524 2289.96 877.038 2249.06 836.089 2198.57 836.062 2198.55 836.062 2198.52 836.062 2198.5 836.062ZM2198.5 1014.18C2150.64 1014.19 2111.84 975.407 2111.82 927.55 2111.81 879.694 2150.59 840.887 2198.45 840.873 2246.3 840.858 2285.11 879.641 2285.13 927.498 2285.13 927.509 2285.13 927.52 2285.13 927.531 2285.08 975.357 2246.33 1014.12 2198.5 1014.18Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M2199.7 885.424 2194.89 885.424 2194.89 925.094 2155.19 925.094 2155.19 929.906 2194.89 929.906 2194.89 969.643 2199.7 969.643 2199.7 929.906 2239.41 929.906 2239.41 925.094 2199.7 925.094 2199.7 885.424Z"
                  fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
          <path
            className="pointer-events-none"
            d="M1602 1169.5C1602 1122.83 1641.4 1085 1690 1085 1738.6 1085 1778 1122.83 1778 1169.5 1778 1216.17 1738.6 1254 1690 1254 1641.4 1254 1602 1216.17 1602 1169.5Z"
            fill="#FFFFFF"
            fill-rule="evenodd"
            fill-opacity="1"
          />
          {/* Button C to B */}
          <g className="pointer-events-none">
            <g>
              <g>
                <circle
                  r={100}
                  tabIndex={0}
                  cx="1690"
                  cy="1166"
                  width="200"
                  height="200"
                  fill="transparent"
                  // stroke="black"
                  // strokeWidth="2px"
                  // className="stroke-black stroke-2"
                  onClick={() => {
                    if (
                      activePair &&
                      activePair[1] === "B" &&
                      activePair[2] === "C"
                    ) {
                      console.log("called");
                      setActivePair({
                        1: null,
                        2: null,
                      });
                    } else {
                      setActivePair({
                        1: "B",
                        2: "C",
                      });
                    }
                    setPartEightDiamondPairViewed({
                      ...partEightDiamondPairViewed,
                      BC: true,
                    });
                  }}
                  className={`${(activePair && activePair[1] === "B" && activePair[2]) === "C" ? "stroke-primaryBlue stroke-[16px]" : "stroke-black stroke-[8px]"} pointer-events-auto cursor-pointer  focus:outline-none`}
                ></circle>{" "}
                <path
                  d="M1689.5 1075.06C1638.99 1075.05 1598.02 1115.99 1598.01 1166.5 1597.99 1217.01 1638.93 1257.98 1689.45 1257.99 1739.96 1258.01 1780.92 1217.07 1780.94 1166.55 1780.94 1166.54 1780.94 1166.53 1780.94 1166.52 1780.96 1116.04 1740.06 1075.09 1689.57 1075.06 1689.55 1075.06 1689.52 1075.06 1689.5 1075.06ZM1689.5 1253.18C1641.64 1253.19 1602.84 1214.41 1602.82 1166.55 1602.81 1118.69 1641.59 1079.89 1689.45 1079.87 1737.3 1079.86 1776.11 1118.64 1776.12 1166.5 1776.12 1166.51 1776.12 1166.52 1776.12 1166.53 1776.08 1214.36 1737.33 1253.12 1689.5 1253.18Z"
                  // fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
                <path
                  d="M1690.7 1124.42 1685.89 1124.42 1685.89 1164.09 1646.19 1164.09 1646.19 1168.91 1685.89 1168.91 1685.89 1208.64 1690.7 1208.64 1690.7 1168.91 1730.41 1168.91 1730.41 1164.09 1690.7 1164.09 1690.7 1124.42Z"
                  // fill="#000000"
                  fill-rule="nonzero"
                  fill-opacity="1"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
