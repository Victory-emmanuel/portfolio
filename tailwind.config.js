/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { secondary: "#ff204e", extraClr: "#5D0E41" },
    },
  },
  plugins: [],
};
