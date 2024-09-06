/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spaceBlack: '#070724',
        mercuryTheme: '#419EBB',
        earthTheme: '#6D2ED5',
        venusTheme: '#EDA249',
        marsTheme: '#D14C32',
        jupiterTheme: '#D83A34',
        saturnTheme: '#CD5120',
        uranusTheme: '#1EC1A2',
        neptuneTheme: '#2D68F0'

      },
      fontFamily: {
        spartans: 'League Spartan',
        antonio: 'Antonio'
      },
      fontSize: {
        8: '0.5rem',
        9: '0.563rem',
        28: '1.75rem',
        40: '2.5rem'
      },
      height: {
        154: '9.625rem',
        184: '11.5rem',
        213: '13.313rem',
        336: '21rem',
        369: '23.063rem',
        400: '25rem',
        416: '26rem',
        422: '26.375rem',
        450: '28.125rem',
        582: '36.375rem',
      },
      inset: {
        96.5: '26rem',
        97:'30rem',
        98: '33rem',
        99: '36rem',
        100: '39rem'
      },
      lineHeight: {
        22: '1.375rem'
      },
      margin: {
        97: '30rem',
        98: '38.5rem'

      },
      width: {
        154: '9.625rem',
        184: '11.5rem',
        213: '13.313rem',
        281: '17.563rem',
        339: '21.188rem',
        336: '21rem',
        350: '21.875rem',
        369: '23.063rem',
        400: '25rem',
        416: '26rem',
        422: '26.375rem',
        450: '28.125rem',
        582: '36.375rem',
        665: '41.563rem'
      }
    },
  },
  plugins: [],
}

