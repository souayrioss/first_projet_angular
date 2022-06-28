/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : process.env.TAILWIND_MODE ? 'jit' : '',
  content: ['./src/**/*.{ts,html}'],
  darkMode:false,
  theme: {
    extend: {},
  },
  plugins: [],
}
