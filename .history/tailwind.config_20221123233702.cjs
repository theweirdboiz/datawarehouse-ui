/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        backgroundPrimary: "rgba(56, 171, 211, 0.8)",
        backgroundSecondrary: "rgba(56, 171, 211, 0.53)",
        borderGray: "rgba(255, 255, 255, 0.02)",
      },
    },
  },
  plugins: [],
};
