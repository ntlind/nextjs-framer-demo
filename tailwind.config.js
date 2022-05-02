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
    extend: {},
  },
  plugins: [],
};
