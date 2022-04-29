module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./page-sections/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#00b0ff",
      secondary: "#1886E4",
      tertiary: "#33C0FF",
      green: "#00ff51",
      yellow: "#ffd500",
      coral: "#ff5500",
      gray: "#4B4B4B",
      purple: "#2600ff",
      lightGrayText: "#959595",
      black: "#000",
      white: "#fff",
      nearWhite: "#ccc",
      nearBlack: "#111111",
      lightGrayBackground: "#F5F7FC",
      eggshell: "#fafafa",
    },
    extend: {},
  },
  fontFamily: {
    sans: ["Poppins"],
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
};
