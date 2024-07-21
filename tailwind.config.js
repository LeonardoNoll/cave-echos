/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['"Minecraft"', "sans-serif"]
      }
    }
  },
  plugins: [],
}