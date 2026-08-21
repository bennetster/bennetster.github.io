const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#c2410c',
          light: '#ea580c',
        },
        ink: '#111827',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Sora', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
