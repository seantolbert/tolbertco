module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4dcfff",
        // primary: '#ff7c4d',
        secondary: "#99e4ff",
        // secondary: '#ffb499',
        highlight: "#ffd642",
        // highlight: "#426bff",
        dark: "#474747",
        // dark: "#f4f4f4",
        darkGrey: "#7b7b7b",
        // darkGrey: "#999",
        lightGrey: "#999",
        // lightGrey: "7b7b7b",
        light: "#f4f4f4",
        // light: "#474747",
        // primary: "#4dcfff",
        // primaryLight: '#ff7c4d',
        // secondary: "#99e4ff",
        // secondaryLight: '#ffb499',
        // highlight: "#ffff00",
        // dark: "#474747",
        // darkGrey: "#7b7b7b",
        // lightGrey: "#999",
        // light: "#f4f4f4",
      },
      boxShadow: {
        smallDark: "3px 3px 5px #353535, -3px -3px 5px #c1c1c1",
        medDark: "8px 8px 20px #353535, -8px -8px 16px #c1c1c1",
        pressedMedDark:
          "inset 3px 3px 5px #353535, inset -3px -3px 5px #c1c1c1",
        primaryGlow: "0 0 2px #4dcfff",
        smallLightGrey: "5px 5px 10px #656565, -5px -5px 10px #cdcdcd"
      },
    },
    plugins: [],
  },
};
