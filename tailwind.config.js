module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        primaryNeu: "inset 2px 2px 5px #286c85, inset -2px -2px 5px #72ffff",
        secondaryNeu: "inset 2px 2px 5px #507785, inset -2px -2px 5px #e2ffff",
        darkNeu: "inset 2px 2px 5px #252525, inset -2px -2px 5px #696969",
        darkGreyNeu: "10px 10px 20px #565656, -10px -10px 20px #a0a0a0",
        lightGreyNeu: "20px 20px 60px #5d5d5d, -20px -20px 60px #d5d5d5",
        lightNeu: "20px 20px 60px #adadad, -20px -20px 60px #ffffff"
      },
    },
  },
  plugins: [],
};
