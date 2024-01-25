/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'min': '310px', 'max': '1023px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'lg': { 'min': '768px', 'max': '2560px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
    extend: {
      colors: {
        Lightcyan: 'hsl(193, 38%, 86%)',
        NeonGreen: 'hsl(150, 100%, 66%)',
        Grayishblue: 'hsl(217, 19%, 38%)',
        DarkGblue: ' hsl(217, 19%, 24%)',
        Darkblue: 'hsl(218, 23%, 16%)'
      }
    },
  },
  plugins: [],
}

