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
        // smallDark: "3px 3px 5px #353535, -3px -3px 5px #c1c1c1",
        smallDark: "-9px 9px 18px #2d2d2d, 9px -9px 18px #616161",
        smallLight: " -9px 9px 18px #9c9c9c, 9px -9px 18px #ffffff;",
        pressedSmallLight: " -9px 9px 18px #9c9c9c, 9px -9px 18px #ffffff;",
        medDark: "8px 8px 20px #353535, -8px -8px 16px #c1c1c1",
        pressedMedDark:
          "inset 3px 3px 5px #353535, inset -3px -3px 5px #c1c1c1",
        // primaryGlow: "0 0 2px #4dcfff",
        // smallLightGrey: "5px 5px 10px #656565, -5px -5px 10px #cdcdcd",
        // neuMenu: "20px 20px 0px #5a5a5a, -20px -20px 0px #ffffff",
        // secondary: " 12px 12px 24px #456773, -12px -12px 24px #edffff",
      },
    },
    plugins: [],
  },
};
