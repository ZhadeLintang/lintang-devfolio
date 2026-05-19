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
        darkBg: '#030308',
        cardBg: 'rgba(10, 10, 22, 0.4)',
        pitchBlack: '#000000',
        neonPurple: '#a855f7',
        cyanGlow: '#06b6d4',
        softWhite: '#f3f4f6',
        primary: '#a855f7',
        secondary: '#06b6d4',
        accent: '#ec4899',
        mutedGray: '#9ca3af',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.4)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.4)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        'brutal-neon': '4px 4px 0px 0px #06b6d4, 8px 8px 0px 0px #a855f7',
      },
      backgroundImage: {
        'cyber-grid': 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 1px, transparent 1px)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 0 10px rgba(6, 182, 212, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(168, 85, 247, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
