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
      animation: {
        'animation-bouncii': 'bouncee 4.5s linear infinite',
        'animation-bouncii-rev': 'bouncerev 4.5s linear infinite',
        'animation-rotatee': 'rotatee 60s linear infinite',
        'animation-rotatee-rev': 'rotateerev 60s linear infinite'
      }
    },
  },
  plugins: [],
}