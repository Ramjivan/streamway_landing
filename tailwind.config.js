/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 2s linear ',
        
        fadeRight: 'feadIn 2s linear'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { left : '0px'},
          '100%': { left : '-700px'  },
        },

        feadIn:{
          '0%':{right:'-700px'},
          '100%':{right:'0px'}
        }
      }),
    },
  },
  plugins: [],
}
