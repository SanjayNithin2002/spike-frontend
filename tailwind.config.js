/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        openSans: ['"Open Sans"'],
      },
      backgroundImage: {
        'custom-radial-gradient': 'radial-gradient(#ffffff33_1px, #00091d_1px)',
      },
      backgroundSize: {
        'custom-size': '20px 20px',
      },
      
      
    },
  },
  plugins: [
  ],
}
