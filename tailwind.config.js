/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#590F76",
        secondary: "#f1cdfd",
        extraClr: "#6a2386",
        darkPulple: "#42045a",
        lightPurple: "#c868eb",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
