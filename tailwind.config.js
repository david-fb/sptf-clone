/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#000000',   // Color principal
        'secondary-dark': '#121212', // Color secundario
        'tertiary-dark': '#1f1f1f',  // Color terciario
      },
    },
  },
  plugins: [],
}

