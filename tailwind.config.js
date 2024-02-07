/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: [],
  theme: {

    extend: {},
  },
  plugins: [require("daisyui")],
  plugins: [require("tailwind-scrollbar")],



};

