/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        backgroundPrimary: "#162443",
        borderGray: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
