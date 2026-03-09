module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}",
  ],
  safelist: [
    "bg-babyRed", "hover:bg-babyRed",
    "bg-babyGreen", "hover:bg-babyGreen",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0000FF",
        babyBlue : "#80DAEB",
        primaryViolet: "#8A2BE2",
        darkBlack: "#0A0A0A",
        lightWhite: "#FFFFFF",
        babyPurple: "#C8A2C8",
        babyRed: "#FF6961",
        babyGreen: "#77DD77"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    }
  },
  plugins: [],
};