/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redSpike: '#d82525',
        whiteSpike: '#e4e2dd',
        whiterSpike: '#f1f1f1',
      },
      fontFamily: {
        redHat: ['Red Hat Display', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

