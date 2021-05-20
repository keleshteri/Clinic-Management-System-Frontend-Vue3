const defaultTheme = require('tailwindcss/defaultTheme');
whitelist = ["gray", "red", "orange", "yellow", "green", "teal", "blue", "purple", "pink"].reduce(
  (result, color) => result.push(`text-${color}-600`, `bg-${color}-600`, `bg-${color}-500`) && result, [])

module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue, js}'],
    options: {
      whitelist,
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
