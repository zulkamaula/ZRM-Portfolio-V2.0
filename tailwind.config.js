/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./public/index.html'],
  theme: {
    container: {
      center: true,
      padding: '18px'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#2c3754',
        secondary: '#64748b'
      },
      screens: {
        '2xl': '1024px'
      }
    },
  },
  plugins: [],
}
