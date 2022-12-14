/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animationDirection: {
				"alternate-reverse": "alternate-reverse",
			},

      animation: {
        // fade: 'fadeOut 2s linear ',
        // bounceele: 'bouncest 5s liner infinite',
        'animation-bouncei':'bouncei 3.5s linear infinite'
      },

      // that is actual animation
      // keyframes: theme => ({
      //   fadeOut: {
      //     '0%': { left : '0px'},
      //     '100%': { left : '-700px'  },
      //   }
        

        
        
      // }),
    },
  },
  plugins: [],
}
