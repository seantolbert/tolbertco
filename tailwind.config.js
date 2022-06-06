module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4dcfff",
        secondary: "#99e4ff",
        highlight: "#ffff00",
        dark: "#474747",
        darkGrey: "#7b7b7b",
        lightGrey: "#999",
        light: "#f4f4f4",
      },
      boxShadow: {
        smallDark: "3px 3px 5px #353535, -3px -3px 5px #c1c1c1",
        medDark: "8px 8px 20px #353535, -8px -8px 16px #c1c1c1",
        pressedMedDark:
          "inset 3px 3px 5px #353535, inset -3px -3px 5px #c1c1c1",
        primaryGlow: "0 0 2px #4dcfff",
      },
    },
    plugins: [require("tailwindcss-animation-delay")],
  },
};
