/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      tomato: "hsl(4,100%,67%)",
      darkSlateGray: "hsl(234,29%,20%)",
      charocalGrey: "hsl(235,18%,26%)",
      grey: "hsl(231,7%,60%)",
      mainWhite: "hsl(0,0%,100%)",
      bgError: "rgba(253, 0, 0, 0.14)",
    },
    extend: {},
  },
  plugins: [],
};
