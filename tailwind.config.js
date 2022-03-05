module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
    extend: {
      keyframes: {
        'up': {
          '0%': { transform: 'translate' },
          '100%': { transform: 'rotate(3deg)' },
        },
        'vanish': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        'up': 'up 1s ease-in-out infinite',
        'vanish': 'vanish 1s ease-in forwards'
      }
    }
  },
  plugins: [],
}
