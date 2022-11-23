/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        backgroundPrimary: "#0E5E6F",
        borderGray: "rgba(255, 255, 255, 0.02)",
      },
    },
  },
  plugins: [],
};
