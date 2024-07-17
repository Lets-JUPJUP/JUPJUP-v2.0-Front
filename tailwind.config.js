/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#7654ff",
        light: "#f3efff",
        grey100: "#eef0f3",
        grey300: "#d5d9de",
        grey500: "#8d939a",
        white: "#ffffff",
        black: "#09090a",
      },
      translate: {
        "-1/2": "-50%",
      },
    },
  },
  plugins: [],
};
