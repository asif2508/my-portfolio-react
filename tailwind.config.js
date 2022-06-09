/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#370875",

          "secondary": "#3fdd39",

          "accent": "#0c4366",

          "neutral": "#342135",

          "base-100": "#242343",

          "info": "#64C5DD",

          "success": "#7AE6DD",

          "warning": "#F6D46F",

          "error": "#EE3F68",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
