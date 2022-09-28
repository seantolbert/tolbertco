module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4dcfff",
        primaryDos: "var(--primary-color)",
        secondary: "#99e4ff",
        highlight: "#ffd642",
        dark: "#474747",
        darkGrey: "#7b7b7b",
        lightGrey: "#999",
        light: "#e3e3e3",
      },
      boxShadow: {
        smallDark: "-9px 9px 18px #2d2d2d, 9px -9px 18px #616161",
        pressedSmallDark: "inset -9px 9px 18px #2d2d2d, inset 9px -9px 18px #616161",
        smallLight: " -9px 9px 18px #9c9c9c, 9px -9px 18px #ffffff;",
        pressedSmallLight: "inset -9px 9px 18px #9c9c9c, inset 9px -9px 18px #ffffff;",
        medDark: "8px 8px 20px #353535, -8px -8px 16px #c1c1c1",
        pressedMedDark:
          "inset 3px 3px 5px #353535, inset -3px -3px 5px #c1c1c1",
      },
    },
    plugins: [],
  },
};
