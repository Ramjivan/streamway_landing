module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      'tb': '900px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'Call-to-action': "url('../pages/images/calltoactionbgimg.svg')",
      },
      animation: {
        'animation-cmntbouncii': 'cmntbouncee 5.5s linear infinite',
        'animation-cmntbouncii-rev': 'cmntbouncerev 5.5s linear infinite',
        'animation-rotatee': 'rotatee 120s linear infinite',
        'animation-rotatee-rev': 'rotateerev 120s linear infinite',
        'animation-bouncii': 'bouncee 4.5s linear infinite',
        'animation-bouncii-rev': 'bouncerev 4.5s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
      }
    },
  },
  plugins: [],
}