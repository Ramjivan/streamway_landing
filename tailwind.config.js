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
      // => @media (min-width: 1536px) { ... }

      // custom 
      'tb': '900px',
      'vsm': '340px',

    },
    extend: {
      backgroundImage: {
        'Call-to-action': "url('../pages/images/calltoactionbgimg.svg')",
        'Solution-Religious-Banner': "url('../pages/images/solution-relious-banner.png')",
        'Solution-Fitness-Banner': "url('../pages/images/fitness_banner.png')",
        'Solution-Game-Banner': "url('../pages/images/GameBannerImage.png')",
        'Testimonal-bg-img': "url('../pages/images/testimonalBgImg.png')",
        'Testimonal-maharaj' : "url('../pages/images/maharaj.png')"
      },
      animation: {
        'animation-cmntbouncii': 'cmntbouncee 5.5s linear infinite',
        'animation-cmntbouncii-rev': 'cmntbouncerev 5.5s linear infinite',
        'animation-rotatee': 'rotatee 120s linear infinite',
        'animation-rotatee-rev': 'rotateerev 120s linear infinite',
        'animation-bouncii': 'bouncee 4.5s linear infinite',
        'animation-bouncii-rev': 'bouncerev 4.5s linear infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee2': 'marquee2 35s linear infinite',
      }
    },
  },
  plugins: [],
}