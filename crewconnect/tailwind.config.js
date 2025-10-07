/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/main/resources/templates/**/*.{html,js,ts}",
    "./src/main/resources/static/**/*.{html,js,ts,css}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F5B400",
        secondary: "#4B5B66",
        accent: "#D99A26",
        neutral: "#2C2C2C",
        background: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
