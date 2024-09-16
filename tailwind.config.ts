import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /to-(cloneBlue|cloneGreen|cloneOrange|cloneRed|cloneYellow)/,
    },
    {
      pattern: /via-(cloneBlue|cloneGreen|cloneOrange|cloneRed|cloneYellow)/,
    },
    {
      pattern: /-translate-x-([100%]|[200%])/,
    },
  ],
  theme: {
    extend: {
      colors: {
        "pge-darkest-blue": "#081120",
        "pge-dark-blue": "#0c192c",
        "pge-blue": "#2a4b7b",
        "pge-light-blue": "#375e98",
        "pge-lightest-blue": "#5d90dd",
        "pge-darkest-yellow": "",
        "pge-dark-yellow": "#f0a711",
        "pge-yellow": "#F3B941",
        "pge-light-yellow": "",
        "pge-white": "#e2e2e2",
        "pge-black": "",
        "pge-darkest-teal": "#0A191D",
        "pge-dark-teal": "#1D7084",
        "pge-teal": "hsl(191.65deg_63.98%_61.57%)",
        "pge-light-teal": "#",
        "pge-lightest-teal": "#",
        primaryGreen: "#0E5258",
        primaryBlue: "#14828C",
        cloneRed: "#FFB0B0",
        cloneOrange: "#FECC94",
        cloneYellow: "#FEEC96",
        cloneBlue: "#B8E6FA",
        cloneGreen: "#C8EBC3",
        microBrown: "#AA6012",
        microRed: "#E61048",
        microOrange: "#FE8638",
        microGreen: "#6ECC50",
        microTeal: "#16A0AC",
        microBlue: "#4896E8",
        microPurple: "#C45ED8",
        microGrey: "#B4B9BF",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        roboto: "var(--font-roboto)",
        overpass: "var(--font-overpass)",
        helvetica: "var(--font-helvetica)",
      },
      darkMode: false,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: ["class"],

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
