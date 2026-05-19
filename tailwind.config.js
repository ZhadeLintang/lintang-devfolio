/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#f8f5ef',
        black: '#111111',
        primary: '#ffd84d',
        secondary: '#6aa9ff',
        accent: '#ff8ad8',
        success: '#b6ff7a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        brutal: '8px 8px 0px 0px rgba(17, 17, 17, 1)',
        'brutal-hover': '4px 4px 0px 0px rgba(17, 17, 17, 1)',
        'brutal-active': '0px 0px 0px 0px rgba(17, 17, 17, 1)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
