/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        cl: '1.8rem',
      },
      keyframes: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss'), require('process'), require('autoprefixer'), require('@tailwindcss/line-clamp')],
};
