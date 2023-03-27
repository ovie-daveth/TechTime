/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "background": "#004DB3",
      "light-background": "#CCDBF0",
      "audio":"#3FA96A",
      "live": "rgba(247, 158, 142, 0.2)",
      "recorded":"rgba(146, 105, 205, 0.2)",
      "notes":"rgba(217, 217, 217, 1)",
      "section": "rgba(248, 249, 252, 1)",
      "cardcolor": "rgba(255, 255, 255, 1)",
      "black": "#000F24",
      "gray": "#2A2A2B",
      "gray2": "rgb(194, 189, 189)",
      "white": "#ffff",
      "transparent": 'transparent',
      "blue": 'rgb(7, 7, 177) !important',
      "yellow": '#FFBE4E',
      "lightgrey": '#A1A1A1',
      'star': '#F6B435',
      'genrebgcolor': 'rgba(30, 93, 206, 0.2)',
      'genrecolor': 'rgba(30, 93, 206, 1)',
      'footer': '#000F24',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Tech: ['Satisfy', 'cursive'],
      open: ['Open Sans', 'sans-serif'],
      Clash: ['IBM Plex Sans', 'sans-serif'],
      satoshi: ['Archivo', 'sans-serif'],
    },
    fontweight: {
      bold: '700'
    },
    fontSize: {
      normal: '16px',
      header: '45px',
      logo: '40px',
      md: "10px",
      lg: '25px',
      sm: '12px',
    },
    lineHeight: {
      header: '47px',
    },
    extend: {
      scale: {
        '-1': '-1'
      },
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
  plugins: [],
}