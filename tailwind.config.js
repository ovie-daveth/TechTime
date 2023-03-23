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
      "white": "#ffff",
      "transparent": 'transparent',

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
      header: '47px',
    },
    lineHeight: {
      header: '47px',
    },
    extend: {},
    borderRadius: {
      '4xl': '2rem',
    }
  },
  plugins: [],
}