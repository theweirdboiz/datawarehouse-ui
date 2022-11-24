/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#1a3251",
        backgroundPrimary: "#1a3251",
        linkColor: "rgb(20,66,144)",
        backgroundSecondary: "rgba(255, 255, 255, 0.02)",
        borderPrimary: "rgba(255, 255, 255, 0.2)",
        borderGray: "rgba(255, 255, 255, 0.02)",
      },
    },
  },
  plugins: [],
};
