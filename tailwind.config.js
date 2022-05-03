const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./page-sections/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      nearWhite: "#ccc",
      nearBlack: "#100f0f",
      eggshell: "#fcf6f4",
      theme: {
        DEFAULT: "#3c7cff",
        lighter: "#36C1FF",
        darker: "hsl(240, 25%, 35%)",
        darkest: "hsl(240, 100%, 13%)",
        secondary: "#76d4e4",
      },
    },
    fontFamily: {
      sans: ["Questrial"],
    },
    variants: {
      animation: ["motion-safe"],
      extend: {},
    },
    extend: {
      height: (theme) => ({
        "screen-3/12": "calc(100vh * 3 / 12)",
        "screen-4/12": "calc(100vh * 4 / 12)",
        "screen-5/12": "calc(100vh * 5 / 12)",
        "screen-7/12": "calc(100vh * 7 / 12)",
        "screen-8/12": "calc(100vh * 8 / 12)",
        "screen-9/12": "calc(100vh * 9 / 12)",
        "screen-10/12": "calc(100vh * 10 / 12)",
        "screen-11/12": "calc(100vh * 11 / 12)",
        "screen-13/12": "calc(100vh * 13 / 12)",
        "screen-14/12": "calc(100vh * 14 / 12)",
        "screen-1/2": "50vh",
      }),
    },
  },
  plugins: [],
};
