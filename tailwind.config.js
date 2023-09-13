/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light_cyan: "#66c6c1",
        dark_blue: "#1c2151",
        medium_blue: "#2264ab",
        light_blue: "#2592ab",
        light_blue_cyan: "#30a1a7",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
    },
  },
  plugins: [],
};
