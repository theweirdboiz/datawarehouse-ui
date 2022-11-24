/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        backgroundPrimary: "rgba(56, 171, 211, 0.8)",
        backgroundSecondary: "rgba(56, 171, 211, 0.55)",
        borderPrimary: "rgba(213, 233, 253, 0.8)",
        borderGray: "rgba(255, 255, 255, 0.02)",
      },
    },
  },
  plugins: [],
};
