/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Snow UI palette
        snow: {
          bg: 'hsl(var(--background))',
          purple: '#E5ECF6',
          blue: '#E3F5FF',
          cyan: '#A8C5DA',
          black: {
            DEFAULT: '#1C1C1C',
            '33': '#1C1C1C33',
            '66': '#1C1C1C66',
          },
        },
      },
    },
  },
  plugins: [],
}
