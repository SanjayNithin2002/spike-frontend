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
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },
        underline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        underline: "underline 0.3s ease-in-out forwards",
        slideIn: "slideIn 0.2s ease-out forwards",
      },
    },
  },
  plugins: [
  ],
}
