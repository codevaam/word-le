module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      blueberry: '#5C2D90',
      blueberryLight: '#bdabd2',
      blueberryLight2: '#EEEAF4',
      white: '#fff',
      black: '#000',
      slate: '#94a3b8',
      green: '#22c55e',
      orange: '#f97316',
      cyan: '#06b6d4'
    },
    extends: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}
