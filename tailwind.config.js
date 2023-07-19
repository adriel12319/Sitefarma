/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkgray: "rgba(164, 164, 164, 0.25)",
        gainsboro: "rgba(217, 217, 217, 0.15)",
      },
      fontFamily: {
        inter: "Inter",
        "palanquin-dark": "'Palanquin Dark'",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      xl: "20px",
      "17xl": "36px",
      "5xl": "24px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
