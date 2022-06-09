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

          "secondary": "#e30ba6",

          "accent": "#0c4366",

          "neutral": "#342135",

          "base-100": "#242343",

          "info": "#ffffff",

          "success": "#7AE6DD",

          "warning": "#F6D46F",

          "error": "#EE3F68",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
