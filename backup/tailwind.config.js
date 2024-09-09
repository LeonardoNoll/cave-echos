/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['"Minecraft"', "sans-serif"]
      },
      boxShadow: {
        "outer-white": "0 0 0 2px white"
      },
    }
  },
  plugins: [],
}