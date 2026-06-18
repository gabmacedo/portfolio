/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', '"Tai Heritage Pro"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#101114',
        paper: '#f4f1e8',
        terminal: '#141816',
        neon: '#00f5d4',
        signal: '#ff3df2',
        acid: '#c8ff4d',
      },
      boxShadow: {
        pixel: '6px 6px 0 #101114',
        neon: '0 0 22px rgba(0, 245, 212, 0.32)',
      },
    },
  },
  plugins: [],
};
