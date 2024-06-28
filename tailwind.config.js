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
        lightgraySpike: '#dfdfdf',
        graySpike: '#d9d9d9',
        grayestSpike: '#8e8d8d',
        blackSpike: '#262626',
        whitestSpike: '#fafafa',
      },
      fontFamily: {
        redHat: ['Red Hat Display', 'sans-serif'],
      },
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(#ffffff33_1px, #00091d_1px)',
      },
      backgroundSize: {
        'custom-size': '20px 20px',
      },
    },
  },
  plugins: [],
}

