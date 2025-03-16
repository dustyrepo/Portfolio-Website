/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-glow': 'pulse-glow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'scale(3)',
          },
          '50%': {
            opacity: '0',
            transform: 'scale(3)',
          },
        },
      },
    },
  },
  plugins: [],
};
