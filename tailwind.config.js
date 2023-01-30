/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      flex: {
        'back' : '-100 -100 -100%'
      },
      zIndex: {
        'bg' : '-100'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
     
    },
  },
  plugins: [],
}
