/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'focus': 'var(--focus)',
        'light': 'var(--light)',
        'dark': 'var(--dark)',
        'grey': 'var(--grey)',
        'hover': 'var(--hover)'
      },
      animation: {
        'stretch': 'width ease'
      }
    },
  },
  plugins: [],
};
