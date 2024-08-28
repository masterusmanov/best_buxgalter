/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      kaushan: ["Kaushan Script", "sans-serif"],
    },
    dropShadow: {
      "2xl": "#D35E25",
      "3xl": "#073843",
    },
  },
  plugins: [],
};

