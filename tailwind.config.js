const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**", "./public/**"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // 'dark-pink': '#FF9191',
        // 'green': '#B4FF9F',
        'pink': '#FFA1A1',
        'orange': '#FFD59E',
        // 'semi-light-pink': '#FFC7C7',
        // 'light-pink': '#FFDEDE',
        'light-pink': '#FFB0B0',
        'dark-blue': '#236e96',
        'light-blue': '#15b2d3',
        'accent-blue': '#00A4C4'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}