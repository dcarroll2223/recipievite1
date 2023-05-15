/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#f5cdcb',
          200: '#2d0125',
        },
      },
      fontFamily: {
        body: ['Nunito'],
      },
    },
  },
  plugins: [],
};
