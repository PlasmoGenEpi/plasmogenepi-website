import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pge-darkest-blue": "#081120",
        "pge-dark-blue": "#0c192c",
        "pge-blue": "#2a4b7b",
        "pge-light-blue": "#375e98",
        "pge-lightest-blue": "5d90dd",
        "pge-darkest-yellow": "",
        "pge-dark-yellow": "",
        "pge-yellow": "#F3B941",
        "pge-light-yellow": "",
        "pge-white": "#e2e2e2",
        "pge-black": "",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        roboto: "var(--font-roboto)",
      },
      darkMode: false,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
